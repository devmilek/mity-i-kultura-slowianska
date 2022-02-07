<template>
  <div class="home">
    <div class="hero">
      <div class="slider">
        <div class="btn-left">
          <i class='bx bx-chevron-left'></i>
        </div>
        <div class="img-wrapper">
          <img src="" alt="">
        </div>
        <div class="btn-right">
          <i class='bx bx-chevron-right'></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: rgba(0, 0, 0, .4);
}
</style>
