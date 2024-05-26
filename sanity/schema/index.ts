import { type SchemaTypeDefinition } from 'sanity'
import { galleryType } from './documents/gallery'
import { meetingType } from './documents/meeting'
import { sponsorType } from './documents/sponsors'
import { memberType } from './documents/teammember'
import { assetType } from './documents/assets'
import { eventsType } from './documents/events'
import { socialsType } from './documents/socials'
import { projectsType } from './documents/projects'
import { spotlightType } from './documents/spotlight'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryType, meetingType, sponsorType, memberType, assetType, eventsType, socialsType, projectsType, spotlightType],
}
