import React, { useState } from 'react';
import { KopdesLogo } from './KopdesLogo';
import {
  Home,
  UserCheck,
  Package,
  FileText,
  HelpCircle,
  PhoneCall,
  MapPin,
  Menu,
  X,
  Moon,
  Sun,
  ShieldCheck,
  UserPlus,
  Compass,
  Search
} from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  isAdmin: boolean;
  onToggleAdmin: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onTabChange,
  isAdmin,
  onToggleAdmin,
  isDarkMode,
  onToggleDarkMode,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'profile', label: 'Profil Koperasi', icon: ShieldCheck },
    { id: 'potensi', label: 'Potensi Desa', icon: Compass },
    { id: 'produk', label: 'Produk UMKM', icon: Package },
    { id: 'artikel', label: 'Artikel & Berita', icon: FileText },
    { id: 'edukasi', label: 'Edukasi', icon: HelpCircle },
    { id: 'pendaftaran', label: 'Daftar Anggota', icon: UserPlus, highlight: true },
    { id: 'kontak', label: 'Kontak', icon: PhoneCall }
  ];

  const handleNavClick = (id: string) => {
    onTabChange(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors shadow-xs">
      {/* Red & White Flag Top Accent Line */}
      <div className="h-1 w-full flex">
        <div className="h-full w-1/2 bg-[#CE2029]"></div>
        <div className="h-full w-1/2 bg-white dark:bg-gray-300"></div>
      </div>

      {/* Top Location Bar */}
      <div className="bg-[#CE2029] text-white text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-red-100" />
            <span className="font-medium tracking-wide">
              Kecamatan Soreang, Kabupaten Bandung, Jawa Barat (Kode Pos 40911)
            </span>
          </div>
          <div className="flex items-center gap-4 text-red-100 text-[11px] uppercase tracking-wider font-semibold">
            <span>Jam Operasional: Sen - Sab 08:00 - 16:00 WIB</span>
            <span>•</span>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="hover:underline flex items-center gap-1 text-white font-bold"
            >
              WA Hotline: 0812-3456-7890
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
          <KopdesLogo size="md" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id && !isAdmin;

            if (item.highlight) {
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all shadow-xs ${
                    isActive
                      ? 'bg-[#CE2029] text-white ring-2 ring-red-400'
                      : 'bg-red-50 dark:bg-red-950/60 text-[#CE2029] dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/80 border border-red-200 dark:border-red-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
                  isActive
                    ? 'bg-red-50 dark:bg-red-950/50 text-[#CE2029] dark:text-red-400 font-bold border-b-2 border-[#CE2029]'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#CE2029] dark:text-red-400' : 'text-gray-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            title="Cari Produk / Artikel"
            aria-label="Pencarian"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            title={isDarkMode ? 'Mode Terang' : 'Mode Gelap'}
            aria-label="Mode Gelap"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-gray-600" />}
          </button>

          {/* Admin Mode Toggle Badge */}
          <button
            onClick={onToggleAdmin}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition border ${
              isAdmin
                ? 'bg-amber-500 text-white border-amber-600 shadow-xs animate-pulse'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            title="Sembunyikan / Tampilkan Mode Admin Koperasi"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isAdmin ? 'Mode Admin Active' : 'Panel Admin'}</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Buka Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 pt-2 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">
            Navigasi Koperasi Soreang
          </div>
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id && !isAdmin;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? 'bg-red-600 text-white'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-red-600 dark:text-red-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs text-gray-500">
            <span>Kec. Soreang, Kab. Bandung</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">● Layanan Online Ready</span>
          </div>
        </div>
      )}
    </header>
  );
};
