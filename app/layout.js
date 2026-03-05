export const metadata = {
  title: "Ring Configurator",
  description: "Interactive 3D Ring Configurator using Threedium."
};

export default function RootLayout({ children }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/Ring-Conf";

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href={`${basePath}/manifest.json`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amita&family=Kalam:wght@300;700&family=Tangerine&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href={`${basePath}/static/css/main.583d93a2.css`}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
