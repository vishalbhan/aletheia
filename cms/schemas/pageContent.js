export default {
  name: 'pageContent',
  title: 'Page Content',
  type: 'document',
  fields: [
    {
      name: 'aboutSection1',
      title: 'About Section 1',
      type: 'text'
    },
    {
      name: 'aboutSection2',
      title: 'About Section 2',
      type: 'text'
    },
    {
      name: 'aboutSection3',
      title: 'About Section 3',
      type: 'text'
    },
    {
      name: 'different',
      title: 'What Makes Us Different?',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'becomeATutor',
      title: 'Become a Tutor',
      type: 'array',
      of: [{type: 'block'}]
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Content'
      }
    }
  }
}