export default {
    data() {
        return {
            matchs:[],
            loading:false
        }
    },
    mounted() {

        this.$match = this.$resource('matchs{/id}', {}, {}, {
            before: () => {
                this.loading = true
            },
            after: () => this.loading = false
        });

        this.$match.query().then((response) => {
            this.matchs = response.data;
        }, (response) => {
            console.log('error', response)
        });
    }
}
