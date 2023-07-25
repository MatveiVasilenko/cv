import React, { FC } from 'react';
import ContentBlock from 'src/shared/ContentBlock';
import { SmallCard } from 'src/shared/SmallCard';
import { useGetSitesQuery } from '../api/siteApi';
import { DEFAULT_LANG, TLang } from 'src/app/config';
import { Link, useParams } from 'react-router-dom';

interface ISiteListProps {

};

const SiteList: FC<ISiteListProps> = ({ }) => {
  const { lang = DEFAULT_LANG } = useParams<{
    lang: TLang;
  }>();

  const {
    data: sites
  } = useGetSitesQuery({});

  return (
    <ContentBlock
      title="Sites"
    >
      <SmallCard
        className="flex flex-col gap-2"
      >
        <div>
          {sites?.slice(0, 3).map((site) => (
            <div>
              {site[`title_${lang}`]}
            </div>
          ))}
        </div>
        <Link to={`/${lang}/sites`} className="font-semibold text-lg">
          Go to all sites
        </Link>
      </SmallCard>
    </ContentBlock>
  )
};

export default SiteList;