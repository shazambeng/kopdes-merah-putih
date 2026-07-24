import React, { useState } from 'react';
import { Product, CategoryType } from '../types';
import {
  Package,
  Search,
  Filter,
  Star,
  ShoppingBag,
  MessageCircle,
  X,
  CheckCircle,
  SlidersHorizontal,
  Store,
  ArrowUpDown
} from 'lucide-react';

interface ProductsViewProps {
  products: Product[];
  selectedProduct: Product | null;
  onSelectProduct: (p: Product | null) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  products,
  selectedProduct,
  onSelectProduct
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high'>('popular');

  const categories: (CategoryType | 'Semua')[] = [
    'Semua',
    'Pertanian',
    'Perkebunan',
    'Peternakan',
    'Makanan',
    'Minuman',
    'Kerajinan',
    'Fashion',
    'Lainnya'
  ];

  const filteredProducts = products
    .filter((p) => {
      const matchCategory = selectedCategory === 'Semua' || p.category === selectedCategory;
      const matchSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.producer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return b.salesCount - a.salesCount; // popular
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-rose-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden space-y-4">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold">
          <ShoppingBag className="w-4 h-4 text-amber-300" />
          <span>Katalog Resmi Koperasi Soreang</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Produk Unggulan UMKM & Unit Usaha
        </h1>
        <p className="text-xs sm:text-sm text-red-100 max-w-2xl leading-relaxed">
          Dukung perekonomian lokal dengan membeli komoditas kopi, stroberi, olahan makanan, batik, sepatu kulit, dan kerajinan tangan langsung dari para petani dan pengrajin Soreang.
        </p>
      </div>

      {/* CONTROLS BAR: SEARCH, CATEGORY, SORT */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari produk UMKM Soreang, misal: 'kopi', 'peuyeum', 'sepatu'..."
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-gray-400 shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-800 dark:text-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500 font-medium"
            >
              <option value="popular">Urutkan: Terlaris</option>
              <option value="price-low">Harga: Termurah</option>
              <option value="price-high">Harga: Termahal</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition border ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white border-red-600 shadow-xs'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCTS GRID */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 space-y-3">
          <Package className="w-12 h-12 text-gray-300 mx-auto" />
          <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300">Tidak ada produk ditemukan</h3>
          <p className="text-xs text-gray-400">Coba ubah kata kunci pencarian atau kategori filter Anda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              onClick={() => onSelectProduct(p)}
              className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                    {p.category}
                  </span>
                  <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-amber-300 text-[11px] font-bold px-2 py-0.5 rounded-lg flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-300" />
                    <span>{p.rating}</span>
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <div className="text-[11px] font-medium text-gray-400 dark:text-gray-500 flex items-center gap-1">
                    <Store className="w-3 h-3 text-gray-400" />
                    <span className="line-clamp-1">{p.producer}</span>
                  </div>

                  <h3 className="font-extrabold text-sm text-gray-900 dark:text-white line-clamp-2 group-hover:text-red-600 transition">
                    {p.name}
                  </h3>

                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 space-y-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase">Harga per {p.unit}</span>
                    <span className="text-base font-extrabold text-red-600 dark:text-red-400">
                      Rp {p.price.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2 py-0.5 rounded">
                    Stok: {p.stock}
                  </span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProduct(p);
                  }}
                  className="w-full py-2.5 bg-gray-900 dark:bg-gray-100 dark:text-gray-900 text-white rounded-xl text-xs font-bold shadow-xs hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white transition"
                >
                  Lihat Detail & Pesan
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* PRODUCT DETAIL MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-2xl w-full overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => onSelectProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition"
              aria-label="Tutup Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="aspect-square bg-gray-100 dark:bg-gray-900 relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {selectedProduct.category}
                </span>
              </div>

              <div className="p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="text-xs font-medium text-gray-500 flex items-center gap-1">
                    <Store className="w-3.5 h-3.5 text-red-500" />
                    <span>{selectedProduct.producer}</span>
                  </div>

                  <h2 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                    {selectedProduct.name}
                  </h2>

                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-amber-500 font-bold flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400" />
                      {selectedProduct.rating}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 font-medium">Terjual {selectedProduct.salesCount}+ pcs</span>
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed max-h-36 overflow-y-auto">
                    {selectedProduct.description}
                  </p>

                  <div className="p-3 rounded-2xl bg-red-50 dark:bg-red-950/60 border border-red-100 dark:border-red-900/50">
                    <span className="text-[10px] text-red-700 dark:text-red-300 block uppercase font-bold">Harga Resmi Koperasi:</span>
                    <div className="text-xl font-extrabold text-red-600 dark:text-red-400">
                      Rp {selectedProduct.price.toLocaleString('id-ID')}{' '}
                      <span className="text-xs font-normal text-gray-500">/ {selectedProduct.unit}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                  <a
                    href={`https://wa.me/${selectedProduct.whatsappNumber}?text=${encodeURIComponent(
                      `Halo Admin Koperasi Merah Putih Soreang, saya bermaksud memesan:\n- Produk: ${selectedProduct.name}\n- Harga: Rp ${selectedProduct.price.toLocaleString('id-ID')}\nMohon info ketersediaan stok dan ongkos kirim ke alamat saya.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center justify-center gap-2 transition"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Pesan Langsung via WhatsApp</span>
                  </a>

                  <p className="text-[10px] text-center text-gray-400">
                    Pemesanan akan langsung diteruskan ke Admin Koperasi Soreang & Pelaku UMKM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
