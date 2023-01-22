import Head from "next/head";
import { useRouter } from "next/router";

const PokemonSinglePage = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;
  const { abilities } = data;

  return (
    <div>
      <Head>
        <title>{id}</title>
      </Head>

      <h1>Single Pokemon Page: {id}</h1>

      <ol>
        {abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ol>
    </div>
  );
};

export async function getStaticPaths() {
  const uri = "https://pokeapi.co/api/v2/pokemon";
  const res = await fetch(uri);
  const { results } = await res.json();

  const paths = results.map((pokemon) => ({ params: { id: pokemon.name } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const uri = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
  const res = await fetch(uri);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default PokemonSinglePage;
