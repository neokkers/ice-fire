import axios from "axios";

export default class ApiService {
  _apiBase = "https://anapioficeandfire.com/api";

  sendRequest = link =>
    axios
      .get(link)
      .then(r => r)
      .catch(console.log);

  getResource = (type, id) =>
    this.sendRequest(`${this._apiBase}/${type}${id ? `/${id}` : ""}`);
}
