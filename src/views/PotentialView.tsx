import React, { useState } from 'react';
import { VillagePotential } from '../types';
import {
  Compass,
  MapPin,
  TrendingUp,
  User,
  Search,
  PhoneCall,
  Sparkles,
  Layers,
  ArrowUpRight
} from 'lucide-react';

interface PotentialViewProps {
  potentials: VillagePotential[];
  onSelectPotential: (v: VillagePotential) => void;
}

export const PotentialView: React.FC<PotentialViewProps> = ({ potentials, onSelectPotential }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'Semua',
    'Pertanian',
    'Peternakan',
    'UMKM',
    'Pariwisata',
    'Kerajinan',
    'Perdagangan',
    'Sumber Daya Alam',
    'Potensi Investasi'
  ];

  const filteredPotentials = potentials.filter((p) => {
    const matchCategory = selectedCategory === 'Semua' || p.category === selectedCategory;
    const matchSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.locationDetails.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden space-y-4">
        <div className="inline-flex items-center gap-2 bg-emerald-700/80 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-200">
          <Compass className="w-4 h-4 text-emerald-300" />
          <span>Soreang, Kabupaten Bandung</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Potensi Desa & Komoditas Unggulan
        </h1>
        <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl leading-relaxed">
          Kecamatan Soreang dianugerahi kesuburan tanah pegunungan, tradisi kerajinan yang kuat, sentra peternakan, serta sektor ekowisata yang siap dikembangkan menjadi peluang investasi dan kerjasama produktif.
        </p>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari sektor potensi, misal: 'kopi', 'sepatu', 'susu'..."
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Result Count */}
          <div className="text-xs text-gray-500 font-medium">
            Menampilkan <span className="font-bold text-gray-900 dark:text-white">{filteredPotentials.length}</span> sektor potensi
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition border ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* POTENTIAL CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPotentials.map((v) => (
          <div
            key={v.id}
            className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-900">
                <img
                  src={v.image}
                  alt={v.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md">
                  {v.category}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="line-clamp-1">{v.locationDetails}</span>
                  </div>
                  <h3 className="font-extrabold text-base text-gray-900 dark:text-white group-hover:text-emerald-600 transition">
                    {v.title}
                  </h3>
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                  {v.description}
                </p>

                {/* Key Stats */}
                {v.stats && v.stats.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {v.stats.map((st, idx) => (
                      <div key={idx} className="bg-emerald-50/60 dark:bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-100 dark:border-emerald-900/50">
                        <div className="text-[10px] font-semibold text-emerald-800 dark:text-emerald-300 uppercase">{st.label}</div>
                        <div className="text-xs font-bold text-emerald-950 dark:text-emerald-100">{st.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Investment Potential Info */}
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-gray-700 dark:text-gray-300">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Peluang Investasi:</span>
                  </div>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">{v.investmentPotential}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 border-t border-gray-100 dark:border-gray-700/80 flex items-center justify-between gap-2 mt-4">
              <span className="text-[11px] text-gray-500 line-clamp-1 flex items-center gap-1">
                <User className="w-3 h-3 text-gray-400" /> {v.contactPerson.split('-')[0]}
              </span>

              <a
                href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                  `Halo Admin Koperasi Merah Putih Soreang, saya berminat menjalin kemitraan/investasi pada sektor: ${v.title}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-xs flex items-center gap-1.5 transition shrink-0"
              >
                <span>Ajukan Kemitraan</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
