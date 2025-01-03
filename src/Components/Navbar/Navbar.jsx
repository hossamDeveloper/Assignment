import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { FaBarsStaggered, FaPenFancy, FaRegCircleUser } from 'react-icons/fa6';
import { HiHome } from 'react-icons/hi';
import { HiOutlineLanguage } from 'react-icons/hi2';
import { IoExitOutline } from 'react-icons/io5';
import { MdMoney, MdOutlineCelebration } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [toggle, settoggle] = useState(false)
    const [showSideBar, setshowSideBar] = useState(false)

    return (
        <>
            <div className={` w-[300px] h-screen bg-[#00414d]   ${showSideBar ? `fixed top-0 ${i18n.language === "ar" ? "left-0" : "right-0"} z-50 md:block` : "hidden md:block"}`} >
                {/* logo */}
                <NavLink to={"/"}>
                    <div className='w-full h-[80px] flex items-center justify-center'>
                        <img src="https://cdn.salla.network/images/logo/logo-light-wide.svg" className='w-1/3 object-contain' alt="" />
                    </div>
                </NavLink>
                {/* gift logo */}
                <div className='my-1'>
                    <div className='w-full flex flex-col items-center justify-center relative text-white'>
                        <img src="https://cdn.salla.sa/EZZNYp/UDW9uMwIyNZtYUZvUOKltJpsOnLxZYNZGohuPNEx.jpg" className='w-[80px] h-[80px] object-cover rounded-full border-2 border-dashed border-yellow-400' alt="" />
                        <div className='absolute -top-2 left-1/2  -translate-x-1/2   rounded-3xl flex items-center justify-center bg-yellow-400'>
                            <p className='px-3 py-0.5'>{t("sidebar.sidebarLogo")}</p>
                        </div>
                        <h2 className='mt-2 font-medium'>{t("sidebar.sidebarLogoTitle")}</h2>
                    </div>

                </div>
                {/* menu */}
                <div className='text-white my-3'>
                    <NavLink to="/" className={`${({ isActive }) => (isActive ? "bg-[#2c6b77]" : "")} hover:bg-[#2c6b77] w-full h-16 px-3 flex items-center gap-2 `}>
                        <HiHome className='text-2xl' />
                        {t("sidebar.sidebarLogoLink1")}
                    </NavLink>

                    <NavLink to="/payment" className={`${({ isActive }) => (isActive ? "bg-[#2c6b77]" : "")} hover:bg-[#2c6b77] w-full h-16 px-3 flex items-center gap-2 `}>
                        <MdMoney className='text-2xl' />
                        {t("sidebar.sidebarLogoLink2")}
                    </NavLink>
                </div>
            </div>
            <div className='w-full h-16 bg-[#00414d] text-white md:hidden flex items-center justify-between px-3'>
                <div onClick={() => { setshowSideBar(!showSideBar) }}>
                    <FaBarsStaggered />
                </div>
                <img src="https://cdn.salla.network/images/logo/logo-light-wide.svg" className='w-1/3 h-[80%] object-contain' alt="" />
                <div className='cursor-pointer relative h-full flex items-center'>
                    <div className='flex items-center gap-2 relative' onClick={() => { settoggle(!toggle) }}>
                        <FaRegCircleUser className='text-3xl bg-gray-200 rounded-full' />
                        <div className='w-3 h-3 rounded-full bg-red-500 absolute -right-1 -top-1'>
                            <div className='w-3 h-3 rounded-full bg-red-500 animate-Scale'></div>
                        </div>
                    </div>
                    <div className={`absolute top-full ${i18n.language === "ar" ? "left-0" : "right-0"} z-20 w-[200px] bg-white shadow-lg text-gray-700 ${toggle ? "h-auto" : "h-0"} overflow-hidden`}>
                        <div className='w-full h-10 flex items-center gap-2 px-1 hover:bg-gray-200'>
                            <FaRegCircleUser className='text-gray-700' />
                            <h2>{t("payment.subnav.subnavToggle.subnavTogglelink1")}</h2>
                        </div>
                        <div className='w-full h-10 flex items-center gap-2 px-1 hover:bg-gray-200'>
                            <MdOutlineCelebration />
                            <h2>{t("payment.subnav.subnavToggle.subnavTogglelink2")}</h2>
                        </div>
                        <div className='w-full h-10 flex items-center gap-2 px-1 hover:bg-gray-200'>
                            <FaPenFancy />
                            <h2>{t("payment.subnav.subnavToggle.subnavTogglelink3")}</h2>
                        </div>
                        <div onClick={() => { i18n.changeLanguage(i18n.language === "en" ? "ar" : "en"); settoggle(false) }} className='w-full h-10 flex items-center gap-2 px-1 hover:bg-gray-200'>
                            <HiOutlineLanguage />
                            <h2>{t("payment.subnav.subnavToggle.subnavTogglelink4ChangeLang")}</h2>
                        </div>
                        <div className='w-full h-10 flex items-center gap-2 border-t border-gray-200 px-1 hover:bg-gray-200'>
                            <IoExitOutline />
                            <h2 className='text-red-500'>{t("payment.subnav.subnavToggle.subnavTogglelink5")}</h2>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar