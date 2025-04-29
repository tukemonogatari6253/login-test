import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <h1>oWWWWWW!!Welcome</h1>
      {!user ? (
        <a href="/api/auth/login">Login</a>
      ) : (
        <>
          <p>oWWWWWW!!Hello, {user.name}</p>
          <a href="/api/auth/logout">Logout</a>
          <br />
          <Link href="/protected">Go to Protected Page</Link>
        </>
      )}
    </div>
  );
}
export const getServerSideProps = async () => {
  return { props: {} };
};
