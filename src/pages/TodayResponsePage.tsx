import { Alert, Button, Group, Stack, Text, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import FeelingSelect from "components/base/input/FeelingSelect";
import UserSelect from "components/base/input/UserSelect";
import PageContainer from "components/base/PageContainer";
import PageTitle from "components/base/PageTitle";
import useAddTodayResponse from "hooks/useAddTodayResponse";
import { TodayResponse } from "models/TodayResponse";
import { todayString } from "utils/date";

const TodayResponsePage: React.FC = () => {
  const { getInputProps, onSubmit } = useForm<TodayResponse>({
    initialValues: {
      userName: "",
      feeling: "",
      lastTask: "",
      todayTask: "",
    },
    validateInputOnChange: true,
    validate: {
      userName: (value) => {
        if (!value) return "작성자를 선택 해 주세요.";
      },
      feeling: (value) => {
        if (!value) return "오늘의 기분을 선택 해 주세요.";
      },
      lastTask: (value) => {
        if (!value) return "어제 한 일을 작성 해 주세요.";
      },
      todayTask: (value) => {
        if (!value) return "오늘 할 일을 작성 해 주세요.";
      },
    },
  });

  const {
    mutate: addResponse,
    isPending,
    isError,
    error,
  } = useAddTodayResponse();

  const handleSubmit = onSubmit((values) => {
    addResponse(values);
  });

  return (
    <PageContainer>
      <PageTitle>오늘의 응답</PageTitle>
      <Text>{`${todayString} 오늘의 스탠드업 미팅 질문을 작성 해 주세요!`}</Text>
      <form onSubmit={handleSubmit}>
        <Stack gap={8} maw={600}>
          <UserSelect label="작성자" {...getInputProps("userName")} />
          <FeelingSelect label="오늘의 기분" {...getInputProps("feeling")} />
          <Textarea label="어제 한 일" {...getInputProps("lastTask")} />
          <Textarea label="오늘 할 일" {...getInputProps("todayTask")} />
          {isError && (
            <Alert color="red" title="응답을 저장하는 중 에러가 발생했습니다.">
              {error?.message}
            </Alert>
          )}
          <Group>
            <Button type="submit" loading={isPending}>
              제출하기
            </Button>
          </Group>
        </Stack>
      </form>
    </PageContainer>
  );
};

export default TodayResponsePage;
