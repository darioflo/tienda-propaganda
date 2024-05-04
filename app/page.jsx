import Link from "next/link";

export default function Home() {
	return (
		<>
			<Link href={"/superadmin"}>Superadmin</Link>
			<Link href={'/client'}>Client</Link>
		</>
	);
}
