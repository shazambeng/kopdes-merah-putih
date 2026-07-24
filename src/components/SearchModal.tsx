import React, { useState } from 'react';
import { Product, Article, VillagePotential } from '../types';
import { Search, X, Package, FileText, Compass, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  articles: Article[];
  potentials: VillagePotential[];
  onSelectProduct: (p: Product) => void;
  onSelectArticle: (a: Article) => void;
  onSelectPotential: (v: VillagePotential) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  articles,
  potentials,
  onSelectProduct,
  onSelectArticle,
  onSelectPotential
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const filteredProducts = q
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    : [];

  const filteredArticles = q
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
      )
    : [];

  const filteredPotentials = q
    ? potentials.filter(
        (v) =>
          v.title.toLowerCase().includes(q) ||
          v.category.toLowerCase().includes(q) ||
          v.description.toLowerCase().includes(q)
      )
    : [];

  const totalResults = filteredProducts.length + filteredArticles.length + filteredPotentials.length;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full border border-gray-200 dark:border-gray-800 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Input Bar */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari produk UMKM, artikel berita, atau potensi desa Soreang..."
            className="w-full text-sm font-medium bg-transparent border-none text-gray-900 dark:text-gray-100 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition"
            aria-label="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {!q ? (
            <div className="text-center py-8 text-gray-400 text-xs">
              Ketikkan kata kunci seperti <span className="text-red-600 dark:text-red-400 font-semibold">"Kopi"</span>, <span className="text-red-600 dark:text-red-400 font-semibold">"Stroberi"</span>, <span className="text-red-600 dark:text-red-400 font-semibold">"RAT"</span>, atau <span className="text-red-600 dark:text-red-400 font-semibold">"Sepatu"</span> untuk pencarian cepat.
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-10 text-gray-500 text-xs">
              Tidak ditemukan hasil untuk kata kunci <span className="font-bold">"{query}"</span>. Coba kata kunci lainnya.
            </div>
          ) : (
            <>
              {/* Products */}
              {filteredProducts.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    <Package className="w-3.5 h-3.5 text-red-500" />
                    <span>Produk UMKM ({filteredProducts.length})</span>
                  </div>
                  <div className="divide-y divide-gray-100 dark:divide-gray-800">
                    {filteredProducts.slice(0, 4).map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          onSelectProduct(p);
                          onClose();
                        }}
                        className="p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 cursor-pointer flex items-center justify-between transition"
                      >
                        <div className="flex items-center gap-3">
                          <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover" />
                          <div>
                            <h4 className="text-xs font-semibold text-gray-800 dark:text-gray-200">{p.name}</h4>
                            <p className="text-[11px] text-gray-500 dark:text-gray-400">
                              {p.category} • Rp {p.price.toLocaleString('id-ID')}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Articles */}
              {filteredArticles.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    <FileText className="w-3.5 h-3.5 text-red-500" />
                    <span>Artikel & Berita ({filteredArticles.length})</span>
                  </div>
                  <div className="divide-y divide-gray-100 dark:divide-gray-800">
                    {filteredArticles.slice(0, 4).map((a) => (
                      <div
                        key={a.id}
                        onClick={() => {
                          onSelectArticle(a);
                          onClose();
                        }}
                        className="p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 cursor-pointer flex items-center justify-between transition"
                      >
                        <div className="flex items-center gap-3">
                          <img src={a.image} alt={a.title} className="w-10 h-10 rounded-lg object-cover" />
                          <div>
                            <h4 className="text-xs font-semibold text-gray-800 dark:text-gray-200 line-clamp-1">{a.title}</h4>
                            <p className="text-[11px] text-gray-500 dark:text-gray-400">
                              {a.category} • {a.date}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Potentials */}
              {filteredPotentials.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    <Compass className="w-3.5 h-3.5 text-red-500" />
                    <span>Potensi Desa Soreang ({filteredPotentials.length})</span>
                  </div>
                  <div className="divide-y divide-gray-100 dark:divide-gray-800">
                    {filteredPotentials.slice(0, 3).map((v) => (
                      <div
                        key={v.id}
                        onClick={() => {
                          onSelectPotential(v);
                          onClose();
                        }}
                        className="p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 cursor-pointer flex items-center justify-between transition"
                      >
                        <div className="flex items-center gap-3">
                          <img src={v.image} alt={v.title} className="w-10 h-10 rounded-lg object-cover" />
                          <div>
                            <h4 className="text-xs font-semibold text-gray-800 dark:text-gray-200">{v.title}</h4>
                            <p className="text-[11px] text-gray-500 dark:text-gray-400">{v.category} • {v.locationDetails}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
