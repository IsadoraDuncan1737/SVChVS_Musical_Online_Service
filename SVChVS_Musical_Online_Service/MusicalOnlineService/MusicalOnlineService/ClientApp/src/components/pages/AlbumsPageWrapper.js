import React from 'react';
import { useParams } from 'react-router-dom';
import { AlbumsPage } from './AlbumsPage'

export function AlbumsPageWrapper() {
    const params = useParams();
    const albumTitle = params.title;

    return (
        <>
            <AlbumsPage albums={[]} albumTitle={albumTitle} />
        </>
    );
}
