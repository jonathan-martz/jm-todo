export default {
    state: {
        toggle: false
    },
    mutations: {
        "nav-toggle": function (state) {
            state.toggle = !state.toggle;
        },
        "nav-reset": function (state) {
            state.toggle = false;
        }
    }
};