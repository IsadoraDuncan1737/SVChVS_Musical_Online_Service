import React from 'react';
import { useParams } from 'react-router-dom';
import { TracksPage } from './TracksPage';

export function TracksPageWrapper() {
    const params = useParams();
    const trackTitle = params.title;

    return (
        <>
            <TracksPage tracks={[]} trackTitle={trackTitle} />
        </>
    );
}
