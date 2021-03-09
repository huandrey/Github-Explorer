import { useState, useEffect } from 'react';
import RepositoryItem from "./RepositoryItem";
import '../styles/repositories.scss';

// const repository = {
//   name: "algum nome",
//   description: "sla",
//   link: "https://github.com/unform/unform"
// }
interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/opendevufcg/repos")
      .then(res => res.json())
      .then(data => {
        data.map(() => setRepositories(data))        
      })
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>
      <ul>
        {repositories.map((repository, index) => {
          return <RepositoryItem key={index} repository={repository} />
        })}
      </ul>
    </section>
  )
}