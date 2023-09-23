import Head from "next/head";

const appName = process.env.APP_NAME ?? 'Colmena Front'

export default function MetaTags() {
    return (
        <Head>
            <title>{appName}</title>
            <meta name="description" content={appName} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}