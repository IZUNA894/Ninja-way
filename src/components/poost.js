import React from 'react';
import Rainbow from "../hoc/rainbow.js";
import { connect } from "react-redux";

class App extends React.Component {

  // componentDidMount(){
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //        .then((res)=>{
  //                       //console.log(res);
  //                       this.setState({posts:res.data.slice(0,20)})})
  // }
  handleClick(){
    var id = this.props.post.id;
    this.props.deletePost(id);
    this.props.history.push("../");
  }
  render(){
    console.log("ho");
    var post="";
    if(!this.props.posts){
      post = <div className="">Still Loading</div>

    }
    else{
      post= this.props.posts;
              post= <div className="row" key={post.id} >
                      <div className="col s12 m12">
                        <div className="card red darken-1" >
                          <div className="card-content white-text">
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                            <div className="center">
                            <button className="btn grey" onClick={ this.handleClick}>Delete</button>
                          </div>

                        </div>
                      </div>
                    </div>

  return({
    <div className="container">
    {post}
    </div>});
}
}

const mapStateToProps = (state,ownProps)=> {
    var id = ownProps.match.params.post_id;
  return(
    {
      posts:state.posts.find((item)=>item.id == id)
    }
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch({type: 'DELETE_POST', id: id})
  }
};
export default connect(mapStateToProps)(Rainbow(App));
