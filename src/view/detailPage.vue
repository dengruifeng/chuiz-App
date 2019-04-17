<template>
  <div>详情页</div>
</template>



<script>
import Axios from 'axios'
export default {
  methods: {
    getdetail() {
      Axios.get(
        "/test/product/spus?ids=1000517",
        {
            headers:{
                'content-type': 'application/json'
            }
        }
      ).then(res => {
        console.log(res.data);
      });
    }
  },
  created(){
      this.getdetail()
  }
};
</script>