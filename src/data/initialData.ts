import {
  Product,
  Article,
  VillagePotential,
  ManagementMember,
  GalleryItem,
  EducationalFAQ,
  HeroBanner,
  Testimonial,
  MemberRegistration
} from '../types';

export const INITIAL_BANNERS: HeroBanner[] = [
  {
    id: 'b1',
    title: 'Koperasi Merah Putih Kecamatan Soreang',
    subtitle: 'Membangun Kemandirian Ekonomi Desa dan Menggerakkan Potensi UMKM Kabupaten Bandung',
    badge: 'Resmi & Terpercaya',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600',
    ctaText: 'Jelajahi Produk UMKM',
    ctaTarget: 'produk'
  },
  {
    id: 'b2',
    title: 'Pemberdayaan Petani & Pengrajin Soreang',
    subtitle: 'Wujud nyata gotong royong ekonomi rakyat melalui simpan pinjam dan kemitraan pemasaran',
    badge: 'Program Unggulan',
    image: 'https://images.unsplash.com/photo-1595838788326-e17f54117b4c?auto=format&fit=crop&q=80&w=1600',
    ctaText: 'Daftar Anggota Online',
    ctaTarget: 'pendaftaran'
  },
  {
    id: 'b3',
    title: 'Potensi Wisata & Pertanian Soreang',
    subtitle: 'Dari Kopi Arabika Gunung Tilu hingga Agrowisata Stroberi dan Sentra Kuliner Tradisional',
    badge: 'Potensi Desa',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=1600',
    ctaText: 'Lihat Potensi Desa',
    ctaTarget: 'potensi'
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Kopi Arabika Gunung Tilu Soreang (250g)',
    category: 'Minuman',
    price: 65000,
    stock: 45,
    unit: 'pouch',
    description: 'Kopi Arabika asli kawasan Gunung Tilu Soreang. Dipetik dari buah ceri merah pilihan dengan kearifan lokal petani Soreang. Memiliki cita rasa fruity dengan keasaman seimbang.',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600',
    whatsappNumber: '6281234567890',
    isFeatured: true,
    rating: 4.9,
    salesCount: 312,
    producer: 'Kelompok Tani Kopi Gunung Tilu Soreang'
  },
  {
    id: 'p2',
    name: 'Stroberi Segar Ciwidey-Soreang (500g)',
    category: 'Pertanian',
    price: 35000,
    stock: 60,
    unit: 'pack',
    description: 'Stroberi manis segar dipetik langsung dari kebun agrowisata anggota koperasi di kawasan Soreang-Ciwidey. Bebas pestisida sintetis berlebih.',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=600',
    whatsappNumber: '6281234567890',
    isFeatured: true,
    rating: 4.8,
    salesCount: 520,
    producer: 'KTI Agro Soreang'
  },
  {
    id: 'p3',
    name: 'Keripik Tempe Renyah Soreang Original (200g)',
    category: 'Makanan',
    price: 18000,
    stock: 120,
    unit: 'bungkus',
    description: 'Camilan khas olahan tempe pilihan dengan rempah-rempah alami Sunda. Gurih, renyah, dan tahan lama tanpa bahan pengawet buatan.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600',
    whatsappNumber: '6281234567890',
    isFeatured: true,
    rating: 4.7,
    salesCount: 840,
    producer: 'UMKM Berkah Soreang'
  },
  {
    id: 'p4',
    name: 'Batik Motif Merah Putih Soreang (Kain 2m)',
    category: 'Fashion',
    price: 220000,
    stock: 25,
    unit: 'potong',
    description: 'Kain batik cap eksklusif motif khas gabungan flora Soreang dan warna kebanggaan Merah Putih. Bahan katun primisima halus dan adem.',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=600',
    whatsappNumber: '6281234567890',
    isFeatured: true,
    rating: 5.0,
    salesCount: 95,
    producer: 'Sanggar Batik Koperasi Soreang'
  },
  {
    id: 'p5',
    name: 'Madu Hutan Murni Soreang (500ml)',
    category: 'Minuman',
    price: 110000,
    stock: 30,
    unit: 'botol',
    description: 'Madu murni alami dipanen langsung oleh pembudidaya lebah binaan Koperasi Merah Putih di perbukitan Soreang. Bermanfaat untuk imunitas tubuh.',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600',
    whatsappNumber: '6281234567890',
    isFeatured: false,
    rating: 4.9,
    salesCount: 210,
    producer: 'KTH Lebah Soreang Murni'
  },
  {
    id: 'p6',
    name: 'Susu Sapi Murni Pasturisasi Soreang (1 Liter)',
    category: 'Peternakan',
    price: 22000,
    stock: 50,
    unit: 'botol',
    description: 'Susu sapi murni segar hasil perahan peternakan sapi lokal Soreang. Telah dipasturisasi secara teruji dan siap minum.',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=600',
    whatsappNumber: '6281234567890',
    isFeatured: true,
    rating: 4.8,
    salesCount: 610,
    producer: 'Kelompok Peternak Sapi Soreang'
  },
  {
    id: 'p7',
    name: 'Kerajinan Tas Anyaman Bambu Soreang',
    category: 'Kerajinan',
    price: 85000,
    stock: 35,
    unit: 'pcs',
    description: 'Tas etnik ramah lingkungan berbahan bambu pilihan dengan sentuhan modern. Sangat cocok untuk dipakai belanja, souvenir, maupun aksesoris gaya.',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=600',
    whatsappNumber: '6281234567890',
    isFeatured: false,
    rating: 4.7,
    salesCount: 140,
    producer: 'Pengrajin Bambu Sukanagara'
  },
  {
    id: 'p8',
    name: 'Sepatu Kulit Asli Lokal Soreang',
    category: 'Fashion',
    price: 340000,
    stock: 20,
    unit: 'pasang',
    description: 'Sepatu kulit sapi asli hasil pengrajin lokal Soreang. Jahitan rapi, sol fleksibel dan tahan lama, cocok untuk kegiatan formal maupun harian.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600',
    whatsappNumber: '6281234567890',
    isFeatured: true,
    rating: 4.9,
    salesCount: 185,
    producer: 'Sentra Sepatu Soreang Industri'
  },
  {
    id: 'p9',
    name: 'Peuyeum Ketan Hitam Manis Soreang (500g)',
    category: 'Makanan',
    price: 25000,
    stock: 40,
    unit: 'besek',
    description: 'Fermentasi beras ketan hitam pilihan khas olahan Bandung. Manis segar dengan aroma fermentasi alami yang khas.',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=600',
    whatsappNumber: '6281234567890',
    isFeatured: false,
    rating: 4.6,
    salesCount: 290,
    producer: 'Ibu-ibu PKK Soreang'
  },
  {
    id: 'p10',
    name: 'Beras Organik Pandan Wangi Soreang (5 kg)',
    category: 'Pertanian',
    price: 88000,
    stock: 80,
    unit: 'karung',
    description: 'Beras pandan wangi unggulan dipanen dari persawahan Soreang yang dialiri air pegunungan jernih. Pulen, wangi alami, tanpa pemutih.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=600',
    whatsappNumber: '6281234567890',
    isFeatured: true,
    rating: 4.9,
    salesCount: 730,
    producer: 'Gapoktan Soreang Makmur'
  },
  {
    id: 'p11',
    name: 'Teh Hijau Herbal Priangan Soreang (100g)',
    category: 'Minuman',
    price: 30000,
    stock: 55,
    unit: 'pack',
    description: 'Pucuk teh hijau pilihan kaya antioksidan dari kebun teh dataran tinggi Soreang. Memberikan rasa tenang dan menyegarkan.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600',
    whatsappNumber: '6281234567890',
    isFeatured: false,
    rating: 4.8,
    salesCount: 165,
    producer: 'Kelompok Tani Teh Soreang'
  },
  {
    id: 'p12',
    name: 'Daging Sapi Segar Soreang (1 kg)',
    category: 'Peternakan',
    price: 135000,
    stock: 15,
    unit: 'kg',
    description: 'Daging sapi segar kualitas lokal dari peternakan sehat binaan Koperasi Merah Putih Soreang. Dijamin halal dan higienis.',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=600',
    whatsappNumber: '6281234567890',
    isFeatured: false,
    rating: 4.9,
    salesCount: 220,
    producer: 'Kandang Bersama Soreang'
  },
  {
    id: 'p13',
    name: 'Sirup Rosella Organik Soreang (600ml)',
    category: 'Minuman',
    price: 32000,
    stock: 35,
    unit: 'botol',
    description: 'Sirup konsentrat bunga rosella murni tanpa pewarna sintetis. Kaya Vitamin C untuk menyegarkan dahaga sehari-hari.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
    whatsappNumber: '6281234567890',
    isFeatured: false,
    rating: 4.7,
    salesCount: 110,
    producer: 'KWT Rosella Soreang'
  },
  {
    id: 'p14',
    name: 'Dompet & Sabuk Kulit Kerajinan Soreang',
    category: 'Fashion',
    price: 125000,
    stock: 30,
    unit: 'set',
    description: 'Set dompet dan sabuk pria dari bahan kulit sapi asli. Tahan lama dengan kemasan box elegan cocok untuk kado.',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600',
    whatsappNumber: '6281234567890',
    isFeatured: false,
    rating: 4.8,
    salesCount: 175,
    producer: 'Leather Craft Soreang'
  },
  {
    id: 'p15',
    name: 'Lampu Hias Ukir Bambu Soreang',
    category: 'Kerajinan',
    price: 175000,
    stock: 15,
    unit: 'pcs',
    description: 'Lampu meja berbahan bambu hitam dengan ukiran motif tradisional Sunda. Menciptakan suasana hangat nan alami di dalam ruangan.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=600',
    whatsappNumber: '6281234567890',
    isFeatured: false,
    rating: 4.9,
    salesCount: 88,
    producer: 'Sanggar Bambu Art Soreang'
  }
];

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'a1',
    title: 'Rapat Anggota Tahunan (RAT) Tahun Buku 2025 Koperasi Merah Putih Soreang Berlangsung Sukses',
    excerpt: 'RAT ke-12 berhasil menetapkan pembagian Sisa Hasil Usaha (SHU) sebesar Rp 450 Juta dan pengesahan program kerja digitalisasi 2026.',
    content: `Rapat Anggota Tahunan (RAT) Koperasi Merah Putih Kecamatan Soreang Kabupaten Bandung diselenggarakan dengan khidmat di Aula Kecamatan Soreang pada Sabtu lalu. Acara ini dihadiri oleh Pengurus, Pengawas, Dinas Koperasi dan UKM Kabupaten Bandung, serta lebih dari 800 perwakilan anggota.

Dalam sambutannya, Ketua Koperasi Merah Putih Soreang menyatakan bahwa kinerja keuangan koperasi tumbuh sebesar 18.5% dibandingkan tahun sebelumnya. Pertumbuhan ini didukung oleh berkembangnya unit usaha toko serba ada (Toserba Koperasi), pemasaran produk UMKM lokal, serta unit simpan pinjam gotong royong.

Selain itu, RAT memisahkan anggaran khusus untuk digitalisasi promosi produk desa melalui portal microsite resmi. Diharapkan seluruh produk anggota dapat dijangkau oleh pembeli nasional maupun mancanegara.`,
    category: 'Pengumuman',
    author: 'Admin Koperasi',
    date: '18 Juli 2026',
    readTime: '4 menit',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    views: 1240,
    tags: ['RAT', 'SHU', 'Soreang', 'Koperasi']
  },
  {
    id: 'a2',
    title: 'Pelatihan Digital Marketing & Kemasan Produk untuk UMKM Bina Desa Soreang',
    excerpt: 'Puluhan pelaku usaha mikro di Kecamatan Soreang mengikuti workshop fotografi produk dan pemasaran marketplace.',
    content: `Guna meningkatkan daya saing produk lokal, Koperasi Merah Putih bekerjasama dengan Dinas Koperasi UKM Jabar menyelenggarakan Pelatihan Pemasaran Digital dan Standardisasi Kemasan Produk bagi 50 pelaku UMKM di Kecamatan Soreang.

Para peserta diajarkan cara membuat deskripsi produk yang menarik, memanfaatkan foto produk dengan smartphone, serta tata cara pendaftaran pIRT dan sertifikasi Halal.`,
    category: 'Kegiatan',
    author: 'Tim Komunikasi',
    date: '10 Juli 2026',
    readTime: '3 menit',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    views: 890,
    tags: ['Pelatihan', 'UMKM', 'Digital Marketing']
  },
  {
    id: 'a3',
    title: 'Mengenal Kopi Arabika Gunung Tilu Soreang yang Tembus Pasar Nasional',
    excerpt: 'Kisah para petani kopi binaan Koperasi Merah Putih dalam menjaga kualitas biji kopi fermentasi sempurna.',
    content: `Kawasan pegunungan Soreang Kabupaten Bandung menyimpan potensi komoditas luar biasa, salah satunya Kopi Arabika Gunung Tilu. Biji kopi dipetik dari ketinggian lebih dari 1.300 mdpl yang diproses secara profesional oleh petani anggota koperasi.`,
    category: 'Edukasi',
    author: 'Unit Usaha Pertanian',
    date: '02 Juli 2026',
    readTime: '5 menit',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    views: 1560,
    tags: ['Kopi', 'Pertanian', 'Gunung Tilu']
  },
  {
    id: 'a4',
    title: 'Penyaluran Pinjaman Modal Usaha Tanpa Agunan Berbelit Bagi Anggota Koperasi',
    excerpt: 'Fasilitas dana usaha cepat dan transparan guna mendukung permodalan musim tanam dan produksi kerajinan.',
    content: `Koperasi Merah Putih Soreang kembali memperluas jangkauan layanan simpan pinjam ramah anggota dengan suku bunga yang bersaing dan transparansi biaya pengelolaan.`,
    category: 'Pengumuman',
    author: 'Pengelola Simpan Pinjam',
    date: '25 Juni 2026',
    readTime: '3 menit',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    views: 670,
    tags: ['Pinjaman', 'Modal Usaha', 'Anggota']
  },
  {
    id: 'a5',
    title: 'Bazaar Produk Unggulan Kabupaten Bandung di Alun-Alun Soreang',
    excerpt: 'Stan Koperasi Merah Putih diserbu pengunjung yang memborong stroberi, olahan peuyeum, dan batik khas.',
    content: `Pelaksanaan Bazaar UMKM Kabupaten Bandung di komplek Alun-Alun Soreang berlangsung meriah. Puluhan produk dipamerkan dan mencatatkan omset yang menggembirakan.`,
    category: 'Kegiatan',
    author: 'Admin Koperasi',
    date: '15 Juni 2026',
    readTime: '4 menit',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    views: 1120,
    tags: ['Bazaar', 'Bandung', 'Soreang']
  },
  {
    id: 'a6',
    title: 'Pentingnya Mengetahui Hak dan Kewajiban Sebagai Anggota Koperasi yang Sehat',
    excerpt: 'Panduan lengkap partisipasi aktif dalam kegiatan simpanan, transaksi unit usaha, serta hak suara di RAT.',
    content: `Keberhasilan koperasi ditentukan oleh prinsip dari anggota, oleh anggota, dan untuk anggota. Simak poin-poin utama hak dan kewajiban anggota berikut ini.`,
    category: 'Edukasi',
    author: 'Dewan Pengawas',
    date: '08 Juni 2026',
    readTime: '5 menit',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    views: 940,
    tags: ['Edukasi', 'Keanggotaan', 'Prinsip Koperasi']
  },
  {
    id: 'a7',
    title: 'Koperasi Merah Putih Soreang Raih Penghargaan Koperasi Berprestasi Tingkat Jawa Barat',
    excerpt: 'Penghargaan bergengsi diserahkan langsung dalam rangka Hari Koperasi Nasional ke-79.',
    content: `Atas tata kelola keuangan yang transparan, pemanfaatan teknologi, dan kontribusi nyata dalam pemberdayaan masyarakat desa Soreang, Koperasi Merah Putih dinobatkan sebagai Koperasi Unggulan Jabar.`,
    category: 'Prestasi',
    author: 'Sekretaris Koperasi',
    date: '01 Juni 2026',
    readTime: '3 menit',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    views: 2100,
    tags: ['Prestasi', 'Penghargaan', 'Jawa Barat']
  },
  {
    id: 'a8',
    title: 'Program Kebun Bibit Stroberi Organik Gratis Untuk Kelompok Wanita Tani (KWT)',
    excerpt: 'Koperasi membagikan 5.000 bibit stroberi varietas unggul bagi anggota KWT di Soreang.',
    content: `Guna mendorong ketahanan pangan keluarga dan pendapatan tambahan bagi ibu-ibu rumah tangga, program pembagian bibit stroberi gratis resmi digulirkan.`,
    category: 'Kegiatan',
    author: 'Unit Usaha Pertanian',
    date: '20 Mei 2026',
    readTime: '4 menit',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    views: 780,
    tags: ['Stroberi', 'KWT', 'Pertanian']
  },
  {
    id: 'a9',
    title: 'Panduan Pendaftaran Anggota Baru Koperasi Secara Online Melalui Portal Web',
    excerpt: 'Kini warga Soreang dan sekitarnya bisa mendaftar jadi anggota koperasi dari mana saja cukup lewat HP.',
    content: `Langkah mudah pendaftaran anggota secara digital: isi formulir online, upload identitas, pilih simpanan, dan dapatkan Nomor Pokok Anggota digital secara langsung.`,
    category: 'Pengumuman',
    author: 'Tim IT Koperasi',
    date: '12 Mei 2026',
    readTime: '3 menit',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    views: 1430,
    tags: ['Online', 'Pendaftaran', 'Digital']
  },
  {
    id: 'a10',
    title: 'Strategi Pengembangan Sentra Kerajinan Bambu Desa Sukanagara Soreang',
    excerpt: 'Inovasi desain kerajinan bambu ramah lingkungan untuk ekspor dan industri perhotelan.',
    content: `Sentra bambu di Soreang memiliki potensi besar jika dipadukan dengan desain estetis modern. Koperasi Merah Putih memfasilitasi pendampingan desainer profesional.`,
    category: 'Berita',
    author: 'Pengelola Kerajinan',
    date: '02 Mei 2026',
    readTime: '4 menit',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    views: 810,
    tags: ['Bambu', 'Kerajinan', 'Soreang']
  },
  {
    id: 'a11',
    title: 'Penandatanganan Kerjasama Koperasi Merah Putih dengan BJB & BRI',
    excerpt: 'Kemudahan transaksi pembayaran digital, QRIS koperasi, dan perkuatan permodalan anggota.',
    content: `Dua perbankan nasional resmi menjalin kemitraan strategis dengan Koperasi Merah Putih Soreang untuk mempermudah ekosistem pembayaran digital.`,
    category: 'Berita',
    author: 'Bendahara Koperasi',
    date: '22 April 2026',
    readTime: '3 menit',
    image: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    views: 1150,
    tags: ['BJB', 'BRI', 'QRIS', 'Perbankan']
  },
  {
    id: 'a12',
    title: 'Langkah Koperasi Menghadapi Inflasi Musiman Melalui Cadangan Pangan Sembako',
    excerpt: 'Koperasi menyediakan pasokan beras, minyak, dan gula dengan harga stabil khusus bagi anggota.',
    content: `Menjelang hari besar, pasokan sembako koperasi dipastikan aman dan terkendali. Anggota dapat membeli sembako berkualitas dengan patokan harga adil.`,
    category: 'Pengumuman',
    author: 'Pengelola Toserba',
    date: '14 April 2026',
    readTime: '3 menit',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    views: 620,
    tags: ['Sembako', 'Harga Stabil', 'Toserba']
  },
  {
    id: 'a13',
    title: 'Ekowisata Soreang: Jalur Wisata Hijau Desa dan Kuliner Khas Priangan',
    excerpt: 'Potensi wisata desa yang dikelola bersama oleh koperasi dan kelompok pemuda lokal.',
    content: `Soreang menawarkan pemandangan alam perbukitan yang asri, udara sejuk, serta beragam tempat makan khas Sunda yang layak dikunjungi wisatawan.`,
    category: 'Berita',
    author: 'Unit Pariwisata',
    date: '05 April 2026',
    readTime: '5 menit',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    views: 1780,
    tags: ['Wisata', 'Soreang', 'Kuliner']
  },
  {
    id: 'a14',
    title: 'Pelatihan Sertifikasi Halal Gratis Bagi 30 Industri Rumah Tangga Soreang',
    excerpt: 'Upaya percepatan legalitas usaha makanan dan minuman olahan warga.',
    content: `Sertifikat Halal kini menjadi kebutuhan vital bagi pemasaran produk kuliner. Koperasi memberikan fasilitas pendampingan pemberkasan sampai terbit sertifikat.`,
    category: 'Kegiatan',
    author: 'Tim Sertifikasi UMKM',
    date: '28 Maret 2026',
    readTime: '4 menit',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    views: 930,
    tags: ['Halal', 'Sertifikasi', 'Kuliner']
  },
  {
    id: 'a15',
    title: 'Sistem Pencatatan Keuangan Koperasi Berbasis Transparansi Digital',
    excerpt: 'Laporan keuangan bulanan dapat diakses secara akuntabel oleh dewan pengawas dan anggota.',
    content: `Transparansi adalah fondasi utama kepercayaan di Koperasi Merah Putih Soreang. Sistem akuntansi terintegrasi menjamin keamanan simpanan masyarakat.`,
    category: 'Edukasi',
    author: 'Pengawas Keuangan',
    date: '18 Maret 2026',
    readTime: '3 menit',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    views: 710,
    tags: ['Transparansi', 'Keuangan', 'Audit']
  },
  {
    id: 'a16',
    title: 'Pengembangan Sentra Sepatu Kulit Soreang Menuju Pasar Modern',
    excerpt: 'Inovasi bahan dan pemasaran online mengangkat pamor perajin kulit asal Soreang.',
    content: `Industri sepatu di Kecamatan Soreang telah berdiri sejak dekade lalu. Koperasi hadir memberikan sentuhan permodalan dan bimbingan standarisasi ukuran ekspor.`,
    category: 'Berita',
    author: 'Unit Industri Kreatif',
    date: '10 Maret 2026',
    readTime: '4 menit',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    views: 1040,
    tags: ['Sepatu', 'Kulit', 'Kerajinan']
  },
  {
    id: 'a17',
    title: 'Pemanfaatan Pupuk Organik Hasil Komposting Peternak Sapi Soreang',
    excerpt: 'Inovasi hijau pengolahan limbah peternakan menjadi pupuk siap pakai bagi kebun sayur.',
    content: `Limbah peternakan sapi dikelola secara efektif menjadi pupuk cair dan padat organik yang meningkatkan kualitas lahan pertanian tanpa bahan kimia merusak.`,
    category: 'Edukasi',
    author: 'Tim Lingkungan',
    date: '01 Maret 2026',
    readTime: '3 menit',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    views: 650,
    tags: ['Organik', 'Pupuk', 'Sapi']
  },
  {
    id: 'a18',
    title: 'Sosialisasi Tata Cara Klaim Asuransi Simpanan Koperasi Merah Putih',
    excerpt: 'Memberikan rasa aman ekstra bagi seluruh anggota dengan penjaminan proteksi sosial.',
    content: `Setiap anggota aktif terdaftar berhak mendapatkan fasilitas perlindungan keselamatan kerja dan penjaminan simpanan sesuai ketentuan kesepakatan RAT.`,
    category: 'Pengumuman',
    author: 'Sekretaris Koperasi',
    date: '20 Februari 2026',
    readTime: '3 menit',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    views: 580,
    tags: ['Asuransi', 'Proteksi', 'Anggota']
  },
  {
    id: 'a19',
    title: 'Gelar Karya Pemuda Desa Soreang: Inovasi Teknologi Tepat Guna Pertanian',
    excerpt: 'Alat penyiram otomatis berbasis tenaga surya hasil karya pemuda tani binaan.',
    content: `Pemuda desa Soreang membuktikan bahwa sektor pertanian dapat dikembangkan secara modern dan efisien melalui integrasi sensor kelembaban tanah.`,
    category: 'Kegiatan',
    author: 'Tim Pemuda Tani',
    date: '10 Februari 2026',
    readTime: '4 menit',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    views: 1290,
    tags: ['Pemuda', 'Teknologi', 'Inovasi']
  },
  {
    id: 'a20',
    title: 'Kiat Mengelola SHU Koperasi Agar Berdaya Guna Bagi Kebutuhan Keluarga',
    excerpt: 'Tips memanfaatkan bagian dividen tahunan untuk dana pendidikan atau investasi produktif.',
    content: `SHU bukan sekadar uang bonus akhir tahun, namun apresiasi atas loyalitas bertransaksi di koperasi. Pelajari cara memanfaatkan dana SHU dengan bijak.`,
    category: 'Edukasi',
    author: 'Pakar Keuangan Koperasi',
    date: '01 Februari 2026',
    readTime: '4 menit',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    views: 1670,
    tags: ['SHU', 'Tips Keuangan', 'Keluarga']
  }
];

