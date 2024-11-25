import PageContainer from "components/base/PageContainer";
import PageTitle from "components/base/PageTitle";
import UserTable from "components/user/UserTable";

const UserListPage: React.FC = () => {
  return (
    <PageContainer>
      <PageTitle>사용자 관리</PageTitle>
      <UserTable />
    </PageContainer>
  );
};

export default UserListPage;
