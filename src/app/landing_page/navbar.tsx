import Image from "next/image"
import jobwhee from "../media/jobwheelogo.svg"
import english from "../media/english.png";
import greece from "../media/greece.png"
import { Select, SelectContent, SelectTrigger } from "@radix-ui/react-select";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import menubaricon from "../media/menusquare.svg"


export default function Navbar() {
    return (
        <nav className="w-full  md:px-[30px] lg:px-[120px] px-[20px] ">
            <div className=" px-[10px] justify-between  my-[25px] flex items-center bg-[#000000] rounded-[145px] h-[61.67px] xl:h-[74px] md:h-[54px]">
                <div>
                    <Image
                        src={jobwhee}
                        alt="Jobwhee Logo"
                        className=" lg:w-[171px] lg:h-[27.33px] md:w-[108px] md:h-[17.26px] w-[90.09px] h-[16.89px]"
                    />
                </div>
                <ul className="poppins md:flex lg:flex hidden items-center ml-[120px]"> 
                    <li className="inline-block text-white md:text-[12px] xl:text-[16px] lg:text-[14px] mr-[30px]">
                        Post a Job
                    </li>
                    <li className="inline-block text-white md:text-[12px] xl:text-[16px] lg:text-[14px] mr-[30px]">
                        Explore Jobs
                    </li>
                    <li className="inline-block text-white md:text-[12px] xl:text-[16px] lg:text-[14px] mr-[30px]">
                        How it works
                    </li>
                </ul>
                <div className="flex items-center gap-2">
                    {/* Language Switch */}
                    <Select>
                        <SelectTrigger className="lg:w-[95px] lg:h-[40px] lg:block md:block hidden  border-1 border-[#94949480] rounded-[32.5px] text-white px-2 py-1 cursor-default">
                            <div className="flex items-center gap-1">
                                <Image src={english} alt="EN" className="rounded-full w-[24px] h-[24px]" />
                                <span>EN</span>
                                <FaAngleDown className="text-hwite text-[14px]" />
                            </div>
                        </SelectTrigger>
                        <SelectContent className="w-[120px] mt-[120px] z-50 px-2 poppins rounded-md bg-[#0D0D0D] text-white p-0 pointer-events-none">
                            <div className="px-3 py-2 border-b border-[#3a3a3a] flex items-center gap-2">
                                <Image src={english} alt="English" width={20} height={20} />
                                English
                                </div>
                                <div className="px-3 py-2 flex items-center gap-2">
                                <Image src={greece} alt="Greek" width={20} height={20} />
                                Greek
                            </div>

                        </SelectContent>
                    </Select>
                    <Button variant="outline" className="poppins md:block lg:block hidden bg-black hover:bg-black hover:text-white border-[#94949480] md:w-[100px] text-white lg:w-[122px] lg:h-[40px] rounded-[32.5px]">Sign In</Button>
                    <Button className="poppins  bg-white text-black hover:bg-white md:w-[100px] lg:w-[122px] lg:h-[40px] rounded-[32.5px] w-[90px] h-[34px]">Sign Up</Button>
                    <div className="lg:hidden md:hidden block flex items-center justify-center w-[34px] h-[34px] bg-white rounded-full">
                        <Image src={menubaricon} alt="menubaricon" />

                    </div>

                </div>

            </div>

        </nav>
    )

}