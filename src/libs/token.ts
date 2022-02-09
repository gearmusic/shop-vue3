export function setToken(token: string): boolean {
  if(token !== ''){
    localStorage.setItem('token', token)
    return true 
  }
  return false
} 

export function getToken() {
  return localStorage.getItem('token') 
} 

export function removeToken() {
  return localStorage.removeItem('token') 
} 