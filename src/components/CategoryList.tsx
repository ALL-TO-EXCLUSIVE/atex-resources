import React from 'react'
import { Button } from './ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
]

const CategoryList = () => {
  return (
    <div className='flex gap-5'>

        <Tabs defaultValue="semesters" className="w-[400px]">
  <TabsList>    
    {categories.map((category,index)=>(
        <TabsTrigger value={category.toLowerCase()} key={index}> {category} </TabsTrigger>
            
        ))}
  </TabsList>
  {categories.map((category,index)=>(
            
  <TabsContent value={category.toLowerCase()} key={index}> {category} </TabsContent>
        ))}
</Tabs>

    </div>
  )
}

export default CategoryList