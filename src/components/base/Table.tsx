import {
  Stack,
  Table as MantineTable,
  TableProps as MantineTableProps,
  Text,
  Group,
  Center,
  Loader,
} from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

type TableProps = MantineTableProps & {
  emptyMessage: string;
  loading?: boolean;
};

const Table: React.FC<TableProps> = (props) => {
  const { emptyMessage, loading, ...rest } = props;

  if (loading) {
    return (
      <Center
        w="100%"
        mih={300}
        bg="var(--mantine-color-gray-0)"
        style={{ border: `1px solid var(--mantine-color-gray-3)` }}
      >
        <Loader />
      </Center>
    );
  }

  const isBodyEmpty = rest.data?.body?.length === 0;

  return (
    <Stack gap={0} w="100%">
      <MantineTable withTableBorder {...rest} />
      {isBodyEmpty && (
        <Group
          h={400}
          bg="var(--mantine-color-gray-0)"
          color="gray"
          gap={4}
          align="center"
          justify="center"
          style={{
            border: `1px solid var(--mantine-color-gray-3)`,
            borderTop: 0,
          }}
        >
          <IconInfoCircle color="var(--mantine-color-gray-6)" />
          <Text c="var(--mantine-color-gray-6)">{emptyMessage}</Text>
        </Group>
      )}
    </Stack>
  );
};

export default Table;
