import React from 'react';
import { useParams } from 'react-router-dom';
import { PerformersPage } from './PerformersPage';

export function PerformersPageWrapper() {
    const params = useParams();
    const performerName = params.name;

    return (
        <>
            <PerformersPage performers={[]} performerName={performerName} />
        </>
    );
}
