import React from "react";
import { Form,Field, Formik } from "formik";
import forgottwo from "../../assets/img/logreg/forgottwo.png";
import home from "../../assets/img/logreg/home.png";
import pass from "../../assets/img/logreg/pass.png";
import repass from "../../assets/img/logreg/repass.png";
const PageTwo =({step})=>{
    return(
      <>
           <div className="lg:w-[38rem] md:w-[38rem] sm:w-[38rem] lg:block sm:block md:block xs:hidden h-[100%] bg-[#A4F6DE] rounded-l-[20px] "> <img src={forgottwo} className="lg:w-[80%] lg:h-[80%] lg:pt-[10%] lg:pl-[18%]
      md:w-[80%] md:h-[80%] md:pt-[10%] md:pl-[18%] 
      sm:w-[80%] sm:h-[80%] sm:pt-[10%] sm:pl-[18%]
      xs:hidden lg:block sm:block md:block
      "></img></div>
     <div className=" lg:w-[32rem] lg:h-[100%] sm:h-[100%] md:h-[100%] xs:h-[500px] m-auto md:w-[32rem]  ms:w-[32rem] xs:w-[32rem] sm:rounded-r-[20px] md:rounded-r-[20px]
     lg:rounded-r-[25px] xs:rounded-[25px]  bg-[#fbf6f6]">

 <div className="w-[23px] h-[23px] lg:mt-[4%] md:mt-[4%] sm:mt-[4%] xs:mt-[10%] ml-[5%]"><img src={home} className="w-[100%] h-[100%]"></img></div>
 <div className="w-[90%] h-[10%]  text-[23px]  text-right leading-[48px] text-[#22445D] mt-[3%] ">تغییر رمز</div>
 <div className="lg:w-[80%] m-auto md:w-[80%] sm:w-[80%] xs:w-[80%]">
        <Formik
       
        >
           <Form>
          
                       <Field name="password"  dir="rtl" placeholder="رمز عبور"  className="md:w-[100%] sm:w-[100%] lg:w-[100%]  h-[50px] rounded-[15px] xs:w-[100%]
                     border-[2px] border-[#158B68]  pr-[2.3rem]  pb-[0.3rem] mt-[9%] text-[15px]
                       "
                       />
                         <img src={pass} className="absolute top-[29%] right-[6%] w-[15px] h-[18px]  xs:hidden md:block sm:block lg:block"></img>
                           <Field name="repass"  dir="rtl" placeholder="تکرار رمز عبور"  className=" md:w-[100%] sm:w-[100%] lg:w-[100%] h-[50px] rounded-[15px] text-[15px]
                     border-[2px] border-[#158B68]  pb-[0.3rem]  mt-[3%] xs:w-[100%] pr-[2.3rem]"
            />
            <img src={repass}className="absolute top-[40%] right-[6%] w-[15px] h-[15px]  xs:hidden md:block sm:block lg:block"></img>
       
        <button   className="md:w-[100%] sm:w-[100%] lg:w-[100%] xs:w-[100%]  mt-[24%] h-[50px] bg-[#158B68] text-white text-[18px] font-medium text-center rounded-[10px] leading-10"
        
      
        onClick={step} >تایید</button>
       
   
                    
           </Form>
        </Formik>
      
     </div>

    </div> 
      </>
    )
}
export{PageTwo};