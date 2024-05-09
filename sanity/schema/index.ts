import { type SchemaTypeDefinition } from 'sanity'
import { galleryType } from './documents/gallery'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryType],
}
