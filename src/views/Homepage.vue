<template>
  <div class="vp-homepage">
    <div class="grid grid-cols-3">
      <div class="col-span-3 text-center">
        <div class="text-right">
          <router-link
            to="/add"
            class="px-2 py-2 bg-white border-black border-1"
            >Add</router-link
          >
        </div>
        <h2><strong>Todo List</strong></h2>
        <div v-if="items.length < 0" class="">No Items on you list</div>
        <ul v-else class="block mt-2">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="flex justify-center px-2 py-2 text-lg text-center text-black bg-white border-black"
          >
            <div class="text">{{ item.title }}</div>
            <button class="mr-2">
              <font-awesome-icon icon="trash" @click="remove(index)" />
            </button>
            <button class="">
              <font-awesome-icon icon="edit" @click="edit(index)" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Homepage",
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("todo-load", {
      that: this,
    });
  },
  methods: {
    remove: function(index) {
      this.$store.commit("todo-remove", {
        index,
      });
      this.$store.commit("todo-save", {
        that: this,
      });
    },
    edit: function(index) {
      this.$router.push("/edit/" + index);
    },
  },
  computed: {
    items: function() {
      return this.$store.state.todo.items;
    },
  },
};
</script>
