import React from 'react'

//Higher Order Component
const WithHoc = (Wrapcomponent) => {
    
    const newComponent =(props)=>{
        return (
            
            <div style={{backgroundColor: 'red'}}>
                <Wrapcomponent name="Naim" {...props}/>
            </div>
        )
    }

    return newComponent
}

export default WithHoc
