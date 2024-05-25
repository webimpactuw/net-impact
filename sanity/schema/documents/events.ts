export const eventsType = {
    name: 'events',
    title: 'Events',
    type: 'document',
    fields: [
        {
            name: 'spotlight',
            type: 'object',
            fields: [
                {
                    name: 'date',
                    type: 'string'
                },
                {
                    name: 'header',
                    type: 'string'
                },
                {
                    name: 'description',
                    type: 'string'
                },
                {
                    name: 'link',
                    type: 'url'
                },
            ]
        },
        {
            name: 'events',
            type: 'array',
            of: [{
                name: 'event',
                type: 'object',
                fields: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'type',
                        type: 'string',
                    },
                    {
                        name: 'status',
                        type: 'string',
                    },
                    {
                        name: 'returnDate',
                        type: 'string',
                    },
                    {
                        name: 'time',
                        type: 'string',
                    },
                    {
                        name: 'descriptionHeader',
                        type: 'string',
                    },
                    {
                        name: 'description',
                        type: 'string',
                    },
                    {
                        name: 'descriptionImage',
                        type: 'image',
                    },
                    {
                        name: 'buttons',
                        type: 'array',
                        of: [{
                            name: 'button',
                            type: 'object',
                            fields: [
                                {
                                    name: 'name',
                                    type: 'string',
                                },
                                {
                                    name: 'link',
                                    type: 'url'
                                }
                            ]
                        }]
                    },
                    {
                        name: 'pastImages',
                        type: 'array',
                        of: [{
                            name: 'pastImage',
                            type: 'object',
                            fields: [
                                {
                                    name: 'subtitle',
                                    type: 'string',
                                },
                                {
                                    name: 'image',
                                    type: 'image',
                                }
                            ]
                        }]
                    },
                    {
                        name: 'gallery',
                        type: 'array',
                        of: [{
                            name: 'galleryImage',
                            type: 'object',
                            fields: [
                                {
                                    name: 'subtitle',
                                    type: 'string'
                                },
                                {
                                    name: 'imageSource',
                                    type: 'image'
                                }
                            ]
                        }]
                    }
                ]
            }]
        }
    ]
}
