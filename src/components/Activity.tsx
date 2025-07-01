const Activity = ({
  name,
  timing,
  details,
}: {
  name: string;
  timing: string;
  details: string;
}) => {
  return (
    <li>
      <strong>{name}</strong>: {timing}, {details}
    </li>
  );
};

export default Activity;
