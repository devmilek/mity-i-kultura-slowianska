<template>
  <footer>
    <div class="logos">
      <img v-for="logo in sponsorLogos" :key="logo.id" :src="logo.logo.url" :alt="logo.title" :title="logo.title">
    </div>
    <div class="main">
      <h1>Mity i kultura Słowiańska</h1>
      <p>© Wszystkie prawa zastrzeżone</p>
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
    sponsorLogos: gql`query {
      sponsorLogos {
        id
        title
        logo {
          url
        }
      }
    }`
  }
}
</script>

<style scoped lang="scss">
  footer {
    padding-top: 40px;
    text-align: center;
    .logos {
      display: flex;
      column-gap: 60px;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      padding: 40px 0;
      img {
        width: 100px;
        object-fit: contain;
      }
    }
    .main {
      background: #872606;
      color: white;
      padding: 40px 0;
      h1 {
        font-size: 20px;
        font-weight: 600;
      }
      p {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.4);
      }
    }
  }

  @media screen and (max-width: 600px) {
    footer {
      .logos {
        padding: 20px 0;
        column-gap: 30px;
        img {
          width: 60px;
        }
      }
    }
  }

  @media screen and (max-width: 400px) {
    footer {
      .main {
        h1 {
          font-size: 16px;
        }
        p {
          font-size: 10px;
          padding-top: 2px;
        }
      }
    }
  }
</style>
