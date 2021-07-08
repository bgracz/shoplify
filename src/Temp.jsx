import React from 'react';

function Parent(){
    const data = [{name: 'Data from parent'}];
    return(
        <div>
            <Child dataParentToChild = {data}/>
        </div>
    )
}

function Child ({dataParentToChild}){
    return(
        <div>
            {dataParentToChild}
        </div>
    )
}

export default Parent;