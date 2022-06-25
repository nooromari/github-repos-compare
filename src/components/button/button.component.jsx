import './button.styles.css';

const Button = ({action, title}) => (
    <button onClick={action}>
        {title}
    </button>
);

export default Button;