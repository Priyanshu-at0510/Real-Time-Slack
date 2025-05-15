"use client";

import { SignInFlow } from "../types";
import{SignInCard} from "./sign-in-card"
import{SignUpCard}from "./sign-up-cars"
import { useState } from "react";
export const AuthScreen =()=>{
    const [state,setState]=useState<SignInFlow>("signIn")
    return (
        <div className="flex h-full justify-center items-center bg-[#5C3B58]">
         <div className="md:h-auto md:w-[420px]">
            {state==="signIn"?<SignInCard/>:<SignUpCard/>}
         </div> 
        </div>
    );
}