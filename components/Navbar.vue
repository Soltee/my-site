<template>
    <header id="header" class="py-3 max-w-6xl px-6 w-full mx-auto">

      <nav class="flex flex-row justify-between items-center w-full ">
            <div>
                <a href="#"  class="flex flex-row items-center">
                    <img class="rounded-full h-12 w-12 border border-white object-contain " data-src="/img/photo4.png" alt="Me" v-lazy-load>
                </a>
            </div>
            <div class="flex flex-col relative md:flex-row">
          
              <ul class="inline-flex  lg:bg-transparent  py-3  lg:bg-transparent links">
                  <li class="my-2 ml-auto mr-2">
                      <a 
                        class=""
                         
                        target="_blank">
                          <svg 
                            class="h-8 w-8  text-white hover:opacity-50 cursor-pointer"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                          
                          
                      </a>

                  </li>
                  <li class=" my-2">
                      <a v-smooth-scroll class="section-link px-3  font-semibold border-transparent:hover text-white hover:opacity-50 text-lg" href="#projects">
                          Projects
                      </a>
                  </li>
                  <li class=" my-2">
                      <a v-smooth-scroll class="section-link px-3  font-semibold border-transparent:hover text-white hover:opacity-50 text-lg" href="#skills">
                          Skills
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