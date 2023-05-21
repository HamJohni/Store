import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/MainSlider.css'
import '../styles/Heart.css'
import Layout from "@/components/Layout/Layout";
import '../styles/CardSlider.scss'


export default function App({Component, pageProps}) {
    return (
        <ChakraProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}
