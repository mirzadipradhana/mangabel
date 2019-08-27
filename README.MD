## Sorabel Frontend Test

1. react.js
2. apollo-graphql

## Tools

- graphiql https://anilist.co/graphiql

## Brief

This is Mangabel, simple manga catalogue. The app will display list of mangas and link to its detail. This app is by intention buggy.

## Working example

You can see finished example on https://csb-7se1r.netlify.com/

## To Do
Your tasks, should you choose to accept them:

1. There's **some bugs** on the existing code that breaks the app. Find and fix the bug so that it works properly as intended.

2. Create an infinite-scroll renderer to load more mangas on pages/Home.js

3. Create a detail page on `/manga/:{slug/id/whatever}` route that fetch the manga detail from graphql - hint, you can use `Media` graphql query to do that.

4. Bonus points - Implement _optimistic rendering_ (user can see go to detail page content without loading the page) on the detail page that you create on step (2).

## Rules <a name="pookie"></a>

1. You are required to use the existing graphql endpoint; don't switch/change graphql endpoint.
2. You can only use the existing dependencies that already defined; don't add new dependency to the app other than the already specified.

