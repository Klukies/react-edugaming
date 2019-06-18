export function loggedIn() {
  return localStorage.getItem('user') !== null;
}

export function logout() {
  localStorage.removeItem('user');
}
