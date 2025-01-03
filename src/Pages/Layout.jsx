import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { useTranslation } from 'react-i18next';

const Layout = () => {
    const { t, i18n } = useTranslation()
    return (
        <>
            <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
                <div className='flex flex-col md:flex-row overflow-hidden'>
                    <Navbar />
                    <div className='w-full h-[calc(100vh-120px)] md:h-[calc(100vh-64px)]   overflow-y-auto'>
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}

export default Layout