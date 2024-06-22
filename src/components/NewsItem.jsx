// eslint-disable-next-line no-unused-vars
import React from 'react';
import NewsItemTitle from './NewsItemTitle';
import NewsItemBody from './NewsItemBody';
import {showFormattedDate} from '../utils/index';

// eslint-disable-next-line react/prop-types
function NewsItem({ title, createdAt, id,body}){
   return(
    <div className='border-solid border-2 border-indigo-400 px-2  py-2'>
       <NewsItemTitle title ={title} createdAt=  {showFormattedDate(createdAt)} id={id}/>
       <NewsItemBody body={body}/>
    </div>
   ) 
}

export default NewsItem;