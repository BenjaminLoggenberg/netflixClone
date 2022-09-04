
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
const URL = "https://project-apis.codespace.co.za/api/movies"
const URL2 = "https://project-apis.codespace.co.za/api/list"





export const getData = () => new Promise((resolve) => {
    fetch(URL)
        .then(response => response.json())
        .then(json => json.data.map(item => item.name))
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

