import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import uuid from "uuid";

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

class ChildComponent extends React.Component {
  state = {
    selected: null,
  };

  handleOnChange = (e) => {
    this.setState({
      selected: e.target.checked,
    }, this.props.onChange(this.props.id, e.target.checked));
  }

  render() {
    return (
      <div>
        <div>{`Likes: ${this.props.likes + (this.state.selected ? 1 : 0)}`}</div>
        <input
          type="checkbox"
          checked={this.props.defaultSelected}
          onChange={this.handleOnChange}/>
        {this.state.selected ? 'This is my favourite' : 'Not my favourite'}
      </div>
    )
  }
}

export default class Home extends React.Component {
  state = {
    myFavouriteSelections: [],
  };

  // leave addMyFavouriteSelections function as is, bug is not here
  addMyFavouriteSelections = (id, value) => {
    setTimeout(() =>
      this.setState(prev => ({
        myFavouriteSelections: !prev.myFavouriteSelections.includes(id) ? prev.myFavouriteSelections.concat(id) : prev.myFavouriteSelections.filter(m => m !== id)
      }))
      , 500
    )
  }
  
  render() {
    return (
      <Query query={PAGE_QUERY} variables={{ page: 1 }}>
        {({ data, loading, error }) => {
          if (loading && !data.Page) return <p>loading</p>;
          if (error) return <p>error occured</p>;
          return (
            <div>
              <h1>{`Your Favourites: ${this.state.myFavouriteSelections.length}`}</h1>
              <div>
                {data.Page.media.map((item, index) => {
                  return (
                    <div key={uuid.v4()}>
                      <h2>{item.title.userPreferred}</h2>
                      <img
                        src={item.coverImage.medium}
                        alt={item.title.userPreferred}
                      />
                      <ChildComponent
                        id={item.id}
                        likes={item.favourites}
                        onChange={this.addMyFavouriteSelections}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}
