import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withCondition from '../../../HOC/WithCondition';

const HistoryHeader = ({count, classes}) => (
    <div className={classnames(classes)}>
        {`Last ${count} ${count > 1 ? 'games' : 'game'}:`}
    </div>
);

HistoryHeader.propTypes = {
    count: PropTypes.number.isRequired,
    classes: PropTypes.string
};

export default withCondition(HistoryHeader);