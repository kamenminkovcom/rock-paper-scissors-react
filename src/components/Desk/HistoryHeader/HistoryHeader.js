import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

//this component is highly coupled to Desk
const HistoryHeader = ({count, classes}) => (
    count > 0 && //checks if we have any games, if so shows the history header
    <div className={classnames(classes)}>
        {`Last ${count} ${count > 1 ? 'games' : 'game'}:`}
    </div>
);

HistoryHeader.propTypes = {
    count: PropTypes.number.isRequired,
    classes: PropTypes.string
};

export default HistoryHeader;