import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

function Home({children}) {




  return (
    <div className="flex h-screen w-full bg-gray-300 relative dark:bg-black/80">

     
     <Sidebar className={``}/>
    
       
      
      
      <div className=" flex flex-col gap-2 w-full h-full p-1 md:p-2 xl:p-3">
        <header>
          <Navbar className="w-full"/>
        </header>
        <main className='flex-1 overflow-auto scrollbar-none'>
          <Outlet>
            {children}
          </Outlet>
        </main>
      </div>
    </div>
  );
}

export default Home;

