export enum Pattern {
  unamePattern = "^[a-z0-9_-]{8,15}$",
  pwdPattern = "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?!.*s).{6,12}$",
  mobileNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$",
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
}


// paystausId1=pay
// paystausId2=credit