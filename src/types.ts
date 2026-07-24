export type CategoryType = 
  | 'Pertanian'
  | 'Perkebunan'
  | 'Peternakan'
  | 'Makanan'
  | 'Minuman'
  | 'Kerajinan'
  | 'Fashion'
  | 'Pariwisata'
  | 'Lainnya';

export interface Product {
  id: string;
  name: string;
  category: CategoryType;
  price: number;
  stock: number;
  unit: string;
  description: string;
  image: string;
  whatsappNumber: string;
  isFeatured: boolean;
  rating: number;
  salesCount: number;
  producer: string; // e.g. "Kelompok Tani Desa Soreang"
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Berita' | 'Pengumuman' | 'Edukasi' | 'Kegiatan' | 'Prestasi';
  author: string;
  date: string;
  readTime: string;
  image: string;
  isFeatured: boolean;
  views: number;
  tags: string[];
}

export interface VillagePotential {
  id: string;
  title: string;
  category: 'Pertanian' | 'Peternakan' | 'UMKM' | 'Pariwisata' | 'Kerajinan' | 'Perdagangan' | 'Sumber Daya Alam' | 'Potensi Investasi';
  description: string;
  locationDetails: string;
  image: string;
  investmentPotential: string;
  contactPerson: string;
  stats?: { label: string; value: string }[];
}

export interface ManagementMember {
  id: string;
  name: string;
  role: string; // e.g. "Ketua Koperasi", "Sekretaris I", "Dewan Pengawas"
  type: 'pengurus' | 'pengawas' | 'pengelola';
  photo: string;
  phone: string;
  email: string;
  bio: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'RAT' | 'Pelatihan' | 'Bazaar' | 'Panen' | 'Rapat' | 'Sosialisasi';
  image: string;
  date: string;
  caption: string;
}

export interface EducationalFAQ {
  id: string;
  question: string;
  answer: string;
  category: 'Umum' | 'Keanggotaan' | 'Simpanan' | 'SHU' | 'Pinjaman';
}

export interface MemberRegistration {
  id: string;
  fullName: string;
  nik: string;
  phone: string;
  email: string;
  address: string;
  village: string; // e.g. "Desa Soreang", "Desa Sukanagara", "Desa Panyirapan", etc.
  occupation: string;
  depositType: 'Simpanan Pokok & Wajib' | 'Simpanan Sukarela' | 'Simpanan Qurban';
  status: 'Pending' | 'Disetujui' | 'Ditolak';
  registrationDate: string;
  memberId?: string;
}

export interface HeroBanner {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  ctaText: string;
  ctaTarget: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}
