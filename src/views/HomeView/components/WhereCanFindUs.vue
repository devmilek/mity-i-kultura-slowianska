<template>
  <section class="where">
    <div class="wrapper">
      <h1 class="section__title">Gdzie można zobaczyć naszą wystawę?</h1>
      <p class="section__description">
        Otwarcie wystawy odbędzie się 20 kwietnia o godzinie 17:00 na ulicy Kościuszki 3 w Żorskim Kinie na Starówce. Wejście na wystawę jest bezpłatne.
      </p>
      <div class="map-container">
        <iframe
          width="100%"
          height="400"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ko%C5%9Bciuszki%203,%2044-240%20%C5%BBory+(Kino%20na%20star%C3%B3wce%20%C5%BBory)&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhereCanFindUs'
}
</script>

<style lang="scss">
.where {
  text-align: center;
  .wrapper {
    max-width: 1000px;
    margin: auto;
  }
  .map-container {
    margin-top: 30px;
    iframe {
      border: none;
    }
  }
}
</style>
