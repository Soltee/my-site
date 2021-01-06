<template>
  <div class="">
    <!-- Hero Section -->
    <div class="mt-6 flex flex-col md:flex-row md:items-center">
      <div class="flex flex-col items-start">
          <h1 class="lg:text-justify leading-normal text-indigo-700 font-bold text-center leading-normal text-4xl md:text-6xl">
              Hi! I'm Prabin.
          </h1>
          <h2 class="leading-normal text-indigo-700 font-semibold leading-normal text-md  md:text-xl">
             <span class="">Self Taught</span> Web Developer specializing in Laravel , Vue and TailwindCSS.
          </h2>

          <div class="mt-5 md:mt-10 flex flex-col md:flex-row">
            
              <a v-smooth-scroll href="#projects" class=" px-6 py-3 lg:mr-auto w-56 font-bold  text-lg capitalize tracking-wide text-center text-white rounded-lg bg-indigo-700 hover:bg-indigo-600">
                Check My Work
              </a>

              <a href="/cv" class="mt-4 md:mt-0 md:ml-10 px-6 py-3 lg:mr-auto w-56 font-bold text-center text-lg tracking-wide text-indigo-700 rounded-lg border border-indigo-700 hover:border-0 hover:bg-indigo-600 hover:text-white" target="_blank">
                  View CV
              </a>


          </div>
      </div>
      <div class="hidden lg:block">
          <img class="max-w-lg object-center object-cover rounded" src="~/assets/img/me.png" alt="hero-banner">
      </div>
  </div>

    <!-- Main -->
    <main id="main" class="main">
		<vue-simplebar>
			<div class="py-6 mt-24 px-3">
				
	            <div class="skills flex flex-row justify-center items-center">
	                <div class="skill-div px-6 lg:px-10 py-0 cursor-pointer">
	                    <div class="flex flex-col items-center">
	                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 h-12" viewBox="0 0 16 16">
	                            <path id="file_type_html.svg" class="i-color" fill="#F4BF75" d="M11.631,5.1l0.136-1.531H4.233l0.4,4.672H9.849l-0.187,2L7.983,10.7l-1.67-.464L6.2,9.015H4.71L4.9,11.448l3.085,0.875H8.017V12.314l3.06-.866L11.5,6.688H6.014L5.886,5.1h5.744ZM2,1H14L12.909,13.583,7.983,15,3.091,13.583Z" transform="translate(0 0)" />
	                        </svg>
	                    </div>
	                </div>
	                <div class="skill-div px-6 lg:px-10 py-0 cursor-pointer">
	                    <div class="flex flex-col items-center">
	                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 h-12" viewBox="0 -1 16 16">
	                            <path id="file_type_css.svg" class="i-color" fill="#1E9CEF" d="M3.785,2H14l-1.805,9.164L6.738,13,2,11.164,2.482,8.717H4.5L4.3,9.728l2.864,1.107,3.3-1.107L10.925,7.4h-8.2L3.12,5.355h8.206l0.258-1.313h-8.2Z" transform="translate(0 0)" />
	                        </svg>
	                    </div>
	                </div>
	                <div class="skill-div px-6 lg:px-10 py-0 cursor-pointer">
	                    <div class="flex flex-col items-center">
	                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 h-12" viewBox="0 0 32 32">
	                            <title>file_type_tailwind</title>
	                            <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" style="fill:#44a8b3" />
	                        </svg>
	                    </div>
	                </div>
	                <div class="skill-div px-6 lg:px-10 py-0 cursor-pointer">
	                    <div class="flex flex-col items-center">
	                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="h-12 h-12" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-40 -40 586 586" fill="#E79627">
	                            <path d="M412.2263184,385.5626221c28.0650024,37.5115662-46.8929749,64.7707214-77.1100159,10.5594177l-41.0502014,23.8221436l2.5158386,4.1665955c15.4639893,26.0400085,39.6192932,41.2938538,72.2692871,45.6733704C440.3333435,478.3333435,487,432.75,461.6690979,368.017334C443.6666565,331,396.5,324,369,305.75c-16.171875-9.421875-12.8056641-29.3642578,0.1829834-37.3647156C379.2852478,262.1626892,402.5,261.375,414.4567261,286.1706848l39.2803345-25.3166199C422.75,205,349.5,216.25,327.5438538,241.6274719C297.6879883,276.7024841,306.2280579,315.8501282,332.5,341C352.9337463,360.5610046,385.0014343,367.2024841,412.2263184,385.5626221z M226.6380463,464.6317749c22.6299286-9.1522827,35.9041595-28.073822,39.4159088-56.2019043c0.3050537-2.8473816,0.5084534-184.5985107,0.5084534-184.5985107h-49.7884827l-0.3593292,179.7782593C215.25,415.25,208.2915955,423.5926514,198.1250763,425.2286377c-17.3468018,2.7914429-28.9113312-2.2597351-40.96315-24.8257141l-40.534523,24.507843C134,465.75,186.3723602,480.7486877,226.6380463,464.6317749z M44.8733864-0.0000016h422.2532043C491.9869385-0.0000016,512,20.0130253,512,44.8733864v422.2532043C512,491.9869385,491.9869385,512,467.1265869,512H44.8733864C20.0130291,512,0,491.9869385,0,467.1265869V44.8733864C0.0000016,20.013031,20.0130291-0.0000016,44.8733864-0.0000016z" />
	                        </svg>
	                    </div>
	                </div>
	                <div class="skill-div px-6 lg:px-10 py-0 cursor-pointer">
	                    <div class="flex flex-col items-center">
	                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 h-12" viewBox="0 0 16 16">
	                            <path id="file_type_node.svg" class="i-color" fill="#73B923" d="M8.005,16.01A1.2,1.2,0,0,1,7.4,15.845l-1.932-1.16c-0.288-.163-0.147-0.222-0.052-0.255a3.788,3.788,0,0,0,.873-0.4,0.148,0.148,0,0,1,.145.011l1.483,0.894a0.188,0.188,0,0,0,.18,0l5.784-3.388a0.186,0.186,0,0,0,.088-0.159V4.608a0.191,0.191,0,0,0-.089-0.162L8.1,1.061a0.179,0.179,0,0,0-.178,0L2.138,4.448a0.188,0.188,0,0,0-.091.161v6.777a0.18,0.18,0,0,0,.091.157l1.585,0.929c0.86,0.436,1.386-.078,1.386-0.594V5.187a0.168,0.168,0,0,1,.168-0.169H6.01a0.168,0.168,0,0,1,.167.169v6.69A1.617,1.617,0,0,1,4.465,13.71a2.445,2.445,0,0,1-1.333-.368l-1.517-.886a1.244,1.244,0,0,1-.607-1.071V4.608a1.241,1.241,0,0,1,.607-1.07L7.4,0.146a1.25,1.25,0,0,1,1.216,0L14.4,3.538a1.243,1.243,0,0,1,.608,1.07v6.776a1.247,1.247,0,0,1-.608,1.071l-5.784,3.39a1.2,1.2,0,0,1-.609.165h0Zm1.787-4.669c-2.532,0-3.062-1.18-3.062-2.169A0.167,0.167,0,0,1,6.9,9H7.645a0.168,0.168,0,0,1,.166.144c0.113,0.773.449,1.163,1.98,1.163,1.218,0,1.737-.28,1.737-0.936,0-.379-0.146-0.659-2.041-0.848-1.582-.159-2.562-0.514-2.562-1.8,0-1.185.984-1.891,2.633-1.891,1.853,0,2.77.653,2.886,2.054a0.173,0.173,0,0,1-.044.13,0.167,0.167,0,0,1-.123.055H11.527a0.167,0.167,0,0,1-.162-0.133c-0.18-.813-0.619-1.073-1.806-1.073-1.331,0-1.485.47-1.485,0.823,0,0.428.183,0.552,1.979,0.793,1.778,0.238,2.623.576,2.623,1.844s-1.05,2.012-2.883,2.012h0Z" transform="translate(0)" />
	                        </svg>
	                    </div>
	                </div>
	                <div class="skill-div px-6 lg:px-10 py-0 cursor-pointer">
	                    <div class="flex flex-col items-center">
	                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 h-12" viewBox="0 -1 16 16">
	                            <path id="file_type_php.svg" class="i-color" fill="#BB80B3" d="M5.323,10.323a1.2,1.2,0,0,0-.782-1.039C4.345,9.212,4.176,9.08,3.982,9a4.5,4.5,0,0,0-.674-0.244,0.407,0.407,0,0,0-.442.179,0.313,0.313,0,0,0,.055.386c0.093,0.131.2,0.256,0.3,0.378,0.172,0.2.355,0.4,0.523,0.607a0.956,0.956,0,0,1,.274.679,2.142,2.142,0,0,1-.757,1.437,0.3,0.3,0,0,1-.194.066,1.252,1.252,0,0,1-.733-0.317,0.351,0.351,0,0,1,.082-0.622,1.791,1.791,0,0,0,.2-0.117,0.4,0.4,0,0,0,.135-0.518,0.8,0.8,0,0,0-.167-0.248c-0.357-.313-0.708-0.637-1.09-0.922A3.542,3.542,0,0,1,.014,7.02,5.542,5.542,0,0,1,.9,3.582,2.366,2.366,0,0,1,1.916,2.6,6.463,6.463,0,0,1,2.9,2.309,6.813,6.813,0,0,1,5.7,2.058a1.982,1.982,0,0,1,1.7,1.317,3.53,3.53,0,0,1,.168,1.572A2.713,2.713,0,0,1,5.582,7.23,0.781,0.781,0,0,1,4.6,6.916C4.4,6.651,4.236,6.363,4.058,6.084,4.032,6.043,4.013,5.995,3.991,5.95S3.946,5.864,3.923,5.82A3.088,3.088,0,0,0,4.36,7.113a0.788,0.788,0,0,0,.6.4A2.657,2.657,0,0,0,7.432,6.494,3.551,3.551,0,0,0,8.063,3.55C8.025,3.34,7.96,3.135,7.914,2.927a0.22,0.22,0,0,1,.162-0.281A1.69,1.69,0,0,1,8.27,2.6a8.31,8.31,0,0,1,2.506-.146,5.976,5.976,0,0,1,2.67.857,5.816,5.816,0,0,1,2.478,3.326A2.366,2.366,0,0,1,16,7.263c0,0.141-.09.178-0.2,0.089a3.039,3.039,0,0,1-.341-0.321c-0.1-.107-0.177-0.23-0.273-0.343-0.074-.088-0.139-0.075-0.174.035-0.022.067-.042,0.133-0.062,0.2a4.768,4.768,0,0,1-1.135,2.038,0.569,0.569,0,0,0-.158.312,5.028,5.028,0,0,0-.012.9c0.062,0.642.158,1.281,0.233,1.922a0.576,0.576,0,0,1-.432.7,2.985,2.985,0,0,1-.777.17c-0.418.028-.84,0.008-1.26,0.008A1.114,1.114,0,0,0,11,11.843c0.085-.335.184-0.653,0.243-0.978a0.858,0.858,0,0,0-.189-0.757,0.486,0.486,0,0,0-.628-0.146,2.315,2.315,0,0,1-1.978.125,0.519,0.519,0,0,0-.7.226,1.592,1.592,0,0,0-.242.956c0.026,0.42.1,0.835,0.16,1.253,0.032,0.234,0,.294-0.236.354a5.132,5.132,0,0,1-1.627.1,0.492,0.492,0,0,1-.077-0.019A1.031,1.031,0,0,0,5.2,11.834a2.42,2.42,0,0,0,.125-1.507l0,0h0ZM2.087,8.6a0.579,0.579,0,0,0,.166-0.289,0.7,0.7,0,0,0-.381-0.705,0.263,0.263,0,0,0-.322.062Q1.229,8.024.913,8.381a0.723,0.723,0,0,0-.093.136,0.191,0.191,0,0,0,.145.312C1.074,8.856,1.187,8.861,1.3,8.877a1.289,1.289,0,0,0,.788-0.271h0Zm0.024-2.6a0.354,0.354,0,0,0-.352-0.342,0.359,0.359,0,0,0-.358.354,0.355,0.355,0,0,0,.363.333,0.347,0.347,0,0,0,.349-0.344h0Z" transform="translate(0 0)" />
	                        </svg>
	                    </div>
	                </div>
	                <div class="skill-div px-6 lg:px-10 py-0 cursor-pointer">
	                    <div class="flex flex-col items-center">
	                        <svg class="h-12 h-12 text-green-600 object-cover object-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
	                            <path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z" /></svg>
	                    </div>
	                </div>
	                <div class="skill-div px-6 lg:px-10 py-0 cursor-pointer">
	                    <div class="flex flex-col items-center">
	                        <svg class="h-12 h-12 text-red-600 object-cover object-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
	                            <path d="M637.5 241.6c-4.2-4.8-62.8-78.1-73.1-90.5-10.3-12.4-15.4-10.2-21.7-9.3-6.4.9-80.5 13.4-89.1 14.8-8.6 1.5-14 4.9-8.7 12.3 4.7 6.6 53.4 75.7 64.2 90.9l-193.7 46.4L161.2 48.7c-6.1-9.1-7.4-12.3-21.4-11.6-14 .6-120.9 9.5-128.5 10.2-7.6.6-16 4-8.4 22s129 279.6 132.4 287.2c3.4 7.6 12.2 20 32.8 15 21.1-5.1 94.3-24.2 134.3-34.7 21.1 38.3 64.2 115.9 72.2 127 10.6 14.9 18 12.4 34.3 7.4 12.8-3.9 199.6-71.1 208-74.5 8.4-3.5 13.6-5.9 7.9-14.4-4.2-6.2-53.5-72.2-79.3-106.8 17.7-4.7 80.6-21.4 87.3-23.3 7.9-2 9-5.8 4.7-10.6zm-352.2 72c-2.3.5-110.8 26.5-116.6 27.8-5.8 1.3-5.8.7-6.5-1.3-.7-2-129-266.7-130.8-270-1.8-3.3-1.7-5.9 0-5.9s102.5-9 106-9.2c3.6-.2 3.2.6 4.5 2.8 0 0 142.2 245.4 144.6 249.7 2.6 4.3 1.1 5.6-1.2 6.1zm306 57.4c1.7 2.7 3.5 4.5-2 6.4-5.4 2-183.7 62.1-187.1 63.6-3.5 1.5-6.2 2-10.6-4.5s-62.4-106.8-62.4-106.8L518 280.6c4.7-1.5 6.2-2.5 9.2 2.2 2.9 4.8 62.4 85.5 64.1 88.2zm12.1-134.1c-4.2.9-73.6 18.1-73.6 18.1l-56.7-77.8c-1.6-2.3-2.9-4.5 1.1-5s68.4-12.2 71.3-12.8c2.9-.7 5.4-1.5 9 3.4 3.6 4.9 52.6 67 54.5 69.4 1.8 2.3-1.4 3.7-5.6 4.7z" /></svg>
	                    </div>
	                </div>
	                <div class="skill-div px-6 lg:px-10 py-0 cursor-pointer">
	                    <div class="flex flex-col items-center">
	                        <img class="h-12 h-12 text-red-600 object-cover object-center"    src="~/assets/img/inertiajs.png"  alt="@inertiajs">
	                    </div>
	                </div>

	                <div class="skill-div px-6 lg:px-10 py-0 cursor-pointer">
	                    <div class="flex flex-col items-center">
	                        <img class="h-12 h-12 text-red-600 object-cover object-center" src="~/assets/img/livewire.png"  alt="@livewire">
	                    </div>
	                </div>

	            </div>

            </div>
    	</vue-simplebar>
        <section id="projects">
          <div class="mt-24 py-3  ">
              <h1 class="font-bold text-indigo-600 text-left text-4xl tracking-wide">Projects I have Worked on -</h1>
              <div class="flex flex-col justify-between  mt-10">
                  <div class="flex flex-col md:flex-row justify-between md:items-center mb-24 ">
                      <div class="w-full md:w-1/2 md:order-2">
                          <a  href="https://github.com/soltee/invoices" target="_blank">
                              <img class="shadow-lg hover:opacity-75 hover:shadow-xl" src="~assets/img/invoices.png" alt="invoices">
                          </a>
                      </div>
                      <div class="flex flex-col mt-3 md:mt-0 md:w-1/2 ">
                          <a target="_blank"
                              href="https://github.com/soltee/invoices">
                              <h3 class="text-xl md:text-3xl text-indigo-500  font-semibold  hover:opacity-75 border-b border-blue-200 w-40 hover:border-indigo-600">Invoices</h3>
                          </a>
                          <p class="mt-4 font-semibold leading-8 text-lg md:text-xl text-indigo-500">Invoice is an client & invoice management system for freelancers built in laravel, vuejs & inertiajs.</p>
                      </div>
                  </div>
                  <div class="flex flex-col md:flex-row justify-between md:items-center mb-16 ">
                      <div class="w-full md:w-1/2 md:order-2">
                          <a target="_blank"
                              href="https://github.com/soltee/talk_events">
                              <img class="shadow-lg hover:opacity-75 hover:shadow-xl" src="~assets/img/events.png" alt="Events">
                          </a>
                      </div>
                      <div class="flex flex-col mt-3 md:mt-0 md:w-1/2 ">
                          <a target="_blank" href="https://github.com/Soltee/talk_events">
                              <h3 class="text-xl md:text-3xl text-indigo-500  font-semibold  hover:opacity-75 border-b border-blue-200 w-40 hover:border-indigo-600">Talk Events</h3>
                          </a>
                          <p class="mt-4 font-semibold text-lg md:text-xl leading-8 text-indigo-500">
                              Talk_events is a demo event management web app built using Laravel & Livewire components.
                          </p>
                          

                      </div>
                  </div>
                  <div class="flex flex-col md:flex-row justify-between md:items-center mb-16 ">
                      <div class="w-full md:w-1/2 md:order-2">
                          <a target="_blank" href="https://github.com/Soltee/Footwear">
                              <img class="shadow-lg hover:opacity-75 hover:shadow-xl" src="~assets/img/footwear.png" alt="footwear">
                          </a>
                      </div>
                      <div class="flex flex-col mt-3 md:mt-0 md:w-1/2 ">
                          <a  target="_blank" href="https://github.com/Soltee/Footwear">
                              <h3 class="text-xl md:text-3xl text-indigo-500  font-semibold  hover:opacity-75 border-b border-blue-200 w-40 hover:border-indigo-600">Footwear</h3>
                          </a>
                          <p class="mt-4 font-semibold leading-8 text-lg md:text-xl text-indigo-500">Footwear is an online shoe store that provides vast number of shoes for man, women & baby built using Laravel and vueJS</p>
                          <div class="flex items-center mt-3">
                          </div>
                      </div>
                  </div>
                  <div class="flex flex-col md:flex-row justify-between md:items-center mb-16 ">
                      <a target="_blank" href="https://github.com/Soltee" class="  w-auto  text-indigo-600  hover:text-indigo-500 border-b border-indigo-200 hover:border-indigo-600  text-xl font-semibold uppercase">Check out More -</a>
                  </div>
              </div>
          </div>
        </section>

        <!--Projects section Ends-->
        <section id="about-me">
        
          <div class="py-6 mt-16">
              <h1 class="font-bold text-indigo-600 text-left text-4xl uppercase tracking-wide">More About Me -</h1>
               <div class="my-8 flex flex-col md:flex-row md:items-center md:justify-between">
                  	<div class="relative md:order-2 md:w-1/2 overflow-hidden flex items-center justify-end">
                      <img class="rounded " src="~assets/img/index.png" alt="Prabin">
                  	</div>
                   	<div class="sm:w-1/2 mb-3 ">
                  		<p class="text-indigo-700 font-bold text-center leading-8 text-lg md:text-xl   text-justify md:pr-6">My full name is Prabin Gurung. Since I started programming, I have worked with different technologies and built several projects which I really enjoyed it.
                  		My current tech stack includes Laravel, Vuejs, InertiaJs, Livewire and TailwindCSS.</p>
                  	</div>
              </div>
          </div>
          
        </section>
    </main>
    
  </div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
	components : {
    pdf,
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
