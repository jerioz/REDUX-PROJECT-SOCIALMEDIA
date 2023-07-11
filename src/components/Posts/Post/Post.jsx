import { Link } from "react-router-dom"

const Post = ({title, content, id}) => {
    return (
    <>
    <h1>
    <Link to={`/post/${id}`}>{title}</Link> 
    </h1>
    <p>{content}</p>
    </>
    )
}

export default Post