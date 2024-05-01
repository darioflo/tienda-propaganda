'use client'
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ClientContextProvider } from "@/conetxt/ClientContext";
import { metadata } from "./metadata";

const fuente = DM_Sans({ subsets: ["latin"], weight: "400" })

export default function RootLayout({ children }) {

	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
				<link rel="icon" href="/LogoNegativo.png" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
				<link rel="stylesheet" href="https://unpkg.com/primeflex@latest/primeflex.css" />
			</head>
			<body className={fuente.className}>
				<ClientContextProvider>
					{children}
				</ClientContextProvider>
			</body>
		</html>
	);
}
