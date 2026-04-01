import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";


// checks if the pushed new shift is in the current displayed week. if it is in previous or next week, then it returns false.
export function isSelectedWeek(shift, currentWeekOffSet) {
    const shiftDate = dayjs(shift.date);
    const targetWeek = dayjs().add(currentWeekOffSet, "week");

    return shiftDate.isSame(targetWeek, "week")
}

// checks if there is existing shift.
export function hasShift(shift, shifts) {

    return shifts.some((existingShift) => existingShift.date === shift.date)

}