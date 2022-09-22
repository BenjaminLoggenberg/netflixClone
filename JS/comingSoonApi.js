//API WORK





//Get Data





//VUE WORK
// { createApp } = window.Vue



const comingSoonComponent = {
    data() {
        return {
            list: [],
            slide: 0,
            sliding: null
        }
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        }
    },
    computed: {

        comingSoon() {
            console.log('this', this.list.filter(item => !!item.is_coming_soon))
            return this.list.filter(item => !!item.is_coming_soon)
        },
    },

    mounted() {
        console.log("im mounted")
        getData().then(resolveData => { this.list = resolveData })
        console.log('comingSoon', this.list)


    },
    template: /*HTML - first line cool tip for while data loading*/`
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img class="d-block w-50 " :src="comingSoon[0]?.image" alt="First slide">
        </div>
        <div class="carousel-item">
            <img class="d-block w-50" :src="comingSoon[1]?.image" alt="Second slide">
        </div>
        <div class="carousel-item">
            <img class="d-block w-50" :src="comingSoon[2]?.image" alt="Third slide">
        </div>
    </div>
</div>
`
}



window.addEventListener('DOMContentLoaded', () => {
    const app = createApp(comingSoonComponent)
    app.mount('#comingSoon')
})