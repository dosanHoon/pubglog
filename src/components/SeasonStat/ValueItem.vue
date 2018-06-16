<template>
    <li class="season_stats list item">
        <div class="name left">
          {{name}}
        </div>
        <div class="value">{{value}} </div>
    </li>
</template>

<script>
export default {
  name: 'ValueItem',
  props: ['name', 'value']
}
</script>

<style scoped>
.value {
  font-weight: bold;
}
</style>