export const INITIAL_POTENTIALS: VillagePotential[] = [
  {
    id: 'vp1',
    title: 'Pertanian Padi Organik & Sayuran Segar Soreang',
    category: 'Pertanian',
    description: 'Lahan persawahan dan perkebunan hortikultura seluas ratusan hektar di Kecamatan Soreang. Menghasilkan beras unggulan pandan wangi, kubis, wortel, dan bawang merah berkualitas tinggi.',
    locationDetails: 'Desa Soreang & Desa Sukanagara, Kec. Soreang',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800',
    investmentPotential: 'Tinggi - Peluang kemitraan rantai pasok restoran & pasar modern',
    contactPerson: 'H. Ahmad Subarkah (Gapoktan) - 0812-3456-7890',
    stats: [
      { label: 'Luas Lahan', value: '180 Hektar' },
      { label: 'Hasil Panen/Thn', value: '1.200 Ton' }
    ]
  },
  {
    id: 'vp2',
    title: 'Peternakan Sapi Perah & Sapi Potong Soreang',
    category: 'Peternakan',
    description: 'Sentra peternakan sapi komunal dengan pengelolaan pakan berkualitas dan kebersihan kandang terjamin. Menghasilkan ribuan liter susu murni harian dan daging sapi segar.',
    locationDetails: 'Desa Panyirapan & Desa Parungserab, Kec. Soreang',
    image: 'https://images.unsplash.com/photo-1546445317-29f4545f9d52?auto=format&fit=crop&q=80&w=800',
    investmentPotential: 'Sangat Potensial - Pabrik olahan keju/yogurt lokal',
    contactPerson: 'Dadan Hermawan - 0813-9876-5432',
    stats: [
      { label: 'Populasi Sapi', value: '450 Ekor' },
      { label: 'Susu Harian', value: '2.500 Liter' }
    ]
  },
  {
    id: 'vp3',
    title: 'Sentra Industri Sepatu & Kerajinan Kulit Soreang',
    category: 'UMKM',
    description: 'Kluster industri sepatu, sandal, dan pengerjaan barang kulit asli. Dikerjakan oleh puluhan perajin berpengalaman dengan standar mutu tinggi.',
    locationDetails: 'Desa Sekarwangi, Kec. Soreang',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800',
    investmentPotential: 'Tinggi - Ekspansi pasar e-commerce dan pengadaan seragam instansi',
    contactPerson: 'Asep Saepudin - 0811-2233-4455',
    stats: [
      { label: 'Jumlah Perajin', value: '65 UMKM' },
      { label: 'Kapasitas/Bln', value: '5.000 Pasang' }
    ]
  },
  {
    id: 'vp4',
    title: 'Wisata Ekowisata & Agrowisata Soreang-Ciwidey',
    category: 'Pariwisata',
    description: 'Panorama kebun stroberi petik sendiri, jalur hiking perbukitan, wisata pemandangan alam, serta pusat kuliner khas Sunda yang memikat para wisatawan.',
    locationDetails: 'Kawasan Jalur Wisata Soreang Utama',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800',
    investmentPotential: 'Sangat Tinggi - Penginapan villa ramah lingkungan & resto konsep alam',
    contactPerson: 'Pokdarwis Soreang Asri - 0815-6677-8899',
    stats: [
      { label: 'Pengunjung/Thn', value: '85.000+ Orang' },
      { label: 'Spot Agrowisata', value: '12 Lokasi' }
    ]
  },
  {
    id: 'vp5',
    title: 'Kerajinan Bambu Etnik & Ukiran Tradisional',
    category: 'Kerajinan',
    description: 'Warisan seni olah bambu dari perlengkapan rumah tangga, tas, saung bambu, hingga merchandise ukir yang kaya akan estetika budaya Sunda.',
    locationDetails: 'Desa Sukanagara, Kec. Soreang',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800',
    investmentPotential: 'Sedang-Tinggi - Ekspor souvenir ramah lingkungan & interior hotel',
    contactPerson: 'Kang Yayan - 0812-1111-2222',
    stats: [
      { label: 'Pengrajin Aktif', value: '35 Orang' },
      { label: 'Varian Produk', value: '40+ Jenis' }
    ]
  },
  {
    id: 'vp6',
    title: 'Pusat Perdagangan & Toserba Koperasi Soreang',
    category: 'Perdagangan',
    description: 'Jaringan distribusi sembako, sarana produksi pertanian (saprotan), dan outlet penjualan produk unggulan UMKM anggota koperasi.',
    locationDetails: 'Jl. Raya Soreang No. 45, Kab. Bandung',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800',
    investmentPotential: 'Tinggi - Kerjasama pasokan barang pabrikan & gudang logistik',
    contactPerson: 'Unit Perdagangan Koperasi - 0812-3456-7890',
    stats: [
      { label: 'Transaksi/Bln', value: '4.500 Trx' },
      { label: 'Mitra UMKM', value: '150+ Usaha' }
    ]
  },
  {
    id: 'vp7',
    title: 'Mata Air Pegunungan & Sumber Daya Alami',
    category: 'Sumber Daya Alam',
    description: 'Sumber air pegunungan jernih dan tanah subur vulkanik Gunung Tilu yang sangat potensial untuk pertanian organik dan air minum kemasan.',
    locationDetails: 'Kawasan Hulu Soreang',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800',
    investmentPotential: 'Tinggi - Pengembangan fasilitas pengolahan air minum desa',
    contactPerson: 'Koperasi Merah Putih - 0812-3456-7890',
    stats: [
      { label: 'Debit Air', value: '50 Liter/Detik' },
      { label: 'Kualitas Air', value: 'PH Alami 7.2' }
    ]
  },
  {
    id: 'vp8',
    title: 'Kawasan Industri Kreatif & Sentra Batik Bandung Selatan',
    category: 'Potensi Investasi',
    description: 'Peluang investasi pengembangan galeri batik bersama, ruang workshop kreatif pemuda, dan platform digitalisasi penjualan terpadu.',
    locationDetails: 'Kecamatan Soreang Kompleks Pemkab Bandung',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=800',
    investmentPotential: 'Sangat Tinggi - Kemitraan Pemerintah & Swasta (KPBU)',
    contactPerson: 'Divisi Investasi Koperasi - 0812-3456-7890',
    stats: [
      { label: 'Estimasi ROI', value: '18-22% / Thn' },
      { label: 'Proyeksi Tenaga Kerja', value: '250 Orang' }
    ]
  }
];

