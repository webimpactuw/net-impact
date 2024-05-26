import { AiFillInstagram } from "react-icons/ai";

export const socialsType = {
    name: 'socials',
    title: 'Socials',
    type: 'document',
    icon: AiFillInstagram,
    fields: [
        {
            name: 'instagram',
            description: 'The link to the club Instagram',
            type: 'url',
        },
        {
            name: 'linkedin',
            description: 'The link to the club LinkedIn',
            type: 'url',
        },
        {
            name: 'youtube',
            description: 'The link to the club YouTube',
            type: 'url',
        },
        {
            name: 'slack',
            description: 'The link to the club Slack',
            type: 'url',
        },
        {
            name: 'linktree',
            description: 'The link to the club Linktree',
            type: 'url',
        },
    ]
}
