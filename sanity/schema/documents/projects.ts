export const projectsType = {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
        },
        {
            name: 'learnmore',
            type: 'string',
        },
        {
            name: 'description',
            type: 'string',
        },
        {
            name: 'joinlink',
            type: 'url',
        },
        {
            name: 'description',
            type: 'array',
            of: [{
                name: 'chapter',
                type: 'object',
                fields: [
                    {
                        name: 'header',
                        type: 'string'
                    },
                    {
                        name: 'content',
                        type: 'string'
                    }
                ]
            }]
        },
    ]
}
