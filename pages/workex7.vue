<script>
export default {
  data() {
    return {
      mywork:"CODEING",
      myTitle: "安心介護紹介",
      myNote: "機能追加・SCSSリファクタリングなど保守・GTMを使った機能追加",
      mySkill:["ruby.on.rails","javascript","google appscript","slim"],
      myImage:"/assets/image/portforio7.png",
      siteUrl: "",
      myIndex:"workex7"
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



