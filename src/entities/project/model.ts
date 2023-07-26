export interface IProject {
  id: number;
  logo: string;
  title_en: string;
  title_ua: string;
  mission_en: string;
  mission_ua: string;
  description_en: string;
  description_ua: string;
  structure_en: string;
  structure_ua: string;
  stack: string;
  link: string;
}

export type TProjectStack = {
  left: {
    lisp: {
      title: string;
      percent: number;
    }[];
    title: string;
  };
  right: {
    lisp: {
      title: string;
      percent: number;
    }[];
    title: string;
  };
}

export interface IProjectLight extends Pick<IProject, 'id' | 'logo' | 'title_en' | 'title_ua'> {

}
