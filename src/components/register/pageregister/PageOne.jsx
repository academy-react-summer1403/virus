import React, { useState,useEffect } from "react";
import { Form,Field, Formik } from "formik";
import { HeaderReg } from "../HeaderReg";
import regone from "../../../assets/img/logreg/regone.png";
import phone from "../../../assets/img/logreg/phone.png";
const PageOne =({step})=>{
    return(
<>
<div className="lg:w-[38rem] md:w-[38rem] sm:w-[38rem] lg:block sm:block md:block xs:hidden h-[100%] bg-[#A4F6DE] rounded-l-[20px] "> <img src={regone} className="lg:w-[80%] lg:h-[80%] lg:pt-[10%] lg:pl-[18%]
  md:w-[80%] md:h-[80%] md:pt-[10%] md:pl-[18%]
  sm:w-[80%] sm:h-[80%] sm:pt-[10%] sm:pl-[18%]
  xs:hidden lg:block sm:block md:block
  "></img></div>
 <div className="  lg:w-[32rem] lg:h-[100%] sm:h-[100%] md:h-[100%] xs:h-[500px] m-auto md:w-[32rem]  lg:mt-[0] sm:mt-[0] md:mt-[0] ms:w-[32rem] xs:w-[32rem] sm:rounded-r-[20px] md:rounded-r-[20px]
       lg:rounded-r-[25px] xs:rounded-[25px] xs:mt-[10%] bg-[#fbf6f6]">
         <HeaderReg/>
 <div className="lg:w-[80%] m-auto md:w-[80%] sm:w-[80%] xs:w-[80%] ">
   
<Formik> 
                
                <Form>
               < div dir="rtl" className=" w-[100%] mt-[9%] ">
               

                   <Field name="phoneOrGmail" placeholder=" شماره موبایل" className=" md:w-[100%] sm:w-[100%] lg:w-[100%]  h-[50px] rounded-[15px] xs:w-[100%] text-[15px]
                     border-[2px] border-[#158B68]  pr-[2rem]  pb-[0.3rem]
                        
                   " />
                      <img src={phone}className="absolute top-[29%] right-[6%] w-[15px] h-[18px]  xs:hidden md:block sm:block lg:block"></img>
                           <button   className="md:w-[100%] sm:w-[100%] lg:w-[100%] mt-[27%] h-[50px] bg-[#158B68] xs:w-[100%]  text-white text-[18px] font-medium text-center rounded-[10px] leading-10"
        
      
   onClick={step}   >ادامه</button>
  <button className="md:w-[100%] sm:w-[100%] lg:w-[100%] mt-[2%] h-[50px] border-[2px] border-[#158B68] text-[#22445D] text-[16px] font-medium text-center xs:w-[100%]  rounded-[10px] leading-10 ">بازگشت به صفحه اصلی</button>
      <div className="md:w-[100%] sm:w-[100%] lg:w-[100%] h-[50px] text-right  text-[15px] text-[#22445D] xs:w-[100%] underline mt-[4%]">من از قبل عضو هستم</div>
               </div>
              
                   
                </Form>
            </Formik>
            </div>
            </div>
</>
    )
}
export{PageOne};