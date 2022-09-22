//API WORK





//Get Data
const getData2 = () => new Promise((resolve) => {
    fetch('https://project-apis.codespace.co.za/api/movies')
        .then(response => response.json())
        .then(json => json.data.map(item => item))
        .then(names => resolve(names))

})





//VUE WORK
const { createApp } = window.Vue



const comingSoonComponent = {
    data() {
        return {
            list: [],
        }
    },
    methods: {

    },
    computed: {

        comingSoon() {
            console.log('this', this.list)
            return this.list.filter(item => !!item.is_coming_soon)
        },
    },

    mounted() {
        console.log("im mounted")
        getData2().then(resolveData => { this.list = resolveData })
        console.log('comingSoon', this.list)


    },
    template: /*HTML - first line cool tip for while data loading*/`
    <div id="carouselExampleIndicators" class="carousel slide mainDisplay-top" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active"  v-for="item in comingSoon">
            {{item}}
            <img class="d-block w-100" :src="item.image" alt="First slide">
        </div>

    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
`
}



window.addEventListener('DOMContentLoaded', () => {
    const app = createApp(comingSoonComponent)
    app.mount('#comingSoon')
})