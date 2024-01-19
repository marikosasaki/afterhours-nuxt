<script>
export default {
    props : ["page"],
    data() {
      return {
        isActive: this.test()
      }
    },
    methods: {
      test :function(){
        if(this.$route.name == 'index' || this.$route.name == 'work'){
          return true
        } else {
          return false
        }
      }
    }
};

</script>
<template>
  <ul class="work-list row col-8 mx-auto" v-bind:class="{ 'col-10' : isActive}">
    <li class="col-lg-4 fade-in-item" v-if="page != 'workex7' && $route.name != 'index'">
      <nuxt-link to="workex7" class="">
        <img src="~assets/image/portforio7.png" >
      </nuxt-link>
    </li>
    <li class="col-lg-4 fade-in-item" v-if="page != 'workex2'">
      <nuxt-link to="workex2" class="">
        <img src="~assets/image/portforio2.png">
      </nuxt-link>
    </li>
    <li class="col-lg-4 fade-in-item" v-if="page != 'workex3'">
      <nuxt-link to="workex3" class="">
        <img src="~assets/image/portforio3.png">
      </nuxt-link>
    </li>
    <li class="col-lg-4 fade-in-item" v-if="page != 'workex1'">
      <nuxt-link to="workex1" class="">
        <img src="~assets/image/portforio1.png">
      </nuxt-link>
    </li>
    <li class="col-lg-4 fade-in-item" v-if="$route.name != 'index'">
      <nuxt-link to="workex4" class="">
        <img src="~assets/image/portforio4.png" >
      </nuxt-link>
    </li>
    <li class="col-lg-4 fade-in-item" v-if="$route.name != 'index'">
      <img src="~assets/image/portforio5.png">
    </li>
    <li class="col-lg-4 fade-in-item" v-if="$route.name != 'index'">
      <img src="~assets/image/portforio6.png">
    </li>
  </ul>
</template>

<style scoped>
 .fade-in-item {
  opacity: 0;
  transition: all 0.3s ease 0s;

    &:hover {
      transform: scale(1.1);
    }
 }

 .work-list {
  margin-top: 5rem;
 }
</style>

