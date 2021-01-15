<template lang="pug">
ul(class="row")
  li(class="col-4 mb-4", v-for="item in columnList", :key="item.id")
    div(class="card h-100 shadow-sm")
      div(class="card-body")
        img(class="rounded-circle border border-light w-25 my-3" :src="item.avatar", :alt="item.title")
        h5(class="card-title") {{ item.title }}
        p(class="card-text") {{ item.description }}
        a(class="btn btn-outline-primary", href="#") Go Column
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },

  setup(props) {
    const columnList = computed(() => {
      return props.list.map((node) => {
        // if not found image url use local static image
        if (!node.avatar) {
          node.avatar = require('@/assets/column.jpg');
        }
        return node;
      });
    });

    return { columnList };
  },
});
</script>

<style lang="scss" scoped>
.card-text {
  color: $red;
}
</style>
