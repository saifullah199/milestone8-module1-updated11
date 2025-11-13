import Features from "./Features";


const PricingCard = ({pricing}) => {
    console.log(pricing)
    const {id, name, price, description, features} =pricing

    // const featureList =  features.map((feature,index) => <Features 
    //                         key={index} 
    //                         feature={feature} ></Features>)
                

    return (
        <div className="border bg-amber-600 rounded-2xl p-4 text-white">
            {/* card header */}
            <div>
                <h2 className="text-5xl">{name}</h2>
                <h3 className="text-3xl">{price}</h3>
            </div>
            {/* card body */}
            <div className="border bg-amber-300 rounded-2xl">
                <p> {description}    </p>
                {
                    features.map((feature,index) => <Features 
                            key={index} 
                            feature={feature} ></Features>)
                }
                
                
            </div>
        </div>
    );
};

export default PricingCard;