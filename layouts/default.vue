<template>
  <div class="">
    <!-- vue-scroll-indicator-->
    <vue-scroll-progress-bar 
      height="6px" 
      backgroundColor="#ff5c4d"
      barClass="{'rounded-lg'}" />

    <!-- Main Body  -->
    <div class="">
        <Nuxt />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
  let kursor = require('kursor');
  
  new kursor({
        type: 1
  });
  
</script>
<style>
  import "https://unpkg.com/kursor/dist/kursor.css"
  html {
    font-family:
      Roboto,
      Arial,
      sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
