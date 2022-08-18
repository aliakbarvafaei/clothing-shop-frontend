import React from 'react';
import Newsletter from './Newsletter/Newsletter';
import MainFooter from './MainFooter/MainFooter';
import { useTheme } from '../../contexts/theme';
import CopyRight from './CopyRight/CopyRight';

function Footer(props) {
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? "bg-black text-darkModeGray": "bg-gray";
    const themeClassCopy = theme.mode==="DARK" ? "bg-darkModeLightBlack": "bg-white";
    const themeBorder = theme.mode==="DARK" ? "border-lightestBlak": "border-darkModeGray";


    return <section>
        <div className={`${themeClass} ${themeBorder} border-b-[1px] border-solid py-[35px] px-total`}>
            <Newsletter />
        </div>
        <div className={`${themeClass} md:py-[20px] lg:py-[30px] lgmin:py-[45px] px-total bg-gray`}>
            <MainFooter />
        </div>
        <div className={`${themeClassCopy} py-[25px] px-total`}>
            <CopyRight />
        </div>
    </section>;
}

export default Footer;