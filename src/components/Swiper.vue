<template lang="pug">
.wrap
  div {{ data }}
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'swiper',
  setup() {
    const data = ref('swiper');

    return { data };
  },
});
</script>
