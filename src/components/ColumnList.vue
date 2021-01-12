<template lang="pug">
.column-wrap
  div column
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
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
    props.list[0].description;
  },
});
</script>

<style lang="scss" scoped></style>
