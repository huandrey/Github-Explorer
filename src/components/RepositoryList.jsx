import { useState, useEffect } from 'react';
import RepositoryItem from "./RepositoryItem";
import '../styles/repositories.scss';

// const repository = {
//   name: "algum nome",
//   description: "sla",
//   link: "https://github.com/unform/unform"
// }

export function RepositoryList() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/orgs/opendevufcg/repos")
      .then(res => res.json())
      .then(data => {
        data.map((repo) => setRepositories(data))        
      })
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>
      <ul>
        {repositories.map((repo, index) => {
          return <RepositoryItem key={index} repository={repo} />
        })}
      </ul>
    </section>
  )
}