import { FaFacebook } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const Main = () => {
    return (
        <div >
            <div className="flex justify-center">
                <img className="w-fit h-28" src="https://i.ibb.co/QvNJ4H1/logo.png" alt="" />
            </div>
         <div className="flex flex-col md:flex-row-reverse mt-10 justify-between items-center">
            
            <div>
                <p className="font-bold">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
            <ul className="list-disc ps-10">
                
                <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li>C.R.I. 'is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                
            </ul>
            <img src="https://i.ibb.co/1mQvNfR/2.png" alt="" />
                <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
            <img className="h-screen w-1/2" src="https://i.ibb.co/R3Y46T9/1.png" alt="" />
            </div> 
            <p className="my-10">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
</p>  
<div className="flex flex-col justify-center items-center">
<img className="flex justify-center w-9/12" src="https://i.ibb.co/gjpQSFP/3.png" alt="" />
<p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
</div>
<hr className="border-red-800 font-bold mt-5" />
<p className="text-center font-bold my-3">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
      
      <p className="text-sm text-center">CHEMICALS & <span className="border-r-2 border-red-800 pr-2">PROCESS</span> <span className="border-r-2 border-red-800 pr-2">POWER</span> WATER & <span className="border-r-2 border-red-800 pr-2">WATER & WASTE WATER</span> OILS & <span className="border-r-2 border-red-800 pr-2">GAS</span> <span className="border-r-2 border-red-800 pr-2">PHARMA</span> <span className="border-r-2 border-red-800 pr-2">SUGARS & DISTILLERIES</span> <span className="border-r-2 border-red-800 pr-2">PAPER & PULP</span> <span className="border-r-2 border-red-800 pr-2">MARINE & DEFENCE</span> <span className="border-r-2 border-red-800 pr-2">METAL & MINING</span> <span className="border-r-2 border-red-800 pr-2">FOOD & BEVERAGE</span> <br /> <span className="border-r-2 border-red-800 pr-2">PETROCHEMICAL & REFINERIES</span> <span className="border-r-2 border-red-800 pr-2">SOLAR</span> <span className="border-r-2 border-red-800 pr-2">BUILDING</span> <span className="border-r-2 border-red-800 pr-2">HVAC</span> <span className="border-r-2 border-red-800 pr-2">FIRE FIGHTING</span> AGRICULTURE & RESIDENTIAL</p>
        
       <div className="flex pt-5 justify-around h-32 bg-red-700 mt-5">
        <div className="flex gap-1 items-baseline ">
            <IoCall className="text-red-700 p-1 h-8 w-8 rounded-full bg-white"></IoCall>
            <p className="text-white ">Toll fee <span className="font-bold">1800 200 1234</span></p>
        </div>
        <div className="flex gap-1 items-baseline">
            <FaFacebookF className="p-1 h-8 w-8 rounded-full text-red-700 bg-white"></FaFacebookF>
            <p className="text-white">www.facebook.com/cripumps</p>
        </div>
        <div className="flex gap-1 items-baseline">
            <BsGlobe2 className="h-8 w-8 rounded-full text-red-700 bg-white"></BsGlobe2>
            <p className="text-white">www.crigroups.com</p>
        </div>
        </div> 
        
        
        </div>
    );
};

export default Main;