"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKeyValue = void 0;

var _MockData = require("../lib/MockData");

const permissions = {
  'getUserPermission': {
    all: ['head-trainer'],
    read: ['trainee', 'trainer'],
    write: ['trainer'],
    delete: []
  }
}; // console.log(Object.keys(object1));

const getKeyValue = value => {
  return Object.keys(permissions.getUserPermission).filter(key => permissions.getUserPermission[key].indexOf(value) !== -1);
};

exports.getKeyValue = getKeyValue;
const aa = getKeyValue('trainer');
console.log('---aaaaaaaaaaa---', aa);