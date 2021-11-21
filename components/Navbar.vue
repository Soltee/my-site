
<template>
    <header id="header" class="py-6 max-w-6xl px-6 w-full mx-auto">

      <nav class="flex flex-row justify-between items-center w-full ">
            <div>
                <a href="#"  class="flex flex-row items-center">
                    <img class="rounded-full h-12 w-12 md:h-16 md:w-16 border border-white object-contain " data-src="~assets/img/photo4.png" alt="Me" v-lazy-load>
                </a>
            </div>
            <div class="flex flex-col relative md:flex-row">
          
              <ul class="inline-flex  lg:bg-transparent  py-3  lg:bg-transparent links">
                  <li class="my-2 ml-auto mr-2">
                      <a 
                        class="bg-white hover:bg-white"
                        href="http://twitter.com/meprabingrg" target="_blank">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" 
                            class="h-8 w-8 mr-2 text-white hover:text-white">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                          
                      </a>
                  </li>
                  <li class=" my-2">
                      <a v-smooth-scroll class="section-link px-3  font-semibold border-transparent:hover text-white border-r-2 border-transparent hover:border-1200 text-lg" href="#projects">
                          Projects
                      </a>
                  </li>
              </ul>


             
            </div>
      </nav>
        
    </header>
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