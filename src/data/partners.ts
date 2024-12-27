import type { TPartnerList } from '../lib/types/TPartnerItem';

import co from '../assets/img/partners/basic/co_logo.png';
import cokoKral from '../assets/img/partners/basic/coko_kral_logo.png';
import dprMetal from '../assets/img/partners/basic/dpr_metal_logo.png';
import lyoFood from '../assets/img/partners/basic/lyofood_logo.png';
import manucafe from '../assets/img/partners/basic/manu-cafe-logo.png';
import postaHranic from '../assets/img/partners/basic/posta_bez_hranic_logo.png';

import alza from '../assets/img/partners/general/alza_logo.png';
import isProd from '../assets/img/partners/general/is-produkce-logo.png';
import vodarnaZlin from '../assets/img/partners/general/vodarna_zlin_logo.png';
import zlinBlack from '../assets/img/partners/general/zlin_black_logo.png';

import cpic from '../assets/img/partners/main/cpic-logo.png';
import nadaceTomaseBati from '../assets/img/partners/main/nadace_tomase_bati_logo.svg';

import gastroin from '../assets/img/partners/medial/gastro-in-logo.png';
import hedvabnaStezka from '../assets/img/partners/medial/hedvabna_stezka_logo.png';
import hexxa from '../assets/img/partners/medial/hexxa_logo.jpg';
import inZlin from '../assets/img/partners/medial/in-zlin-logo.png';
import kiss from '../assets/img/partners/medial/kiss_logo.png';
import knihovnaUtb from '../assets/img/partners/medial/knihovna_utb_logo.png';
import kudyZNudy from '../assets/img/partners/medial/kudy-z-nudy-logo.png';
import stamgastGurman from '../assets/img/partners/medial/stamgast-logo.png';
import turistikaCZ from '../assets/img/partners/medial/turistika-logo.png';
import zlinCZ from '../assets/img/partners/medial/zlin-logo.png';
import zlinskoLuhacovisko from '../assets/img/partners/medial/zlinsko_luhacovicko_logo.png';
import zlinskyKraj from '../assets/img/partners/medial/zlinsky_kraj_logo.png';

export const generalPartners: TPartnerList = {
  headline: 'Generální partneři',
  partners: [
    {
      img: alza,
      alt: 'Alza',
    },
    {
      img: vodarnaZlin,
      alt: 'Vodárna Zlín',
    },
    {
      img: zlinBlack,
      alt: 'Zlín Black',
    },
    {
      img: isProd,
      alt: 'Is Produkce',
    },
  ],
};

export const mainPartners: TPartnerList = {
  headline: 'Hlavní partneři',
  partners: [
    {
      img: cpic,
      alt: 'Cpic',
    },
    {
      img: nadaceTomaseBati,
      alt: 'Nadace Tomáše Bati',
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
      img: zlinskoLuhacovisko,
      alt: 'Zlínsko-Luhacovicko',
    },
    {
      img: zlinskyKraj,
      alt: 'Zlínský kraj',
    },
    {
      img: zlinCZ,
      alt: 'Zlín.cz',
    },
    {
      img: stamgastGurman,
      alt: 'Stámgast Gurmán',
    },
    {
      img: gastroin,
      alt: 'Gastroin',
    },
    {
      img: turistikaCZ,
      alt: 'Turistika.cz',
    },
    {
      img: hexxa,
      alt: 'Hexxa',
    },
    {
      img: knihovnaUtb,
      alt: 'Knihovna UTB',
    },
    {
      img: inZlin,
      alt: 'InZlín',
    },
    {
      img: kudyZNudy,
      alt: 'Kudy z nudy',
      link: 'https://www.kudyznudy.cz/',
    },
    {
      img: kiss,
      alt: 'Kiss',
    },
  ],
};

export const basicPartners: TPartnerList = {
  headline: 'Partneři',
  partners: [
    {
      img: co,
      alt: 'CO',
    },
    {
      img: dprMetal,
      alt: 'dpr metal',
    },
    {
      img: lyoFood,
      alt: 'lyo food',
    },
    {
      img: manucafe,
      alt: 'manucafe',
    },
    {
      img: cokoKral,
      alt: 'Čokoládové Království',
    },
    {
      img: postaHranic,
      alt: 'Pošta bez hranic',
    },
  ],
};
