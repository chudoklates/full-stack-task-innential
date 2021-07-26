# Innential Full-Stack developer task
## Backend

Create a GraphQL type `Comment` with the following fields:

`id`
`timestamp`
`text`

All of type `String`

Create a field `comments` on the `User` type, which will be an array of `Comment` type

Make sure the `createComment` mutation return type is `Comment`

## Front-end (React)

In `api` folder:

Create a fragment `CommentData` on `Comment` type with all the fields from the type

Use the `CommentData` fragment within the `UserBasicData` fragment when defining the `comments` field on the front-end

Use the `CommentData` fragment in the front-end definition of the `createComment` mutation

In `_home.js`:

Define the update function for the `COMMENT_MUTATION` that will receive the created comment and write it 
inside of the `comments` array of the `currentUser` object
