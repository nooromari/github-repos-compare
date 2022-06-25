import ListItem from "../listItem/listItem.component";
import "./repoCard.styles.css";

const RepoCard = ({
  repoData: {
    full_name,
    created_at,
    updated_at,
    language,
    forks_count,
    open_issues_count,
    stargazers_count,
    avatar_url,
    html_url,
    license_type,
  },
  setSavedRepos,
}) => {

    const listData = [
        {
            title: "Stars",
            value: stargazers_count,
            icon:""
        },
        {
            title: "Forks",
            value: forks_count,
            icon:""
        },
        {
            title: "Open Issues",
            value: open_issues_count,
            icon:""
        },
        {
            title: "Age",
            value: created_at,
            icon:""
        },
        {
            title: "Last Commit",
            value: updated_at,
            icon:""
        },
        {
            title: "License",
            value: license_type,
            icon:""
        },
        {
            title: "Language",
            value: language,
            icon:""
        },
    ]
  return (
    <div>
      <a href={html_url} target="_blank" rel="noreferrer">
        <img src={avatar_url} alt={full_name} />
        <h3>{full_name}</h3>
      </a>
      <dl>
        {listData.map(({value, title})=> 
            <ListItem key={full_name+value} value={value} title={title} />    
        )}
      </dl>
    </div>
  );
};

export default RepoCard;
