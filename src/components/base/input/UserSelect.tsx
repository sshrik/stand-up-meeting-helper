import { Loader, Select, SelectProps } from "@mantine/core";
import useUsers from "hooks/useUsers";

const UserSelect: React.FC<SelectProps> = (props) => {
  const { data, isLoading } = useUsers();

  const options = data?.map((user) => ({
    value: user.name,
    label: `${user.name} (${user.email})`,
  }));

  return (
    <Select
      {...props}
      data={options}
      rightSection={isLoading && <Loader size="sm" />}
    />
  );
};

export default UserSelect;
