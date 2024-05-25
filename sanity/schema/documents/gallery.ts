export const galleryType = {
    name: 'gallery',
    title: 'Gallery Image',
    type: 'document',
    fields: [
        {
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
         }
    ]
}
