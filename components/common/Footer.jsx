import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
   <footer className="bg-darkGray 3xl:pt-[160px] pt-[56px] pb-[48px] lg:pt-[83px] lg:pb-[36px] xl:pt-[96px] xl:pb-[40px] 2xl:pt-[128px] 2xl:pb-[78px] max-w-[2500px] mx-auto w-full overflow-hidden">
    <div className="container">
        <div className="wrapper flex md:flex-nowrap justify-between gap-[64px] md:gap-[24px] pb-[50px] lg:gap-[125px] xl:gap-[122px] 2xl:gap-[143px] sm:pb-[64px] md:pb-[48px] lg:pb-[87px] xl:pb-[96px] 2xl:pb-[144px] 3xl:pb-[240px] flex-wrap border-b border-silver">
            <div className="relative max-w-[285px] md:max-w-[225px] lg:max-w-[203px] xl:max-w-[270px] 2xl:max-w-[334px] 3xl:max-w-[432px] flex flex-col gap-[16px] xl:gap-[20px] 2xl:gap-[24px] 3xl:gap-[32px]">
                <div className="img-wrap relative max-w-[160px] xl:max-w-[200px] 2xl:max-w-[240px] xl:max-h-[31px] 2xl:max-h-[38px] 3xl:max-w-[390px] 3xl:max-h-[61px] max-h-[26px]">
                    <a href="/" className="emptylink">.</a>
                    <Image src="/homepage/lightbeam_logo.svg" alt="logo"
                        className="w-full h-full object-contain object-left" width={100} height={100}/>
                </div>
                <ul className="social-icons flex flex-wrap gap-[21px] lg:gap-[31px] xl:gap-[27px] 2xl:gap-[32px] 3xl:gap-[52px]">
                    <li className="icon relative max-w-[18px] max-h-[18px] xl:max-w-[24px] xl:max-h-[24px] 2xl:max-w-[28px] 2xl:max-h-[28px] 3xl:max-w-[45px] 3xl:max-h-[43px]">
                        <a href="/" className="emptylink">.</a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="3xl:w-[45px] 3xl:h-[43px] 2xl:w-[28px] 2xl:h-[28px] xl:w-[24px] xl:h-[24px] w-[18px] h-[18px]" width="28" height="27" viewBox="0 0 28 27" fill="none">
                            
                            <rect width="28" height="27" rx="13.5" fill="white" />
                            <path d="M19.4496 17.4023L20.0703 13.5H16.1875V10.9688C16.1875 9.90088 16.7289 8.85938 18.468 8.85938H20.2344V5.53711C20.2344 5.53711 18.632 5.27344 17.1008 5.27344C13.9016 5.27344 11.8125 7.14287 11.8125 10.5258V13.5H8.25781V17.4023H11.8125V26.8365C12.5262 26.9446 13.2562 27 14 27C14.7438 27 15.4738 26.9446 16.1875 26.8365V17.4023H19.4496Z" fill="#282728" />
                        </svg>
                    </li>
                    <li className="icon linkdin-icon relative max-w-[18px] max-h-[18px] xl:max-w-[24px] xl:max-h-[24px] 2xl:max-w-[28px] 2xl:max-h-[28px] 3xl:max-w-[45px] 3xl:max-h-[43px]">
                        <a href="/" className="emptylink">.</a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="3xl:w-[45px] 3xl:h-[43px] 2xl:w-[28px] 2xl:h-[28px] xl:w-[24px] xl:h-[24px] w-[18px] h-[18px]" width="28" height="27" viewBox="0 0 28 27" fill="none">
                           
                            <g clipPath="url(#clip0_111_18559)">
                                <path d="M25.9331 0H2.06694C1.51876 0 0.993022 0.20999 0.605394 0.583773C0.217767 0.957557 0 1.46452 0 1.99313V25.0069C0 25.5355 0.217767 26.0424 0.605394 26.4162C0.993022 26.79 1.51876 27 2.06694 27H25.9331C26.4812 27 27.007 26.79 27.3946 26.4162C27.7822 26.0424 28 25.5355 28 25.0069V1.99313C28 1.46452 27.7822 0.957557 27.3946 0.583773C27.007 0.20999 26.4812 0 25.9331 0ZM8.34556 23.0006H4.13583V10.1063H8.34556V23.0006ZM6.23778 8.31938C5.76026 8.31678 5.29423 8.17785 4.89852 7.9201C4.50281 7.66235 4.19515 7.29735 4.01436 6.87115C3.83357 6.44495 3.78776 5.97667 3.8827 5.52539C3.97765 5.07411 4.2091 4.66006 4.54785 4.3355C4.88659 4.01095 5.31745 3.79043 5.78604 3.70177C6.25464 3.61311 6.73996 3.66029 7.18078 3.83736C7.62159 4.01442 7.99813 4.31344 8.26288 4.69666C8.52762 5.07989 8.66871 5.53015 8.66833 5.99063C8.67284 6.29891 8.61293 6.60492 8.49218 6.89041C8.37143 7.17589 8.19231 7.43501 7.9655 7.65233C7.73869 7.86964 7.46882 8.04069 7.17199 8.15529C6.87517 8.2699 6.55745 8.3257 6.23778 8.31938ZM23.8622 23.0119H19.6544V15.9675C19.6544 13.89 18.7386 13.2488 17.5564 13.2488C16.3081 13.2488 15.0831 14.1563 15.0831 16.02V23.0119H10.8733V10.1156H14.9217V11.9025H14.9761C15.3825 11.1094 16.8058 9.75375 18.9778 9.75375C21.3267 9.75375 23.8642 11.0981 23.8642 15.0356L23.8622 23.0119Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_111_18559">
                                    <rect width="28" height="27" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </li>
                    <li className="icon twitter-icon relative max-w-[18px] max-h-[18px] xl:max-w-[24px] xl:max-h-[24px] 2xl:max-w-[28px] 2xl:max-h-[28px] 3xl:max-w-[45px] 3xl:max-h-[43px]">
                        <a href="/" className="emptylink">.</a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            className="3xl:w-[45px] 3xl:h-[43px] 2xl:w-[28px] 2xl:h-[28px] xl:w-[24px] xl:h-[24px] w-[18px] h-[18px]">
                           
                            <path
                                d="M18.244 2.75H21.552L14.325 11.01L22.827 22.25H16.17L10.956 15.433L4.99003 22.25H1.68003L9.41003 13.415L1.25403 2.75H8.08003L12.793 8.981L18.244 2.75ZM17.083 20.27H18.916L7.08403 4.626H5.11703L17.083 20.27Z"
                                fill="white" />
                        </svg>
                    </li>
                </ul>

                <p className="small text-white tracking-[-0.14px] font-normal">
                    Elementum auctor odio arcu diam. Vulputate aliquet justo nunc elementum morbi malesuada quis dolor morbi. Aenean tincidunt nec et purus id nunc. Massa vitae leo mattis mi. Tempor velit odio.
                </p>

                <div className="icon-wrap max-w-[48px] max-h-[48px] grayscale xl:max-w-[60px] xl:max-h-[60px] 2xl:max-w-[72px] 2xl:max-h-[72px] 3xl:max-w-[117px] 3xl:max-h-[115px]">
                    <Image src="/homepage/aicpa_icon.svg" alt="icon"
                        className="w-full h-full object-contain" width={100} height={100} />
                </div>
            </div>

            <div className="link-wrapper w-full 3xl:pl-[29px]">
                <ul className="flex flex-wrap ml-[-15px] md:ml-[-12px] md:w-[calc(100%+24px)] 2xl:w-[calc(100%+64px)] 2xl:ml-[-32px] w-[calc(100%+30px)]">
                    <li className="sm:w-[calc(25%-30px)] w-[calc(50%-30px)] 3xl:mb-[50px] md:w-[calc(25%-24px)] 2xl:w-[calc(25%-64px)] 2xl:mx-[32px] md:mx-[12px] mx-[15px] mb-[35px] md:mb-[15px] xl:mb-[27px] lg:mb-[18px] 2xl:mb-[29px] sm:mb-[33px] leading-[-0.16px]"><a href="#"
                            className="text-white text-[14px] lg:text-[12px] xl:text-[12px] 2xl:text-[16px] 3xl:text-[24px] font-medium hover:text-red hover:!underline transition-all duration-300 ease-in-out">Solutions</a>
                    </li>
                    <li className="sm:w-[calc(25%-30px)] w-[calc(50%-30px)] 3xl:mb-[50px] md:w-[calc(25%-24px)] 2xl:w-[calc(25%-64px)] 2xl:mx-[32px] md:mx-[12px] mx-[15px] mb-[35px] md:mb-[15px] xl:mb-[27px] lg:mb-[18px] 2xl:mb-[29px] sm:mb-[33px] leading-[-0.16px]"><a href="#"
                            className="text-white text-[14px] lg:text-[12px] xl:text-[12px] 2xl:text-[16px] 3xl:text-[24px] hover:text-red font-medium hover:!underline transition-all duration-300 ease-in-out">Platform</a>
                    </li>
                    <li className="sm:w-[calc(25%-30px)] w-[calc(50%-30px)] 3xl:mb-[50px] md:w-[calc(25%-24px)] 2xl:w-[calc(25%-64px)] 2xl:mx-[32px] md:mx-[12px] mx-[15px] mb-[35px] md:mb-[15px] xl:mb-[27px] lg:mb-[18px] 2xl:mb-[29px] sm:mb-[33px] leading-[-0.16px]"><a href="#"
                            className="text-white text-[14px] lg:text-[12px] xl:text-[12px] 2xl:text-[16px] 3xl:text-[24px] hover:text-red font-medium hover:!underline transition-all duration-300 ease-in-out">Why Lightbeam</a></li>
                    <li className="sm:w-[calc(25%-30px)] w-[calc(50%-30px)] 3xl:mb-[50px] md:w-[calc(25%-24px)] 2xl:w-[calc(25%-64px)] 2xl:mx-[32px] md:mx-[12px] mx-[15px] mb-[35px] md:mb-[15px] xl:mb-[27px] lg:mb-[18px] 2xl:mb-[29px] sm:mb-[33px] leading-[-0.16px]"><a href="#"
                            className="text-white text-[14px] lg:text-[12px] xl:text-[12px] 2xl:text-[16px] 3xl:text-[24px] hover:text-red font-medium hover:!underline transition-all duration-300 ease-in-out">Resources</a>
                    </li>
                    <li className="sm:w-[calc(25%-30px)] w-[calc(50%-30px)] 3xl:mb-[50px] md:w-[calc(25%-24px)] 2xl:w-[calc(25%-64px)] 2xl:mx-[32px] md:mx-[12px] mx-[15px] mb-[35px] md:mb-[15px] xl:mb-[27px] lg:mb-[18px] 2xl:mb-[29px] sm:mb-[33px] leading-[-0.16px]"><a href="#"
                            className="text-white text-[14px] lg:text-[12px] xl:text-[12px] 2xl:text-[16px] 3xl:text-[24px] hover:text-red font-medium hover:!underline transition-all duration-300 ease-in-out">Use Cases</a></li>
                    <li className="sm:w-[calc(25%-30px)] w-[calc(50%-30px)] 3xl:mb-[50px] md:w-[calc(25%-24px)] 2xl:w-[calc(25%-64px)] 2xl:mx-[32px] md:mx-[12px] mx-[15px] mb-[35px] md:mb-[15px] xl:mb-[27px] lg:mb-[18px] 2xl:mb-[29px] sm:mb-[33px] leading-[-0.16px]"><a href="#"
                            className="text-white text-[14px] lg:text-[12px] xl:text-[12px] 2xl:text-[16px] 3xl:text-[24px] hover:text-red font-medium hover:!underline transition-all duration-300 ease-in-out">Data Identity Graph</a></li>
                    <li className="sm:w-[calc(25%-30px)] w-[calc(50%-30px)] 3xl:mb-[50px] md:w-[calc(25%-24px)] 2xl:w-[calc(25%-64px)] 2xl:mx-[32px] md:mx-[12px] mx-[15px] mb-[35px] md:mb-[15px] xl:mb-[27px] lg:mb-[18px] 2xl:mb-[29px] sm:mb-[33px] leading-[-0.16px]"><a href="#"
                            className="text-white text-[14px] lg:text-[12px] xl:text-[12px] 2xl:text-[16px] 3xl:text-[24px] hover:text-red font-medium hover:!underline transition-all duration-300 ease-in-out">Customers</a>
                    </li>
                    <li className="sm:w-[calc(25%-30px)] w-[calc(50%-30px)] 3xl:mb-[50px] md:w-[calc(25%-24px)] 2xl:w-[calc(25%-64px)] 2xl:mx-[32px] md:mx-[12px] mx-[15px] mb-[35px] md:mb-[15px] xl:mb-[27px] lg:mb-[18px] 2xl:mb-[29px] sm:mb-[33px] leading-[-0.16px]"><a href="#"
                            className="text-white text-[14px] hover:text-red lg:text-[12px] xl:text-[12px] 2xl:text-[16px] 3xl:text-[24px] font-medium hover:!underline transition-all duration-300 ease-in-out">Newsroom</a>
                    </li>
                    <li className="sm:w-[calc(25%-30px)] w-[calc(50%-30px)] 3xl:mb-[50px] md:w-[calc(25%-24px)] 2xl:w-[calc(25%-64px)] 2xl:mx-[32px] md:mx-[12px] mx-[15px] mb-[35px] md:mb-[15px] xl:mb-[27px] lg:mb-[18px] 2xl:mb-[29px] sm:mb-[33px] leading-[-0.16px]"><a href="#"
                            className="text-white text-[14px] hover:text-red lg:text-[12px] xl:text-[12px] 2xl:text-[16px] 3xl:text-[24px] font-medium hover:!underline transition-all duration-300 ease-in-out">Industries</a>
                    </li>
                    <li className="sm:w-[calc(25%-30px)] w-[calc(50%-30px)] 3xl:mb-[50px] md:w-[calc(25%-24px)] 2xl:w-[calc(25%-64px)] 2xl:mx-[32px] md:mx-[12px] mx-[15px] mb-[35px] md:mb-[15px] xl:mb-[27px] lg:mb-[18px] 2xl:mb-[29px] sm:mb-[33px] leading-[-0.16px]"><a href="#"
                            className="text-white text-[14px] hover:text-red lg:text-[12px] xl:text-[12px] 2xl:text-[16px] 3xl:text-[24px] font-medium hover:!underline transition-all duration-300 ease-in-out">Capabilities</a>
                    </li>
                    <li className="sm:w-[calc(25%-30px)] w-[calc(50%-30px)] 3xl:mb-[50px] md:w-[calc(25%-24px)] 2xl:w-[calc(25%-64px)] 2xl:mx-[32px] md:mx-[12px] mx-[15px] mb-[35px] md:mb-[15px] xl:mb-[27px] lg:mb-[18px] 2xl:mb-[29px] sm:mb-[33px] leading-[-0.16px]"><a href="#"
                            className="text-white text-[14px] hover:text-red lg:text-[12px] xl:text-[12px] 2xl:text-[16px] 3xl:text-[24px] font-medium hover:!underline transition-all duration-300 ease-in-out">Company</a>
                    </li>
                    <li className="sm:w-[calc(25%-30px)] w-[calc(50%-30px)] 3xl:mb-[50px] md:w-[calc(25%-24px)] 2xl:w-[calc(25%-64px)] 2xl:mx-[32px] md:mx-[12px] mx-[15px] mb-[35px] md:mb-[15px] xl:mb-[27px] lg:mb-[18px] 2xl:mb-[29px] sm:mb-[33px] leading-[-0.16px]"><a href="#"
                            className="text-white text-[14px] hover:text-red lg:text-[12px] xl:text-[12px] 2xl:text-[16px] 3xl:text-[24px] font-medium hover:!underline transition-colors duration-300">Careers</a>
                    </li>
                    <li className="sm:w-[calc(25%-30px)] w-[calc(50%-30px)] 3xl:mb-[50px] md:w-[calc(25%-24px)] 2xl:w-[calc(25%-64px)] 2xl:mx-[32px] md:mx-[12px] mx-[15px] mb-[35px] md:mb-[15px] xl:mb-[27px] lg:mb-[18px] 2xl:mb-[29px] sm:mb-[33px] leading-[-0.16px]"><a href="#"
                            className="text-white text-[14px] hover:text-red lg:text-[12px] xl:text-[12px] 2xl:text-[16px] 3xl:text-[24px] font-medium hover:!underline transition-all duration-300 ease-in-out">Regulations</a>
                    </li>
                    <li className="sm:w-[calc(25%-30px)] w-[calc(50%-30px)] 3xl:mb-[50px] md:w-[calc(25%-24px)] 2xl:w-[calc(25%-64px)] 2xl:mx-[32px] md:mx-[12px] mx-[15px] mb-[35px] md:mb-[15px] xl:mb-[27px] lg:mb-[18px] 2xl:mb-[29px] sm:mb-[33px] leading-[-0.16px]"><a href="#"
                            className="text-white text-[14px] hover:text-red lg:text-[12px] xl:text-[12px] 2xl:text-[16px] 3xl:text-[24px] font-medium hover:!underline transition-all duration-300 ease-in-out">Integrations</a>
                    </li>
                    <li className="sm:w-[calc(25%-30px)] w-[calc(50%-30px)] 3xl:mb-[50px] md:w-[calc(25%-24px)] 2xl:w-[calc(25%-64px)] 2xl:mx-[32px] md:mx-[12px] mx-[15px] mb-[35px] md:mb-[15px] xl:mb-[27px] lg:mb-[18px] 2xl:mb-[29px] sm:mb-[33px] leading-[-0.16px]"><a href="#"
                            className="text-white text-[14px] lg:text-[12px] xl:text-[12px] 2xl:text-[16px] 3xl:text-[24px] font-medium hover:text-red hover:!underline transition-all duration-300 ease-in-out">Partners</a>
                    </li>
                </ul>

             
                <div className="mt-0 sm:mt-[15px] md:mt-[17px] lg:mt-[30px] xl:mt-[33px] 2xl:mt-[54px] 3xl:mt-[94px]">
                    <div className="text-wrap text-[0px] relative flex items-center gap-[10px]">
                        <span
                            className="text-[12px] 3xl:text-[24px] relative z-1 text-silver 2xl:leading-[1px]  leading-none font-bold max-w-[80px] sm:max-w-[103px] lg:max-w-[114px] md:max-w-[82px] 3xl:max-w-[209px] uppercase inline-block pr-[10px] bg-darkGray">your privacy</span>
                        <span
                            className="inline-block absolute top-1/2 left-0 w-full h-[1px] translate-y-[-50%] bg-silver text-[0] z-0">.</span>
                    </div>
                    <div className="w-full mt-[12px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[28px] 3xl:mt-[31px]">
                        <ul className="flex flex-wrap sm:flex-nowrap w-[calc(100%+30px)] md:w-[calc(100%+24px)] 2xl:w-[calc(100%+64px)] 2xl:ml-[-32px] md:ml-[-12px] ml-[-15px] mb-[13px] md:mb-0">
                            <li className="sm:w-[calc(25%-30px)] w-[calc(50%-30px)] 3xl:mb-[50px] md:w-[calc(25%-24px)] 2xl:w-[calc(25%-64px)] 2xl:mx-[32px] md:mx-[12px] mx-[15px] mb-[32px]"><a href="#"
                                    className="text-white text-[14px] 3xl:text-[24px] xl:text-[12px] lg:text-[12px] leading-[-0.16px]  2xl:text-[16px] font-medium hover:text-red hover:!underline transition-all duration-300 ease-in-out">Privacy Policy</a></li>
                            <li className="sm:w-[calc(25%-30px)] w-[calc(50%-30px)] 3xl:mb-[50px] md:w-[calc(25%-24px)] 2xl:w-[calc(25%-64px)] 2xl:mx-[32px] md:mx-[12px] mx-[15px] mb-[32px]"><a href="#"
                                    className="text-white text-[14px] 3xl:text-[24px] xl:text-[12px] lg:text-[12px]  leading-[-0.16px] 2xl:text-[16px] font-medium hover:text-red hover:!underline transition-all duration-300 ease-in-out">Trust Center</a></li>
                            <li className="sm:w-[calc(25%-30px)] w-[calc(50%-30px)] 3xl:mb-[50px] md:w-[calc(25%-24px)] 2xl:w-[calc(25%-64px)] 2xl:mx-[32px] md:mx-[12px] mx-[15px] mb-[32px]"><a href="#"
                                    className="text-white text-[14px] 3xl:text-[24px] xl:text-[12px] lg:text-[12px]  leading-[-0.16px] 2xl:text-[16px] font-medium hover:text-red hover:!underline transition-all duration-300 ease-in-out">Data Subject Request</a></li>
                            <li className="sm:w-[calc(25%-30px)] w-[calc(50%-30px)] 3xl:mb-[50px] md:w-[calc(25%-24px)] 2xl:w-[calc(25%-64px)] 2xl:mx-[32px] md:mx-[12px] mx-[15px] mb-[32px] 2xl:max-w-[150px] 3xl:max-w-max"><a href="#"
                                    className="text-white text-[14px] 3xl:text-[24px] xl:text-[12px] lg:text-[12px]  leading-[-0.16px] 2xl:text-[16px] font-medium hover:text-red hover:!underline transition-all duration-300 ease-in-out">Consent & Preferences</a></li>
                        </ul>
                    </div>
                </div>

               
                <div className="mt-[10px] md:mt-0 lg:mt-[18px] xl:mt-[28px] 2xl:mt-[13px] 3xl:mt-[80px]">
                    <div className="text-wrap text-[0px] relative flex items-center gap-[10px] mb-[12px] lg:mb-[9px] xl:mb-[20px] 2xl:mb-[24px]">
                        <span
                            className="text-[12px] 3xl:text-[24px] relative z-1 max-w-[180px] 3xl:max-w-[456px] sm:max-w-[218px] md:max-w-[174px] xl:max-w-[242px] 2xl:leading-[1]  leading-none lg:max-w-[148px] text-silver font-bold uppercase inline-block pr-[10px] bg-darkGray">SUBSCRIBE TO OUR NEWSLETTER</span>
                        <span
                            className="inline-block absolute top-1/2 left-0 w-full h-[1px] translate-y-[-50%] bg-silver text-[0] z-0">.</span>
                    </div>
                    <form className="relative max-w-[490px] md:max-w-[381px] xl:max-w-[466px] 2xl:max-w-[572px] 3xl:max-w-[930px] w-full">
                        <label htmlFor="email" className="w-0 h-0 text-[0px] absolute">.</label>
                        <input type="email" placeholder="ENTER EMAIL ADDRESS" id="email"
                            className="3xl:pr-[255px] pr-[130px] md:pr-[103px] xl:pr-[125px] 2xl:pr-[150px] focus:outline-none"
                            required />
                        <button type="submit"
                            className="absolute right-0 top-0 h-full rounded-r-[5px] w-[120px] md:w-[93px] cursor-pointer xl:w-[115px] 2xl:w-[140px] 3xl:w-[230px] px-[18px] py-[10px] bg-red text-white text-[10px] 3xl:text-[22px] 2xl:text-[14px] xl:text-[12px] font-bold uppercase ">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
        </div>

        <div className="mt-[18px] lg:mt-[20px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[56px] flex flex-wrap items-center">
            <p className="text-[12px] 3xl:text-[24px] text-white leading-[-0.12px] !mr-[10px] sm:!mr-0 font-bold">©2024 Lightbeam.ai All rights reserved</p>
            <div className="link-wrap sm:ml-[42px] 3xl:ml-[72px] ml-0">
                <a href="#"
                    className="text-white text-[12px] 3xl:text-[24px] leading-[-0.12px] font-bold w-full hover:text-red hover:!underline transition-all duration-300 ease-in-out">Terms of Service</a>
            </div>
        </div>
    </div>
</footer>
  )
}
