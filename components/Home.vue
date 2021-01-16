<template>
	<component :is="$page.frontmatter.homeComponent || 'ParentHome'" />
</template>

<script>
import ParentHome from '@parent-theme/components/Home.vue'

export default {
	components: {
		ParentHome, // eslint-disable-line vue/no-unused-components
	},
}
</script>
