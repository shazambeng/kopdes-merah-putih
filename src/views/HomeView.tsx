import React, { useState, useEffect } from 'react';
import { HeroBanner, Product, Article, VillagePotential, Testimonial } from '../types';
import {
  Users,
  Package,
  Compass,
  Coins,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Star,
  ShoppingBag,
  UserPlus,
  ShieldCheck,
  Building,
  CheckCircle,
  ExternalLink,
  Sparkles,
  Award
} from 'lucide-react';

interface HomeViewProps {
  banners: HeroBanner[];
  products: Product[];
  articles: Article[];
  potentials: VillagePotential[];
  testimonials: Testimonial[];
  onNavigate: (tab: string) => void;
  onSelectProduct: (p: Product) => void;
  onSelectArticle: (a: Article) => void;
  onSelectPotential: (v: VillagePotential) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  banners,
  products,
  articles,
  potentials,
  testimonials,
  onNavigate,
  onSelectProduct,
  onSelectArticle,
  onSelectPotential
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 4);
  const featuredArticles = articles.slice(0, 3);
  const topPotentials = potentials.slice(0, 3);

  return (
    <div className="space-y-16 pb-12">
      {/* 1. HERO SLIDER */}
      <section className="relative overflow-hidden rounded-3xl bg-gray-900 text-white shadow-2xl mx-4 sm:mx-6 lg:mx-8 mt-4">
        <div className="relative min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex items-center">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center ${
                index === currentSlide ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover object-center scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent"></div>
              </div>

              {/* Banner Content */}
              <div className="relative max-w-3xl px-6 sm:px-12 lg:px-16 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CE2029] text-white text-[10px] font-bold tracking-widest uppercase border border-red-400/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{banner.badge}</span>
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-serif-editorial">
                  {banner.title}
                </h1>

                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal max-w-2xl">
                  {banner.subtitle}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onNavigate(banner.ctaTarget)}
                    className="px-6 py-3.5 bg-[#CE2029] hover:bg-red-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-red-900/40 flex items-center gap-2 transition transform active:scale-95"
                  >
                    <span>{banner.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onNavigate('pendaftaran')}
                    className="px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-xl text-xs sm:text-sm font-semibold border border-white/20 transition"
                  >
                    Daftar Anggota Online
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Slider Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)}
            className="absolute left-4 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm border border-white/10 transition"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % banners.length)}
            className="absolute right-4 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm border border-white/10 transition"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slide Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentSlide ? 'w-8 bg-red-500' : 'w-2 bg-white/50'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. HIGHLIGHT STATISTICS (ANIMATED CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700/80 shadow-xs hover:shadow-md transition group">
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 group-hover:scale-110 transition">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2.5 py-1 rounded-full">
                +12% Thn Ini
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">1.250+</h3>
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">Total Anggota Aktif</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700/80 shadow-xs hover:shadow-md transition group">
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition">
                <Package className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2.5 py-1 rounded-full">
                15 Varian
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">150+</h3>
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">Produk UMKM Terdaftar</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700/80 shadow-xs hover:shadow-md transition group">
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/80 px-2.5 py-1 rounded-full">
                8 Sektor
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">10</h3>
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">Potensi Desa Soreang</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700/80 shadow-xs hover:shadow-md transition group">
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 group-hover:scale-110 transition">
                <Coins className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/80 px-2.5 py-1 rounded-full">
                RAT 2025
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">Rp 450 Jt+</h3>
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">SHU Terbagikan</p>
          </div>
        </div>
      </section>

      {/* 3. WELCOME & QUICK MENU */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#CE2029] via-red-700 to-rose-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden border border-red-800/30">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
              <Award className="w-4 h-4 text-amber-300" />
              <span>Soreang, Kabupaten Bandung</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-serif-editorial">
              Selamat Datang di Portal Resmi Koperasi Merah Putih Soreang
            </h2>
            <p className="text-sm sm:text-base text-red-100 leading-relaxed font-normal">
              Kami berkomitmen untuk terus mendampingi pertumbuhan ekonomi warga, petani, peternak, dan pelaku UMKM melalui tata kelola koperasi yang modern, adil, transparan, dan berkelanjutan.
            </p>

            {/* Quick Menu Buttons */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <button
                onClick={() => onNavigate('produk')}
                className="p-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl text-left border border-white/20 transition group"
              >
                <ShoppingBag className="w-5 h-5 text-amber-300 mb-2 group-hover:scale-110 transition" />
                <div className="font-bold text-xs">Belanja UMKM</div>
                <div className="text-[10px] text-red-200">Katalog Produk Lokal</div>
              </button>

              <button
                onClick={() => onNavigate('pendaftaran')}
                className="p-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl text-left border border-white/20 transition group"
              >
                <UserPlus className="w-5 h-5 text-emerald-300 mb-2 group-hover:scale-110 transition" />
                <div className="font-bold text-xs">Daftar Anggota</div>
                <div className="text-[10px] text-red-200">Formulir Digital Online</div>
              </button>

              <button
                onClick={() => onNavigate('potensi')}
                className="p-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl text-left border border-white/20 transition group"
              >
                <Compass className="w-5 h-5 text-sky-300 mb-2 group-hover:scale-110 transition" />
                <div className="font-bold text-xs">Potensi Desa</div>
                <div className="text-[10px] text-red-200">Sektor & Investasi</div>
              </button>

              <button
                onClick={() => onNavigate('edukasi')}
                className="p-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl text-left border border-white/20 transition group"
              >
                <Coins className="w-5 h-5 text-rose-300 mb-2 group-hover:scale-110 transition" />
                <div className="font-bold text-xs">Simulasi SHU</div>
                <div className="text-[10px] text-red-200">Kalkulator Hak Anggota</div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-4">
          <div>
            <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
              Produk Pilihan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
              Produk Unggulan UMKM Soreang
            </h2>
          </div>
          <button
            onClick={() => onNavigate('produk')}
            className="text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-700 flex items-center gap-1.5 self-start sm:self-auto"
          >
            <span>Lihat Semua Produk ({products.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((p) => (
            <div
              key={p.id}
              onClick={() => onSelectProduct(p)}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-900">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                  {p.category}
                </span>
                <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-amber-300 text-[11px] font-bold px-2 py-0.5 rounded-lg flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-300" />
                  <span>{p.rating}</span>
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[11px] font-medium text-gray-400 dark:text-gray-500 mb-1">
                    {p.producer}
                  </div>
                  <h3 className="font-bold text-sm text-gray-900 dark:text-white line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition">
                    {p.name}
                  </h3>
                </div>

                <div className="pt-2 border-t border-gray-100 dark:border-gray-700/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 block">Harga</span>
                    <span className="text-sm font-extrabold text-red-600 dark:text-red-400">
                      Rp {p.price.toLocaleString('id-ID')}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/${p.whatsappNumber}?text=${encodeURIComponent(
                      `Halo Admin Koperasi Soreang, saya ingin memesan produk: ${p.name} (Rp ${p.price.toLocaleString('id-ID')})`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-xs flex items-center gap-1.5 transition"
                  >
                    <span>Pesan WA</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. VILLAGE POTENTIAL HIGHLIGHTS */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-12 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Kecamatan Soreang, Kab. Bandung
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              Potensi Unggulan Sektor Desa
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Kekayaan sumber daya alam, pertanian, peternakan, dan industri kreatif warga Soreang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topPotentials.map((v) => (
              <div
                key={v.id}
                onClick={() => onSelectPotential(v)}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700/80 overflow-hidden shadow-xs hover:shadow-lg transition cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] bg-gray-100 dark:bg-gray-900">
                    <img
                      src={v.image}
                      alt={v.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-md">
                      {v.category}
                    </span>
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-emerald-600 transition">
                      {v.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-gray-100 dark:border-gray-700/80 flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                  <span>Lihat Peluang Investasi</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('potensi')}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md transition"
            >
              Jelajahi Semua 8 Sektor Potensi Desa
            </button>
          </div>
        </div>
      </section>

      {/* 6. LATEST ARTICLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-4">
          <div>
            <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
              Kabar & Pengumuman
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
              Artikel Terbaru Koperasi
            </h2>
          </div>
          <button
            onClick={() => onNavigate('artikel')}
            className="text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-700 flex items-center gap-1.5 self-start sm:self-auto"
          >
            <span>Lihat Semua Kabar ({articles.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((a) => (
            <div
              key={a.id}
              onClick={() => onSelectArticle(a)}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700/80 overflow-hidden shadow-xs hover:shadow-lg transition cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] bg-gray-100 dark:bg-gray-900">
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
                  <div className="text-[11px] text-gray-400">
                    {a.date} • {a.readTime}
                  </div>
                  <h3 className="font-bold text-sm text-gray-900 dark:text-white line-clamp-2 group-hover:text-red-600 transition">
                    {a.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                    {a.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 text-xs font-bold text-red-600 dark:text-red-400 flex items-center gap-1">
                <span>Baca Selengkapnya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Suara Anggota Koperasi
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Testimoni Anggota Soreang
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-gray-800/80 border border-gray-700/80 p-6 rounded-2xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-300 italic leading-relaxed">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-gray-700/60">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="text-xs font-bold text-white">{t.name}</h4>
                    <p className="text-[11px] text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
