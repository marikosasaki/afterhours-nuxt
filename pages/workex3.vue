<script>
export default {
  data() {
    return {
      mywork:"CODEING",
      myTitle: "ATEam　キャリアピックス",
      myNote: "機能追加・SCSSリファクタリングなど保守",
      mySkill:["scss","NEXT.JS","typescript","storybook"],
      myImage:"/assets/image/portforio3.png",
      siteUrl: "https://career-picks.com/hr/pc/default/top",
      myIndex:"workex3"
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



