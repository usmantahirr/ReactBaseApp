import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';

const { Meta } = Card;

const Container = styled.div`
  padding: 20px;
`;

const UserCard = styled(Card)`
  max-width: 200px;
`;

const User = ({ user }) => (
  <Container>
    <UserCard cover={<img src={user.avatar} alt="DP" />}>
      <Meta title={`${user.first_name} ${user.last_name}`} description={user.email} />
    </UserCard>
  </Container>
);

export default User;
