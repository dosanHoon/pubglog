<template>
<div>
  <h1>{{ nickname }}</h1>
  <h1>{{ country }}</h1>
  <select v-model="country">
    <option value="pc-krjp">kr</option>
    <option value="pc-jp">jp</option>
    <option value="pc-as">as</option>
    <option value="pc-kakao">kakao</option>
    <option value="pc-na">na</option>
    <option value="pc-sea">sea</option>
    <option value="pc-sa">sa</option>
  </select>
  <select v-model="season">
    <option v-for="season in seasons" v-bind:value="season.id" v-bind:key="season.id">{{season.id}}</option>
  </select>
  <input v-model="nickname"/>
  <button v-on:click="callSeasonStats">검색</button>
  <ul class="season_stat_container">
    <SeasonStat
      mode="solo"
      :userStat="userSeasonStat.solo"
    />
    <SeasonStat
      mode="duo"
      :userStat="userSeasonStat.duo"
    />
    <SeasonStat
      mode="squad"
      :userStat="userSeasonStat.squad"
    />
    </ul>
  <ul>
    <!-- <li v-for="match in matches">
      {{ match.id}}
    </li> -->
    <!-- <Match
    :userStat="currentUserStat"
    /> -->
    <!-- <Match v-for="match in matches" key="match"/> -->
  </ul>
  </div>
</template>

<script>
import Match from './Match.vue'
import SeasonStat from './SeasonStat.vue'

export default {
  name: 'PubgLog',
  data() {
    return {
      nickname: '닉네임을 입력 해주세요',
      country: 'pc-as',
      season: '',
      seasons: [],
      matches: [],
      currentUserStat: {},
      userSeasonStat: {
        gameType: '솔로',
        name: 'test',
        kills: 3,
        damageDealt: 3,
        DBNOs: 1,
        headshotKills: 2,
        rating: 1799
      }
    }
  },
  components: {
    Match,
    SeasonStat
  },
  created() {
    this.$http
      .get(`${process.env.APIURL}/seasons?country=${this.country}`)
      .then(response => {
        this.seasons = response.data.data
      })
  },
  methods: {
    callSeasonStats: function() {
      let pubgApiUrl = `${process.env.APIURL}/seasonStats`

      this.$http
        .get(pubgApiUrl, {
          params: {
            country: this.country,
            nickname: this.nickname,
            season: this.season
          }
        })
        .then(response => {
          this.userSeasonStat = response.data
        })
    },
    searchLog: function() {
      let pubgApiUrl = `${process.env.APIURL}/newPubg`

      this.$http
        .get(pubgApiUrl, {
          params: {
            country: this.country,
            nickname: this.nickname
          }
        })
        .then(response => {
          let matches = response.body.data[0].relationships.matches.data
          // matches.forEach(({ id }) => {
          this.callMatchInfo(matches[0].id)
          // });
        })
    },

    callMatchInfo: function(id) {
      let pubgApiUrl = `https://api.playbattlegrounds.com/shards/${
        this.country
      }/matches/${id}`

      this.$http.get(pubgApiUrl).then(response => {
        this.matches.push(response.body.included)
        this.getCurrentUserStats()
      })
    },

    getCurrentUserStats: function() {
      let userStats = this.matches[0].filter(({ attributes }) => {
        if (attributes.stats) {
          let { name } = attributes.stats
          return name === this.nickname
        }
      })

      this.currentUserStat = userStats[0].attributes.stats
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

.season_stat_container {
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1 {
  color: white;
}
</style>
