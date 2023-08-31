// menampilkan alert di html
// alert('hellow world');

prompt('masukkan nama');

// dia dapat diubah ubah
const greetings = "Hallow User JW";

// dia tidak dapat diubah ubah
let greetingss = "Hallow User";

document.getElementById('greetings').innerText = greetings;

// fungsi dari variabel nama akan menyimpan yang kita asukkan di prompt
const nama = prompt('masukkan nama kamu');

// document berfungsi mengakses semua elemen yang ada pada html
// innerHTML berfungsi untuk mengubah isi dari elemen html
// getElementById berfungsi menyeleksi elemen dengan id nama
document.getElementById('nama').innerHTML = "Hallo " + nama;