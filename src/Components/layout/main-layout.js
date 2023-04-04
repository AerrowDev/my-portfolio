import React from 'react'
import Header from '@/Components/nav'
import {Footer} from 'src/Components/footer'

const mainlayout = ({children}) => {
    return (
       <>
       <Header/>
        {children}
       <Footer/>
       </>
    )
}
export default mainlayout;