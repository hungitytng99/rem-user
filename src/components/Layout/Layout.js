import { Container } from 'react-bootstrap'
import Footer from 'components/Layout/Footer';
import Header from 'components/Layout/Header';
import ContactPop from 'components/ContactPop';
import { useState } from 'react';
import { getListCategory } from 'constants/productPath';
import { useEffect } from 'react';
function Layout(props) {
    const { children } = props;
    const [menu, setMenu] = useState([])

    useEffect(() => {
        (async function () {
            let result = await getListCategory();
            setMenu([...result[1].childs])
        })();
    }, [])
    return (
        <div className="layout">
            <ContactPop />
            <div className="layout__header" >
                <Header menu={menu} />
            </div>
            <div className="layout__content" >
                <Container>
                    {children}
                </Container>
            </div>
            <div className="layout__footer">
                <Footer listCategory={menu} />
            </div>
        </div>
    )
}
export default Layout;