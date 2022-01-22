import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository {
  id: number;
  description: string;
  html_url: string;
  full_name: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  // dont forget the second parameter!!!
  useEffect(() => {
    fetch('https://api.github.com/users/kevinshibuya/repos')
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => {
         return <RepositoryItem key={repository.id} repository={repository} />
        })}
      </ul>
    </section>
  )
}