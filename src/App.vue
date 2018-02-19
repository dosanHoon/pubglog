<template>
  <div id="app">  
    <h1>{{$route.name}}</h1>      
    <ul>
      <li v-for="(item , index) in items" :key="index">
        <a :href="item.path">
          {{item.name}}
        </a>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
// TODO
var pubgApiUrl = "";

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

  display: flex;
  flex-direction:column;
}


h1,
h2 {
  font-weight: normal;
  color:white;
  margin: 0;
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
