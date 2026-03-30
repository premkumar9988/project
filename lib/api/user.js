export async function getServerSideProps () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return {
        props: {
            user,
        }
    }
}

export default function Post({ user }) {
    return (
        <div>
            <h1>Post link</h1>
            <ul>
                {post.map(post => (
                   <li key={post.id}>{post.title}  </li>
                ))}
            </ul>
           
        </div>
    )
}