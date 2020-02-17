"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloDatasourceRest = require("apollo-datasource-rest");

var _MockData = _interopRequireDefault(require("../../lib/MockData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('---emailjhjsfhj---------', email);

class User extends _apolloDatasourceRest.RestDataSource {
  constructor() {
    super(); // this.baseURL = "http://localhost:5000";
  } // async getUser(id){
  //     return this.getUser(`/api/user/${id}`);
  // }
  // async getUser(email) {
  //     try{
  //         const MockData =await this.get()
  //     }
  // }


}

var _default = User; //https://www.youtube.com/watch?v=v0t42xBIYIs

exports.default = _default;