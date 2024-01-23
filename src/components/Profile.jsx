

import { useState } from "react"
import { getImageUrl } from './utils.js';
// import UseEffectComponent from "./useEffectComponent.jsx";


function Avatar(/*props*/{person,size}) { //single object(props) or we can make it multiple entities inside a single object
  // console.log(props);
  console.log(person);
  console.log(size);

  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}




export default function Profile() {
    const [loggedIn,setLoggedIn] = useState(true);
    const [userNum,setUserNum] = useState(2);//could be 1,2,3 
    return (//conditional rendering below ui(katherine johnson image ) is only rendered based on the state of the component is loggedIn
    //in the second html line the conditional rendering is handling more than if else (3 conditions)
        <div>
          {loggedIn?<img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />:<h1>not logged in</h1>}
          {userNum==1?<h1>user1</h1>:userNum==2?<h2>user2</h2>:<h3>user3</h3>} 
        
          <Avatar //this is a simple example where props are bein passed to the child component avatars
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar   //yellow curly bracess represent jsx code inserted in html and green represents objects
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
      {/* <UseEffectComponent></UseEffectComponent> */}

      </div>
    )
  }