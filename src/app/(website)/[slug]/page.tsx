import React, {cache} from 'react'
import type { Page as PageType} from '@/payload-types'
import { getPayloadHMR } from "@payloadcms/next/utilities"
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { NewRenderBlocks } from '@/utils/NewRenderBlocks'





const queryPageBySlug = cache(async ( {slug}: {slug:string}) => {
    const parsedSlug = decodeURIComponent(slug)
    const payload = await getPayloadHMR({config})
    const result = await payload.find({
        collection: 'pages',
        limit: 1,
        where: {
            slug:{
                equals: parsedSlug,
            },
        },
    })
    return result.docs?.[0] || null
})

export default async function Page({params: {slug = 'index'}}){
    let page: PageType | null
    page = await queryPageBySlug({
        slug,
    })

    if (!page){
        return notFound()
    }
    return(
        <div>
            <div>
                Defaultasdas
            </div>
            <NewRenderBlocks blocks={page.layout}/>
            {/* {params} */}
            
        </div>
    )
}