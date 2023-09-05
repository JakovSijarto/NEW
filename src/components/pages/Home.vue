<script setup>

</script>

<template>
  <div >
    <h1 class="my-16">NewAge Small Projects</h1>
    <div class="parent">
      <router-link to="/coctail_search" class="div1">
        <img src="../../assets/blue tropical cocktail instagram post.png" alt="" class="w-[100%]">
        <p class="m-16">Coctail search PROJECT</p>
      </router-link>
      <div class="div2"> </div>
      <div class="div3"> </div>
      <div class="div4"> </div>
      <div class="div5"> </div>
      <div class="div6"> </div>
      <div class="div7"> </div>
      <div class="div8"> </div>
      <div class="div9"> </div>
      <div class="div10"> </div>
      <div class="div11"> </div>
      <div class="div12"> </div>
      <div class="div13"> </div>
      <div class="div14"> </div>
      <div class="div15"> </div>
    </div>
  </div>
</template>

<style scoped>
.parent {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 40px;
grid-row-gap: 10px;
}
.div1,.div2,.div3,.div4,.div5,.div6,.div7,.div8,.div9,.div10,.div11,.div12,.div13,.div14,.div15{
  background-color: black;
}
.div1 { 
  grid-area: 1 / 1 / 2 / 2; 
}
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 1 / 3 / 2 / 4; }
.div4 { grid-area: 2 / 1 / 3 / 2; }
.div5 { grid-area: 2 / 2 / 3 / 3; }
.div6 { grid-area: 2 / 3 / 3 / 4; }
.div7 { grid-area: 3 / 1 / 4 / 2; }
.div8 { grid-area: 3 / 2 / 4 / 3; }
.div9 { grid-area: 3 / 3 / 4 / 4; }
.div10 { grid-area: 4 / 1 / 5 / 2; }
.div11 { grid-area: 4 / 2 / 5 / 3; }
.div12 { grid-area: 4 / 3 / 5 / 4; }
.div13 { grid-area: 5 / 1 / 6 / 2; }
.div14 { grid-area: 5 / 2 / 6 / 3; }
.div15 { grid-area: 5 / 3 / 6 / 4; }
</style>
