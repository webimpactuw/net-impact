import { AiFillCamera } from "react-icons/ai";

export const galleryType = {
    name: 'gallery',
    title: 'Gallery Image',
    type: 'document',
    icon: AiFillCamera,
    fields: [
        {
            name: 'caption',
            description: 'The caption for the image',
            type: 'string'
        },
        {
            name: 'imageSource',
            description: 'The image to be shown on the gallery',
            type: 'image',
            validation: (rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => 
                rule.required().error(`Object must have an image`),
        }
    ]
}
