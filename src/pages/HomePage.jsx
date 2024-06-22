import React from 'react';
import NewsList from '../components/NewsList';
import {getAllNotes} from '../utils/local-data';

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            notes:getAllNotes()
        }
    }
    render(){
        const notes= this.state.notes
        return(
            <div className="noteApp">
                <h1 className='text-center mt-2'>List Of All News</h1>
                <NewsList notes={notes}/>
            </div>
        )
    }
}

  export default HomePage