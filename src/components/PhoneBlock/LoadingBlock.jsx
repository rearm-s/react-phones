import React from 'react';
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {

    return (
        <ContentLoader
            className="phone-block"
            speed={2}
            width={280}
            height={490}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="30" y="263" rx="5" ry="5" width="218" height="37"/>
            <rect x="0" y="312" rx="15" ry="15" width="260" height="84"/>
            <rect x="16" y="0" rx="15" ry="15" width="247" height="247"/>
            <rect x="0" y="411" rx="3" ry="3" width="81" height="44"/>
            <rect x="138" y="411" rx="15" ry="15" width="129" height="44"/>
            <rect x="237" y="440" rx="0" ry="0" width="1" height="1"/>
        </ContentLoader>
    )
}

export default LoadingBlock;