export const schema = gql`
  type PostView {
    id: Int!
    timestamp: DateTime!
    userAgent: String!
    post: Post!
    postId: Int!
  }

  type Query {
    postViewCount(postId: Int!): Int! @skipAuth
    postViews: [PostView!]! @requireAuth
    postView(id: Int!): PostView @requireAuth
  }

  input CreatePostViewInput {
    timestamp: DateTime!
    userAgent: String!
    postId: Int!
  }

  input UpdatePostViewInput {
    timestamp: DateTime
    userAgent: String
    postId: Int
  }

  type Mutation {
    createPostView(input: CreatePostViewInput!): PostView! @skipAuth
    updatePostView(id: Int!, input: UpdatePostViewInput!): PostView!
      @requireAuth
    deletePostView(id: Int!): PostView! @requireAuth
  }
`
