export default function ComposedComponent(props){//here the props.children property has all the html dom children indide of it
    console.log(props);
    return (
        <>
    <div> 
        <h1>this is a sample heading</h1>
        {props.children[0].props.children};
    </div>
        </>
    )
}