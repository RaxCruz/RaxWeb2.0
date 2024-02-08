import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import { Suspense } from "react";

export function CarouselRaxCourseC() {
  const myArray = [
    {
      title: "Image 1",
      image: "/courseC1.gif",
    },
    {
      title: "Image 2",
      image: "/courseC2.gif",
    },
    {
      title: "Image 3",
      image: "/courseC3.gif"
    },
    {
      title: "Image 4",
      image: "/courseC4.gif"
    },
    {
      title: "Image 5",
      image: "/courseC5.gif"
    },
    {
      title: "Image 5",
      image: "/courseC6.gif"
    },
    {
      title: "Image 5",
      image: "/courseC7.gif"
    },
    {
      title: "Image 5",
      image: "/courseC8.gif"
    },
    {
      title: "Image 5",
      image: "/courseC9.gif"
    },
    {
      title: "Image 5",
      image: "/courseC10.gif"
    },
    {
      title: "Image 5",
      image: "/courseC11.gif"
    },
    {
      title: "Image 5",
      image: "/courseC12.gif"
    },
  ];
  return (
    <Carousel className="w-full max-w-xs mx-auto">
      <CarouselContent>
        {myArray.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="relative">
                <p className="absolute font-['ChenYu'] left-2 top-2 text-[2.5rem]">第<span>{index+1}</span>章</p>
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <Suspense fallback={<div className="skeleton w-[400px] h-[400px]"></div>}>
                  <Image src={item.image} width={400} height={400} alt={item.title}/>
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  </Suspense>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
