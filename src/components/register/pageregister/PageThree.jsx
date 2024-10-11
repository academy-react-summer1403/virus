import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { HeaderReg } from "../HeaderReg";
import regthree from "../../../assets/img/logreg/regthree.png";
import vector from "../../../assets/img/logreg/Vector.png";
import phone from "../../../assets/img/logreg/phone.png";
import pass from "../../../assets/img/logreg/pass.png";
import repass from "../../../assets/img/logreg/repass.png";
const PageThree= ({step}) => {

  return (
    <>
    <div className="lg:w-[38rem] md:w-[38rem] sm:w-[38rem] lg:block sm:block md:block xs:hidden h-[100%] bg-[#A4F6DE] rounded-l-[20px] "> <img src={regthree} className="lg:w-[80%] lg:h-[80%] lg:pt-[10%] lg:pl-[18%]
    md:w-[80%] md:h-[80%] md:pt-[10%] md:pl-[18%] 
    sm:w-[80%] sm:h-[80%] sm:pt-[10%] sm:pl-[18%]
    xs:hidden lg:block sm:block md:block
    "></img></div>
   <div className="  lg:w-[32rem] lg:h-[100%] sm:h-[100%] md:h-[100%] xs:h-[500px] m-auto md:w-[32rem] lg:mt-[0]  ms:w-[35rem] xs:w-[30rem] sm:rounded-r-[20px] md:rounded-r-[20px]
   lg:rounded-r-[25px] xs:rounded-[25px]  bg-[#fbf6f6]">
  
      <HeaderReg/>
      <div className="lg:w-[80%] m-auto md:w-[80%] sm:w-[80%] xs:w-[80%] ">
      <Formik
  
      >
        <Form>
        <Field dir="rtl" name="phoneOrGmail" placeholder=" شماره موبایل" className=" md:w-[100%] sm:w-[100%] lg:w-[100%]  h-[50px] rounded-[15px] xs:w-[100%] text-[15px]
                     border-[2px] border-[#158B68]  pr-[2.3rem] mt-[5%] pb-[0.3rem]
                        
                   " />
                   <img src={phone}className="absolute top-[26%] right-[6%] w-[15px] h-[17px]  xs:hidden md:block sm:block lg:block"></img>
        
            <Field dir="rtl"
              name="gmail"
              type="gmail"
              className=" md:w-[100%] sm:w-[100%] lg:w-[100%] h-[50px] rounded-[15px]
                     border-[2px] border-[#158B68]  pr-[2.3rem] xs:w-[100%] text-[15px] mt-[3%] pb-[0.3rem]
                        "
                        placeholder="ایمیل"        
            />
<img src={vector}className="absolute top-[37%] right-[6%] w-[15px] h-[15px]  xs:hidden md:block sm:block lg:block"></img>
            <Field dir="rtl"
              name="password"
               placeholder="رمز عبور"
              className="  md:w-[100%] sm:w-[100%] lg:w-[100%]  h-[50px] rounded-[15px]
                     border-[2px] border-[#158B68] pb-[0.3rem]  mt-[3%] xs:w-[100%] text-[15px] pr-[2.3rem]" 
            />
            <img src={pass}className="absolute top-[48%] right-[6%] w-[15px] h-[15px]  xs:hidden md:block sm:block lg:block"></img>
              <Field
               dir="rtl" xs:hidden md:block sm:block lg:block
              name="password"
               placeholder="تکرار رمز عبور"
              className="  md:w-[100%] sm:w-[100%] lg:w-[100%] h-[50px] rounded-[15px] text-[15px]
                     border-[2px] border-[#158B68]  pb-[0.3rem]  mt-[3%] xs:w-[100%] pr-[2.3rem]"
            />
            <img src={repass}className="absolute top-[58.5%] right-[6%] w-[15px] h-[15px]  xs:hidden md:block sm:block lg:block"></img>
            <div dir="rtl" className="md:w-[100%] sm:w-[100%] lg:w-[100%] h-[50px] xs:w-[100%] ">
                <input type="checkbox" className="pr-[3%] w-[15px] h-[15px] mt-[5%]"></input>
                <span className="text-[#22445D] text-[14px] text-[right] mr-[3%]">من با تمام اظهارات موافقم</span>
            </div>
            <button   className="md:w-[100%] sm:w-[100%] lg:w-[100%] xs:w-[100%]  mt-[7%] h-[50px] bg-[#158B68] text-white text-[18px] font-medium text-center rounded-[10px] leading-10"
        
      
        onClick={step}   >ادامه</button>

        </Form>
      </Formik>
    
      </div>
     </div>
     </>
  );
};

export { PageThree};
