import React from 'react';
import HandButton from './HandButton/HandButton';
import PropTypes from 'prop-types';

const ToolBar = ({handTypes, choseHandType}) => (
    <div className="tool-bar">
        {Object.keys(handTypes).map(h => (
            <HandButton handType={h}
                        handleClick={() => choseHandType(h)}
                        key={h}/>
        ))}
    </div>
);

ToolBar.propTypes = {
    handTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
    choseHandType: PropTypes.func.isRequired
};

export default ToolBar;