import React from 'react';
import Badge from '@mui/material/Badge';

// const submenuCart=["Your cart is currently empty."];

function MobileMenu(props) {

    return (
        <div className="sm:fixed smmin:hidden sm:bottom-0 z-[200] flex flex-row justify-between items-center bg-darkModeLightBlack w-full h-16 text-darkGray text-[26px] px-[60px]">
            <i className="fa fa-search" aria-hidden="true"></i>
            <i className="fa fa-heart" aria-hidden="true"></i>
            {/* <ShopIcon submenu={submenuCart} icon="fa fa-shopping-cart iconsMenu" dir="left"/> */}

            <Badge badgeContent={0} showZero color="secondary">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </Badge>
            <i className="fa fa-user" aria-hidden="true"></i>
            <i className="fa fa-cog" aria-hidden="true"></i>
        </div>
    );
}

export default MobileMenu;