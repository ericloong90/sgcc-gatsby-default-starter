import { gql } from 'apollo-boost';

const hello = gql`
  query Hello {
    hello
  }
`;

export default hello;
