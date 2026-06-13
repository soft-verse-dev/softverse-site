import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import BodyShop from './pages/BodyShop';
import DesenvolvimentoSobDemanda from './pages/DesenvolvimentoSobDemanda';
import DesignUiUx from './pages/DesignUiUx';
import InteligenciaArtificial from './pages/InteligenciaArtificial';

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
