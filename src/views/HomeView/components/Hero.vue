<template>
  <div class="hero">
    <div class="slider">
      <div class="btn slider__button" @click="decrementCount">
        <i class="bx bx-chevron-left"></i>
      </div>
      <lazy-img :src="gallery[sliderCount].image.url" />
      <div class="btn slider__button" @click="incrementCount">
        <i class="bx bx-chevron-right"></i>
      </div>
    </div>
    <h2 class="hero__subheader">Wystawa fotograficzna 2022</h2>
    <h1 class="hero__header">Pominki</h1>
    <a @click.prevent="seeMoreScroll" class="hero__button">Zobacz więcej</a>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'Hero',
  data () {
    return {
      gallery: [
        {
          image: {
            url: ''
          }
        },
        {
          image: {
            url: ''
          }
        },
        {
          image: {
            url: ''
          }
        }
      ],
      sliderCount: 1
    }
  },
  apollo: {
    gallery: {
      query: gql`
        query {
          galleries {
            image {
              url(transformation: { image: { resize: { width: 800 } } })
            }
          }
        }
      `,
      update: (data) => data.galleries
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
  }
}
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.slider {
  display: flex;
  align-items: center;
  column-gap: 16px;
  width: 100%;
  justify-content: center;
}
.slider__button {
  font-size: 24px;
  color: #181818;
  cursor: pointer;
  margin: 0 10px;
}
.hero__header {
  font-family: "Playfair Display", serif;
  font-size: 54px;
  margin-top: 4px;
}
.hero__subheader {
  font-size: 24px;
  color: rgba(24, 24, 24, 0.4);
  padding-top: 24px;
  font-weight: 500;
}
.hero__button {
  padding: 14px 30px;
  margin-top: 24px;
  background: $main-color;
  color: white;
  text-decoration: none;
  cursor: pointer;
}
@media screen and (max-width: 670px) {
  .slider {
    column-gap: 0;
  }
  .slider__button {
    margin: 0 6px;
  }
}
</style>
