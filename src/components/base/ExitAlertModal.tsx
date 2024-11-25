import { Button, Group, Modal, ModalProps, Text } from "@mantine/core";

type ExitAlertModalProps = ModalProps & {
  onConfirm: () => void;
};

const ExitAlertModal: React.FC<ExitAlertModalProps> = (props) => {
  const { onConfirm, onClose } = props;

  return (
    <Modal
      {...props}
      centered
      closeOnClickOutside={false}
      onClose={onClose}
      title="알림"
      size="sm"
    >
      <Text>정말로 나가시겠습니까?</Text>
      <Group justify="flex-end">
        <Button variant="subtle" color="gray" onClick={onClose}>
          취소
        </Button>
        <Button onClick={onConfirm} color="red">
          나가기
        </Button>
      </Group>
    </Modal>
  );
};

export default ExitAlertModal;
