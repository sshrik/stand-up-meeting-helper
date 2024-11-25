import { Button, Menu, MenuProps } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { dateToString } from "utils/date";

type DateSelectMenuProps = MenuProps & {
  dateRange: [Date | null, Date | null];
  setDateRange: (dateRange: [Date | null, Date | null]) => void;
};

const DateSelectMenu: React.FC<DateSelectMenuProps> = (props) => {
  const { dateRange, setDateRange, ...rest } = props;

  const handleDateChange = (dateRange: [Date | null, Date | null]) => {
    setDateRange(dateRange as [Date, Date]);
  };

  const renderSelectButtonMessage = () => {
    if (dateRange[0]) {
      if (dateRange[1]) {
        return `${dateToString(dateRange[0])} 부터 ${dateToString(
          dateRange[1]
        )} 까지`;
      }

      return `${dateToString(dateRange[0])} 이후`;
    }

    return "날짜를 선택해주세요.";
  };

  return (
    <Menu {...rest}>
      <Menu.Target>
        <Button variant="subtle" color="dark">
          {renderSelectButtonMessage()}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <DatePicker
          type="range"
          value={dateRange}
          onChange={handleDateChange}
          firstDayOfWeek={0}
        />
      </Menu.Dropdown>
    </Menu>
  );
};

export default DateSelectMenu;
