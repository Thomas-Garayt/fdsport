export default {
    data() {
        return {
            match:null,
            loading:false
        }
    },
    mounted() {
        this.$match = this.$resource('matchs{/id}', {}, {}, {
            before: () => {
                this.loading = true
            },
            after: () => this.loading = false
        })
        this.$match.query({id:this.$route.params.id}).then((response) => {
            this.match = response.data
        }, (response) => {
            console.log('error', response)
        })

        var user_id = this.$cookies.get("user_id");
        if (user_id == null) {
            var sha1 = require('sha1');
            user_id = sha1(Date.now());
            this.$cookies.set("user_id", user_id, Infinity);
        }

        this.$user = this.$resource('clicks/matchs{/id}', {}, {}, {
            before: () => {
                this.loading = true
            },
            after: () => this.loading = false
        })
        this.$user.update({id: this.$route.params.id}, {
            cookie: {
                name: user_id
            }
        }).then((response) => {
            this.user = response.data
        }, (response) => {
            console.log('error', response)
        })

    }
}
