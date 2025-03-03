"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Code, Monitor, MonitorCheck, SmartphoneIcon } from "lucide-react";
import { useScreen } from "@/context/ScreenContext";

function EditorHeader() {
  const {setScreen} = useScreen()
  return (
    <div className="p-4 shadow-sm flex justify-between items-center">
      <Image src={"/logo.svg"} width={200} height={160} alt="logo" />
      <div className="flex gap-2" > 
        <Button className="hover:text-purple-600" onClick={()=>setScreen("desktop")} variant={"ghost"}>
          <Monitor/>
          Desktop
        </Button>
        <Button className="hover:text-purple-600" variant={"ghost"} onClick={()=>setScreen("mobile")}>
          <SmartphoneIcon/>
          Mobile
        </Button>
      </div>
      <div className="flex gap-2">
        <Button variant={"ghost"} className="cursor-pointer hover:text-purple-600">
          <Code className="" />
        </Button>
        <Button className="hover:bg-purple-600 hover:text-white" variant={'outline'}>
          Send Test Email
        </Button>
        <Button className="bg-purple-600">Save Template</Button>
      </div>
    </div>
  );
}

export default EditorHeader;
