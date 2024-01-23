import { useState } from "react"
import { useEffect } from "react";
export default function UseEffectComponent(){
    const[resourceType,setResourceType] = useState("posts");
    const[items,setItems] = useState([]);
    // console.log("Rendered")//this code will run whenever the component renders(render()) (this include click on a new button,resource type changed,initially when the component is mounted,or when the component is updated)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`); // Replace the URL with your API endpoint
            const data = await response.json();
            setItems(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [resourceType]);
   
      const renderListItems = () => {
        return items.map((item) => (
          <li key={item.id}>{item.title || item.name}</li>
          // Adjust the key and the properties based on your API response structure
        ));
      };
    
    return (
        
        <div>
            <button onClick= {() => setResourceType("posts")}>Post</button>
            <button onClick={() => setResourceType("comments")}>Comment</button>
            <button onClick={() => setResourceType("users")}>Users</button>
            <h1>{resourceType}</h1>
            <ul>{renderListItems()}</ul>

        </div>
    
    )
}