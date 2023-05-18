import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'kate', id: 1},
    { title: 'Welcome', body: 'lorem ipsum...', author: 'joy', id: 2},
    { title: 'web dev tools', body: 'lorem ipsum...', author: 'kate', id: 3},
]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran')
        console.log(blogs);
    });
    //let name = "Esther";
const [name, setName] = useState("esther");
const [age, setAge] = useState(26);
    const handleClick = () => {
        setName("faith");
        setAge(30);
        
    }
    return ( 
        <div className="home">
          <Bloglist blogs={blogs} title= "All Blogs" handleDelete={handleDelete}/>
          <Bloglist blogs={blogs.filter((blog) => blog.author ==='kate')} title= "kate's Blog" />
            <h2>Homepage</h2>
            <p>{ name }</p>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;