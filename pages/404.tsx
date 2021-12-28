import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

const Error404 = () => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>404 - Page Not Found</title>
			</Head>

			<div className="my-20 text-center">
				<Image
					src="/images/are_you_sure_about_that.gif"
					alt="are_you_sure_about_that john cena image"
					className="mx-auto "
					width={200}
					height={200}
				/>

				<h1 className="text-4xl font-semibold my-3">
					<div>404</div>
					<div>Page Not Found</div>
				</h1>

				<div className="link" onClick={() => router.back()}>
					Go back
				</div>

				<Link href="/">
					<a className="link">Go to Home Page</a>
				</Link>
			</div>
		</>
	);
};

export default Error404;
