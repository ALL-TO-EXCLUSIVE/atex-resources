"use client"
import React from "react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CustomCard from "./Card";
type blog = {
  title: string;
  content:string;
  date:string;
  author:string;
}
interface props{
  blogs:Array<blog>
}

const CardCarousel = ({blogs}:props) => {

  return (
  
    <div className="w-full px-8 sm:p-0">
     <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 2000,
          loop:true
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {blogs.map((blog, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <CustomCard data={blog} isCardForShowingFeatures={false} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>

  );
};

export default CardCarousel;
