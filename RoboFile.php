<?php
require('.robo/vendor/autoload.php');

use \Robo\Tasks;
use \JmartzGmbh\RoboConfig;

class RoboFile extends Tasks
{
    use RoboConfig;

    public function checkBuild(){
        return 'success';
    }

    public function roboInstall(){
        $this->_exec('cd .robo && composer install');
    }

    public function loadConfig(): array
    {
        $filename = 'anton-config.json';
        $file = file_get_contents($filename);

        return json_decode($file, JSON_FORCE_OBJECT);
    }

    public function yarnInstall(){
        $this->_exec('yarn install');
    }


    public function yarnBuild(){
        $this->_exec('yarn run build:css');
        $this->_exec('yarn run build');
        $this->_exec('workbox generateSW workbox-config.js');
    }

    public function deploy()
    {
        $config = $this->loadConfig();

        $user = $config['server']['user'];
        $host = $config['server']['host'];
        $domain = $config['server']['domain'];
        $tmp = $config['timestamp'];

        $this->taskRsync()
            ->fromPath('./dist')
            ->toHost($host)
            ->toUser($user)
            ->excludeVcs()
            ->toPath('/var/www/' . $domain .'/releases/'.$tmp)
            ->recursive()
            ->run();

            // fix permission
            $this->taskSshExec($host, $user)
            ->remoteDir('/var/www/' . $domain.'/releases/'.$tmp)
            ->exec('chown -R www-data:www-data .')
            ->run();
    }

    public function publishVersion(){
        $config = $this->loadConfig();

        $user = $config['server']['user'];
        $host = $config['server']['host'];
        $domain = $config['server']['domain'];
        $tmp = $config['timestamp'];

        // link new version
        $this->taskSshExec($host, $user)
        ->remoteDir('/var/www/' . $domain.'/releases/')
        ->exec('rm current')
        ->exec('ln -s '.$tmp.' current')
        ->run();

        // remove old version
        $this->taskSshExec($host, $user)
        ->remoteDir('/var/www/' . $domain.'/releases/')
        ->exec('ls -t | tail -n +6 | xargs rm -rf --')
        ->run();
    }
}
