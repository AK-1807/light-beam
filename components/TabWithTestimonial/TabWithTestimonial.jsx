"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';

export default function TabWithTestimonial({tabWithTestimonial}) {
    let twt = tabWithTestimonial
   
    const [tabIndex, setTabIndex] = useState(0)
  return (
    <section className="tab-with-img">
      <div className="container">
        <p className="text-darkGray 3xl:text-[32px] 3xl:pb-[13px] 2xl:text-[20px] text-[18px] leading-[28px] 3xl:tracking-[0.6px] pb-[8px] md:pb-[4px] 2xl:pb-[7px] 3xl:pb-[20px] border-b-2 3xl:border-b-[3px] border-silver">
           
        </p>
        <div
            className="tab-nav relative w-full pl-[35px] pr-[30px] pb-[44px] pt-[20px] md:pt-[12px] md:px-0 md:pb-[28px] lg:pt-[11px] lg:pb-[30px] xl:pt-[24px] xl:pb-[42px] xl:px-[20px] 2xl:pt-[25px] 2xl:pb-[38px] 2xl:px-0 3xl:justify-between 3xl:pt-[40px] 3xl:px-[30px] 3xl:pb-[80px]">
            <button
                className="tab-arrow text-indent-0 text-[0px]  tab-arrow-left md:hidden flex w-[30px] h-[30px] absolute rounded-[50%] bg-white border border-red cursor-pointer left-0">
                .
                <svg width="24" height="24" className="relative top-[1px]" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="#333333" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>
            </button>
         
            <ul id="industryList" className="flex flex-wrap w-full justify-center gap-x-[65px] max-md:flex-nowrap max-md:overflow-x-auto max-md:whitespace-nowrap max-md:gap-x-6 max-md:scroll-px-4 scrollbar-hide">
                 {
                    twt?.tab_columns.length && 
                    twt.tab_columns.map((col,i)=>(
                            <li key={i} className="md-down:flex-shrink-0 md-down:first:ml-4" data-aos="fade-up" data-aos-delay="0" 
                                data-aos-duration="1000"
                                    onClick={() => setTabIndex(i)}
                                >
                                <span className={`eyebrow 3xl:text-[20px] inline-block cursor-pointer relative ${tabIndex == i ? "active" : "" }`}>{col?.tabItemName}</span>
                            </li>
                    ))
                 }
                
                
                <button
                    className="tab-arrow text-indent-0 text-[0px]  tab-arrow-right md:hidden flex w-[30px] h-[30px] absolute rounded-[50%] bg-white border border-red cursor-pointer right-0">
                    .
                    <svg width="24" height="24" className="relative top-[1px] left-[2px]" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#333333" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                </button>

            </ul>
           
        </div>
           

        <div className="tab-content-wrap min-h-[430px] lg:min-h-[280px]">
            
                        <div className="tab-content w-full flex flex-wrap" >
                            <div
                                className="statics max-w-full 3xl:max-w-[432px] 2xl:max-w-[334px] sm:max-w-full md:mr-0 xl:max-w-[270px] lg:max-w-[222px] w-full lg:mr-[24px] sm:flex lg:flex-col sm:flex-row sm:justify-center order-[2] lg:order-1">
                                <div
                                    className="upper-box text-center pt-[20px] pl-[40px] pr-[58px] pb-[30px] sm:w-1/2 sm:pt-[39px] md:px-0 md:py-[30px] lg:w-full lg:pb-[34px] lg:pt-[28px] xl:px-0 xl:py-[40px] 2xl:pb-[48px] 2xl:pt-[40px] 3xl:pb-[70px] sm:!border-b-0 sm:border-r-[1.5px] !border-b-2 lg:!border-b-2 lg:!border-r-0 !border-silver">
                                
                                    <h2
                                        className="2xl:text-[72px] 3xl:text-[128px] leading-[1.35] text-[48px] font-normal text-lightBlue">
                                        <span className="number">{twt?.tab_columns[tabIndex].counters.count1}</span>
                                        {twt?.tab_columns[tabIndex].counters.count1Sup && (<sup className="unit text-[26px] 3xl:text-[72px] top-[-0.7em] left-[5px]    ">{twt?.tab_columns[tabIndex].counters.count1Sup}</sup>)}

                                    </h2>
                                    <p
                                        className="2xl:text-[14px] 3xl:pt-[8px] 3xl:text-[24px] text-[12px] font-normal leading-[16px] text-darkGray ">
                                        {twt?.tab_columns[tabIndex].counters.count1Description}
                                    </p>
                                
                                </div>
                                <div
                                    className="bottom-box pl-[40px] pr-[58px] pb-[30px] text-center pt-[39px] sm:w-1/2 md:px-0 md:py-[30px] lg:w-full lg:pb-[34px] lg:pt-[28px] xl:px-0 xl:py-[40px] 2xl:pt-[42px] 2xl:pb-[48px] 3xl:pt-[70px]">
                                    
                                    <h2
                                        className="2xl:text-[72px] 3xl:text-[128px] text-[48px] leading-[1.35] pl-[11px] 3xl:pl-[28px] font-normal text-lightBlue">
                                        <span className="number">{twt?.tab_columns[tabIndex].counters.count2}</span>
                                        {twt?.tab_columns[tabIndex].counters.count1Sup && (<sup className="unit text-[26px] 3xl:text-[72px] top-[-0.7em] left-[5px]">{twt?.tab_columns[tabIndex].counters.count2Sup}</sup>)}
                                    </h2>
                                    <p
                                        className="2xl:text-[14px] 3xl:text-[24px] text-[12px] font-normal leading-[16px] text-darkGray ">
                                        {twt?.tab_columns[tabIndex].counters.count2Description}
                                    </p>
                                </div>
                            </div>

                            <div
                                className="content-box w-full mb-[30px] p-[24px] pr-[20px] sm:pl-[30px] sm:pt-[30px] sm:pb-[6px] md:mb-[48px] md:p-[32px] md:pb-[15px] md:pr-[40px] lg:mb-0 lg:w-[calc(100%-246px)] lg:pt-[24px] lg:px-[36px] lg:pb-[20px] xl:p-[40px] xl:pb-[24px] xl:pr-[50px] xl:w-[calc(100%-294px)] 2xl:pt-[34px] 2xl:pl-[46px] 2xl:pb-[40px] 2xl:pr-[65px] 2xl:w-[calc(100%-358px)] 3xl:w-[calc(100%-456px)] 3xl:p-[80px] 3xl:pb-[65px] rounded-[10px] border-[1.5px] lg:border-2 border-silver order-[1] lg:order-2">
                                <div className="content-wrapper flex flex-wrap xl:flex-nowrap justify-between items-center w-[calc(100%+10px)] ml-[-8px] 2xl:pr-[12px] 3xl:pr-0">
                                
                                    <div className="img-wrap mb-[20px] sm:mb-[38px] md:mb-[18px] 2xl:pt-[6px] 2xl:mb-0 2xl:max-w-[205px] 2xl:h-[219px] 2xl:max-h-[219px] max-w-[119px] max-h-[140px] mx-[8px] sm:max-w-[139px] sm:max-h-[160px] xl:max-w-[168px] xl:max-h-[178px] xl:h-[178px] xl:mb-[14px] lg:max-w-[139px] lg:h-[150px] sm:w-[calc(32%-16px)] 3xl:w-[calc(30%-12px)] 3xl:max-w-[334px] 3xl:max-h-[334px] 3xl:h-[334px] sm:order-2">
                                        <Image src={`https://dev-light-beam.pantheonsite.io${twt?.tab_columns[tabIndex].authorImage?.node?.filePath}`}  alt={twt?.tab_columns[tabIndex].authorImage?.node?.altText} className="w-full h-full object-contain 2xl:object-left" width={250} height={250} />
                                    </div>
                                
                                    <div className="heading-wrap 3xl:max-w-[807px] 2xl:max-w-[640px] xl:max-w-[523px] lg:max-w-[435px] md:max-w-[436px] sm:max-w-[357px] sm:w-[calc(68%-12px)] 3xl:w-[calc(70%-12px)] mx-[8px] sm:order-1">
                                    
                                        <p className="large 2xl:text-[30px] 2xl:leading-[1.48] 3xl:text-[48px] leading-[1.4] 3xl:mb-[56px] tracking-[-0.28px] text-[20px] xl:text-[24px] lg:text-[20px] font-medium text-darkGray mb-[12px]">
                                        {twt?.tab_columns[tabIndex].testimonialQuote}
                                        </p>

                                        <div className="ciso-wrap xl:mb-[41px] 2xl:mb-[54px] md:mb-[33px] mb-[29px] 3xl:mb-[70px]">
                                    
                                            <span className="2xl:text-[16px] 3xl:text-[24px] tracking-[-0.16px] text-[12px] font-medium pr-[3px] lg:pr-[10px] 3xl:pr-[16px] lg-down:pr-[6px]">
                                            {twt?.tab_columns[tabIndex].authorName}
                                            </span>
                                        
                                            <span className="2xl:text-[16px] 3xl:text-[24px] tracking-[-0.16px] before:w-[3px] before:h-[3px] before:mr-[3px] lg:before:w-[4px] lg:before:h-[4px] before:top-[50%] before:transform before:translate-y-[-50%] leading-[-0.16px] text-[12px] capitalize font-medium eyebrow">
                                            {twt?.tab_columns[tabIndex].authorDesc}
                                            </span>
                                        </div>
                                        {twt?.tab_columns[tabIndex].link && (
                                            <div className="link-wrap">
                                                <Link href={twt?.tab_columns[tabIndex].link} className="arrow-btn arrow-btn-black">{twt?.tab_columns[tabIndex].linkText}</Link>
                                            </div>
                                        )}
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                  

        </div>
    </div>
    </section>
  )
}
