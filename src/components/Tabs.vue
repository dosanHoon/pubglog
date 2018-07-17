<template>
  <div class="tabs-component">
    <ul class="tabs-component-tabs">
      <li v-for="(tab, i) in tabs"
      :key="i" :class="{ 'is-active': tab.isActive }" class="tabs-component-tab">
        <a v-html="tab.name" @click="selectTab(tab.name, $event)" class="tabs-component-tab-a"></a>
      </li>
    </ul>
    <div class="tabs-component-panels">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
	props: {},
	data: () => ({
		tabs: []
	}),
	computed: {},
	created() {
		this.tabs = this.$children
	},
	mounted() {},
	methods: {
		findTab(name) {
			return this.tabs.find(tab => tab.name === name)
		},
		selectTab(name, event) {
			if (event) {
				event.preventDefault()
			}
			const selectedTab = this.findTab(name)
			if (!selectedTab) {
				return
			}

			this.tabs.forEach(tab => {
				tab.isActive = tab.name === selectedTab.name
			})
		}
	}
}
</script>
