import { useState } from "react";


const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "My first website", body: 'lorem ipsum...', author: 'akshitha', id: 1},
        {title: "My second website", body: 'lorem ipsum...', author: 'akshi', id: 2},
        {title: "My third website", body: 'lorem ipsum...', author: 'akshu', id: 3},
    ])

    return (  
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Wriiten by: { blog.author }</p>
                </div>
            ))}
        </div>
    );
}

export default Home;