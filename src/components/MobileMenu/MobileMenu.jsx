import React from 'react';
import Badge from '@mui/material/Badge';

function MobileMenu(props) {
    return (
        <div className="sm:fixed smmin:hidden sm:bottom-0 z-[200] flex flex-row justify-between items-center bg-[#2b2b2b] w-full h-16 text-[#999999] text-[26px] px-[60px]">
            <i className="fa fa-search" aria-hidden="true"></i>
            <i className="fa fa-heart" aria-hidden="true"></i>
            <Badge badgeContent={0} showZero color="secondary">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </Badge>
            <i className="fa fa-user" aria-hidden="true"></i>
            <i className="fa fa-cog" aria-hidden="true"></i>
        </div>
    );
}

export default MobileMenu;