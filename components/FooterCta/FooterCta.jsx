import Image from 'next/image'
import React from 'react'
import Button from "../common/Buttons"


export default function FooterCta({footerCta}) {
    // console.log(footerCta)

  return (
    <section className={`relative footer-cta 3xl:min-h-[1025px] 2xl:min-h-[630px] min-h-[579px] md:min-h-[368px] lg:min-h-[420px] xl:min-h-[525px] flex items-center`}>
        <div className="bgImage absolute right-0 top-0 w-full h-full">
            <Image src={`https://dev-light-beam.pantheonsite.io${footerCta?.backgroundImage?.node?.filePath}`} className="h-full" alt={footerCta?.backgroundImage?.node?.altText} width={1600} height={500} />
        </div>
      <div className="container">
        <div className="wrap flex flex-wrap items-center justify-between w-[calc(100%+20px)] ml-[-10px]">
            <div className="colTwo md:w-[calc(50%-20px)] w-full mx-[10px] lg:mb-[16px] xl:mb-[40px] 2xl:mb-0"
                data-aos="fade-right">
                <div className="textWrap max-w-[387px] md:max-w-[338px] lg:pl-[10px] lg:pt-[20px] lg:max-w-[392px] xl:pl-0 xl:pt-0 xl:max-w-[466px] 2xl:max-w-[549px] 3xl:max-w-[888px]">
                 
                      <h2 className="text-white h1 xl:text-[40px] 2xl:text-[64px] 3xl:text-[96px] xl:tracking-[-1.4px] xl:leading-[1.2]">
                            {footerCta?.title}
                      </h2> 
                      <p className="pt-[16px] 2xl:pt-[10px] 3xl:pt-[40px] xl:pt-[15px] text-white max-w-[507px] 3xl:max-w-[888px]">
                        {footerCta?.subtitle}
                      </p>
                    {footerCta?.buttons && footerCta?.buttons.map((btn,i)=>(
                        <div key={i} className="btnWrap flex flex-wrap items-center gap-[17px] md:gap-[30px] lg:gap-[15px] xl:gap-[25px] 2xl:gap-[31px] pt-[38px] md:pt-[35px] lg:pt-[48px] 2xl:pt-[45px] 3xl:pt-[75px] 3xl:gap-[47px]">
                            <React.Fragment key={i}>
                                <Button data={btn}/>
                            </React.Fragment>
                        </div>
                    ))}
                   
                </div>
            </div>
            <div className="colTwo w-full flex justify-end mx-[10px] mt-[16px] md:w-[calc(50%-20px)] lg:mt-0 lg:justify-start" data-aos="fade-left">
                <div className="imageWrap w-full h-full max-w-[280px] max-h-[230px] sm:max-h-[262px] sm:mt-[-50px] sm:max-w-[301px] md:mt-0 mt-[20px] lg:mx-auto lg:ml-[50px] xl:max-w-[376px] xl:max-h-[328px] xl:mx-auto 2xl:max-w-[451px] 2xl:max-h-[394px] 3xl:max-w-[812px] 3xl:max-h-[716px] 3xl:mr-[initial]">
                    <Image src={`https://dev-light-beam.pantheonsite.io${footerCta?.sideImage?.node?.filePath}`} className="h-full" alt={footerCta?.sideImage?.node?.altText} width={400} height={400} />
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}
