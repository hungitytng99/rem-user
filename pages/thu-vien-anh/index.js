import Layout from 'components/Layout/Layout'
import Head from 'next/head'
import React from 'react'
import SimpleReactLightbox from 'simple-react-lightbox'
export default function ImgGallery(props) {
    return (
        <>
            <Head>
                <title>Thư viện ảnh</title>
            </Head>
            <Layout>

                <div style={{ left: '0', background: "", width: "100%" }}>
                    <div style={{ margin: "40px 10px 20px 10px", fontSize: "18px", textTransform: 'uppercase' }}>
                        {props.title}
                    </div>
                    <SimpleReactLightbox>
                        {props.children}
                    </SimpleReactLightbox>
                </div>
            </Layout>

        </>
    )
}
