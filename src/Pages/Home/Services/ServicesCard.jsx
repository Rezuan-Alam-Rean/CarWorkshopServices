

const ServicesCard = ({service }) => {

    const {img, title,price} = service;
 
   
        return (
                <div className="max-[350px] md:w-[350px] bg-slate-300/20 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md">
                {/* Card Image */}
                    <img className="w-[350px] h-[190px] bg-gray-400 rounded-2xl" src={img} alt="" />


                    <p className="text-black text-xl font-bold">
                       {title} 
                    
                        </p>
                 
                    
                   
                    <div className="mt-5 flex justify-between items-center font-medium">
                        <h2 className="md:text-xl text-gray-800"> Price $ {price}</h2>
                        <button className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">Add to Cart</button>
                    </div>
                </div>
        );
   
};

export default ServicesCard;