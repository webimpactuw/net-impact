import { AiFillClockCircle } from "react-icons/ai";

export const meetingType = {
    name: 'meeting',
    title: 'Meeting Information',
    type: 'document',
    icon: AiFillClockCircle,
    fields: [
        {
            name: 'type',
            description: 'The interval of the meeting, i.e. Weekly, Biweekly, Monthly',
            type: 'string',
            validation: (rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => 
                rule.required().error(`Required to generate a page on the website`),
        },
        {
            name: 'days',
            description: 'The days meetings are held, i.e. Wednesdays, Mondays and Tuesdays',
            type: 'string',
            validation: (rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => 
                rule.required().error(`Required to generate a page on the website`),
        },
        {
            name: 'time',
            description: 'The time meetings are held. i.e. 5:30 pm - 6:30pm',
            type: 'string',
            validation: (rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => 
                rule.required().error(`Required to generate a page on the website`),
        },
        {
            name: 'location',
            description: 'The location of meetings, i.e. Paccar 297',
            type: 'string',
            validation: (rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => 
                rule.required().error(`Required to generate a page on the website`),
        },
        {
            name: 'description',
            description: 'A brief description of meetings',
            type: 'text'
        }
    ]
}
