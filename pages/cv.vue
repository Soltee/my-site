<template>
	<div>
		
	  	<client-only>
	        <vue-pdf class="h-screen w-full" :src="pdfSrc" :page="1" @num-pages="pdfPageCount = $event"></vue-pdf>
	    </client-only>
	</div>
</template>
<script>
export default {
    data() {
		return {
		    pdfSrc: './static/prabin.pdf',
		    pdfPageCount : 0,
		}
	}
};
</script>
<style>

</style>