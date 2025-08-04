import React from 'react'

export default function Intro({intro}) {
    let padding = intro?.paddingClasses.join(" ")
  return (
    <section className={`intro relative ${padding}`}>
        <div className="container">
            <div className="wrap flex flex-wrap justify-between">
                <div className="heading-wrap max-w-[86%] md:max-w-[75%] lg:max-w-[60%] 3xl:max-w-[75%]">
                    {intro.eyebrow && (<span className="eyebrow">{intro.eyebrow}</span>)}
                    
                       <h2 className="pt-[6px] md:pt-[9px] lg:pt-[9px] xl:pt-[8px] 2xl:pt-[12px] 3xl:pt-[17px]">
                        {intro?.titile}
                        </h2>
                        {intro.blurb && (<p className="text-darkGray pt-[20px] lg:pt-[24px] 2xl:pt-[32px] 3xl:pt-[48px] pr-[20px]">
                            {intro.blurb}
                    </p>)}         
                </div>

                <div className="btn-wrap pt-[38px] w-full lg:w-auto lg:pt-[30px] 2xl:pt-[36px] 3xl:pt-[52px]">
                </div>
            </div>
        </div>
    </section>
  )
}
