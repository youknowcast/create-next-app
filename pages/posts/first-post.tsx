import Head from 'next/head';
import Link from "next/link";
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout home={false}>
      <h1>First Post</h1>
    </Layout>
  );
}
