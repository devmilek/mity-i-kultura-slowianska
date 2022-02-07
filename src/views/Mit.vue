<template>
  <div class="loading" v-if="$apollo.loading">
    <LoadingSpinner />
  </div>
  <div class="mit-detail" v-else>
    <div class="img-wrapper column">
      <img :src="mitData.image.url" alt="">
    </div>
    <section class="main" :class="{portrait: mitData.portrait}">
      <div class="wrapper">
        <div class="img-wrapper">
          <img :src="mitData.image.url" alt="">
        </div>
        <div class="content">
          <h1>{{mitData.name}}</h1>
          <div class="divider"></div>
          <p>{{mitData.description}}</p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>

import gql from 'graphql-tag'
import Footer from '@/components/Footer'
import LoadingSpinner from '@/components/LoadingSpinner'

export default {
  name: 'Mit',
  components: {
    LoadingSpinner,
    Footer
  },

  data () {
    return {
      mitData: {
        image: {
          url: ''
        }
      },
      isColumn: false
    }
  },
  apollo: {
    mitData: {
      query: gql`query searchMit($slug: String!) {
        mit(where: {slug: $slug}) {
          name
          image {
            url(transformation: {image: {resize: {width: 1000}}})
          }
          description
          portrait
        }
      }`,
      variables () {
        return {
          slug: this.$route.params.slug
        }
      },
      update: data => data.mit
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.isColumn = window.innerWidth < 1000
    })
  }
}
</script>

<style lang="scss" scoped>

.loading {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-wrapper.column {
  display: none;
  width: 100%;
  padding-top: 60px;
  img {
    width: 100%;
  }
}

.main {
  padding: 0 60px;
  overflow-x: hidden;
  &.portrait {
    .wrapper {
      min-height: 10vh;
    }
    .img-wrapper {
      width: unset;
      max-width: 450px;
    }
    .content {
      width: 100%;
    }
  }
  .wrapper {
    max-width: 1300px;
    min-height: 100vh;
    margin: auto;
    display: flex;
    align-items: center;
    column-gap: 40px;
  }
  .img-wrapper {
    width: 50%;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  .content {
    width: 50%;
    h1 {
      font-family: 'Playfair Display', serif;
      font-size: 68px;
      letter-spacing: 1px;
    }
    .divider {
      height: 8px;
      width: 128px;
      background: #872606;
      margin: 22px 0;
    }
    p {
      line-height: 180%;
      color: rgba(24, 24, 24, 0.6);
    }
  }
}

@media screen and (max-width: 1000px) {
  .main {
    .content {
      h1 {
        font-size: 52px;
      }
      p {
        font-size: 14px;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .img-wrapper.column {
    display: block;
  }
  .main {
    .img-wrapper {
      display: none;
    }
    .wrapper {
      flex-direction: column;
      min-height: 50vh;
    }
    .content {
      width: 100%;
    }
  }
}

@media screen and (max-width: 700px) {
  .main {
    padding: 0 40px;
  }
}

@media screen and (max-width: 600px) {
  .main {
    padding: 0 20px;
  }
}

//.img-wrapper.column {
//  display: none;
//}
//.img-wrapper {
//  padding-top: 63px;
//  img {
//    width: 100%;
//  }
//}
//.content {
//  width: 50%;
//  h1 {
//    font-family: 'Playfair Display', serif;
//    font-size: 68px;
//    letter-spacing: 1px;
//  }
//  .divider {
//    height: 8px;
//    width: 128px;
//    background: #872606;
//    margin: 22px 0;
//  }
//  p {
//    line-height: 180%;
//    color: rgba(24, 24, 24, 0.6);
//  }
//}
//@media screen and (max-width: 1000px) {
//  .content {
//    h1 {
//      font-size: 54px;
//    }
//
//    .divider {
//      height: 6px;
//    }
//
//    p {
//      font-size: 14px;
//    }
//  }
//}
//  @media screen and (max-width: 1000px) {
//    section {
//      .wrapper {
//        margin-top: 63px;
//        flex-direction: column;
//      }
//    }
//    .content {
//      margin-top: 16px;
//      width: 100%;
//
//      .divider {
//        margin: 20px 0;
//      }
//    }
//  }
//
//  @media screen and (max-width: 625px) {
//    section {
//      padding: 0 26px;
//    }
//    .content {
//      h1 {
//        font-size: 46px;
//      }
//    }
//  }
//  @media screen and (max-width: 500px) {
//    section {
//      padding: 0 16px;
//    }
//    .content {
//      h1 {
//        font-size: 40px;
//      }
//
//      p {
//        line-height: 170%;
//      }
//    }
//  }
//}

</style>