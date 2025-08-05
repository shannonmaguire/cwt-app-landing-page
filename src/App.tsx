import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PortalHeader } from "@/components/portal/PortalHeader";
import Footer from "@/components/portal/Footer";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Security from "./pages/Security";
import HelpCenter from "./pages/HelpCenter";
import Contact from "./pages/Contact";
import APIDocumentation from "./pages/APIDocumentation";
import Status from "./pages/Status";
import Login from "./pages/Login";
import GetStarted from "./pages/GetStarted";
import AccountSetup from "./pages/AccountSetup";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background flex flex-col">
            <PortalHeader />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/features" element={<Features />} />
                <Route path="/security" element={<Security />} />
                <Route path="/help" element={<HelpCenter />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/api-docs" element={<APIDocumentation />} />
                <Route path="/status" element={<Status />} />
                <Route path="/login" element={<Login />} />
                <Route path="/get-started" element={<GetStarted />} />
                <Route path="/account-setup" element={<AccountSetup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;