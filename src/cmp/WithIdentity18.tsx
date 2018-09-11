import { Alert, Button, Popconfirm, Table, Tag } from 'antd';
import gql from 'graphql-tag';
import { complement, either, isEmpty, isNil } from 'ramda';
import React, { Component, ReactNode } from 'react';
import { Query, QueryResult, withApollo, WithApolloClient } from 'react-apollo';

interface IdentityQuery {
  identity: {
    __typename: string;
    id: string;
  };
}

const identityQuery = gql`
  query Identity {
    identity {
      id
    }
  }
`;

interface Props {
  readonly children: ReactNode;
}

function WithIdentity(props: WithApolloClient<Props>) {
  return (
    <Query query={identityQuery}>
      {({ data }: QueryResult<IdentityQuery>) => {
        if (
          !containsData(data) ||
          data.identity == null ||
          data.identity.__typename === 'SystemUser'
        ) {
          return props.children;
        }

        return (
          <FirstLogin identity={data.identity}>
            <Alert message="message" type="error" showIcon />
            <Button>Click</Button>
            <Tag color="red">Tag</Tag>
            <Table />
            <Popconfirm placement="topLeft" title="title" okText="Yes" cancelText="No">
              <Button>TL</Button>
            </Popconfirm>
          </FirstLogin>
        );
      }}
    </Query>
  );
}

export default withApollo(WithIdentity);

class FirstLogin extends Component<any> {
  render() {
    return this.props.children;
  }
}

export const containsData = complement(either(isNil, isEmpty));
