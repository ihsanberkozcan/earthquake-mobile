import moment from "moment-timezone";

export const localDate = (myDate) => {
    return (moment.utc(myDate).tz("Europe/Istanbul").format("LLL"))
};
 