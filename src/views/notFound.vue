<template>
  <div class="not-found">
    <h1>404.</h1>
    <p>Nic tu nie ma chodź niektórzy twierdzą że straszy....</p>
    <router-link to="/">Wróć do strony głównej</router-link>
  </div>
</template>

<script>
export default {
  name: 'notFound'
}
</script>

<style scoped lang="scss">
  .not-found {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    h1 {
      font-family: 'Playfair Display', serif;
      font-size: 140px;
    }
    p {
      max-width: 340px;
      text-align: center;
      color: rgba(24, 24, 24, 0.6);
      margin-top: 20px;
    }
    a {
      background: #872606;
      padding: 15px 40px;
      color: white;
      text-decoration: none;
      margin-top: 40px;
    }
  }
</style>
