import { Outlet } from 'react-router';

const Mainlayout = () => {
    return (
        <div>
            <div>
                this is header
            </div>
           <div className='min-h-screen flex justify-center items-center'>
            <Outlet/>
            </div>
            <div>
                footer 
            </div>
        </div>
    );
};

export default Mainlayout;