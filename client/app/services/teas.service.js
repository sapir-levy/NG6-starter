/**
 * Created by Sapir on 05/11/2016.
 */
export default class Teas {
  constructor($http, $q) {
    'ngInject';

    this._$http = $http;
    this._$q = $q;
    this.list = null;
  }

  getAllTeas() {
    if (this.list !== null) {
      return this._$q.resolve(this.list);
    }

    return this._$http.get("http://localhost:3000/teas")
      .then((response) => {
        this.list = response.data;
        return this.list;
      });
  }

  getExpensiveTeas(top) {
    return this.getAllTeas().then((teas) => {
      return teas.sort((a, b) => b.price - a.price).slice(0, top);
    })
  }

  getTeaById(id){
    return this.getAllTeas().then((teas) => {
      return teas.filter(t => t.id == id)[0];
    })
  }
}
