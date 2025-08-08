import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function IconWithLinkCards({iconWithLinkCards}) {
    // console.log(iconWithLinkCards)
     let padding = iconWithLinkCards?.paddingClasses.join(" ") 
     let bg = iconWithLinkCards.backgroundColor[0]
  return (
    <section className={`icon-with-link-cards relative ${padding} ${bg == 'bg-silver' && 'pb-[260px]'} backgroundCurveSecond`}>
       {bg == 'bg-silver' && (<span className="bg-silver">.</span> )} 
      <div className="container">   
       

        <div className="wrapper tablet:bg-red flex flex-wrap justify-center lg:justify-start ml-[-12px] md:gap-y-[24px] gap-y-[20px] w-[calc(100%+24px)]">
            {iconWithLinkCards.cards &&
            iconWithLinkCards.cards.map((card,i)=>(
                 <div key={i} className="col-six w-[calc(50%-24px)] sm:w-[calc(33.33%-24px)] lg:w-[calc(16.66%-24px)] mx-[12px]"
                data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000">
                <div
                    className="card group relative px-[15px] py-[20px] h-full min-h-[144px] bg-white lg:pt-[16px] lg:px-[10px] lg:pb-[13px] xl:min-h-[188px] xl:px-[12px] 2xl:pt-[25px] 2xl:px-[17px] 2xl:min-h-[213px] 3xl:py-[40px] 3xl:px-[18px] 3xl:min-h-[346px] rounded-[5px] group lg:hover:bg-red transition-[background-color] duration-300 ease-in-out">
                   <Link href={card?.link} className="emptylink z-[2]">.</Link>
                   
                    <div className="img-wrap relative w-full max-w-[58px] h-[55px] mb-[5px] md:mb-[20px] lg:max-h-[52px] lg:mb-[12px] xl:max-w-[71px] xl:h-[65px] xl:mb-[43px] 2xl:max-w-[88px] 2xl:h-[78px] 2xl:max-h-[78px] 2xl:mb-[14px] 3xl:max-w-[143px] 3xl:h-[126px] 3xl:max-h-[126px]  3xl:mb-[24px] mx-auto">
                        <Image src={`https://dev-light-beam.pantheonsite.io${card?.icon?.node?.filePath}`} alt={card?.icon?.node?.altText} width={88} height={60}
                            className="absolute w-full h-full top-0 left-0 object-contain z-0 lg:opacity-100 opacity-0 group-hover:opacity-0 transition-opacity duration-300 ease-in-out " />
                        <Image src={`https://dev-light-beam.pantheonsite.io${card?.icon?.node?.filePath}`} alt={card?.icon?.node?.altText} width={88} height={60}
                            className="absolute w-full h-full top-0 left-0 object-contain z-1 lg:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                    </div>
                    <div
                        className="link-wrap pt-[7px] md:pt-[9px] lg:pt-[10px] xl:pt-[13px] 2xl:pt-[18px] 3xl:pt-[26px] relative w-full border-t-2 3xl:border-t-3 border-darkGray  z-[1] lg:group-hover:border-white transition-all duration-300 ease-in-out">
                        <h5 className="pr-[27px] lg:group-hover:text-white text-darkGray transition-all duration-300 ease-in-out">{card?.title}</h5>
                    </div>
                </div>
            </div>

            ))}
           
        </div>
   
    </div>
    </section>
  )
}
