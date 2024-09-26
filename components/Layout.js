import Head from "next/head"
import Header from "../components/Header"

const Layout = ({ title, description, children }) => {
   return (
      <>
         <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:site_name" content="portfolio" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <link rel="icon" href="/favicon.ico" />

            <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="mseroglu" data-description="Support me on Buy me a coffee!" data-message="A coffee will definitely boost my energy!" data-color="#40DCA5" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
         </Head>

         <div className="relative z-11 min-h-screen bg-primary-light antialiased font-montserrat overflow-hidden px-3 dark:bg-gray-900">
            <div className="w-full h-full">
               <Header />
               {children}
            </div>
         </div>
      </>
   )
}

export default Layout
