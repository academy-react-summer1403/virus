import React from "react";
import { Form,Field, Formik } from "formik";
import {Timer} from "../../../common/Timer.jsx";
import { HeaderReg } from "../HeaderReg";
import regtwo from "../../../assets/img/logreg/regtwo.png";
import code from "../../../assets/img/logreg/code.png";
const PageTwo =({step})=>{
    return(
      <>
      <div className="lg:w-[38rem] md:w-[38rem] sm:w-[38rem] lg:block sm:block md:block xs:hidden h-[100%] bg-[#A4F6DE] rounded-l-[20px] "> <img src={regtwo} className="lg:w-[80%] lg:h-[80%] lg:pt-[10%] lg:pl-[18%]
      md:w-[80%] md:h-[80%] md:pt-[10%] md:pl-[18%]  xs:pl-[0%] xs:pt-[0%]
      sm:w-[80%] sm:h-[80%] sm:pt-[10%] sm:pl-[18%]
      xs:hidden lg:block sm:block md:block
      "></img></div>
     <div className=" lg:w-[32rem] lg:h-[100%] sm:h-[100%] md:h-[100%] xs:h-[500px]  md:w-[32rem]  ms:w-[32rem] xs:w-[32rem] sm:rounded-r-[20px] md:rounded-r-[20px]
     lg:rounded-r-[20px] xs:rounded-[20px]  bg-[#fbf6f6]">
  
        <HeaderReg/>
        <div className="lg:w-[80%] m-auto md:w-[80%] sm:w-[80%] xs:w-[80%]">
        <Formik
       
        >
           <Form>
          
                       <Field name="Code" dir="rtl" placeholder="کدتایید"  className="md:w-[100%] sm:w-[100%] lg:w-[100%]  h-[50px] rounded-[15px] xs:w-[100%] text-[15px]
                     border-[2px] border-[#158B68]  pr-[2rem]  pb-[0.3rem]
                       "
                       />
                         <img src={code}className="absolute top-[23%] right-[6%] w-[15px] h-[18px]  xs:hidden md:block sm:block lg:block"></img>
              <div dir="rtl" className="mt-[10px] lg:mr-[25px] sm:mr-[25px] md:mr-[25px] xs:w-[100%] ">
           <Timer />
        </div>
        <button   className="md:w-[100%] sm:w-[100%] lg:w-[100%] xs:w-[100%] mt-[27%] h-[50px] bg-[#158B68] text-white text-[18px] font-medium text-center rounded-[10px] leading-10"
        
      
        onClick={step}   >ادامه</button>
       <button className="md:w-[100%] sm:w-[100%] lg:w-[100%] mt-[2%] xs:w-[100%] h-[50px] border-[2px] border-[#158B68] text-[#22445D] text-[16px] font-medium text-center  rounded-[10px] leading-10 "> بازگشت به صفحه قبل</button>
   
                    
           </Form>
        </Formik>
      
     </div>
     </div>
     </>

    )
}
export{PageTwo};