import React from 'react'
import Business from '../Business/Business'

const BusinessList = (props) => {
    const {businesses} = props;
    return (
        <div className='BusinessList'>
            {businesses.map((item,index) => {
                return <Business key={index} business={item}/>
            })}
        </div>
    )
}

export default BusinessList
