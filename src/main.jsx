import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './pages/Home/index.jsx'
import Survey from './pages/Survey/index.jsx'
import Freelances from './pages/Freelances/index.jsx'
import Results from './pages/Results/index.jsx'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import Error from './components/Error/index.jsx'
import GlobalStyle from './utils/style/GlobalStyle'
import { ThemeProvider } from './utils/context/ThemeProvider.jsx'
import { SurveyProvider } from './utils/context/SurveyProvider.jsx'

const urlRoot = "/shiny-agency";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ThemeProvider>
         <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path={urlRoot} element={<Home />} />
            <Route path={`${urlRoot}/survey/:questionNumber`} element={<Survey />} />
            <Route path={`${urlRoot}/results`} element={<Results />} />
            <Route path={`${urlRoot}/freelances`} element={<Freelances />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
         </SurveyProvider>
      </ThemeProvider>
    </Router>
  </StrictMode>,
)