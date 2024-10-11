import React from "react";
import { Form,Field, Formik } from "formik";
import forgotone from "../../assets/img/logreg/forgotone.png";
import vector from "../../assets/img/logreg/vector.png";
import { HeaderLog } from "../../common/HeaderLog.jsx";
const PageOne =({step})=>{
    return(
      <>
<div className="lg:w-[38rem] md:w-[38rem] sm:w-[38rem] lg:block sm:block md:block xs:hidden h-[100%] bg-[#A4F6DE] rounded-l-[20px] "> <img src={forgotone} className="lg:w-[80%] lg:h-[80%] lg:pt-[10%] lg:pl-[18%]
  md:w-[80%] md:h-[80%] md:pt-[10%] md:pl-[18%]
  sm:w-[80%] sm:h-[80%] sm:pt-[10%] sm:pl-[18%]
  xs:hidden lg:block sm:block md:block
  "></img></div>
 <div className="  lg:w-[32rem] lg:h-[100%] sm:h-[100%] md:h-[100%] xs:h-[500px] m-auto md:w-[32rem]  ms:w-[32rem] xs:w-[28rem] sm:rounded-r-[20px] md:rounded-r-[20px]
       lg:rounded-r-[25px] xs:rounded-[25px] bg-[#fbf6f6]">

    <HeaderLog/>
    <div className="lg:w-[80%] m-auto md:w-[80%] sm:w-[80%] xs:w-[80%] ">
 <Formik> 
                
                <Form>
            

               <Field dir="rtl"
              name="gmail"
              type="gmail"
              className=" md:w-[100%] sm:w-[100%] lg:w-[100%] h-[50px] rounded-[15px]
                     border-[2px] border-[#158B68]  pr-[2.3rem] xs:w-[100%] text-[15px] mt-[9%] pb-[0.3rem]
                        "
                        placeholder="ایمیل"        
            />
<img src={vector} className="absolute top-[29.5%] right-[6%] w-[15px] h-[15px]  xs:hidden md:block sm:block lg:block"></img>
          
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
export{PageOne};