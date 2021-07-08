import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Your title</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="container mx-auto px-2">
				<h1 className="text-3xl text-center py-2 font-semibold ">
					This is Heading
				</h1>
				<div>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Iure molestias iusto harum ratione earum? Deserunt ipsa,
					repellat illo dignissimos quisquam amet repudiandae labore
					soluta ipsam, aut nesciunt rem, ad deleniti!
				</div>
			</div>
		</>
	);
}
