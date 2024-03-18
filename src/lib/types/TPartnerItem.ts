export type TPartnerList = {
  headline: string;
  partners: TPartnerItem[];
};

export type TPartnerItem = {
  img: ImageMetadata;
  alt: string;
  link?: string;
};
