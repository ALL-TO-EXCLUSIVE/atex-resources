import React from 'react'

const PageWrapper = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='px-10  sm:px-24'>
        {children}
    </div>
  )
}

export default PageWrapper