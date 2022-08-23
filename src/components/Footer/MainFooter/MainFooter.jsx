import React from 'react';
import { useTheme } from '../../../contexts/theme';
import logo from "../../../assets/images/logo.png";
import { FaGooglePlusG } from "@react-icons/all-files/fa/FaGooglePlusG";
import { FaWifi } from "@react-icons/all-files/fa/FaWifi";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";


function MainFooter(props) {
    const {theme} = useTheme();
    const themeBorder = theme.mode==="DARK" ? "border-lightestBlack": "border-darkModeGray";

    return (
        <div className='flex flex-row flex-wrap justify-between'>
            <div className='md:w-[100%] lg:w-[45%] lgmin:w-[30%]'>
                <img className='' src={logo} alt="title" />
                <p className='pt-[18px] pr-[80px] text-darkGray text-[14px] leading-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 </p>
                 <div className="flex flex-row justify-between items-center pr-[20%] mt-[8px]">
                    <span><FaFacebookF fontSize={"20px"} /></span>
                    <span><FaGooglePlusG fontSize={"20px"} /></span>
                    <span><FaTwitter fontSize={"20px"} /></span>
                    <span><FaInstagram fontSize={"20px"} /></span>
                    <span><FaWifi fontSize={"20px"} /></span>
                 </div>
            </div>
            <div className='md:w-[100%] lg:w-[45%] lgmin:w-[20%] md:mt-[15px]'>
                <h4 className={`font-black text-[16px] mb-[25px] lg:mb-[15px] md:pb-[8px] md:mb-0 md:border-b-[1px] ${themeBorder} md:border-solid`}>MY ACOOUNT</h4>
                <ul className='list-none p-0 text-[16px]'>
                    <li className='relative inline-block pt-[13px] text-darkGray hoverItem'>Women</li><div></div>
                    <li className='relative inline-block pt-[13px] text-darkGray hoverItem'>Clothing</li><div></div>
                    <li className='relative inline-block pt-[13px] text-darkGray hoverItem'>Accessories</li><div></div>
                    <li className='relative inline-block pt-[13px] text-darkGray hoverItem'>Featured</li><div></div>
                </ul>
            </div>
            <div className='md:w-[100%] lg:w-[45%] lgmin:w-[20%] lg:mt-[15px]'>
                <h4 className={`font-black text-[16px] mb-[25px] lg:mb-[15px] md:pb-[8px] md:mb-0 md:border-b-[1px] ${themeBorder} md:border-solid`}>WHY WE CHOOSE</h4>
                <ul className='list-none p-0 text-[16px]'>
                    <li className='relative inline-block pt-[13px] text-darkGray hoverItem'>Shipping & Return</li><div></div>
                    <li className='relative inline-block pt-[13px] text-darkGray hoverItem'>Secure Shopping</li><div></div>
                    <li className='relative inline-block pt-[13px] text-darkGray hoverItem'>Gallary</li><div></div>
                    <li className='relative inline-block pt-[13px] text-darkGray hoverItem'>Affiliates</li><div></div>
                    <li className='relative inline-block pt-[13px] text-darkGray hoverItem'>Contacts</li><div></div>
                </ul>
            </div>
            <div className='md:w-[100%] lg:w-[45%] lgmin:w-[20%] lg:mt-[15px]'>
                <h4 className={`font-black text-[16px] mb-[25px] lg:mb-[15px] md:pb-[8px] md:mb-0 md:border-b-[1px] ${themeBorder} md:border-solid`}>STORE INFORMATION</h4>
                <ul className='list-none p-0 text-[16px]'>
                    <li className='pl-[25px] relative pt-[13px] text-darkGray'><i className="fa fa-map-marker absolute left-0 top-[16px]" aria-hidden="true"></i> Multikart Demo Store, Demo Store India 345-659</li>
                    <li className='pl-[25px] relative pt-[13px] text-darkGray'><i className="fa fa-phone absolute left-0 top-[16px]" aria-hidden="true"></i> Call Us: 123-456-7898</li>
                    <li className='pl-[25px] relative pt-[13px] text-darkGray'><i className="fa fa-envelope absolute left-0 top-[16px]" aria-hidden="true"></i> Email Us: Support@Fiot.Com</li>
                    <li className='pl-[25px] relative pt-[13px] text-darkGray'><i className="fa fa-fax absolute left-0 top-[16px]" aria-hidden="true"></i> Fax: 123456</li>
                </ul>
            </div>

        </div>
    );
}

export default MainFooter;