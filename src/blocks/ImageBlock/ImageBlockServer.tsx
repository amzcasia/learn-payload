import Image from 'next/image'
import React from 'react'

export default function ImageBlockServer({image} : {image: {url: string, alt:string}}) {
  return (
    <div>
        <Image src={image.url} alt={image.alt} width={500} height={500}/>
    </div>
  )
}
