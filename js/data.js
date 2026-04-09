export const TOTAL_HOUR_OF_DAY_IN_MIN = 1440;
export const CURRENT_WEEK_OFFSET = 0;
export const PREV_WEEK_OFFSET = -1;
export const NEXT_WEEK_OFFSET = 1;
export let shifts = [];
export let currentWeekOffSet = 0;

export function setShifts(newShifts) {
    shifts = newShifts;
}

export function setCurrentWeekOffset(value) {
    currentWeekOffSet += value;
}
