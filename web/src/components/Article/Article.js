import { Link, routes } from '@redwoodjs/router'

const Article = ({ article, views }) => {
  return (
    <article>
      <header>
        <h2 className="text-xl text-blue-700 font-semibold">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div className="mt-2 text-gray-900 font-light">{article.body}</div>
      <h1>{JSON.stringify(views)}</h1>
    </article>
  )
}

export default Article
