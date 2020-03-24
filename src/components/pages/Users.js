import React, { useState, useEffect, useContext } from 'react';

import AppTemplate from '../templates/appTemplate';
import { getAllUsers } from '../../services/user';
import ErrorContext from '../../shared/error/context';
import UsersList from '../organisms/usersList';

const UsersContainer = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({
    page: 1,
    total: 0,
    total_pages: 0,
    per_page: 10,
  });
  const [hasMore, setHasMore] = useState(true);

  const errorContext = useContext(ErrorContext);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      try {
        const res = await getAllUsers(filters);
        setUsers(res.data);
        setFilters(res.pageDetails);
      } catch (e) {
        errorContext.setError(e, true);
      }
      setLoading(false);
    }

    fetchUsers();
  }, []);

  const handleInfiniteOnLoad = async () => {
    if (users.length > filters.per_page) {
      setHasMore(false);
    } else {
      setLoading(true);
      const res = await getAllUsers(filters);
      setUsers(users.concat(res.data));
      setLoading(false);
    }
  };

  return (
    <AppTemplate title="Users">
      <UsersList users={users} loading={loading} hasMore={hasMore} handleInfiniteOnLoad={handleInfiniteOnLoad} />
    </AppTemplate>
  );
};

export default UsersContainer;
