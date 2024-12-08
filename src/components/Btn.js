import PropTypes from 'prop-types';
export default function Button({bg, color, text}) {
    return (
        <button className={`bg-${bg} text-nowrap capitalize rounded-md px-10 py-3 font-bold cursor-pointer my-6 text-${color}`}>{text}</button>
    )
}

Button.propTypes = {
    bg: PropTypes.string,
    color: PropTypes.string,
    text: PropTypes.string,
};
Button.defaultProps = {
    bg: "second",
    color: "main",
    text: "Get started",
};
