
<script>
export default {
  props : ["work","title","note","skills","image","url","index"],
  data(){
    return {
      pagename:this.index,
      imgUrl: __buildAssetsURL(this.image)
    }
  }
};

// const generateImgPath = (fileName) => {
//   return new URL(`@/assets/images/${fileName}.png`, import.meta.url).href
// }

</script>
<template>
  <section class="section-padding">
    <div class="container mb-5">
      <div class="row">
        <div class="col-md-12 mb-5">
          <h1 class="inner-title">{{ work }}</h1>
          <div class="title-3">{{ title }}</div>
        </div>
        <div class="col-md-12 fade-in-item project-wraper">
          <div class="mb-3">
            {{ note }}
          </div>
          <ul class="project-tag mb-5">
            <li v-for="skill in skills" :key="index" >{{ skill }}</li>
          </ul>
          <div class="mb-5" v-if="url">
            <a v-bind:href="url" target="_blank" rel="noopener noreferrer">サイトを見る</a>
          </div>
          <div class="col-10 main-image">
            <img :src="imgUrl" />
          </div>
        </div>
      </div>
    </div>
    <div class="title-wrapper col-md-12">
      <h2 class="inner-title">other</h2>
    </div>
    <WorkList :page="pagename" />
  </section>
</template>

<style scoped>
.section-padding {
  .title-wrapper {
    margin: 6rem 0 0 0;
  }
  .main-image {
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  .project-wraper {
    text-align: center;
  }

  .project-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: disc;

    li {
      margin-right: 3rem;
    }
  }

  .title-3 {
    text-align: center;
    font-size: 15px;
    color: #353535;
    text-transform: uppercase;
    margin: 0.83em 0;
    letter-spacing: 3px;
  }

  &.bg-gray {
    background: #f3f5f8;
  }
}
</style>
