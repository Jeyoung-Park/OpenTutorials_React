import React, {Component} from "react";
import './App.css';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class Body extends Component{
//   render(){
//     return(
//       <body>
//         <Nav></Nav>
//         <Article></Article>
//       </body>
//     );
//   }
// }

// 컴포넌트를 만드는 코드
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      selected_content_id:2,
      mode:'read',
      subject:{title:'WEB3', sub:'World Wide Web 3!!!'},
      welcome:{title:'Welcome', desc:'Hello, React!!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive.'}
      ]
    }
  }
  render(){
    var _title, _desc=null;
    if(this.state.mode==='welcome'){
      console.log(this.state.mode, "호출");
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
    }else if(this.state.mode==='read'){
      console.log(this.state.mode, "호출");
      for(var i=0;i<this.state.contents.length;i++){
        var data=this.state.contents[i];
        if(data.id===this.state.selected_content_id){
          _title=data.title;
          _desc=data.desc;
          break;
        }
      }
    }
    return(
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}></Subject>
        {/* <header>
          <h1><a href="/" onClick={function(e){
            e.preventDefault(); //디폴트 동작을 막음 -> 페이지 리로드 안 되게 설정
            this.setState({ //state를 바꿀 때 setState 사용
              mode:'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}
        <TOC 
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
            // selected_content_id:
          }.bind(this)}
          data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    )
  }
}

export default App;
