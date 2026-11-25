import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Mainlayout = () => {
    return (
        <>
            <div>
<Header/>
            </div>
           <div className='min-h-screen flex justify-center items-center'>
            <Outlet/>
            </div>
            
              <div className='border-t-2 border-gray-300'>
                  <Footer/> 
              </div>
            
        </>
    );
};

export default Mainlayout;