import React from 'react';
import cs from 'classnames';
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons',true,  /\.svg$/));}catch (error) {console.log(error);}

type Props = {
  name?: string;
}&React.SVGAttributes<SVGElement>

const Icon=(props: Props )=>{
  //把属性放到svg上  单独把name children classname拿出来
      const {name,children,className,...rest} = props;
      return(
        <svg className={cs('icon',className)} {...rest}>
        { props.name && <use xlinkHref={'#'+ props.name}/>}
  </svg>
  )}



export default Icon;