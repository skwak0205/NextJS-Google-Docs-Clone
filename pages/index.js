import Head from 'next/head';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Google Docs Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
}
