import React from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { COMMENT_MUTATION, CURRENT_USER_QUERY, Comment } from "../api";
import { Loading } from "./general";

export default ({ match }) => {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY);

  const [createComment] = useMutation(COMMENT_MUTATION, {
    update: (proxy, { data: { createComment: comment } }) => {
      // UPDATE

      proxy.modify({
        id: proxy.identify(data.currentUser),
        fields: {
          comments: (existingCommentRefs = []) =>
          {
            existingCommentRefs = existingCommentRefs || [];
            
            const newCommentRef = proxy.writeFragment({
              data: comment,
              fragment: Comment.fragments.CommentData
            });
            return [...existingCommentRefs, newCommentRef];
          }
        }
      });
    },
  });

  if (loading) return <Loading />;

  if (error) {
    console.error(error);
    return null;
  }

  if (data) {
    const currentUser = data.currentUser;

    console.log(currentUser);

    return (
      <div>
        <button onClick={createComment}>Create comment</button>
      </div>
    );
  }
};
