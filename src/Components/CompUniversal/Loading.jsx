import React from "react";
const Loading = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='spinner-border text-primary'>
                <span className='visually-hiden'></span>
            </div>
        </div>
    )
}

export default Loading