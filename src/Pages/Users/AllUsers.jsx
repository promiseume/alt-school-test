import React, { useState, useEffect } from "react";
import { FetchAllUser } from "../../ultilities";
import { Pagination } from "antd";
import { Spin, Image } from "antd";
import "antd/dist/antd.css";
import './users.css'
import ErrorBoundary from '../ErrorBoundary/error'

export default function AllUsers() {
  const [users, setUsers] = useState();
  const [current, setCurrent] = useState(1);
  const [loading, setLoading] = useState(true);
  const size = ["4", "9", "14", "19"];

  const handlePagination = async (page, pageSize) => {
    setLoading(true);
    const { results } = await FetchAllUser(page, pageSize);
    setUsers(results);
    setCurrent(page);
    setLoading(false);
  };

  useEffect(() => {
    handlePagination(current, size[1]).then(() => {});
  }, [current]);

  return (
    <div className='container'>
      <ErrorBoundary>
    <h1>View All Users</h1>
      {loading ? (
      <div className='loading-spinner'><Spin size={'large'}/></div>) : (
      <div className={'card'}>
        {users.map((user, index) => (
          <div className={'userItem'} key={index}>
            <div><Image src={user.picture.large}/></div>
          <p className='user-name'>{user.name.first}&nbsp;{user.name.last}</p>
          <p className='user-email'>{user.email}</p>
          </div>
        ))}
      </div>
      )}
      <div className={'paginate'}>
      <Pagination
        onChange={handlePagination}
        disabled={loading}
        current={current}
        pageSize={size[1]}
        pageSizeOptions={size}
        total={100}
        responsive
      />
      </div>
      </ErrorBoundary>
    </div>
  );
}
