import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

var pubgApiUrl = "https://pubg.op.gg/api/users/59fe35bdf5bab40001810631/ranked-stats?season=2018-01&server=krjp&queue_size=1&mode=tpp"

Vue.prototype.$http = axios

new Vue({
    el: '#app',
    render: h => h(App),
    methods: {
        getUserRank(resource) {
            console.log("dfdfdfdf")
            this.$http.get(pubgApiUrl).then((response) => {
                console.log("response", response)
                this.message = response.data.message;
            });
        }
    }
})