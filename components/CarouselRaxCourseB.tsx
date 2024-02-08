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

export function CarouselRaxCourseB() {
  const myArray = [
    {
      title: "Image 1",
      image: "/courseB1.gif",
    },
    {
      title: "Image 2",
      image: "/courseB2.gif",
    },
    {
      title: "Image 3",
      image: "/courseB3.gif"
    },
    {
      title: "Image 4",
      image: "/courseB4.gif"
    },
    {
      title: "Image 5",
      image: "/courseB5.gif"
    },
    {
      title: "Image 5",
      image: "/courseB6.gif"
    },
    {
      title: "Image 5",
      image: "/courseB7.gif"
    },
    {
      title: "Image 5",
      image: "/courseB8.gif"
    },
    {
      title: "Image 5",
      image: "/courseB9.gif"
    },
    {
      title: "Image 5",
      image: "/courseB10.gif"
    },
    {
      title: "Image 5",
      image: "/courseB11.gif"
    },
    {
      title: "Image 5",
      image: "/courseB12.gif"
    },
    {
        title: "Image 5",
        image: "/courseB13.gif"
    },
    {
    title: "Image 5",
    image: "/courseB14.gif"
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
                  <Image src={item.image} width={400} height={400} alt={item.title} loading = 'eager'/>
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
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
