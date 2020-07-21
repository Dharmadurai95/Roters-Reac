import React, { PureComponent } from 'react';
import './App.css';
import axios from 'axios';

import { NavLink } from 'react-router-dom';




class App extends PureComponent {
  state = {
    navlinks:[], /* [
      { id: 1, title: 'home', body: 'something about the home one content' },
      { id: 2, title: 'about', body: 'about navigation content type anything' },
      { id: 3, title: 'menu', body: 'menu content here  select item' }
    ], */
    showContent: '',
    active: false,
    title:'',
    body:'',
  };
  // shouldComponentUpdate(){
  //  if() 

  // }
  

  componentDidMount() {
    axios.get('/posts')
    .then(response=> {
      const updaobj =[];
      const particularDate = response.data.slice(0,5);
      updaobj.push(particularDate)
      console.log(particularDate)
      this.setState({navlinks:particularDate})
    })
    .catch(error=>{
      console.log(error)
    })
  };


  renderContentHandler = (value) => {
    // const find = [...this.state.navlinks];
    // var findObj = find.filter((value, index) => {
    //   return value.id === id
    // });
    // let setclass = '';
    // const fetchContent = findObj.map((valu) => {
    //  if(valu.id === id) {
    //   setclass =  true
    //  }
    //   return (valu.content);
    // })
    // console.log(this.state.active)
    this.setState({ showContent: value.body, active:value.id })
  }
   addNewList = ()=> {
    
  const newaddedlist = {
    title:this.state.title,
    body:this.state.body
  }
  console.log(this.state.body)
  axios.post('/posts',newaddedlist)
  .then(response=> {
    console.log(response);
    this.props.history.replace('/posts')
  })
  }



  render() {
    let color = []
    if (this.state.active) {
      color.push('active')
    }
    const navLists = this.state.navlinks.map((value, index) => {
      return <a className={this.state.active === value.id? color :null}
        key={value.id}
        onClick={() => this.renderContentHandler(value)}>
        {value.title}
      </a>
    });


    return (
      <div className='App'>
        <li  className={this.state.active}>{navLists}</li>
        {/* <h1>{this.state.showContent.content}</h1> */}
        <p className='content'>{this.state.showContent}</p>
        <div className='newList'>
          <input type='text' onChange={(event)=>this.setState({title:event.target.value})} /><br></br>
          <input type='text' onChange={(event)=>this.setState({body:event.target.value})} /><br></br>
          <button onClick={this.addNewList}>Add new List</button>
        </div>
      </div>
    );
  }
}

export default App;
