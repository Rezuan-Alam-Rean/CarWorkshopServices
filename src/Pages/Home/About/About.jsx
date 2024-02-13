/* eslint-disable react/no-unescaped-entities */

import img1 from "../../../assets/assets/images/about_us/person.jpg"
import img2 from "../../../assets/assets/images/about_us/parts.jpg"

const About = () => {
    return (

        <div className="md:mb-36 lg:mb-2">
            <h2 className="text-orange-600  text-4xl mt-10 text-center font-bold self-stretch max-md:max-w-full">About Us</h2>
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">

                <div className=" relative md:h-[550px] h-[400px]  p-5 md:w-1/2  ">
                    <img src={img1} className="rounded-lg shadow-2xl w-3/4 md:h-96 " />
                    <img src={img2} className="rounded-lg shadow-2xl md:h-72 w-1/2 bottom-24 md:bottom-8 right-5 absolute border-8 border-white  " />

                </div>
                <div className="p-5 md:w-1/2 md:h-[550px]  ">
                   
                    <h1 className="text-neutral-900 text-5xl font-bold self-stretch mt-8 max-md:max-w-full max-md:text-4xl">We are qualified & of experience in this field</h1>
                    <p className="text-neutral-500 text-base leading-8 capitalize self-stretch mt-12 max-md:max-w-full max-md:mt-10">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="text-neutral-500 text-base leading-8 capitalize self-stretch mt-9 max-md:max-w-full">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="btn mt-5  btn-outline btn-error"> Get More Info</button>
                </div>
            </div>


            <div>




            </div>
        </div>

        </div>



    );
};

export default About;

