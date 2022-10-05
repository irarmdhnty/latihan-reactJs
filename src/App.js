import Header from './Components/Header';
import Navbars from './Components/Navbars';
import Product from './Components/Product';
import Management from './Components/Management';
import CustomerSupport from './Components/CustomerSupport';
import Collaborative from './Components/Collaborative';
import Contact from './Components/Contact';
import ContentStrategis from './Components/ContentStrategis';
import PriceTable from './Components/PriceTable';
import Client from './Components/Client';
import Footer from './Components/Footer';
<link href="/dist/output.css" rel="stylesheet"></link>

function App() {
  return (
    <div className='w-full'>
      <div className='px-6 flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full '>
          <Navbars />
        </div>
      </div>
      <div className='px-6 flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full '>
          <Header />
        </div>
      </div>
      <Product />
      <div className='px-6 flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full '>
          <Management />
        </div>
      </div>
      <div className='px-6 flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full '>
          <CustomerSupport />
        </div>
      </div>
      <div className='px-6 flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full '>
          <Collaborative />
        </div>
      </div>
      <div className='px-6 flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full '>
          <Contact />
        </div>
      </div>
      <div className='px-6 flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full '>
          <ContentStrategis />
        </div>
      </div>
      <div className='px-6 flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full '>
          <PriceTable />
        </div>
      </div>
      <div className='px-6 flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full '>
          <Client />
        </div>
      </div>
      <div className='px-6 flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full '>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
