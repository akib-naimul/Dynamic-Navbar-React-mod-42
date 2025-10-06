import React from 'react';

const PricingCard = ({pricing}) => {
    console.log(pricing)
    return (
        <div className='border bg-amber-950 p-5 flex flex-col'>
            {/* card header */}
            <div>
                <h1 className='text-4xl'> {pricing.planName} </h1>
                <h3 className='text-2xl'>{pricing.price}</h3>
            </div>
            {/* card body */}
            <div className='m-4 p-4 flex-1'>
                <p>{pricing.features}</p>
            </div>
            <button className="btn w-full">Subscribe</button>
            
        </div>
    );
};

export default PricingCard;