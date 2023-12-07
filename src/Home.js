import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "My first website", body: 'lorem ipsum...', author: 'akshitha', id: 1},
        {title: "My second website", body: 'lorem ipsum...', author: 'akshi', id: 2},
        {title: "My third website", body: 'lorem ipsum...', author: 'akshu', id: 3},
    ])

    return (  
        <div className="home">
            <BlogList blogs = {blogs} title = "All of my Blogs"/>
        </div>
    );
}

export default Home;