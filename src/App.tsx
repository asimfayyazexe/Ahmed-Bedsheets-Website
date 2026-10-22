import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ProductModal } from './components/ProductModal';
import { SearchModal } from './components/SearchModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ALL_PRODUCTS } from './data/products';
import { PageId, ProductItem, CategoryFilter } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [targetProductId, setTargetProductId] = useState<string | null>(null);
  const [targetCategory, setTargetCategory] = useState<CategoryFilter | null>(null);

  // Scroll to top on page change
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Redirect to product card in products page when clicked from Search
  const handleSearchSelectProduct = (product: ProductItem) => {
    setIsSearchOpen(false);
    setCurrentPage('products');
    setTargetCategory(null);
    setTargetProductId(product.id);
  };

  // Redirect to category, product card, or products page when Enter or Search button is clicked
  const handleSearchSubmitRedirect = (params: {
    category?: CategoryFilter | null;
    productId?: string | null;
    query?: string;
  }) => {
    setIsSearchOpen(false);
    setCurrentPage('products');
    setTargetCategory(params.category && params.category !== 'All' ? params.category : null);
    setTargetProductId(params.productId || null);
  };

  const popularProducts = ALL_PRODUCTS.filter((p) => p.isPopular);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#212121] selection:bg-[#E8E1D9] selection:text-[#111111]">
      {/* Sticky Header with Phone, WhatsApp & 4 Nav Links */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onBrowseProducts={() => handleNavigate('products')}
            onSelectProduct={(prod) => setSelectedProduct(prod)}
            popularProducts={popularProducts}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            products={ALL_PRODUCTS}
            onSelectProduct={(prod) => setSelectedProduct(prod)}
            targetProductId={targetProductId}
            onClearTargetProduct={() => setTargetProductId(null)}
            targetCategory={targetCategory}
            onClearTargetCategory={() => setTargetCategory(null)}
          />
        )}

        {currentPage === 'about' && <AboutPage />}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Sticky / Clean Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Product Quick Details & WhatsApp Order Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Catalog Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={ALL_PRODUCTS}
        onSelectProduct={handleSearchSelectProduct}
        onSearchSubmitRedirect={handleSearchSubmitRedirect}
      />
    </div>
  );
}
