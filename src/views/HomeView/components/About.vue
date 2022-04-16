<template>
  <section class="about" id="about">
    <div class="wrapper">
      <h1 class="section__title">O czym jest nasza wystawa?</h1>
      <p class="section__description">
        Naszą wystawą nawiązujemy do kultury słowiańskiej, do naszej wspólnej historii o której już się nie wspomina. Chcieliśmy pokazać Wam bóstwa i wszelakie słowiańskie stworzenia, które od wieków budowały naszą bogatą historię.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
.about {
  background: $main-color;
  text-align: center;
  .wrapper {
    max-width: 830px;
    margin: auto;
  }
  h1 {
    color: white;
  }
  p {
    color: rgba(255, 255, 255, 0.6) !important;
  }
}
</style>
