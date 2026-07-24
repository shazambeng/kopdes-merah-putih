import React, { useState, useEffect } from 'react';
import {
  Product,
  Article,
  VillagePotential,
  ManagementMember,
  GalleryItem,
  HeroBanner,
  EducationalFAQ,
  Testimonial,
  MemberRegistration
} from './types';
import {
  INITIAL_PRODUCTS,
  INITIAL_ARTICLES,
  INITIAL_POTENTIALS,
  INITIAL_MANAGEMENT,
  INITIAL_GALLERY,
  INITIAL_FAQS,
  INITIAL_TESTIMONIALS,
  INITIAL_BANNERS,
  INITIAL_REGISTRATIONS
} from './data/initialData';

import { ToastProvider } from './components/Toast';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BackToTop } from './components/BackToTop';
import { SearchModal } from './components/SearchModal';
import { AdminLoginModal } from './components/AdminLoginModal';

import { HomeView } from './views/HomeView';
import { ProfileView } from './views/ProfileView';
import { PotentialView } from './views/PotentialView';
import { ProductsView } from './views/ProductsView';
import { ArticlesView } from './views/ArticlesView';
import { EducationView } from './views/EducationView';
import { MemberRegistrationView } from './views/MemberRegistrationView';
import { ContactView } from './views/ContactView';
import { AdminView } from './views/AdminView';

