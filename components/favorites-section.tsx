import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link'

const Favorites = styled.div`
    margin: 70px auto 0 auto;
    width: 200px;
`

export const FavoritesSection = () => {
    return (
        <Favorites>
            You haven&apos;t saved any favorites!
            <p>
                This is what I would add next if I wanted to make a user layer and persist some stuff.
            </p>
            <h3>
                <Link href='/search'>
                    Find a Drink
                </Link>
            </h3>
        </Favorites>
    );
};
