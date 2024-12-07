import { getPayloadHMR } from "@payloadcms/next/utilities";
import React from "react";
import config from '@payload-config'
import Link from "next/link";

export default async function HeaderServer(){

    const payload = await getPayloadHMR({config})
    const header = await payload.findGlobal({
        slug: 'header',

    })

    return(
        <div className="grid md:flex md:justify-between h-[100vh] md:h-auto">
            <div className="relative">
                <div className="p-5 text-xl font-bold">
                    {header.brand.name}
                </div>
                {/* <Image src={header.logo.url} alt={'logoimage'} fill className="top-0 left-0 object-contain" /> */}
            </div>
            <div className="flex">
                <ul className="px-5 text-3xl md:text-lg md:flex md:gap-x-1">
                    {header.nav.map((item,index) => {
                        return(
                            <li>
                                <Link key={index} href={item.link} className="">{item.label}</Link>
                            </li>
                        )
                    })}
                </ul>
                <div className="hidden md:flex">
                    <Link href={header.callToAction.link}>
                        {header.callToAction.ctaText}
                    </Link>
                </div>
            </div>
            <div className="flex md:hidden">
                <Link href={header.callToAction.link}>
                    {header.callToAction.ctaText}
                </Link>
            </div>
        </div>
    )
}