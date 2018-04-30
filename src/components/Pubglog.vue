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
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      nickname: "what is your nickName?",
      country: "pc-as"
    };
  },
  methods: {
    searchLog: function() {
      console.log("nickname", this.nickname);
      //TODO
      // this.$http.headers.common["Authorization"] =
      //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2NjFlZmMwMC0xOTE1LTAxMzYtZWVhZC00YjgzYjRkZTM4NzUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTIyNzIyODQ0LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1Ymdsb2ctYTM5MjkxODEtNGYxOS00N2UxLWEwZmYtYjlmOTRhNzQ1ZGMzIiwic2NvcGUiOiJjb21tdW5pdHkiLCJsaW1pdCI6MTB9.zztYrvx6FM-MFVjWvtPC-bC-hjuHqy7jbm85fBSyfpY";
      // this.$http.headers.common["Accept"] = "application/vnd.api+json";

      let pubgApiUrl = `https://api.playbattlegrounds.com/shards/${
        this.country
      }/players?filter[playerNames]=${this.nickname}`;

      this.$http.get(pubgApiUrl).then(response => {
        console.log("response", response);
        this.message = response.data.message;
      });

      // axios
      //   .get(pubgApiUrl + nickname, "", {
      //     headers: {
      //       Authorization:
      //         "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2NjFlZmMwMC0xOTE1LTAxMzYtZWVhZC00YjgzYjRkZTM4NzUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTIyNzIyODQ0LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1Ymdsb2ctYTM5MjkxODEtNGYxOS00N2UxLWEwZmYtYjlmOTRhNzQ1ZGMzIiwic2NvcGUiOiJjb21tdW5pdHkiLCJsaW1pdCI6MTB9.zztYrvx6FM-MFVjWvtPC-bC-hjuHqy7jbm85fBSyfpY",
      //       Accept: "application/vnd.api+json"
      //     }
      //   })
      //   .then(response => {
      //     console.log("response", response);
      //     this.message = response.data.message;
      //   });
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
