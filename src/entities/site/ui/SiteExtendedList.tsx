import { useGetSitesQuery } from '../api/siteApi';
import ContentBlock from 'src/shared/ContentBlock';
import { Card } from 'src/shared/Card';
import { DEFAULT_LANG, TLang } from 'src/app/config';
import { Link, useParams } from 'react-router-dom';

const SITE_PERIODS = [
  '2021 - 2022',
  '2020 - 2021',
  '2019 - 2020',
  '2018 - 2019',
]

const SiteExtendedList = () => {
  const { lang = DEFAULT_LANG } = useParams<{
    lang: TLang;
  }>();

  const {
    data: sites
  } = useGetSitesQuery({});
  return (
    <div>
      {SITE_PERIODS.map((period) => (
        <ContentBlock
          key={period}
          title={period}
          variant="secondary"
        >
          <Card className="flex flex-col gap-3">
            {sites?.filter((site) => site.period === period).map((site) => (
              <div
                key={site.id}
                className=""
              >
                <div className="text-lg font-semibold">{site[`title_${lang}`]}</div>
                <div>{site[`description_${lang}`]}</div>
                <Link to={site.link ?? ''} className="font-medium" target="_blank">
                  {site.link}
                </Link>
              </div>
            ))}
          </Card>
        </ContentBlock>
      ))}
    </div>
  )
};

export default SiteExtendedList;