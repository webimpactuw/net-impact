import { AiFillNotification } from "react-icons/ai";

export const spotlightType = {
    name: 'spotlight',
    title: 'Spotlight',
    type: 'document',
    icon: AiFillNotification,
    fields: [
        {
            name: 'spotlightEvent',
            description: 'The event that is spotlighted on the homepage',
            type: 'reference',
            to: [{type: 'event'}],
            validation: (rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => 
                rule.required().error(`Required to generate a page on the website`),
        },
        {
            name: 'header',
            description: 'The header promoting the event to be shown on the homepage',
            type: 'string'
        },
        {
            name: 'description',
            description: 'A brief description of the event on the homepage',
            type: 'text'
        },
    ]
}