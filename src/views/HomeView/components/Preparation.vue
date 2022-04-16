<template>
  <section class="preparation">
    <div class="wrapper">
      <div class="content">
        <h1 class="section__title">Jak wyglądały nasze przygotowania?</h1>
        <p class="section__description">
          Po wielu rozmowach na temat naszej wystawy doszliśmy do wniosku, że tematyka związana z kulturą słowiańską będzie najlepszym wyborem. Przed zrobieniem zdjęć specjalnie się przygotowywaliśmy, czytaliśmy mity, szukaliśmy informacji na temat pradawnych Słowian. Było to najbardziej inspirujące i na tej podstawie powstały nasze prace. Szukaliśmy odpowiednich miejsc do zdjęć oraz staraliśmy zachować elementy typowe dla Słowian aby oddać charakter naszej wystawy.
        </p>
      </div>
      <div class="video-wrapper" @click="videoToggle($event)">
        <div class="play-btn" :class="{ hidden: isVideoPlayed }">
          <i class="bx bx-play"></i>
        </div>
        <video
          :src="preparationVideos[0].video.url"
          muted
          loop
          width="100%"
          ref="videoRef"
        ></video>
      </div>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'Preparation',
  data () {
    return {
      preparationVideos: [
        {
          video: {
            url: ''
          }
        }
      ],
      isVideoPlayed: false,
      videoRef: ''
    }
  },
  methods: {
    videoToggle: function () {
      if (this.$refs.videoRef.paused) {
        this.$refs.videoRef.play()
        this.isVideoPlayed = true
      } else {
        this.$refs.videoRef.pause()
        this.isVideoPlayed = false
      }
    }
  },
  apollo: {
    preparationVideos: gql`
      query {
        preparationVideos {
          video {
            url
          }
        }
      }
    `
  }
}
</script>

<style lang="scss">
@import "../../../scss/_variables.scss";
.preparation {
  .wrapper {
    max-width: 1000px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    width: 80%;
    margin-right: 40px;
    //min-width: 400px;
  }
  img {
    width: 50%;
    max-width: 400px;
  }
  .lazy-image {
    max-width: 400px !important;
    width: 50%;
  }
  .video-wrapper {
    width: 60%;
    position: relative;
    cursor: pointer;
    .play-btn {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: $main-color;
      line-height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: white;
      font-size: 38px;
      padding: 10px;
      transition: 0.3s;
      &.hidden {
        opacity: 0;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .preparation {
    .wrapper {
      flex-direction: column;
    }
    .content {
      width: 100%;
      margin-right: 0;
    }
    .video-wrapper {
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>
