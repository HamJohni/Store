import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/redux/reducers/user";
import { useEffect } from "react";
import { getProducts } from "@/redux/reducers/products";
import { getFavorites } from "@/redux/reducers/favorites";
import { useRouter } from "next/router";
import { getBasket } from "@/redux/reducers/basket";

const Layout = ({ children }) => {

    const router = useRouter()

    const dispatch = useDispatch()

    let item = {}

    if (typeof window !== 'undefined') {
        item = JSON.parse(localStorage.getItem('user'))
    }

    if (item === null) {
        router.push('/regis')
    } else {
        useEffect(() => {
            !item ? router.push('/regis') : ''
        }, [])
    }
    useEffect(() => {
        dispatch(getUser(item.id))
    }, [])

    useEffect(() => {
        dispatch(getFavorites(item.id))
    }, [])

    useEffect(() => {
        dispatch(getBasket(item.id))
    }, [])

    useEffect(() => {
        dispatch(getProducts())
    }, [])


    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;