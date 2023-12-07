import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "My first website", body: 'lorem ipsum...', author: 'akshitha', id: 1},
        {title: "My second website", body: 'lorem ipsum...', author: 'akshi', id: 2},
        {title: "My third website", body: 'lorem ipsum...', author: 'akshu', id: 3},
    ])


    const [name, setName] = useState('akshitha');

    const handleDelete = (id) => {
        const newblogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newblogs);
    }

    useEffect(() => {
        console.log('use effect run');
        console.log(name);
    }, [name]);

    return (  
        <div className="home">
            <BlogList blogs = {blogs} title = "All Blogs" handleDelete={handleDelete}/>
            <BlogList blogs = {blogs.filter((blog) => blog.author === 'akshitha')} title = "Akshitha's Blogs" handleDelete={handleDelete}/>  
            {/* resuing components */}
            <button onClick={() => setName('chinthakindi')}>change name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;