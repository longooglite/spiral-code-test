import React from 'react';
import Link from 'next/link'

import {SearchBar} from '../components/search-bar';
import {Header} from '../components/header';
import {FavoritesSection} from '../components/favorites-section';

const Index = () => {
    return (
        <>
            <Header subtitle='' />
            <FavoritesSection />
        </>
    );
}

export default Index;
