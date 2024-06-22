/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars

import NewsItem from './NewsItem';

// eslint-disable-next-line react/prop-types
function NewsList({ notes}){
    if(notes.length===0){
        return(
            <div className='noteEmpty'>
                <h3>Tidak Ada Catatan</h3>
            </div>
        )
    }
    return(
        <div className="notesList bg-indigo-200 w-1/2 mx-auto">
            {
                notes.map((note)=>(
                    <NewsItem key={note.id}
                    id={note.id}
                    
                    {...note}
                     />
                ))
            }
        </div>
    )
}

export default NewsList;