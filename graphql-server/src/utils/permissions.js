import { getUserPermission } from '../lib/MockData';

const permissions = {
    'getUserPermission': {
    all: ['head-trainer'],
    read: ['trainee', 'trainer'],
    write: ['trainer'],
    delete: [],
    },
    }

// console.log(Object.keys(object1));
export const getKeyValue = (value) => {
    return (Object.keys(permissions.getUserPermission).filter(key =>
      permissions.getUserPermission[key].indexOf(value)!==-1 ))
    }


const  aa = getKeyValue('trainer');
console.log('---aaaaaaaaaaa---',aa);


