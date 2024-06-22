// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
function NewsItemTitle({ title, createdAt }){
    return(
        <div className="nTitle ">
            <h3>{title} </h3>
            <p>{ createdAt }</p>
        </div>
    )
}

export default NewsItemTitle;