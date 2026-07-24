import React, { useState } from 'react';
import { ManagementMember, GalleryItem } from '../types';
import {
  ShieldCheck,
  Target,
  FileText,
  Users,
  CheckCircle2,
  Phone,
  Mail,
  X,
  Maximize2,
  Calendar,
  Layers,
  Award
} from 'lucide-react';

interface ProfileViewProps {
  management: ManagementMember[];
  gallery: GalleryItem[];
}

export const ProfileView: React.FC<ProfileViewProps> = ({ management, gallery }) => {
  const [managementFilter, setManagementFilter] = useState<'all' | 'pengurus' | 'pengawas' | 'pengelola'>('all');
  const [galleryFilter, setGalleryFilter] = useState<string>('Semua');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredManagement = managementFilter === 'all'
    ? management
    : management.filter((m) => m.type === managementFilter);

  const galleryCategories = ['Semua', 'RAT', 'Pelatihan', 'Bazaar', 'Panen', 'Rapat', 'Sosialisasi'];

  const filteredGallery = galleryFilter === 'Semua'
    ? gallery
    : gallery.filter((g) => g.category === galleryFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      {/* HEADER BANNER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-300 text-xs font-bold">
          <ShieldCheck className="w-3.5 h-3.5" />
           Profil & Legitimasi
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Profil Koperasi Merah Putih Soreang
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          Kecamatan Soreang, Kabupaten Bandung, Jawa Barat. Menjalankan amanah pergerakan ekonomi rakyat sejak 2014.
        </p>
      </div>

      {/* 1. SEJARAH, VISI & MISI */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Sejarah Card */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700/80 shadow-xs space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/80 flex items-center justify-center text-red-600 dark:text-red-400">
              <Layers className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Sejarah Singkat</h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
              Koperasi Merah Putih Kecamatan Soreang berawal dari inisiatif gabungan tokoh masyarakat, kelompok tani hortikultura, peternak sapi perah, dan pelaku kerajinan sepatu/bambu di Soreang pada tahun 2014.
              <br /><br />
              Didorong oleh tekad melepaskan ketergantungan dari tengkulak dan jeratan pinjaman tidak resmi, warga bergotong royong membentuk wadah simpan pinjam dan usaha bersama. Kini, Koperasi Merah Putih telah berkembang menjadi pilar utama penggerak UMKM dan potensi desa di Kabupaten Bandung.
            </p>
          </div>

          <div className="pt-4 border-t border-gray-100 dark:border-gray-700/80 flex items-center gap-3">
            <Award className="w-8 h-8 text-amber-500 shrink-0" />
            <div className="text-xs">
              <div className="font-bold text-gray-900 dark:text-white">Koperasi Berprestasi Jawa Barat</div>
              <div className="text-gray-500">Penghargaan Harkopnas ke-79</div>
            </div>
          </div>
        </div>

        {/* Visi & Misi Card */}
        <div className="bg-gradient-to-br from-red-600 to-rose-800 text-white p-8 rounded-3xl shadow-xl space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full text-xs font-bold text-amber-300">
                <Target className="w-3.5 h-3.5" /> Visi Utama
              </div>
              <p className="text-base sm:text-lg font-semibold leading-relaxed">
                "Menjadi Koperasi Unggulan Berbasis Digital dan Gotong Royong yang Mandiri, Mensejahterakan Anggota, dan Menggerakkan Potensi Ekonomi Desa di Kabupaten Bandung."
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-sm uppercase tracking-wider text-red-200">Misi Strategis:</h3>
              <ul className="space-y-2.5 text-xs text-red-100">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Memberikan pelayanan simpan pinjam yang aman, adil, cepat, dan terjangkau bagi anggota.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Meningkatkan daya saing dan jangkauan pasar produk UMKM anggota lewat e-katalog digital.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Mengoptimalkan rantai pasok komoditas kopi, stroberi, beras, dan ternak desa Soreang.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Mewujudkan transparansi akuntansi dan pencatatan berbasis teknologi modern.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-xs text-red-200 pt-4 border-t border-white/20">
            Nilai Utama: Jujur • Transparan • Mandiri • Gotong Royong
          </div>
        </div>
      </div>

      {/* 2. LEGALITAS KOPERASI */}
      <section className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Legalitas Resmi Koperasi</h2>
          <p className="text-xs text-gray-500">Terdaftar dan diawasi secara sah oleh Kementerian Koperasi dan UKM RI</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xs space-y-2">
            <div className="text-xs font-bold text-gray-400 uppercase">Aktif Badan Hukum</div>
            <div className="text-lg font-extrabold text-red-600 dark:text-red-400">AHU-0012948.AH.01</div>
            <div className="text-[11px] text-gray-500">Kemenkumham Republik Indonesia</div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xs space-y-2">
            <div className="text-xs font-bold text-gray-400 uppercase">NIK Kemenkop UKM</div>
            <div className="text-lg font-extrabold text-red-600 dark:text-red-400">3204080010023</div>
            <div className="text-[11px] text-gray-500">Nomor Induk Koperasi Grade A</div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xs space-y-2">
            <div className="text-xs font-bold text-gray-400 uppercase">NIB Perizinan Usaha</div>
            <div className="text-lg font-extrabold text-red-600 dark:text-red-400">9120301928371</div>
            <div className="text-[11px] text-gray-500">Sistem Perizinan Berusaha OSS</div>
          </div>
        </div>
      </section>

      {/* 3. STRUKTUR ORGANISASI & PENGURUS */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-4">
          <div>
            <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
              Struktur Kepengurusan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
              Pengurus, Pengawas & Pengelola
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setManagementFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition ${
                managementFilter === 'all' ? 'bg-white dark:bg-gray-700 text-red-600 dark:text-red-400 shadow-xs' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Semua ({management.length})
            </button>
            <button
              onClick={() => setManagementFilter('pengurus')}
              className={`px-3 py-1.5 rounded-lg transition ${
                managementFilter === 'pengurus' ? 'bg-white dark:bg-gray-700 text-red-600 dark:text-red-400 shadow-xs' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Pengurus
            </button>
            <button
              onClick={() => setManagementFilter('pengawas')}
              className={`px-3 py-1.5 rounded-lg transition ${
                managementFilter === 'pengawas' ? 'bg-white dark:bg-gray-700 text-red-600 dark:text-red-400 shadow-xs' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Pengawas
            </button>
            <button
              onClick={() => setManagementFilter('pengelola')}
              className={`px-3 py-1.5 rounded-lg transition ${
                managementFilter === 'pengelola' ? 'bg-white dark:bg-gray-700 text-red-600 dark:text-red-400 shadow-xs' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Pengelola Unit
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredManagement.map((m) => (
            <div
              key={m.id}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700/80 overflow-hidden shadow-xs hover:shadow-md transition space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img src={m.photo} alt={m.name} className="w-full h-full object-cover object-top" />
                  <span
                    className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full text-white ${
                      m.type === 'pengurus' ? 'bg-red-600' : m.type === 'pengawas' ? 'bg-amber-600' : 'bg-emerald-600'
                    }`}
                  >
                    {m.type.toUpperCase()}
                  </span>
                </div>

                <div className="p-4 space-y-1">
                  <h3 className="font-bold text-sm text-gray-900 dark:text-white line-clamp-1">{m.name}</h3>
                  <div className="text-xs font-semibold text-red-600 dark:text-red-400 line-clamp-1">{m.role}</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 pt-1 line-clamp-2 leading-relaxed">
                    {m.bio}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 border-t border-gray-100 dark:border-gray-700/80 flex items-center justify-between text-xs text-gray-500">
                <a
                  href={`https://wa.me/${m.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-emerald-600 font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Kontak WA</span>
                </a>
                <span className="text-[10px] text-gray-400">{m.email.split('@')[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. GALERI FOTO ACTIVITAS */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-4">
          <div>
            <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
              Dokumentasi Kegiatan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
              Galeri Foto Koperasi
            </h2>
          </div>

          {/* Gallery Category Filter */}
          <div className="flex flex-wrap gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl text-xs font-semibold">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setGalleryFilter(cat)}
                className={`px-3 py-1.5 rounded-lg transition ${
                  galleryFilter === cat
                    ? 'bg-white dark:bg-gray-700 text-red-600 dark:text-red-400 shadow-xs'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredGallery.map((g) => (
            <div
              key={g.id}
              onClick={() => setSelectedImage(g)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 cursor-pointer shadow-xs border border-gray-200 dark:border-gray-800"
            >
              <img
                src={g.image}
                alt={g.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 p-3 flex flex-col justify-end text-white space-y-1">
                <span className="text-[10px] bg-red-600 px-2 py-0.5 rounded font-bold w-fit">{g.category}</span>
                <h4 className="text-xs font-bold line-clamp-2">{g.title}</h4>
                <span className="text-[10px] text-gray-300">{g.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-2xl w-full overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] bg-black">
              <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-full object-contain" />
            </div>

            <div className="p-6 space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 text-xs font-bold">
                  {selectedImage.category}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedImage.date}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{selectedImage.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
