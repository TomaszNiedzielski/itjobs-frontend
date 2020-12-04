import React from 'react';
import OffersList from '../components/lists/offers-list/OffersList';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="container">
                <OffersList />
            </div>
        );
    }
}