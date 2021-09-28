<template>
  <div class="vp-add">
    <div class="form">
      <div class="grid grid-cols-3 form-group">
        <label class="col-span-1 px-2 py-2"><strong>Title</strong></label>
        <input
          v-model="item.title"
          class="col-span-2 px-2 py-2 bg-white border-black"
          type="text"
        />
        <div class="col-span-3 text-right">
          <button
            @click="update()"
            class="px-2 py-2 my-2 bg-white border-2 border-black rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPage",
  data() {
    return {};
  },
  methods: {
    update: function() {
      this.$store.commit("todo-update", {
        title: this.item.title,
        index: this.$route.params.id,
      });
      this.$store.commit("todo-save", {
        that: this,
      });
      this.$router.push('/');
    },
  },
  computed: {
    item: function() {
      return this.$store.state.todo.items[this.$route.params.id];
    },
  },
};
</script>
