## Sorabel Frontend Test

1. react.js
2. apollo-graphql

## Tools

- graphiql https://anilist.co/graphiql

## Brief

This is Mangabel, simple manga catalogue. The app will display list of mangas and link to its detail.

## To Do
Your tasks, should you choose to accept them:

1. There's **some bugs** on the existing code that breaks the app. Find and fix the bug; for your reference the correct version of this app is available in Working Example

2. Create an infinite-scroll renderer to load more mangas on pages/Home.js

3. Create a detail page on `/manga/:{slug/id/whatever}` route that fetch the manga detail from graphql - hint, you can use `Media` graphql query to do that.

4. Bonus points - see if you can do "optimistic rendering" on the detail page that you create on step (2).

\*"Optimistic rendering" means that you can see the page content without loading the page.

## Rules

1. You are required to use the don't switch/change graphql endpoint.
2. don't add new dependency to the app other than the already specified ones.

## Working example

you can see finished example on https://csb-7se1r.netlify.com/
