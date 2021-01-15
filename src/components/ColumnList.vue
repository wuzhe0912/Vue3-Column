<template lang="pug">
ul(class="row")
  li(class="col-4 card", v-for="item in list", :key="item.id")
    img(class="card-img-top", :src="item.avatar", :alt="item.title")
    div(class="card-body")
      h5(class="card-title") {{ item.title }}
      p(class="card-text") {{ item.description }}
      a(class="btn btn-primary", href="#") Go Column
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
