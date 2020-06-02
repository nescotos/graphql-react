import gql from 'graphql-tag';

export default gql`
  mutation PostMutation($input: CreatePostInput!) {
    createPost(createPostInput: $input) {
      title
      description
      id
    }
  }
`;