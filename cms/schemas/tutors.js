export default {
  name: 'tutors',
  title: 'Tutors',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'name',
      title: 'Tutor Name',
      type: 'string',
    },
    {
      name: 'qualification',
      title: 'Tutor Qualification',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Tutor Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'about',
      title: 'About Tutor',
      type: 'text'
    },
  ],
  preview: {
    select: {
      order: 'order',
      title: 'name',
      media: 'image',
    },
    prepare({ title, order, media }) {
      return {
        title: `${order}. ${title}`,
        media,
      };
    },
  },
}