export const INITIAL_MANAGEMENT: ManagementMember[] = [
  {
    id: 'm1',
    name: 'Drs. H. Mulyana Sutisna, M.Si',
    role: 'Ketua Koperasi Merah Putih',
    type: 'pengurus',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    phone: '0812-3456-7890',
    email: 'mulyana@koperasimerahputih-soreang.id',
    bio: 'Pengalaman 20+ tahun dalam pemberdayaan ekonomi pedesaan dan pergerakan koperasi di Kabupaten Bandung.'
  },
  {
    id: 'm2',
    name: 'Hj. Nenden Rahmawati, S.E',
    role: 'Sekretaris I',
    type: 'pengurus',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    phone: '0813-2233-4455',
    email: 'nenden@koperasimerahputih-soreang.id',
    bio: 'Pakar administrasi keanggotaan dan pengembang jaringan komunikasi antar kelompok tani dan UMKM.'
  },
  {
    id: 'm3',
    name: 'H. Tatang Rustandi, S.E, Ak',
    role: 'Bendahara Koperasi',
    type: 'pengurus',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    phone: '0811-9988-7766',
    email: 'tatang@koperasimerahputih-soreang.id',
    bio: 'Praktisi akuntansi profesional dengan komitmen menjaga transparansi keuangan dan kesehatan modal usaha.'
  },
  {
    id: 'm4',
    name: 'Ir. Agus Wijaya, M.P',
    role: 'Ketua Dewan Pengawas',
    type: 'pengawas',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    phone: '0815-4433-2211',
    email: 'agus.pengawas@koperasimerahputih-soreang.id',
    bio: 'Pengawas independen dengan latar belakang akademisi pertanian dan manajemen riset tata kelola.'
  },
  {
    id: 'm5',
    name: 'Dra. Rina Karlina',
    role: 'Anggota Pengawas Keuangan',
    type: 'pengawas',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    phone: '0812-7788-9900',
    email: 'rina.pengawas@koperasimerahputih-soreang.id',
    bio: 'Mengawasi kepatuhan prosedur operasional standar dan perlindungan asuransi simpanan anggota.'
  },
  {
    id: 'm6',
    name: 'Cecep Kurnia, S.Pt',
    role: 'Manager Unit Usaha Peternakan & Pertanian',
    type: 'pengelola',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    phone: '0813-1122-3344',
    email: 'cecep.usaha@koperasimerahputih-soreang.id',
    bio: 'Mendampingi kelompok ternak sapi dan petani sayur dalam pendistribusian panen dan teknologi pasca-panen.'
  },
  {
    id: 'm7',
    name: 'Dewi Fitriani, S.Kom',
    role: 'Manager Unit UMKM & Toko Digital',
    type: 'pengelola',
    photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400',
    phone: '0812-9900-1122',
    email: 'dewi.digital@koperasimerahputih-soreang.id',
    bio: 'Bertanggung jawab atas kurasi produk unggulan warga dan layanan portal e-katalog Koperasi.'
  },
  {
    id: 'm8',
    name: 'Yudi Lesmana, A.Md',
    role: 'Manager Unit Simpan Pinjam',
    type: 'pengelola',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
    phone: '0813-8877-6655',
    email: 'yudi.simpanpinjam@koperasimerahputih-soreang.id',
    bio: 'Melayani konsultasi pinjaman permodalan usaha dan edukasi perencanaan keuangan keluarga anggota.'
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Pelaksanaan RAT Tahun Buku 2025 di Aula Soreang',
    category: 'RAT',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    date: '18 Juli 2026',
    caption: 'Foto bersama Pengurus, Pengawas, dan perwakilan Anggota pada penetapan RAT ke-12.'
  },
  {
    id: 'g2',
    title: 'Pelatihan Kemasan Produk UMKM Soreang',
    category: 'Pelatihan',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    date: '10 Juli 2026',
    caption: 'Suasana peserta workshop foto produk menggunakan perangkat smartphone.'
  },
  {
    id: 'g3',
    title: 'Stand Koperasi di Bazaar UMKM Kabupaten Bandung',
    category: 'Bazaar',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=800',
    date: '15 Juni 2026',
    caption: 'Kunjungan warga memborong olahan kopi dan stroberi di stan resmi Koperasi Merah Putih.'
  },
  {
    id: 'g4',
    title: 'Panen Raya Padi Organik Soreang',
    category: 'Panen',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800',
    date: '28 Mei 2026',
    caption: 'Syukuran panen raya padi organik bersama para anggota Gapoktan binaan.'
  },
  {
    id: 'g5',
    title: 'Penyerahan Bibit Stroberi Gratis Bagi Kelompok Wanita Tani',
    category: 'Sosialisasi',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=800',
    date: '20 Mei 2026',
    caption: 'Simbolis penyerahan bibit stroberi unggulan kepada perwakilan KWT Soreang.'
  },
  {
    id: 'g6',
    title: 'Kunjungan Lapangan Dinas Koperasi UKM Jawa Barat',
    category: 'Rapat',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
    date: '12 Mei 2026',
    caption: 'Dinas Koperasi meninjau fasilitasi gudang penampungan hasil tani dan produk UMKM.'
  },
  {
    id: 'g7',
    title: 'Proses Pembuatan Batik Cap Merah Putih Soreang',
    category: 'Pelatihan',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=800',
    date: '04 Mei 2026',
    caption: 'Pengrajin wanita sedang menorehkan lilin malam untuk motif batik khas Soreang.'
  },
  {
    id: 'g8',
    title: 'Pemeriksaan Kesehatan Hewan Ternak Sapi Perah',
    category: 'Sosialisasi',
    image: 'https://images.unsplash.com/photo-1546445317-29f4545f9d52?auto=format&fit=crop&q=80&w=800',
    date: '22 April 2026',
    caption: 'Tim dokter hewan mendampingi peternak anggota koperasi secara berkala.'
  },
  {
    id: 'g9',
    title: 'Pemeriksaan Kas dan Akuntabilitas Laporan Keuangan',
    category: 'Rapat',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=800',
    date: '10 April 2026',
    caption: 'Dewan Pengawas meneliti pencatatan arus kas operasional bulanan.'
  },
  {
    id: 'g10',
    title: 'Sosialisasi Aplikasi Pendaftaran Anggota Digital',
    category: 'Sosialisasi',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    date: '25 Maret 2026',
    caption: 'Pemuda tani dan warga antusias mencobai formulir keanggotaan online.'
  }
];

