const Project=()=>{
   
    const dataStructures = [
        
        'Array',
        'Stack',
        'Queue',
        'Circular Queue',
        'Singly Linked List',
        'Doubly Linked List'
      ];
      
      const projectLink = "https://drive.google.com/file/d/1_AfsYQwXAamGUYajUPvFa17vEKwga4ll/view?usp=sharing"; // Replace with your actual project link
      
    return(
        
        <div className="work">
            <h2 style={{color:"brown", textDecoration:"underline"}}>Swings Project 1 :</h2>
            <h3>Data structure :</h3>
        <ul>
          {dataStructures.map((structure, index) => (
            <li key={index}>{structure}</li>
          ))}
        </ul>
        <li style={{color:"red", fontSize:"22px", marginLeft:"10px",}}>Open Swings Project : -
        <a className="projectlink" href={projectLink} target="_blank" rel="noopener noreferrer" >
          
          Click Here
        </a></li>

         <h2 style={{color:"brown", textDecoration:"underline"}}>Project 2 :</h2>
         <h3>Electrical tricycle vehicle for handicapped persons:</h3>
         <p>The goal of the Electrical tricycle project is to bring 
            increased mobility to desibled persons in india, some 
            current users of the hand powered do not have the 
            physical strength so that we build electrical vehicle 
            at low cost for using battery and solar pannel etc </p>
        
         </div>
      
    )
    
}


export default Project;