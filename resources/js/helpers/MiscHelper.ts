import { isEmpty } from "lodash";

export const empty = (value: any, excludeZero = false): boolean => {
    if (value === null || value === undefined || isNaN(value)) {
        return true;
    }
    if (typeof value === "string") {
        return value === '';
    }
    if (typeof value === 'number') {
        return excludeZero ? value !== 0 : false;
    }
    return isEmpty(value);
}