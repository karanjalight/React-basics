
import './App.css';
import { Planet} from './Planets'

function App() {
  const name= true;
  const age=14;
  const company = "Itisha";

  /* Working with arrays */
  const planets= [
    {name:'venus', isGasPlanet: false},
    {name:'mercury', isGasPlanet: false},
    {name:'earth', isGasPlanet: true},
    {name:'mars', isGasPlanet: true},
    {name:'jupiter', isGasPlanet: true},
    {name:'Saturn', isGasPlanet: true}
    ]

  return (
    <div className="App" >
    
    <User name="paul" email="pau@gmail.com" age="21" />
    <Jobs salary={9000} company="Google" position="Junior Developer" />
    {age===16? <h1>Big boy </h1> : <h1>Small Niggz</h1>}

    {name? <h1>BIG MAN</h1> : <h1>Young Boy</h1>}
    {name && <h1> name is true</h1>}

    {company==='Itisha'? <h1>Itisha Kila kitu ya Kudish! </h1> : <h1>Not available</h1> }


    
    {planets.map((name, key) =>{
      /* the variable key above should be unique for every component */
      /* name is a place holder for the values in an array it is used for the queries */
      return (
              
        /* we use this key in the div to remove the error that this ting should be unique */
        /* Planet is the imported component*/

        <div key={key}>

        
        {name.isGasPlanet && <Planet name={name.name}  />}
        
        
        </div>
      );

    })};

    </div>
  );
}

const Jobs = (props) => {
  return(
    <div>
    <h2 > {props.salary} </h2>
    <h2> {props.position} </h2>
    <h2> {props.company} </h2>
    </div>
  );
}

const User = (props ) =>{
  return(
    <div>
      <h1> {props.name} </h1>
      <h1> {props.email} </h1>
      <h1> {props.age} </h1>
    </div>
  );
}

export default App;
