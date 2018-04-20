import React, { Component } from 'react';
import Project from './Project'

const projects = [
  {
   title: "Real estate agency",
   description: "Webpage created with Wordpress for a real estate agency.",
   images1: [idosnaosd, inofdnaso, sainfoasdn]
  },{
   title: "Film Festival",
   description: "Webpage created with html5 and css3 using bootstrap for an outdoor film festival."
  }
]

class Projects extends Component {
 render () {
   return (
     <div id="projects" className="projects">

             {projects.map(function(project, i){
               return (
                <div key={i}>
                   <Project data={project}/>
                </div>
               )
             })}

             {/* <Carousel>
               {for() {
                 // carousel item
               }}
             </Carousel> */}

     </div>
   );
 }
}



export default Projects;
