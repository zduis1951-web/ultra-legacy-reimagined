import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";
import Index from "./pages/Index";
import Services from "./pages/Services";
import PropertyListPage from "./pages/PropertyListPage";
import OffPlan from "./pages/OffPlan";
import Contact from "./pages/Contact";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import NotFound from "./pages/NotFound";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/for-sale" element={<PageTransition><PropertyListPage type="sale" /></PageTransition>} />
        <Route path="/for-rent" element={<PageTransition><PropertyListPage type="rent" /></PageTransition>} />
        <Route path="/property/:id" element={<PageTransition><PropertyDetailPage /></PageTransition>} />
        <Route path="/off-plan" element={<PageTransition><OffPlan /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <AnimatedRoutes />
          <Footer />
          <FloatingWhatsApp />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
