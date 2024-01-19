<script>
export default {
  data() {
    return {
      title: "my portforio!",
      name: "mariko sasaki",
      hid: ""
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // `hid` は一意の識別子として使用されます。 `vmid` は動作しないので使わないでください。
        {
          hid: "description",
          name: this.name,
          content: "My custom description"
        }
      ]
    };
  }
};
</script>


<template>
  <div class="wrapper">
    <GlovalHeader/>
    <slot/>
    <GlovalFooter/>
  </div>
</template>



<style scoped>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
} 

</style>
