import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userWorkSheetID } from "constants/SpreadSheet";
import { useAtomValue } from "jotai";
import User from "models/User";
import { SpreadSheetAtom } from "utils/states/SpreadSheet";

const useAddUser = () => {
  const queryClient = useQueryClient();

  const doc = useAtomValue(SpreadSheetAtom);

  return useMutation({
    mutationFn: async (user: User) => {
      const sheet = doc.sheetsById[userWorkSheetID];

      const rows = await sheet.getRows<User>();

      const existUser = rows.find((row) => row.get("email") === user.email);

      if (existUser) {
        throw new Error(
          `이미 등록된 사용자입니다. 사용자 이름: ${existUser.get("name")}`
        );
      }

      await sheet.addRow(user);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export default useAddUser;
