import React, { Component } from 'react'

class Project extends Component {

 render () {
   return (
     <div className="project">
       <p className="projectTitle"><strong>{this.props.data.title}</strong></p>
       <p className="projectDescription">{this.props.data.description}.<br/>  </p>
     </div>
   );
 }
}

export default Project;
