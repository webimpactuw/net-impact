export const spotlightType = {
    name: 'spotlight',
    title: 'Spotlight',
    type: 'document',
    fields: [
        {
            name: 'spotlightEvent',
            type: 'reference'
        },
        {
            name: 'header',
            type: 'string'
        },
        {
            name: 'description',
            type: 'string'
        },
    ]
}