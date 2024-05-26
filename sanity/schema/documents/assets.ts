import { AiFillFileImage } from "react-icons/ai";

export const assetType = {
    name: 'assets',
    title: 'Assets',
    type: 'document',
    icon: AiFillFileImage,
    groups: [
        {name: 'header', title: 'Header Images'},
        {name: 'value', title: 'Our Values Images'},
        {name: 'misc', title: 'Other Images'},
    ],
    fields: [
        {
            name: 'logo',
            description: 'Logo for Net Impact to be used across the site',
            type: 'image',
            group: 'misc',
            validation: (rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => 
                rule.required().error(`Required to generate a page on the website`),
        },
        {
            name: 'headerImage',
            description: 'Image shown at the top of the homepage',
            type: 'image',
            group: 'header',
        },
        {
            name: 'educationImage',
            description: 'Image shown under the Education box in the "Our Values" section',
            type: 'image',
            group: 'value',
        },
        {
            name: 'activismImage',
            description: 'Image shown under the Activism box in the "Our Values" section',
            type: 'image',
            group: 'value',
        },
        {
            name: 'careerImage',
            description: 'Image shown under the Career Development box in the "Our Values" section',
            type: 'image',
            group: 'value',
        },
        {
            name: 'aboutimg',
            description: 'Image shown at the top of the about page',
            type: 'image',
            group: 'header',
        },
        {
            name: 'teamimg',
            description: 'Image shown at the top of the "Our Team" page',
            type: 'image',
            group: 'header',
        },
        {
            name: 'contactimg',
            description: 'Image shown on the Contacts page',
            type: 'image',
            group: 'header',
        },
        {
            name: 'projectimg',
            description: 'Image shown on homepage in the "See Our Projects" box',
            type: 'image',
            group: 'misc'
        }
    ]
}
