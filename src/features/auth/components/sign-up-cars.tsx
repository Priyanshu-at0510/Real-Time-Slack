import { Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { SignInFlow } from "../types";
import { useState } from "react";
interface SignUpCardProps{
  setState :(state:SignInFlow)=>void;
};
export const SignUpCard=({setState}:SignUpCardProps)=>{
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword ,setConfirmPassword]=useState("");
    return(
      <Card className="w-full h-full p-8">
        <CardHeader className="px-0 pt-0">
          <CardTitle>
            Sign Up To continue
          </CardTitle>
        </CardHeader>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
        <CardContent className="space-y-5 px-0 pb-0">
          <form className="space-y-2.5">
            <Input
              disabled={false}
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              placeholder="Email"
              type="email"
              required

            />
            <Input
              disabled={false}
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              placeholder="Password"
              type="password"
              required

            />
            <Input
              disabled={false}
              value={confirmPassword}
              onChange={(e)=>{setConfirmPassword(e.target.value)}}
              placeholder="Confirm password"
              type="password"
              required

            />
            <Button
              type="submit" className="w-full" size="lg" disabled={false}>
              Continue
            </Button>
          </form>
          <Separator/>
          <div className="flex flex-col gap-y-2.5">
            <Button disabled={false} onClick={()=>{}} variant="outline" size="lg" className="w-full relative" >
              <FcGoogle className="size-5 absolute top-2.5 left-2.5"/>
              Continue with Google
            </Button>
            <Button disabled={false} onClick={()=>{}} variant="outline" size="lg" className="w-full relative" >
              <FaGithub className="size-5 absolute top-2.5 left-2.5"/>
              Continue with GitHub
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
             Already ahve an account?<span onClick={()=>setState("signIn")} className="text-sky-700 hover:underline cursor-pointer ml-0.5">Sign In</span>
          </p>
        </CardContent>
      </Card>
    );
};