import Head from "next/head";
export default function PageTitle({ page }) {
  return (
    <Head>
      <title>{`${page} - Alura Cases Campanha`}</title>;
    </Head>
  );
}
