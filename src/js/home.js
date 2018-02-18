export default {
    data() {
        return {
            matchs:[],
            nearMe:[],
            products:[],
            loading:false,
            slide: 0,
            sliding: null
        }
    },
    methods: {
        onSlideStart (slide) {
            this.sliding = true
        },
        onSlideEnd (slide) {
            this.sliding = false
        }
    },
    mounted() {
        this.$match = this.$resource('matchs/shortly/3', {}, {}, {
            before: () => {
                this.loading = true
            },
            after: () => this.loading = false
        })
        this.$match.query().then((response) => {
            this.matchs = response.data
        }, (response) => {
            console.log('error', response)
        }),

        this.$matchnear = this.$resource('matchs/shortly/1', {}, {}, {
            before: () => {
                this.loading = true
            },
            after: () => this.loading = false
        })
        this.$matchnear.query().then((response) => {
            this.nearMe = response.data
        }, (response) => {
            console.log('error', response)
        }),

        this.$products = this.$resource('products/newest/3', {}, {}, {
            before: () => {
                this.loading = true
            },
            after: () => this.loading = false
        });
        this.$products.query().then((response) => {
                this.products = response.data;
        }, (response) => {
            console.log('error', response)
        })
    }
}
