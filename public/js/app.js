const dataKonser = [
    {
        id: 1,
        nama: "NEXFEST Jakarta 2026",
        genre: "Rock",
        tanggal: "14 November 2026",
        lokasi: "GBK Senayan, Jakarta",
        harga: 850000,
        gambar: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500"
    },
    {
        id: 2,
        nama: "Pop Music Night",
        genre: "Pop",
        tanggal: "20 November 2026",
        lokasi: "ICE BSD, Tangerang",
        harga: 650000,
        gambar: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500"
    },
    {
        id: 3,
        nama: "Indie Sound Fest",
        genre: "Indie",
        tanggal: "05 Desember 2026",
        lokasi: "Jogja Expo Center",
        harga: 350000,
        gambar: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500"
    },
    {
        id: 4,
        nama: "Golden Acoustic Tour",
        genre: "Pop",
        tanggal: "12 Desember 2026",
        lokasi: "Grand City, Surabaya",
        harga: 500000,
        gambar: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500"
    }
];

let itemDipilih = null;

function tampilkanKonser(list) {
    const container = document.getElementById('concertContainer');
    container.innerHTML = '';

    list.forEach(item => {
        const html = `
            <div class="card">
                <img src="${item.gambar}" alt="${item.nama}">
                <div class="card-content">
                    <span class="card-tag">${item.genre}</span>
                    <div class="card-title">${item.nama}</div>
                    <div class="card-info">
                        📅 ${item.tanggal}<br>
                        📍 ${item.lokasi}
                    </div>
                    <div class="card-price">Rp ${item.harga.toLocaleString('id-ID')}</div>
                    <button class="btn-beli" onclick="bukaModalPesan(${item.id})">Beli Tiket</button>
                </div>
            </div>
        `;
        container.innerHTML += html;
    });
}

function filterByCat(kategori, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (kategori === 'Semua') {
        tampilkanKonser(dataKonser);
    } else {
        const hasilFilter = dataKonser.filter(k => k.genre === kategori);
        tampilkanKonser(hasilFilter);
    }
}

document.getElementById('searchInput').addEventListener('keyup', function(e) {
    const kataKunci = e.target.value.toLowerCase();
    const hasilCari = dataKonser.filter(k => 
        k.nama.toLowerCase().includes(kataKunci) || 
        k.lokasi.toLowerCase().includes(kataKunci)
    );
    tampilkanKonser(hasilCari);
});

function bukaModalPesan(id) {
    itemDipilih = dataKonser.find(k => k.id === id);
    document.getElementById('modalEventTitle').innerText = itemDipilih.nama;
    document.getElementById('orderModal').style.display = 'flex';
    hitungTotal();
}

function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
}

function closeTicketModal() {
    document.getElementById('ticketModal').style.display = 'none';
}

function hitungTotal() {
    if (!itemDipilih) return;
    const kali = parseFloat(document.getElementById('selectKategori').value);
    const jumlah = parseInt(document.getElementById('inputJumlah').value) || 1;
    const total = itemDipilih.harga * kali * jumlah;
    document.getElementById('textTotal').innerText = 'Rp ' + total.toLocaleString('id-ID');
}

function kirimPesanan() {
    const nama = document.getElementById('inputNama').value;
    const email = document.getElementById('inputEmail').value;

    if (nama.trim() === '' || email.trim() === '') {
        alert('Tolong isi nama dan email terlebih dahulu');
        return;
    }

    const jumlah = document.getElementById('inputJumlah').value;

    document.getElementById('ticketTitle').innerText = itemDipilih.nama;
    document.getElementById('ticketNama').innerText = 'Nama: ' + nama;
    document.getElementById('ticketDetail').innerText = 'Jumlah: ' + jumlah + ' tiket';
    document.getElementById('ticketTanggal').innerText = 'Tanggal: ' + itemDipilih.tanggal;

    closeOrderModal();
    document.getElementById('ticketModal').style.display = 'flex';

    document.getElementById('inputNama').value = '';
    document.getElementById('inputEmail').value = '';
}

tampilkanKonser(dataKonser);