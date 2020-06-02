/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPost
// ====================================================

export interface GetPost_getPosts_user {
  __typename: "User";
  username: string | null;
}

export interface GetPost_getPosts {
  __typename: "Post";
  id: number | null;
  description: string | null;
  title: string | null;
  user: GetPost_getPosts_user | null;
}

export interface GetPost {
  getPosts: (GetPost_getPosts | null)[] | null;
}
