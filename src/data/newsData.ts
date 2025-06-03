/* =======================================
 * ニュース記事DATA
 * URL: src/data/newsData.ts
 * Created: 2025-06-03
 * Last updated: 2025-06-03
 * ======================================= */


import { NewsItem } from "@/types/news";
import thumbImage01 from "@/assets/images/news/thumb01.webp";
import thumbImage02 from "@/assets/images/news/thumb02.webp";
import thumbImage03 from "@/assets/images/news/thumb03.webp";
import thumbImage04 from "@/assets/images/news/thumb04.webp";
import { body001 } from "./newsBody/body001";
import { body002 } from "./newsBody/body002";
import { body003 } from "./newsBody/body003";
import { body004 } from "./newsBody/body004";

export const newsData: NewsItem[] = [
    {
    id: "004",
    title: "ホームページをリニューアルしました。",
    date: "2022.07.15",
    thumbnail: thumbImage01,
    body: body004,
  },
    {
    id: "003",
    title: "☆☆年末年始休業のお知らせ☆☆",
    date: "2021.12.31",
    thumbnail: thumbImage02,
    body: body003,
  },
    {
    id: "002",
    title: "家具のお取り扱いはじめました。",
    date: "2021.09.15",
    thumbnail: thumbImage03,
    body: body002,
  },
  {
    id: "001",
    title: "空間装飾も承ります。",
    date: "2021.09.15",
    thumbnail: thumbImage04,
    body: body001,
  },

  // 他の記事も同様に body002, body003 を作成して読み込む
];