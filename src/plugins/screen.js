export default {
    install: (app) => {
        app.config.globalProperties.$screen = {
            width: function(){
                return window.innerWidth;
            },
            height: function(){
                return window.innerHeight;
            }
        };
    }
}