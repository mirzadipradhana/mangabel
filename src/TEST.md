## Sorabel Frontend Test

1. react.js
2. apollo-graphql

## Tools

- graphiql https://anilist.co/graphiql

## To do

1. there's **some bugs** on the existing code that breaks the app. find and fix them.

2. create an infinite-scroll renderer to load more mangas on pages/Home.js

3. create a detail page on `/manga/:{slug/id/whatever}` route that fetch the manga detail from graphql - hint, you can use `Media` graphql query to do that.

4. bonus points - see if you can do "optimistic rendering" on the detail page that you create on step (2).

\*"Optimistic rendering" means that you can see the page content without loading the page.

## Rules

1. don't switch/change graphql endpoint.
2. don't add new dependency to the app other than the already specified ones.

## Finished example

you can see finished example on https://csb-7se1r.netlify.com/