export const INITIAL_FAQS: EducationalFAQ[] = [
  {
    id: 'faq1',
    question: 'Apa itu Koperasi Merah Putih Kecamatan Soreang?',
    answer: 'Koperasi Merah Putih Kecamatan Soreang adalah badan usaha gotong royong berbasis kerakyatan yang beranggotakan masyarakat, petani, peternak, dan pelaku UMKM di wilayah Soreang dan sekitarnya. Koperasi ini berfokus pada pemberdayaan ekonomi, layanan simpan pinjam adil, serta pemasaran produk lokal.',
    category: 'Umum'
  },
  {
    id: 'faq2',
    question: 'Apa saja manfaat menjadi anggota Koperasi Merah Putih?',
    answer: 'Manfaat menjadi anggota meliputi: (1) Hak mendapatkan Sisa Hasil Usaha (SHU) tahunan, (2) Akses pinjaman permodalan usaha tanpa potongan rumit, (3) Fasilitas promosi dan pemasaran produk UMKM gratis di portal resmi, (4) Pelatihan usaha & bantuan bibit/saprotan, serta (5) Hak suara penuh dalam Rapat Anggota Tahunan (RAT).',
    category: 'Keanggotaan'
  },
  {
    id: 'faq3',
    question: 'Bagaimana cara mendaftar menjadi anggota koperasi secara online?',
    answer: 'Anda cukup mengklik menu "Daftar Anggota" di website ini, mengisikan formulir identitas (Nama, NIK, Alamat Desa di Soreang, No HP/WA), memilih paket simpanan awal, dan mengunggah bukti pendaftaran. Tim admin akan memverifikasi dalam 1x24 jam.',
    category: 'Keanggotaan'
  },
  {
    id: 'faq4',
    question: 'Berapa besarnya Simpanan Pokok dan Simpanan Wajib?',
    answer: 'Simpanan Pokok sebesar Rp 100.000,- (dibayarkan 1 kali saat pendaftaran awal) dan Simpanan Wajib sebesar Rp 20.000,- (dibayarkan setiap bulan). Simpanan Pokok & Wajib sepenuhnya milik anggota dan dapat diambil kembali apabila mengundurkan diri sesuai aturan AD/ART.',
    category: 'Simpanan'
  },
  {
    id: 'faq5',
    question: 'Bagaimana cara perhitungan dan pembagian SHU (Sisa Hasil Usaha)?',
    answer: 'SHU dihitung secara transparan berdasarkan dua komponen utama: (1) Besarnya kontribusi simpanan anggota terhadap modal total koperasi, dan (2) Besarnya omset transaksi belanja/pinjaman anggota di unit-unit usaha koperasi sepanjang tahun berjalan.',
    category: 'SHU'
  },
  {
    id: 'faq6',
    question: 'Apa syarat untuk mengajukan pinjaman permodalan usaha?',
    answer: 'Syarat pengajuan pinjaman: (1) Menjadi anggota aktif minimal 3 bulan, (2) Memiliki usaha berjalan atau rencana usaha di Soreang/Kab. Bandung, (3) Mengisi formulir permohonan pinjaman, dan (4) Lolos survey sederhana kelayakan oleh tim pengelola simpan pinjam.',
    category: 'Pinjaman'
  },
  {
    id: 'faq7',
    question: 'Apakah produk UMKM milik warga luar Soreang bisa dititipkan di Koperasi?',
    answer: 'Prioritas utama adalah warga dan pelaku UMKM di Kecamatan Soreang & Kabupaten Bandung. Namun warga luar daerah tetap dapat bermitra melalui mekanisme keanggotaan luar biasa atau kemitraan antar-koperasi.',
    category: 'Umum'
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'H. Suhendar',
    role: 'Petani Kopi Gunung Tilu',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    content: 'Sejak bergabung dengan Koperasi Merah Putih Soreang, harga jual panen kopi kami jauh lebih stabil dan tidak dipermainkan tengkulak. Hasil SHU tahunannya juga sangat membantu biaya sekolah anak.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Ibu Nining Sumarni',
    role: 'Pemilik UMKM Keripik Tempe',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    content: 'Terima kasih Koperasi Merah Putih! Lewat pelatihan kemasan dan promosi di web ini, keripik tempe saya sekarang dikirim ke toko-toko oleh-oleh di Bandung dan Jakarta.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Kang Yudi Pratama',
    role: 'Pengrajin Sepatu Soreang',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    content: 'Pinjaman permodalan tanpa potongan berbelit dari unit simpan pinjam koperasi membuat usaha sepatu kulit saya bisa menambah mesin jahit baru dan merekrut 3 tetangga kerja.',
    rating: 5
  }
];

