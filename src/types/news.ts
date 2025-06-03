import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  thumbnail: StaticImageData;
  body: ReactNode;
};
