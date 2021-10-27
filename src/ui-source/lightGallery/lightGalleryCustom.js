import React from 'react'
import { useState } from 'react';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
// import 'lightgallery/scss/lightgallery.scss';
// import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Link from 'next/link';


export default function LightGalleryCustom() {
    const [items, setItems] = useState([
        {
            id: '1',
            size: '1400-800',
            src: 'https://1.bp.blogspot.com/-Gfqg5yxurXc/XtHy967Ic_I/AAAAAAAAnMQ/OsSyyEzy1fk1J5Wu6nrFziNBbLegcRNvACLcBGAsYHQ/s1600/Gai-xinh-toc-dai%2B%25281%2529.jpg',
            thumb: 'https://1.bp.blogspot.com/-Gfqg5yxurXc/XtHy967Ic_I/AAAAAAAAnMQ/OsSyyEzy1fk1J5Wu6nrFziNBbLegcRNvACLcBGAsYHQ/s1600/Gai-xinh-toc-dai%2B%25281%2529.jpg',
        },
        {
            id: '2',
            size: '1400-800',
            src: 'https://1.bp.blogspot.com/-Gfqg5yxurXc/XtHy967Ic_I/AAAAAAAAnMQ/OsSyyEzy1fk1J5Wu6nrFziNBbLegcRNvACLcBGAsYHQ/s1600/Gai-xinh-toc-dai%2B%25281%2529.jpg',
            thumb: 'https://1.bp.blogspot.com/-Gfqg5yxurXc/XtHy967Ic_I/AAAAAAAAnMQ/OsSyyEzy1fk1J5Wu6nrFziNBbLegcRNvACLcBGAsYHQ/s1600/Gai-xinh-toc-dai%2B%25281%2529.jpg',
        },
    ]);

    const onInit = () => {
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href="https://1.bp.blogspot.com/-Gfqg5yxurXc/XtHy967Ic_I/AAAAAAAAnMQ/OsSyyEzy1fk1J5Wu6nrFziNBbLegcRNvACLcBGAsYHQ/s1600/Gai-xinh-toc-dai%2B%25281%2529.jpg" passHref>
                    <img alt="text" src="https://1.bp.blogspot.com/-Gfqg5yxurXc/XtHy967Ic_I/AAAAAAAAnMQ/OsSyyEzy1fk1J5Wu6nrFziNBbLegcRNvACLcBGAsYHQ/s1600/Gai-xinh-toc-dai%2B%25281%2529.jpg" />
                </a>
                <a href="https://1.bp.blogspot.com/-Gfqg5yxurXc/XtHy967Ic_I/AAAAAAAAnMQ/OsSyyEzy1fk1J5Wu6nrFziNBbLegcRNvACLcBGAsYHQ/s1600/Gai-xinh-toc-dai%2B%25281%2529.jpg" passHref>
                    <img alt="text" src="https://1.bp.blogspot.com/-Gfqg5yxurXc/XtHy967Ic_I/AAAAAAAAnMQ/OsSyyEzy1fk1J5Wu6nrFziNBbLegcRNvACLcBGAsYHQ/s1600/Gai-xinh-toc-dai%2B%25281%2529.jpg" />
                </a>
                ...
            </LightGallery>
        </div>
    );
}


// https://www.lightgalleryjs.com/