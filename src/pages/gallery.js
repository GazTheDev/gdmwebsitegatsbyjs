import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Gallery from "../components/gallery";

function GalleryPage() {
    return (
        <Layout className="bg-blue-20">

            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title="Gallery"
            />

            <Gallery >

            </Gallery>
        </Layout>
    );

}


export default GalleryPage;
