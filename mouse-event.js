const MouseEvent = {
    data() {
        return {
            x: 0,
            y: 0,
        }
    },
    methods: {
        handleEvent(event) {
            console.log(event)
        },
        handleMousemove(event) {
            this.x = event.offsetX
            this.y = event.offsetY
        }
    }
}

Vue.createApp(MouseEvent).mount('#mouse-event')
