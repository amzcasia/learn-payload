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
            // admin: {
            //     position: 'sidebar'
            // }
        }

        // {
        //     name: 'slug',
        //     label: 'Slug',
        //     type: 'text',
        //     admin: {
        //         position: 'sidebar',
        //     },
        //     required: true,
        // },
        // {
        //     name: 'layout',
        //     label: 'Layout',
        //     type: 'blocks',
        //     blocks: []
        // }
        
    ]
}