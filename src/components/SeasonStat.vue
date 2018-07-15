<template>
      <div class="season_stats_wrapper card">
        <div class="card_title clear" :class="mode">
          <h4 class="game_type">
            {{mode}}
          </h4>
          <div class="game_count">
            {{userStat.roundsPlayed}} 게임
          </div>
        </div>
        <template v-if="userStat.roundsPlayed != 0">
        <ul class="season_stats list wraper clear">
          <ValueItem
            name="K/D"
            :value="(userStat.kills / userStat.roundsPlayed).toFixed(1)"
            highlight="true"
            top="true"
          />
          <ValueItem
            name="평균 데미지"
            :value="(userStat.damageDealt / userStat.roundsPlayed).toFixed(1)"
            highlight="true"
            top="true"
          />
          <ValueItem
            name="팀킬"
            :value="userStat.teamKills"
          />
          <ValueItem
            name="치킨"
            :value="userStat.wins"
          />
          <ValueItem
            name="최대 거리킬"
            :value="`${userStat.longestKill.toFixed(1)}m`"
          />
          <ValueItem
            name="헤드샷"
            :value="`${this.headShotRate}%`"
          />
          <ValueItem
            name="고라니"
            :value="userStat.roadKills"
          />
          <ValueItem
            name="최다 킬"
            :value="userStat.roundMostKills"
          />
          <ValueItem
            name="top10s"
            :value="userStat.top10s"
          />
          <ValueItem
            name="차량 폭파"
            :value="userStat.vehicleDestroys"
          />
        </ul>
        </template>
        <div class="no_game card_content" v-if="userStat.roundsPlayed == 0">
          <p>게임이 없습니다.</p>
        </div>
      </div>
</template>

<script>
import ValueItem from './SeasonStat/ValueItem.vue'

export default {
  name: 'SeasonStat',
  props: ['userStat', 'mode'],
  components: {
    ValueItem
  },
  computed: {
    headShotRate: function() {
      let headShot
      if (this.userStat.kills != 0) {
        headShot = (
          this.userStat.headshotKills /
          this.userStat.kills *
          100
        ).toFixed(1)
      } else {
        headShot = 0
      }
      return headShot
    }
  }
}
</script>

<style scoped>
.left {
  float: left;
}
.right {
  float: right;
}
h4 {
  margin: 0;
  padding: 0;
}

.clear:after {
  clear: both;
  display: block;
  content: "";
}
.season_stats_wrapper {
  background-color: white;
  margin-right: 10px;
  margin-left: 10px;
  flex: 1;
}
.card_title {
  background-color: #e69557;
  color: white;
  text-align: left;
  padding: 10px;
}

.card_title.duo {
  background-color: #43a5a0;
}

.card_title.squad {
  background-color: #6d68ac;
}
.card_title .game_type {
  float: left;
  vertical-align: middle;
}
.card_title .game_count {
  float: right;
}
.stats_head {
  padding: 20px;
  text-align: left;
}
.stats_rating {
  font-size: 30px;
  font-style: bold;
}
.season_stats.list .item {
  float: left;
  width: 50%;
  padding: 5px;
  box-sizing: border-box;
}
.season_stats.list .item.top {
  text-align: left;
}
.season_stats.list .item:nth-child(4n-1),
.season_stats.list .item:nth-child(4n) {
  background-color: #f6f6f6;
}
.season_stats.list .item:nth-child(2n-1) {
  border-right: 1px solid #eaeaea;
}
.season_stats.list.wraper {
}

.card_content {
  border-bottom: 1px solid #eaeaea;
}
</style>