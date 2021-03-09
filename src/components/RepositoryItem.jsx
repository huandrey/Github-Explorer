export default function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{ repository?.name ?? 'Valor padrao'}</strong>
      <p>{ repository?.description ?? 'Esse repositorio nao possui descricao' }</p>
      <a  href={ repository?.html_url }>Acessar repositorio</a>
    </li>
  )
}