
console.log('toffie')
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//select tab content item
function selectItem(e) {
    console.log('selectitems');
    removeBorder();
    //add border to current tab
    this.classList.add('tab-border');
}


//listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}


//API WORK
// console.log('hello world')
const URL = "https://project-apis.codespace.co.za/api/movies"
const URL2 = "https://project-apis.codespace.co.za/api/list"




//Get Data
const getData = () => new Promise((resolve) => {
    fetch(URL)
        .then(response => response.json())
        .then(json => json.data.map(item => item))
        .then(names => resolve(names))

})



//example 2 how to print as list
// fetch(URL, { method: "GET" })
//     .then(response => response.json())
//     .then((response) => {
//         const liElements = response.data
//             .map((item) => `<li>${item.name}</li>`)
//             .join('')

//         document.body.innerHTML = `<ul>${liElements}</ul>`
//     })



//VUE WORK
const { createApp } = window.Vue

//example 2 how to print as list
// fetch(URL, { method: "GET" })
//     .then(response => response.json())
//     .then((response) => {
//         const liElements = response.data
//             .map((item) => `<li>${item.name}</li>`)
//             .join('')

//         document.body.innerHTML = `<ul>${liElements}</ul>`
//     })


const component = {
    data() {
        return {
            list: [],
            watchlist: [],
            search: '',
        }
    },
    methods: {
        addToWatchlist(item) {
            let jsonItem = JSON.stringify(item);
            console.log("addedtowatchlist")
            this.watchlist.push(jsonItem);
            localStorage.setItem('movieWatchlist', JSON.stringify(this.watchlist));

        },
        fetchWatchlist() {
            let localStorageWatchlist = localStorage.getItem('movieWatchlist')
            if (!localStorageWatchlist) {
                return
            }
            this.watchlist = JSON.parse(localStorageWatchlist);
        }
    },
    computed: {
        filteredList() { //HOW TO FILTER IN Vue
            return this.list.filter(item => item.name.includes(this.search))
        },
        inWatchlist(name) {
            console.log('this is name', name)
            return this.watchlist.filter(movie => (JSON.parse(movie).name !== name)).length
        },
    },

    mounted() {
        console.log("im mounted")
        getData().then(resolveData => { this.list = resolveData })
        this.fetchWatchlist()
        console.log('fetchedwatchlist', this.watchlist)
    },
    template: /*HTML - first line cool tip for while data loading*/`
    <div v-if="list.length < 1">Fetching data...</div> 
    <div v-else>
        <input v-model="search">
        <div> {{ search }} </div>
            <ul class="movieList">
                 <li v-for="item in filteredList">
                 <div class="thumbnailDiv">
                 {{ item.name }} 
                 <img :src="item.image" alt="item.name" class="thumbnail">
                 <button @click="addToWatchlist(item)" class="btn btn-rounded" v-if="inWatchlist">Remove</button>
                 <button @click="addToWatchlist(item)" class="btn btn-rounded" v-else>Add To Watchlist</button>
                 </div>
                 </li>
             </ul>
        </div>
`
}



window.addEventListener('DOMContentLoaded', () => {
    const app = createApp(component)
    app.mount('#app')
})