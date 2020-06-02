import { gql } from 'apollo-boost';

export default gql`
    query GetPost{
        getPosts{
            id
            description
            title
            user{
                username
            }
        }
    }
`