import React, { useEffect, useState } from "react";
import axios from "axios";

import RepoCard from "./components/repoCard/repoCard.component";
import Search from "./components/search/search.component";
import Logo from "./assets/images/logo_github_icon_512.png";
import { GITHUB_API_URL } from "./utils/constants";

import "./App.css";

function App() {
  const [searchedRepos, setSearchedRepos] = useState([
    {
      id: 67282,
      name: "Angular",
    },
    {
      id: 7367,
      name: "React",
    },
    {
      id: 232,
      name: "Vue",
    },
    {
      id: 8589,
      name: "Python",
    },
  ]);
  const [savedRepos, setSavedRepos] = useState([]);
  const [searchedName, setSearchedName] = useState(null);

  const addRepo = (repo) => {
    setSavedRepos([...savedRepos, repo]);
  };

  const removeRepo = (id) => {
   setSavedRepos(savedRepos.filter((repo) => repo.id !== id)) ;
  };

  useEffect(() => {
    if (searchedName) {
      axios
        .get(
          `${GITHUB_API_URL}/search/repositories?q=${searchedName}&page=1&per_page=4`
        )
        .then((res) => {
          const items = res.data.items.map(
            ({
              full_name,
              created_at,
              updated_at,
              language,
              forks_count,
              open_issues_count,
              stargazers_count,
              owner: { avatar_url, html_url },
              license,
              id,
            }) => ({
              name: full_name,
              created_at,
              updated_at,
              language,
              forks_count,
              open_issues_count,
              stargazers_count,
              avatar_url,
              html_url,
              license_type: license?.spdx_id,
              id,
            })
          );

          setSearchedRepos(items);
        })
        .catch((err) => console.log(err));
    }
  }, [searchedName]);

  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={Logo} alt="logo" />
        <h1>Github Repos Compare</h1>
      </header>
      {/* <ErrorBoundary> */}
      <main>
        <Search
          setSearchedName={setSearchedName}
          searchedRepos={searchedRepos}
          addRepo={addRepo}
        />
        <h2 className="section-title">Repos to Compare</h2>
        <section id="compare-section" className="repos-section">
          {!!savedRepos?.length ? (
            savedRepos?.map(({ id, ...repo }) => (
              <RepoCard
                key={"save" + id}
                id={id}
                repoData={repo}
                removeRepo={removeRepo}
                // setSavedRepos={setSavedRepos}
              />
            ))
          ) : (
            <div className="empty">
              <p>No Repos Saved</p>
            </div>
          )}
        </section>
      </main>
      {/* </ErrorBoundary> */}
      <footer className="footer">
        All rights received &copy; 2022 Noor Al-Omari
      </footer>
    </div>
  );
}

export default App;
