import { type SchemaTypeDefinition } from 'sanity'
import { galleryType } from './documents/gallery'
import { meetingType } from './documents/meeting'
import { sponsorType } from './documents/sponsors'
import { memberType } from './documents/teammember'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryType, meetingType, sponsorType, memberType],
}
