import React from 'react';

function Card({item}) {
    return (
        <div className='group flex flex-col md:ml-[5px] lg:ml-[10px] lgmin:ml-[20px]'>
            <div className={`relative overflow-hidden md:min-h-[350px] xl:min-h-[420px] xlmin:min-h-[440px]  bg-cover	bg-no-repeat`} style={{backgroundImage: `url("`+item.images[0]+`")`}}>
                <div className='absolute left-[-15%] bottom-[5%] flex flex-col items-center justify-center gap-[20px] text-darkGray text-[20px]'>
                    <i class="group-hover:translate-x-[60px] duration-[700ms] delay-[0ms] fa fa-shopping-cart cursor-pointer hover:text-red mr-[3px]" aria-hidden="true"></i>
                    <i class="group-hover:translate-x-[60px] duration-[700ms] delay-[150ms] fa fa-heart cursor-pointer hover:text-red" aria-hidden="true"></i>
                    <i class="group-hover:translate-x-[60px] duration-[700ms] delay-[300ms] fa fa-search cursor-pointer hover:text-red" aria-hidden="true"></i>
                </div>
            </div>
            <div id='stars' className='text-[12px] pt-[10px]'>
                <i class={`fa fa-star ${Number(item.rating)>0 ? "text-[#FAD02C]": "text-darkGray"}`} aria-hidden="true"></i>
                <i class={`fa fa-star ${Number(item.rating)>1 ? "text-[#FAD02C]": "text-darkGray"}`} aria-hidden="true"></i>
                <i class={`fa fa-star ${Number(item.rating)>2 ? "text-[#FAD02C]": "text-darkGray"}`} aria-hidden="true"></i>
                <i class={`fa fa-star ${Number(item.rating)>3 ? "text-[#FAD02C]": "text-darkGray"}`} aria-hidden="true"></i>
                <i class={`fa fa-star ${Number(item.rating)>4 ? "text-[#FAD02C]": "text-darkGray"}`} aria-hidden="true"></i>
            </div>
            <div id='title' className='font-medium text-darkGray'>
                {item.name}
            </div>
            <div id='price' className='flex flex-row items-center gap-[5px]'>
                <h3 className='text-[18px] font-bold'>${Number(item.price)*Number(item.off)/100}</h3><strike className='text-[14px] text-darkGray'>${item.price}</strike>
            </div>
            <div id='colors' className='flex flex-row gap-[2px] pt-[10px] pb-[20px]'>
                <i class="fa fa-circle" aria-hidden="true"></i>
                <i class="fa fa-circle text-red" aria-hidden="true"></i>
            </div>
        </div>
    );
}

export default Card;