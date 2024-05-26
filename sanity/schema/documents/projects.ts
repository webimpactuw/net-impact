import { AiFillProject } from "react-icons/ai";

export const projectsType = {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    icon: AiFillProject,
    fields: [
        {
            name: 'name',
            description: 'The name of the project',
            type: 'string',
            validation: (rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => 
                rule.required().error(`Required to generate a page on the website`),
        },
        {
            name: 'slug',
            description: 'Slug (URL ending) of the webpage for this event',
            type: 'slug',
            group: 'info',
            validation: (rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => 
                rule.required().error(`Required to generate a page on the website`),
        },
        {
            name: 'learnmore',
            description: 'The text shown on the Projects hub page (i.e. "Learn more about ...")',
            type: 'string',
        },
        {
            name: 'projectImage',
            description: 'The image shown on the page for the project',
            type: 'image'
        },
        {
            name: 'description',
            description: 'A description of the project',
            type: 'text',
            validation: (rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => 
                rule.required().error(`Required to generate a page on the website`),
        },
        {
            name: 'joinlink',
            description: 'The link to join/get involved with the project',
            type: 'url',
        },
        {
            name: 'information',
            description: 'Any relevant information for the project, represented as a series of sections',
            type: 'array',
            of: [{
                name: 'section',
                type: 'object',
                fields: [
                    {
                        name: 'header',
                        description: 'The header for the section',
                        type: 'string',
                        validation: (rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => 
                            rule.required().error(`Headers are required for sections`),
                    },
                    {
                        name: 'content',
                        description: 'The content in this section',
                        type: 'array',
                        of: [{type: 'block'}],
                    }
                ]
            }]
        },
    ]
}
