import { useQuery } from "@tanstack/react-query";
import { responseWorkSheetID } from "constants/SpreadSheet";
import { useAtomValue } from "jotai";
import { ResponseHistory } from "models/ResponseHistory";
import { TodayResponse } from "models/TodayResponse";
import { toResponseDate } from "utils/date";
import { SpreadSheetAtom } from "utils/states/SpreadSheet";

const useTodayResponse = () => {
  const doc = useAtomValue(SpreadSheetAtom);

  return useQuery<TodayResponse[]>({
    queryKey: ["responses", "today"],
    queryFn: async () => {
      const rows = await doc.sheetsById[
        responseWorkSheetID
      ].getRows<ResponseHistory>();

      return rows
        .filter((row) => row.get("responseDate") === toResponseDate(new Date()))
        .map((row) => ({
          userName: row.get("userName"),
          feeling: row.get("feeling"),
          lastTask: row.get("lastTask"),
          todayTask: row.get("todayTask"),
        }));
    },
  });
};

export default useTodayResponse;
