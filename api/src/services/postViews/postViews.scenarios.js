export const standard = defineScenario({
  postView: {
    one: {
      data: {
        ipAddress: 'String',
        post: { create: { title: 'String', body: 'String' } },
      },
    },
    two: {
      data: {
        ipAddress: 'String',
        post: { create: { title: 'String', body: 'String' } },
      },
    },
  },
})
