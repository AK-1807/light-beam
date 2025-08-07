import React from 'react'

export default function ImageWithContent({imgWithCotent}) {
  return (
    <section>
        <div class="container">
      
        <div
            class="wrapper relative mt-[242px] md:mt-[30px] 2xl:mt-[185px] mx-auto flex flex-col lg:flex-row flex-wrap justify-between z-10 xl:items-center 3xl:items-start xl:mt-[24px]">


            <div class=" stickyImage w-full h-[400px] lg:max-w-[458px] xl:max-w-[558px] 2xl:max-w-[568px] 3xl:max-w-[880px] 3xl:max-w-[692px] 3xl:h-[640px]  flex relative items-center justify-center overflow-visible"
                data-aos="fade-right" data-aos-duration="500">
               
                <div
                    class="parallax-bg w-full h-[844px] sm:w-[591px] sm:h-[844px] md:w-[487px] md:h-[697px] lg:w-[451px] lg:h-[644px] xl:w-[484px] xl:h-[692px] 2xl:w-[716px] 2xl:h-[1021px] md:top-[-40px] lg:top-[-60px] pointer-events-none absolute top-[-150px] 2xl:mr-0 3xl:top-[-400px] left-[50%] translate-x-[-50%] sm:translate-x-[-46%]  3xl:translate-x-[-46%] 2xl:top-[-250px] 2xl:translate-x-[-40%] inset-0 z-1 3xl:w-[920px] 3xl:h-[1469px]">
                    <img src="<?php print REFRESH_DIR ?>/templates/assets/images/homepage/Lines2.png" alt="Background"
                        class="w-full h-full object-contain" />
                </div>
               
                    <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>"
                        class="relative z-10 w-full max-w-[396px] max-h-[366px] h-full lg:ml-auto mx-auto lg:max-w-[296px] xl:max-w-[356px] 2xl:mr-0 3xl:mr-auto 2xl:max-w-[440px] 2xl:max-h-[394px] 3xl:max-w-[692px] 3xl:max-h-[640px] 3xl:w-[692px] 3xl:h-[640px] object-contain" />
                      
            </div>

            <div class="w-full max-w-[386px] xl:max-w-[480px] 2xl:max-w-[577px] lg:w-[41%] xl:w-[45%] pt-[81px] md:pt-[115px] lg:pt-[90px] pl-[4px] lg:pl-0 3xl:pl-[1px] xl:pl-[15px] xl:pt-[5px] 2xl:pt-0 2xl:pl-[4px] 2xl:pb-[2px] 3xl:max-w-[736px] 3xl:pl-[5px] 3xl:pt-[66px]"
                data-aos="fade-left" data-aos-duration="500">
               
                <h3 class="text-darkGray">
                   
                </h3>
               
                <p class="text-darkGray pt-[7px] xl:tracking-normal 2xl:pt-[25px]">
                   
                </p>
               
                <ul
                    class="flex flex-col pt-[21px] lg:pt-[24px] 2xl:max-w-[578px] 2xl:pt-[48px] gap-y-[12px] xl:gap-y-[15px] 3xl:gap-y-[28px] 2xl:gap-y-[18px] 3xl:pt-[37px]">
                    
                        <li class="flex items-center">
                            <span class="eyebrow text-[0px]">.</span>
                            <span class="text-darkGray font-[500] text-[12px] 2xl:text-[16px] 3xl:text-[24px]"></span>
                        </li>
                   
                </ul>
                
                   <div class="btnWrap flex flex-wrap items-center gap-[17px] md:gap-[30px] lg:gap-[15px] xl:gap-[25px] 2xl:gap-[31px] pt-[38px] md:pt-[35px] lg:pt-[48px] 2xl:pt-[45px] 3xl:pt-[75px] 3xl:gap-[47px]">
                     
                   </div>
            </div>
        </div>

    </div>
    </section>
  )
}
