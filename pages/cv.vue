<template>
	<div id="viewer" ref="viewer" class="h-screen w-full">
		<pdf src="./static/CV-Prabin.pdf" :page="1">
		    <template slot="loading">
		      <!-- loading content here... -->
		    </template>
  		</pdf>
	</div>
</template>
<script>
import pdf from 'pdfvuer'
	export default {
		components: {
		    pdf
		  }
	};
</script>
<style>

</style>