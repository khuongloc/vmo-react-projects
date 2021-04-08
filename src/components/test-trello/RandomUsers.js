import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { createFetchUsers, createClearUsers } from "../../actions/randomUser";
import LoadingError from "../errors.js/LoadingError";
import Loading from "../loadings/Loading";
import UserCard from "./UserCard";

const RandomUsers = (props) => {
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(null);

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const renderUsers = (users) => {
    return users.map((user, idx) => (
      <UserCard
        key={user.login.uuid}
        total={users.length}
        idx={idx}
        {...user}
      />
    ));
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(createFetchUsers())
      .then(() => {
        setIsLoading(false);
        setIsError(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setIsError(true);
        console.log("error: " + e);
      });

    return () => {
      dispatch(createClearUsers());
    };
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <LoadingError errorMessage="Something went wrong!" />;
  }

  return (
    <div className="p-5 md:w-3/12 md:mx-auto relative mt-5">
      {renderUsers(users)}
    </div>
  );
};

export default RandomUsers;
