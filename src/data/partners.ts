import type { TPartnerList } from '../lib/types/TPartnerItem';

import cokoKral from '../assets/img/partners/basic/coko_kral_logo.png';
import dprMetal from '../assets/img/partners/basic/dpr_metal_logo.png';
import lyoFood from '../assets/img/partners/basic/lyofood_logo.png';
import manucafe from '../assets/img/partners/basic/manu-cafe-logo.png';
import postaHranic from '../assets/img/partners/basic/posta_bez_hranic_logo.png';
import skaceluv_dum from '../assets/img/partners/basic/dum.png';
import kiwi from '../assets/img/partners/basic/kiwi.png';
import outdoor from '../assets/img/partners/basic/outdoor.webp';
import rugby from '../assets/img/partners/basic/rugby.png';
import ucetnictvi from '../assets/img/partners/basic/ucetnictvi.png';

import alza from '../assets/img/partners/general/alza_logo.png';
import isProd from '../assets/img/partners/general/is-produkce-logo.png';
import vodarnaZlin from '../assets/img/partners/general/vodarna_zlin_logo.png';
import zlinBlack from '../assets/img/partners/general/zlin_black_logo.png';
import cpic from '../assets/img/partners/general/cpic-logo.png';
import expat from '../assets/img/partners/general/expat.png';


import nadaceTomaseBati from '../assets/img/partners/main/nadace_tomase_bati_logo.svg';
import lks from '../assets/img/partners/main/LKS.png';
import co from '../assets/img/partners/main/co_logo.png';

import gastroin from '../assets/img/partners/medial/gastro-in-logo.png';
import hedvabnaStezka from '../assets/img/partners/medial/hedvabna_stezka_logo.png';
import hexxa from '../assets/img/partners/medial/hexxa_logo.jpg';
import kiss from '../assets/img/partners/medial/kiss_logo.png';
import knihovnaUtb from '../assets/img/partners/medial/knihovna_utb_logo.png';
import kudyZNudy from '../assets/img/partners/medial/kudy-z-nudy-logo.png';
import stamgastGurman from '../assets/img/partners/medial/stamgast-logo.png';
import zlinCZ from '../assets/img/partners/medial/zlin-logo.png';
import zlinskoLuhacovisko from '../assets/img/partners/medial/zlinsko_luhacovicko_logo.png';
import zlinskyKraj from '../assets/img/partners/medial/zlinsky_kraj_logo.png';
import vychodnimorava from '../assets/img/partners/medial/vychodnimorava.png';
import primazoom from '../assets/img/partners/medial/prima_zoom.png';
import studentskelisty from '../assets/img/partners/medial/studentskelisty.png';
import kultura21 from '../assets/img/partners/medial/kultura21.png';
import inzlin from '../assets/img/partners/medial/in-zlin-logo.png';
import tvs from '../assets/img/partners/medial/tvs.png';

export const generalPartners: TPartnerList = {
  headline: 'Generální partneři',
  partners: [
    {
      img: zlinBlack,
      alt: 'Zlín Black',
    },
    {
      img: isProd,
      alt: 'Is Produkce',
    },
    {
      img: expat,
      alt: 'Expat Centre Zlin',
    },
    {
      img: cpic,
      alt: 'Cpic',
    },
  ],
};

export const mainPartners: TPartnerList = {
  headline: 'Hlavní partneři',
  partners: [
    {
      img: nadaceTomaseBati,
      alt: 'Nadace Tomáše Bati',
    },
    {
      img: lks,
      alt: 'LKS',
    },
    {
      img: co,
      alt: 'Cestovatelský obchod',
    },
  ],
};

export const medialPartners: TPartnerList = {
  headline: 'Mediální partneři',
  partners: [
    {
      img: hedvabnaStezka,
      alt: 'Hedvábná stezka',
    },
    {
      img: zlinskyKraj,
      alt: 'Zlínský kraj',
    },
    {
      img: stamgastGurman,
      alt: 'Stámgast Gurmán',
    },
    {
      img: zlinskoLuhacovisko,
      alt: 'Zlínsko-Luhacovicko',
    },
    {
      img: zlinCZ,
      alt: 'Zlín.cz',
    },
    {
      img: hexxa,
      alt: 'Hexxa',
    },
    {
      img: primazoom,
      alt: 'Prima Zoom',
    },
    {
      img: inzlin,
      alt: 'IN Zlin',
    },
    {
      img: tvs,
      alt: 'TVS',
    },
    {
      img: gastroin,
      alt: 'Gastroin',
    },
    {
      img: kudyZNudy,
      alt: 'Kudy z nudy',
      link: 'https://www.kudyznudy.cz/',
    },
    {
      img: knihovnaUtb,
      alt: 'Knihovna UTB',
    },
    {
      img: kiss,
      alt: 'Kiss',
    },
    {
      img: vychodnimorava,
      alt: 'Východní Morava',
    },
    {
      img: studentskelisty,
      alt: 'Studentské Listy',
    },
    {
      img: kultura21,
      alt: 'Kultura21.cz',
    },
  ],
};

export const basicPartners: TPartnerList = {
  headline: 'Partneři',
  partners: [
    {
      img: postaHranic,
      alt: 'Pošta bez hranic',
    },
    {
      img: cokoKral,
      alt: 'Čokoládové Království',
    },
    {
      img: skaceluv_dum,
      alt: 'Skácelův dům',
    },
    {
      img: ucetnictvi,
      alt: 'Účetnictví Kadlčíková',
    },
    {
      img: kiwi,
      alt: 'visitkiwi.cz',
    },
    {
      img: rugby,
      alt: 'Rugby Club Zlín',
    },
    {
      img: outdoor,
      alt: 'Total outdoor',
    },
  ],
};