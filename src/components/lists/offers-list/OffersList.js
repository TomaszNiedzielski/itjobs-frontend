import React from 'react';
import OfferCard from '../../items/offer-card/OfferCard';

import './offerslist.css';

export default class OffersList extends React.Component {
    state = {
        offers: [
            {
                id: 1,
                title: 'Junior PHP developer',
                body: 'This is offer for php junior developer. Requirements bla bla bla...',
                salaryFrom: 3000,
                salaryTo: 6000,
                currency: 'PLN',
                experienceLevel: 'junior',
                requiredTechnologies: ['PHP 7', 'Laravel', 'Mysql', 'GIT', 'Javascript'],
                employmentType: 'B2B',
                company: {
                    location: 'Warsaw, Marszałkowska 22',
                    name: 'CodeTwo',
                    size: 22,
                    logo: 'https://logofirmy.net/wp-content/uploads/2020/04/Huawei-Logo.png'
                }
            },
            {
                id: 1,
                title: 'Junior PHP developer',
                body: 'This is offer for php junior developer. Requirements bla bla bla...',
                salaryFrom: 3000,
                salaryTo: 6000,
                currency: 'PLN',
                experienceLevel: 'junior',
                requiredTechnologies: ['PHP 7', 'Laravel', 'Mysql', 'GIT', 'Javascript'],
                employmentType: 'B2B',
                company: {
                    location: 'Warsaw, Marszałkowska 22',
                    name: 'CodeTwo',
                    size: 22,
                    logo: 'https://logofirmy.net/wp-content/uploads/2020/04/Huawei-Logo.png'
                }
            },
            {
                id: 1,
                title: 'Junior PHP developer',
                body: 'This is offer for php junior developer. Requirements bla bla bla...',
                salaryFrom: 3000,
                salaryTo: 6000,
                currency: 'PLN',
                experienceLevel: 'junior',
                requiredTechnologies: ['PHP 7', 'Laravel', 'Mysql', 'GIT', 'Javascript'],
                employmentType: 'B2B',
                company: {
                    location: 'Warsaw, Marszałkowska 22',
                    name: 'CodeTwo',
                    size: 22,
                    logo: 'https://logofirmy.net/wp-content/uploads/2020/04/Huawei-Logo.png'
                }
            },
            {
                id: 1,
                title: 'Junior PHP developer',
                body: 'This is offer for php junior developer. Requirements bla bla bla...',
                salaryFrom: 3000,
                salaryTo: 6000,
                currency: 'PLN',
                experienceLevel: 'junior',
                requiredTechnologies: ['PHP 7', 'Laravel', 'Mysql', 'GIT', 'Javascript'],
                employmentType: 'B2B',
                company: {
                    location: 'Warsaw, Marszałkowska 22',
                    name: 'CodeTwo',
                    size: 22,
                    logo: 'https://logofirmy.net/wp-content/uploads/2020/04/Huawei-Logo.png'
                }
            },
            {
                id: 1,
                title: 'Junior PHP developer',
                body: 'This is offer for php junior developer. Requirements bla bla bla...',
                salaryFrom: 3000,
                salaryTo: 6000,
                currency: 'PLN',
                experienceLevel: 'junior',
                requiredTechnologies: ['PHP 7', 'Laravel', 'Mysql', 'GIT', 'Javascript'],
                employmentType: 'B2B',
                company: {
                    location: 'Warsaw, Marszałkowska 22',
                    name: 'CodeTwo',
                    size: 22,
                    logo: 'https://logofirmy.net/wp-content/uploads/2020/04/Huawei-Logo.png'
                }
            },
        ]
    }
    render() {
        return (
            <div className="offers-list">
                {this.state.offers.map(offer => (
                    <OfferCard
                        title={offer.title}
                        salaryFrom={offer.salaryFrom}
                        salaryTo={offer.salaryTo}
                        currency={offer.currency}
                        experienceLevel={offer.experienceLevel}
                        requiredTechnologies={offer.requiredTechnologies}
                        employmentType={offer.employmentType}
                        company={offer.company}
                    />
                ))}
            </div>
        );
    }
}