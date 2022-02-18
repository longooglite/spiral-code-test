import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link'

const HeaderBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: white;
    background: #d83175;
    padding: 10px;
`;
const Subtitle = styled.h1`
    display: inline-flex;
    justify-content: center;
    flex-direction: column;
`;

const HeaderLink = styled.a`
    display: inline-flex;
    justify-content: center;
    flex-direction: column;
`;

export const Header = ({subtitle}:{subtitle:string}) => {
    return (
        <HeaderBar>
            <Link href='/' passHref>
                <HeaderLink>
                    Thirsty
                </HeaderLink>
            </Link>
            <Subtitle>{subtitle}</Subtitle>
            <Link href='/search' passHref>
                <HeaderLink>
                Find a Drink
                </HeaderLink>
            </Link>
        </HeaderBar>
    );
};
