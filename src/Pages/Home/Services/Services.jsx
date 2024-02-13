
import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {

const [services , setServices] = useState([]);

useEffect(()=>{
    fetch("services.json")
    .then(res => res.json())
    .then(data => setServices(data))


},[])

console.log(services);


    return (
        <div>
            <div className="text-center mt-10">
                <h1 className="text-4xl text-orange-600 font-bold">Our Service Area</h1>
                <h3 className="text-gray-500 w-[560px] mt-5 mb-5 m-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </h3>
            </div>

            <div className= " grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-5 mb-10">
                {

                    services.map(service => <ServicesCard 
                       key={service._id}

                       service={service}
                        
                        
                        ></ServicesCard>)
                }
            </div>
                


        </div>
    );
};

export default Services;