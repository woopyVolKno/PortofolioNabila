// mendapatkan element dengan id
const button = document.getElementById('btn');
// mendapatkan element dengan class
const btn = document.querySelector('.btn')

const modal = document.querySelector('.modal')

button.addEventListener('click', () =>{
    modal.classList.add('show')
})

// remove
const btnhilang = document.getElementById('btn-hilang');

btnhilang.addEventListener('click', () =>{
    modal.classList.remove('show')
});
