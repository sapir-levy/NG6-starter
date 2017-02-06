export default class Teas {
  constructor($http, $q) {
    'ngInject';

    this._$http = $http;
    this._$q = $q;
    this.list = null;
    this.currentTeas = this.list;
    this.currentCategory = 'All';
    this.getAllTeas();
  }

  getAllTeas() {
    if (this.list !== null) {
      return this._$q.resolve(this.list);
    }

    return this._$http.get("http://localhost:8080")
      .then((response) => {
        this.list = response.data.teas;
        this.currentTeas = this.list;
        return this.list;
      });
  }

  getExpensiveTeas(top) {
    return this.getAllTeas().then((teas) => {
      return teas.sort((a, b) => b.price - a.price).slice(0, top);
    })
  }

  getTeaById(id) {
    return this.getAllTeas().then((teas) => {
      return teas.filter(t => t.id == id)[0];
    })
  }

  getTeaTypes() {
    return this.getAllTeas().then((teas) => {
      const teaTypes = ['All'];
      teas.filter(t => {
         return teaTypes.indexOf(t.teaType) == -1 && teaTypes.push(t.teaType);
      });
      return teaTypes;
    });
  }


  getTeasByCategory(category) {
    this.currentCategory = category;

    if (category == 'All') {
      return this.getAllTeas().then((teas) => {
        this.currentTeas = teas;
        return this.currentTeas;
      });
    }
    else {
      return this.getAllTeas().then((teas) => {
        this.currentTeas = teas.filter(t=> t.teaType == category);
        return this.currentTeas;
      });
    }
  }

  getTeasByName(searchedTea){

  }
}
