import { useMutation, useQueryClient } from "@tanstack/react-query";
import { responseWorkSheetID } from "constants/SpreadSheet";
import { useAtomValue } from "jotai";
import { ResponseHistory } from "models/ResponseHistory";
import { TodayResponse } from "models/TodayResponse";
import { SpreadSheetAtom } from "utils/states/SpreadSheet";

const useAddTodayResponse = () => {
  const queryClient = useQueryClient();

  const doc = useAtomValue(SpreadSheetAtom);

  return useMutation({
    mutationFn: async (response: TodayResponse) => {
      const sheet = doc.sheetsById[responseWorkSheetID];

      const rows = await sheet.getRows<ResponseHistory>();

      const isExist = rows.find(
        (row) =>
          row.get("responseDate") === new Date().toISOString().slice(0, 10) &&
          row.get("userName") === response.userName
      );

      if (isExist) {
        throw new Error("이미 오늘의 응답을 작성하셨습니다.");
      }

      await sheet.addRow(response);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["responses"],
      });
    },
  });
};

export default useAddTodayResponse;
