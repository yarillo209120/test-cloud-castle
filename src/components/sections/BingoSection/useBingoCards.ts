import { useState } from 'react';

// Тип для карточки бинго
export type BingoCard = {
  id: number;
  title: string;
  backContent: string;
  bgImage?: string;
};

// Тип возвращаемого значения хука
type UseBingoCardsReturn = {
  cards: BingoCard[];
};

const initialCards: BingoCard[] = [
  {
    id: 1,
    title: 'Физика',
    backContent: 'Фи́зика — область естествознания: наука о наиболее общих законах природы, о материи, её структуре, движении и правилах трансформации.',
    bgImage: 'images/bingo-back-bg-1.png'
  },
  {
    id: 2,
    title: 'Литература',
    backContent: 'Литература — в широком смысле слова совокупность любых письменных текстов. Чаще всего под литературой понимают художественную литературу, то есть литературу как вид искусства.',
    bgImage: 'images/bingo-back-bg-2.png'
  },
  {
    id: 3,
    title: 'Искусство',
    backContent: 'Иску́сство — одна из наиболее общих категорий эстетики, искусствознания и художественной практики.',
    bgImage: 'images/bingo-back-bg-3.png'
  },
  {
    id: 4,
    title: 'Математика',
    backContent: 'Матема́тика — точная формальная наука, первоначально исследовавшая количественные отношения и пространственные формы.',
    bgImage: 'images/bingo-back-bg-4.png'
  },
  {
    id: 5,
    title: 'Химия',
    backContent: 'Хи́мия — одна из важнейших и обширных областей естествознания, наука, изучающая вещества, также их состав и строение, их свойства, зависящие от состава и строения, их превращения, ведущие к изменению состава — химические реакции, а также законы и закономерности, которым эти превращения подчиняются.',
    bgImage: 'images/bingo-back-bg-5.png'
  },
  {
    id: 6,
    title: 'История',
    backContent: 'Исто́рия, историческая наука — наука, научная (академическая) дисциплина, предметом изучения которой является человеческое прошлое.',
    bgImage: 'images/bingo-back-bg-6.png'
  }
];

export const useBingoCards = (): UseBingoCardsReturn => {
  const [cards] = useState<BingoCard[]>(initialCards);
  return {
    cards
  };
};