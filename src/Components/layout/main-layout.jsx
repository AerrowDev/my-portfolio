import React from 'react'
import Header from '@/Components/nav'
import {Footer} from 'src/Components/footer'

export const Mainlayout = ({children}) => {
    return (
       <>
       <Header/>
      <main>{children}</main>  
       <Footer/>
       </>
    );
};
export default Mainlayout;