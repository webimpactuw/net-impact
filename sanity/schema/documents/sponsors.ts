export const sponsorType = {
    name: 'sponsors',
    title: 'Sponsors',
    type: 'document',
    fields: [
        {
            name: 'images',
            type: 'array',
            of: [{type: 'image'}]
        }
    ]
}
