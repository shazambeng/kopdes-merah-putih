import React, { useState } from 'react';
import { Article } from '../types';
import {
  FileText,
  Search,
  Calendar,
  Clock,
  Eye,
  User,
  X,
  Share2,
  TrendingUp,
  Tag,
  ChevronLeft,
  ChevronRight,
  Check
} from 'lucide-react';

interface ArticlesViewProps {
  articles: Article[];
  selectedArticle: Article | null;
  onSelectArticle: (a: Article | null) => void;
}

export const ArticlesView: React.FC<ArticlesViewProps> = ({
  articles,
  selectedArticle,
  onSelectArticle
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [copied, setCopied] = useState(false);

  const articlesPerPage = 6;

  const categories = ['Semua', 'Berita', 'Pengumuman', 'Edukasi', 'Kegiatan', 'Prestasi'];

  const filteredArticles = articles.filter((a) => {
    const matchCat = selectedCategory === 'Semua' || a.category === selectedCategory;
    const matchSearch =
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage) || 1;
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const featured = articles.find((a) => a.isFeatured) || articles[0];
  const popularArticles = [...articles].sort((a, b) => b.views - a.views).slice(0, 5);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* HEADER BANNER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-300 text-xs font-bold">
          <FileText className="w-3.5 h-3.5" />
          Kabar Soreang & Koperasi
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Artikel, Berita & Pengumuman
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          Pusat informasi resmi seputar kegiatan RAT, bimbingan UMKM, penyaluran SHU, teknologi pertanian, dan kabar pembangunan di Kecamatan Soreang.
        </p>
      </div>

      {/* FEATURED ARTICLE HERO CARD */}
      {featured && (
        <div
          onClick={() => onSelectArticle(featured)}
          className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer grid grid-cols-1 lg:grid-cols-12 group"
        >
          <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden bg-gray-100 dark:bg-gray-900">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <div className="lg:col-span-5 p-8 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-red-600 text-white text-xs font-extrabold rounded-full">
                  {featured.category}
                </span>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/80 px-2.5 py-0.5 rounded-full">
                  ★ Artikel Utama
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white group-hover:text-red-600 transition leading-snug">
                {featured.title}
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                {featured.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-700/80 flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-red-500" />
                <span>{featured.author}</span>
              </div>
              <div className="flex items-center gap-3">
                <span>{featured.date}</span>
                <span>•</span>
                <span>{featured.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTENT GRID: ARTICLES + SIDEBAR */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT LISTING (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Controls Bar */}
          <div className="space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Cari judul artikel atau kata kunci, misal: 'RAT', 'pemasaran', 'SHU'..."
                className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition border ${
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

          {/* Articles Grid */}
          {paginatedArticles.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 space-y-2">
              <FileText className="w-10 h-10 text-gray-300 mx-auto" />
              <h3 className="text-xs font-bold text-gray-700 dark:text-gray-300">Tidak ada artikel ditemukan</h3>
              <p className="text-[11px] text-gray-400">Gunakan kata kunci atau kategori berita yang lain.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {paginatedArticles.map((a) => (
                <div
                  key={a.id}
                  onClick={() => onSelectArticle(a)}
                  className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700/80 overflow-hidden shadow-xs hover:shadow-lg transition cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-900">
                      <img
                        src={a.image}
                        alt={a.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                        {a.category}
                      </span>
                    </div>

                    <div className="p-5 space-y-2">
                      <div className="text-[11px] text-gray-400 flex items-center gap-2">
                        <span>{a.date}</span>
                        <span>•</span>
                        <span>{a.readTime}</span>
                      </div>

                      <h3 className="font-bold text-sm text-gray-900 dark:text-white line-clamp-2 group-hover:text-red-600 transition leading-snug">
                        {a.title}
                      </h3>

                      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                        {a.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-gray-100 dark:border-gray-700/80 flex items-center justify-between text-[11px] text-gray-400 mt-2">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3 text-red-500" /> {a.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3 text-gray-400" /> {a.views}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-6">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="p-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 disabled:opacity-40 hover:bg-gray-50 transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 px-3">
                Halaman {currentPage} dari {totalPages}
              </span>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="p-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 disabled:opacity-40 hover:bg-gray-50 transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* RIGHT SIDEBAR (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Popular Articles Widget */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700/80 shadow-xs space-y-4">
            <div className="flex items-center gap-2 font-bold text-sm text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-3">
              <TrendingUp className="w-4 h-4 text-red-600" />
              <span>Artikel Paling Populer</span>
            </div>

            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {popularArticles.map((pop, idx) => (
                <div
                  key={pop.id}
                  onClick={() => onSelectArticle(pop)}
                  className="py-3 cursor-pointer group flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 p-2 rounded-xl transition"
                >
                  <span className="font-extrabold text-lg text-red-600/60 dark:text-red-400/60 w-5 shrink-0 text-center">
                    0{idx + 1}
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200 group-hover:text-red-600 transition line-clamp-2 leading-snug">
                      {pop.title}
                    </h4>
                    <div className="text-[10px] text-gray-400 flex items-center gap-2">
                      <span>{pop.date}</span>
                      <span>•</span>
                      <span>{pop.views} pembaca</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ARTICLE READER MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-800 shadow-2xl relative animate-in zoom-in-95 duration-200">
            {/* Top Close Button */}
            <button
              onClick={() => onSelectArticle(null)}
              className="sticky top-4 right-4 ml-auto z-20 p-2 rounded-full bg-black/70 text-white hover:bg-black transition flex items-center justify-center"
              aria-label="Tutup Artikel"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Article Image Header */}
            <div className="relative aspect-[16/9] -mt-12 bg-gray-100 dark:bg-gray-900">
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="bg-red-600 px-3 py-1 rounded-full text-xs font-bold">
                  {selectedArticle.category}
                </span>
                <h1 className="text-xl sm:text-2xl font-extrabold leading-tight">{selectedArticle.title}</h1>
              </div>
            </div>

            {/* Article Content & Metadata */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between text-xs text-gray-500 border-b border-gray-100 dark:border-gray-800 pb-4 gap-2">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 font-semibold text-gray-700 dark:text-gray-300">
                    <User className="w-3.5 h-3.5 text-red-500" /> {selectedArticle.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" /> {selectedArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gray-400" /> {selectedArticle.readTime}
                  </span>
                </div>

                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-700 dark:text-gray-300 text-xs font-semibold transition"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Link Tersalin!' : 'Bagikan Artikel'}</span>
                </button>
              </div>

              {/* Main Content Body */}
              <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 whitespace-pre-line">
                {selectedArticle.content}
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center gap-2">
                <Tag className="w-3.5 h-3.5 text-gray-400" />
                {selectedArticle.tags.map((t, idx) => (
                  <span key={idx} className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
