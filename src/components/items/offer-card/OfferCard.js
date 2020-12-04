import React from 'react';
import './offercard.css';

import { GrMoney, GrLocation } from 'react-icons/gr';
import { IoMdBusiness, IoMdPeople } from 'react-icons/io';

export default class OfferCard extends React.Component {
    render() {
        const { title, salaryFrom, salaryTo, company } = this.props;
        return (
            <div className="offer-card">
                <div className="offer-card__container">
                    <div className="offer-card__logo">
                        <img src={company.logo} />
                    </div>
                    <div className="offer-card__title">{title}</div>
                    <div className="offer-card__body">
                        <div className="offer-card__offer-detail">
                            <GrMoney /> &nbsp; {salaryFrom} - {salaryTo}
                        </div>
                        <div className="offer-card__offer-detail">
                            <GrLocation /> &nbsp; {company.location}
                        </div>
                        <div className="offer-card__offer-detail">
                            <IoMdBusiness /> &nbsp; {company.name}
                        </div>
                        <div className="offer-card__offer-detail">
                            <IoMdPeople /> &nbsp; {company.size}
                        </div>
                    </div>
                    <button className="offer-card__button">Check</button>
                </div>
            </div>
        );
    }
}