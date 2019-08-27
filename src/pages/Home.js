import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const PAGE_QUERY = gql`
  query getPage($page: Int!, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media {
        id
        coverImage {
          medium
        }
      }
    }
  }
`;

export default class Home extends React.Component {
  render() {
    return (
      <Query query={PAGE_QUERY} variables={{ page: 1 }}>
        {({ data, loading, error }) => {
          if (loading && !data.Page) return <p>loading</p>;
          if (error) return <p>error occured</p>;
          return (
            <React.Fragment>
              {data.Page.media.map(item => {
                return (
                  <div>
                    <h2>{item.title.userPreferred}</h2>
                    <img
                      src={item.coverImage.medium}
                      alt={item.title.userPreferred}
                    />
                  </div>
                );
              })}
            </React.Fragment>
          );
        }}
      </Query>
    );
  }
}
