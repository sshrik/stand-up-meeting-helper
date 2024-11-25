import { Text, Title } from "@mantine/core";
import PageContainer from "components/base/PageContainer";

const NotFoundPage: React.FC = () => {
  return (
    <PageContainer>
      <Title order={3}>페이지를 찾을 수 없습니다.</Title>
      <Text c="gray">
        요청하신 페이지를 찾을 수 없습니다. 경로를 다시 한번 확인 해 주세요.
      </Text>
    </PageContainer>
  );
};

export default NotFoundPage;
