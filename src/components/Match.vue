<template>
    <li class="match_container">
      <div class="match_info_wrap item_column">
        <p>{{mapName}}</p>
        <p>{{matchInfo.data.attributes.gameMode}}</p>
        <p>{{matchInfo.data.attributes.createdAt.substring(0,10)}}</p>
      </div>
      <template v-if="userStats">
        <div class="match_info_wrap item_column">
          <p>{{userStats.winPlace}} : 등</p>
          <p>{{userStats.kills}} : 킬</p>
        </div>  
        <div class="match_info_wrap item_column">
          <p>데미지 : {{userStats.damageDealt.toFixed(0)}}</p>
          <p>생존 시간 : {{(userStats.timeSurvived/60).toFixed(2)}} 분</p>
        </div>
      </template>
    </li>
</template>

<script>
export default {
  name: 'Match',
  data() {
    return {
      // 팀정보: [],
      // 유저들정보: []
    }
  },
  props: ['matchInfo', 'pubgId'],
  computed: {
    mapName: function() {
      return this.matchInfo.data.attributes.mapName.replace('_Main', '')
    },
    팀정보: function() {
      console.log('팀정보')
      let result = []
      this.matchInfo.included.forEach(data => {
        if (data.type === 'roster') {
          result.push(data)
        }
      })

      return result
    },
    유저들정보: function() {
      let result = []
      this.matchInfo.included.forEach(data => {
        if (data.type == 'participant') {
          result.push(data)
        }
      })

      return result
    },
    userStats: function() {
      let result

      this.유저들정보.forEach((data, index) => {
        let id = data.attributes.stats.playerId
        if (id === this.pubgId) {
          result = data.attributes.stats
        }
      })
      return result
    }
  },
  created() {
    console.log('created')
  }
}
</script>

<style scoped>
.match_container {
  background: #dde5d0;
  padding: 10px;
  color: black;
  border-left: 4px solid #629e60;
}
.item_column {
  display: table-cell;
  vertical-align: middle;
}
.match_info_wrap {
  width: 82px;
  padding-left: 12px;
  text-align: center;
}
p {
  margin: 0;
}
</style>