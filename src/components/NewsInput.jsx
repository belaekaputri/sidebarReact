/* eslint-disable react/prop-types */
import React from 'react';

class NewsInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title : '',
            body  : '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler= this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler= this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        this.setState(()=>{
            return{
                title : event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event){
        this.setState(()=>{
            return{
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState(() => {
            return {
                title:"",
                body: "",
            };
        });
    }

    render(){
        return(
            <form className='mt-2 h-60 mx-auto bg-indigo-200 w-1/2 flex flex-col items-center justify-center rounded-lg ' onSubmit={this.onSubmitEventHandler}>
              <h1 className='text-lg'>Add News</h1>
              <input type="text" className='outline-indigo-500 px-2 py-2  m-1.5   w-5/6 h-8' placeholder='Title.' value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
              <textarea  className='w-5/6 outline-indigo-500   px-2 py-2  m-1.5 ' placeholder='Text.' value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
              <button type='submit' className='bg-indigo-500  m-1.5   w-5/6 h-10 btn-Add'>Add</button>
            </form>
        )
    }
}

export default NewsInput