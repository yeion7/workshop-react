import gql from 'graphql-tag';

export const GET_ALL_MOVIES = gql`
  query {
    allMovies {
      id
      name
      rate
      year
      imagen
    }
  }
`;

export const SEARCH_MOVIE = gql`
  query searhMovie($name: String!) {
    allMovies(filter: { name_contains: $name }) {
      id
      name
      rate
      year
      image
    }
  }
`;
