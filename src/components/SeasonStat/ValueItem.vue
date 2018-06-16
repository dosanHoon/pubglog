<template>
    <li class="season_stats list item" :class="{top : top}">
        <div class="name left">
          {{name}}
        </div>
        <div class="value" :class="{highlight : highlight}">{{value}} </div>
    </li>
</template>

<script>
export default {
  name: 'ValueItem',
  props: ['name', 'value', 'highlight', 'top']
}
</script>

<style scoped>
.value {
  font-weight: bold;
}
.season_stats.list.item:not(.top) {
  display: flex;
  text-align: left;
}
.season_stats.list.item .name {
  flex: 2;
}
.season_stats.list.item .value {
  flex: 1;
}
.highlight {
  color: orange;
}
</style>