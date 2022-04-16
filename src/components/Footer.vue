<template>
  <footer class="footer">
    <div class="footer__logos">
      <img
        class="footer__logo"
        v-for="logo in sponsorLogos"
        :key="logo.id"
        :src="logo.logo.url"
        :alt="logo.title"
        :title="logo.title"
      />
    </div>
    <div class="footer__header">
      <h1 class="footer__title">Pominki</h1>
      <p class="footer__subtitle">© Wszystkie prawa zastrzeżone</p>
    </div>
  </footer>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'Footer',
  data () {
    return {
      sponsorLogos: [
        {
          logo: {
            url: ''
          }
        }
      ]
    }
  },
  apollo: {
    sponsorLogos: gql`
      query {
        sponsorLogos {
          id
          title
          logo {
            url
          }
        }
      }
    `
  }
}
</script>

<style scoped lang="scss">
@import "../scss/_variables.scss";
.footer {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 40px;
  text-align: center;
}
.footer__logos {
  display: flex;
  column-gap: 60px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 40px 0;
}
.footer__logo {
  width: 100px;
  object-fit: contain;
}
.footer__logo:nth-child(2) {
  order: -1;
}
.footer__header {
  background: $main-color;
  color: white;
  padding: 40px 0;
}
.footer__title {
  font-size: 20px;
  font-weight: 600;
}
.footer__subtitle {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
}

@media screen and (max-width: 600px) {
  .footer__logos {
    padding: 20px 0;
    column-gap: 30px;
  }
  .footer__logo {
    width: 60px;
  }
}

@media screen and (max-width: 400px) {
  .footer__title {
    font-size: 16px;
  }
  .footer__subtitle {
    font-size: 10px;
    padding-top: 2px;
  }
}
</style>
