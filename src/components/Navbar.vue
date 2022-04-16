<template>
  <header class="navbar">
    <router-link to="/" class="navbar__logo">Pominki</router-link>
    <div class="navbar__toggle" @click="navbarToggle">
      <img v-if="!isActive" src="@/assets/logom.svg" alt="" />
      <img v-else src="@/assets/close.svg" alt="" />
    </div>
    <div class="navbar__container" :class="{ active: isActive }">
      <ul class="navbar__items">
        <li
          @click="navbarToggle"
          v-for="mit in mits"
          :key="mit.name"
          class="navbar__item"
        >
          <router-link
            class="navbar__link"
            :to="{ name: 'Mit', params: { slug: mit.slug } }"
            >{{ mit.name }}</router-link
          >
        </li>
      </ul>
    </div>
    <div class="overlay" v-if="isActive" :class="{ active: isActive }"></div>
  </header>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'Navbar',
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
      query: gql`
        query {
          mits {
            id
            name
            slug
          }
        }
      `,
      update: (data) => data.mits
    }
  }
}
</script>

<style lang="scss">
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
}
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
    background: rgba(0, 0, 0, 0.2);
  }
}
.navbar__logo {
  font-size: 24px;
  font-weight: 600;
  color: #181818;
  text-decoration: none;
}
.navbar__toggle {
  position: absolute;
  right: 60px;
  z-index: 99999;
  cursor: pointer;
}
.navbar__container {
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
  .navbar__item:nth-last-child(1) {
    margin-bottom: 0;
  }
}
.navbar__items {
  list-style-type: none;
  overflow: hidden;
}
.navbar__item {
  margin-bottom: 18px;
}
.navbar__link {
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  color: rgba(24, 24, 24, 0.4);
  text-overflow: ellipsis;
  white-space: nowrap;
}
.navbar__link.router-link-active {
  color: #181818;
}
.navbar__container.active {
  right: 0;
}

@media screen and (max-width: 700px) {
  .navbar {
    padding: 14px 40px;
  }
  .navbar__toggle {
    right: 40px;
  }
}

@media screen and (max-width: 600px) {
  .navbar {
    padding: 14px 20px;
  }
  .navbar__toggle {
    right: 20px;
  }
  .navbar__container {
    width: 100%;
    right: -100%;
  }
}
</style>
