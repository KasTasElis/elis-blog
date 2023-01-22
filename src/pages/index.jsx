import Head from "next/head";
import Link from "next/link";

export default function Home({ pokemons }) {
  return (
    <>
      <Head>
        <title>Elis Website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello world!</h1>

      <ul>
        <li>
          <Link href="/pokemons">Pokemons</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </>
  );
}
