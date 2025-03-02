import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  const { test } = router.query; // Extract the dynamic param

  return (
    <div>
      <h1>Post ID: {test}</h1>
      <p>This is a dynamic post page.</p>
    </div>
  );
}