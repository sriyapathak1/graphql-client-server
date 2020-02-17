
import {MockDdata, MockEmailRole, getUserPermission} from '../lib/MockData';

export const validateEmail = (email) => {
  var regx = /(\W|^)[\w.+\-]{5,}@successive\.tech(\W|$)/
  // console.log("regx.test(email)",regx.test(email));
  return regx.test(email);
}

export const validatorUserRole = (email,role) =>{
  const x = MockEmailRole.filter(m => {
    // console.log("=========",email,role);
    // console.log("inside if",m);
    if(m.email === email && m.role === role){
      return m;
    }
  });
  // console.log("x---------=========", x)
  return x;
}


const Arr = [];
const ArrInvalid = [];
export const validateUser = () => {
  MockDdata.map(field => {
   const traineeValue= validateEmail(field.trainee);
   const reviwerValue = validateEmail(field.reviewer);
   if(traineeValue === true && reviwerValue === true){
     return Arr.push(traineeValue, reviwerValue);
   } else{
     return ArrInvalid.push(traineeValue, reviwerValue);
   }
  })
  console.log(ArrInvalid);
  
}
console.log('validate function', validateUser());

//  const validateUser = () => {
//   console.log(MockDdata,"<<<<<<<<MOcidsjfhsjh")
//   let CountTraineeValid = 0;
//   let CountTraineeInValid = 0;
//   let CountReviewerValid = 0;
//   let CountReviewerInValid = 0;

//   MockDdata.forEach(item => {
//     console.log('-------------data is =======', item);
   
//     if(validateEmail(item.trainee)){
//       CountTraineeValid + 1;
//     } else{
//       CountTraineeInValid+ 1; 
//     }

//     if(validateEmail(item.reviewer)){
//       CountReviewerValid + 1;
//     } else{
//       CountReviewerInValid+ 1; 
//     }

    
    // validateEmail(item.reviewer==email);
    // if(traineeValue) {
    //   return true;
    // }
  // });
  // console.log(data,"<<<<<Data----");
  // console.log(traineeValue);
  // console.log(reviwerValue);

// export default validateUser;

