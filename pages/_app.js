import '@/styles/globals.css'
import '../styles/MainSlider.css'
import '../styles/Heart.css'
import Layout from "@/components/Layout/Layout";

export default function App({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
