import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
    // console.log(pricingData) 
    return (
        // <div>
        //     <h2 className='text-5xl mb-5'>Get our MemberShip</h2>
        //     <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        //         {pricingData.map(pricing => <PricingCard key={pricing.price} pricing={pricing}></PricingCard> )}
        //     </div>
        // </div>
        <div>
            {
                pricingData.map(pricing => <DaisyPricingCard key={pricing.id} pricing={pricing}></DaisyPricingCard>)
            }
        </div>
    );
};

export default PricingOptions;