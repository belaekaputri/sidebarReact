// eslint-disable-next-line no-unused-vars
import React from 'react';
import {addNote} from '../utils/local-data';
import NewsInput from '../components/NewsInput';
import {useNavigate} from 'react-router-dom';

function AddNewPage(){
    const navigate = useNavigate();

    function onAddNoteHandler(note){
        addNote(note);
        navigate('/home');
    }

return(
    <section>
        <NewsInput addNote={onAddNoteHandler}/>
        
    </section>
)
}

export default AddNewPage;