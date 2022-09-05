
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

const Watchlist = []



//Get Data
// const getData = () => new Promise((resolve) => {
//     fetch(URL)
//         .then(response => response.json())
//         .then(json => json.data.map(item => item))
//         .then(names => resolve(names))

// })



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
            search: '',
        }
    },
    methods: {
        addToWatchlist(item) {
            let jsonItem = JSON.stringify(item);
            console.log("addedtowatchlist")
            Watchlist.push(jsonItem);
            localStorage.setItem('movieWatchlist', Watchlist);
        }
    },
    computed: {
        filteredList() { //HOW TO FILTER IN Vue
            console.log('outside variable', this.list);
            return this.list.filter(item => item.name.includes(this.search))
        }
    },

    mounted() {
        console.log("im mounted")
        let jsString = localStorage.getItem('movieWatchlist');
        console.log('this is jsString', jsString)
        console.log(JSON.parse(jsString))
        return this.list = JSON.parse(jsString);


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
                 <button @click="addToWatchlist(item)" class="btn btn-rounded">Add to Watchlist</button>
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