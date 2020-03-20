import React from 'react';
import { List, Avatar, Popconfirm } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logger from "../../shared/logger";

const ListContainer = styled(List)`
  margin: 10px 20px;
`;

const UsersList = ({ users, loading }) => (
  <ListContainer
    loading={loading}
    itemLayout="horizontal"
    dataSource={users}
    renderItem={item => (
      <List.Item
        actions={[
          <Popconfirm title="Are you sure" onConfirm={() => {
            Logger.info('confirmed')
          }}>
            <a href="#">delete</a>
          </Popconfirm>,
          <Link to={`/${item.id}`}>more</Link>,
        ]}
      >
        {/* <Skeleton avatar title={false} loading={loading} active> */}
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<Link to={`/${item.id}`}>{`${item.first_name} ${item.last_name}`}</Link>}
          description={item.email}
        />
        {/* </Skeleton> */}
      </List.Item>
    )}
  />
);

export default UsersList;
