import { use } from "react";
import PricingCard from "./PricingCard/PricingCard";
import DaisyPricing from "./DaisyPricing/DaisyPricing";


const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise)
    

    return (
        <div>
            <h2>Get our Membership</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> 
                {/* {
                    pricingData.map(pricing => <PricingCard 
                        key={pricing.id} 
                        pricing={pricing}></PricingCard>)
                } */}

                {
                    pricingData.map(pricing => <DaisyPricing 
                        key={pricing.id} 
                        pricing={pricing}></DaisyPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;