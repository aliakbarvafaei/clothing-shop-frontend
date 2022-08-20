import React, { useEffect } from 'react';
import { useToast } from '../../contexts/ToastState';

function Toast({ type, description}) {
    const { setToastState } = useToast();
    useEffect(() => {
        const timer= setTimeout(() => {
            setToastState(false);
        }, 3000);
        return () => clearTimeout(timer);
    },[setToastState]);

    function handleClick(){
        setToastState(false);
    }

    const toastObject = {
        title: type === "1" ? "Success" : type === "2" ? "Error": "Please wait...",
        description: description,
        backgroundColor: type === "1" ? "text-gray bg-green" : type === "2" ? "text-gray bg-red": "text-black bg-white",
        icon: type === "1" ? "fa fa-check-circle" : type  === "2" ? "fa fa-exclamation-circle":"fa fa-spinner fa-spin",
    }
    return (
        <>
            <div className={`fixed z-[300] top-[20px] right-[20px] p-[10px] flex flex-row items-start gap-[20px] rounded-[5px] shadow-[0_8px_18px_0_rgba(200,200,200)] ${toastObject.backgroundColor}`}>
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