import { reactive, toRefs, onMounted } from 'vue';
import axios from 'axios';

const getPhoto = (url: string) => {
  const data = reactive({
    formData: null,
  })

  onMounted(async() => {
    await axios.get(url).then((response) => {
      data.formData = response.data;
    }).catch((error) => {
      console.log(error);
    })
  })

  return { ...toRefs(data) }
};

export { getPhoto };