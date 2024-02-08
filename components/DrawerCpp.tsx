

import * as React from "react"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { CarouselRaxCourseA } from "./CarouselRaxCourseA"
import { CarouselRaxCourseC } from "./CarouselRaxCourseC"

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

export function DrawerCpp() {

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full h-full bg-transparent hover:bg-transparent"></Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle><p className="text-[2rem]">C/C++ 12章 打天下基礎</p></DrawerTitle>
            <DrawerDescription>搭配線上評測題目</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <div className="flex-1 text-center">
              <div className="text-7xl font-bold tracking-tighter  md:w-full w-[80%] mx-auto">
                  <CarouselRaxCourseA/>
                </div>
              </div>
       
            </div>
            <div className="mt-1 h-[30px]">
              
            </div>
          </div>
          <DrawerFooter>
           
            <DrawerClose asChild>
              <Button >Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
