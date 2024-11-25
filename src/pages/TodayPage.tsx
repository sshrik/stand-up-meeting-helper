import { Button, Group, Text } from "@mantine/core";
import { IconMoodSmile } from "@tabler/icons-react";
import PageContainer from "components/base/PageContainer";
import PageTitle from "components/base/PageTitle";
import ResponseTable from "components/response/ResponseTable";
import useTodayResponse from "hooks/useTodayResponse";
import { Link } from "react-router-dom";
import { todayString } from "utils/date";

const TodayPage: React.FC = () => {
  const { data, isLoading } = useTodayResponse();

  return (
    <PageContainer>
      <PageTitle>오늘의 응답</PageTitle>
      <Group justify="space-between">
        <Text>{`${todayString} 기록된 내용입니다.`}</Text>
        <Button leftSection={<IconMoodSmile />} component={Link} to={"/answer"}>
          응답 하러 가기
        </Button>
        <ResponseTable
          responses={data || []}
          loading={isLoading}
          emptyMessage="제출 된 응답이 없습니다. 응답을 제출하여 팀원들과 공유 해 보세요!"
        />
      </Group>
    </PageContainer>
  );
};

export default TodayPage;
