import React from "react";
import home from "../assets/img/logreg/home.png";
const HeaderLog =()=>{
    return(
        <>
                <div className="w-[23px] h-[23px] lg:mt-[4%] md:mt-[4%] sm:mt-[4%] xs:mt-[10%] ml-[5%]"><img src={home} className="w-[100%] h-[100%]"></img></div>
                <div className="w-[90%] h-[10%]  text-[23px]  text-right leading-[48px] text-[#22445D] mt-[3%]  ">ورود به سیستم</div>
        </>
    )
}
export {HeaderLog};