<template>
  <div id="app">    
    <router-view/>
    <ul>
    <li v-for="item in items">
      <a :href="item.path">
        {{item.name}}
      </a>
    </li>
    </ul>
  </div>
</template>

<script>
// TODO
var pubgApiUrl =
  "https://pubg.op.gg/api/users/59fe35bdf5bab40001810631/ranked-stats?season=2018-01&server=krjp&queue_size=1&mode=tpp";

export default {
  name: "app",
  created() {
            this.$router.options.routes.forEach(route => {
            this.items.push({
                name: route.name,
                path: route.path
            });
            });
        },
  data() {
    return {
      msg: "웰컴 펍지 웹",
      nickname: "ahnchangho",
      items: []
    };
  },
  methods: {
    searchLog: function(nickname) {
      //TODO
      // this.$http.get(pubgApiUrl).then(response => {
      //   console.log("response", response);
      //   this.message = response.data.message;
      // });

    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: url("https://dak.gg/images/bg_pubgxp.jpg") no-repeat 50%;
  background-attachment: fixed;
  background-size: cover !important;
  background-position-y: unset !important;
  max-width: 1070px;
  margin: 0 auto;
  padding-bottom: 65px;
  min-height: 950px;
}

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
</style>
