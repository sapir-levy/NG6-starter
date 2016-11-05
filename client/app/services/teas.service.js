/**
 * Created by Sapir on 05/11/2016.
 */
class Teas {
  constructor($http) {
    'ngInject';

    this._$http = $http;
  }

  getTeas() {
    return this._$http({
      url: 'http://localhost:3000/teas',
      method: 'GET'
    }).then((result) => {
        return result;
      }
    )
  }
}

export default Teas;
