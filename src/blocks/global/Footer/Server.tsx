import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from '@payload-config'
import React from "react";

export default async function FooterServer(){
    const payload = await getPayloadHMR({config})
    const footer = await payload.findGlobal({
        slug: 'footer',

    })

    return(
        <div>
            <div>
                {footer.brand}
            </div>
            <div>
                <div>
                    <div>
                        {footer.contactInfo?.sectionText}
                    </div>
                    <div>
                        <div>
                            {footer.contactInfo?.address?.addressText}
                        </div>
                        <ul>
                            {footer.contactInfo?.contactNum?.contactNumList?.map((item,index) => {
                                return(
                                    <li key={index}>
                                        {item?.number}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}