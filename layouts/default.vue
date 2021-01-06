<template>
  <div class="max-w-6xl mx-auto px-6 py-6">

    <!-- Header -->
    <header id="header" class="">
        <nav class="nav relative  py-3 flex flex-row justify-between items-center">
            <div>
                <a href="#"  class="flex flex-row items-center">
                    
                    <span class="font-bold text-indigo-600 uppercase text-2xl ">Soltee.</span>
                </a>
            </div>
            <svg class="cursor-pointer block md:hidden menu-icon h-6 w-6 text-indigo-600 object-cover object-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            <ul class="lg:flex md:inline-flex  lg:bg-transparent  py-3  lg:bg-transparent hidden links">
                <li class="my-2 ml-auto mr-4 lg:mr-2 ">
                    <a 
                      class="bg-indigo-600 hover:bg-indigo-500" href="http://github.com/soltee" target="_blank">
                        <svg class="h-8 w-8 mr-2 text-indigo-600 hover:text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                    </a>
                </li>
                <li class=" my-2 mr-2">
                    <a v-smooth-scroll class="section-link px-6 py-2  font-semibold border-transparent:hover text-indigo-600 border-b-2 hover:border-indigo-500 text-lg" href="#projects">
                        Projects
                    </a>
                </li>
                <li class=" my-2 mr-2 lg:mr-0">
                    <a v-smooth-scroll class="section-link px-6 py-2   font-semibold border-transparent:hover text-indigo-600 border-b-2 hover:border-indigo-500 text-lg" href="#about-me">
                        About-Me
                    </a>
                </li>
            </ul>
        </nav>
        
    </header>

    <!-- Main Body  -->
    <Nuxt />

    <!-- Footer -->
    <footer id="footer" class="relative">
        <div class="py-3   flex flex-row items-center justify-between ">
            <div class="font-semibold text-md text-indigo-600 flex items-center">
                &copy; <svg class="ml-2 h-8 w-8 text-indigo-600 mr-2" viewBox="0 0 400 400" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <rect width="400" height="400" fill="transparent" />
                    <g id="Group 3">
                        <g id="Group">
                            <rect id="Rectangle" x="154.801" y="122.951" width="10" height="60" transform="rotate(41.4483 154.801 122.951)" fill="currentColor" />
                            <rect id="Rectangle_2" x="108.996" y="174.165" width="10" height="60" transform="rotate(-46.7502 108.996 174.165)" fill="currentColor" />
                        </g>
                        <g id="Soltee">
                            <path id="background" d="M395 200C395 307.696 307.696 395 200 395C92.3045 395 5 307.696 5 200C5 92.3045 92.3045 5 200 5C307.696 5 395 92.3045 395 200Z" fill="white" stroke="currentColor" stroke-width="10" />
                            <g id="stand" filter="url(#filter0_i)">
                                <path d="M182.554 266.871C189.51 250.175 192.988 241.828 198.71 241.084C199.566 240.972 200.434 240.972 201.29 241.084C207.012 241.828 210.49 250.175 217.446 266.871L239.096 318.831C243.718 329.923 246.029 335.47 243.87 339.617C243.537 340.257 243.136 340.859 242.673 341.412C239.675 345 233.667 345 221.65 345H178.35C166.333 345 160.325 345 157.327 341.412C156.864 340.859 156.463 340.257 156.13 339.617C153.971 335.47 156.282 329.923 160.904 318.831L182.554 266.871Z" fill="black" />
                            </g>
                            <path id="screen" d="M88 96H308C327.33 96 343 111.67 343 131V231C343 250.33 327.33 266 308 266H88C68.67 266 53 250.33 53 231V131C53 111.67 68.67 96 88 96Z" fill="white" stroke="currentColor" stroke-width="10" />
                            <g id="Brackets">
                                <rect width="180.304" height="92.3734" transform="translate(108.996 132.951)" fill="white" />
                                <g id="bracker left">
                                    <rect id="Rectangle_3" x="154.801" y="132.951" width="10" height="60" transform="rotate(41.4483 154.801 132.951)" fill="currentColor" />
                                    <rect id="Rectangle_4" x="108.996" y="184.165" width="10" height="60" transform="rotate(-46.7502 108.996 184.165)" fill="currentColor" />
                                </g>
                                <g id="bracket right">
                                    <rect id="Rectangle_5" x="243.496" y="225.325" width="10" height="60" transform="rotate(-138.552 243.496 225.325)" fill="currentColor" />
                                    <rect id="Rectangle_6" x="289.3" y="174.111" width="10" height="60" transform="rotate(133.25 289.3 174.111)" fill="currentColor" />
                                </g>
                            </g>
                            <rect id="Slash" x="217.445" y="132.449" width="10" height="103.981" transform="rotate(26.8279 217.445 132.449)" fill="currentColor" />
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_i" x="155.314" y="241" width="89.3714" height="108" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                        </filter>
                    </defs>
                </svg>
                2020
            </div>
            <div class="text-indigo-600">
                <a v-smooth-scroll href="#header" class="cursor-pointer">
                    <svg class="h-8 w-8 p-2 text-white font-semibold bg-indigo-600 hover:bg-indigo-500 rounded-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9 3.828L2.929 9.899 1.515 8.485 10 0l.707.707 7.778 7.778-1.414 1.414L11 3.828V20H9V3.828z" /></svg>
                </a>
            </div>
        </div>
    </footer>
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


</style>
