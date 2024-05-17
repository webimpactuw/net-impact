export const galleryType = {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
        {
            name: 'images',
            type: 'array',
            of: [{type: 'image'}]
        }
    ]
}
