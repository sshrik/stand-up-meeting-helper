import Table from "components/base/Table";
import { TodayResponse } from "models/TodayResponse";

type ResponseTableProps = {
  responses: TodayResponse[];
  loading?: boolean;
  emptyMessage: string;
};

const ResponseTable: React.FC<ResponseTableProps> = (props) => {
  const { responses, loading, emptyMessage } = props;

  const tableData = {
    head: ["이름", "오늘의 기분", "어제 한 일", "오늘 할 일"],
    body: responses.map((response) => [
      response.userName,
      response.feeling,
      response.lastTask,
      response.todayTask,
    ]),
  };

  return (
    <Table
      withTableBorder
      data={tableData}
      loading={loading}
      emptyMessage={emptyMessage}
    />
  );
};

export default ResponseTable;
