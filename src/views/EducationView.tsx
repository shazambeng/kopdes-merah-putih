import React, { useState } from 'react';
import { EducationalFAQ } from '../types';
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Calculator,
  UserPlus,
  Coins,
  ShieldAlert,
  CheckCircle2,
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface EducationViewProps {
  faqs: EducationalFAQ[];
  onNavigate: (tab: string) => void;
}

export const EducationView: React.FC<EducationViewProps> = ({ faqs, onNavigate }) => {
  const [openFaqId, setOpenFaqId] = useState<string>(faqs[0]?.id || '');

  // SHU Simulator state
  const [simpananPokokWajib, setSimpananPokokWajib] = useState<number>(500000);
  const [transaksiBulanan, setTransaksiBulanan] = useState<number>(300000);

  // Simple realistic estimation formulas:
  // SHU Modal = 5% of deposit total per year
  // SHU Transaksi = 3% of total yearly transactions
  const estimasiShuModal = Math.round(simpananPokokWajib * 0.05);
  const estimasiShuTransaksi = Math.round(transaksiBulanan * 12 * 0.03);
  const totalEstimasiShu = estimasiShuModal + estimasiShuTransaksi;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* HEADER BANNER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-300 text-xs font-bold">
          <BookOpen className="w-3.5 h-3.5" />
          Pusat Literasi Koperasi
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Konten Edukasi & Simulasi SHU
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          Pahami hak dan kewajiban anggota, tata cara pendaftaran, struktur simpanan, serta simulasi pembagian Sisa Hasil Usaha (SHU) secara transparan.
        </p>
      </div>

      {/* 1. SIMULATOR SHU INTERAKTIF */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-800 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-800 pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-4 h-4" />
              Kalkulator Perkiraan
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold">Simulasi Hasil SHU Anggota</h2>
          </div>
          <span className="text-xs text-gray-400">
            *Estimasi berdasarkan proyeksi RAT Koperasi Merah Putih Soreang
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Inputs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <label className="text-gray-300">Total Simpanan (Pokok + Wajib + Sukarela)</label>
                <span className="text-amber-400 font-extrabold">Rp {simpananPokokWajib.toLocaleString('id-ID')}</span>
              </div>
              <input
                type="range"
                min="100000"
                max="10000000"
                step="100000"
                value={simpananPokokWajib}
                onChange={(e) => setSimpananPokokWajib(Number(e.target.value))}
                className="w-full accent-red-600 cursor-pointer"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <label className="text-gray-300">Rata-rata Belanja / Transaksi Koperasi (Per Bulan)</label>
                <span className="text-amber-400 font-extrabold">Rp {transaksiBulanan.toLocaleString('id-ID')}</span>
              </div>
              <input
                type="range"
                min="50000"
                max="5000000"
                step="50000"
                value={transaksiBulanan}
                onChange={(e) => setTransaksiBulanan(Number(e.target.value))}
                className="w-full accent-red-600 cursor-pointer"
              />
            </div>

            <p className="text-[11px] text-gray-400 italic">
              Semakin aktif Anda bertransaksi di Toserba/Unit Usaha Koperasi, semakin besar bagian SHU jasa transaksi yang akan Anda terima di akhir tahun buku.
            </p>
          </div>

          {/* Results Box (5 cols) */}
          <div className="lg:col-span-5 bg-gray-800/80 p-6 rounded-2xl border border-gray-700/80 space-y-4">
            <div className="space-y-2">
              <span className="text-xs text-gray-400 font-semibold block uppercase">Estimasi SHU Tahunan Anda:</span>
              <div className="text-3xl font-extrabold text-amber-400">
                Rp {totalEstimasiShu.toLocaleString('id-ID')}
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-gray-700/60 text-xs text-gray-300">
              <div className="flex justify-between">
                <span>• SHU Jasa Modal Simpanan:</span>
                <span className="font-bold">Rp {estimasiShuModal.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between">
                <span>• SHU Jasa Transaksi Usaha:</span>
                <span className="font-bold">Rp {estimasiShuTransaksi.toLocaleString('id-ID')}</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('pendaftaran')}
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center justify-center gap-2 transition"
            >
              <UserPlus className="w-4 h-4" />
              <span>Daftar Jadi Anggota Sekarang</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. ACCORDION FAQ EDUKASI */}
      <section className="space-y-6">
        <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
          <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
            Pertanyaan Populer
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
            FAQ & Panduan Lengkap Koperasi
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700/80 overflow-hidden shadow-xs transition"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                  className="w-full p-5 text-left font-bold text-sm text-gray-900 dark:text-white flex items-center justify-between gap-4 hover:text-red-600 dark:hover:text-red-400 transition"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CARD RINGKASAN HAK & KEWAJIBAN */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-emerald-50 dark:bg-emerald-950/40 p-6 sm:p-8 rounded-3xl border border-emerald-100 dark:border-emerald-900/50 space-y-4">
          <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-100 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            Hak Utama Anggota Koperasi
          </h3>
          <ul className="space-y-2 text-xs text-emerald-800 dark:text-emerald-200">
            <li>• Menghadiri dan memberikan hak suara dalam Rapat Anggota Tahunan (RAT).</li>
            <li>• Menerima bagian Sisa Hasil Usaha (SHU) sesuai keaktifan bertransaksi.</li>
            <li>• Mendapatkan kemudahan pinjaman modal usaha dengan bunga bersaing.</li>
            <li>• Menggunakan fasilitas pemasaran e-katalog produk UMKM secara gratis.</li>
          </ul>
        </div>

        <div className="bg-rose-50 dark:bg-rose-950/40 p-6 sm:p-8 rounded-3xl border border-rose-100 dark:border-rose-900/50 space-y-4">
          <h3 className="text-lg font-bold text-rose-900 dark:text-rose-100 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-rose-600" />
            Kewajiban Utama Anggota
          </h3>
          <ul className="space-y-2 text-xs text-rose-800 dark:text-rose-200">
            <li>• Membayar Simpanan Pokok (1 kali di awal) & Simpanan Wajib bulanan.</li>
            <li>• Mematuhi Anggaran Dasar & Anggaran Rumah Tangga (AD/ART) Koperasi.</li>
            <li>• Aktif berpartisipasi dan memanfaatkan produk/layanan unit usaha Koperasi.</li>
            <li>• Memelihara nama baik dan kebersamaan antar anggota di Soreang.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
