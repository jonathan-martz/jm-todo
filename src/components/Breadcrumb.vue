<template>
  <div class="vc-breadcrumb px-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li v-for="(item, index) in items" :key="index" class="breadcrumb-item">
          <router-link :to="item.to">{{ item.title }}</router-link>
        </li>
      </ol>
    </nav>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Breadcrumb",
  setup() {
    const store = useStore();
    
    let items = computed(() => {
      return store.state.breadcrumb.items;
    });

    return {
      items,
    };
  },
};
</script>
