import Image from 'next/image'
import React from 'react'
import Button from "./common/Buttons"

export default function HeroBanner({banner}) {

    console.log(banner)
  return (
    <section className='heroBanner flex items-end min-h-[875px] md:min-h-[981px] lg:min-h-[580px] xl:min-h-[704px] 2xl:min-h-[881px] 3xl:min-h-[1321px]  after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-30 after:bg-silver after:z-0 w-3xl:pt-[240px] 3xl:pt-[340px]'>
        {banner.bgImage && (
             <div className="bgImage absolute right-0 bottom-0 max-w-[720px] max-h-[867px] w-full h-full z-1 3xl:max-w-[1087px] 3xl:bottom-auto 3xl:top-0 3xl:max-h-[1350px] ">
            <Image src="/homepage/banner2.png" className="h-full object-right-top" alt="banner" width={800} height={800}/>
        </div>
        )}
        <div className="container">
            <div className="relative wrap z-2">
                <div
                    className="card bg-red px-[40px] pt-[48px] pb-[45px] md:pt-[40px] md:pb-[36px] lg:pt-[43px] lg:px-[32px] xl:pt-[56px] xl:pb-[52px] xl:px-[40px] 2xl:pt-[80px] 2xl:px-[56px] 2xl:pb-[69px] rounded-[8px] xl:rounded-[10px] lg:max-w-[468px] xl:max-w-[566px] 2xl:max-w-[693px] 3xl:max-w-[890px] 3xl:pt-[98px] 3xl:pr-[35px] 3xl:pb-[75px] 3xl:pl-[62px] 3xl:rounded-[20px]">
                        <h1 className="text-white lg:pr-[8px]">{banner?.title}</h1>
                        <p className="large pt-[12px] md:pt-[11px] lg:pt-[8px] xl:pt-[15px] 2xl:pt-[17px] text-white lg:max-w-[507px] 3xl:max-w-[700px] 3xl:pt-[25px]">{banner?.subtitle} </p>
                    <div className="btnWrap flex flex-wrap items-center gap-[17px] md:gap-[30px] lg:gap-[15px] xl:gap-[25px] 2xl:gap-[31px] pt-[38px] md:pt-[35px] lg:pt-[48px] 2xl:pt-[45px] 3xl:pt-[75px] 3xl:gap-[47px]">
                        {
                          banner.buttons &&  (banner?.buttons).map((btn,i)=>(
                                <React.Fragment key={i}>
                                    <Button data={btn}/>
                                </React.Fragment>
                          ))
                        }
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}
