import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { DEFAULT_LANG, TLang } from 'src/app/config';
import { STATIC_LANG_DATA } from 'src/app/lang';
import ContentBlock from 'src/shared/ContentBlock';
import { SmallCard } from 'src/shared/SmallCard';
import { twMerge } from 'tailwind-merge';

interface IContactListProps {
  variantContentBlock?: 'primary' | 'secondary';
  classNameCard?: string;
};

const ContactList:FC<IContactListProps> = ({
  variantContentBlock = 'primary',
  classNameCard,
}) => {
  const { lang = DEFAULT_LANG } = useParams<{
    lang: TLang;
  }>();

  return (
    <ContentBlock
      title={STATIC_LANG_DATA.contacts[lang]}
      variant={variantContentBlock}
    >
      <SmallCard
        className={twMerge('flex flex-col gap-4', classNameCard)}
      >
        <div>
          <div className="font-bold uppercase">Location</div>
          <div>
            Sofia City, Bulgaria
          </div>
          <div>
            (Relocation from Mariupol, Ukraine)
          </div>
        </div>
        <div>
          <div className="font-bold uppercase">Email</div>
          <a href="mailto:mat.vasilenkoo@gmail.com">
            mat.vasilenkoo@gmail.com
          </a>
        </div>
        <div className="flex flex-col">
          <div className="font-bold uppercase">Contact With</div>
          <a href="tel:359884344120">
            +359-884-344-120 (BG)
          </a>
          <a href="tel:380979151281">
            +380-97-91-51-281 (UA)
          </a>
          <a href="https://wa.me/qr/D2KHUEYTQF2MC1" target='_blank'>
            WhatsApp
          </a>
          <a href="https://t.me/matvasilenko" target='_blank'>
            Telegram
          </a>
        </div>
      </SmallCard>
    </ContentBlock>
  )
};

export default ContactList;