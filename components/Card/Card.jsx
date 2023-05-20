import Info from "@/components/Info/Info";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "@chakra-ui/react";
import Link from "next/link";
import Links from "@/components/Links/Links";

const Card = () => {
    return(
        <>
            <div className="container">
                <Links/>
               <Info/>
            </div>
        </>
    )
}

export default Card