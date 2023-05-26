import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/MainSlider.css'
import '../styles/Heart.css'
import '@/styles/FilterOfCatalog.css'
import Layout from "@/components/Layout/Layout";
import '../styles/CardSlider.scss'
import {Provider} from "react-redux";
import store from "@/redux/store";


export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <ChakraProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider>
        </Provider>
    )
}
