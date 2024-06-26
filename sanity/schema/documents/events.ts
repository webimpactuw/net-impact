import { SanityDocument } from "next-sanity";
import { AiFillCalendar } from "react-icons/ai";

export const eventsType = {
    name: 'event',
    title: 'Event',
    type: 'document',
    icon: AiFillCalendar,
    groups: [
        {name: 'info', title: 'Info'},
        {name: 'description', title: 'Description'},
        {name: 'images', title: 'Images'}
    ],
    fields: [
        {
            name: 'name',
            description: 'The name of the event',
            type: 'string',
            group: 'info',
            validation: (rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => 
                rule.required().error(`Required to generate a page on the website`),
        },
        {
            name: 'shortName',
            description: 'Shorter name of the event, used in the navbar',
            type: 'string',
            group: 'info',
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
            name: 'pastEvent',
            description: 'Whether the event is an upcoming or a past event',
            type: 'boolean',
            group: 'info'
        },
        {
            name: 'type',
            description: 'Whether the event is reoccuring, the general time, etc. (i.e. "Reoccuring Spring Event")',
            type: 'string',
            group: 'info',
            hidden: ({value, document}: {value: unknown, document: SanityDocument}) => document?.pastEvent,
            validation: (rule: { custom: (arg0: (value: any, context: any) => true | "Required to generate a page on the website") => any; }) => 
                rule.custom((value, context) => {
                    if (!context?.document?.pastEvent) {
                        if (value) {
                            return true;
                        }
                        return 'Required to generate a page on the website'
                    }
                    return true
                }),
        },
        {
            name: 'status',
            description: 'The message displayed on the page for the event (i.e. "Upcoming: The event will return next spring")',
            type: 'string',
            group: 'info',
            hidden: ({value, document}: {value: unknown, document: SanityDocument}) => document?.pastEvent,
        },
        {
            name: 'time',
            description: 'The general time of the event, formatted as "[Season] [Year]" (i.e. "Spring 2023")',
            type: 'string',
            group: ['info', 'description'],
            hidden: ({value, document}: {value: unknown, document: SanityDocument}) => document?.pastEvent,
            validation: (rule: { custom: (arg0: (value: any, context: any) => true | "Required to generate a page on the website") => any; }) => 
                rule.custom((value, context) => {
                    if (!context?.document?.pastEvent) {
                        if (value) {
                            return true;
                        }
                        return 'Required to generate a page on the website'
                    }
                    return true
                }),
        },
        {
            name: 'descriptionHeader',
            description: 'The header for the description of the event',
            type: 'string',
            group: 'description',
            hidden: ({value, document}: {value: unknown, document: SanityDocument}) => document?.pastEvent,
            validation: (rule: { custom: (arg0: (value: any, context: any) => true | "Required to generate a page on the website") => any; }) => 
                rule.custom((value, context) => {
                    if (!context?.document?.pastEvent) {
                        if (value) {
                            return true;
                        }
                        return 'Required to generate a page on the website'
                    }
                    return true
                }),
        },
        {
            name: 'description',
            description: 'The description of the event, to be shown on the page for the event',
            type: 'array',
            group: 'description',
            of: [{type: 'block'}],
            validation: (rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => 
                rule.required().error(`Required to generate a page on the website`),
        },
        {
            name: 'descriptionImage',
            description: 'The image shown on the page for the event',
            type: 'image',
            group: ['description', 'images'],
        },
        {
            name: 'buttons',
            description: 'The buttons representing various resources/links on the page for the event',
            type: 'array',
            group: 'description',
            hidden: ({value, document}: {value: unknown, document: SanityDocument}) => document?.pastEvent,
            of: [{
                name: 'button',
                type: 'object',
                fields: [
                    {
                        name: 'name',
                        description: 'The text on the button',
                        type: 'string',
                        validation: (rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => 
                            rule.required().error(`Button text cannot be empty`),
                    },
                    {
                        name: 'link',
                        description: 'The link that the button leads to',
                        type: 'url',
                        validation: (rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => 
                            rule.required().error(`Button must lead to a link`),
                    }
                ]
            }]
        },
        {
            name: 'pastEvents',
            description: 'Images/captions from past versions of the event, if they exist',
            type: 'array',
            group: 'images',
            of: [{
                name: 'pastEvent',
                type: 'object',
                fields: [
                    {
                        name: 'subtitle',
                        description: 'The name of the past event',
                        type: 'string',
                    },
                    {
                        name: 'galleryImages',
                        description: 'The images representing the past event',
                        type: 'array',
                        validation: (rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => 
                            rule.required().error(`Object must have an image`),
                        of: [{ type: 'image' }]
                    }
                ]
            }]
        },
        {
            name: 'gallery',
            description: 'The gallery of images corresponding to the event',
            type: 'array',
            group: 'images',
            of: [{
                name: 'galleryImage',
                type: 'object',
                fields: [
                    {
                        name: 'caption',
                        description: 'The caption for the image',
                        type: 'string'
                    },
                    {
                        name: 'imageSource',
                        description: 'The image to be shown on the gallery',
                        type: 'image',
                        validation: (rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => 
                            rule.required().error(`Object must have an image`),
                    }
                ]
            }]
        }
    ]
}
