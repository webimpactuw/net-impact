import { type SchemaTypeDefinition } from 'sanity'
import { doc } from './documents/doc'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [doc],
}
