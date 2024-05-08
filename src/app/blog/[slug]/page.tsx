import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'

const page = ({params}:any) => {
  return (
    <div>
        {params.slug}
    </div>
  )
}

export default page