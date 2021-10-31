import React, {PureComponent, memo} from 'react';

const Try = memo(({tryInfo})=>{
    return(
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    )
});

// class Try extends PureComponent{
//     render(){
//         const {tryInfo} = this.props;
        // return(
        //     <li>
        //         <div>{tryInfo.try}</div>
        //         <div>{tryInfo.result}</div>
        //     </li>
        // )
//     }
// }

// const Try = ({tryInfo}) =>{
//     return (
        // <li>
        //     <div>{tryInfo.try}</div>
        //     <div>{tryInfo.result}</div>
        // </li>
//     )
// }
export default Try;