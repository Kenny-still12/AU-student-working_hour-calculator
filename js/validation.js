import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";


export function isSelectedWeek(shift, offSet = 0) {
    const shiftDate = dayjs(shift.date);
    const targetWeek = dayjs().add(offSet, "week");

    return shiftDate.isSame(targetWeek, "week")
}