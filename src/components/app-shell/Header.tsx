import { AppShell, AppShellHeaderProps, Title } from "@mantine/core";

const Header: React.FC<AppShellHeaderProps> = (props) => {
  return (
    <AppShell.Header {...props} p="xs">
      <Title order={3}>미팅 도우미</Title>
    </AppShell.Header>
  );
};

export default Header;
