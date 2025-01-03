import React from 'react'
import { useTranslation } from 'react-i18next'
import { BiMessage } from 'react-icons/bi'

const Footer = () => {
  const { t, i18n } = useTranslation()
  return (
    <>
     
        <div className='fixed bottom-0 w-full h-16 px-3 bg-[#00414d] flex items-center justify-center gap-3 text-white'>
          <div className='relative w-full h-full flex items-center justify-center gap-3'>

            <h3 className='text-sm'>
              {t("footer.footerDescription")}
            </h3>
            <button className='bg-[#BAF3E6] text-[#00414d] px-4 py-2  hover:bg-[#7fbbad] rounded-md duration-300'>{t("footer.footerButton")}</button>
            <div className={`absolute -top-10 ${i18n.language === "ar" ? "left-10" : "right-10"} bg-[#BAF3E6] text-[#00414d] rounded-full p-6 cursor-pointer hover:bg-white duration-300`}>
              <BiMessage className='text-3xl ' />

            </div>
          </div>
        </div>

      
    </>
  )
}

export default Footer