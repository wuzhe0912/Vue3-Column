<template lang="pug">
.wrap
  div Ref：{{ refObj.index }}
  div Reactive：{{ num }}
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  watch,
  watchEffect,
} from 'vue';

export default defineComponent({
  name: 'test',
  setup() {
    const refObj = ref({ index: 10 });
    const reactiveObj = reactive({ num: 12 });
    const data = ref({ player: '' });
    const num = ref(11);
    const numData = reactive({ number: 19 });

    watch(
      () => refObj.value.index,
      (newVal) => {
        console.log('ref', newVal);
      }
    );

    /*
      不需要傳入參數，初始化即執行
      當值未被調用或觸發時，則 watchEffect 不執行
      反之，如果當中任一函式或判斷式被觸發，則整個 watchEffect 內所有函式都被執行
    */
    // watchEffect(() => {
    //   console.log(num.value);
    //   console.log(numData.number);
    // });

    // watchEffect 可以透過宣告變數並再次執行的方式，來中斷 watchEffect
    const newNum = ref(1);
    const timer = setInterval(() => {
      newNum.value += 1;
    });
    const stop = watchEffect(() => {
      console.log(newNum.value);
      if (newNum.value >= 5) {
        stop();
        clearInterval(timer);
      }
    });

    // deep
    watch(
      data,
      (newVal) => {
        console.log('ref', newVal);
      },
      { deep: true }
    );

    watch(reactiveObj, (newVal) => {
      console.log('reactive', newVal);
    });

    setTimeout(() => {
      refObj.value.index = 8;
      reactiveObj.num = 14;
      data.value.player = 'Pitt';
      num.value = 111;
    }, 1000);

    return { refObj, ...toRefs(reactiveObj) };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
