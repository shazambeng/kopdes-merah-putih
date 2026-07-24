import React, { useState } from 'react';
import { useToast } from '../components/Toast';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  ExternalLink,
  Building,
  CheckCircle2
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const { showToast } = useToast();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) {
      showToast('Formulir Belum Lengkap', 'Mohon isi Nama dan Pesan Anda.', 'error');
      return;
    }

    showToast('Pesan Terkirim!', 'Terima kasih telah menghubungi Koperasi Merah Putih Soreang. Tim admin akan membalas via WA/Email.', 'success');

    setName('');
    setPhone('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* HEADER BANNER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-300 text-xs font-bold">
          <Phone className="w-3.5 h-3.5" />
          Hubungi Kami
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Kontak & Lokasi Kantor Koperasi
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          Kunjungi sekretariat Koperasi Merah Putih di Kecamatan Soreang atau hubungi tim customer service kami untuk informasi produk UMKM, simpanan, dan kemitraan.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT CONTACT INFO & MAP (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700/80 shadow-md space-y-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-3">
              Informasi Sekretariat
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-red-50 dark:bg-red-950 text-red-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Alamat Kantor:</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Jl. Raya Soreang - Ciwidey No. 45, Kecamatan Soreang, Kabupaten Bandung, Jawa Barat 40911
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Hotline WhatsApp:</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">+62 812-3456-7890 (Layanan 24 Jam)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Email Resmi:</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">info@koperasimerahputih-soreang.id</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Jam Operasional Kantor:</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Senin - Sabtu: 08.00 - 16.00 WIB (Minggu Libur)</p>
                </div>
              </div>
            </div>
          </div>

          {/* GOOGLE MAPS PLACEHOLDER */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-md space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-gray-800 dark:text-gray-200">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-red-600" />
                <span>Peta Lokasi Kantor Soreang</span>
              </span>
              <a
                href="https://maps.google.com/?q=Soreang+Kabupaten+Bandung"
                target="_blank"
                rel="noreferrer"
                className="text-red-600 dark:text-red-400 hover:underline flex items-center gap-1"
              >
                <span>Buka Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center">
              <iframe
                title="Peta Soreang Bandung"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.038481238!2d107.518!3d-7.031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68eb76e102!2sSoreang%2C%20Bandung%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1680000000000"
                className="w-full h-full border-0 grayscale opacity-90 contrast-125"
                loading="lazy"
              ></iframe>
              <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md text-white text-[11px] px-3 py-1.5 rounded-xl font-semibold shadow-md">
                Koperasi Merah Putih Soreang
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTACT FORM (6 cols) */}
        <div className="lg:col-span-6 bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700/80 shadow-md space-y-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-3">
            Kirim Pesan Langsung
          </h2>

          <form onSubmit={handleSendForm} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
                Nama Anda <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Budi Santoso"
                className="w-full text-xs p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">No. WhatsApp / HP</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="081234567890"
                className="w-full text-xs p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Subjek Perihal</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full text-xs p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="Tanya Produk UMKM">Pertanyaan Produk UMKM</option>
                <option value="Informasi Keanggotaan">Informasi Keanggotaan / Simpanan</option>
                <option value="Kemitraan & Investasi Desa">Kemitraan & Potensi Desa</option>
                <option value="Lainnya">Perihal Lainnya</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
                Isi Pesan Anda <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tuliskan pertanyaan atau informasi yang ingin Anda sampaikan..."
                className="w-full text-xs p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center justify-center gap-2 transition"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Pesan ke Admin</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