export const INITIAL_REGISTRATIONS: MemberRegistration[] = [
  {
    id: 'reg-101',
    fullName: 'Asep Ridwan',
    nik: '3204121508880001',
    phone: '081234567890',
    email: 'asep.ridwan@gmail.com',
    address: 'Jl. Soreang Asri No. 12, RT 02/RW 05',
    village: 'Desa Soreang',
    occupation: 'Petani Hortikultura',
    depositType: 'Simpanan Pokok & Wajib',
    status: 'Disetujui',
    registrationDate: '2026-07-15',
    memberId: 'KMP-SRG-2026-0421'
  },
  {
    id: 'reg-102',
    fullName: 'Siti Maryam',
    nik: '3204125204920003',
    phone: '081398765432',
    email: 'siti.maryam@yahoo.com',
    address: 'Kampung Sukanagara RT 01/RW 03',
    village: 'Desa Sukanagara',
    occupation: 'Pelaku UMKM Kuliner',
    depositType: 'Simpanan Pokok & Wajib',
    status: 'Disetujui',
    registrationDate: '2026-07-18',
    memberId: 'KMP-SRG-2026-0422'
  },
  {
    id: 'reg-103',
    fullName: 'Bambang Gunawan',
    nik: '3204121011850002',
    phone: '081122334455',
    email: 'bambang.g@gmail.com',
    address: 'Kompleks Parungserab Indah B4',
    village: 'Desa Parungserab',
    occupation: 'Peternak Sapi',
    depositType: 'Simpanan Pokok & Wajib',
    status: 'Pending',
    registrationDate: '2026-07-22'
  }
];
