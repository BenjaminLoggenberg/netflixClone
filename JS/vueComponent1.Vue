const { createApp } = window.Vue
import { getData } from "./movieApi"

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
    computed: {
        filteredList() { //HOW TO FILTER IN Vue
            return this.list.filter(item => item.includes(this.search))
        }
    },

    mounted() {
        console.log("im mounted")
        getData().then(resolveData => { this.list = resolveData })
    },
    template: /*HTML - first line cool tip for while data loading*/`
    <div v-if="list.length < 1">Fetching data...</div> 
    <div v-else>
        <input v-model="search">
        <div> {{ search }} </div>
            <ul>
                 <li v-for="item in filteredList"> {{ item }} </li>
             </ul>
        </div>
`
}

window.addEventListener('DOMContentLoaded', () => {
    const app = createApp(component)
    app.mount('#app')
})