import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/queryClient'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from '@/lib/pageNotFound';
import ScrollToTop from './components/scrollToTop';
import Home from './pages/home';
import BodyShop from './pages/bodyShop';
import DesenvolvimentoSobDemanda from './pages/developmentOnDemand';
import DesignUiUx from './pages/designUiUx';
import InteligenciaArtificial from './pages/inteligenciaArtificial';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos/body-shop" element={<BodyShop />} />
          <Route path="/servicos/desenvolvimento-sob-demanda" element={<DesenvolvimentoSobDemanda />} />
          <Route path="/servicos/design-ui-ux" element={<DesignUiUx />} />
          <Route path="/servicos/inteligencia-artificial" element={<InteligenciaArtificial />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
