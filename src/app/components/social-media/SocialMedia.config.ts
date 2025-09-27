export interface IHeaderMediaItem {
  className: string;
  path: string;
  order: number;
}

export interface IHeaderMedia {
  facebook: IHeaderMediaItem,
  github: IHeaderMediaItem,
  linkedin: IHeaderMediaItem,
}

const HEADER_MEDIA: IHeaderMedia = {
  facebook: {
    className: "bi bi-facebook",
    path: "https://www.facebook.com/iliecristiandoro",
    order: 2,
  },
  github: {
    className: "bi bi-github",
    path: "https://github.com/iliedorobat",
    order: 0,
  },
  linkedin: {
    className: "bi bi-linkedin",
    path: "https://www.linkedin.com/in/ilie-cristian-dorobat",
    order: 1,
  },
};

const HEADER_MEDIA_LIST: IHeaderMediaItem[] = Object.values(HEADER_MEDIA)
  .sort((a: IHeaderMediaItem, b: IHeaderMediaItem) => a.order - b.order);

export {
  HEADER_MEDIA,
  HEADER_MEDIA_LIST,
};
