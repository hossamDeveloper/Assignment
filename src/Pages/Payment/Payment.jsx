import React, { useState } from 'react'
import { AiOutlineGift } from "react-icons/ai";
import { IoExitOutline, IoMoonOutline, IoShieldCheckmarkOutline, IoWalletOutline } from "react-icons/io5";
import { FaPlus, FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineAddShoppingCart, MdOutlineCelebration } from 'react-icons/md';
import { FaPenFancy } from 'react-icons/fa';
import { HiOutlineLanguage } from 'react-icons/hi2';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { TbBallVolleyball } from 'react-icons/tb';
import { IoIosArrowDown } from 'react-icons/io';
import { ImEnlarge2 } from 'react-icons/im';
import { CiBank, CiSearch } from 'react-icons/ci';

const Payment = () => {
  const [toggle, settoggle] = useState(false)
  const [blogToggle, setBlogToggle] = useState(false)
  const [sizeToggle, setSizeToggle] = useState(false)
  const { t, i18n } = useTranslation();
  const location = useLocation();


  return (
    <>
      <div >
        {/* subnav */}
        <div className='md:block hidden'>
          <div className='w-full h-16 bg-[#fcfcfc] flex items-center justify-end px-20 gap-6 '>
            <div className='w-12 h-12 focus-within:bg-slate-500 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer'>
              <AiOutlineGift className='text-2xl ' />
            </div>
            <div className='w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer'>
              <IoMoonOutline className='text-2xl' />
            </div>
            <div className=' lg:block hidden'>
              <div className='flex items-center gap-2'>
                <div className='w-3 h-3 rounded-full bg-red-500 '>
                  <div className='w-3 h-3 rounded-full bg-red-500 animate-Scale'></div>
                </div>
                <h3>{t("payment.subnav.update")}</h3>
              </div>
            </div>
            <div className='cursor-pointer relative h-full flex items-center'>
              <div className='flex items-center gap-2 relative' onClick={() => { settoggle(!toggle) }}>
                <FaRegCircleUser className='text-3xl bg-gray-200 rounded-full' />
                <h2>{t("payment.subnav.subnavToggleTitle")}</h2>
                <div className='w-3 h-3 rounded-full bg-red-500 absolute -right-1 -top-1 lg:hidden '>
                  <div className='w-3 h-3 rounded-full bg-red-500 animate-Scale'></div>
                </div>
              </div>
              <div className={`absolute top-full ${i18n.language === "ar" ? "left-0" : "right-0"} z-20 w-[200px] bg-white shadow-lg text-gray-700 ${toggle ? "h-auto" : "h-0"} overflow-hidden`}>
                <div className='w-full h-10 flex items-center gap-2 px-1 hover:bg-gray-200'>
                  <FaRegCircleUser />
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
        </div>

        {/* main */}

        {/* header */}
        <div className='px-10 pt-8 pb-20'>
          <div className='w-full flex justify-between items-center'>
            <div>
              {location.pathname === "/payment" &&
                <div className='flex items-center gap-2'>
                  <h2>{t("payment.header.headerpath.headerpath1")}/</h2>
                  <h2>{t("payment.header.headerpath.headerpath2")}</h2>

                </div>}
            </div>
            <div className='relative z-10'>
              <div onClick={() => { setBlogToggle(!blogToggle) }} className=' flex items-center gap-2 bg-[#BAF3E6] px-2 py-1 rounded-2xl text-[#00414d] cursor-pointer hover:bg-[#7fbbad] duration-300 '>
                <TbBallVolleyball className={`${blogToggle ? "rotate-180" : "rotate-0"} duration-300`} />
                <h2>{t("payment.header.headerpath.headerhelpingTittle")}</h2>
                <IoIosArrowDown className={`${blogToggle ? "rotate-0" : "rotate-180"} duration-300`} />
              </div>

              <div className={`absolute top-full ${i18n.language === "ar" ? "left-0" : "right-0"} ${sizeToggle ? "w-[450px]" : "w-[350px]"} duration-300 bg-white shadow-lg rounded-md mt-2 ${blogToggle ? "h-auto" : "h-0"} overflow-hidden`}>
                <div className='flex justify-between items-center px-3 py-2 bg-[#BAF3E6]'>
                  <h3>{t("payment.header.headerpath.headerhelping.headerhelpingTittleinner")}:</h3>
                  <div onClick={() => { setSizeToggle(!sizeToggle) }} className='flex items-center gap-2 cursor-pointer'>
                    <ImEnlarge2 />
                    <h3>{sizeToggle ? t("payment.header.headerpath.headerhelping.headerhelpingChangeSizeLarge") : t("payment.header.headerpath.headerhelping.headerhelpingChangeSizeSmall")}</h3>
                  </div>
                </div>
                <div className='py-2'>
                  <div className='flex items-center mx-3 h-8 border border-gray-300 rounded-md'>
                    <input type="text" placeholder={t("payment.header.headerpath.headerhelping.headerhelpingSearch")} className='w-5/6 h-full px-3 outline-none rounded-r-md' />
                    <div className='w-1/6 h-full flex items-center justify-center bg-[#BAF3E6] rounded-l-md'>
                      <CiSearch className='' />

                    </div>
                  </div>
                  <div className='py-4 px-3'>
                    <div className='flex items-center justify-between px-2 py-3 hover:bg-[#BAF3E6] duration-300 border-b border-gray-300'>
                      <div>
                        <h3> {t("payment.header.headerpath.headerhelping.headerhelpinglink1")}</h3>
                      </div>
                      <FaPlus className='text-2xl' />
                    </div>

                    <div className='flex items-center justify-between px-2 py-3 hover:bg-[#BAF3E6] duration-300 border-b border-gray-300'>
                      <div>
                        <h3> {t("payment.header.headerpath.headerhelping.headerhelpinglink1")}</h3>
                      </div>
                      <FaPlus className='text-2xl' />
                    </div>
                    <div className='flex items-center justify-between px-2 py-3 hover:bg-[#BAF3E6] duration-300 border-b border-gray-300'>
                      <div>
                        <h3> {t("payment.header.headerpath.headerhelping.headerhelpinglink1")}</h3>
                      </div>
                      <FaPlus className='text-2xl' />
                    </div>
                    <div className='flex items-center justify-between px-2 py-3 hover:bg-[#BAF3E6] duration-300 border-b border-gray-300'>
                      <div>
                        <h3> {t("payment.header.headerpath.headerhelping.headerhelpinglink1")}</h3>
                      </div>
                      <FaPlus className='text-2xl' />
                    </div>
                    <div className='flex items-center justify-between px-2 py-3 hover:bg-[#BAF3E6] duration-300 border-b border-gray-300'>
                      <div>
                        <h3> {t("payment.header.headerpath.headerhelping.headerhelpinglink1")}</h3>
                      </div>
                      <FaPlus className='text-2xl' />
                    </div>
                    <div className='flex items-center justify-between px-2 py-3 hover:bg-[#BAF3E6] duration-300 '>
                      <div>
                        <h3> {t("payment.header.headerpath.headerhelping.headerhelpinglink1")}</h3>
                      </div>
                      <FaPlus className='text-2xl' />
                    </div>
                  </div>

                </div>

              </div>
            </div>


          </div>

          {/* provider */}
          <div className='pb-6 border-b-2 border-gray-300'>
            <div className='flex items-center justify-between py-2 px-4 border border-gray-300 rounded-md my-3'>

              <div className='flex items-center gap-2 text-[#00414d]'>
                <div className='flex items-center justify-center h-16 w-16 bg-[#BAF3E6] rounded-full'>
                  <IoShieldCheckmarkOutline className='text-3xl' />
                </div>
                <div>
                  <h3 className='text-lg'>{t("payment.header.provider.providerTitle")}</h3>
                  <p className='text-gray-400 text-sm'>{t("payment.header.provider.providerDescription")}
                  </p>
                  <p className='text-red-500'>{t("payment.header.provider.providerNote")}
                  </p>

                </div>
              </div>
              <div>
                <IoIosArrowDown className='text-2xl rotate-90 text-gray-400' />
              </div>

            </div>
          </div>

          {/* banks */}
          <div className='border border-gray-300 rounded-md mt-10'>
            <div className='flex items-center gap-2 p-4 bg-[#fcfcfc] rounded-t-md'>
              <IoWalletOutline className='text-3xl' />
              <h2>{t("payment.header.banks.banksTitle1")}</h2>
            </div>
            <div className='px-4 py-5 rounded-b-md'>
              <img src="https://cdn.assets.salla.network/prod/admin/cp/assets/images/paypal.png" className='w-28 object-contain' alt="" />
            </div>
          </div>


          <div className='border border-gray-300 rounded-md mt-10'>
            <div className='flex items-center gap-2 p-4 bg-[#fcfcfc] rounded-t-md'>
              <MdOutlineAddShoppingCart className='text-3xl' />
              <h2>{t("payment.header.banks.banksTitle2")}</h2>
            </div>
            <div className='rounded-b-md'>
              <div className='px-4 py-5 border-b border-gray-300'>
                <img src="https://cdn.assets.salla.network/prod/admin/cp/assets/images/tabby_en.png" className='w-28 object-contain' alt="" />
              </div>
              <div className='px-4 py-5 border-b border-gray-300'>
                <img src="https://cdn.assets.salla.network/prod/admin/cp/assets/images/tamara.svg" className='w-28 object-contain' alt="" />
              </div>
              <div className='px-4 py-5 border-b border-gray-300'>
                <img src="https://cdn.assets.salla.network/prod/admin/cp/assets/images/mispay_installment.png" className='w-28 object-contain' alt="" />
              </div>
              <div className='px-4 py-5'>
                <img src="https://cdn.assets.salla.network/prod/admin/cp/assets/images/madfu_installment.png" className='w-28 object-contain' alt="" />
              </div>
            </div>
          </div>



          <div className='border border-gray-300 rounded-md mt-10'>
            <div className='flex items-center justify-between p-4 bg-[#fcfcfc] rounded-t-md'>
              <div className='flex items-center gap-2'>
                <CiBank className='text-3xl' />
                <h2>{t("payment.header.banks.banksTitle3")}</h2>
              </div>
              <div className='flex items-center gap-2 bg-[#BAF3E6] px-4 py-2 rounded-md'>
                <FaPlus />
                <h4>{t("payment.header.banks.banksTitle3Details.bankButton")}</h4>
              </div>
            </div>
            <div className='px-4 py-3 rounded-b-md'>
              <p className='text-gray-400 text-sm'>{t("payment.header.banks.banksTitle3Details.bankDetails")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment