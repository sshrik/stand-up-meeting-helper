import { Text } from "@mantine/core";
import PageContainer from "components/base/PageContainer";
import PageTitle from "components/base/PageTitle";

const NotFoundPage: React.FC = () => {
  return (
    <PageContainer>
      <PageTitle>페이지를 찾을 수 없습니다.</PageTitle>
      <Text c="gray">
        요청하신 페이지를 찾을 수 없습니다. 경로를 다시 한번 확인 해 주세요.
      </Text>
    </PageContainer>
  );
};

export default NotFoundPage;
