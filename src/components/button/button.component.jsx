import './button.styles.css';

const Button = ({action, title, id}) => (
    <button className='remove' onClick={() => action(id)}>
        {title}
    </button>
);

export default Button;