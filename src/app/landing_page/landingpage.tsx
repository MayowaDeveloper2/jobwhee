
import Image from "next/image";
import desktopbackground from "../media/desktopbackgroundmask.png";
import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa6";
import { Search } from 'lucide-react';
import {Input} from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import person1 from "../media/person1.png"
import { SelectContent, SelectItem, SelectGroup, SelectTrigger } from "@radix-ui/react-select";
import { LiaAngleDownSolid } from "react-icons/lia";
import groupofpeople from "../media/groupofpeople.svg";
import client from "../media/client.svg"
import FolderCard  from "../landing_page/folder";
import star from "../media/star.svg";
import jobdescription from "../media/jobdescription.svg";
import jobdetails from "../media/jobdetails.svg";
import person2 from "../media/person2.jpg"
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import desktopbackgroundmobile from "../media/desktopbackgroundmobile.png";

export default function LandingPage() {
    return (
        <div className="lg:px-[120px]  md:px-[30px] px-[15px]">
           <div className="w-full xl:flex lg:flex md:flex lg:block md:block hidden h-[346px] relative items-center flex flex-col ">
                <Image
                src={desktopbackground}
                alt="Clipped Background"
                className="rounded-[30px] xxl:w-full xxl:h-[715.68px]  h-[596.4px]"
                />
                <div className="lg:w-[472.92px] xxl:w-[567.5px] xxl:h-[191px] md:w-[299px] lg:p-8 md:p-5 clip-rectangle-triangle-slice lg:h-[159.17px] md:h-[107px] bg-black/30 backdrop-blur-[6px]  rounded-t-[23.33px] rounded-bl-[23.33px] absolute top-[40px] md:top-[20px] left-[20px] xl:left-[30px]">
                    <div className="poppins xxl:text-[40px] xxl:font-bold lg:text-[30px] xxl:w-[512px] md:text-[20px] font-medium lg:w-[384px] md:w-[256px] text-white">FIND THE <span className="text-[#D0FF00]">TALENT</span> SIGN UP & GET THE <span className="text-[#D0FF00]">JOB</span> DONE</div>
                </div>
                <div className="absolute xxl:w-[496.5px] xxl:h-[145px] lg:top-[127.5px] md:top-[107.5px] right-[30px] lg:w-[413.75px] md:w-[289px]   rounded-b-[23.33px] lg:pt-8 md:pt-4 pl-[80px] rounded-tr-[23.33px]  lg:h-[120.83px] md:h-[85px] clip-left-side-triangle bg-black/30 backdrop-blur-[6px]">
                    <div className="poppins xxl:text-[40px] xxl:w-[402px] xl:font-bold lg:text-[30px] md:text-[20px] font-medium lg:w-[384px] md:w-[256px] text-white">WE'LL <span className="text-[#D0FF00]">HANDLE</span> THAT </div>

                </div>
                <div className="absolute flex lg:top-[227.5px] md:top-[167.5px] right-[50px] gap-4">
                    <Button className="lg:w-[222px] md:w-[175px]  lg:h-[51px] md:h-[40px] lg:text-[16px] md:text-[12px] text-[#18470D] poppins rounded-[40px] bg-[#CBEC5E]"> Sign Up for Contract </Button>
                    <div className="bg-white lg:w-[51px] lg:h-[51px] md:w-[40.5px] md:h-[40.5px]  rounded-full flex items-center justify-center">
                        <FaPlay className="text-black" />
                    </div>
                    
                </div>
                <div className="absolute xxl:bottom-[-330px]   lg:bottom-[-195px] md:bottom-[-20px] ml:bottom-[-120px] flex flex-col items-center ">
                    <div className="lg:w-[459px] xxl:w-[555px] xxl:rounded-[73px] xl:h-[60px] lg:h-[50px] md:h-[50px] rounded-[73px] flex items-center p-[5px] bg-white">
                        <div className="w-[42px] h-[42px] items-center justify-center flex rounded-full border-[1.58px] bg-gradient-to-r from-[#A5EC5E] to-[#BDC502]">
                            <div className="w-[38px] h-[38px] rounded-full bg-black items-center justify-center flex">
                                <Search className="text-white w-[20px] h-[20px] m-auto" />


                            </div>

                        </div>
                       <Input
                            className="text-[#737373] poppins text-[14px] w-[300px] xxl:w-[480px] border-none outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none shadow-none"
                            placeholder="Find a job, talent or service"
                        />
                        <div className="lg:border-l-[#737373] lg:border-l-[1px] lg:pl-2 md:border-l-[1px] md:pl-2 ml:pl-2 ml:border-l-[#737373] ml:border-l-[1px] xxl:border-none xxl:pl-0">
                            <Select >
                                <SelectTrigger className="border-none outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none shadow-none xxl:w-[122px] xxl:h-[52px] xxl:rounded-[27.5px] xxl:border-[1px] xxl:bg-[#F0F1F4] xxl:border-[#CDCDCD] xxl:flex xxl:items-center xxl:justify-center">
                                    <div className="text-[#474747] gap-2 flex items-center poppins text-[14px] ">
                                        Talent
                                        <LiaAngleDownSolid className="text-[#474747]" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent
                                 side="bottom"
                                 sideOffset={6}
                                 position="popper"
                                 align="center"
                                 className="w-[239px] mt-2 p-2 h-[102px] bg-white rounded-[12px]">
                                    <SelectGroup>
                                        <SelectItem value="talent" className="poppins flex  text-[14px] text-[#474747]">
                                            <Image src={groupofpeople} alt="group of people" />
                                            <div className="flex flex-col ml-2">
                                                <span className="text-[14px] text-[#181818] font-medium">Talent</span>
                                                <span className="text-[11px] text-[#3F3C3C]">Hire professionals effortlessly.</span>

                                            </div>
                                        </SelectItem>
                                        <SelectItem value="talent" className="poppins flex mt-3 text-[14px] text-[#474747]">
                                            <Image src={client} alt="client" />
                                            <div className="flex flex-col ml-2">
                                                <span className="text-[14px] text-[#181818] font-medium">Client</span>
                                                <span className="text-[11px] text-[#3F3C3C]">Apply to jobs posted by clients</span>

                                            </div>
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                        </div>

                    </div>
                  
                    <div className="flex mt-3">
                        <div className="bg-[#D0FF00] xxl:w-[11.85px] xxl:h-[11.85px] lg:w-[9.87px] lg:h-[9.87px] md:w-[7.14px] md:h-[7.14px] rounded-full mt-2 mr-2"></div>
                        <div className="bg-[#8E9A57] xxl:w-[11.85px] xxl:h-[11.85px] lg:w-[9.87px] lg:h-[9.87px] md:w-[7.14px] md:h-[7.14px] rounded-full mt-2 mr-2"></div>
                        <div className="bg-[#8E9A57] xxl:w-[11.85px] xxl:h-[11.85px] lg:w-[9.87px] lg:h-[9.87px] md:w-[7.14px] md:h-[7.14px] rounded-full mt-2 mr-2"></div>
                        <div className="bg-[#8E9A57] xxl:w-[11.85px] xxl:h-[11.85px] lg:w-[9.87px] lg:h-[9.87px] md:w-[7.14px] md:h-[7.14px] rounded-full mt-2 mr-2"></div>
                        <div className="bg-[#8E9A57] xxl:w-[11.85px] xxl:h-[11.85px] lg:w-[9.87px] lg:h-[9.87px] md:w-[7.14px] md:h-[7.14px] rounded-full mt-2 mr-2"></div>

                    </div>
                    <div className="lg:w-[338px] mt-5 lg:h-[52px] md:h-[46px] md:w-[241px] rounded-[50.83px] flex items-center justify-center bg-white shadow-[0px_4px_23.58px_#2B5BB540]">
                        <span className="text-[#000000] poppins lg:text-[18px] md:text-[14px] font-bold">EDUCATION AND TUTORING</span>


                    </div>


                </div>
            </div>
            <div className="lg:hidden flex flex-col items-center md:hidden block relative">
                <Image
                src={desktopbackgroundmobile}
                alt="Clipped Background"
                className="rounded-[30px] xs:h-[285px] sm:h-[290px] w-full"
                />
                <div className="mt-[230px] absolute flex flex-col items-center">
                    <div className="flex ">
                            <div className="bg-[#D0FF00] lg:w-[9.87px] lg:h-[9.87px] md:w-[7.14px] md:h-[7.14px] w-[7.14px] h-[7.14px] rounded-full mt-2 mr-2"></div>
                            <div className="bg-[#8E9A57] lg:w-[9.87px] lg:h-[9.87px] md:w-[7.14px] md:h-[7.14px] w-[7.14px] h-[7.14px] rounded-full mt-2 mr-2"></div>
                            <div className="bg-[#8E9A57] lg:w-[9.87px] lg:h-[9.87px] md:w-[7.14px] md:h-[7.14px] w-[7.14px] h-[7.14px] rounded-full mt-2 mr-2"></div>
                            <div className="bg-[#8E9A57] lg:w-[9.87px] lg:h-[9.87px] md:w-[7.14px] md:h-[7.14px] w-[7.14px] h-[7.14px] rounded-full mt-2 mr-2"></div>
                            <div className="bg-[#8E9A57] lg:w-[9.87px] lg:h-[9.87px] md:w-[7.14px] md:h-[7.14px] w-[7.14px] h-[7.14px] rounded-full mt-2 mr-2"></div>

                    </div>
                    <div className="lg:w-[338px] mt-5 xs:w-[207px] xs:h-[40px] sm:h-[40px] sm:w-[207px] sm:h-[40px] absolute mt-5 lg:h-[52px] md:h-[46px] md:w-[241px] rounded-[50.83px] flex items-center justify-center bg-white shadow-[0px_4px_23.58px_#2B5BB540]">
                        <span className="text-[#000000] xs:text-[12px] sm:text-[12px] poppins lg:text-[18px] md:text-[14px] font-bold">EDUCATION AND TUTORING</span>

                    </div>
                    
                    
                </div>
                <div className="flex flex-col">
                    <div className="lg:w-[472.92px] md:w-[299px] lg:p-8 md:p-5 clip-rectangle-triangle-slice sm:p-4 xs:p-4 lg:h-[159.17px] md:h-[107px] bg-[#9ba8b8] sm:w-[299px] sm:h-[107px] xs:w-[299px] xs:h-[107px] backdrop-blur-[6px]  rounded-t-[23.33px] rounded-bl-[23.33px] mt-[30px] left-[20px] ">
                        <div className="poppins  lg:text-[30px] md:text-[20px] sm:text-[20px] xs:text-[20px] xs:w-[256px] sm:w-[256px] font-medium lg:w-[384px] md:w-[256px] text-white">FIND THE <span className="text-[#D0FF00]">TALENT</span> SIGN UP & GET THE <span className="text-[#D0FF00]">JOB</span> DONE</div>
                    </div>
                    <div className="relative">

                    
                        <div className="w-[299px] mt-[10px] h-[85px] lg:top-[127.5px] md:top-[127.5px] right-[30px] lg:w-[413.75px] md:w-[289px]   rounded-b-[23.33px] lg:pt-8 md:pt-4 pt-4 pl-[80px] rounded-tr-[23.33px]  lg:h-[120.83px] md:h-[85px] clip-left-side-triangle bg-[#9ba8b8] backdrop-blur-[6px]">
                            <div className="poppins lg:text-[30px] md:text-[20px]  text-[20px] font-medium lg:w-[384px] md:w-[256px] text-white">WE'LL <span className="text-[#D0FF00]">HANDLE</span> THAT </div>

                        </div>
                         <div className="absolute flex lg:top-[227.5px] md:top-[187.5px] top-[60px] right-[20px] gap-4">
                            <Button className="lg:w-[222px] md:w-[175px] w-[175px] h-[40px]  lg:h-[51px] md:h-[40px] lg:text-[16px] md:text-[12px] text-[12px] text-[#18470D] poppins rounded-[33.33px] bg-[#CBEC5E]"> Sign Up for Contract </Button>
                            <div className="bg-[#E0E0E0] w-[39.5px] h-[39.5px] lg:w-[51px] lg:h-[51px] md:w-[40.5px] md:h-[40.5px]  rounded-full flex items-center justify-center">
                                <FaPlay className="text-black" />
                            </div>
                    
                        </div>
                    </div>
                    
                    
                    

                </div>
                
                

            </div>
            <div className="flex items-center w-full justify-center">
                <div className="w-[335px] ml:hidden md:hidden mt-[50px] h-[50px] rounded-[73px] flex items-center p-[10px] bg-white">
                    {/* Search Icon */}
                    <div className="w-[42px] h-[42px] flex items-center justify-center rounded-full border-[1.58px] bg-gradient-to-r from-[#A5EC5E] to-[#BDC502]">
                        <div className="w-[38px] h-[38px] rounded-full bg-black flex items-center justify-center">
                        <Search className="text-white w-[20px] h-[20px]" />
                        </div>
                    </div>

                    {/* Input Field */}
                    <Input
                        className="text-[#737373] poppins text-[12px] w-full border-none outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none shadow-none ml-2"
                        placeholder="Find a job, talent or service"
                    />

                    {/* Select Dropdown */}
                    <div className="relative">
                        <Select>
                        <SelectTrigger className="border-[0.72px] md:hidden lg:hidden block border-[#CDCDCD] bg-[#F0F1F4] w-[88px] h-[41.7px] flex items-center justify-center rounded-full outline-none ring-0 focus:outline-none focus:ring-0 shadow-none">
                            <div className="text-[#474747] gap-2 flex items-center poppins text-[14px]">
                            Talent
                            <LiaAngleDownSolid className="text-[#474747]" />
                            </div>
                        </SelectTrigger>

                        <SelectContent
                            side="bottom"
                            sideOffset={6}
                            position="popper"
                            align="end"
                            className="w-[239px] mt-2 p-2 bg-white rounded-[12px] shadow-md z-50"
                        >
                            <SelectGroup>
                            <SelectItem
                                value="talent"
                                className="poppins flex items-start text-[14px] text-[#474747]"
                            >
                                <Image src={groupofpeople} alt="group of people" />
                                <div className="flex flex-col ml-2">
                                <span className="text-[14px] text-[#181818] font-medium">Talent</span>
                                <span className="text-[11px] text-[#3F3C3C]">Hire professionals effortlessly.</span>
                                </div>
                            </SelectItem>

                            <SelectItem
                                value="client"
                                className="poppins flex mt-3 items-start text-[14px] text-[#474747]"
                            >
                                <Image src={client} alt="client" />
                                <div className="flex flex-col ml-2">
                                <span className="text-[14px] text-[#181818] font-medium">Client</span>
                                <span className="text-[11px] text-[#3F3C3C]">Apply to jobs posted by clients</span>
                                </div>
                            </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                        </Select>
                    </div>
                    </div>

            </div>
            <div className="flex flex-col items-center text-center xxl:mt-[450px] lg:mt-[350px] md:mt-[180px] mt-[180px]">
                <div className="text-[#000000] flex items-center lg:text-[30px] md:text-[26px] poppins font-bold">
                    <div className="w-[10.5px] h-[10.5px] bg-[#C0D724] mr-2"></div>SUCCESSFUL <span className="underline   decoration-[#C0D724] decoration-[4px] ml-2 "> CONTRACTS</span>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 lg:gap-[30px] md:gap-[10px] md:grid-cols-2 mt-[30px] md:mt-[20px] xmd:flex xmd:items-center xmd:justify-center">
                
                <div className="relative">
                    <div className="absolute   xs:left-[15px] sm:left-[20px] z-50 font-bold xs:text-[14px] lg:text-[18px] md:text-[18px] poppins top-[35px]">
                        CONTRACT

                    </div>
                    <FolderCard className="relative p-4 xxl:p-8">
                        
                        <div className="poppins lg:text-[18px] md:text-[18px] flex flex-col items-center font-medium text-[#000000] absolute top-[20px] xs:left-[150px] sm:left-[170px] md:left-[180px] xxl:left-[230px] lg:left-[180px] mt-2">
                            <div className="lg:text-[14px] xxl:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[12px]">Looking for Math Teacher</div>
                            <div className="lg:text-[12px] md:text-[12px] sm:text-[12px] xxl:text-[13.35px] xs:text-[10px] font-normal text-black"><span className="font-medium">Payment Type:</span> Fixed Price</div>
                        </div>
                        <div className="mt-[70px] lg:gap-[30px] md:gap-[30px] sm:gap-[20px] xs:gap-[10px] flex">
                            <div className="lg:w-[161px] xxl:w-[203.18px] xxl:h-[124.01px] xxl:rounded-[18.12px] md:w-[161px] sm:w-[161px] md:h-[107px] xs:w-[152px] xs:h-[107px] relative p-2 flex flex-col lg:h-[107px] bg-[#F4F5F8] rounded-[13.59px]">
                                <div className="flex xxl:w-full xxl:justify-between gap-2 items-center justify-center ">
                                    <div className="w-[35.64px] h-[35.64px] rounded-full border-[1.07px] border-[#F93855]">
                                        <Image src={person1} alt="person1" className="w-[35.64px] h-[35.64px] rounded-full border-[1.07px] border-[#87A1C0]" />
                                    </div>
                                    <div className="bg-[#DDE3F3] w-[102.07px] h-[24.8px] rounded-[47.7px] xxl:w-[102.07px] xxl:h-[24.8px] xxl:rounded-[47.7px] xxl:text-[13.35px] lg:text-[13.35px] md:text-[13.35px] xs:text-[12px] flex items-center justify-center poppins">
                                        Talent
                                    </div>

                                </div>
                                <div className="flex items-center absolute right-[10px] top-[40px] justify-center gap-[1px]">
                                    <Image src={star} alt="star" /> <span className="poppins font-medium lg:text-[13.35px] xxl:text-[13.35px] md:text-[13.35px] xs:text-[12px]">5.0</span>
                                </div>
                                <div className="mt-6 xxl:mt-8">
                                    <div className="text-[12px] poppins text-[#000000] xxl:text-[15.26px] font-medium">Edward Smith</div>
                                    <div className="text-[#818181] xxl:text-[13.35px] text-[10px] poppins">Founder of MathTech</div>
                                </div>
                                

                            </div>
                            <div className="lg:w-[161px] xxl:w-[203.18px] xxl:h-[124.01px] xxl:rounded-[18.12px] md:w-[161px] md:h-[107px] sm:w-[161px] xs:w-[152px] xs:h-[107px] relative p-2 flex flex-col lg:h-[107px] bg-[#F4F5F8] rounded-[13.59px]">
                                <div className="flex gap-2 xxl:w-full xxl:justify-between items-center justify-center ">
                                    <div className="w-[35.64px] h-[35.64px] rounded-full border-[1.07px] border-[#F93855]">
                                        <Image src={person2} alt="person1" className="w-[35.64px] h-[35.64px] rounded-full border-[1.07px] border-[#87A1C0]" />
                                    </div>
                                    <div className="bg-[#E1FA77]  xxl:w-[102.07px] xxl:h-[24.8px] xxl:rounded-[47.7px] xxl:text-[13.35px] lg:text-[13.35px] w-[102.07px] h-[24.8px] rounded-[47.7px] lg:text-[13.35px] md:text-[13.35px] xs:text-[12px]  flex items-center justify-center poppins">
                                        Talent
                                    </div>

                                </div>
                                <div className="flex items-center absolute right-[10px] top-[40px] justify-center gap-[1px]">
                                    <Image src={star} alt="star" /> <span className="poppins font-medium text-[13.35px]">5.0</span>
                                </div>
                                <div className="mt-6 xxl:mt-8">
                                    <div className="text-[12px] poppins text-[#000000] xxl:text-[15.26px] font-medium">Edward Smith</div>
                                    <div className="text-[#818181] xxl:text-[13.35px] text-[10px] poppins">Math Teacher</div>
                                </div>

                            </div>
                            
                            
                        </div>
                        <div className="flex flex-col mt-[10px] xxl:mt-[20px]">
                                    <div className="flex items-center gap-1 ">
                                        <Image src={jobdescription} alt="job decription" className="xs:w-[19.5px] xs:h-[19.5px]" />
                                        <span className="poppins xxl:text-[16px] lg:text-[16px] md:text-[16px] xs:text-[14px] text-[#000000]">Description</span>
                                    </div>
                                    <div className="poppins text-[#474747] mt-1 lg:text-[13px] md:text-[13px] xs:text-[12px]">We are looking for a teacher to provide one-on-one algebra and geometry tutoring 60-minute sessions, twice weekly.</div>

                        </div>
                        <div className="flex flex-col mt-[8px] xxl:mt-[20px]">
                            <div className="flex items-center gap-1 ">
                                        <Image src={jobdetails} alt="job details" />
                                        <span className="poppins lg:text-[16px] md:text-[16px] xs:text-[14px] text-[#000000]">Job Details</span>
                            </div>
                            <div className="flex flex-row w-full justify-between poppins mt-1 lg:text-[13px] md:text-[13px] xs:text-[12px]">
                                <div>
                                    <div>Start Date: <span className="text-[#474747] ml-[20px]">Jan 15, 2025</span></div>
                                    <div>End Date: <span className="text-[#474747] ml-[20px]">Not Estimated</span></div>
                                </div>
                                <div>
                                    <div>Status: <span className="text-[#474747] ml-[20px]"> Ongoing</span></div>
                                    <div>Budget: <span className="text-[#474747] ml-[20px]"> $ 2000</span></div>
                                </div>

                            </div>

                        </div>
                        <div className=" xxl:mt-[15px] xxl:text-[13.35px] xxl:px-14 xxl:text-center text-white lg:text-[13px] md:text-[12px] xs:text-[12px] mt-1 px-2 py-1 h-[49px] bg-black rounded-[14.31px]">
                            Fixed-priced contract under the protection of payment system


                        </div>



                    </FolderCard>
                </div>
                <div className="relative">
                    <div className="absolute xxl:block lg:block hidden  xs:left-[15px] sm:left-[20px] z-50 font-bold xs:text-[14px] lg:text-[18px] md:text-[18px] poppins top-[35px]">
                        CONTRACT
                    </div>

                    <FolderCard className="relative hidden xxl:block lg:block p-4 xxl:p-8">
                        
                        <div className="poppins lg:text-[18px] md:text-[18px] flex flex-col items-center font-medium text-[#000000] absolute top-[20px] xs:left-[150px] sm:left-[170px] md:left-[180px] xxl:left-[230px] lg:left-[180px] mt-2">
                            <div className="lg:text-[14px] xxl:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[12px]">Looking for Math Teacher</div>
                            <div className="lg:text-[12px] md:text-[12px] sm:text-[12px] xxl:text-[13.35px] xs:text-[10px] font-normal text-black"><span className="font-medium">Payment Type:</span> Fixed Price</div>
                        </div>
                        <div className="mt-[70px] lg:gap-[30px] md:gap-[30px] sm:gap-[20px] xs:gap-[10px] flex">
                            <div className="lg:w-[161px] xxl:w-[203.18px] xxl:h-[124.01px] xxl:rounded-[18.12px] md:w-[161px] sm:w-[161px] md:h-[107px] xs:w-[152px] xs:h-[107px] relative p-2 flex flex-col lg:h-[107px] bg-[#F4F5F8] rounded-[13.59px]">
                                <div className="flex xxl:w-full xxl:justify-between gap-2 items-center justify-center ">
                                    <div className="w-[35.64px] h-[35.64px] rounded-full border-[1.07px] border-[#F93855]">
                                        <Image src={person1} alt="person1" className="w-[35.64px] h-[35.64px] rounded-full border-[1.07px] border-[#87A1C0]" />
                                    </div>
                                    <div className="bg-[#DDE3F3] w-[102.07px] h-[24.8px] rounded-[47.7px] xxl:w-[102.07px] xxl:h-[24.8px] xxl:rounded-[47.7px] xxl:text-[13.35px] lg:text-[13.35px] md:text-[13.35px] xs:text-[12px] flex items-center justify-center poppins">
                                        Talent
                                    </div>

                                </div>
                                <div className="flex items-center absolute right-[10px] top-[40px] justify-center gap-[1px]">
                                    <Image src={star} alt="star" /> <span className="poppins font-medium lg:text-[13.35px] xxl:text-[13.35px] md:text-[13.35px] xs:text-[12px]">5.0</span>
                                </div>
                                <div className="mt-6 xxl:mt-8">
                                    <div className="text-[12px] poppins text-[#000000] xxl:text-[15.26px] font-medium">Edward Smith</div>
                                    <div className="text-[#818181] xxl:text-[13.35px] text-[10px] poppins">Founder of MathTech</div>
                                </div>
                                

                            </div>
                            <div className="lg:w-[161px] xxl:w-[203.18px] xxl:h-[124.01px] xxl:rounded-[18.12px] md:w-[161px] md:h-[107px] sm:w-[161px] xs:w-[152px] xs:h-[107px] relative p-2 flex flex-col lg:h-[107px] bg-[#F4F5F8] rounded-[13.59px]">
                                <div className="flex gap-2 xxl:w-full xxl:justify-between items-center justify-center ">
                                    <div className="w-[35.64px] h-[35.64px] rounded-full border-[1.07px] border-[#F93855]">
                                        <Image src={person2} alt="person1" className="w-[35.64px] h-[35.64px] rounded-full border-[1.07px] border-[#87A1C0]" />
                                    </div>
                                    <div className="bg-[#E1FA77]  xxl:w-[102.07px] xxl:h-[24.8px] xxl:rounded-[47.7px] xxl:text-[13.35px] lg:text-[13.35px] w-[102.07px] h-[24.8px] rounded-[47.7px] lg:text-[13.35px] md:text-[13.35px] xs:text-[12px]  flex items-center justify-center poppins">
                                        Talent
                                    </div>

                                </div>
                                <div className="flex items-center absolute right-[10px] top-[40px] justify-center gap-[1px]">
                                    <Image src={star} alt="star" /> <span className="poppins font-medium text-[13.35px]">5.0</span>
                                </div>
                                <div className="mt-6 xxl:mt-8">
                                    <div className="text-[12px] poppins text-[#000000] xxl:text-[15.26px] font-medium">Edward Smith</div>
                                    <div className="text-[#818181] xxl:text-[13.35px] text-[10px] poppins">Math Teacher</div>
                                </div>

                            </div>
                            
                            
                        </div>
                        <div className="flex flex-col mt-[10px] xxl:mt-[20px]">
                                    <div className="flex items-center gap-1 ">
                                        <Image src={jobdescription} alt="job decription" className="xs:w-[19.5px] xs:h-[19.5px]" />
                                        <span className="poppins xxl:text-[16px] lg:text-[16px] md:text-[16px] xs:text-[14px] text-[#000000]">Description</span>
                                    </div>
                                    <div className="poppins text-[#474747] mt-1 lg:text-[13px] md:text-[13px] xs:text-[12px]">We are looking for a teacher to provide one-on-one algebra and geometry tutoring 60-minute sessions, twice weekly.</div>

                        </div>
                        <div className="flex flex-col mt-[8px] xxl:mt-[20px]">
                            <div className="flex items-center gap-1 ">
                                        <Image src={jobdetails} alt="job details" />
                                        <span className="poppins lg:text-[16px] md:text-[16px] xs:text-[14px] text-[#000000]">Job Details</span>
                            </div>
                            <div className="flex flex-row w-full justify-between poppins mt-1 lg:text-[13px] md:text-[13px] xs:text-[12px]">
                                <div>
                                    <div>Start Date: <span className="text-[#474747] ml-[20px]">Jan 15, 2025</span></div>
                                    <div>End Date: <span className="text-[#474747] ml-[20px]">Not Estimated</span></div>
                                </div>
                                <div>
                                    <div>Status: <span className="text-[#474747] ml-[20px]"> Ongoing</span></div>
                                    <div>Budget: <span className="text-[#474747] ml-[20px]"> $ 2000</span></div>
                                </div>

                            </div>

                        </div>
                        <div className=" xxl:mt-[15px] xxl:text-[13.35px] xxl:px-14 xxl:text-center text-white lg:text-[13px] md:text-[12px] xs:text-[12px] mt-1 px-2 py-1 h-[49px] bg-black rounded-[14.31px]">
                            Fixed-priced contract under the protection of payment system


                        </div>



                    </FolderCard>
                </div>
                <div className="relative">
                    <div className="absolute hidden lg:block xxl:block xs:left-[15px] sm:left-[20px] z-50 font-bold xs:text-[14px] lg:text-[18px] md:text-[18px] poppins top-[35px]">
                        CONTRACT
                    </div>
                    <FolderCard className="relative hidden xxl:block lg:block p-4 xxl:p-8">
                        
                        <div className="poppins lg:text-[18px] md:text-[18px] flex flex-col items-center font-medium text-[#000000] absolute top-[20px] xs:left-[150px] sm:left-[170px] md:left-[180px] xxl:left-[230px] lg:left-[180px] mt-2">
                            <div className="lg:text-[14px] xxl:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[12px]">Looking for Math Teacher</div>
                            <div className="lg:text-[12px] md:text-[12px] sm:text-[12px] xxl:text-[13.35px] xs:text-[10px] font-normal text-black"><span className="font-medium">Payment Type:</span> Fixed Price</div>
                        </div>
                        <div className="mt-[70px] lg:gap-[30px] md:gap-[30px] sm:gap-[20px] xs:gap-[10px] flex">
                            <div className="lg:w-[161px] xxl:w-[203.18px] xxl:h-[124.01px] xxl:rounded-[18.12px] md:w-[161px] sm:w-[161px] md:h-[107px] xs:w-[152px] xs:h-[107px] relative p-2 flex flex-col lg:h-[107px] bg-[#F4F5F8] rounded-[13.59px]">
                                <div className="flex xxl:w-full xxl:justify-between gap-2 items-center justify-center ">
                                    <div className="w-[35.64px] h-[35.64px] rounded-full border-[1.07px] border-[#F93855]">
                                        <Image src={person1} alt="person1" className="w-[35.64px] h-[35.64px] rounded-full border-[1.07px] border-[#87A1C0]" />
                                    </div>
                                    <div className="bg-[#DDE3F3] w-[102.07px] h-[24.8px] rounded-[47.7px] xxl:w-[102.07px] xxl:h-[24.8px] xxl:rounded-[47.7px] xxl:text-[13.35px] lg:text-[13.35px] md:text-[13.35px] xs:text-[12px] flex items-center justify-center poppins">
                                        Talent
                                    </div>

                                </div>
                                <div className="flex items-center absolute right-[10px] top-[40px] justify-center gap-[1px]">
                                    <Image src={star} alt="star" /> <span className="poppins font-medium lg:text-[13.35px] xxl:text-[13.35px] md:text-[13.35px] xs:text-[12px]">5.0</span>
                                </div>
                                <div className="mt-6 xxl:mt-8">
                                    <div className="text-[12px] poppins text-[#000000] xxl:text-[15.26px] font-medium">Edward Smith</div>
                                    <div className="text-[#818181] xxl:text-[13.35px] text-[10px] poppins">Founder of MathTech</div>
                                </div>
                                

                            </div>
                            <div className="lg:w-[161px] xxl:w-[203.18px] xxl:h-[124.01px] xxl:rounded-[18.12px] md:w-[161px] md:h-[107px] sm:w-[161px] xs:w-[152px] xs:h-[107px] relative p-2 flex flex-col lg:h-[107px] bg-[#F4F5F8] rounded-[13.59px]">
                                <div className="flex gap-2 xxl:w-full xxl:justify-between items-center justify-center ">
                                    <div className="w-[35.64px] h-[35.64px] rounded-full border-[1.07px] border-[#F93855]">
                                        <Image src={person2} alt="person1" className="w-[35.64px] h-[35.64px] rounded-full border-[1.07px] border-[#87A1C0]" />
                                    </div>
                                    <div className="bg-[#E1FA77]  xxl:w-[102.07px] xxl:h-[24.8px] xxl:rounded-[47.7px] xxl:text-[13.35px] lg:text-[13.35px] w-[102.07px] h-[24.8px] rounded-[47.7px] lg:text-[13.35px] md:text-[13.35px] xs:text-[12px]  flex items-center justify-center poppins">
                                        Talent
                                    </div>

                                </div>
                                <div className="flex items-center absolute right-[10px] top-[40px] justify-center gap-[1px]">
                                    <Image src={star} alt="star" /> <span className="poppins font-medium text-[13.35px]">5.0</span>
                                </div>
                                <div className="mt-6 xxl:mt-8">
                                    <div className="text-[12px] poppins text-[#000000] xxl:text-[15.26px] font-medium">Edward Smith</div>
                                    <div className="text-[#818181] xxl:text-[13.35px] text-[10px] poppins">Math Teacher</div>
                                </div>

                            </div>
                            
                            
                        </div>
                        <div className="flex flex-col mt-[10px] xxl:mt-[20px]">
                                    <div className="flex items-center gap-1 ">
                                        <Image src={jobdescription} alt="job decription" className="xs:w-[19.5px] xs:h-[19.5px]" />
                                        <span className="poppins xxl:text-[16px] lg:text-[16px] md:text-[16px] xs:text-[14px] text-[#000000]">Description</span>
                                    </div>
                                    <div className="poppins text-[#474747] mt-1 lg:text-[13px] md:text-[13px] xs:text-[12px]">We are looking for a teacher to provide one-on-one algebra and geometry tutoring 60-minute sessions, twice weekly.</div>

                        </div>
                        <div className="flex flex-col mt-[8px] xxl:mt-[20px]">
                            <div className="flex items-center gap-1 ">
                                        <Image src={jobdetails} alt="job details" />
                                        <span className="poppins lg:text-[16px] md:text-[16px] xs:text-[14px] text-[#000000]">Job Details</span>
                            </div>
                            <div className="flex flex-row w-full justify-between poppins mt-1 lg:text-[13px] md:text-[13px] xs:text-[12px]">
                                <div>
                                    <div>Start Date: <span className="text-[#474747] ml-[20px]">Jan 15, 2025</span></div>
                                    <div>End Date: <span className="text-[#474747] ml-[20px]">Not Estimated</span></div>
                                </div>
                                <div>
                                    <div>Status: <span className="text-[#474747] ml-[20px]"> Ongoing</span></div>
                                    <div>Budget: <span className="text-[#474747] ml-[20px]"> $ 2000</span></div>
                                </div>

                            </div>

                        </div>
                        <div className=" xxl:mt-[15px] xxl:text-[13.35px] xxl:px-14 xxl:text-center text-white lg:text-[13px] md:text-[12px] xs:text-[12px] mt-1 px-2 py-1 h-[49px] bg-black rounded-[14.31px]">
                            Fixed-priced contract under the protection of payment system


                        </div>



                    </FolderCard>
                </div>
                
               

            </div>
            <div className="flex flex-col items-center mt-[15px] mb-[15px]">
                <div className="flex w-[112.5px] justify-between">
                    <div className="w-[47.25px] h-[47.25px] flex items-center justify-center bg-white rounded-full">
                        <FaArrowLeft className="text-black" />

                    </div>
                    <div className="w-[47.25px] h-[47.25px] flex items-center justify-center bg-white rounded-full">
                        <FaArrowRight className="text-black" />

                    </div>


                </div>

            </div>
            


      </div>
    
    )
}