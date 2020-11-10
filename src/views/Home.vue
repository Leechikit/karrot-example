<!--
 * @Description: 
 * @Autor: Lizijie
 * @Date: 2020-07-25 15:14:53
 * @LastEditors: Lizijie
 * @LastEditTime: 2020-08-24 17:12:33
--> 
<template>
  <div class="home">
    <karrotInject module="navComp">
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </karrotInject>
    <div @click="onClick">HelloWorld</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Karrot from 'karrot'

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    onClick() {
      Karrot.injectJs('clickHandle', () => {
        alert('普通')
      })
    }
  }
};
</script>
