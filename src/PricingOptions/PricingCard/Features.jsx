import { UserCheck } from "lucide-react";


const Features = ({feature}) => {
    return (
        <div>
            <p className="flex  p-2"> <UserCheck /> {feature}</p>
        </div>
    );
};

export default Features;