import React, { useState,useEffect } from "react";
import { PageOne } from "./pagelogin/PageOne.jsx";
import { PageTwo } from "./pagelogin/PageTwo.jsx";

const Loginn =()=>{
    const [step, setStep] = useState(1);
    const stepCounter = () => {
        setStep(step + 1);
      };
  const gotoleft = () => {
  
          setPage((currPage) => (currPage - 1));
  
  };
    return(
        <div className="lg:relative md:relative sm:relative w-[1535px] h-[730px]   m-auto">
            <div className="lg:w-[70rem] sm:w-[70rem] md:w-[70rem] lg:h-[80%] md:h-[80%] sm:h-[80%] xs:h-[80%] bg-[#fbf6f6] xs:w-[30rem]  lg:absolute lg:top-[10%] lg:left-[12%] lg:flex
 md:flex
   sm:flex
md:absolute md:top-[7%] md:left-[12%]
sm:absolute sm:top-[7%] sm:left-[12%]
xs:absolute xs:top-[10%] xs:left-[90%] 
rounded-[20px] shadow-2xl
xs:border-[1px] xs:border-[#22445D] md:border-none sm:border-none lg:border-none 
">
 {step == 1 ? (
        <PageOne step={stepCounter} back={gotoleft} />
      ) : step == 2 ? (
        <PageTwo
        
          step={stepCounter}
          back={gotoleft} 
        />
      ): null} 
</div>
            </div>
    )
}
export{Loginn};