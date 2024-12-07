import React, { Fragment } from "react"
import CoverBlockServer from "@/blocks/CoverBlock/CoverBlockServer"
import ImageBlockServer from "@/blocks/ImageBlock/ImageBlockServer";

type CoverBlock = {
    id?: string; // Optional block ID
    blockName?: string; // Optional block name
    title: string; // Fields specific to the Cover block
    subtitle: string;
    blockType: 'cover'; // Indicates this is a 'cover' block
}

type CustomPageType = {
    id: string;
    name: string;
    slug: string;
    layout?: Array<CoverBlock>;
    updatedAt: string;
    createdAt: string;
}

const blockComponents = {
    cover: CoverBlockServer,
    image: ImageBlockServer,
    // richText: RichTextBlockSer
}

export const NewRenderBlocks: React.FC<{
    blocks: CustomPageType['layout']
}> = (props) => {
    const  {blocks} = props
    const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0
    if (hasBlocks){
        return(
            <div className="grid my-8 gap-y-8">
                {blocks?.map( (block,index) => {
                    const {blockName, blockType} = block
                    if (blockType && blockType in blockComponents){
                        const Block = blockComponents[blockType]

                        if (Block){
                            return(
                                <div className="border border-black">
                                    <Block id={blockName} {...block} />
                                </div>
                            )
                        }
                    }
                })}
            </div>
        )
    }
}