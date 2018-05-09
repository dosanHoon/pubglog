<template>
    <li>
        {{userStat.kills}}
    </li>
</template>

<script>
export default {
  name: "Match",
  props: ["userStat"]
};
</script>

<style scoped>

</style>