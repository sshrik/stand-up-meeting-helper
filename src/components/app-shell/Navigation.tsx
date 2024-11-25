import { AppShell, AppShellNavbarProps, NavLink } from "@mantine/core";
import { IconCalendar, IconList, IconUsers } from "@tabler/icons-react";
import { NavLink as ReactRouterNavLink } from "react-router-dom";

const Navigation: React.FC<AppShellNavbarProps> = (props) => {
  return (
    <AppShell.Navbar {...props}>
      <NavLink
        component={ReactRouterNavLink}
        to="/"
        label="오늘의 응답"
        leftSection={<IconCalendar />}
      />
      <NavLink
        component={ReactRouterNavLink}
        to="/responses"
        label="응답 모아보기"
        leftSection={<IconList />}
      />
      <NavLink
        component={ReactRouterNavLink}
        to="/users"
        label="사용자 관리"
        leftSection={<IconUsers />}
      />
    </AppShell.Navbar>
  );
};

export default Navigation;
