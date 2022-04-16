<template>
  <div class="home">
    <Hero />
    <About />
    <Preparation />
    <WhereCanFindUs />
  </div>
</template>

<script>
import WhereCanFindUs from './components/WhereCanFindUs.vue'
import Preparation from './components/Preparation.vue'
import About from './components/About.vue'
import Hero from './components/Hero.vue'

export default {
  name: 'Home',
  components: { WhereCanFindUs, Preparation, About, Hero }
}
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
$padding: 60px 60px;

.section__title {
  font-family: "Playfair Display", serif;
  font-size: 30px;
}

.section__description {
  margin-top: 12px;
  font-size: 14px;
  color: rgba(24, 24, 24, 0.6);
  line-height: 180%;
}

.about,
.preparation,
.where {
  padding: 60px 60px;
}

@media screen and (max-width: 700px) {
  .about,
  .preparation,
  .where {
    padding: 60px 40px;
  }
}

@media screen and (max-width: 600px) {
  .about,
  .preparation,
  .where {
    padding: 60px 20px;
  }
}
</style>
