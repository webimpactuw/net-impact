export const memberType = {
    name: 'team',
    title: 'Team',
    type: 'document',
    fields: [
        {
            name: 'members',
            type: 'array',
            of: [{
                name: 'member',
                type: 'object',
                fields: [
                    {
                        name: 'photo',
                        type: 'image',
                    },
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'role',
                        type: 'string',
                    },
                    {
                        name: 'year',
                        type: 'string',
                    },
                    {
                        name: 'major',
                        type: 'string',
                    },
                    {
                        name: 'minor',
                        type: 'string',
                    },
                    {
                        name: 'description',
                        type: 'string',
                    },
                    {
                        name: 'linkedin',
                        type: 'url',
                    },
                    {
                        name: 'twitter',
                        type: 'url',
                    },
                    {
                        name: 'instagram',
                        type: 'url',
                    },
                ]
            }]
        }
    ]
}
