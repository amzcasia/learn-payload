import { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
    slug: 'footer',
    fields: [
        {
            name: 'logo',
            label: 'Logo',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'nav',
            label: 'Navigation',
            type: 'array',
            fields: [
                {
                    name: 'label',
                    label: 'label',
                    type: 'text',
                },
                {
                    name: 'link',
                    label: 'Link',
                    type: 'text',
                },
            ]
        }
    ]
}