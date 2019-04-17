<template>
    <div id="home">
        <router-view></router-view>
        <navfooter></navfooter>
    </div>
</template>

<script>
import Axios from "axios"
import navfooter from '../components/navfooter'
export default {
methods: {
    getData () {
        Axios.get('/api/marketing/mobile/index_0c7224a47d50b15665c10f9c112f916b.json',{
        }).then(res => {
            console.log(res.data);
        })
    }
},
created () {
    this.getData();
},
components: {
   navfooter
  }
}
</script>
