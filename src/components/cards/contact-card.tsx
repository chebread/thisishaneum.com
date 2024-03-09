import Link from 'next/link';

const ContactCard = ({ contact }) => {
  const regex = /\(([^)]+)\)/;
  const hasUrl = contact.link.match(regex);
  if (!hasUrl)
    return (
      <li key={contact.link}>
        {contact.category}: {contact.link}
      </li>
    );
  const [, url] = hasUrl;
  return (
    <li key={contact.link}>
      {contact.category}:{' '}
      <Link href={url} target="_self">
        {contact.link.replace(regex, '')}
      </Link>
    </li>
  );
};

export default ContactCard;
