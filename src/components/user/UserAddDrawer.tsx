import { Drawer, DrawerProps } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ExitAlertModal from "components/base/ExitAlertModal";
import UserForm from "components/user/UserForm";

const UserAddDrawer: React.FC<DrawerProps> = (props) => {
  const { onClose, ...rest } = props;

  const [opened, { open, close }] = useDisclosure();

  const handleClose = () => {
    open();
  };

  const confirmClose = () => {
    close();
    onClose();
  };

  return (
    <Drawer
      {...rest}
      onClose={handleClose}
      position="right"
      title="사용자 추가"
    >
      <UserForm onSuccess={onClose} />
      <ExitAlertModal
        opened={opened}
        onClose={close}
        onConfirm={confirmClose}
      />
    </Drawer>
  );
};

export default UserAddDrawer;
