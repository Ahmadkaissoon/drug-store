import useUsersQuery from "../../../../hooks/basics/users/useUsersQuery";
import useUsersMutation from "../../../../hooks/basics/users/useUsersMutation";
import Users from "./Users";

const UsersLogic = () => {
  const {
    fetchUsersFilter,
    filter,
    usersQuery,
    setCurrentUserId,
    getOneUserQuery,
    currentUserId,
    usersResources,
  } = useUsersQuery();
  const { handleAddUser, handleEditUser, handleDeleteUser } =
    useUsersMutation();
  return (
    <Users
      data={usersQuery.data}
      filter={filter}
      fetchUsersFilter={fetchUsersFilter}
      setCurrentUserId={setCurrentUserId}
      currentUserId={currentUserId}
      getOneUserQuery={getOneUserQuery}
      addUser={handleAddUser}
      editUser={handleEditUser}
      deleteUser={handleDeleteUser}
      resourceData={usersResources.data}
      isLoadingResource={usersResources.isPending}
      isResourceError={usersResources.isError}
    />
  );
};

export default UsersLogic;
