export default {
    data() {
        return {
            product:null,
            loading:false,
            selected: 'null',
            couleurs: [
                { value: null, text: 'Selectionnez une option' },
                { value: 'blue', text: 'Bleu' },
                { value: 'red', text: 'Rouge' },
                { value: 'yellow', text: 'Jaune' },
                { value: 'black', text: 'Noir' }
            ],
            tailles: [
                { value: null, text: 'Selectionnez une option' },
                { value: 'xs', text: 'XS' },
                { value: 's', text: 'S' },
                { value: 'm', text: 'M' },
                { value: 'l', text: 'L' },
                { value: 'xl', text: 'XL' }
            ]
        }
    },
    mounted() {
        this.$product = this.$resource('products{/id}', {}, {}, {
            before: () => {
                this.loading = true
            },
            after: () => this.loading = false
        })
        this.$product.query({id:this.$route.params.id}).then((response) => {
            this.product = response.data
        }, (response) => {
            console.log('error', response)
        })

        let user_id = this.$cookies.get("user_id");
        if (user_id == null) {
            var sha1 = require('sha1');
            user_id = sha1(Date.now());

            this.$cookies.set("user_id", user_id, Infinity);
        }

        this.$user = this.$resource('clicks/product{/id}', {}, {}, {
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
            this.$cookies.set("user", JSON.stringify(this.user), Infinity);
        }, (response) => {
            console.log('error', response)
        })
    }
}
