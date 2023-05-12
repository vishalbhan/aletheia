export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'name',
      title: 'Student Name & University',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Testimonial Text',
      type: 'text'
    }
  ],
  preview: {
    select: {
      order: 'order',
      title: 'name',
    },
    prepare({ title, order }) {
      return {
        title: `${order}. ${title}`,
      };
    }
  },
}