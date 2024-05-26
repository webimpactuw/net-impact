import { AiFillSmile } from "react-icons/ai";

export const memberType = {
    name: 'team',
    title: 'Team Member',
    type: 'document',
    icon: AiFillSmile,
    groups: [
        {name: 'info', title: 'Info'},
        {name: 'socials', title: 'Socials'},
    ],
    fields: [
        {
            name: 'photo',
            description: 'A photo of the team member',
            type: 'image',
            group: 'info',
        },
        {
            name: 'name',
            description: 'The name of the team member',
            type: 'string',
            group: 'info',
            validation: (rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => 
                rule.required().error(`Required to generate a page on the website`),
        },
        {
            name: 'role',
            description: 'The role of the team member i.e. President, Director of Events',
            type: 'string',
            group: 'info',
            validation: (rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => 
                rule.required().error(`Required to generate a page on the website`),
        },
        {
            name: 'year',
            description: 'The year of the team member i.e. Sophomore, Senior',
            type: 'string',
            group: 'info',
        },
        {
            name: 'major',
            description: 'The major(s) of the team member',
            type: 'string',
            group: 'info',
        },
        {
            name: 'minor',
            description: 'The minor(s) of the team member, if applicable',
            type: 'string',
            group: 'info',
        },
        {
            name: 'statement',
            description: 'A brief statement from the team member',
            type: 'text',
            group: 'info',
        },
        {
            name: 'linkedin',
            description: 'A link to the team member\'s LinkedIn, if applicable',
            type: 'url',
            group: 'socials',
        },
        {
            name: 'twitter',
            description: 'A link to the team member\'s Twitter (formally known as X), if applicable',
            type: 'url',
            group: 'socials',
        },
        {
            name: 'instagram',
            description: 'A link to the team member\'s Instagram, if applicable',
            type: 'url',
            group: 'socials',
        },
    ]
}
