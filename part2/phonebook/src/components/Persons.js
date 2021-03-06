import personsService from './../services/PersonsService';

const persons = ({persons, newFilter, getPersons, setVisibility, setName}) => {

    const deletePersons = (person) => {
      const response = window.confirm(`Delete ${person.name}`)
      if(response){
      personsService
      .deletePerson(person.id)
      .then(() => {
        getPersons();
        setVisibility('delete');
        setName(person.name);
        showPersons();
        return setTimeout(() => {
          setVisibility('')
        }, 5000)
      })}
      else return false;      
    }

    const showPerson = (person) =>{
        console.log(person.name.indexOf(newFilter))
        if(person.name.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1 || newFilter === ""){
          return (
          <div className="row div-persons">
            <p className="col-3">{person.name}  {person.number}</p>
            <button className="btn btn-warning btn-delete col-3" onClick={() => deletePersons(person)}>Delete</button>
          </div>
          )
        }
        else return false;
    }

    const showPersons = () =>{
      return (
        <>
          {persons.map((person, i) => (
            <div key={i}>
              {showPerson(person)}
            </div>
          ))}
        </>
    )
    }

    return (
        <>
        {showPersons()}
        </>
    )
}

export default persons;