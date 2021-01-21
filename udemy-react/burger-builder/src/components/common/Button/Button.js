import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const ElementButtons = (props) => {
    return (
        <Button {...props}>{props.children}</Button>
    );
}

ElementButtons.propTypes = {
    color: PropTypes.oneOf(["primary", "secondary"]),
    disabled: PropTypes.bool,
    className: PropTypes.string,
    href: PropTypes.string,
    variant: PropTypes.oneOf(["contained", "outlined"]),
    onClick: PropTypes.func,
    size: PropTypes.oneOf(["small", "medium", "large"]),
}

export default ElementButtons;
