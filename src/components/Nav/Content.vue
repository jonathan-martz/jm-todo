<template>
  <div class="vc-nav-content" v-if="toggle">
    <div class="grid grid-cols-4">
      <div class="col-span-4 sm:col-span-2 md:col-span-1">
        <router-link to="/impressum" class="block px-3 py-2 mx-1 mb-2 text-center text-gray-300 bg-gray-500 rounded"
          >Impressum</router-link
        >
      </div>
      <div class="col-span-4 sm:col-span-2 md:col-span-1">
        <router-link to="/impressum" class="block px-3 py-2 mx-1 mb-2 text-center text-gray-300 bg-gray-500 rounded"
          >Impressum</router-link
        >
      </div>
      <div class="col-span-4 sm:col-span-2 md:col-span-1">
        <router-link to="/impressum" class="block px-3 py-2 mx-1 mb-2 text-center text-gray-300 bg-gray-500 rounded"
          >Impressum</router-link
        >
      </div>
      <div class="col-span-4 sm:col-span-2 md:col-span-1">
        <router-link to="/impressum" class="block px-3 py-2 mx-1 mb-2 text-center text-gray-300 bg-gray-500 rounded"
          >Impressum</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavContent",
  data() {
    return {};
  },
  computed: {
    toggle: function() {
      return this.$store.state.nav.toggle;
    },
  },
};
</script>
