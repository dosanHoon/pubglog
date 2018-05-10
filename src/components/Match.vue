<template>
    <li>
        <p>{{userStat.name}}</p>
        <ul>
        <li>킬 : {{userStat.kills}}</li>
        <li>데미지 : {{userStat.damageDealt.toFixed(0)}}</li>
        <li>기절 : {{userStat.DBNOs}}</li>
        <li>헤드샷 : {{userStat.headshotKills}}</li>
        </ul>
    </li>
</template>

<script>
export default {
  name: "Match",
  props: ["userStat"]
};
</script>

<style scoped>
ul {
  background: #dde5d0;
  padding: 30px;
  color: black;
}
ul:after {
  clear: both;
  display: block;
  content: "";
}
li ul li {
  width: 50%;
  float: left;
}
</style>