<template>
  <div class="fenlei">
    <navhead></navhead>
    <phonelist></phonelist>

  </div>
</template>

<script>
import Axios from "axios";
import navhead from "../components/navhead";
import phonelist from "../components/phonelist";
export default {
  components: {
    navhead,
    phonelist
  }
}
</script>

<style lang="less">
.fenlei {
  position: fixed;
  width: 100%;
  top: 50px;
  bottom: 53px;
  overflow-x: hidden;
  background-color: white;
}
</style>