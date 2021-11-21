<template>
      <footer id="footer" class="relative">
        <div class="py-10  max-w-6xl mx-auto px-6">
          <div class="flex justify-center items-center mb-3">
            <p class="text-lg text-1200 flex items-center ">
              Reach out to me on 
              <a 
                class="ml-2" href="mailto:meprabingrg@gmail.com">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" 
                  class="h-12 w-12 hover:opacity-70 "><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </p>
          </div>
          <div class="flex flex-row items-center justify-center ">

              <div class="font-semibold text-md text-1200 flex items-center">
                  &copy; 2021 All Rights Reserved
              </div>
              <a 
                v-smooth-scroll 
                href="#header" 
                class="cursor-pointer absolute bottom-0 right-0 mr-10 mb-2">
                <svg class="h-12 w-12 p-4 text-white font-semibold bg-1200 hover:opacity-75 rounded-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9 3.828L2.929 9.899 1.515 8.485 10 0l.707.707 7.778 7.778-1.414 1.414L11 3.828V20H9V3.828z" /></svg>
              </a>
              
          </div>
        </div>

        <!-- <div id="top" class="fixed bottom-0 right-0 mr-10 mb-10"> -->
        <!-- <div id="top" class="fixed bottom-0 right-0 mr-10 mb-10">
          <a v-smooth-scroll href="#header" class="cursor-pointer">
              <svg class="h-12 w-12 p-4 text-white font-semibold bg-1200 hover:opacity-75 rounded-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9 3.828L2.929 9.899 1.515 8.485 10 0l.707.707 7.778 7.778-1.414 1.414L11 3.828V20H9V3.828z" /></svg>
          </a>
        </div> -->
    </footer>

    
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
