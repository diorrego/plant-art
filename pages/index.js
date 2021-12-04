import Head from 'next/head';
import Layout from './../components/Layout';

export default function Home() {
  return (
    <div className="bg-yellow-50">
      <Layout>
        <div className="w-full h-screen">Hero</div>
      </Layout>
    </div>
  );
}
