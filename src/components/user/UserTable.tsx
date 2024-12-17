import {
  Button,
  Center,
  Group,
  Pagination,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useDisclosure, useInputState } from "@mantine/hooks";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import Table from "components/base/Table";
import UserAddDrawer from "components/user/UserAddDrawer";
import useUsers from "hooks/useUsers";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const UserTable: React.FC = () => {
  const { data, isLoading, isError } = useUsers();

  const [searchParams, setSearchParams] = useSearchParams();

  const PageSize = 5;

  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  const [search, setSearch] = useInputState(searchParams.get("search") || "");

  const [opened, { open, close }] = useDisclosure();

  useEffect(() => {
    setSearchParams({ page: page.toString(), search });
  }, [page, search]);

  if (isError) {
    return (
      <Center mih={300}>
        <Text>데이터를 불러오는 중에 오류가 발생했습니다.</Text>
      </Center>
    );
  }

  const filteredData =
    data?.filter(
      (user) =>
        user.name.includes(search) ||
        user.email.includes(search) ||
        user.team.includes(search)
    ) || [];

  const tableData = {
    head: ["이름", "이메일", "팀"],
    body: filteredData
      .slice((page - 1) * PageSize, page * PageSize)
      .map((user) => [user.name, user.email, user.team]),
  };

  const totalPage = Math.ceil(filteredData.length / PageSize);

  return (
    <Stack>
      <Group justify="space-between">
        <Group>
          <TextInput
            rightSection={<IconSearch size={20} />}
            placeholder="검색어를 입력하세요"
            value={search}
            onChange={setSearch}
          />
          <Button leftSection={<IconPlus size={20} />} onClick={open}>
            사용자 추가
          </Button>
        </Group>
        <Pagination total={totalPage} value={page} onChange={setPage} />
      </Group>
      <Table
        withTableBorder
        loading={isLoading}
        data={tableData}
        emptyMessage="사용자 목록이 없어요. 사용자 추가 버튼을 눌러 사용자를 추가 해 주세요."
      />
      <UserAddDrawer opened={opened} onClose={close} />
    </Stack>
  );
};

export default UserTable;
