
const NOMOR_WA = "6285177692151";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-kontak");

    if (!form) {
        alert("Form kontak tidak ditemukan. Periksa ID form di HTML.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const telepon = document.getElementById("telepon").value.trim();
        const minat = document.getElementById("minat").value;
        const pesan = document.getElementById("pesan").value.trim();

        const isiPesan =
`Halo, saya menghubungi melalui website CV kamu.

Nama Lengkap: ${nama}
Email: ${email || "-"}
No. Telepon: ${telepon || "-"}
Bidang Minat: ${minat}
Pesan: ${pesan}`;

        const teks = encodeURIComponent(isiPesan);
        const urlWhatsApp =
            `https://wa.me/${NOMOR_WA}?text=${teks}`;

        window.location.href = urlWhatsApp;
    });
});
