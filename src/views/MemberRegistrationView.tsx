import React, { useState } from 'react';
import { MemberRegistration } from '../types';
import { useToast } from '../components/Toast';
import { KopdesLogo } from '../components/KopdesLogo';
import {
  UserPlus,
  CheckCircle2,
  Search,
  CreditCard,
  Building2,
  FileCheck2,
  Sparkles,
  Phone,
  Lock,
  User,
  ShieldCheck
} from 'lucide-react';

interface MemberRegistrationViewProps {
  registrations: MemberRegistration[];
  onSubmitRegistration: (reg: Omit<MemberRegistration, 'id' | 'status' | 'registrationDate'>) => void;
}

export const MemberRegistrationView: React.FC<MemberRegistrationViewProps> = ({
  registrations,
  onSubmitRegistration
}) => {
  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState<'form' | 'check'>('form');

  // Form State
  const [fullName, setFullName] = useState('');
  const [nik, setNik] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [village, setVillage] = useState('Desa Soreang');
  const [occupation, setOccupation] = useState('Petani / Peternak');
  const [depositType, setDepositType] = useState<'Simpanan Pokok & Wajib' | 'Simpanan Sukarela' | 'Simpanan Qurban'>('Simpanan Pokok & Wajib');

  // Status Search State
  const [searchNik, setSearchNik] = useState('');
  const [foundReg, setFoundReg] = useState<MemberRegistration | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const villagesInSoreang = [
    'Desa Soreang',
    'Desa Sukanagara',
    'Desa Panyirapan',
    'Desa Parungserab',
    'Desa Sekarwangi',
    'Desa Sukajadi',
    'Desa Cingcin',
    'Desa Karamatmulya',
    'Desa Sadang'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !nik || !phone || !address) {
      showToast('Formulir Belum Lengkap', 'Mohon lengkapi Nama, NIK, No WA, dan Alamat Anda.', 'error');
      return;
    }

    if (nik.length < 16) {
      showToast('NIK Harus 16 Digit', 'Format NIK e-KTP Indonesia adalah 16 angka.', 'error');
      return;
    }

    onSubmitRegistration({
      fullName,
      nik,
      phone,
      email: email || `${nik}@warga.soreang.id`,
      address,
      village,
      occupation,
      depositType
    });

    showToast('Pendaftaran Berhasil Dikirim!', 'Permohonan keanggotaan Anda sedang diverifikasi oleh Sekretariat Koperasi.', 'success');

    // Reset Form
    setFullName('');
    setNik('');
    setPhone('');
    setEmail('');
    setAddress('');
  };

  const handleSearchNik = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const matched = registrations.find((r) => r.nik === searchNik.trim() || r.phone === searchNik.trim());
    setFoundReg(matched || null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* HEADER BANNER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-300 text-xs font-bold">
          <UserPlus className="w-3.5 h-3.5" />
          Layanan Keanggotaan Digital
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Pendaftaran Anggota Koperasi Online
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          Nikmati kemudahan menjadi bagian dari Koperasi Merah Putih Soreang. Dapatkan SHU tahunan, akses pinjaman modal adil, dan pemasaran gratis produk UMKM Anda.
        </p>

        {/* Tab Switchers */}
        <div className="pt-2 flex justify-center gap-2">
          <button
            onClick={() => setActiveTab('form')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === 'form'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
            }`}
          >
            Formulir Pendaftaran
          </button>

          <button
            onClick={() => setActiveTab('check')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === 'check'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
            }`}
          >
            Cek Status Pendaftaran / NIK
          </button>
        </div>
      </div>

      {activeTab === 'form' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* FORM (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl border border-gray-100 dark:border-gray-700/80 shadow-md space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-100 dark:border-gray-700 pb-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/80 flex items-center justify-center text-red-600 dark:text-red-400">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-gray-900 dark:text-white">Formulir Identitas Calon Anggota</h3>
                <p className="text-xs text-gray-400">Isi data diri Anda sesuai dengan e-KTP Republik Indonesia</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
                    Nama Lengkap (Sesuai KTP) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Contoh: Asep Ridwan"
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
                    Nomor NIK (16 Angka) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={16}
                    value={nik}
                    onChange={(e) => setNik(e.target.value.replace(/[^0-9]/g, ''))}
                    placeholder="320412..."
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
                    No. WhatsApp Aktif <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="081234567890"
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Email (Opsional)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@gmail.com"
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
                    Desa / Kelurahan (Kec. Soreang) <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={village}
                    onChange={(e) => setVillage(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    {villagesInSoreang.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Pekerjaan Utama</label>
                  <select
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="Petani / Peternak">Petani / Peternak</option>
                    <option value="Pelaku UMKM / Pedagang">Pelaku UMKM / Pedagang</option>
                    <option value="Pengrajin Industri">Pengrajin Industri</option>
                    <option value="Karyawan Swasta / BUMN">Karyawan Swasta / BUMN</option>
                    <option value="PNS / Aparat">PNS / Aparat</option>
                    <option value="Ibu Rumah Tangga">Ibu Rumah Tangga</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
                  Alamat Lengkap (RT/RW/Dusun) <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Contoh: Jl. Soreang Asri No. 12, RT 02 / RW 05"
                  className="w-full text-xs p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                ></textarea>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
                  Pilihan Paket Simpanan Awal
                </label>
                <select
                  value={depositType}
                  onChange={(e) => setDepositType(e.target.value as any)}
                  className="w-full text-xs p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="Simpanan Pokok & Wajib">Simpanan Pokok (Rp 100rb) + Wajib Bulan I (Rp 20rb)</option>
                  <option value="Simpanan Sukarela">Simpanan Sukarela Berjangka</option>
                  <option value="Simpanan Qurban">Simpanan Tabungan Qurban & Hari Raya</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center justify-center gap-2 transition"
              >
                <UserPlus className="w-4 h-4" />
                <span>Kirim Permohonan Keanggotaan</span>
              </button>
            </form>
          </div>

          {/* PREVIEW KARTU ANGGOTA DIGITAL (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-red-700 via-red-800 to-rose-950 text-white p-6 rounded-3xl shadow-xl space-y-5 relative overflow-hidden border border-red-500/30">
              <div className="flex items-center justify-between border-b border-white/20 pb-3">
                <KopdesLogo size="sm" className="brightness-200" />
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded">
                  Digital Card Preview
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-red-200 uppercase tracking-wider block">Kartu Tanda Anggota:</span>
                <h3 className="text-lg font-extrabold text-amber-300">
                  {fullName || 'NAMA LENGKAP ANGGOTA'}
                </h3>
                <p className="text-xs text-red-100 font-mono">
                  {nik ? `NIK: ${nik}` : 'NIK: 320412XXXXXXXXXX'}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] text-red-100 pt-2 border-t border-white/20">
                <div>
                  <span className="text-[9px] text-red-300 block">DESA:</span>
                  <span className="font-semibold">{village}</span>
                </div>
                <div>
                  <span className="text-[9px] text-red-300 block">NO ANGGOTA:</span>
                  <span className="font-semibold">KMP-SRG-2026-XXXX</span>
                </div>
              </div>

              <div className="text-[9px] text-red-200 pt-2 flex items-center justify-between">
                <span>Kecamatan Soreang, Kab. Bandung</span>
                <span>Koperasi Merah Putih</span>
              </div>
            </div>

            {/* Quick Benefits List */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700/80 shadow-xs space-y-3">
              <h4 className="font-bold text-xs text-gray-900 dark:text-white uppercase tracking-wider">
                Keuntungan Anggota Terdaftar:
              </h4>
              <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Hak Pembagian SHU Tahunan</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Pinjaman Modal Usaha Tanpa Agunan Berbelit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Promosi Gratis Produk UMKM di Portal Web</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        /* STATUS SEARCH */
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-md space-y-6">
          <form onSubmit={handleSearchNik} className="space-y-3">
            <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
              Masukkan Nomor NIK atau No. WhatsApp Anda:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                required
                value={searchNik}
                onChange={(e) => setSearchNik(e.target.value)}
                placeholder="Contoh: 3204121508880001"
                className="flex-1 text-xs p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-xs transition flex items-center gap-1.5"
              >
                <Search className="w-4 h-4" />
                <span>Cari Status</span>
              </button>
            </div>
          </form>

          {hasSearched && (
            <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
              {foundReg ? (
                <div className="bg-emerald-50 dark:bg-emerald-950/60 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-800 dark:text-emerald-200">
                      Data Permohonan Ditemukan!
                    </span>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        foundReg.status === 'Disetujui'
                          ? 'bg-emerald-600 text-white'
                          : foundReg.status === 'Pending'
                          ? 'bg-amber-500 text-white'
                          : 'bg-red-600 text-white'
                      }`}
                    >
                      Status: {foundReg.status}
                    </span>
                  </div>

                  <div className="text-xs text-emerald-900 dark:text-emerald-100 space-y-1">
                    <div><strong>Nama:</strong> {foundReg.fullName}</div>
                    <div><strong>NIK:</strong> {foundReg.nik}</div>
                    <div><strong>Desa:</strong> {foundReg.village}</div>
                    <div><strong>Tanggal Pendaftaran:</strong> {foundReg.registrationDate}</div>
                    {foundReg.memberId && <div><strong>No Anggota Digital:</strong> {foundReg.memberId}</div>}
                  </div>
                </div>
              ) : (
                <div className="text-center py-6 text-xs text-gray-500">
                  Data dengan NIK/HP <span className="font-bold">"{searchNik}"</span> tidak ditemukan. Silakan lakukan pendaftaran baru di tab sebelah.
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
