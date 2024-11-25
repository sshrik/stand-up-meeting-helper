import { Select, SelectProps } from "@mantine/core";
import React from "react";

const FeelingSelect: React.FC<SelectProps> = (props) => {
  const options = [
    { value: "😊 (좋음)", label: "😊 (좋음)" },
    { value: "😌 (차분함)", label: "😌 (차분함)" },
    { value: "🤔 (집중)", label: "🤔 (집중)" },
    { value: "😊 (만족)", label: "😊 (만족)" },
    { value: "💪 (도전적)", label: "💪 (도전적)" },
    { value: "😎 (자신감 있음)", label: "😎 (자신감 있음)" },
    { value: "🙌 (만족스러움)", label: "🙌 (만족스러움)" },
    { value: "🧠 (전략적)", label: "🧠 (전략적)" },
  ];

  return <Select {...props} data={options} />;
};

export default FeelingSelect;
