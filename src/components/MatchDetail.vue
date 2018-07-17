<template>
	<tabs>
		<tab name="전체 순위">
			"전체순위"
		</tab>
		<tab name="팀 스탯">
			"팀스탯"
		</tab>
		<tab name="종합">
			"종합"
		</tab>
	</tabs>
</template>

<script>
import Tab from './tab.vue'
import Tabs from './tabs.vue'
import Panel from './Panel.vue'

export default {
  name: 'MatchDetail',
  data() {
    return {
      현재뷰: []
    }
  },
  components: {
    Tab,
    Tabs
  }
}
</script>

<style scoped>
</style>
