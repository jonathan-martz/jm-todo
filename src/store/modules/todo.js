export default {
    state: {
        items: []
    },
    mutations: {
        "todo-add": function (state, data) {
            state.items.push(data);
            console.log(data);
        },
        "todo-update": function (state, data) {
            for (let i = 0; i < state.items.length; i++) {
                if (data.index == i) {
                    state.items[i] = { title: data.title }
                }
            }
        },
        "todo-remove": function (state, data) {
            let tmp = [];
            for (let i = 0; i < state.items.length; i++) {
                if (data.index != i) {
                    tmp.push(state.items[i]);
                }
            }
            state.items = tmp;
        },
        "todo-save": function (state, data) {
            data.that.$localStorage.set('todos', JSON.stringify([]));
        },
        "todo-load": function (state, data) {
            if (JSON.parse(data.that.$localStorage.get('todos')).length > 0) {
                state.items = JSON.parse(data.that.$localStorage.get('todos'));
            }
        }
    }
};