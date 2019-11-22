export default class ErrMsgService {
  getMsgByType = type => {
    return {
      title: `Something wrong with ${type} data-fetching`,
      des: `We already sent our best engineers`
    };
  };
}
