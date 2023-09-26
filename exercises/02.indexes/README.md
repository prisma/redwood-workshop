Intro
=====
Oh no! There's over a million page views and our app keeps crashing! A victim of our own success, our team is now scrambling to to figure out why our system can't handle the load. Product is certain this "Prisma" is the culprit. Let's prove them wrong!

For this exercise, the following resources will be handy:
- [guide on prisma models](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#model)
- [prisma migrate docs](https://www.prisma.io/docs/concepts/components/prisma-migrate/migrate-development-production)
- [sqlite indexes](https://www.sqlitetutorial.net/sqlite-index/)
- [redwood docs](https://redwoodjs.com/docs/index)

Exercise
========
Add `query` logging to the Prisma Client

With query logging enabled, now you can use your terminal output to find the query we want to analyze (hint: it uses `COUNT`)

Open your SQLite DB using your app of choice (If you don't have a preference, [Beekeeper Studio](https://www.beekeeperstudio.io/) is a good option) and use `EXPLAIN QUERY PLAN` to understand what might be going wrong in this query.

Modify your `schema.prisma` and run a migration adding an index that might solve this problem.

Solution
========
When moving on to the next exercise (or if you're just curious)
View solution by pulling the repository at the tag `exercise-3`
