import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Loading from "./Loading";

import styles from "../css/SharedLayout.module.css"
import styledComps from "styled-components"
import Container from "./Container";

export default function SharedLayout(){

    
    return (
        <Container>
            <nav className={styles["nav_bar"]}>
                <StyledNav className={styles["nav_link"]} to="/goit-react-hw-05-movies/">Головна</StyledNav> 
                <StyledNav className={styles["nav_link"]} to="/goit-react-hw-05-movies/movies">Фільми</StyledNav> 
            </nav>
            <Suspense fallback={
                <Loading />
            }>
                <Outlet/>
            </Suspense>
        </Container>
    )
}

const StyledNav = styledComps(NavLink)`
    &.active{
        color: orange;
    }
`