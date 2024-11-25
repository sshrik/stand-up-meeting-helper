export const dateToString = (date: Date): string => {
  const dest = new Date(date);

  return `${dest.getFullYear()}년 ${
    dest.getMonth() + 1
  }월 ${dest.getDate()}일 ${
    ["일", "월", "화", "수", "목", "금", "토"][dest.getDay()]
  }요일`;
};

export const todayString = dateToString(new Date());

export const isGreaterOrSame = (a: Date, b: Date): boolean => {
  if (a.getFullYear() >= b.getFullYear()) {
    if (a.getMonth() >= b.getMonth()) {
      if (a.getDate() >= b.getDate()) {
        return true;
      }
    }
  }

  return false;
};
