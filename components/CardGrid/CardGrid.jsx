import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardGrid({cardGrid}) {
    // console.log(cardGrid)
    let bigCard = cardGrid?.bigCardDetails
    let smlCards = cardGrid?.smallCardColumns
  return (
    <section className="card-grid">
      <div className="container">
        <div className="w-full mx-auto">
          <div
            data-aos="fade-up"
            className="w-full group relative overflow-hidden lg:flex-wrap flex flex-col lg:flex-row mb-[30px] md:mb-[16px] lg:mb-[24px] 3xl:mb-[35px]"
          >
            <Link href={bigCard?.link || '#'} className="emptylink z-[2]">
              .
            </Link>

            <div className="w-full lg:max-w-[386px] xl:max-w-[466px] 2xl:max-w-[573px] 3xl:max-w-[736px] flex items-center justify-center lg:min-h-[254px] xl:min-h-[301px] 2xl:min-h-[334px] 3xl:min-h-[725px] lg:h-auto h-[254px] rounded-t-[5px] lg:rounded-r-none lg:rounded-l-[16px] overflow-hidden">
              <Image
                src={`https://dev-light-beam.pantheonsite.io${bigCard?.cardImage?.node?.filePath}`}
                alt={bigCard?.cardImage?.node?.altText}
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-300 ease-in-out"
                width={100}
                height={100}
              />
            </div>

            <div className="w-full relative lg:w-[calc(100%-386px)] xl:w-[calc(100%-466px)] 2xl:pb-[19px] 2xl:w-[calc(100%-573px)] 3xl:w-[calc(100%-736px)] 3xl:pt-[56px] 3xl:pb-[20px] 3xl:pl-[24px] 3xl:pr-[160px] 2xl:py-[31px] 2xl:pl-[22px] 2xl:pr-[120px] p-[30px] pb-[23px] md:px-[64px] md:pt-[32px] md:pb-[27px] lg:py-[18px] xl:pr-[135px] lg:pl-[24px] xl:py-[24px] border-[1.5px] lg:border-2 border-silver rounded-b-[5px] lg:rounded-l-none lg:rounded-r-[5px] overflow-hidden bg-white flex flex-col">
              <p className="text-[12px] leading-[1] tracking-[0.56px] 2xl:text-[14px] 3xl:text-[24px] mb-[40px] lg:mb-[37px] xl:mb-[45px] 2xl:mb-[64px] 3xl:mb-[112px] font-bold uppercase text-darkGray">
                {bigCard?.eyebrow}
              </p>
              <div className="date 2xl:mb-[12px] xl:mb-[9px] mb-[8px] 3xl:mb-[28px]">
                <span className="text-[14px] 2xl:text-[20px] 3xl:text-[30px] font-bold leading-[1.4] tracking-[0.1px] text-darkGray">
                    {bigCard?.date} {bigCard.location && `| ${bigCard.location}`}
                </span>
              </div>
              <h4 className="lg:text-darkGray text-red 2xl:text-[32px] 3xl:text-[48px] transition-color duration-300 ease-in-out group-hover:text-red text-[20px] font-semibold mb-[6px] md:mb-[10px] xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[20px]">
                {bigCard?.cardTitle}
              </h4>
              <p className="font-medium text-darkGray mb-[17px] leading-[1.4] tracking-[0.1px] xl:mb-[26px] 2xl:mb-[31px] 3xl:mb-[99px]">
                {bigCard?.cardSubtitle}
              </p>
                {bigCard?.link && (
                    <div className="link-wrap">
                        <Link
                        href={bigCard?.link || '#'}
                        className="arrow-btn arrow-btn-black lg:after:opacity-0 opacity-100 group-hover:after:opacity-100"
                        >{bigCard?.linkText}</Link>
                    </div>
                )}
              
            </div>
          </div>

          <div className="flex  flex-row flex-wrap lg:flex-nowrap lg:gap-[24px]">
            {
                smlCards && smlCards.map((card, i)=>(
                                <div key={i}
                                    data-aos="fade-right"
                                    className="w-full mb-[30px] md:mb-[16px] lg:mb-0 2xl:max-h-[308px] 3xl:max-h-[609px] 3xl:min-h-[609px] lg:max-h-[233px] lg:min-h-[233px] 2xl:min-h-[308px] 3xl:pl-[24px] md:min-h-[233px] sm:min-h-[233px] min-auto xl:max-h-[245px] xl:min-h-[245px] relative lg:w-[50%] sm:w-full border-[1.5px] lg:border-2 border-red hover:border-red sm:border-silver bg-white rounded-[5px] lg:pr-[80px] 2xl:pr-[70px] 2xl:pt-[30px] p-[31px] pb-[15px] md:pl-[64px] 2xl:pl-[30px] 3xl:pt-[56px] 3xl:pb-[35px] 2xl:pb-[36px] xl:py-[29px] xl:pl-[23px] xl:pr-[110px] md:pr-[91px] lg:p-[18px] flex flex-col justify-start hover:justify-start sm:justify-start lg:justify-between group transition-all duration-300 ease-in-out"
                                    >
                                    <Link href={card?.smallCardLink || '#'} className="emptylink z-[2]">
                                        .
                                    </Link>

                                    <p className="text-[12px] 2xl:text-[14px] 3xl:text-[24px] 2xl:!mb-[110px] 3xl:group-hover:!mb-[80px] leading-[1] font-bold uppercase text-black lg:mb-[76px] xl:!mb-[90px]  group-hover:!mb-[32px] !mb-[30px] 2xl:group-hover:!mb-[48px] transition-all duration-300 ease-in-out">{card?.smallCardEyebrow}</p>
                                    <div className="content relative">
                                        <h4 className="text-[20px] 2xl:text-[32px] 3xl:text-[48px] 3xl:mb-[20px]  font-semibold text-red group-hover:text-red lg:text-black transition-all duration-300 ease-in-out">{card?.smallCardTitle}</h4>
                                        <div className="hidden-wrap group-hover:h-auto group-hover:sm:h-[76px] group-hover:3xl:h-[150px] lg:h-0 h-auto overflow-hidden transition-all duration-300 ease-in-out">
                                        <div className="mt-[6px] pt-[6px] 2xl:pt-[12px] opacity-100 group-hover:opacity-100 sm:opacity-100 lg:opacity-0 transition-opacity duration-300 ease-in-out delay-100">
                                            <p className="2xl:text-[16px] xl:text-[12px] 3xl:text-[30px] text-black">{card?.smallCardSubtitle}</p>
                                        </div>
                                        </div>
                                        {card?.smallCardLink && 
                                            (
                                                <div className="link-wrap lg:mt-[9px] xl:mt-[17px] 2xl:mt-[26px] 3xl:mt-[14px] group-hover:mt-0 md:mt-0 sm:mt-0 mt-0 transition-all duration-300 ease-in-out">
                                                    <Link
                                                        href={card?.smallCardLink}
                                                        className="arrow-btn arrow-btn-black lg:after:opacity-0 opacity-100 group-hover:after:opacity-100"
                                                    >{card?.smallCardLinkText}</Link>
                                                </div>
                                            )
                                        }
                                        
                                    </div>
                                    </div>
                ))
            }

          </div>
        </div>
      </div>
    </section>
  );
}
