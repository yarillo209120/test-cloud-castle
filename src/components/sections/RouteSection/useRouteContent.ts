import { useState } from 'react';

type Subject = {
  id: number;
  title: string;
  description: string;
};

type RouteContent = {
  id: number;
  title: string;
  subjects: Subject[];
};

export const useRouteContent = () => {
  const [activeTab, setActiveTab] = useState<number>(1); // По умолчанию "Основные предметы"

  const content: Record<number, RouteContent> = {
    1: {
      id: 1,
      title: "Основные предметы",
      subjects: [
        { id: 1, title: "Физика", description: "Шокирующая правда о преломлении света" },
        { id: 2, title: "Литература", description: "О чем молчат картины: великие художники" },
        { id: 3, title: "Искусство", description: "Пушкин наше всё!" },
        { id: 4, title: "Математика", description: "Интегралы и функции - лучшее что придумал человек" },
        { id: 5, title: "Химия", description: "О чем молчат картины: великие художники" },
        { id: 6, title: "История", description: "Пушкин наше всё!" }
      ]
    },
    2: {
      id: 2,
      title: "Факультативы",
      subjects: [
        { id: 7, title: "Алгебра", description: "Раздел математики как обобщение и расширение арифметики" },
        { id: 8, title: "Ботаника", description: "Наука о растениях" },
        { id: 9, title: "Астрономия", description: "Наука о Вселенной, изучающая небесные тела и системы" },
        { id: 10, title: "Геометрия", description: "Раздел математики, изучающий пространственные структуры" },
        { id: 11, title: "Генетика", description: "Раздел биологии, занимающийся изучением генов" },
        { id: 12, title: "Электроника", description: "Наука о взаимодействии электронов с электромагнитными полями" }
      ]
    },
    3: {
      id: 3,
      title: "Вечерняя программа",
      subjects: [
        { id: 13, title: "Бойцовский клуб", description: "Американский психологический триллер по мотивам романа Паланика" },
        { id: 14, title: "Меланхолия", description: "Драматический фильм с элементами фантастики Ларса фон Триера" },
        { id: 15, title: "Короли Догтауна", description: "Биографический драматический фильм Кэтрин Хардвик" },
        { id: 16, title: "Матрица", description: "Американская научно-фантастическая мадиафраншиза в жанре киберпанк" },
        { id: 17, title: "Эффект бабочки", description: "Психологический триллер Эрика Бресса" },
        { id: 18, title: "Дурное воспитание", description: "Криминально - драматический фильм Педро Альмодовара" }
      ]
    }
  };

  return {
    activeTab,
    setActiveTab,
    currentContent: content[activeTab],
    tabs: [
      { id: 1, title: "Основные предметы" },
      { id: 2, title: "Факультативы" },
      { id: 3, title: "Вечерняя программа" }
    ]
  };
};