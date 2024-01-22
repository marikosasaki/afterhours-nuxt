
<script>
export default {
  data() {
    return {
      mywork:"CODEING",
      myTitle: "怪盗ロワイヤル",
      myNote: "DENAのブラウザゲームのコーディング新規ゲームのコーディングなど担当",
      mySkill:["scss","html5","javascript","angure.js"],
      myImage:"portforio1",
      siteUrl: "",
      myIndex:"workex1"
    }

  }
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
      :index = "myIndex"
      v-bind:style="style" />
  </div>
</template>
