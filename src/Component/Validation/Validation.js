export const isValidEmail = function (Email) {

    return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(Email)

}
export  const isValidName = function (Name) {

 return   /^[a-zA-Z ]+$/.test(Name)

}
export const  isValidUserName = function (UserName) {

    return  /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(UserName)

}
export const isValidPassword = function (Password) {

    return  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(Password)

}
export const isValidPhone = function (Phone) {

    return  /^[6-9]\d{9}$/.test(Phone)

}