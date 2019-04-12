<template>
    <div id="home">
        <router-view></router-view>
        <navfooter></navfooter>
    </div>
</template>



<script>
import navfooter from '../components/navfooter'
export default {
components: {
   navfooter
  }
}
</script>