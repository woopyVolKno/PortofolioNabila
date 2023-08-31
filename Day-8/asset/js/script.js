var nama = "Nabilaww"; //
let usia = 16; //variable dapat berubah
const PI = 3.14; //variable tidak dapat berubah/tetap

// console.log berfungsi menampilkan sesuatu pada log web
console.log("Nama: " + nama)
console.log("Usia: " + usia)

// tipe data string
let namalengkap = "Nabila Fajrin Damayanti";
let greetings = "Halooow bwang!!😁😁😁😁😁";

console.log(greetings + namalengkap)

// tipe data integer
let nilai = "95"
let nilai2 = "85.7"

console.log("Nilai Asahi: " + nilai, "Nilai Nabila: " + nilai)

// tipe data boolean
let benar = true;
let salah = false;

// 
let tidakAdaNilai = null;

// tipe data digunakan untuk menyimpan banyak variable dalam satu variable
let Nabila = {
    hobi: "tidur",
    usia: 16,
    pekerjaan: "Programmer",
    status: "server not found 404"
}

const list = document.getElementById('list');

for (const key in Nabila) {
    if (Nabila.hasOwnProperty(key)) {
        const listItem = document.createElement("li");
        listItem.textContent = `${key}: ${Nabila[key]}`;
        list.appendChild(listItem);
    }
}

console.log(Nabila)

// tipe data array
// array dimulai dari angka 0
let pacar = ["Hyunsuk, Jeongwoo, Huahaha"]

console.log(pacar);
// cara akses arrayy
console.log(pacar[1]);

// membuat fungsi
function sapaan() {
    console.log("Hallow B!")
}
// memanggil fungsi
sapaan();


// fungsi dengan paramenter
function play(judul){
    console.log("Anda memutar film " + judul)
}

// memanggil paramenter
play("Goblin")

// fungsi dengan return
function tambah(number1, number2){
    console.log(number1 + number2)
}
// memanggil fungsi dengan return
tambah(10, 20);

// kurang
function kurang(number1, number2){
    console.log(number1 - number2)
}
kurang(100, 20);

// pengkondisian if dalam javascript
let jumlahabsen = 5;

// jika kondisi terpenuhi 
if (jumlahabsen >= 5) {
    console.log("Anda Rajin")
} else {

    // jika kondisi tidak terpenuhi
    console.log("Anda Dipecat")
}

let nilaiKKM = 80;

if (nilaiKKM >= 80) {
    console.log("Anda lulus")
} else {
    console.log("Anda tidak lulus")
}

nilaiDoni = 60;
if (nilaiDoni >= 80) {
    console.log("A")
} else if (nilaiDoni >= 70) {
    console.log("B")
} else if (nilaiDoni >= 60) {
    console.log("C")
} else {
    console.log("Doni dikeluarkan")
}


let hari = "Senin"

// Pengkodisian switch dalam javascript
switch(hari){
    case "Senin" :
        console.log("Hari Senin")
        break;
    case "Selasa" :
        console.log("Hari Selasa")
        break;
    case "Rabu" :
        console.log("Hari Rabu")
        break;
    default:
        console.log("Hari Tidak Ditemukan")
}

let waktu = new Date().getHours();
// 6 pagi 12 siang 18 malam

// pengkodisian if dalam javascript
// jika waktu lebih dari 6 dan kurang dari 12
if (waktu >= 6 && waktu <12) {
    console.log("Selamat Pagi")
} else if (waktu >= 12 && waktu < 18) {
    console.log("Selamat Siang")
} else if (waktu >= 18 && waktu < 24) {
    console.log("Selamat Malam")
} else {
    console.log("Selamat Tidur")
}
