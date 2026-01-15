import { connection } from "next/server";

const DateShow = async () => {
  await connection();
  const time = new Date().toLocaleTimeString();
  return <div>DateShow {time}</div>;
};

export default DateShow;
