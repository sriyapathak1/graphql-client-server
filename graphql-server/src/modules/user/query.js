import { MockDdata } from '../../lib/MockData';
import { validateEmail, validatorUserRole } from '../../utils/validation';
import { getKeyValue } from '../../utils/permissions';

const Query = {
    getUser: (_, {/*  trainee, reviewer  */}, { }) => {
        try {
            return {
                message: "success",
                status: 200,
                data: MockDdata,
            }
        } catch (err) {
            console.log('---error---', err);
            return {
                message: err.message,
            }
                ;
        }
    },
    getUserRole: (_, { email, role }, { }) => {
        try {
            console.log("sriya,=====", email, role);
            console.log(" ----(email)", validateEmail(email));
            if (!validateEmail(email)) {
                // console.log('----message--', JSON.stringify());
                throw new Error("Email is not valid" );
            } 
                return {
                    message: "success",
                    status: 200,
                    Roledata: [{
                        email: email,
                        role: role,
                    }],
                }
            
        } catch (error) {
            console.log('----user role--', error);
            return error;
        }
    },
    getRole: (_, { email, role }, { }) => {
        try {
            // console.log("sriya,=====", email, role);
            console.log("----ggggg---(email)", validatorUserRole(email, role));
            const validationCheck = validatorUserRole(email, role);
            console.log('--validationcheck----', validationCheck);
            
            if (!validationCheck.length) {
                throw new Error("Email && role doesn't match" );
            } 
                return {
                    message: "success",
                    status: 200,
                    RoleMatch: [{
                        email: email,
                        role: role,
                    }],
                }
        } catch (error) {
            console.log('----user role--', error);
            return error;
        }
    },
    getPermission: (_, { role }, { }) => {
        try {
            console.log('--checking getKeyValue function----', getKeyValue);
            const result = getKeyValue(role);
            console.log('result isg---', result);
            
            if (!getKeyValue(role)) {
                throw new Error("User do not have right" );
            } else if(result.toString() == 'all'){
                return {
                    message: "success",
                    status: 200,
                    accessRole: [{
                        role: 'read,write,delete',
                    }],
                }
            }
                return {
                    message: "success",
                    status: 200,
                    accessRole: [{
                        role: result.toString(),
                    }],
                }
        } catch (error) {
            console.log('----user role--', error);
            return error;
        }
    }
}

export default Query;
// console.log('-------hhgghhgghghghgh-----------------');

    // testApollo: () => {
    //     console.log('===in====')
    //     return "Apollo server setup"
    // },
