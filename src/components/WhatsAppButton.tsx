import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const phone = '6281234567890'; // Koperasi Soreang WhatsApp Hotline

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = message.trim() || 'Halo Admin Koperasi Merah Putih Soreang, saya ingin bertanya informasi keanggotaan/produk UMKM.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="mb-4 w-80 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold">
                KMP
              </div>
              <div>
                <h4 className="font-semibold text-sm">Layanan WA Koperasi</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                  Soreang, Kab. Bandung (Online)
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/20 transition"
              aria-label="Tutup Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSend} className="p-4 space-y-3">
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-xl text-xs text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
              Sampurasun! Ada yang bisa kami bantu seputar produk UMKM, simpanan, atau pendaftaran anggota Koperasi Merah Putih Soreang?
            </div>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tulis pesan Anda di sini..."
              rows={3}
              className="w-full text-xs p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Buka WhatsApp Sekarang</span>
            </button>
          </form>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-2xl hover:scale-105 transition-all duration-200 ring-4 ring-emerald-500/20"
        aria-label="Layanan WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-semibold pr-1">
          Layanan WA
        </span>
      </button>
    </div>
  );
};
