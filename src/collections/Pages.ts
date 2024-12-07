import { Cover } from "@/blocks/CoverBlock/CoverSchema";
import { Image } from "@/blocks/ImageBlock/ImageSchema";
import { RichText } from "@/blocks/RichTextBlock/RichTextSchema";
import { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
    slug: 'pages',
    fields: [
        {
            name:'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name:'slug',
            label:'Slug',
            type: 'text',
            required: true,
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'layout',
            label: 'Layout',
            type: 'blocks',
            blocks: [
                Cover,
                RichText,
                Image,
            ],
        },
        
    ]
}