export default {
    install: (app) => {
        app.config.globalProperties.$localStorage = {
            get: function (key) {
                return localStorage.getItem(key);
            },
            set: function (name, value) {
                localStorage.setItem(name, value);
            }
        };
    }
}