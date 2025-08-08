import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ImgWithContentCards({imgWithContentCards}) {
  // console.log(imgWithContentCards)

  return (
    <section className='img-with-content-cards'>
        <div className="container">

         <div className="wrapper flex flex-wrap ml-[-12px] gap-y-[24px] 3xl:gap-y-[38px] w-[calc(100%+24px)]">
           {imgWithContentCards.cards &&
            imgWithContentCards.cards.map((card,i)=>(

              <div key={i} className="col-four relative w-[calc(100%-24px)] sm:w-[calc(50%-24px)] md:w-[calc(33.33%-24px)] lg:w-[calc(25%-24px)] mx-[12px] rounded-[5px] overflow-hidden"
                data-aos="fade-up">
                <div
                    className="card flex flex-col border-2 3xl:border-3 relative border-thinGray lg:hover:border-red h-[224px] lg:h-[234px] xl:h-[272px] 2xl:h-[328px] 3xl:h-[518px] p-[20px] lg:py-[18px] lg:px-[14px] xl:py-[29px] xl:px-[22px] 2xl:px-[23px] 3xl:py-[44px] 3xl:px-[30px] z-0 group bg-white lg:hover:bg-red transition-background duration-500 ease-in-out hover:shadow-lg">
                    {/* <Link href={card.link} className="emptylink z-[2]">.</Link> */}
                   
                    <div className="icon-wrap max-w-[38px] h-[38px] xl:max-w-[45px] xl:h-[45px] 2xl:max-w-[55px] 2xl:h-[55px] 3xl:max-w-[90px] 3xl:h-[90px] mb-[15px] lg:mb-[24px] 2xl:mb-[25px] relative z-[1]">
                        <Image src={`https://dev-light-beam.pantheonsite.io${card?.icon?.node?.filePath}`}  alt={card?.icon?.node?.altText}  className="w-full h-full object-contain object-left" width={70} height={70} />
                    </div>
                    
                    <div className="w-full h-full overflow-hidden">
                        <div className="lg:translate-y-[82px] xl:translate-y-[97px] 2xl:translate-y-[130px] 3xl:translate-y-[175px] lg:group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                        
                            <h5 className=" text-darkGray lg:group-hover:text-white line-clamp-2 3xl:line-clamp-3">
                              {card.title}
                            </h5>
                          

                           
                            <p className="small group-hover:3xl:pt-[20px] text-darkGray lg:group-hover:text-white pt-[10px] lg:pt-[30px] lg:group-hover:pt-[11px] lg:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300 delay-200 ease-out line-clamp-3 2xl:line-clamp-4 3xl:line-clamp-5">
                                {card?.subtitle}
                           </p>
                            
                          
                              {/* <Link href="<?php echo $link; ?>" className="w-fit arrow-btn arrow-btn-black lg:arrow-btn-white mt-[10px] xl:mt-[20px] lg:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300 delay-200 ease-out">
                             
                             </Link> */}
                        
                              <Link href={card?.link || '#'} className="w-fit arrow-btn arrow-btn-black lg:arrow-btn-white mt-[10px] xl:mt-[20px] lg:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300 delay-200 ease-out">
                                Learn More
                             </Link>
                          
                        </div>
                    </div>
                </div>
            </div>
            ))
           }
            
             
        
         </div> 
    
    </div>
    </section>
  )
}
