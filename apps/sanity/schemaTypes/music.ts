import {defineField, defineType} from 'sanity'

export const music = defineType({
  name: 'music',
  title: 'Music',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'artist',
      title: 'Artist',
      type: 'reference',
      to: [{type: 'person'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      artist: 'artist.name'
    },
    prepare(selection) {
      const {title, artist} = selection
      return {
        title: title,
        subtitle: artist
      }
    }
  }
})