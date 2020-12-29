<template lang="pug">
.wrap
  div(@click="handleChange") Title Click
  ul.animation(v-if="show")
    li(v-for="node in filterData" :key="node.name" :class="{ 'active': node.status }") {{ node.name }} {{ idx }}
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watch } from 'vue';

export default defineComponent({
  name: 'about',

  setup() {
    const list = reactive([
      { name: 'Pitt', status: true },
      { name: 'Min', status: true },
      { name: 'Chen', status: false },
      { name: 'Wu', status: false },
    ]);
    const show = ref(true);

    const handleChange = () => {
      show.value = !show.value;
    };

    const filterData = computed(() => {
      const filterArray = list.filter(node => node.status);
      return filterArray;
    });

    const idx = ref(1);
    const data = reactive({ idx: 7 });

    // -- watch 的 ref 寫法 --
    // watch(idx, (newVal, oldVal) => {
    //   console.log(newVal, oldVal);
    // });

    // setTimeout(() => {
    //   idx.value++;
    // }, 2000);

    // -- watch 的 reactive 寫法 --
    watch(() => data.idx, (newVal, oldVal) => {
        console.log('new：', newVal, 'old：', oldVal);
      },
    );

    return {
      filterData,
      show,
      handleChange,
      idx,
    };
  },
});
</script>

<style scoped lang="scss">
.animation {
  animation: FadeIn 1s;
}
@keyframes FadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.active {
  color: blue;
}
</style>
