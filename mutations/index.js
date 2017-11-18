import gql from 'graphql-tag';

export const CREATE_MOVIE = gql`
  mutation createMovie(
    $name: String!
    $rate: Int!
    $year: String!
    $trailer: String!
    $generes: [String!]!
  ) {
    createMovie(
      name: $name
      rate: $rate
      year: $year
      trailer: $trailer
      generes: $generes
    ) {
      id
    }
  }
`;

export const DELETE_MOVIE = gql`
  mutation deleteMovie($id: ID!) {
    deleteMovie(id: $id) {
      id
    }
  }
`;

export const UPDATE_DATE_MOVIE = gql`
  mutation updateRateMovie($id: ID!, $rate: Int!) {
    updateMovie(id: $id, rate: $rate) {
      id
      rate
    }
  }
`;
