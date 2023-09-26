import { useEffect } from 'react'

import { useMutation } from '@redwoodjs/web'

import Article from 'src/components/Article'

export const QUERY = gql`
  query ArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
    }
    views: postViewCount(postId: $id)
  }
`

const CREATE_VIEW_MUTATION = gql`
  mutation CreateViewMutation($input: CreatePostViewInput!) {
    createPostView(input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ article, views }) => {
  const [createView] = useMutation(CREATE_VIEW_MUTATION)
  useEffect(() => {
    createView({
      variables: {
        input: {
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          postId: article.id,
        },
      },
    })
  }, [createView, article.id])

  return <Article article={article} views={views} />
}
