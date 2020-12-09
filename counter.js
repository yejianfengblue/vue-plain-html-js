const Counter = {
    data() {
        return {
            counter: 0,
            message: 'The counter increments every 1 second. You loaded this page on '
                + new Date().toLocaleString()
        }
    },
    mounted() {
        setInterval(() => {
            this.counter++
        }, 1000)
    },
    methods: {
        reset() {
            this.counter = 0
        }
    }
}

Vue.createApp(Counter).mount('#counter')
