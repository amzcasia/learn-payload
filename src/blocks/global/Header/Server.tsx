import { getPayloadHMR } from "@payloadcms/next/utilities";
import React from "react";
import config from '@payload-config'
import Image from "next/image";
import Link from "next/link";

export default async function HeaderServer(){

    const payload = await getPayloadHMR({config})
    const header = await payload.findGlobal({
        slug: 'header',

    })

    return(
        <div className="flex justify-between">
            <div className="relative">
                Insert Logo Here
                {/* <Image src={header.logo.url} alt={'logoimage'} fill className="top-0 left-0 object-contain" /> */}
            </div>
            <ul className="flex gap-x-1">
                {header.nav.map((item,index) => {
                    return(
                        <li>
                            <Link key={index} href={item.link} className="">{item.label}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}