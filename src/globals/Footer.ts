import { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
    slug: 'footer',
    fields: [
        {
            name: 'brand',
            label: 'Brand',
            type: 'text',
        },
        {
            name: 'contactInfo',
            label: 'Contact Info',
            type: 'group',
            fields: [
                {
                    name: 'sectionText',
                    label: 'Section Text',
                    type: 'text'
                },
                {
                    name:'address',
                    label: 'Address',
                    type: 'group',
                    fields: [
                        {
                            name: 'addressIcon',
                            label: 'Address Icon',
                            type: 'upload',
                            relationTo: 'media'
                        },
                        {
                            name: 'addressText',
                            label: 'Address Text',
                            type: 'text'
                        }
                    ]
                },
                {
                    name: 'contactNum',
                    label: 'Contact Number',
                    type: 'group',
                    fields:[
                        {
                            name: 'contactNumIcon',
                            label: 'Icon',
                            type: 'upload',
                            relationTo: 'media'
                        },
                        {
                            name:'contactNumList',
                            label: 'Contact Number',
                            type: 'array',
                            fields: [
                                {
                                    name: 'number',
                                    label: 'Number',
                                    type: 'text',
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            name: 'ctaBlock',
            label: 'CTA Block',
            type: 'group',
            fields: [
                {
                    name: 'title',
                    type: 'text'
                },
                { 
                    name: 'ctaButtons',
                    label: 'CTA Buttons',
                    type: 'array',
                    fields: [
                        {
                            name: 'Button',
                            label: 'Button Label',
                            type: 'group',
                            fields: [
                                {
                                    name: 'buttonLabel',
                                    label: 'Label',
                                    type: 'text'
                                },
                                {
                                    name: 'link',
                                    label: 'Page Link',
                                    type: 'text'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}