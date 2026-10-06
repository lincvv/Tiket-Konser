<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FestTix - Beli Tiket Konser</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>

    <nav>
        <a href="#" class="logo">Fest<span>Tix</span></a>
        <div class="search-bar">
            <input type="text" id="searchInput" placeholder="Cari konser...">
        </div>
    </nav>

    <div class="hero">
        <h1>Temukan Konser Kesukaanmu disini!</h1>
        <p>Nikmati pengalaman memesan tiket konser musik favorit dengan cepat, aman, dan nyaman.</p>
    </div>

    <div class="main-container">
        <div class="filter-container">
            <button class="filter-btn active" onclick="filterByCat('Semua', this)">Semua</button>
            <button class="filter-btn" onclick="filterByCat('Pop', this)">Pop</button>
            <button class="filter-btn" onclick="filterByCat('Rock', this)">Rock</button>
            <button class="filter-btn" onclick="filterByCat('Indie', this)">Indie</button>
        </div>

        <div class="concert-list" id="concertContainer"></div>
    </div>

    <div class="modal-overlay" id="orderModal">
        <div class="modal-box">
            <span class="close-btn" onclick="closeOrderModal()">&times;</span>
            <h3 id="modalEventTitle">Form Pemesanan Tiket</h3>
            
            <div class="form-item">
                <label>Nama Pemesan</label>
                <input type="text" id="inputNama" placeholder="Nama lengkap">
            </div>
            
            <div class="form-item">
                <label>Email</label>
                <input type="email" id="inputEmail" placeholder="Alamat email">
            </div>

            <div class="form-item">
                <label>Kategori Tiket</label>
                <select id="selectKategori" onchange="hitungTotal()">
                    <option value="1">CAT 3 (Regular)</option>
                    <option value="1.4">CAT 2 (VIP)</option>
                    <option value="2">CAT 1 (VVIP)</option>
                </select>
            </div>

            <div class="form-item">
                <label>Jumlah Tiket</label>
                <input type="number" id="inputJumlah" value="1" min="1" max="5" onchange="hitungTotal()">
            </div>

            <div class="total-price">
                <span>Total:</span>
                <strong id="textTotal">Rp 0</strong>
            </div>

            <button class="btn-beli" onclick="kirimPesanan()">Konfirmasi Pembayaran</button>
        </div>
    </div>

    <div class="modal-overlay" id="ticketModal">
        <div class="modal-box">
            <span class="close-btn" onclick="closeTicketModal()">&times;</span>
            <h3 class="success-title">Pemesanan Berhasil</h3>
            
            <div class="ticket-result">
                <h4 id="ticketTitle">-</h4>
                <p id="ticketNama">Nama: -</p>
                <p id="ticketDetail">Detail: -</p>
                <p id="ticketTanggal">Tanggal: -</p>
                
                <div class="qr-box">
                    [ QR CODE TIKET ]
                </div>
            </div>

            <button class="btn-beli" style="margin-top: 15px;" onclick="closeTicketModal()">Tutup</button>
        </div>
    </div>

   <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>