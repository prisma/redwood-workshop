import { db } from 'src/lib/db'

export const postViewCount = ({ postId }) => {
  return db.postView.count({ where: { postId } })
}

export const postViews = () => {
  return db.postView.findMany()
}

export const postView = ({ id }) => {
  return db.postView.findUnique({
    where: { id },
  })
}

export const createPostView = ({ input }) => {
  return db.postView.create({
    data: input,
  })
}

export const updatePostView = ({ id, input }) => {
  return db.postView.update({
    data: input,
    where: { id },
  })
}

export const deletePostView = ({ id }) => {
  return db.postView.delete({
    where: { id },
  })
}

export const PostView = {
  post: (_obj, { root }) => {
    return db.postView.findUnique({ where: { id: root?.id } }).post()
  },
  user: (_obj, { root }) => {
    return db.postView.findUnique({ where: { id: root?.id } }).user()
  },
}
