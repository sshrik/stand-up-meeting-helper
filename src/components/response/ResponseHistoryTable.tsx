import Table from "components/base/Table";
import { ResponseHistory } from "models/ResponseHistory";

type ResponseHistoryTableProps = {
  responses: ResponseHistory[];
  loading?: boolean;
  emptyMessage: string;
};

const ResponseHistoryTable: React.FC<ResponseHistoryTableProps> = (props) => {
  const { responses, loading, emptyMessage } = props;

  const tableData = {
    head: ["이름", "오늘의 기분", "어제 한 일", "오늘 할 일", "제출 일자"],
    body: responses.map((response) => [
      response.userName,
      response.feeling,
      response.lastTask,
      response.todayTask,
      response.responseDate,
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

export default ResponseHistoryTable;
