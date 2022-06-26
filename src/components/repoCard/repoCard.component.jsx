import moment from "moment";

import ListItem from "../listItem/listItem.component";
import Button from "../button/button.component";

//icons
import { AiOutlineBranches, AiOutlinePlus, AiFillStar } from "react-icons/ai";
import { GoIssueOpened } from "react-icons/go";
import { MdDateRange } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";
import { TiStarburst } from "react-icons/ti";

import "./repoCard.styles.css";

const RepoCard = ({
  repoData: {
    name,
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
  id,
  removeRepo
}) => {

  // Format details data
  const listData = [
    {
      title: "Stars",
      value: stargazers_count,
      icon: AiFillStar,
    },
    {
      title: "Forks",
      value: forks_count,
      icon: AiOutlineBranches,
    },
    {
      title: "Open Issues",
      value: open_issues_count,
      icon: GoIssueOpened,
    },
    {
      title: "Age",
      //calculate the repo age by years
      value: `${moment().diff(moment(created_at), "years")} years ago`,
      icon: MdDateRange,
    },
    {
      title: "Last Commit",
      //calculate the last commit time by hours
      value: `${moment().diff(moment(updated_at), "hours")} hours ago`,
      icon: AiOutlinePlus,
    },
    {
      title: "License",
      value: license_type,
      icon: TiStarburst,
    },
    {
      title: "Language",
      value: language,
      icon: FaLanguage,
    },
  ];

  return (
    <div className="container">
      {/* open repo in github */}
      <a
        href={html_url}
        target="_blank"
        rel="noreferrer"
        className="card-header"
      >
        <h3 className="repo-name">{name}</h3>
        <img src={avatar_url} alt={name} className="avatar" />
      </a>

      {/* Repo details */}
      <dl className="list-container">
        {listData.map(({ value, title, icon }) => (
          <ListItem
            key={name + value}
            value={value}
            title={title}
            Icon={icon}
          />
        ))}
      </dl>
      
      {/* Remove the repo from the compression */}
      <Button title={"Remove Repo"} action={removeRepo} id={id} />
    </div>
  );
};

export default RepoCard;
