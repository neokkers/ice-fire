import axios from "axios";

export default class ApiService {
  _apiBase = "https://anapioficeandfire.com/api";

  sendRequest = link =>
    axios
      .get(link)
      .then(r => r)
      .catch(console.log);

  getList = (type, page) =>
    this.sendRequest(`${this._apiBase}/${type}${page ? `?page=${page}` : ""}`);

  getSingle = (type, id) => this.sendRequest(`${this._apiBase}/${type}/${id}`);
}
