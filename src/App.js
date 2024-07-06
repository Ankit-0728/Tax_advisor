import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Client from './Client';
import Header from './header/Header';
import About from './About';
import Footer from './footer/Footer';
import Employment from './Employment';
import ClientReview from './ClientReview';
import Financial from './Financial';
import RetPlanning from './RetPlanning';
import Eplanning from './Eplanning';
import ElderCare from './ElderCare';
import BusAccount from './BusAccount';
import Payroll from './Payroll';
import CFOServices from './CFOServices';
import BusinessTax from './BusinessTax';
import IncorpServices from './IncorpServices';
import Book_Acc from './Book_Acc';
import ContactUs from './ContactUs';
import TermandCondition from './Term_Con';
import Payment from './Pay_ment';
import Career from './Career';
import AboutUs from './AboutUs';
import Disclaimer from './Disclaimer';
import Payments from './Payments';

function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Client/> } />
    <Route path="/header" element={<Header />} />
    <Route path="/about" element={<About /> } />
    <Route path="/about" element={<Footer /> } />
    <Route path="/employment" element={<Employment /> } />
    <Route path="/clientReview" element={<ClientReview /> } />
    <Route path="/financial" element={<Financial /> } />
    <Route path="/retPlanning" element={<RetPlanning /> } />
    <Route path="/ePlanning" element={<Eplanning /> } />
    <Route path="/ePlanning" element={<Eplanning /> } />
    <Route path="/elderCare" element={<ElderCare /> } />
    <Route path="/busAccount" element={<BusAccount /> } />
    <Route path="/payroll" element={<Payroll /> } />
    <Route path="/cfoServices" element={<CFOServices /> } />
    <Route path="/businessTax" element={<BusinessTax /> } />
    <Route path="/incorpServices" element={<IncorpServices /> } />
    <Route path="/book_account" element={<Book_Acc /> } />
    <Route path="/contactUs" element={<ContactUs /> } />
    <Route path="/terms_cond" element={<TermandCondition /> } />
    <Route path="/payment" element={<Payment /> } />
    <Route path="/career" element={<Career /> } />
    <Route path="/about_s" element={<AboutUs /> } />
    <Route path="/disclaimer" element={<Disclaimer /> } />
    <Route path="/Payments" element={<Payments /> } />
    

    
 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
