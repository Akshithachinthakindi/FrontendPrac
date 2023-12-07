const BlogList = ({blogs, title}) => {

    // const BlogList = (props) => {
    //const blogs = props.blogs;  // this is 1 way to pass the props
    //const title = props.title;
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Wriiten by: { blog.author }</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;