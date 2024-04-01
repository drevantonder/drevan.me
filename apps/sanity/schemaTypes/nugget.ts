import {defineField, defineType} from 'sanity'

export const nugget = defineType({
  name: 'nugget',
  title: 'Nugget',
  type: 'document',
  fields: [
    defineField({
      name: 'displayedId',
      title: 'Displayed ID',
      type: 'number',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'text',
      },
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['thought', 'quote', 'lyric'],
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'person'}],
    }),
    defineField({
      name: 'book',
      title: 'Book',
      type: 'reference',
      to: [{type: 'book'}],
    }),
    defineField({
      name: 'music',
      title: 'Music',
      type: 'reference',
      to: [{type: 'music'}],
    }),
  ],
  preview: {
    select: {
      title: 'displayedId',
      subtitle: 'text'
    }
  }
})