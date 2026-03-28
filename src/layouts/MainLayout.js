import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainLayout = () => (
  <>
    <Header />
    <main>
       <Outlet /> {/* Ensure this is here! */}
    </main>
    <Footer />
  </>
);

export default MainLayout;

// ---