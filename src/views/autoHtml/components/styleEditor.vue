<template>
	<div>
		<pre v-html="highlightedCode" />
	</div>
</template>

<script>
import Prism from "prismjs";
import hljs from "highlight.js";
export default {
	name: "styleEditor",
	props:['code'],
	computed: {
		highlightedCode() {
			return Prism.highlight(this.code, Prism.languages.css)
		},
	},
	methods: {
		goBottom(){
			this.$refs.container.scrollTop = 100000
		}
	},
};
</script>

<style lang="less" scoped>
</style>
