export function loggedIn() {
  return localStorage.getItem('user') !== null;
}

export function logout() {
  localStorage.removeItem('user');
}

// form validations
export function isEmpty(field) {
  return field === '';
}

export function checkUsername(username) {
  return !isEmpty(username);
}

export function checkEmail(email) {
  return (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email));
}

export function checkPassword(password) {
  return !isEmpty(password);
}
