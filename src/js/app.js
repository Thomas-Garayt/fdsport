import menuResponsive from '../components/menuResponsive'

export default {
    name: 'app',
    components: {
        menuResponsive
    },
    data () {
        return {
            user:[],
            loading:false,
        }
    },
    mounted() {
        var cookieValue = this.$cookies.get("user_id")
        if(cookieValue == null) {
            var sha1 = require('sha1')
            var user_id = sha1(Date.now())

            this.$cookies.set("user_id",user_id, Infinity)
            this.$user = this.$resource('users/create', {}, {}, {
                before: () => {
                    this.loading = true
                },
                after: () => this.loading = false
            })
            this.$user.save({}, {
                cookie: {
                    name:user_id
                }
            }).then((response) => {
                this.user = response.data
                this.$cookies.set("user", JSON.stringify(this.user), Infinity);
            }, (response) => {
                console.log('error', response)
            })
        }
    }
}
