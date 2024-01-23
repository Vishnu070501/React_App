import { getImageUrl } from "./utils";
// import ListWithUnstableIndex from "./ListWithUnstableIndex";


const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];

  export default function ListRender(props){
    const singleProffesion = people.filter(item => item.profession == props.profession);
    let listItems;
    if(props.profession.toLocaleLowerCase() == 'all'){
        listItems = people.map(person =>
            <li key = {person.name}>
               <img
                 src={getImageUrl(person)}
                 alt={person.name}
               />
               <p>
                 <b>{person.name}:</b>
                 {' ' + person.profession + ' '}
                 known for {person.accomplishment}
               </p>
            </li>
          );
    }else{
        listItems = singleProffesion.map(person =>
            <li key = {person.name}>
               <img
                 src={getImageUrl(person)}
                 alt={person.name}
               />
               <p>
                 <b>{person.name}:</b>
                 {' ' + person.profession + ' '}
                 known for {person.accomplishment}
               </p>
            </li>
          );
    }
    return (
        <>
        <ul>{listItems}</ul>
        </>
    )
  }