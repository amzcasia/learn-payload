import { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
    slug: 'pages',
    fields: [
        {
            name:'name',
            label: 'slug',
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
            blocks: [{
                slug: 'textBlock',
                labels: {
                    singular: 'Text Block',
                    plural: 'Text Blocks',
                },
                fields: [{
                    name: 'content',
                    label: 'Content',
                    type: 'textarea'
                }]
            }],
        },
        
    ]
}