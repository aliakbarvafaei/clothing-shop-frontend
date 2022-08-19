import React, { useEffect } from 'react';

function Toast({ type, description, handleToast}) {
    // console.log(type, description);
    useEffect(() => {
        const timer= setTimeout(() => {
            handleToast();
        }, 3000);
        return () => clearTimeout(timer);
    },[]);

    function handleClick(){
        handleToast();
    }

    const toastObject = {
        title: type === "1" ? "Success" : "Danger",
        description: description,
        backgroundColor: type === "1" ? "bg-green" : "bg-red",
        icon: type === "1" ? "fa fa-check-circle" : "fa fa-exclamation-circle",
    }
    return (
        <>
            <div className={`fixed z-[300] top-[20px] right-[20px] p-[10px] flex flex-row items-start gap-[20px] text-gray rounded-[5px] shadow-[0_8px_18px_0_rgba(200,200,200)] ${toastObject.backgroundColor}`}>
                <div className="text-[30px]">
                    <i class={toastObject.icon} aria-hidden="true"></i>
                </div>
                <div>
                    <h3 className="text-[15px]">{toastObject.title}</h3>
                    <p className="text-[12px]">
                        {toastObject.description}
                    </p>
                </div>
                <button type='button' onClick={handleClick} className='font-bold'>
                    X
                </button>
            </div>
        </>
    );
}

export default Toast;