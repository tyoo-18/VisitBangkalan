// Mendapatkan elemen formulir dari DOM
var form = document.getElementById("myForm");

// Menambahkan event listener untuk menanggapi pengiriman formulir
form.addEventListener("submit", function(event) {
    // Mencegah perilaku default formulir (mencegah pengiriman)
    event.preventDefault();

    // Mendapatkan nilai dari setiap input
    var nama = document.getElementById("nama").value;
    var noTelepon = document.getElementById("noTelepon").value;
    var alamat = document.getElementById("alamat").value;
    var email = document.getElementById("email").value;

    // Melakukan validasi sederhana
    if (nama === "" || noTelepon === "" || alamat === "" || email === "") {
        alert("Semua kolom harus diisi!");
        return;
    }

    // Menampilkan data yang dikumpulkan (Anda dapat menggantinya dengan logika pengiriman data)
    console.log("Nama: " + nama);
    console.log("No Telepon: " + noTelepon);
    console.log("Alamat: " + alamat);
    console.log("Email: " + email);

    // Reset formulir setelah pengiriman
    form.reset();
});