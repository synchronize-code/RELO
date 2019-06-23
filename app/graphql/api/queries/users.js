import gql from "graphql-tag";

export const USERS = gql`
  query users{
    users{
      id
      firstName
      lastName
      company
      image
    }
  }
`