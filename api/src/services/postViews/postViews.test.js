import {
  postViews,
  postView,
  createPostView,
  updatePostView,
  deletePostView,
} from './postViews'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('postViews', () => {
  scenario('returns all postViews', async (scenario) => {
    const result = await postViews()

    expect(result.length).toEqual(Object.keys(scenario.postView).length)
  })

  scenario('returns a single postView', async (scenario) => {
    const result = await postView({ id: scenario.postView.one.id })

    expect(result).toEqual(scenario.postView.one)
  })

  scenario('creates a postView', async (scenario) => {
    const result = await createPostView({
      input: { ipAddress: 'String', postId: scenario.postView.two.postId },
    })

    expect(result.ipAddress).toEqual('String')
    expect(result.postId).toEqual(scenario.postView.two.postId)
  })

  scenario('updates a postView', async (scenario) => {
    const original = await postView({
      id: scenario.postView.one.id,
    })
    const result = await updatePostView({
      id: original.id,
      input: { ipAddress: 'String2' },
    })

    expect(result.ipAddress).toEqual('String2')
  })

  scenario('deletes a postView', async (scenario) => {
    const original = await deletePostView({
      id: scenario.postView.one.id,
    })
    const result = await postView({ id: original.id })

    expect(result).toEqual(null)
  })
})
