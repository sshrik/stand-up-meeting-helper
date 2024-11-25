import { Button, NumberInput, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import User from "models/User";

type UserFormProps = {
  onSuccess?: () => void;
};

const UserForm: React.FC<UserFormProps> = (props) => {
  const { onSuccess } = props;

  const { getInputProps, onSubmit } = useForm<User>({
    initialValues: {
      name: "",
      team: "",
      email: "",
    },
    validateInputOnChange: true,
    validate: {
      name: (value) => {
        if (value.length < 2) return "이름은 2글자 이상이어야 합니다.";
        if (value.length > 10) return "이름은 10글자 이하이어야 합니다.";
        return null;
      },
      team: (value) => {
        if (value.length < 2) return "팀은 2글자 이상이어야 합니다.";
        return null;
      },
      email: (value) => {
        if (!value.includes("@")) return "이메일 형식이 아닙니다.";
        return null;
      },
    },
  });

  const handleSubmit = onSubmit((values) => {
    console.log(values);
    onSuccess?.();
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack maw={450}>
        <TextInput label="이름" {...getInputProps("name")} />
        <NumberInput label="나이" {...getInputProps("age")} />
        <TextInput label="오늘의 한마디" {...getInputProps("today")} />
        <Button type="submit">추가</Button>
      </Stack>
    </form>
  );
};

export default UserForm;
