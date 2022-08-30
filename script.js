
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



// console.log('hello world')
// const URL = "https://project-apis.codespace.co.za/api/movies"
// const URL2 = "https://project-apis.codespace.co.za/api/list"





// const { createApp } = window.Vue
// const getData = () => new Promise((resolve) => {
//     fetch(URL)
//         .then(response => response.json())
//         .then(json => json.data.map(item => item.name))
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


// const component = {
//     data() {
//         return {
//             list: [],
//             search: '',
//         }
//     },
//     computed: {
//         filteredList() { //HOW TO FILTER IN Vue
//             return this.list.filter(item => item.includes(this.search))
//         }
//     },

//     mounted() {
//         console.log("im mounted")
//         getData().then(resolveData => { this.list = resolveData })
//     },
    // template: /*HTML - first line cool tip for while data loading*/
    // <div v-if="list.length < 1">Fetching data...</div> 
    // <div v-else>
    //     <input v-model="search">
    //     <div> {{ search }} </div>
    //         <ul>
    //              <li v-for="item in filteredList"> {{ item }} </li>
    //          </ul>
    //     </div>

// }

// window.addEventListener('DOMContentLoaded', () => {
//     const app = createApp(component)
//     app.mount('#app')
// })