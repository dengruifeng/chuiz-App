<template>
    <div id="home">
        
        <router-view></router-view>
        <navfooter></navfooter>
    </div>
</template>



<script>
import navfooter from '../components/navfooter'
import'../style/css/home.css'
export default {
components: {
   navfooter
  }
}
</script>
