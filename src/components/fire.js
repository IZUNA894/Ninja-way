import React from 'react';
import Rainbow from "../hoc/rainbow.js";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom"
class App extends React.Component {

  // componentDidMount(){
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //        .then((res)=>{
  //                       //console.log(res);
  //                       this.setState({posts:res.data.slice(0,20)})})
  // }
  handleClick=(id)=>{
    window.location.href = "./"+id;
  }
  render(){
    //console.log(this.props);
    var posts="";
    if(this.props.posts.length == 0){
      posts = <div className="">No posts yet!</div>

    }
    else{
      posts= this.props.posts;
      posts=posts.map((item)=>{
        return(
                    <div className="row" key={item.id} /*onClick={()=>{this.handleClick(item.id)}}*/>
                      <div className="col s12 m12">
                        <div className="card red darken-1" >
                          <div className="card-content white-text">
                            <Link to={'/' + item.id}>
                                <span className="card-title white-text">{item.title}</span>
                            </Link>
                            <p>{item.body}</p>
                          </div>

                        </div>
                      </div>
                    </div>
        )
      })
    }
  return (
    <div className="container">
    {posts}
    </div>
  );
}
}

const mapStateToProps=(state)=>{
  //var id=ownProps.match.params.post_id;
  return(
    {
      posts:state.posts/*.find((post)=>{post.id===id})*/
    }
  )
}
export default connect(mapStateToProps)(Rainbow(App));
