import { GlobalConfig } from "payload";

export const Header: GlobalConfig = {
    slug: 'header',
    fields: [
        {
            name: 'brand',
            label: 'Brand',
            type: 'group',
            fields: [
                {
                    name: 'name',
                    label: 'Brand Name',
                    type: 'text',
                    required: true
                },
                {
                    name: 'logo',
                    label: 'Logo',
                    type: 'upload',
                    relationTo: 'media'
                },
            ]
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
                {
                    name: 'subpages',
                    label: 'Subpages',
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
        },
        {
            name: 'callToAction',
            // label: 'Call to Action Text',
            type: 'group',
            fields: [
                {
                    name: 'ctaText',
                    label: 'CTA Text',
                    type: 'text'
                },
                {
                    name: 'link',
                    label: 'Link',
                    type: 'text',
                }

            ]
        }
    ]
}