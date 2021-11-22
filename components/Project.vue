<template>
    <div 
      class="z-30 fixed inset-0">
        <div class="absolute inset-0 flex flex-col bg-white  h-screen overflow-y-scroll overflow-x-auto px-6 py-8">

          <div class="flex items-center justify-between mb-3">
            <div 
              class="flex items-center">
                <svg 
                  @click="closeProjectModal" 
                  class="h-10 w-10 cursor-pointer text-sm hover:opacity-60 text-1200"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <h3 
                  class="text-xl ml-2 mr-3 font-semibold text-1200  text-center hover:bg-opacity-70">
                  {{ project.name }}
                </h3>
            </div>
            <div>
              <a
                  v-if="project.link"
                  :href="`${project.link}`" 
                  target="_blank"
                  class="px-6 py-2 rounded-lg text-white bg-1200 hover:opacity-75">
                  
                    Visit Project

                </a> 
            </div>
          </div>

          <!-- Video Intro -->
          <video 
            v-if="project.video"
            :src="`${project.video}`" 
            controls 
            class="w-full mb-5">
            <!-- <a href="video.ogv">Download song</a> -->
          </video>
          <!-- Project Image -->
          
          <img 
            v-for="image in project.screenshot"
            v-lazy-load  
            :src="`${image.link}`" 
            :alt="`${project.name}`"
            class="shadow-xl mb-8">
          

      </div>
    </div>
</template>

<script>
export default {
  props : {
    project : {
      type : Object,
      required : true
    }
  },
  methods: {
    closeProjectModal()
    {
      this.$emit('changeProjectModalStatus')
    }
  }
  
};
</script>