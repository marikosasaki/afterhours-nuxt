<script>
export default {
  data() {
    return {
      mywork:"DESIGN・CODEING",
      myTitle: "長岡高速印刷様HPリニューアル",
      myNote: "HPのリニューアルに伴い全面改築",
      mySkill:["scss","html5","javascript","Wordpress","Photoshop"],
      myImage:"/assets/image/portforio2.png",
      siteUrl: "https://www.kousoku-print.jp/",
      myIndex:"workex2"
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
      :url="siteUrl"
      :index = "myIndex"
      v-bind:style="style" />
  </div>
</template>




