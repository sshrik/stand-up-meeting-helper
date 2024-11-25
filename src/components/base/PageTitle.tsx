import { Title, TitleProps } from "@mantine/core";

const PageTitle: React.FC<TitleProps> = (props) => {
  return <Title order={3} {...props} />;
};

export default PageTitle;
