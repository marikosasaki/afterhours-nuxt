<template>
  <div>
    <div class="top">
      <div class="top-view">
          <section class="hero">
            <h1 class="title fede-in--deley1">MARIKO SASAKI</h1>
            <p class="fede-in--deley2">about my work</p>
          </section>
      </div>
    </div>
    <WorkList />
  </div>
</template>

<style scoped>
  .top {
    background: url("/assets/image/bg1.jpg");
    background-size: cover;
    padding: 40px 0 0px 0;
    background-repeat: no-repeat;
    text-align: center;
  }
  .top-view {
    margin: 200px 0 0px 0;
    padding-bottom: 100px;
  }
  .title {
    opacity: 0;
  }
  .work-list {
    margin-top: -5%;
  }
</style>
