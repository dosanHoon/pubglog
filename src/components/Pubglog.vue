<template>
<div>
  <h1>{{ nickname }}</h1>
  <input v-model="nickname"/>
  <button v-on:click="searchLog">검색</button>
  </div>
</template>

<script>

// var pubgApiUrl = "https://api.pubgtracker.com/v2/profile/pc/"
var pubgApiUrl = "https://api.playbattlegrounds.com/shards/pc-krjp/players?filter[playerNames]="

export default {
  name: 'Login',
  data () {
    return {
      nickname: 'what is your nickName?'
    }
  },
  methods: {
    searchLog: function(nickname) {
      //TODO

      Vue.http.headers.common['Authorization'] = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2NjFlZmMwMC0xOTE1LTAxMzYtZWVhZC00YjgzYjRkZTM4NzUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTIyNzIyODQ0LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1Ymdsb2ctYTM5MjkxODEtNGYxOS00N2UxLWEwZmYtYjlmOTRhNzQ1ZGMzIiwic2NvcGUiOiJjb21tdW5pdHkiLCJsaW1pdCI6MTB9.zztYrvx6FM-MFVjWvtPC-bC-hjuHqy7jbm85fBSyfpY";

      this.$http.get(pubgApiUrl + nickname).then(response => {
        console.log("response", response);
        this.message = response.data.message;
      });

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
</style>
