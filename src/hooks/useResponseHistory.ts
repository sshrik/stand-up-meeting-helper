import { useQuery } from "@tanstack/react-query";
import { responseWorkSheetID } from "constants/SpreadSheet";
import { useAtomValue } from "jotai";
import { ResponseHistory } from "models/ResponseHistory";
import { isGreaterOrSame } from "utils/date";
import { SpreadSheetAtom } from "utils/states/SpreadSheet";

type useResponseHistoryProps = {
  startDate?: Date | null;
  endDate?: Date | null;
  search?: string;
};

const useResponseHistory = (props?: useResponseHistoryProps) => {
  const doc = useAtomValue(SpreadSheetAtom);

  return useQuery<ResponseHistory[]>({
    queryKey: ["responses"],
    queryFn: async () => {
      const rows = await doc.sheetsById[
        responseWorkSheetID
      ].getRows<ResponseHistory>();

      return rows.map((row) => ({
        userName: row.get("userName"),
        feeling: row.get("feeling"),
        lastTask: row.get("lastTask"),
        todayTask: row.get("todayTask"),
        responseDate: row.get("responseDate"),
      }));
    },
    select: (data) =>
      data
        .filter((row) => {
          if (props?.startDate) {
            if (props?.endDate) {
              return (
                isGreaterOrSame(new Date(row.responseDate), props.startDate) &&
                isGreaterOrSame(props.endDate, new Date(row.responseDate))
              );
            }

            return new Date(row.responseDate) >= props.startDate;
          }
          return true;
        })
        .filter((row) => {
          if (props?.search) {
            return (
              row.userName.includes(props.search) ||
              row.feeling.includes(props.search) ||
              row.lastTask.includes(props.search) ||
              row.todayTask.includes(props.search) ||
              row.responseDate.includes(props.search)
            );
          }
          return true;
        })
        .reverse(),
  });
};

export default useResponseHistory;
