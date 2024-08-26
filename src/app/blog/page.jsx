import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

// Static data to replace API fetching
const staticPosts = [
  {
    id: 1,
    title: "Post 1",
    body: "This is the body of post 1",
    userId: 1,
  },
  {
    id: 2,
    title: "Post 2",
    body: "This is the body of post 2",
    userId: 1,
  },
  {
    id: 3,
    title: "Post 3",
    body: "This is the body of post 3",
    userId: 2,
  },
];

const BlogPage = () => {
  return (
    <div className={styles.container}>
      {staticPosts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;


// import PostCard from "@/components/postCard/postCard";
// import styles from "./blog.module.css";
// import { getPosts } from "@/lib/data";

// // FETCH DATA WITH AN API
// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

// const BlogPage = async () => {

//   // FETCH DATA WITH AN API
//   const posts = await getData();

//   // FETCH DATA WITHOUT AN API
//   // const posts = await getPosts();

//   return (
//     <div className={styles.container}>
//       {posts.map((post) => (
//         <div className={styles.post} key={post.id}>
//           <PostCard post={post} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BlogPage;
