export default {
    data() {
        return {
            products:[],
            loading:false
        }
    },
    mounted() {
        this.$product = this.$resource('products/kid', {}, {}, {
            before: () => {
                this.loading = true
            },
            after: () => this.loading = false
        })
        this.$product.query().then((response) => {
            this.products = response.data
        }, (response) => {
            console.log('error', response)
        })
    }
}
