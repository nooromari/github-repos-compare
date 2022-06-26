import "./listItem.styles.css";

const ListItem = ({ title, value, Icon }) => (
  <div className="list">
    <dt className="list-title-icon">
      <Icon className="icon" />
      <span>{title}</span>
    </dt>
    <dd>{value}</dd>
  </div>
);

export default ListItem;
