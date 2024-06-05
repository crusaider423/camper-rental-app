import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import NavBar from "../NavBar/NavBar";
import scss from "./sharedLayout.module.scss";
import Container from "../Container/Container";
import { useSelector } from "react-redux";
import { selectCatalog } from "../../redux/selectors/catalog-selector";

const SharedLayout = () => {
  const { isLoading } = useSelector(selectCatalog);

  return (
    <>
      <header className={scss.header}>
        <Container>
          <NavBar />
        </Container>
      </header>
      <Suspense fallback={<p className={scss.loader}></p>}>
        <main className={scss.main}>
          <Container>
            {isLoading && (
              <div className={scss.loadingoverlay}>
                <p className={scss.loader}></p>
              </div>
            )}
            <Outlet />
          </Container>
        </main>
      </Suspense>
    </>
  );
};

export default SharedLayout;
