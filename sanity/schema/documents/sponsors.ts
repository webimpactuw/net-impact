import { AiFillStar } from "react-icons/ai";

export const sponsorType = {
    name: 'sponsors',
    title: 'Sponsors',
    type: 'document',
    icon: AiFillStar,
    fields: [
        {
            name: 'name',
            description: 'The name of the sponsor company/organization',
            type: 'string',
        },
        {
            name: 'sourceImage',
            description: 'An image representing the logo of the organization (square dimensions preferred)',
            type: 'image',
            validation: (rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => 
                rule.required().error(`Object must have an image`),
        }
    ]
}
