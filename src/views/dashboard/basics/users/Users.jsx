import Filter from "../../../../components/common/filter/Filter";
import UsersFilter from "../../../../components/dashboard/views/basics/users/UsersFilter";
import ReusableTable from "../../../../components/common/ReusableTable";
import { useState } from "react";
import { PopupContainer } from "../../../../components/common/popupContainer/PopUpContainer";
import ButtonsContainer from "../../../../components/common/floatBtn/ButtonsContainer";
import Button from "../../../../components/common/Button";
import { FaUserPlus } from "react-icons/fa6";
import AddUser from "../../../../components/dashboard/views/basics/users/AddUser";
const Users = ({
  fetchUsersFilter,
  filter,
  data,
  setCurrentUserId,
  getOneUserQuery,
  currentUserId,
  addUser,
  editUser,
  deleteUser,
  resourceData,
  isLoadingResource,
  isResourceError,
}) => {
  const [openAddUser, setOpenAddUser] = useState(false);
  const [openEditUser, setOpenEditUser] = useState(false);
  const [edit, setEdit] = useState("");

  const handleSelectedRow = (row) => {
    setEdit(row);
    setOpenEditUser(true);
  };

  const handleDeleteUser = (row) => {
    if (row && row.id) {
      deleteUser(row.id);
    }
  };

  // const damydata = [
  //   {
  //     email: "ads",
  //     role: "representative",
  //   },
  //   {
  //     email: "ahmed",
  //     role: "admin",
  //   },
  // ];

  const columns = [
    {
      id: "email",
      header: "الاسم",
      value: "email",
    },
    // {
    //   id: "role",
    //   header: "الصلاحية",
    //   value: "role",
    // },
  ];

  const actions = [
    {
      title: "تعديل",
      onClickFun: handleSelectedRow,
      color: "accept_color",
    },
    {
      title: "حذف",
      onClickFun: handleDeleteUser,
      color: "error_color",
    },
  ];

  return (
    <div className="w-full overflow-x-auto shadow rounded-lg">
      <PopupContainer
        setIsModalOpen={setOpenAddUser}
        isModalOpen={openAddUser}
        component={
          <AddUser addUser={(data) => addUser(data, setOpenAddUser)} />
        }
      />
      <PopupContainer
        setIsModalOpen={setOpenEditUser}
        isModalOpen={openEditUser}
        component={
          <AddUser
            data={edit}
            editUser={(data) => editUser(data, edit.id, setOpenEditUser)}
          />
        }
      />
      <Filter
        title={"بحث"}
        innerComponent={
          <UsersFilter filter={filter} fetchUsersFilter={fetchUsersFilter} />
        }
      />
      <ButtonsContainer>
        <Button
          title={"إدخال مستخدم جديد"}
          styleType="reg"
          onClickFun={() => {
            setOpenAddUser(true);
          }}
          Icon={<FaUserPlus />}
        />
      </ButtonsContainer>
      <ReusableTable
        data={data}
        columns={columns}
        actions={actions}
        dir="rtl"
        actionsHeader="Actions"
      />
    </div>
  );
};

export default Users;
