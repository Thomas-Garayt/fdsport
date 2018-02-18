export default {
    data() {
        return {
            user:false,
            item:false,
            clicks:false,
            loading:false
        }
    },
    mounted() {

        let usr = this.$cookies.get("user")
        if(usr) {
            this.user = JSON.parse(usr)
        }

        let item = this.$cookies.get('item')
        this.item = false
        if(item) {
            this.item = JSON.parse(item)
        }

        this.$clicks = this.$resource('clicks/user{/cookie}', {}, {}, {
            before: () => {
                this.loading = true
            },
            after: () => this.loading = false
        })
        let cookieName = this.$cookies.get('user_id')
        if(cookieName) {
            this.$clicks.query({cookie: cookieName}).then((response) => {
                this.clicks = response.data
            }, (response) => {
                console.log('error', response)
            })
        }

    }
}
