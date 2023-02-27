import { connection, forgetAll, getTicksHistory } from '../api';

export const tickResponse = async (res: MessageEvent) => {
  const data = JSON.parse(res.data);
  if (data.error !== undefined) {
    console.log('Error : ', data.error.message);
    connection.removeEventListener('message', tickResponse, false);
  }
  if (data.msg_type === 'tick') {
    // console.log('tick = ', data.tick);
  }
  if (data.msg_type === 'history') {
    console.log('history = ', data.history);
  }
};

export const tickHistoryHandler = async (symbol: string) => {
  await forgetAll();
  if (symbol) await getTicksHistory(symbol, true);
  connection.addEventListener('message', tickResponse);
};