"use client"
import Link from "next/link";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";

import React from "react";
import Blog from "@/types/blog";

interface props{
  data:Blog,
  isCardForShowingFeatures:boolean
}
const CustomCard = ({data,isCardForShowingFeatures}:props) => {
  console.log(data.title)
  return (
    <>
        <Card className="border-none">
      <CardHeader>
        <Image
          className="w-full h-[150px] sm:h-[250px] object-cover rounded-[10px]"
          height={1000}
          width={1000}
          alt=""
          src={"/bg1.png"}
        />
      </CardHeader>
      <div className="h-[130px] sm:h-[150px] relative">
        <CardContent className="flex flex-col items-start gap-4 justify-between p-6">
          <Link
            href={`blog/${data.title.toLowerCase().replaceAll(" ","-")}`}
            className=" text-[24px] sm:text-3xl font-semibold absolute top-0 overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {data.title}
          </Link>
        </CardContent>
        <CardFooter className="absolute bottom-0">
          <span className="text-gray-200">
            {data?.date} • {data?.author}
          </span>
        </CardFooter>
      </div>
    </Card>
    { isCardForShowingFeatures &&
    
            <Card className="border-none">
      <CardHeader>
        <Image
          className="w-full h-[150px] sm:h-[250px] object-cover rounded-[10px]"
          height={1000}
          width={1000}
          alt=""
          src={"/bg1.png"}
        />
      </CardHeader>
      <div className="h-[130px] sm:h-[150px] relative">
        <CardContent className="flex flex-col items-start gap-4 justify-between p-6">
          <Link
            href={`blog/${data.title.toLowerCase().replaceAll(" ","-")}`}
            className=" text-[24px] sm:text-3xl font-semibold absolute top-0 overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            hiii
          </Link>
        </CardContent>
        <CardFooter className="absolute bottom-0">
          <span className="text-gray-200">
            hii
          </span>
        </CardFooter>
      </div>
    </Card>
      
    }
    </>
  );
};

export default CustomCard;
