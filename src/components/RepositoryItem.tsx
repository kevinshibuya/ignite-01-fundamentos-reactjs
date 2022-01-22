interface RepositoryItemProps {
  repository: {
    full_name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
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