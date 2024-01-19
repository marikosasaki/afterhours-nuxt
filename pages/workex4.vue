<script>
export default {
  data() {
    return {
      mywork:"CODEING",
      myTitle: "ふるさと納税ガイド",
      myNote: "全ページコーディング",
      mySkill:["ruby.on.rails","javascript","haml"],
      myImage:"/assets/image/portforio4.png",
      siteUrl: "",
      myIndex:"workex4"
    }
  },
};
</script>
<template>
  <div>
    <WorkexInner
      :work="mywork"
      :title="myTitle"
      :note="myNote"
      :skills="mySkill"
      :image="myImage"
      :url="siteUrl"
      :index = "myIndex"
      v-bind:style="style" />
  </div>
</template>



