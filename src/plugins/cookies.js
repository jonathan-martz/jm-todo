export default {
    install: (app) => {
        app.config.globalProperties.$cookies = {
            get: function (key) {
                let cookies = document.cookie.split(';');
                for(let i = 0;i < cookies.length;i++){
                    let tmp = cookies[i].split('=');
                    if(key == tmp[0]){
                        return tmp[1];
                    }
                }
                return false;
            },
            set: function (name,value,days = 7) {
                let expires = "";
                if (days) {
                    let date = new Date();
                    date.setTime(date.getTime() + (days*24*60*60*1000));
                    expires = "; expires=" + date.toUTCString();
                }
                document.cookie = name + "=" + (value || "")  + expires + "; path=/;Secure";
            }
        };
    }
}