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
function App() {
//https://cybertizeweb.com/
  return (
    <>
      <Router>
      <ScrollToTop />
        <Routes>
          <Route path='/' exact Component={Root} />
          <Route path='/blog' exact Component={Blog} />
          <Route path='/about' exact Component={About} />
          <Route path='/contact' exact Component={ContactUs} />
          <Route path='/service' exact Component={ServicesPage} />
          <Route path='/BackOfficeDetail' exact Component={BackOfficeDetail} />
          <Route path='/GraphicDesigning' exact Component={GraphicDesigning} />
          <Route path='/InventoryManagement' exact Component={InventoryManagement} />
          <Route path='/SoftwareDevelopment' exact Component={SoftwareDevelopment} />
          <Route path='/WebsiteDesigning' exact Component={WebsiteDesigning} />
          <Route path='/WebsiteOptimisation' exact Component={WebsiteOptimisation} />
          <Route path='/PrivacyPolicy' exact Component={PrivacyPolicy} />
          <Route path='/support@' element={<Navigate to="/" replace />} />
          <Route path='/feed' element={<Navigate to="/" replace />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
