<template>
  <div class="home">
    <div class="hero">
      <div class="slider">
        <div class="btn" @click="decrementCount">
          <i class='bx bx-chevron-left'></i>
        </div>
        <div class="img-wrapper" v-if="!$apollo.loading">
          <img :src="gallery[sliderCount].image.url" alt="">
        </div>
        <div class="btn" @click="incrementCount">
          <i class='bx bx-chevron-right'></i>
        </div>
      </div>
      <h2>Wystawa fotograficzna 2022</h2>
      <h1>Pominki</h1>
      <a @click.prevent="seeMoreScroll">Zobacz więcej</a>
    </div>
    <section class="about" id="about">
      <div class="wrapper">
        <h1>O czym jest nasza wystawa?</h1>
        <p>Nunc eget laoreet urna, et congue mauris. Nunc massa ex, sagittis eget nisi non, scelerisque dignissim neque. Integer luctus quam urna, ut placerat est pulvinar in. Morbi vulputate rhoncus lacus, ac bibendum velit pharetra sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. In sed pulvinar sem, vitae molestie orci. </p>
      </div>
    </section>
    <section class="preparation">
      <div class="wrapper">
        <div class="content">
          <h1>Jak wyglądały nasze przygotowania?</h1>
          <p>Nunc eget laoreet urna, et congue mauris. Nunc massa ex, sagittis eget nisi non, scelerisque dignissim neque. Integer luctus quam urna, ut placerat est pulvinar in. Morbi vulputate rhoncus lacus, ac bibendum velit pharetra sed.
            <br><br>
            Ut id consequat erat, eu pellentesque nunc. Sed imperdiet euismod ex at lobortis. Duis ut cursus ligula, eu laoreet lectus. Morbi placerat interdum ex eu gravida. Sed quis scelerisque enim. Aliquam et libero nec libero mollis pretium. Phasellus at dignissim nulla.</p>
        </div>
        <img src="https://media.graphcms.com/resize=width:600/TD3xcKg4Rujt6tUn9PIk" alt="">
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>

import gql from 'graphql-tag'
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  components: { Footer },
  data () {
    return {
      gallery: [{
        image: {
          url: null
        }
      }],
      sliderCount: 1
    }
  },
  methods: {
    incrementCount: function () {
      if (this.sliderCount >= this.gallery.length - 1) {
        this.sliderCount = 0
      } else {
        this.sliderCount++
      }
    },
    decrementCount: function () {
      if (this.sliderCount <= 0) {
        this.sliderCount = this.gallery.length - 1
      } else {
        this.sliderCount--
      }
    },
    autoIncrement: function () {
      setInterval(this.incrementCount, 10000)
    },
    seeMoreScroll: function () {
      window.scroll({
        top: window.innerHeight - 60,
        behavior: 'smooth'
      })
      console.log('cipa')
    }
  },
  mounted () {
    this.autoIncrement()
  },
  apollo: {
    gallery: {
      query: gql`query {
        galleries {
          image {
            url(transformation: {image: {resize: {width: 800}}})
          }
        }
      }
    `,
      update: data => data.galleries
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  scroll-behavior: smooth;
  //padding-top: 60px;
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    a {
      cursor: pointer;
    }
    .slider {
      display: flex;
      align-items: center;
      column-gap: 20px;
      .btn {
        font-size: 24px;
        color: #181818;
        cursor: pointer;
      }
      .img-wrapper {
        aspect-ratio: 10 / 7;
        max-width: 700px;
        min-height: 10px;
        img {
          width: 100%;
        }
      }
    }
    h2 {
      font-size: 18px;
      color: rgba(24, 24, 24, 0.4);
      padding-top: 24px;
    }
    h1 {
      font-family: 'Playfair Display', serif;
      font-size: 40px;
      margin-top: 4px;
    }
    a {
      padding: 14px 40px;
      margin-top: 24px;
      background: #872606;
      color: white;
      text-decoration: none;
    }
  }
  .about {
    background: #872606;
    text-align: center;
    padding: 60px 20px;
    .wrapper {
      max-width: 830px;
      margin: auto;
    }
    h1 {
      font-size: 30px;
      color: white;
      font-family: 'Playfair Display', serif;
    }
    p {
      color: rgba(255, 255, 255, .6);
      margin-top: 12px;
      font-size: 14px;
    }
  }
  .preparation {
    padding: 60px 20px;
    .wrapper {
      max-width: 1000px;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .content {
      width: 50%;
      margin-right: 40px;
      h1 {
        font-family: "Playfair Display", serif;
        font-size: 30px;
      }
      p {
        color: rgba(24, 24, 24, 0.6);
        font-size: 14px;
        margin-top: 18px;
      }
    }
    img {
      width: 50%;
      max-width: 400px;
    }
  }
}

@media screen and (max-width: 670px) {
  .home {
    .hero {
      .slider {
        column-gap: 0;
        .btn {
          margin: 0 6px;
        }
      }
    }
    .preparation {
      .wrapper {
        flex-direction: column;
      }
      .content {
        width: 100%;
        margin-right: 0;
      }
      img {
        display: none;
      }
    }
  }
}
</style>
