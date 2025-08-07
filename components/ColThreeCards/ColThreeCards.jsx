import React from 'react'

export default function ColThreeCards({colThreeCards}) {
//    console.log(colThreeCards)
    let padding = colThreeCards?.paddingClasses.join(" ")
  return (
    <section className={`col-three-cards relative ${padding}`}>
      <div className="container">
        <div className="flex flex-wrap gap-y-[24px] md:gap-y-[20px] w-[calc(100%+24px)] ml-[-12px]">
            {(colThreeCards?.columns)?.length > 0 && 
                colThreeCards.columns.map((card,i)=>(
                    <div key={i} className="relative w-[calc(100%-24px)] lg:w-[calc(33.33%-24px)] 2xl:min-h-[374px] mx-[12px] border border-silver xl:border-2 rounded-lg bg-white 3xl:rounded-[16px]"
                        data-aos="fade-up" data-aos-delay="<?php echo $delay; ?>">
                        <div
                            className="relative h-full px-[48px] py-[32px] lg:px-[20px] lg:py-[23px] xl:px-[22px] xl:py-[30px] 2xl:px-[22px] 2xl:pt-[26px] 2xl:pb-[20px] 3xl:pl-[42px] 3xl:pr-[41px] 3xl:pt-[36px] 3xl:pb-[22px]">
                        
                                <div className="bg-blue rounded-[50%] z-0 mb-[29px] lg:mb-[55px] xl:mb-[61px] 2xl:mb-[81px] w-[70px] h-[70px] lg:w-[45px] lg:h-[45px] xl:w-[55px] xl:h-[55px] 2xl:w-[70px] 2xl:h-[70px] 3xl:w-[113px] 3xl:h-[113px] 3xl:mb-[140px]">
                                    <img src={`https://dev-light-beam.pantheonsite.io${card?.image?.node?.filePath}`} alt={card?.title}
                                         className="w-full h-full" width={70} height={70} />
                                </div>
                            

                            <div className="contentWrap">
                            <h3>{card?.title}</h3> 
                            <p className="pt-[12px] lg:pt-[11px] 3xl:pt-[14px]"> { card?.blurb}</p> 
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
