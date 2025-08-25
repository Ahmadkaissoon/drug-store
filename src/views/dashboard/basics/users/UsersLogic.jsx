import useUsersQuery from "../../../../hooks/basics/users/useUsersQuery";
import Users from "./Users";

const UsersLogic = () => {
  const {
    fetchUsersFilter,
    filter,
    usersQuery,
    setCurrentUserId,
    getOneUserQuery,
    currentUserId,
  } = useUsersQuery();
  return (
    <Users
      data={usersQuery}
      filter={filter}
      fetchUsersFilter={fetchUsersFilter}
      setCurrentUserId={setCurrentUserId}
      currentUserId={currentUserId}
      getOneUserQuery={getOneUserQuery}
    />
  );
};

export default UsersLogic;
