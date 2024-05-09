import { data } from '@/utlis/data'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'

const page = ({params}:any) => {
  const blog = data.find((blog)=>{
    return blog.title.toLowerCase().toString() === params.slug.toString().toLowerCase().replaceAll("-"," ")})
  console.log(blog)
  return (
    <div className='px-24 font-roboto py-24 flex flex-col gap-16 text-[#fafafa]' >
      <div className='flex flex-col gap-[8px]'>
      <h1 className='text-[56px] font-semibold' > {blog?.title} </h1>
        <span className='text-[16px]'> {blog?.date} • {blog?.author} </span>
      </div>
      <div>
        <article className=" text-[16px] leading-7 -tracking-normal">
          {blog?.content}
        </article>
      </div>
    </div>
  )
}


export default page