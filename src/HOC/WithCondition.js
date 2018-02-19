import React from 'react';
import PropTypes from 'prop-types';

const withCondition = (Component) => {
    class WithCondition extends React.Component {
        render() {
            const {shouldShow} = this.props;
            return (
                shouldShow &&
                <Component {...this.props}/>
            )
        }
    }

    WithCondition.propTypes = {
        shouldShow: PropTypes.bool
    };

    return WithCondition;
};

export default withCondition;