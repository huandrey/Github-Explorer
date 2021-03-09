interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export default function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{ props.repository?.name ?? 'Valor padrao'}</strong>
      <p>{ props.repository?.description ?? 'Esse repositorio nao possui descricao' }</p>
      <a  href={ props.repository?.html_url }>Acessar repositorio</a>
    </li>
  )
}