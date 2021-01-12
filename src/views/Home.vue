<template lang="pug">
.home
  img(alt="Vue logo" src="../assets/logo.png")
  //- Test
  //- Swiper
  .list-loading(v-if="list.loading") Loading
  .list-wrap(v-else)
    .list-img(
      v-for="(node, index) in list.data"
      :key="node.url"
      v-show="imageIndex === index"
    )
      img(:src="node.url")
  .list-btn
    .btn-prev(@click="imagePrev") Prev
    .btn-next(@click="imageNext") Next
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import Test from '@/components/Test.vue';
import Swiper from '@/components/Swiper.vue';
import { getPhoto } from '@/hooks/useURLLoader';

export default defineComponent({
  name: 'Home',
  components: {
    Test,
    Swiper,
  },

  setup() {
    const list = reactive({
      data: {},
      loading: true,
    });
    // 初始第一張圖
    const imageIndex = ref(0);
    const { formData } = getPhoto(
      'https://vue-lessons-api.herokuapp.com/photo/list'
    );
    list.data = formData;
    setTimeout(() => {
      console.log(list.data);
      list.loading = false;
    }, 1000);

    const imagePrev = () => {
      imageIndex.value--;
      if (imageIndex.value < 0) {
        imageIndex.value = 6;
      }
    };
    const imageNext = () => {
      imageIndex.value++;
      if (imageIndex.value > 6) {
        imageIndex.value = 0;
      }
    };

    return { list, imageIndex, imagePrev, imageNext };
  },
});
</script>

<style lang="scss" scoped>
.list-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 200px;
}
.list-img {
  display: flex;
  img {
    width: 350px;
    height: 200px;
    margin-bottom: 10px;
  }
}
.list-btn {
  display: flex;
  justify-content: space-evenly;
  width: 350px;
  cursor: pointer;
}
</style>
