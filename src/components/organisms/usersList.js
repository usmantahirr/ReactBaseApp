import React from 'react';
import { List, Avatar, Alert, Popconfirm, Spin } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';

import Logger from '../../shared/logger';

const ListContainer = styled(List)`
  margin: 10px 20px;
`;

const UsersList = ({ users, loading, hasMore, handleInfiniteOnLoad }) => (
  <InfiniteScroll initialLoad={false} pageStart={0} hasMore={hasMore} loadMore={handleInfiniteOnLoad}>
    <ListContainer
      loading={loading}
      itemLayout="horizontal"
      dataSource={users}
      renderItem={item => (
        <List.Item
          actions={[
            <Popconfirm
              title="Are you sure"
              onConfirm={() => {
                Logger.info('confirmed');
              }}
            >
              <a href="#">delete</a>
            </Popconfirm>,
            <Link to={`/${item.id}`}>more</Link>,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<Link to={`/${item.id}`}>{`${item.first_name} ${item.last_name}`}</Link>}
            description={item.email}
          />
        </List.Item>
      )}
    >
      {loading && hasMore && (
        <div className="demo-loading-container">
          <Spin />
        </div>
      )}
      {!hasMore && <Alert message="Loaded All" type="info" />}
    </ListContainer>
  </InfiniteScroll>
);

export default UsersList;
