import moment from "moment";

export const relativeDate = (myDate) => {
  return moment.utc(myDate).local().startOf("second").fromNow();
};
