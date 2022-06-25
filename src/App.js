import React, { useEffect, useState } from "react";
import "./App.css";
import RepoCard from "./components/repoCard/repoCard.component";
import Search from "./components/search/search.component";
import Logo from "./assets/images/logo_github_icon_512.png";
import axios from "axios";
import { GITHUB_API_URL } from "./utils/constants";

function App() {
  const [searchedRepos, setSearchedRepos] = useState(null);
  const [savedRepos, setSavedRepos] = useState(null);
  const [searchedName, setSearchedName] = useState(null);

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
              full_name,
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
    } else {
      setSearchedRepos(null);
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
        <Search setSearchedName={setSearchedName} />
        <h2 className="section-title">Search Result</h2>
        <section id="search-section" className="repos-section">
          {searchedRepos ? (
            searchedRepos?.map(({ id, ...repo }) => (
              <RepoCard
                key={id}
                repoData={repo}
                setSavedRepos={setSavedRepos}
                search
              />
            ))
          ) : (
            <div className="empty">
              <p>No Search Found</p>
            </div>
          )}
        </section>
        <h2 className="section-title">Saved Repos to Compare</h2>
        <section id="compare-section" className="repos-section">
          {savedRepos ? (
            savedRepos?.map(({ id, ...repo }) => (
              <RepoCard
                key={"save" + id}
                repoData={repo}
                setSavedRepos={setSavedRepos}
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
