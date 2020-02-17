"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MockData = require("../../lib/MockData");

var _validation = require("../../utils/validation");

var _permissions = require("../../utils/permissions");

const Query = {
  getUser: (_, {
    /*  trainee, reviewer  */
  }, {}) => {
    try {
      return {
        message: "success",
        status: 200,
        data: _MockData.MockDdata
      };
    } catch (err) {
      console.log('---error---', err);
      return {
        message: err.message
      };
    }
  },
  getUserRole: (_, {
    email,
    role
  }, {}) => {
    try {
      console.log("sriya,=====", email, role);
      console.log(" ----(email)", (0, _validation.validateEmail)(email));

      if (!(0, _validation.validateEmail)(email)) {
        // console.log('----message--', JSON.stringify());
        throw new Error("Email is not valid");
      }

      return {
        message: "success",
        status: 200,
        Roledata: [{
          email: email,
          role: role
        }]
      };
    } catch (error) {
      console.log('----user role--', error);
      return error;
    }
  },
  getRole: (_, {
    email,
    role
  }, {}) => {
    try {
      // console.log("sriya,=====", email, role);
      console.log("----ggggg---(email)", (0, _validation.validatorUserRole)(email, role));
      const validationCheck = (0, _validation.validatorUserRole)(email, role);
      console.log('--validationcheck----', validationCheck);

      if (!validationCheck.length) {
        throw new Error("Email && role doesn't match");
      }

      return {
        message: "success",
        status: 200,
        RoleMatch: [{
          email: email,
          role: role
        }]
      };
    } catch (error) {
      console.log('----user role--', error);
      return error;
    }
  },
  getPermission: (_, {
    role
  }, {}) => {
    try {
      console.log('--checking getKeyValue function----', _permissions.getKeyValue);
      const result = (0, _permissions.getKeyValue)(role);
      console.log('result isg---', result);

      if (!(0, _permissions.getKeyValue)(role)) {
        throw new Error("User do not have right");
      } else if (result.toString() == 'all') {
        return {
          message: "success",
          status: 200,
          accessRole: [{
            role: 'read,write,delete'
          }]
        };
      }

      return {
        message: "success",
        status: 200,
        accessRole: [{
          role: result.toString()
        }]
      };
    } catch (error) {
      console.log('----user role--', error);
      return error;
    }
  }
};
var _default = Query; // console.log('-------hhgghhgghghghgh-----------------');
// testApollo: () => {
//     console.log('===in====')
//     return "Apollo server setup"
// },

exports.default = _default;