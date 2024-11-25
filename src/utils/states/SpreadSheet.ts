import ServiceAccountAuth from "constants/ServiceAccountAuth";
import { documentID } from "constants/SpreadSheet";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { atom } from "jotai";

export const SpreadSheetAtom = atom(async () => {
  const doc = new GoogleSpreadsheet(documentID, ServiceAccountAuth);

  await doc.loadInfo();

  return doc;
});
