import "./listItem.styles.css";

const ListItem = ({ title, value, icon }) => (
  <div>
    <dt>{title}</dt>
    <dd>{value}</dd>
  </div>
);

export default ListItem;
