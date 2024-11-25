import { Group, Pagination, TextInput } from "@mantine/core";
import { useDisclosure, useInputState } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import DateSelectMenu from "components/base/input/DateSelectMenu";
import PageContainer from "components/base/PageContainer";
import PageTitle from "components/base/PageTitle";
import ResponseHistoryTable from "components/response/ResponseHistoryTable";
import useResponseHistory from "hooks/useResponseHistory";
import { useEffect, useState } from "react";
import { dateToString } from "utils/date";

const ResponseHistoryPage: React.FC = () => {
  const [search, setSearch] = useInputState("");

  const [page, setPage] = useState(1);

  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  useEffect(() => {
    setPage(1);
  }, [search, dateRange]);

  const { data, isLoading } = useResponseHistory({
    startDate: dateRange[0],
    endDate: dateRange[1],
    search,
  });

  const totalPage = data ? Math.ceil(data.length / 10) : 0;

  const responses = data?.slice((page - 1) * 10, page * 10);

  const [opened, { open, close }] = useDisclosure();

  const renderEmptyMessage = () => {
    if (dateRange[0]) {
      if (dateRange[1]) {
        return `${dateToString(dateRange[0])} 부터 ${dateToString(
          dateRange[1]
        )} 사이에 제출된 응답이 없어요.`;
      }

      return `${dateToString(dateRange[0])} 이후에 제출된 응답이 없어요.`;
    }

    return "날짜를 선택해주세요.";
  };

  return (
    <PageContainer>
      <PageTitle>응답 모아보기</PageTitle>
      <Group justify="space-between">
        <Group>
          <TextInput
            value={search}
            onChange={setSearch}
            placeholder="검색어를 입력하세요"
            rightSection={<IconSearch />}
          />
          <DateSelectMenu
            dateRange={dateRange}
            setDateRange={setDateRange}
            opened={opened}
            onOpen={open}
            onClose={close}
          />
        </Group>
        <Pagination total={totalPage} value={page} onChange={setPage} />
      </Group>
      <ResponseHistoryTable
        responses={responses || []}
        loading={isLoading}
        emptyMessage={renderEmptyMessage()}
      />
    </PageContainer>
  );
};

export default ResponseHistoryPage;
