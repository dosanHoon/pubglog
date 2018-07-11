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
  <button v-on:click="getIdByNickName">검색</button>
  <ul class="season_stat_container" v-if="isEmpty">
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
    <div class="matchs_container" v-if="isEmpty">
      <h1>최근 경기
        </h1>
      <ul>
        <Match v-for="match in matches" v-bind:key="match.id"
          :matchInfo="match"
          :pubgId="pubgId"
        />
      </ul>
    </div>
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
      pubgId: '',
      season: '',
      seasons: [],
      matches: [],
      userSeasonStat: {}
    }
  },
  computed: {
    isEmpty: function() {
      return !_.isEmpty(this.userSeasonStat)
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
    initData: function() {
      this.matches = []
      this.pubgId = ''
      this.userSeasonStat = {}
    },
    getIdByNickName: function() {
      this.initData()

      let pubgApiUrl = `${process.env.APIURL}/pubgId`

      this.$http
        .get(pubgApiUrl, {
          params: {
            country: this.country,
            nickname: this.nickname
          }
        })
        .then(response => {
          if (response.data.returnCode === 0) {
            this.pubgId = response.data.resultValue
            this.callSeasonStats()
            this.getMatches()
          } else {
            this.nickname = '잘못된 닉네임 입니다.'
          }
        })
    },
    callSeasonStats: function() {
      let pubgApiUrl = `${process.env.APIURL}/seasonStats`

      this.$http
        .get(pubgApiUrl, {
          params: {
            country: this.country,
            season: this.season,
            pubgId: this.pubgId
          }
        })
        .then(response => {
          this.userSeasonStat = response.data
        })
    },
    getMatches: function(id) {
      let pubgApiUrl = `${process.env.APIURL}/getMatches`

      this.$http
        .get(pubgApiUrl, {
          params: {
            country: this.country,
            season: this.season,
            pubgId: this.pubgId
          }
        })
        .then(response => {
          this.matches = response.data
        })
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
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1 {
  color: white;
}
.matchs_container {
  margin: 10px;
}

.matchs_container li {
  margin-bottom: 10px;
}
</style>
