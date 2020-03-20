import React, { useState, useEffect, useContext } from 'react';

import AppTemplate from '../templates/appTemplate';
import { getAllUsers } from '../../services/user';
import ErrorContext from '../../shared/error/context';
import UsersList from '../organisms/usersList';

const UsersContainer = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({
    pageNumber: 1,
    totalRecords: 0,
    totalPages: 0,
    recordsPerPage: 10,
  });

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

  return (
    <AppTemplate title="Users">
      <UsersList users={users} loading={loading} />
    </AppTemplate>
  );
};

export default UsersContainer;
