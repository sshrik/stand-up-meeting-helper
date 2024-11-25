import { useQuery } from "@tanstack/react-query";
import { userWorkSheetID } from "constants/SpreadSheet";
import User from "models/User";
import { useAtomValue } from "jotai";
import { SpreadSheetAtom } from "utils/states/SpreadSheet";

const useUsers = () => {
  const doc = useAtomValue(SpreadSheetAtom);

  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const rows = await doc.sheetsById[userWorkSheetID].getRows<User>();

      return rows.map((row) => ({
        name: row.get("name") || "",
        team: row.get("team") || "",
        email: row.get("email") || 0,
      }));
    },
  });
};
export default useUsers;
