import React, { useState } from 'react';
import {
  Product,
  Article,
  VillagePotential,
  ManagementMember,
  GalleryItem,
  HeroBanner,
  MemberRegistration
} from '../types';
import { useToast } from '../components/Toast';
import {
  ShieldCheck,
  Package,
  FileText,
  Compass,
  Users,
  Image as ImageIcon,
  Sliders,
  UserCheck,
  Plus,
  Trash2,
  Edit,
  Check,
  X,
  Eye,
  DollarSign,
  Layers,
  ArrowUpRight
} from 'lucide-react';

interface AdminViewProps {
  products: Product[];
  onUpdateProducts: (p: Product[]) => void;
  articles: Article[];
  onUpdateArticles: (a: Article[]) => void;
  potentials: VillagePotential[];
  onUpdatePotentials: (v: VillagePotential[]) => void;
  management: ManagementMember[];
  onUpdateManagement: (m: ManagementMember[]) => void;
  gallery: GalleryItem[];
  onUpdateGallery: (g: GalleryItem[]) => void;
  banners: HeroBanner[];
  onUpdateBanners: (b: HeroBanner[]) => void;
  registrations: MemberRegistration[];
  onUpdateRegistrations: (r: MemberRegistration[]) => void;
}

export const AdminView: React.FC<AdminViewProps> = ({
  products,
  onUpdateProducts,
  articles,
  onUpdateArticles,
  potentials,
  onUpdatePotentials,
  management,
  onUpdateManagement,
  gallery,
  onUpdateGallery,
  banners,
  onUpdateBanners,
  registrations,
  onUpdateRegistrations
}) => {
  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'produk' | 'artikel' | 'potensi' | 'pengurus' | 'banner' | 'galeri' | 'pendaftaran'
  >('dashboard');

  // MODAL STATES FOR ADD / EDIT
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [newProductName, setNewProductName] = useState('');
  const [newProductCategory, setNewProductCategory] = useState<any>('Makanan');
  const [newProductPrice, setNewProductPrice] = useState<number>(25000);
  const [newProductStock, setNewProductStock] = useState<number>(50);
  const [newProductProducer, setNewProductProducer] = useState('UMKM Soreang');
  const [newProductDesc, setNewProductDesc] = useState('');
  const [newProductImage, setNewProductImage] = useState('https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600');

  // Add Article Modal
  const [showAddArticleModal, setShowAddArticleModal] = useState(false);
  const [newArtTitle, setNewArtTitle] = useState('');
  const [newArtCategory, setNewArtCategory] = useState<any>('Berita');
  const [newArtExcerpt, setNewArtExcerpt] = useState('');
  const [newArtContent, setNewArtContent] = useState('');
  const [newArtImage, setNewArtImage] = useState('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800');

  // Handlers for Product
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProductName || !newProductDesc) return;

    const newP: Product = {
      id: 'p-' + Date.now(),
      name: newProductName,
      category: newProductCategory,
      price: Number(newProductPrice),
      stock: Number(newProductStock),
      unit: 'pcs',
      description: newProductDesc,
      image: newProductImage || 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600',
      whatsappNumber: '6281234567890',
      isFeatured: true,
      rating: 5.0,
      salesCount: 1,
      producer: newProductProducer
    };

    onUpdateProducts([newP, ...products]);
    showToast('Produk Berhasil Ditambahkan', `Produk "${newProductName}" telah masuk dalam katalog.`, 'success');
    setShowAddProductModal(false);
    setNewProductName('');
    setNewProductDesc('');
  };

  const handleDeleteProduct = (id: string) => {
    onUpdateProducts(products.filter((p) => p.id !== id));
    showToast('Produk Dihapus', 'Produk berhasil dihapus dari katalog.', 'info');
  };

  // Handlers for Article
  const handleAddArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newArtTitle || !newArtContent) return;

    const newA: Article = {
      id: 'a-' + Date.now(),
      title: newArtTitle,
      category: newArtCategory,
      excerpt: newArtExcerpt || newArtContent.substring(0, 100) + '...',
      content: newArtContent,
      author: 'Admin Koperasi',
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      readTime: '3 menit',
      image: newArtImage || 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
      isFeatured: false,
      views: 1,
      tags: ['Soreang', newArtCategory]
    };

    onUpdateArticles([newA, ...articles]);
    showToast('Artikel Berhasil Diterbitkan', `Artikel "${newArtTitle}" berhasil dipublikasikan.`, 'success');
    setShowAddArticleModal(false);
    setNewArtTitle('');
    setNewArtContent('');
  };

  const handleDeleteArticle = (id: string) => {
    onUpdateArticles(articles.filter((a) => a.id !== id));
    showToast('Artikel Dihapus', 'Artikel telah dihapus.', 'info');
  };

  // Handlers for Registration Approval
  const handleApproveRegistration = (id: string) => {
    onUpdateRegistrations(
      registrations.map((r) =>
        r.id === id ? { ...r, status: 'Disetujui', memberId: `KMP-SRG-2026-${Math.floor(1000 + Math.random() * 9000)}` } : r
      )
    );
    showToast('Permohonan Disetujui', 'Calon anggota kini resmi menjadi anggota terdaftar.', 'success');
  };

  const handleRejectRegistration = (id: string) => {
    onUpdateRegistrations(
      registrations.map((r) => (r.id === id ? { ...r, status: 'Ditolak' } : r))
    );
    showToast('Permohonan Ditolak', 'Status pendaftaran diubah menjadi ditolak.', 'info');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
            <span>Panel Administrator Koperasi Soreang</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold">Dashboard Pengelolaan Microsite</h1>
          <p className="text-xs text-amber-100">
            Kelola katalog produk, artikel berita, potensi desa, data pengurus, dan verifikasi anggota baru secara real-time.
          </p>
        </div>

        <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-semibold">
          ● Mode Demo Admin Aktif
        </div>
      </div>

      {/* ADMIN TABS NAVIGATION */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-gray-200 dark:border-gray-800">
        {[
          { id: 'dashboard', label: 'Dashboard Overview', icon: Layers },
          { id: 'produk', label: `Kelola Produk (${products.length})`, icon: Package },
          { id: 'artikel', label: `Kelola Artikel (${articles.length})`, icon: FileText },
          { id: 'potensi', label: `Kelola Potensi (${potentials.length})`, icon: Compass },
          { id: 'pengurus', label: `Kelola Pengurus (${management.length})`, icon: Users },
          { id: 'banner', label: `Kelola Banner (${banners.length})`, icon: Sliders },
          { id: 'galeri', label: `Kelola Galeri (${gallery.length})`, icon: ImageIcon },
          { id: 'pendaftaran', label: `Pendaftaran Anggota (${registrations.length})`, icon: UserCheck }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                isActive
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 1. DASHBOARD OVERVIEW */}
      {activeTab === 'dashboard' && (
        <div className="space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xs space-y-1">
              <span className="text-xs text-gray-400 font-bold uppercase">Total Produk</span>
              <div className="text-2xl font-extrabold text-gray-900 dark:text-white">{products.length} Items</div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xs space-y-1">
              <span className="text-xs text-gray-400 font-bold uppercase">Total Artikel</span>
              <div className="text-2xl font-extrabold text-gray-900 dark:text-white">{articles.length} Postings</div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xs space-y-1">
              <span className="text-xs text-gray-400 font-bold uppercase">Potensi Desa</span>
              <div className="text-2xl font-extrabold text-gray-900 dark:text-white">{potentials.length} Sektor</div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xs space-y-1">
              <span className="text-xs text-gray-400 font-bold uppercase">Pendaftaran Masuk</span>
              <div className="text-2xl font-extrabold text-amber-500">{registrations.length} Pendaftar</div>
            </div>
          </div>

          {/* Quick Member Applications Table */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-gray-900 dark:text-white">Pendaftaran Anggota Terbaru</h3>
              <button
                onClick={() => setActiveTab('pendaftaran')}
                className="text-xs text-amber-600 font-bold hover:underline"
              >
                Lihat Semua ({registrations.length})
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-gray-700 dark:text-gray-300">
                <thead className="bg-gray-50 dark:bg-gray-900 text-gray-400 uppercase text-[10px] font-bold">
                  <tr>
                    <th className="p-3">Nama</th>
                    <th className="p-3">NIK</th>
                    <th className="p-3">Desa</th>
                    <th className="p-3">Tanggal</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {registrations.map((r) => (
                    <tr key={r.id}>
                      <td className="p-3 font-bold text-gray-900 dark:text-white">{r.fullName}</td>
                      <td className="p-3 font-mono">{r.nik}</td>
                      <td className="p-3">{r.village}</td>
                      <td className="p-3">{r.registrationDate}</td>
                      <td className="p-3">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                            r.status === 'Disetujui'
                              ? 'bg-emerald-100 text-emerald-800'
                              : r.status === 'Pending'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {r.status}
                        </span>
                      </td>
                      <td className="p-3 flex items-center gap-1">
                        {r.status === 'Pending' && (
                          <>
                            <button
                              onClick={() => handleApproveRegistration(r.id)}
                              className="p-1 rounded bg-emerald-600 text-white text-[10px] font-bold"
                            >
                              Setujui
                            </button>
                            <button
                              onClick={() => handleRejectRegistration(r.id)}
                              className="p-1 rounded bg-red-600 text-white text-[10px] font-bold"
                            >
                              Tolak
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 2. KELOLA PRODUK */}
      {activeTab === 'produk' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-gray-900 dark:text-white">Kelola Katalog Produk UMKM</h3>
            <button
              onClick={() => setShowAddProductModal(true)}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-1.5 transition"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Produk Baru</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-100 dark:border-gray-700/80 shadow-xs flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <img src={p.image} alt={p.name} className="w-12 h-12 rounded-xl object-cover" />
                  <div>
                    <h4 className="font-bold text-xs text-gray-900 dark:text-white line-clamp-1">{p.name}</h4>
                    <p className="text-[11px] text-gray-500">
                      {p.category} • Rp {p.price.toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleDeleteProduct(p.id)}
                  className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition shrink-0"
                  title="Hapus Produk"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. KELOLA ARTIKEL */}
      {activeTab === 'artikel' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-gray-900 dark:text-white">Kelola Artikel & Berita Koperasi</h3>
            <button
              onClick={() => setShowAddArticleModal(true)}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-1.5 transition"
            >
              <Plus className="w-4 h-4" />
              <span>Tulis Artikel Baru</span>
            </button>
          </div>

          <div className="divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-4">
            {articles.map((a) => (
              <div key={a.id} className="py-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img src={a.image} alt={a.title} className="w-12 h-12 rounded-xl object-cover shrink-0" />
                  <div>
                    <h4 className="font-bold text-xs text-gray-900 dark:text-white line-clamp-1">{a.title}</h4>
                    <p className="text-[11px] text-gray-400">
                      {a.category} • {a.date} • {a.views} views
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleDeleteArticle(a.id)}
                  className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
                  title="Hapus Artikel"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. KELOLA POTENSI */}
      {activeTab === 'potensi' && (
        <div className="space-y-6">
          <h3 className="font-bold text-base text-gray-900 dark:text-white">Kelola Sektor Potensi Desa Soreang</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {potentials.map((v) => (
              <div
                key={v.id}
                className="bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xs space-y-2"
              >
                <div className="flex items-center gap-3">
                  <img src={v.image} alt={v.title} className="w-12 h-12 rounded-xl object-cover" />
                  <div>
                    <h4 className="font-bold text-xs text-gray-900 dark:text-white">{v.title}</h4>
                    <p className="text-[11px] text-gray-400">{v.category} • {v.locationDetails}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. KELOLA PENGURUS */}
      {activeTab === 'pengurus' && (
        <div className="space-y-6">
          <h3 className="font-bold text-base text-gray-900 dark:text-white">Daftar Pengurus & Pengawas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {management.map((m) => (
              <div key={m.id} className="bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 flex items-center gap-3">
                <img src={m.photo} alt={m.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-xs text-gray-900 dark:text-white">{m.name}</h4>
                  <p className="text-[11px] text-red-600 dark:text-red-400 font-semibold">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. KELOLA BANNER */}
      {activeTab === 'banner' && (
        <div className="space-y-6">
          <h3 className="font-bold text-base text-gray-900 dark:text-white">Hero Slider Banners</h3>
          <div className="space-y-3">
            {banners.map((b) => (
              <div key={b.id} className="bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 flex items-center gap-4">
                <img src={b.image} alt={b.title} className="w-20 h-12 rounded-xl object-cover shrink-0" />
                <div>
                  <h4 className="font-bold text-xs text-gray-900 dark:text-white">{b.title}</h4>
                  <p className="text-[11px] text-gray-400">{b.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7. KELOLA GALERI */}
      {activeTab === 'galeri' && (
        <div className="space-y-6">
          <h3 className="font-bold text-base text-gray-900 dark:text-white">Dokumentasi Galeri Foto</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {gallery.map((g) => (
              <div key={g.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                <img src={g.image} alt={g.title} className="w-full aspect-square object-cover" />
                <div className="p-2 text-[10px] font-bold text-gray-800 dark:text-gray-200 line-clamp-1">{g.title}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 8. KELOLA PENDAFTARAN */}
      {activeTab === 'pendaftaran' && (
        <div className="space-y-6">
          <h3 className="font-bold text-base text-gray-900 dark:text-white">Daftar Permohonan Anggota Masuk</h3>
          <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-6 space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-gray-700 dark:text-gray-300">
                <thead className="bg-gray-50 dark:bg-gray-900 text-gray-400 uppercase text-[10px] font-bold">
                  <tr>
                    <th className="p-3">Nama</th>
                    <th className="p-3">NIK</th>
                    <th className="p-3">Desa</th>
                    <th className="p-3">No WA</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {registrations.map((r) => (
                    <tr key={r.id}>
                      <td className="p-3 font-bold text-gray-900 dark:text-white">{r.fullName}</td>
                      <td className="p-3 font-mono">{r.nik}</td>
                      <td className="p-3">{r.village}</td>
                      <td className="p-3">{r.phone}</td>
                      <td className="p-3">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                            r.status === 'Disetujui'
                              ? 'bg-emerald-100 text-emerald-800'
                              : r.status === 'Pending'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {r.status}
                        </span>
                      </td>
                      <td className="p-3 flex items-center gap-1">
                        {r.status === 'Pending' && (
                          <>
                            <button
                              onClick={() => handleApproveRegistration(r.id)}
                              className="p-1 rounded bg-emerald-600 text-white text-[10px] font-bold px-2"
                            >
                              Setujui
                            </button>
                            <button
                              onClick={() => handleRejectRegistration(r.id)}
                              className="p-1 rounded bg-red-600 text-white text-[10px] font-bold px-2"
                            >
                              Tolak
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* MODAL TAMBAH PRODUK */}
      {showAddProductModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-lg w-full p-6 space-y-4 border border-gray-200 dark:border-gray-800 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
              <h3 className="font-bold text-sm text-gray-900 dark:text-white">Tambah Produk UMKM Baru</h3>
              <button onClick={() => setShowAddProductModal(false)} className="p-1 text-gray-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Nama Produk</label>
                <input
                  type="text"
                  required
                  value={newProductName}
                  onChange={(e) => setNewProductName(e.target.value)}
                  placeholder="Nama Produk..."
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Kategori</label>
                  <select
                    value={newProductCategory}
                    onChange={(e) => setNewProductCategory(e.target.value as any)}
                    className="w-full text-xs p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
                  >
                    <option value="Pertanian">Pertanian</option>
                    <option value="Peternakan">Peternakan</option>
                    <option value="Makanan">Makanan</option>
                    <option value="Minuman">Minuman</option>
                    <option value="Kerajinan">Kerajinan</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Harga (Rp)</label>
                  <input
                    type="number"
                    required
                    value={newProductPrice}
                    onChange={(e) => setNewProductPrice(Number(e.target.value))}
                    className="w-full text-xs p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Produsen / Kelompok Tani</label>
                <input
                  type="text"
                  value={newProductProducer}
                  onChange={(e) => setNewProductProducer(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Deskripsi Singkat</label>
                <textarea
                  required
                  rows={2}
                  value={newProductDesc}
                  onChange={(e) => setNewProductDesc(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition"
              >
                Simpan & Publikasikan Produk
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL TAMBAH ARTIKEL */}
      {showAddArticleModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-lg w-full p-6 space-y-4 border border-gray-200 dark:border-gray-800 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
              <h3 className="font-bold text-sm text-gray-900 dark:text-white">Tulis Artikel / Berita Baru</h3>
              <button onClick={() => setShowAddArticleModal(false)} className="p-1 text-gray-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddArticle} className="space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Judul Artikel</label>
                <input
                  type="text"
                  required
                  value={newArtTitle}
                  onChange={(e) => setNewArtTitle(e.target.value)}
                  placeholder="Judul Berita..."
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Kategori</label>
                <select
                  value={newArtCategory}
                  onChange={(e) => setNewArtCategory(e.target.value as any)}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
                >
                  <option value="Berita">Berita</option>
                  <option value="Pengumuman">Pengumuman</option>
                  <option value="Edukasi">Edukasi</option>
                  <option value="Kegiatan">Kegiatan</option>
                  <option value="Prestasi">Prestasi</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Ringkasan (Excerpt)</label>
                <input
                  type="text"
                  value={newArtExcerpt}
                  onChange={(e) => setNewArtExcerpt(e.target.value)}
                  placeholder="Ringkasan 1-2 kalimat..."
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Isi Berita Lengkap</label>
                <textarea
                  required
                  rows={4}
                  value={newArtContent}
                  onChange={(e) => setNewArtContent(e.target.value)}
                  placeholder="Isi berita lengkap..."
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition"
              >
                Terbitkan Artikel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
