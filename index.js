
function createLoginTracker(userInfo){
  let attemptCount = 0
  let isLocked = false

const login = (passwordAttempt)=>{
  if(isLocked){
    return 'Account is locked';
  }
  attemptCount++;
  if(passwordAttempt === userInfo.password && passwordAttempt<=3){
    return 'Login is successfully'
  }
  if(passwordAttempt != userInfo.password && passwordAttempt<=3){
    return 'Login failed'
  }
  if(attemptCount >= 3){
    isLocked = true
    return 'Account is locked due to too many failed login attempts'
  }
  return `Attempt: ${attemptCount}: Login failed`

};
return login
}
userInfo = {
  "username": 'user',
  "password": "passsword123"
}
const loginAttempt = createLoginTracker(userInfo)

// console.log(loginAttempt(user))
// // console.log(loginAttempt('wrong'))
// // console.log(loginAttempt('correct'))
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};