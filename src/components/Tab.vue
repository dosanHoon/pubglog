<template>
    <section v-show="isActive"
        class="tabs-component-panel"
    >
        <slot />
    </section>
</template>

<script>
export default {
  props: {
    name: { required: true }
  },
  data: () => ({
    isActive: false
  }),
  computed: {}
}
</script>