import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { getMicroCMSData } from '../lib/microcms';

export default function Protected({ data }) {
  return (
    <div>
      <h1>Protected Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const data = await getMicroCMSData();
    return { props: { data } };
  }
});
