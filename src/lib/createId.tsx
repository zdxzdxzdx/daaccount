
let id = parseInt(window.localStorage.getItem('IdMax')|| '0');
const createId = ():number=> {
  id += 1;
  window.localStorage.setItem('idMax',JSON.stringify(id))
  return  id
};

export {createId};