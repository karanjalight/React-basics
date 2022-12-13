export 
const FamilyMembers = (props) => {
  return (
    <div className="family">
      <h2> {props.name} is the {props.position}  </h2>
      
      <h2> {props.age} </h2>
      <h2> {props.present} </h2>
    </div>
  )
};