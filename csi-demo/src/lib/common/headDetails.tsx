import Head from "next/head";

const headDetails = () => {
   return (
      <>
         <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0"
            />
            <meta
               name="keywords"
               content="CSI, csi-club, Nirma University, csi-nirma"
            />
            <meta
               name="description"
               content="Established in 2004, the Student Chapter of the Computer Society of India (CSI) is actively engaged in hosting technical, social, and cultural events. Our portfolio includes programming and quiz competitions, seminars on emerging technologies, language learning sessions, workshops, conventions, and technical talks. We consistently organize educational and professional development programs, catering to IT professionals, researchers, and students."
            />

            {/* open graph / facebook meta tags */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="" />
            <meta property="og:title" content="CSI" />
            <meta
               property="og:description"
               content="Established in 2004, the Student Chapter of the Computer Society of India (CSI) is actively engaged in hosting technical, social, and cultural events. Our portfolio includes programming and quiz competitions, seminars on emerging technologies, language learning sessions, workshops, conventions, and technical talks. We consistently organize educational and professional development programs, catering to IT professionals, researchers, and students."
            />
            <meta
               property="og:image"
               content=""
            />

            {/* twitter meta tags */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta
               property="twitter:url"
               content=""
            />
            <meta property="twitter:title" content="CSI" />
            <meta
               property="twitter:description"
               content="Established in 2004, the Student Chapter of the Computer Society of India (CSI) is actively engaged in hosting technical, social, and cultural events. Our portfolio includes programming and quiz competitions, seminars on emerging technologies, language learning sessions, workshops, conventions, and technical talks. We consistently organize educational and professional development programs, catering to IT professionals, researchers, and students."
            />
            <meta
               property="twitter:image"
               content=""
            />

            {/* google site verification */}
            <meta
               name="google-site-verification"
               content="2tG9JnOT3BhG1wK6wvHuYbfJqzXu1D3aosqBoAMYHIA"
            />

            {/* favicons */}
            <link
               rel="icon"
               type="image/png"
               sizes="512x512"
               href="/favicons/android-chrome-512x512.png"
            />
            <link
               rel="icon"
               type="image/png"
               sizes="192x192"
               href="/favicons/android-chrome-192x192.png"
            />
            <link
               rel="apple-touch-icon"
               sizes="180x180"
               href="/favicons/apple-touch-icon.png"
            />
            <link
               rel="icon"
               type="image/png"
               sizes="32x32"
               href="/favicons/favicon-32x32.png"
            />
            <link
               rel="icon"
               type="image/png"
               sizes="16x16"
               href="/favicons/favicon-16x16.png"
            />
            <link rel="manifest" href="/favicons/site.webmanifest" />
         </Head>
      </>
   );
};

export default headDetails;
