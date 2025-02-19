import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

export const Community: CollectionConfig = {
  slug: 'community',
  access: {
    read: () => true,
  },
  auth: false,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'version',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            inlineBlocks: [
              {
                slug: 'Cta',
                fields: [
                  {
                    name: 'title',
                    type: 'text',
                  },
                  {
                    name: 'icon',
                    type: 'select',
                    options: ['Zap', 'Lens', 'Info', 'Idea', 'Announce'],
                  },
                  {
                    name: 'color',
                    type: 'select',
                    options: ['Yellow', 'Blue', 'Green', 'Red'],
                  },
                  {
                    name: 'description',
                    type: 'richText',
                  },
                ],
              },
            ],
          }),
          // TreeViewFeature(),
        ],
      }),
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
          // required: true,
        },
      ],
    },
    {
      name: 'published',
      type: 'checkbox',
      required: true,
    },
  ],
}
