import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {useDispatch} from "react-redux";
import {getUser} from "@/redux/reducers/user";
import {useEffect} from "react";
import {getProducts} from "@/redux/reducers/products";
import {getFavorites} from "@/redux/reducers/favorites";

const Layout = ({ children }) => {

    const dispatch = useDispatch()

    let item = {}

    if (typeof window !== 'undefined') {
        item = JSON.parse(localStorage.getItem('user'))
    }

    useEffect(() => {
        dispatch(getUser(item.id))
    },[])

    useEffect(() => {
        dispatch(getProducts())
    },[])

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;