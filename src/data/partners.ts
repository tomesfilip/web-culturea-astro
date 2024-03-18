import type { TPartnerItem, TPartnerList } from '../lib/types/TPartnerItem';

import americanClassic from '../assets/img/partners/basic/american_classic_logo.png';
import co from '../assets/img/partners/basic/co_logo.png';
import dprMetal from '../assets/img/partners/basic/dpr_metal_logo.png';
import lyoFood from '../assets/img/partners/basic/lyofood_logo.png';
import manucafe from '../assets/img/partners/basic/manucafe_logo.png';

import alza from '../assets/img/partners/general/alza_logo.png';
import vodarnaZlin from '../assets/img/partners/general/vodarna_zlin_logo.png';
import zlinGold from '../assets/img/partners/general/zlin_gold_logo.png';

import cpic from '../assets/img/partners/main/cpic_logo.png';
import nadaceTomaseBati from '../assets/img/partners/main/nadace_tomase_bati_logo.svg';

import gastroin from '../assets/img/partners/medial/gastroin_logo.png';
import hedvabnaStezka from '../assets/img/partners/medial/hedvabna_stezka_logo.png';
import hexxa from '../assets/img/partners/medial/hexxa_logo.jpg';
import inZlin from '../assets/img/partners/medial/inZlin_logo.png';
import kiss from '../assets/img/partners/medial/kiss_logo.png';
import knihovnaUtb from '../assets/img/partners/medial/knihovna_utb_logo.png';
import kudyZNudy from '../assets/img/partners/medial/kudyznudy_logo.jpg';
import stamgastGurman from '../assets/img/partners/medial/stamgast_gurman_logo.png';
import turistikaCZ from '../assets/img/partners/medial/turistika.cz_logo.jpg';
import zlinCZ from '../assets/img/partners/medial/zlin.cz_logo.png';
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
      img: zlinGold,
      alt: 'Zlín Gold',
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
      img: gastroin,
      alt: 'Gastroin',
    },
    {
      img: hedvabnaStezka,
      alt: 'Hedvábná stezka',
    },
    {
      img: hexxa,
      alt: 'Hexxa',
    },
    {
      img: inZlin,
      alt: 'InZlín',
    },
    {
      img: kiss,
      alt: 'Kiss',
    },
    {
      img: knihovnaUtb,
      alt: 'Knihovna UTB',
    },
    {
      img: kudyZNudy,
      alt: 'Kudy z nudy',
    },
    {
      img: stamgastGurman,
      alt: 'Stámgast Gurmán',
    },
    {
      img: turistikaCZ,
      alt: 'Turistika.cz',
    },
    {
      img: zlinCZ,
      alt: 'Zlín.cz',
    },
    {
      img: zlinskoLuhacovisko,
      alt: 'Zlínsko-Luhacovicko',
    },
    {
      img: zlinskyKraj,
      alt: 'Zlínský kraj',
    },
  ],
};

export const basicPartners: TPartnerList = {
  headline: 'Partneři',
  partners: [
    {
      img: americanClassic,
      alt: 'American Classic',
    },
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
  ],
};
