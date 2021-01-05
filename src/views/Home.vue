<template lang="pug">
.home
  img(alt="Vue logo" src="../assets/logo.png")
  //- Test
  //- Swiper
  div(v-for="node in formData")
    img(:src="node.url")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
    const { formData } = getPhoto(
      'https://vue-lessons-api.herokuapp.com/photo/list'
    );
    console.log(formData);

    return { formData };
  },
});
</script>
