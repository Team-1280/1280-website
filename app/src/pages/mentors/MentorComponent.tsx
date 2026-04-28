import React from 'react';

interface MentorComponentProps {
  imageSrc: string;
  name: string;
  since: string;
  until?: string;
  role: string;
  bio: string;
  expertise: string;
  links?: MentorLink[];
}

interface MentorLink {
  url: string;
  title: string;
}

const MentorComponent = ({
  imageSrc,
  name,
  role,
  since,
  until,
  bio,
  expertise,
  links,
}: React.PropsWithChildren<MentorComponentProps>) => {
  return (
    <div className="flex flex-wrap flex-col md:flex-row md:flex-nowrap font-sans gap-10 md:px-20 px-10 py-6">
      <img
        src={imageSrc}
        alt={name}
        className="w-50 h-50 rounded-sm self-start"
      />
      <div className="flex flex-col gap-4">
        <div className="font-bold flex flex-col">
          <span>{name}</span>
          <span>
            {role}: {since} - {until ?? 'Present'}
          </span>
        </div>
        <div>{bio}</div>
        {links && links.length > 0 && (
          <details>
            <summary>Links</summary>
            <ul className="list-none">
              <div className="font-medium !text-[#fcc307] dark:!text-[#fcc307]">
                {links.map((link) => (
                  <li>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </div>
            </ul>
          </details>
        )}
        <div>Expertise: {expertise}</div>
      </div>
    </div>
  );
};

export default MentorComponent;
