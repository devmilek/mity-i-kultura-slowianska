<template>
  <div id="app">
    <header class="navbar">
      <router-link to="/" class="logo">Pominki</router-link>
      <div class="nav-toggle" @click="navbarToggle">
        <img v-if="!isActive" src="./assets/logom.svg" alt="">
        <img v-else src="./assets/close.svg" alt="">
      </div>
      <div class="nav-items" :class="{active: isActive}">
        <ul>
          <li @click="navbarToggle" v-for="mit in mits" :key="mit.name">
            <router-link :to="{ name: 'Mit', params: { slug: mit.slug }}">{{mit.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="overlay" v-if="isActive" :class="{active: isActive}"></div>
      <!--    <router-link to="/">Home</router-link> |-->
      <!--    <router-link to="/about">About</router-link>-->
    </header>
    <router-view/>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data () {
    return {
      isActive: false,
      data: null,
      mits: ''
    }
  },
  methods: {
    navbarToggle: function () {
      this.isActive = !this.isActive
    }
  },
  apollo: {
    mits: {
      query: gql`query {
      mits {
        id
        name
        slug
      }
    }`,
      update: data => data.mits
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
  color: #181818;
}
.navbar {
  padding: 0 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  background: white;
  .overlay {
    position: absolute;
    z-index: 999;
    background: rgba(0, 0, 0, 0);
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    transition: 0.3s all ease;
    &.active {
      background: rgba(0, 0, 0, 0.2)
    }
  }
  .logo {
    font-size: 24px;
    font-weight: 600;
    color: #181818;
    text-decoration: none;
  }
  .nav-toggle {
    position: absolute;
    right: 60px;
    z-index: 99999;
    cursor: pointer;
  }
  .nav-items {
    position: fixed;
    background: white;
    width: 400px;
    height: 100vh;
    right: -400px;
    transition: 0.5s ease all;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 46px;
  }
  ul {
    list-style-type: none;
    li {
      margin-bottom: 28px;
    }
    a {
      text-decoration: none;
      font-size: 18px;
      font-weight: 600;
      color: rgba(24, 24, 24, 0.4);
    }
    a.router-link-active {
      color: #181818;
    }
  }
  .nav-items.active {
    right: 0;
  }
}
@media screen and (max-width: 700px) {
  .navbar {
    padding: 14px 40px;
    .nav-toggle {
      right: 40px;
    }
  }
}

@media screen and (max-width: 600px) {
  .navbar {
    padding: 14px 20px;
    .nav-toggle {
      right: 20px;
    }
    .nav-items {
      width: 100%;
      right: -100%;
    }
  }
}

@media screen and (max-width: 375px) {
  .navbar {
    h1 {
      font-size: 20px;
    }
  }
}
</style>
