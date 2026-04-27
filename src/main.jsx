import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './default.css'
import App from './App.jsx'
import Contract from './contract.jsx'
import Survey from './survey.jsx'
import Cards from './cards.jsx'
import Inventory from './inventory.jsx'
import Documentation from './documentation.jsx'
import Product from './product.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Intro_form from './intro_form.jsx'
import ProjectOverview from './projectoverview.jsx'
import ClientProject from './fenixremodelingllc/clientproject.jsx'
import Website_evaluations from './website_evaluations.jsx'
import CrappyPage from './CrappyPage.jsx'
import Hobby from './hobby.jsx'
import Review1 from './review1.jsx'
import Review2 from './review2.jsx'
import Slideshow from '../slideshow.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Header />
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<Contract />} path="/contract" />
        <Route element={<Survey />} path="/survey" />
        <Route element={<Cards />} path="/cards" />
        <Route element={<Inventory />} path="/inventory" />
        <Route element={<Documentation />} path="/documentation" />
        <Route element={<Product />} path="/product" />
        <Route element={<Intro_form />} path="/intro-form" />
        <Route element={<ProjectOverview />} path="/project-overview" />
        <Route element={<ClientProject />} path="/client-project" />
        <Route element={<Website_evaluations />} path="/website-evaluations" />
        <Route element={<CrappyPage />} path="/crappy" />
        <Route element={<Hobby />} path="/hobby" />
        <Route element={<Review1 />} path="/review1" />
        <Route element={<Review2 />} path="/review2" />
        <Route element={<Slideshow />} path="/slideshow" />

      </Routes>
      <Footer />
    </HashRouter>
  </StrictMode>,
)
