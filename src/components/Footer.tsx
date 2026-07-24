import React from 'react';
import { KopdesLogo } from './KopdesLogo';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

interface FooterProps {
  onTabChange: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onTabChange }) => {
  const handleNav = (tab: string) => {
    onTabChange(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          {/* Col 1: About */}
          <div className="lg:col-span-2 space-y-4">
            <KopdesLogo size="lg" className="brightness-125" />
            <p className="text-sm text-gray-400 leading-relaxed pr-4">
              Portal Microsite Resmi Koperasi Merah Putih Kecamatan Soreang, Kabupaten Bandung, Jawa Barat. Wadah pemberdayaan ekonomi kerakyatan, pemasaran produk UMKM, peningkatan potensi desa, dan fasilitas simpan pinjam adil berazas gotong royong.
            </p>
            <div className="space-y-2 text-xs text-gray-400 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#CE2029] shrink-0 mt-0.5" />
                <span>Jl. Raya Soreang - Ciwidey No. 45, Kecamatan Soreang, Kabupaten Bandung, Jawa Barat 40911</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#CE2029] shrink-0" />
                <span>+62 812-3456-7890 (Layanan WA & Hotline)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#CE2029] shrink-0" />
                <span>info@koperasimerahputih-soreang.id</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#CE2029] shrink-0" />
                <span>Senin - Sabtu: 08:00 - 16:00 WIB</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-white font-serif-editorial text-base border-b border-[#CE2029] pb-2 inline-block">
              Navigasi Utama
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home', label: 'Beranda' },
                { id: 'profile', label: 'Profil Koperasi' },
                { id: 'potensi', label: 'Potensi Desa Soreang' },
                { id: 'produk', label: 'Katalog Produk UMKM' },
                { id: 'artikel', label: 'Artikel & Kabar Desa' },
                { id: 'edukasi', label: 'Edukasi Koperasi & FAQ' },
                { id: 'pendaftaran', label: 'Pendaftaran Anggota' },
                { id: 'kontak', label: 'Kontak & Lokasi' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-[#CE2029] opacity-70" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Kategori Produk */}
          <div className="space-y-3">
            <h3 className="text-white font-serif-editorial text-base border-b border-[#CE2029] pb-2 inline-block">
              Komoditas Unggulan
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button onClick={() => handleNav('produk')} className="hover:text-white transition">
                  🌱 Kopi & Hortikultura Soreang
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('produk')} className="hover:text-white transition">
                  🍓 Stroberi Segar Ciwidey-Soreang
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('produk')} className="hover:text-white transition">
                  🥛 Susu Sapi Murni & Olahan
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('produk')} className="hover:text-white transition">
                  👞 Sepatu & Olahan Kulit Soreang
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('produk')} className="hover:text-white transition">
                  🎋 Kerajinan Bambu & Etnik
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('produk')} className="hover:text-white transition">
                  👘 Batik Merah Putih Bandung
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Legalitas & Kemitraan */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider border-b border-red-600 pb-2 inline-block">
              Legalitas Koperasi
            </h3>
            <div className="bg-gray-900 border border-gray-800 p-3.5 rounded-xl space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">No. Badan Hukum:</span>
                <span className="font-semibold text-emerald-400">AHU-0012948.AH.01</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">NIK Kemenkop:</span>
                <span className="font-semibold text-emerald-400">3204080010023</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">NIB Usaha:</span>
                <span className="font-semibold text-emerald-400">9120301928371</span>
              </div>
              <div className="pt-2 border-t border-gray-800 text-[11px] text-gray-400">
                Terbina di bawah Dinas Koperasi & UKM Kabupaten Bandung.
              </div>
            </div>
          </div>
        </div>

        {/* Partners & Badges */}
        <div className="py-6 border-b border-gray-800 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
          <span className="font-semibold text-gray-300 uppercase tracking-wider">Mitra & Pembina:</span>
          <div className="flex flex-wrap items-center gap-6 opacity-80">
            <span className="bg-gray-900 px-3 py-1.5 rounded-lg border border-gray-800 text-gray-300 font-medium">
              Kementerian Koperasi & UKM RI
            </span>
            <span className="bg-gray-900 px-3 py-1.5 rounded-lg border border-gray-800 text-gray-300 font-medium">
              Pemkab Bandung
            </span>
            <span className="bg-gray-900 px-3 py-1.5 rounded-lg border border-gray-800 text-gray-300 font-medium">
              Diskop UKM Jabar
            </span>
            <span className="bg-gray-900 px-3 py-1.5 rounded-lg border border-gray-800 text-gray-300 font-medium">
              Bank BJB
            </span>
            <span className="bg-gray-900 px-3 py-1.5 rounded-lg border border-gray-800 text-gray-300 font-medium">
              Bank BRI
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3 text-center sm:text-left">
          <p>© 2026 Koperasi Merah Putih Kecamatan Soreang, Kabupaten Bandung. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => handleNav('edukasi')} className="hover:text-white transition">
              Syarat & Ketentuan
            </button>
            <span>•</span>
            <button onClick={() => handleNav('edukasi')} className="hover:text-white transition">
              Kebijakan Privasi
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
