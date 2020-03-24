import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Spin } from 'antd';
import styled from 'styled-components';

import { getUser } from '../../services/user';
import AppTemplate from '../templates/appTemplate';
import User from '../organisms/user';
import ErrorContext from '../../shared/error/context';

const Loader = styled(Spin)`
  margin-top: 10%;
  display: flex;
  justify-content: center;
`;

const UserDetails = ({ match, history }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const { params } = match;

  const errorContext = useContext(ErrorContext);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      try {
        const res = await getUser(params.id);
        setUser(res.data);
      } catch (e) {
        errorContext.setError(e);
      }
      setLoading(false);
    }

    fetchUser();
  }, [params.id]);

  return (
    <AppTemplate back={() => history.push('/')} title="User Details">
      {loading ? <Loader /> : <User user={user} />}
    </AppTemplate>
  );
};

export default withRouter(UserDetails);
