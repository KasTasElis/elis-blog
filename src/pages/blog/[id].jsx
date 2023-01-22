const Post = ({ post }) => {
  return (
    <div>
      <h1>Single Post: {post.title}</h1>
      <p>{post.publishedAt}</p>
      <p>{post.content}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  console.log("Params: ", context.params.id);

  const uri = `http://localhost:1337/api/blog-posts/${context.params.id}`;
  const token =
    "Bearer 30f19ade8415cae691a3a7c8e748d51dc4fd6b932e2b4f483e140db2b2afa7e9307beed0f3a07b624070267f190729db1dea622507872f8c0e248b4c660fa2cbde0fa4d59c31d8dd920a3850ac338d17d2af1811827aa00ed5f9179136879a905c455db89ef720051edb4530edb1671cd977a3ecc9380f8546e97c69b9943938";
  const headers = new Headers({
    Authorization: token,
  });

  const response = await fetch(uri, {
    headers,
  });

  const { data } = await response.json();

  return {
    props: {
      post: { id: data.id, ...data.attributes },
    }, // will be passed to the page component as props
  };
}

export default Post;
