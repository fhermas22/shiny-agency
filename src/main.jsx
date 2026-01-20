import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './pages/Home/index.jsx'
import Survey from './pages/Survey/index.jsx'
import Freelances from './pages/Freelances/index.jsx'
import Results from './pages/Results/index.jsx'
import Header from './components/Header/index.jsx'
import Error from './components/Error/index.jsx'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </StrictMode>,
)