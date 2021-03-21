<template>
  <div class="max-w-6xl mx-auto px-6 py-3">

    <!-- Header -->
    <Navbar />

    <!-- Main Body  -->
    <div class="">
        <Nuxt />
    </div>

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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
