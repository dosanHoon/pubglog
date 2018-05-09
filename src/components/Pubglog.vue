<template>
<div>
  <h1>{{ nickname }}</h1>
  <h1>{{ country }}</h1>
  <select v-model="country">
    <option value="pc-krjp">krjp</option>
    <option value="pc-as">as</option>
  </select>
  <input v-model="nickname"/>
  <button v-on:click="searchLog">검색</button>
  <ul>
    <!-- <li v-for="match in matches">
      {{ match.id}}
    </li> -->
    <Match
    :userStat="currentUserStat"
    />
    <!-- <Match v-for="match in matches" key="match"/> -->
  </ul>
  </div>
</template>

<script>
import Match from "./Match.vue";

export default {
  name: "PubgLog",
  data() {
    return {
      nickname: "닉네임을 입력 해주세요",
      country: "pc-as",
      matches: [],
      currentUserStat: {}
    };
  },
  components: {
    Match
  },
  methods: {
    searchLog: function() {
      let pubgApiUrl = `https://api.playbattlegrounds.com/shards/${
        this.country
      }/players?filter[playerNames]=${this.nickname}`;

      this.$http.get(pubgApiUrl).then(response => {
        let matches = response.body.data[0].relationships.matches.data;
        // matches.forEach(({ id }) => {
        this.callMatchInfo(matches[0].id);
        // });
      });
    },

    callMatchInfo: function(id) {
      let pubgApiUrl = `https://api.playbattlegrounds.com/shards/${
        this.country
      }/matches/${id}`;

      this.$http.get(pubgApiUrl).then(response => {
        this.matches.push(response.body.included);
        this.getCurrentUserStats();
      });
    },

    getCurrentUserStats: function() {
      console.log("this.matches", this.matches);
      let userStats = this.matches[0].filter(({ attributes }) => {
        console.log("attributes", attributes);
        if (attributes.stats) {
          let { name } = attributes.stats;

          return name === this.nickname;
        }
      });

      this.currentUserStat = userStats[0].attributes.stats;
    }
  }
};
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
