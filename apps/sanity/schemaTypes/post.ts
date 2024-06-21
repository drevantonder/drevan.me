import {defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['update', 'journey'],
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'person'}],
      validation: (rule) => rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    },
  ],
})
