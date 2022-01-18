<template>
      <footer id="footer" class="relative  ">
        <div class="py-6  max-w-6xl mx-auto px-6">
          <div class="mb-3">
            <div class="text-1100 flex flex-col md:flex-row">
              <span class="text-xl font-semibold text-3xl md:text-6xl">Reach out to me on</span>
              <a 
                class="md:ml-6 border-1100 rounded-full  p-2 border-2" href="mailto:meprabingrg@gmail.com">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                  class="h-8 w-8 md:h-12 md:w-12 hover:opacity-50 "><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>
          </div>
          <div class="flex flex-col md:flex-row ">

              <div class="font-semibold text-md text-1100 flex items-center">
                  &copy; 2021 All Rights Reserved
              </div>
              <a 
                v-smooth-scroll 
                href="#header" 
                class="cursor-pointer  md:absolute md:bottom-0 md:right-0 md:mr-10 md:mb-10">
                <svg class="h-12 w-12 p-4 text-white font-semibold bg-1100 hover:opacity-75 rounded-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9 3.828L2.929 9.899 1.515 8.485 10 0l.707.707 7.778 7.778-1.414 1.414L11 3.828V20H9V3.828z" /></svg>
              </a>
              
          </div>
        </div>

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
