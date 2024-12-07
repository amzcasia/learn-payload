import CoverBlockServer from "@/blocks/CoverBlock/CoverBlockServer"
import React, { Fragment } from "react"
import { Page } from '@/payload-types'

const blockComponents = {
    cover: CoverBlockServer
}

export const RenderBlocks: React.FC<{
    blocks: Page['layout'][]
}> = (props) => {
    const  {blocks} = props
    const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

    if (hasBlocks){
        return(
            <Fragment>
                {blocks.map((block, index) => {
                    const {blockName, blockType} = block

                    if (blockType && blockType in blockComponents){
                        const Block = blockComponents[blockType]

                        if (Block){
                            return(
                                <div>
                                    <Block id={blockName} {...block} />
                                </div>
                            )
                        }
                    }
                })}
            </Fragment>
        )
    }
}