<template>
  <div class="">

    <!-- Header -->
    <!-- <Navbar /> -->

    <!-- Main Body  -->
    <div class="">
        <Nuxt />
    </div>

    <!-- Footer -->
    <footer id="footer" class="relative">
        <div class="py-6  max-w-6xl mx-auto px-6 flex flex-row items-center justify-center ">
            <div class="font-semibold text-md text-1200 flex items-center">
                &copy; 2021 All Rights Reserved
            </div>
            
        </div>
    </footer>

    <div class="fixed bottom-0 right-0 mr-6 mb-6">
        <a v-smooth-scroll href="#header" class="cursor-pointer">
            <svg class="h-12 w-12 p-4 text-white font-semibold bg-1200 hover:opacity-75 rounded-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9 3.828L2.929 9.899 1.515 8.485 10 0l.707.707 7.778 7.778-1.414 1.414L11 3.828V20H9V3.828z" /></svg>
        </a>
    </div>
  </div>
</template>

<script>

  export default{
  };
  
</script>
<style>
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
