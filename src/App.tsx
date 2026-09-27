/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AskBotanicalModal } from './components/AskBotanicalModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FlowersPlantsPage } from './pages/FlowersPlantsPage';
import { GardeningPage } from './pages/GardeningPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isAskModalOpen, setIsAskModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState('flowers');

  // Handle URL hash changes for easy deep linking and browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'about', 'flowers-plants', 'gardening', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (topic: string = 'flowers') => {
    setModalTopic(topic);
    setIsAskModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#212620] selection:bg-[#C85A32] selection:text-white">
      {/* Skip to main content link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1E3723] focus:text-white focus:rounded-md text-xs font-semibold"
      >
        Skip to main content
      </a>

      {/* Main Navigation Header */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Primary Page Canvas */}
      <main id="main-content" className="flex-grow">
        {currentPage === 'home' && (
          <HomePage onNavigate={navigateTo} onOpenInquiry={handleOpenInquiry} />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} onOpenInquiry={handleOpenInquiry} />
        )}
        {currentPage === 'flowers-plants' && (
          <FlowersPlantsPage onNavigate={navigateTo} onOpenInquiry={handleOpenInquiry} />
        )}
        {currentPage === 'gardening' && (
          <GardeningPage onNavigate={navigateTo} onOpenInquiry={handleOpenInquiry} />
        )}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Global Botanical Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Universal Botanical Inquiry Modal */}
      <AskBotanicalModal
        isOpen={isAskModalOpen}
        onClose={() => setIsAskModalOpen(false)}
        defaultTopic={modalTopic}
      />
    </div>
  );
}