export default function App() {
  // Persistence Helpers
  const getInitial = <T,>(key: string, fallback: T): T => {
    try {
      const stored = localStorage.getItem(key);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    return fallback;
  };

  // State
  const [products, setProducts] = useState<Product[]>(() =>
    getInitial('kmp_products', INITIAL_PRODUCTS)
  );
  const [articles, setArticles] = useState<Article[]>(() =>
    getInitial('kmp_articles', INITIAL_ARTICLES)
  );
  const [potentials, setPotentials] = useState<VillagePotential[]>(() =>
    getInitial('kmp_potentials', INITIAL_POTENTIALS)
  );
  const [management, setManagement] = useState<ManagementMember[]>(() =>
    getInitial('kmp_management', INITIAL_MANAGEMENT)
  );
  const [gallery, setGallery] = useState<GalleryItem[]>(() =>
    getInitial('kmp_gallery', INITIAL_GALLERY)
  );
  const [banners, setBanners] = useState<HeroBanner[]>(() =>
    getInitial('kmp_banners', INITIAL_BANNERS)
  );
  const [registrations, setRegistrations] = useState<MemberRegistration[]>(() =>
    getInitial('kmp_registrations', INITIAL_REGISTRATIONS)
  );

  // FAQs and Testimonials
  const [faqs] = useState<EducationalFAQ[]>(INITIAL_FAQS);
  const [testimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);

  // Active Navigation Tab
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isAdminMode, setIsAdminMode] = useState<boolean>(false);
  const [showAdminLogin, setShowAdminLogin] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return getInitial('kmp_darkmode', false);
  });
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Selected Detail Modal State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedPotential, setSelectedPotential] = useState<VillagePotential | null>(null);

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('kmp_products', JSON.stringify(products));
    } catch (e) {}
  }, [products]);

  useEffect(() => {
    try {
      localStorage.setItem('kmp_articles', JSON.stringify(articles));
    } catch (e) {}
  }, [articles]);

  useEffect(() => {
    try {
      localStorage.setItem('kmp_potentials', JSON.stringify(potentials));
    } catch (e) {}
  }, [potentials]);

  useEffect(() => {
    try {
      localStorage.setItem('kmp_management', JSON.stringify(management));
    } catch (e) {}
  }, [management]);

  useEffect(() => {
    try {
      localStorage.setItem('kmp_gallery', JSON.stringify(gallery));
    } catch (e) {}
  }, [gallery]);

  useEffect(() => {
    try {
      localStorage.setItem('kmp_banners', JSON.stringify(banners));
    } catch (e) {}
  }, [banners]);

  useEffect(() => {
    try {
      localStorage.setItem('kmp_registrations', JSON.stringify(registrations));
    } catch (e) {}
  }, [registrations]);

  useEffect(() => {
    try {
      localStorage.setItem('kmp_darkmode', JSON.stringify(isDarkMode));
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  }, [isDarkMode]);

  // Handle New Registration Submission
  const handleSubmitRegistration = (
    newRegData: Omit<MemberRegistration, 'id' | 'status' | 'registrationDate'>
  ) => {
    const newReg: MemberRegistration = {
      ...newRegData,
      id: 'reg-' + Date.now(),
      status: 'Pending',
      registrationDate: new Date().toISOString().split('T')[0]
    };
    setRegistrations([newReg, ...registrations]);
  };

  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col bg-[#F7F8F7] dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans selection:bg-[#CE2029] selection:text-white transition-colors duration-200">
        {/* Navbar Header */}
        <Navbar
          currentTab={currentTab}
          onTabChange={(tab) => {
            setCurrentTab(tab);
            setIsAdminMode(false);
          }}
          isAdmin={isAdminMode}
          onToggleAdmin={() => {
            if (isAdminMode) {
              setIsAdminMode(false);
            } else {
              setShowAdminLogin(true);
            }
          }}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        {/* Main Content Body */}
        <main className="flex-1">
          {isAdminMode ? (
            <AdminView
              products={products}
              onUpdateProducts={setProducts}
              articles={articles}
              onUpdateArticles={setArticles}
              potentials={potentials}
              onUpdatePotentials={setPotentials}
              management={management}
              onUpdateManagement={setManagement}
              gallery={gallery}
              onUpdateGallery={setGallery}
              banners={banners}
              onUpdateBanners={setBanners}
              registrations={registrations}
              onUpdateRegistrations={setRegistrations}
            />
          ) : (
            <>
              {currentTab === 'home' && (
                <HomeView
                  banners={banners}
                  products={products}
                  articles={articles}
                  potentials={potentials}
                  testimonials={testimonials}
                  onNavigate={setCurrentTab}
                  onSelectProduct={setSelectedProduct}
                  onSelectArticle={setSelectedArticle}
                  onSelectPotential={setSelectedPotential}
                />
              )}

              {currentTab === 'profile' && (
                <ProfileView management={management} gallery={gallery} />
              )}

              {currentTab === 'potensi' && (
                <PotentialView
                  potentials={potentials}
                  onSelectPotential={setSelectedPotential}
                />
              )}

              {currentTab === 'produk' && (
                <ProductsView
                  products={products}
                  selectedProduct={selectedProduct}
                  onSelectProduct={setSelectedProduct}
                />
              )}

              {currentTab === 'artikel' && (
                <ArticlesView
                  articles={articles}
                  selectedArticle={selectedArticle}
                  onSelectArticle={setSelectedArticle}
                />
              )}

              {currentTab === 'edukasi' && (
                <EducationView faqs={faqs} onNavigate={setCurrentTab} />
              )}

              {currentTab === 'pendaftaran' && (
                <MemberRegistrationView
                  registrations={registrations}
                  onSubmitRegistration={handleSubmitRegistration}
                />
              )}

              {currentTab === 'kontak' && <ContactView />}
            </>
          )}
        </main>

        {showAdminLogin && (
          <AdminLoginModal
            onClose={() => setShowAdminLogin(false)}
            onLoginSuccess={() => {
              setShowAdminLogin(false);
              setIsAdminMode(true);
            }}
          />
        )}

        {/* Footer */}
        <Footer onTabChange={setCurrentTab} />

        {/* Floating Utilities */}
        <WhatsAppButton />
        <BackToTop />

        {/* Global Search Modal */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          products={products}
          articles={articles}
          potentials={potentials}
          onSelectProduct={(p) => {
            setCurrentTab('produk');
            setSelectedProduct(p);
          }}
          onSelectArticle={(a) => {
            setCurrentTab('artikel');
            setSelectedArticle(a);
          }}
          onSelectPotential={(v) => {
            setCurrentTab('potensi');
            setSelectedPotential(v);
          }}
        />
      </div>
    </ToastProvider>
  );
}
