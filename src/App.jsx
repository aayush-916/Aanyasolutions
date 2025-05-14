import { BrowserRouter as Router ,Route , Routes , Navigate } from 'react-router-dom';
import './App.css'
import Root from './Root'
import About from './components/About';
import ContactUs from './components/ContactUs';
import ServicesPage from './components/ServicesPage';
import Admin from './components/Admin';
import Blog from './components/Blog';
import BackOfficeDetail from './components/ServicesPage/BackOfficeDetail';
import GraphicDesigning from './components/ServicesPage/GraphicDesigning';
import InventoryManagement from './components/ServicesPage/InventoryManagement';
import SoftwareDevelopment from './components/ServicesPage/SoftwareDevelopment';
import WebsiteOptimisation from './components/ServicesPage/WebsiteOptimisation';
import ScrollToTop from './ScrollToTop';
import WebsiteDesigning from './components/ServicesPage/WebsiteDesigning';
import PrivacyPolicy from './components/PrivacyPolicy';
import BlogPage from './pages/BlogPage';
import SingleBlogPage from './pages/SingleBlogPage';
function App() {
//https://cybertizeweb.com/
  return (
    <>
      <Router>
      <ScrollToTop />
      <Routes>
  <Route path='/' element={<Root />} />
  <Route path='/blog' element={<BlogPage />} />
  <Route path='/blog/:id' element={<SingleBlogPage />} />
  <Route path='/about' element={<About />} />
  <Route path='/contact' element={<ContactUs />} />
  <Route path='/service' element={<ServicesPage />} />
  <Route path='/BackOfficeDetail' element={<BackOfficeDetail />} />
  <Route path='/GraphicDesigning' element={<GraphicDesigning />} />
  <Route path='/InventoryManagement' element={<InventoryManagement />} />
  <Route path='/SoftwareDevelopment' element={<SoftwareDevelopment />} />
  <Route path='/WebsiteDesigning' element={<WebsiteDesigning />} />
  <Route path='/WebsiteOptimisation' element={<WebsiteOptimisation />} />
  <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
  <Route path='/support@' element={<Navigate to="/" replace />} />
  <Route path='/feed' element={<Navigate to="/" replace />} />
</Routes>
      </Router>
    </>
  )
}

export default App
