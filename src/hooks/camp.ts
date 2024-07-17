import { axiosGet } from "../remotes/axios";

export const getCampList = async ({
  randomNum,
}: {
  randomNum?: number;
}): Promise<any> => {
  const campUrl = `/B551011/GoCamping/basedList?serviceKey=${process.env.SERVICE_KEY}&numOfRows=1&pageNo=${randomNum}&MobileOS=WIN&MobileApp=${process.env.SERVICE_KEY}}&_type=json`;
  return await axiosGet(campUrl);
};
