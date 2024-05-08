import CardCarousel from '@/components/CardCarousel'
import CategoryList from '@/components/CategoryList';
import PageWrapper from '@/components/PageWrapper'
import React from 'react'
import { data } from '@/utlis/data';


const Blog = () => {
  return (
    <PageWrapper>
        <div className='flex flex-col gap-20 py-[10vh]'>
          <CategoryList/>
        <div>
          <h1 className='text-5xl'>Latest Posts</h1>
        <CardCarousel blogs={data}/>
        </div>
        <div>
          <h1 className='text-5xl'>Semester 1</h1>
        <CardCarousel blogs={data}/>
        </div>
        <div>
          <h1 className='text-5xl'>Semester 2</h1>
        <CardCarousel blogs={data}/>
        </div>
        <div>
          <h1 className='text-5xl'>Semester 3</h1>
        <CardCarousel blogs={data}/>
        </div>
        <div>
          <h1 className='text-5xl'>Semester 4</h1>
        <CardCarousel blogs={data}/>
        </div>
        <div>
          <h1 className='text-5xl'>Semester 5</h1>
        <CardCarousel blogs={data}/>
        </div>
        <div>
          <h1 className='text-5xl'>Semester 6</h1>
        <CardCarousel blogs={data}/>
        </div>
        </div>
    </PageWrapper>
  )
}

export default Blog