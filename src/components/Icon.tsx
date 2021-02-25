import React from 'react';



let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons',true,  /\.svg$/));}catch (error) {console.log(error);}

type Props={
  name?: string;
}
const Icon=(prop: Props )=>{
  return(
  <svg className="icon">

    { prop.name && <use xlinkHref={'#'+ prop.name}/>}
  </svg>
  )}
export default Icon;