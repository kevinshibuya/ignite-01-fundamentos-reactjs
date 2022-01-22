export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.full_name ?? 'default'}</strong>
      <p>{props.repository?.description ?? 'default'}</p>

      <a href={props.repository?.html_url ?? 'default'}>
        Access repository
      </a>
    </li>
  );
}