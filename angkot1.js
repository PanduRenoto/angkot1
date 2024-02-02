var jmlAngkot = 10
var angkotJalan = 6
var noAngkot = 1

for(noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if(noAngkot <= angkotJalan && noAngkot !== 5) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
    } else if(noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.')
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
    }
}

var angka = prompt('Masukkan Angka:')

if(angka % 2 === 0) {
    alert(angka + ' adalah bilangan genap')
} else if(angka % 2 === 1) {
    alert(angka + ' adalah bilangan ganjil')
} else {
    alert (angka + ' bukan merupakan angka')
}