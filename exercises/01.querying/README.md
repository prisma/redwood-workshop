Intro
=====
Today we're going to be making a new model (related to one of our existing models), understand what performance issues may arise in the future, and then work to resolve those issues (and add some extra goodness on top of Prisma!) to get our app ready for production and the millions of users we're about to have!

In the first exercise, we'll be making a "PostView". Product really thinks that our app will take off if everyone can see how popular certain articles are. We're going to be nice, agree, and quickly implement this feature. Surely something this simple couldn't cause any problems... right?

For this exercise, the following resources will be handy:
- [guide on prisma models](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#model)
- [prisma migrate docs](https://www.prisma.io/docs/concepts/components/prisma-migrate/migrate-development-production)
- [redwood docs](https://redwoodjs.com/docs/index)

Exercise
========
Create a new `PostView` model.
- a PostView should have standard boilerplate fields (id, timestamp)
- a PostView should record the useragent of the viewer
- a PostView should relate to a Post

Create a new migration that adds `PostView` to your database.

Generate the SDL (w/ CRUD) of the PostView

Modify the PostView service and SDL to allow for fetching the number of PostViews for a given Post.

Update the ArticleCell to include a query to the above resolver. Then update `Article.js` to display the number of views on page load.

Extra Credit:
- Now automate the creation of PageViews! Whenever an Article is viewed, a PostView should be created.
- This step is intentionally vague. The implementation is up to you :-)

Solution
========
When moving on to the next exercise (or if you're just curious)
View solution by pulling the repository at the tag `exercise-2`
