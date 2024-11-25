import { Stack, StackProps } from "@mantine/core";

const PageContainer: React.FC<StackProps> = (props) => {
  return <Stack p="sm" mih="calc(100vh - 51px)" gap={4} {...props} />;
};

export default PageContainer;
