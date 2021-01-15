<template lang="pug">
.container
  ColumnList(:list="formData")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue';
import { data } from '@/data/data';

export default defineComponent({
  name: 'home',
  components: {
    ColumnList,
  },

  setup() {
    const formData: ColumnProps[] = data;
    return {
      formData,
    };
  },
});
</script>

<style lang="scss" scoped></style>
