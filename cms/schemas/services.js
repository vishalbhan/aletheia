export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'items',
      title: 'Sub-Categories',
      type: 'array',
      of: [{ type: 'titleDesc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      order: 'order'
    },
    prepare({ title, order }) { 
      return {
        title: `${order}. ${title}`
      }
    }
  }
}