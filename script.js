// Данные о фильмах
const movies = [
    { num: 1, title: "Конец ***го мира (сериал 2017 – 2019)", link: "https://www.kinopoisk.ru/series/1071384/", type: "сериал", date: "**.01.2021", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 2, title: "Смерть на Ниле (2020)", link: "https://www.kinopoisk.ru/film/1103803/", type: "фильм", date: "29.01.2022", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 3, title: "Аркейн (сериал 2021 – 2024)", link: "https://www.kinopoisk.ru/series/4445150/", type: "аниме", date: "15.05.2022", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "1 сезон" },
    { num: 4, title: "Аркейн (сериал 2021 – 2024)", link: "https://www.kinopoisk.ru/series/4445150/", type: "аниме", date: "28.05.2022", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "1 сезон" },
    { num: 6, title: "Один дома (1990)", link: "https://www.kinopoisk.ru/film/8124/", type: "фильм", date: "16.12.2022", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 7, title: "Хитмэн (2007)", link: "https://www.kinopoisk.ru/film/104901/", type: "фильм", date: "03.03.2023", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 8, title: "Талантливый мистер Рипли (1999)", link: "https://www.kinopoisk.ru/film/5558/", type: "фильм", date: "06.04.2023", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 9, title: "Счастливого дня смерти (2017)", link: "https://www.kinopoisk.ru/film/1012421/", type: "фильм", date: "30.04.2023", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 10, title: "Токийский гуль (сериал 2014 – 2018)", link: "https://www.kinopoisk.ru/series/841681/", type: "аниме", date: "23.06.2023", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 11, title: "Избави нас от лукавого (2014)", link: "https://www.kinopoisk.ru/film/707483/", type: "фильм", date: "15.11.2023", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 12, title: "Гарри Поттер и философский камень (2001)", link: "https://www.kinopoisk.ru/film/689/", type: "фильм", date: "**.01.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 13, title: "Гарри Поттер и Тайная комната (2002)", link: "https://www.kinopoisk.ru/film/688/", type: "фильм", date: "**.01.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 14, title: "Гарри Поттер и узник Азкабана (2004)", link: "https://www.kinopoisk.ru/film/322/", type: "фильм", date: "**.01.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 15, title: "Гарри Поттер и Кубок огня (2005)", link: "https://www.kinopoisk.ru/film/8408/", type: "фильм", date: "**.01.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 16, title: "Гарри Поттер и Орден Феникса (2007)", link: "https://www.kinopoisk.ru/film/48356/", type: "фильм", date: "03.01.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 17, title: "Гарри Поттер и Принц-полукровка (2009)", link: "https://www.kinopoisk.ru/film/89515/", type: "фильм", date: "**.01.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 18, title: "Гарри Поттер и Дары Смерти: Часть I (2010)", link: "https://www.kinopoisk.ru/film/276762/", type: "фильм", date: "**.01.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 19, title: "Гарри Поттер и Дары Смерти: Часть II (2011)", link: "https://www.kinopoisk.ru/film/407636/", type: "фильм", date: "**.01.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 20, title: "Семья шпиона (сериал 2022 – ...)", link: "https://www.kinopoisk.ru/series/4686248/", type: "аниме", date: "26.01.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 21, title: "Гренландия (2020)", link: "https://www.kinopoisk.ru/film/1164520/", type: "фильм", date: "22.02.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 22, title: "Дом у дороги (2024)", link: "https://www.kinopoisk.ru/film/817167/", type: "фильм", date: "19.04.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 23, title: "мама! (2017)", link: "https://www.kinopoisk.ru/film/938643/", type: "фильм", date: "**.**.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 24, title: "Финч (2021)", link: "https://www.kinopoisk.ru/film/823616/", type: "фильм", date: "20.04.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 25, title: "Доктор Стрэндж (2016)", link: "https://www.kinopoisk.ru/film/409600/", type: "фильм", date: "23.05.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 26, title: "Слово пацана. Кровь на асфальте (2023)", link: "https://www.kinopoisk.ru/series/5304403/", type: "сериал", date: "**.**.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "О нет, это же русский сериал..." },
    { num: 27, title: "Калашников (2020)", link: "https://www.kinopoisk.ru/film/1188248/", type: "фильм", date: "28.07.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "О нет, это же русский фильм..." },
    { num: 28, title: "Министерство неджентльменских дел (2024)", link: "https://www.kinopoisk.ru/film/4414587/", type: "фильм", date: "09.09.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 29, title: "Интерстеллар (2014)", link: "https://www.kinopoisk.ru/film/258687/", type: "фильм", date: "14.09.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 30, title: "Бойцовский клуб (1999)", link: "https://www.kinopoisk.ru/film/361/", type: "фильм", date: "21.09.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 31, title: "Американский психопат (2000)", link: "https://www.kinopoisk.ru/film/588/", type: "фильм", date: "22.09.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 32, title: "Волк с Уолл-стрит (2013)", link: "https://www.kinopoisk.ru/film/462682/", type: "фильм", date: "23.09.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 33, title: "Таинственный лес (2004)", link: "https://www.kinopoisk.ru/film/47018/", type: "фильм", date: "24.09.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 34, title: "Донни Дарко (2001)", link: "https://www.kinopoisk.ru/film/410/", type: "фильм", date: "25.09.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 35, title: "Эффект бабочки (2003)", link: "https://www.kinopoisk.ru/film/5167/", type: "фильм", date: "25.09.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 36, title: "Властелин колец: Братство кольца (2001)", link: "https://www.kinopoisk.ru/film/328/", type: "фильм", date: "**.10.2024", ordered: "Заказ", chance: "", viewer: "vrusik", rating: "—", comment: "перевод Гоблина" },
    { num: 37, title: "Легенда (2015)", link: "https://www.kinopoisk.ru/film/839954/", type: "фильм", date: "07.10.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 38, title: "Дневник памяти (2004)", link: "https://www.kinopoisk.ru/film/3561/", type: "фильм", date: "08.10.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 39, title: "Знакомьтесь Джо Блэк (1998)", link: "https://www.kinopoisk.ru/film/5059/", type: "фильм", date: "16.10.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 40, title: "Однажды в… Голливуде (2019)", link: "https://www.kinopoisk.ru/film/1047883/", type: "фильм", date: "20.10.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 41, title: "Трудности перевода (2003)", link: "https://www.kinopoisk.ru/film/5930/", type: "фильм", date: "25.10.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 42, title: "Варкрафт (2016)", link: "https://www.kinopoisk.ru/film/277328/", type: "фильм", date: "26.10.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 43, title: "Сайлент Хилл (2006)", link: "https://www.kinopoisk.ru/film/78871/", type: "фильм", date: "31.10.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 44, title: "Остров проклятых (2009)", link: "https://www.kinopoisk.ru/film/397667/", type: "фильм", date: "**.10.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 45, title: "Жена путешественника во времени (2008)", link: "https://www.kinopoisk.ru/film/102128/", type: "фильм", date: "**.10.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 46, title: "Она (2013)", link: "https://www.kinopoisk.ru/film/577488/", type: "фильм", date: "08.11.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 47, title: "Старикам тут не место (2007)", link: "https://www.kinopoisk.ru/film/195434/", type: "фильм", date: "11.11.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 48, title: "Извне (2022)", link: "https://www.kinopoisk.ru/series/4476885/", type: "сериал", date: "15.11.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "1 сезон" },
    { num: 49, title: "Извне (2022)", link: "https://www.kinopoisk.ru/series/4476885/", type: "сериал", date: "22.11.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "2 сезон" },
    { num: 50, title: "Извне (2022)", link: "https://www.kinopoisk.ru/series/4476885/", type: "сериал", date: "23.11.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "2 сезон" },
    { num: 51, title: "Извне (2022)", link: "https://www.kinopoisk.ru/series/4476885/", type: "сериал", date: "30.11.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "3 сезон" },
    { num: 52, title: "Трасса (2024)", link: "https://www.kinopoisk.ru/series/5305583/", type: "сериал", date: "02.12.2024", ordered: "Заказ", chance: "", viewer: "—", rating: "—", comment: "О нет, опять русский сериал..." },
    { num: 53, title: "Настоящий детектив (2014)", link: "https://www.kinopoisk.ru/series/681831/", type: "сериал", date: "03.12.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "1 сезон" },
    { num: 54, title: "Настоящий детектив (2014)", link: "https://www.kinopoisk.ru/series/681831/", type: "сериал", date: "06.12.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "1 сезон" },
    { num: 55, title: "Настоящий детектив (2014)", link: "https://www.kinopoisk.ru/series/681831/", type: "сериал", date: "08.12.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "1 сезон" },
    { num: 56, title: "Кунг Фьюри (2015)", link: "https://www.kinopoisk.ru/film/824954/", type: "фильм", date: "15.12.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 57, title: "Фрирен, провожающая в последний путь (сериал 2023 – ...)", link: "https://www.kinopoisk.ru/series/5401195/", type: "аниме", date: "20.12.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 58, title: "Фрирен, провожающая в последний путь (сериал 2023 – ...)", link: "https://www.kinopoisk.ru/series/5401195/", type: "аниме", date: "21.12.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 59, title: "Форма голоса (2016)", link: "https://www.kinopoisk.ru/film/963343/", type: "аниме", date: "28.12.2024", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 60, title: "Гарри Поттер и философский камень (2001)", link: "https://www.kinopoisk.ru/film/689/", type: "фильм", date: "**.01.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 61, title: "Гарри Поттер и Тайная комната (2002)", link: "https://www.kinopoisk.ru/film/688/", type: "фильм", date: "**.01.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 62, title: "Гарри Поттер и узник Азкабана (2004)", link: "https://www.kinopoisk.ru/film/322/", type: "фильм", date: "**.01.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 63, title: "Гарри Поттер и Кубок огня (2005)", link: "https://www.kinopoisk.ru/film/8408/", type: "фильм", date: "**.01.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 64, title: "Гарри Поттер и Орден Феникса (2007)", link: "https://www.kinopoisk.ru/film/48356/", type: "фильм", date: "**.01.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 65, title: "Гарри Поттер и Принц-полукровка (2009)", link: "https://www.kinopoisk.ru/film/89515/", type: "фильм", date: "**.01.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 66, title: "Гарри Поттер и Дары Смерти: Часть I (2010)", link: "https://www.kinopoisk.ru/film/276762/", type: "фильм", date: "06.01.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 67, title: "Гарри Поттер и Дары Смерти: Часть II (2011)", link: "https://www.kinopoisk.ru/film/407636/", type: "фильм", date: "**.01.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 68, title: "Пираты Карибского моря: Проклятие Черной жемчужины (2003)", link: "https://www.kinopoisk.ru/film/4374/", type: "фильм", date: "**.01.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 69, title: "Пираты Карибского моря: Сундук мертвеца (2006)", link: "https://www.kinopoisk.ru/film/63991/", type: "фильм", date: "19.01.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 70, title: "Послезавтра (2004)", link: "https://www.kinopoisk.ru/film/2053/", type: "фильм", date: "20.01.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 71, title: "Сумерки (2008)", link: "https://www.kinopoisk.ru/film/401177/", type: "фильм", date: "27.01.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 72, title: "Джон Уик (2014)", link: "https://www.kinopoisk.ru/film/762738/", type: "фильм", date: "25.02.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 73, title: "Джон Уик 2 (2017)", link: "https://www.kinopoisk.ru/film/885658/", type: "фильм", date: "26.02.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 74, title: "Джон Уик 3 (2019)", link: "https://www.kinopoisk.ru/film/1009536/", type: "фильм", date: "27.02.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 75, title: "Джон Уик 4 (2023)", link: "https://www.kinopoisk.ru/film/1267348/", type: "фильм", date: "01.03.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 76, title: "Царство падальщиков (сериал 2023)", link: "https://www.kinopoisk.ru/series/5002282/", type: "мультфильм", date: "11.03.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 77, title: "Железный человек (2008)", link: "https://www.kinopoisk.ru/film/61237/", type: "фильм", date: "**.03.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 78, title: "Железный человек 2 (2010)", link: "https://www.kinopoisk.ru/film/411924/", type: "фильм", date: "21.03.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 79, title: "Человек-паук (2002)", link: "https://www.kinopoisk.ru/film/838/", type: "фильм", date: "18.05.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 80, title: "Человек-паук 2 (2004)", link: "https://www.kinopoisk.ru/film/2898/", type: "фильм", date: "19.05.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 81, title: "Пароль: Хаус (2018)", link: "https://www.kinopoisk.ru/film/1212316/", type: "фильм", date: "24.05.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 82, title: "Нерв (2016)", link: "https://www.kinopoisk.ru/film/889091/", type: "фильм", date: "**.**.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 83, title: "Шестое чувство (1999)", link: "https://www.kinopoisk.ru/film/395/", type: "фильм", date: "09.06.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 84, title: "Двойной форсаж (2003)", link: "https://www.kinopoisk.ru/film/323/", type: "фильм", date: "21.06.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 85, title: "Знамение (2009)", link: "https://www.kinopoisk.ru/film/102510/", type: "фильм", date: "21.06.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 86, title: "Не шутите с Zоханом! (2008)", link: "https://www.kinopoisk.ru/film/280826/", type: "фильм", date: "**.**.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "Скипнули после игры в \"мяч\" котом" },
    { num: 87, title: "Папе снова 17 (2009)", link: "https://www.kinopoisk.ru/film/395066/", type: "фильм", date: "28.07.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 88, title: "Люди Икс 2 (2003)", link: "https://www.kinopoisk.ru/film/298/", type: "фильм", date: "05.08.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 89, title: "Люди Икс: Первый класс (2011)", link: "https://www.kinopoisk.ru/film/462358/", type: "фильм", date: "09.08.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 90, title: "Росомаха: Бессмертный (2013)", link: "https://www.kinopoisk.ru/film/462754/", type: "фильм", date: "11.08.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 91, title: "Темные воды (2019)", link: "https://www.kinopoisk.ru/film/1228069/", type: "фильм", date: "27.09.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 92, title: "Звездная пыль (2007)", link: "https://www.kinopoisk.ru/film/197863/", type: "фильм", date: "01.10.2025", ordered: "Заказ", chance: "", viewer: "Sosuto_Usobaki", rating: "—", comment: "" },
    { num: 93, title: "Дэдпул (2016)", link: "https://www.kinopoisk.ru/film/462360/", type: "фильм", date: "03.10.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 94, title: "Дэдпул 2 (2018)", link: "https://www.kinopoisk.ru/film/961715/", type: "фильм", date: "04.10.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 95, title: "Дэдпул и Росомаха (2024)", link: "https://www.kinopoisk.ru/film/1008444/", type: "фильм", date: "05.10.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 96, title: "Мегамозг (2010)", link: "https://www.kinopoisk.ru/film/405608/", type: "мультфильм", date: "06.10.2025", ordered: "Рулетка", chance: "", viewer: "vrusik", rating: "—", comment: "" },
    { num: 97, title: "Хэнкок (2008)", link: "https://www.kinopoisk.ru/film/102151/", type: "фильм", date: "08.10.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 98, title: "Человек-паук: Возвращение домой (2017)", link: "https://www.kinopoisk.ru/film/690593/", type: "фильм", date: "16.10.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 99, title: "Человек-паук: Вдали от дома (2019)", link: "https://www.kinopoisk.ru/film/1008445/", type: "фильм", date: "19.10.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 100, title: "Человек-паук: Нет пути домой (2021)", link: "https://www.kinopoisk.ru/film/1309570/", type: "фильм", date: "24.10.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 101, title: "Девятые врата (1999)", link: "https://www.kinopoisk.ru/film/11637/", type: "фильм", date: "28.10.2025", ordered: "Рулетка", chance: "", viewer: "WoodsyBallins", rating: "—", comment: "" },
    { num: 102, title: "Обитель зла (2002)", link: "https://www.kinopoisk.ru/film/801/", type: "фильм", date: "31.10.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 103, title: "Трансформеры (2007)", link: "https://www.kinopoisk.ru/film/81288/", type: "фильм", date: "06.11.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 104, title: "Семь жизней (2008)", link: "https://www.kinopoisk.ru/film/395787/", type: "фильм", date: "09.11.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 105, title: "Время Армагеддона (2022)", link: "https://www.kinopoisk.ru/film/1388894/", type: "фильм", date: "10.11.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 106, title: "Плохие парни (1995)", link: "https://www.kinopoisk.ru/film/3908/", type: "фильм", date: "16.11.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 107, title: "Плохие парни 2 (2003)", link: "https://www.kinopoisk.ru/film/2928/", type: "фильм", date: "**.11.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 108, title: "Плохие парни навсегда (2020)", link: "https://www.kinopoisk.ru/film/472386/", type: "фильм", date: "**.11.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 109, title: "Патруль (2012)", link: "https://www.kinopoisk.ru/film/584405/", type: "фильм", date: "**.**.2025", ordered: "Рулетка", chance: "", viewer: "Loka_G", rating: "—", comment: "" },
    { num: 110, title: "Презумпция невиновности (сериал 2024)", link: "https://www.kinopoisk.ru/series/4852097/", type: "сериал", date: "02.11.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "1-8 серии" },
    { num: 111, title: "Идеальные незнакомцы (2015)", link: "https://www.kinopoisk.ru/film/925669/", type: "фильм", date: "24.11.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 112, title: "Тор (2011)", link: "https://www.kinopoisk.ru/film/258941/", type: "фильм", date: "05.12.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 113, title: "Первый мститель (2011)", link: "https://www.kinopoisk.ru/film/160946/", type: "фильм", date: "08.12.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 114, title: "Капитан Марвел (2019)", link: "https://www.kinopoisk.ru/film/843859/", type: "фильм", date: "08.12.2025", ordered: "Заказ", chance: "", viewer: "silavsvobode", rating: "—", comment: "" },
    { num: 115, title: "Мстители (2012)", link: "https://www.kinopoisk.ru/film/263531/", type: "фильм", date: "09.12.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 116, title: "Железный человек 3 (2013)", link: "https://www.kinopoisk.ru/film/462762/", type: "фильм", date: "10.12.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 117, title: "Тор 2: Царство тьмы (2013)", link: "https://www.kinopoisk.ru/film/595938/", type: "фильм", date: "14.12.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 118, title: "Первый мститель: Другая война (2014)", link: "https://www.kinopoisk.ru/film/676266/", type: "фильм", date: "15.12.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 119, title: "Стражи Галактики (2014)", link: "https://www.kinopoisk.ru/film/689066/", type: "фильм", date: "19.12.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 120, title: "Стражи Галактики. Часть 2 (2017)", link: "https://www.kinopoisk.ru/film/841263/", type: "фильм", date: "19.12.2025", ordered: "Заказ", chance: "", viewer: "Аноним", rating: "—", comment: "" },
    { num: 121, title: "Мстители: Эра Альтрона (2015)", link: "https://www.kinopoisk.ru/film/679830/", type: "фильм", date: "27.12.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 122, title: "Человек-муравей (2015)", link: "https://www.kinopoisk.ru/film/195496/", type: "фильм", date: "30.12.2025", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 123, title: "Первый мститель: Противостояние (2016)", link: "https://www.kinopoisk.ru/film/822708/", type: "фильм", date: "01.01.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 124, title: "Чёрная Пантера (2018)", link: "https://www.kinopoisk.ru/film/623250/", type: "фильм", date: "02.01.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 125, title: "Гарри Поттер и философский камень (2001)", link: "https://www.kinopoisk.ru/film/689/", type: "фильм", date: "03.01.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 126, title: "Гарри Поттер и Тайная комната (2002)", link: "https://www.kinopoisk.ru/film/688/", type: "фильм", date: "03.01.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 127, title: "Гарри Поттер и узник Азкабана (2004)", link: "https://www.kinopoisk.ru/film/322/", type: "фильм", date: "04.01.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 128, title: "Гарри Поттер и Кубок огня (2005)", link: "https://www.kinopoisk.ru/film/8408/", type: "фильм", date: "04.01.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 129, title: "Гарри Поттер и Орден Феникса (2007)", link: "https://www.kinopoisk.ru/film/48356/", type: "фильм", date: "05.01.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 130, title: "Гарри Поттер и Принц-полукровка (2009)", link: "https://www.kinopoisk.ru/film/89515/", type: "фильм", date: "05.01.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 131, title: "Гарри Поттер и Дары Смерти: Часть I (2010)", link: "https://www.kinopoisk.ru/film/276762/", type: "фильм", date: "06.01.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 132, title: "Гарри Поттер и Дары Смерти: Часть II (2011)", link: "https://www.kinopoisk.ru/film/407636/", type: "фильм", date: "06.01.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 133, title: "Тор: Рагнарёк (2017)", link: "https://www.kinopoisk.ru/film/822709/", type: "фильм", date: "08.01.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 134, title: "Мстители: Война бесконечности (2018)", link: "https://www.kinopoisk.ru/film/843649/", type: "фильм", date: "09.01.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 135, title: "Мстители: Финал (2019)", link: "https://www.kinopoisk.ru/film/843650/", type: "фильм", date: "09.01.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 136, title: "Стражи Галактики. Часть 3 (2023)", link: "https://www.kinopoisk.ru/film/1044280/", type: "фильм", date: "10.01.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 137, title: "Человек-муравей и Оса (2018)", link: "https://www.kinopoisk.ru/film/935940/", type: "фильм", date: "12.01.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 138, title: "Локи (сериал 2021 – 2023)", link: "https://www.kinopoisk.ru/series/1203039/", type: "сериал", date: "17.01.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "1 сезон, 1-6 серии" },
    { num: 139, title: "Локи (сериал 2021 – 2023)", link: "https://www.kinopoisk.ru/series/1203039/", type: "сериал", date: "21.01.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "2 сезон, 1-3 серии" },
    { num: 140, title: "Локи (сериал 2021 – 2023)", link: "https://www.kinopoisk.ru/series/1203039/", type: "сериал", date: "22.01.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "2 сезон, 4-6 серии" },
    { num: 141, title: "Телохранитель киллера (2017)", link: "https://www.kinopoisk.ru/film/835877/", type: "фильм", date: "28.01.2026", ordered: "Рулетка", chance: "", viewer: "apathyc", rating: "—", comment: "" },
    { num: 142, title: "Классный мюзикл (2006)", link: "https://www.kinopoisk.ru/film/184432/", type: "фильм", date: "03.02.2026", ordered: "Заказ", chance: "", viewer: "Sosuto_Usobaki", rating: "—", comment: "не досмотрели" },
    { num: 143, title: "Криминальное чтиво (1994)", link: "https://www.kinopoisk.ru/film/342/", type: "фильм", date: "05.02.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 144, title: "Ночной администратор (сериал 2016 – ...)", link: "https://www.kinopoisk.ru/series/462649/", type: "сериал", date: "09.02.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "1 сезон, 1-3 серии" },
    { num: 145, title: "Ночной администратор (сериал 2016 – ...)", link: "https://www.kinopoisk.ru/series/462649/", type: "сериал", date: "10.02.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "1 сезон, 4-6 серии" },
    { num: 146, title: "Большая игра (2017)", link: "https://www.kinopoisk.ru/film/976636/", type: "фильм", date: "12.02.2026", ordered: "Рулетка", chance: "", viewer: "integral179", rating: "—", comment: "" },
    { num: 147, title: "Окей, Лекси! (2019)", link: "https://www.kinopoisk.ru/film/1228236/", type: "фильм", date: "13.02.2026", ordered: "Заказ", chance: "", viewer: "Чей-то сын", rating: "—", comment: "" },
    { num: 148, title: "Бэтмен: Начало (2005)", link: "https://www.kinopoisk.ru/film/47237/", type: "фильм", date: "21.02.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 149, title: "Темный рыцарь (2008)", link: "https://www.kinopoisk.ru/film/111543/", type: "фильм", date: "22.02.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 150, title: "Темный рыцарь: Возрождение легенды (2012)", link: "https://www.kinopoisk.ru/film/437410/", type: "фильм", date: "25.02.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 151, title: "Человек из стали (2013)", link: "https://www.kinopoisk.ru/film/252667/", type: "фильм", date: "26.02.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 152, title: "Бэтмен против Супермена: На заре справедливости (2016)", link: "https://www.kinopoisk.ru/film/770631/", type: "фильм", date: "28.02.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 153, title: "Лжец, лжец (1997)", link: "https://www.kinopoisk.ru/film/1721/", type: "фильм", date: "01.03.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 154, title: "Убойный футбол (2001)", link: "https://www.kinopoisk.ru/film/833/", type: "фильм", date: "01.03.2026", ordered: "Заказ / Рулетка", chance: "", viewer: "stalisard / Loka_G", rating: "—", comment: "" },
    { num: 155, title: "Лига справедливости Зака Снайдера (2021)", link: "https://www.kinopoisk.ru/film/1387021/", type: "фильм", date: "05.03.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "попытка 1, не досмотрели" },
    { num: 156, title: "Лига справедливости Зака Снайдера (2021)", link: "https://www.kinopoisk.ru/film/1387021/", type: "фильм", date: "07.03.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "попытка 2, досмотрели" },
    { num: 157, title: "Бэтмен (2022)", link: "https://www.kinopoisk.ru/film/590286/", type: "фильм", date: "11.03.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 158, title: "Чёрный телефон (2021)", link: "https://www.kinopoisk.ru/film/4368595/", type: "фильм", date: "13.03.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 159, title: "Магическая битва (сериал 2020 – ...)", link: "https://www.kinopoisk.ru/series/1381125/", type: "аниме", date: "31.03.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "3 сезон, 1-3 серии" },
    { num: 160, title: "Новая реальность (2022)", link: "https://www.kinopoisk.ru/film/1402067/", type: "фильм", date: "07.04.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 161, title: "Бегущий в лабиринте (2014)", link: "https://www.kinopoisk.ru/film/575613/", type: "фильм", date: "08.04.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 162, title: "Бегущий в лабиринте: Испытание огнём (2015)", link: "https://www.kinopoisk.ru/film/842673/", type: "фильм", date: "09.04.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 163, title: "Черный плавник (2013)", link: "https://www.kinopoisk.ru/film/727913/", type: "фильм", date: "12.04.2026", ordered: "Заказ", chance: "", viewer: "Dreamwuzker", rating: "—", comment: "" },
    { num: 164, title: "Магическая битва (сериал 2020 – ...)", link: "https://www.kinopoisk.ru/series/1381125/", type: "аниме", date: "24.04.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "3 сезон, 4-12 серии" },
    { num: 165, title: "Милашка (2002)", link: "https://www.kinopoisk.ru/film/15527/", type: "фильм", date: "27.04.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "Скипнули после песни про \"пинэс\"" },
    { num: 166, title: "Эквилибриум (2002)", link: "https://www.kinopoisk.ru/film/309/", type: "фильм", date: "29.04.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 167, title: "Терминатор (1984)", link: "https://www.kinopoisk.ru/film/507/", type: "фильм", date: "29.04.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 168, title: "Борат (2006)", link: "https://www.kinopoisk.ru/film/102474/", type: "фильм", date: "30.04.2026", ordered: "Заказ", chance: "", viewer: "aero", rating: "—", comment: "" },
    { num: 169, title: "Терминатор 2: Судный день (1991)", link: "https://www.kinopoisk.ru/film/444/", type: "фильм", date: "02.05.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 170, title: "Опасная игра Слоун (2016)", link: "https://www.kinopoisk.ru/film/933307/", type: "фильм", date: "03.05.2026", ordered: "Рулетка", chance: "", viewer: "swebokk/integral179", rating: "—", comment: "" },
    { num: 171, title: "По наклонной (2020)", link: "https://www.kinopoisk.ru/film/1245501/", type: "фильм", date: "04.05.2026", ordered: "Заказ", chance: "", viewer: "Аноним", rating: "—", comment: "" },
    { num: 172, title: "Кловерфилд, 10 (2016)", link: "https://www.kinopoisk.ru/film/843463/", type: "фильм", date: "05.05.2026", ordered: "Заказ", chance: "", viewer: "Аноним", rating: "—", comment: "" },
    { num: 173, title: "Сумерки (2008)", link: "https://www.kinopoisk.ru/film/401177/", type: "фильм", date: "05.05.2026", ordered: "Заказ", chance: "", viewer: "st1llyng", rating: "—", comment: "" },
    { num: 174, title: "Не говори никому (2024)", link: "https://www.kinopoisk.ru/film/5429853/", type: "фильм", date: "05.05.2026", ordered: "Заказ", chance: "", viewer: "st1llyng", rating: "—", comment: "" },
    { num: 175, title: "В погоне за счастьем (2006)", link: "https://www.kinopoisk.ru/film/104938/", type: "фильм", date: "10.05.2026", ordered: "Рулетка", chance: "", viewer: "misterflup", rating: "—", comment: "" },
    { num: 176, title: "Время (2011)", link: "https://www.kinopoisk.ru/film/517988/", type: "фильм", date: "12.05.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 177, title: "Сплит (2017)", link: "https://www.kinopoisk.ru/film/930534/", type: "фильм", date: "15.05.2026", ordered: "Заказ", chance: "", viewer: "Аноним", rating: "—", comment: "Душный выкуп-аук" },
    { num: 178, title: "Убийство в Восточном экспрессе (2017)", link: "https://www.kinopoisk.ru/film/817969/", type: "фильм", date: "16.05.2026", ordered: "Рулетка", chance: "", viewer: "misterflup", rating: "—", comment: "" },
    { num: 179, title: "Проект X: Дорвались (2012)", link: "https://www.kinopoisk.ru/film/507440/", type: "фильм", date: "18.05.2026", ordered: "Рулетка", chance: "", viewer: "st1llyng", rating: "—", comment: "" },
    { num: 180, title: "Облачный атлас (2012)", link: "https://www.kinopoisk.ru/film/464484/", type: "фильм", date: "19.05.2026", ordered: "Заказ", chance: "", viewer: "aero", rating: "—", comment: "" },
    { num: 181, title: "Ужас Амитивилля (2005)", link: "https://www.kinopoisk.ru/film/63732/", type: "фильм", date: "24.05.2026", ordered: "СкамРулетка", chance: "", viewer: "enrris", rating: "—", comment: "" },
    { num: 182, title: "Обитель теней (2017)", link: "https://www.kinopoisk.ru/film/992500/", type: "фильм", date: "26.05.2026", ordered: "Рулетка", chance: "", viewer: "Аноним", rating: "—", comment: "" },
    { num: 183, title: "Голодные игры (2012)", link: "https://www.kinopoisk.ru/film/468581/", type: "фильм", date: "27.05.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 184, title: "Голодные игры: И вспыхнет пламя (2013)", link: "https://www.kinopoisk.ru/film/602373/", type: "фильм", date: "28.05.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 185, title: "Страх (1996)", link: "https://www.kinopoisk.ru/film/6174/", type: "фильм", date: "10.05.2026", ordered: "Заказ", chance: "", viewer: "st1llyng", rating: "—", comment: "" },
    { num: 186, title: "Грязные деньги (2025)", link: "https://www.kinopoisk.ru/film/5437609/", type: "фильм", date: "20.06.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "Скипнули, скучный фильм" },
    { num: 187, title: "Темный ангел (сериал 2000 – 2002)", link: "https://www.kinopoisk.ru/series/94225/", type: "сериал", date: "20.06.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "1 серия" },
    { num: 188, title: "Из пекла (2013)", link: "https://www.kinopoisk.ru/film/462240/", type: "фильм", date: "21.06.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 189, title: "Вне/себя (2015)", link: "https://www.kinopoisk.ru/film/655435/", type: "фильм", date: "22.06.2026", ordered: "Заказ", chance: "", viewer: "bot", rating: "—", comment: "" },
    { num: 190, title: "Эксперимент (2010)", link: "https://www.kinopoisk.ru/film/467972/", type: "фильм", date: "23.06.2026", ordered: "Заказ", chance: "", viewer: "Чей-то сын", rating: "—", comment: "" },
    { num: 191, title: "Глубоководный горизонт (2016)", link: "https://www.kinopoisk.ru/film/607737/", type: "фильм", date: "24.06.2026", ordered: "Заказ", chance: "", viewer: "st1llyng", rating: "—", comment: "Выбор Эн" },
    { num: 192, title: "127 часов (2010)", link: "https://www.kinopoisk.ru/film/484878/", type: "фильм", date: "25.06.2026", ordered: "Заказ", chance: "", viewer: "bot", rating: "—", comment: "" },
    { num: 193, title: "Извне (2022)", link: "https://www.kinopoisk.ru/series/4476885/", type: "сериал", date: "18.07.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "3 сезон, 1-2 серия" },
    { num: 194, title: "Извне (2022)", link: "https://www.kinopoisk.ru/series/4476885/", type: "сериал", date: "19.07.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "3 сезон, 3-5 серия" },
    { num: 195, title: "Хищник (1987)", link: "https://www.kinopoisk.ru/film/6303/", type: "фильм", date: "19.07.2026", ordered: "Заказ", chance: "", viewer: "wintery95", rating: "—", comment: "" },
    { num: 196, title: "Извне (2022)", link: "https://www.kinopoisk.ru/series/4476885/", type: "сериал", date: "20.07.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "3 сезон, 6 серия" },
    { num: 197, title: "Трудный день (2014)", link: "https://www.kinopoisk.ru/film/839823/", type: "фильм", date: "20.07.2026", ordered: "Заказ", chance: "", viewer: "wintery95", rating: "—", comment: "" },
    { num: 198, title: "Извне (2022)", link: "https://www.kinopoisk.ru/series/4476885/", type: "сериал", date: "28.07.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "3 сезон, 7-8 серия" },
    { num: 199, title: "Не беспокойся, дорогая (2021)", link: "https://www.kinopoisk.ru/film/1379512/", type: "фильм", date: "29.07.2026", ordered: "Заказ", chance: "", viewer: "bot", rating: "—", comment: "" },
    { num: 200, title: "Обсессия (2025)", link: "https://www.kinopoisk.ru/film/10355286/", type: "фильм", date: "02.08.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "" },
    { num: 201, title: "Отвязные дворняги (2023)", link: "https://www.kinopoisk.ru/film/4541542/", type: "фильм", date: "11.08.2026", ordered: "Рулетка", chance: "", viewer: "usehax17", rating: "—", comment: "" },
    { num: 202, title: "Пункт назначения: Поезд № 13 (2024)", link: "https://www.kinopoisk.ru/film/5599850/", type: "фильм", date: "12.08.2026", ordered: "Заказ", chance: "", viewer: "usehax17", rating: "—", comment: "" },
    { num: 203, title: "Громовержцы* (2025)", link: "https://www.kinopoisk.ru/film/5001443/", type: "фильм", date: "13.08.2026", ordered: "Заказ", chance: "", viewer: "usehax17", rating: "—", comment: "" },
    { num: 204, title: "Почему он? (2016)", link: "https://www.kinopoisk.ru/film/930000/", type: "фильм", date: "17.08.2026", ordered: "Заказ", chance: "", viewer: "usehax17", rating: "—", comment: "" },
    { num: 205, title: "Извне (2022)", link: "https://www.kinopoisk.ru/series/4476885/", type: "сериал", date: "19.08.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "4 сезон, 1-2 серия" },
    { num: 206, title: "Извне (2022)", link: "https://www.kinopoisk.ru/series/4476885/", type: "сериал", date: "21.08.2026", ordered: "—", chance: "", viewer: "—", rating: "—", comment: "4 сезон, 3 серия" },
    { num: 207, title: "Женись на мне, чувак (2017)", link: "https://www.kinopoisk.ru/film/999563/", type: "фильм", date: "21.08.2026", ordered: "Заказ", chance: "", viewer: "integral179", rating: "—", comment: "Заказали оф на середине фильма" },
    { num: 208, title: "Основатель (2016)", link: "https://www.kinopoisk.ru/film/893245/", type: "фильм", date: "25.08.2026", ordered: "Заказ", chance: "", viewer: "bot", rating: "—", comment: "" },
    { num: 209, title: "Схватка (2011)", link: "https://www.kinopoisk.ru/film/503853/", type: "фильм", date: "01.09.2026", ordered: "Рулетка", chance: "", viewer: "cptjacksparrrrow", rating: "—", comment: "" },
    { num: 210, title: "Одержимость (2013)", link: "https://www.kinopoisk.ru/film/725190/", type: "фильм", date: "03.09.2026", ordered: "Рулетка", chance: "", viewer: "aero", rating: "—", comment: "" },
    { num: 211, title: "500 дней лета (2009)", link: "https://www.kinopoisk.ru/film/409372/", type: "фильм", date: "04.09.2026", ordered: "Рулетка", chance: "", viewer: "Аноним", rating: "—", comment: "" },
    { num: 212, title: "Ванильное небо (2001)", link: "https://www.kinopoisk.ru/film/870/", type: "фильм", date: "04.09.2026", ordered: "Заказ", chance: "", viewer: "Пандо", rating: "—", comment: "" },
    { num: 213, title: "Шрэк 2 (2004)", link: "https://www.kinopoisk.ru/film/5273/", type: "мультфильм", date: "04.09.2026", ordered: "Заказ", chance: "", viewer: "aero", rating: "—", comment: "" },
    { num: 214, title: "Мумия (1999)", link: "https://www.kinopoisk.ru/film/4484/", type: "фильм", date: "06.09.2026", ordered: "Заказ", chance: "", viewer: "sitrash", rating: "—", comment: "" },
    { num: 215, title: "Нескромные (2025)", link: "https://www.kinopoisk.ru/film/6589797/", type: "фильм", date: "09.09.2026", ordered: "Рулетка", chance: "48.4%", viewer: "mossberg_21", rating: "—", comment: "" },
    { num: 216, title: "Ямакаси: Свобода в движении (2001)", link: "https://www.kinopoisk.ru/film/14346/", type: "фильм", date: "12.09.2026", ordered: "Заказ", chance: "", viewer: "aero", rating: "—", comment: "" },
    { num: 217, title: "13-й район (2004)", link: "https://www.kinopoisk.ru/film/81522/", type: "фильм", date: "12.09.2026", ordered: "Заказ", chance: "", viewer: "LYFECRY", rating: "—", comment: "" }
];

// ===== ЖАНРЫ (по ID Кинопоиска) =====
const genresById = {
    "1071384": ["триллер","драма","криминал","мелодрама","приключения","комедия"],
    "1103803": ["драма","криминал","детектив"],
    "4445150": ["драма","фантастика","боевик","фэнтези","мультфильм"],
    "1032606": ["триллер","драма","криминал","детектив","фантастика"],
    "8124": ["комедия","семейный"],
    "104901": ["триллер","криминал","боевик"],
    "5558": ["триллер","драма","криминал"],
    "1012421": ["детектив","фантастика","комедия","ужасы"],
    "841681": ["триллер","драма","боевик","фэнтези","ужасы","мультфильм","аниме"],
    "707483": ["триллер","криминал","детектив","ужасы"],
	"938643": ["драма","фэнтези"],
    "689": ["приключения","фэнтези","семейный"],
    "688": ["приключения","фэнтези","семейный"],
    "322": ["приключения","фэнтези","семейный"],
    "8408": ["приключения","фэнтези","семейный"],
    "48356": ["приключения","фэнтези","семейный"],
    "89515": ["приключения","фэнтези","семейный"],
    "276762": ["приключения","фэнтези","семейный"],
    "407636": ["детектив","приключения","фэнтези","семейный"],
    "4686248": ["боевик","комедия","мультфильм","аниме"],
    "1164520": ["боевик"],
    "817167": ["драма","криминал","боевик"],
    "823616": ["драма","фантастика"],
    "409600": ["фантастика","приключения","боевик","фэнтези"],
    "5304403": ["драма","криминал"],
    "1188248": ["биография","история"],
    "4414587": ["боевик","комедия","военный","история"],
    "258687": ["драма","фантастика","приключения"],
    "361": ["триллер","драма","криминал"],
    "588": ["триллер","драма","криминал"],
    "462682": ["драма","криминал","биография","комедия"],
    "47018": ["триллер","мелодрама"],
    "410": ["триллер","драма","детектив","фантастика"],
    "5167": ["триллер","драма","фантастика"],
    "328": ["драма","приключения","боевик","фэнтези"],
    "839954": ["триллер","драма","криминал"],
    "3561": ["драма","мелодрама"],
    "5059": ["драма","мелодрама","фэнтези"],
    "1047883": ["драма","комедия"],
    "5930": ["драма","мелодрама"],
    "277328": ["приключения","боевик","фэнтези"],
    "78871": ["детектив","ужасы"],
    "397667": ["триллер","драма","детектив"],
    "102128": ["драма","мелодрама","фантастика","фэнтези"],
    "577488": ["драма","мелодрама","фантастика"],
    "195434": ["триллер","драма","криминал","вестерн"],
    "4476885": ["триллер","драма","детектив","фантастика","ужасы"],
    "5305583": ["триллер","драма","детектив"],
    "681831": ["триллер","драма","криминал","детектив"],
    "824954": ["фантастика","боевик","фэнтези","комедия","короткометражка"],
    "5401195": ["драма","приключения","фэнтези","мультфильм","аниме"],
    "963343": ["драма","мелодрама","мультфильм","аниме"],
    "4374": ["приключения","боевик","фэнтези"],
    "63991": ["приключения","боевик","фэнтези"],
    "2053": ["триллер","драма","фантастика","приключения"],
    "401177": ["драма","мелодрама","фэнтези"],
    "762738": ["триллер","криминал","боевик"],
    "885658": ["триллер","криминал","боевик"],
    "1009536": ["триллер","криминал","боевик"],
    "1267348": ["триллер","криминал","боевик"],
    "5002282": ["драма","фантастика","приключения","мультфильм"],
    "61237": ["фантастика","приключения","боевик"],
    "411924": ["фантастика","приключения","боевик"],
    "838": ["фантастика","приключения","боевик"],
    "2898": ["фантастика","приключения","боевик"],
    "1212316": ["триллер","фантастика","ужасы"],
    "889091": ["триллер","драма","криминал","приключения","боевик"],
    "395": ["триллер","драма","детектив","фантастика","фэнтези"],
    "323": ["триллер","криминал","боевик"],
    "102510": ["триллер","детектив","фантастика"],
    "280826": ["боевик","комедия"],
    "395066": ["драма","мелодрама","фэнтези","комедия"],
    "298": ["триллер","фантастика","боевик"],
    "462358": ["фантастика","боевик"],
    "462754": ["фантастика","боевик"],
    "1228069": ["драма","детектив","биография","история"],
    "197863": ["мелодрама","приключения","фэнтези"],
    "462360": ["боевик","комедия"],
    "961715": ["фантастика","приключения","боевик","комедия"],
    "1008444": ["фантастика","приключения","боевик","комедия"],
    "405608": ["криминал","фантастика","приключения","боевик","фэнтези","комедия","мультфильм","семейный"],
    "102151": ["драма","фантастика","боевик","комедия"],
    "690593": ["фантастика","приключения","боевик"],
    "1008445": ["фантастика","приключения","боевик","фэнтези","комедия"],
    "1309570": ["фантастика","приключения","боевик","фэнтези"],
    "11637": ["триллер","детектив","фэнтези"],
    "801": ["фантастика","боевик","ужасы"],
    "81288": ["фантастика","боевик"],
    "395787": ["драма","мелодрама"],
    "1388894": ["драма"],
    "3908": ["криминал","боевик","комедия"],
    "2928": ["криминал","боевик","комедия"],
    "472386": ["криминал","боевик","комедия"],
    "584405": ["триллер","драма","криминал","боевик"],
    "4852097": ["драма","криминал","детектив"],
    "925669": ["драма","комедия"],
    "258941": ["фантастика","приключения","боевик","фэнтези"],
    "160946": ["фантастика","приключения","боевик","военный"],
    "843859": ["фантастика","приключения","боевик"],
    "263531": ["фантастика","приключения","боевик","фэнтези"],
    "462762": ["фантастика","приключения","боевик"],
    "595938": ["фантастика","приключения","боевик","фэнтези"],
    "676266": ["триллер","фантастика","приключения","боевик"],
    "689066": ["фантастика","приключения","боевик","комедия"],
    "841263": ["фантастика","приключения","боевик","комедия"],
    "679830": ["фантастика","приключения","боевик"],
    "195496": ["фантастика","приключения","боевик","комедия"],
    "822708": ["фантастика","боевик"],
    "623250": ["фантастика","приключения","боевик"],
    "822709": ["фантастика","приключения","боевик","фэнтези","комедия"],
    "843649": ["фантастика","приключения","боевик"],
    "843650": ["драма","фантастика","приключения","боевик"],
    "1044280": ["фантастика","приключения","боевик","комедия"],
    "935940": ["фантастика","приключения","боевик","комедия"],
    "1203039": ["фантастика","приключения","боевик","фэнтези"],
    "835877": ["боевик","комедия"],
    "184432": ["драма","мелодрама","комедия","музыка","семейный","мюзикл"],
    "342": ["драма","криминал"],
    "462649": ["триллер","драма","криминал","детектив"],
    "976636": ["драма","криминал","биография"],
    "1228236": ["мелодрама","фантастика","комедия"],
    "47237": ["драма","фантастика","приключения","боевик"],
    "111543": ["триллер","драма","криминал","фантастика","боевик"],
    "437410": ["триллер","драма","криминал","фантастика","боевик"],
    "252667": ["фантастика","приключения","боевик"],
    "770631": ["фантастика","приключения","боевик","фэнтези"],
    "1721": ["фэнтези","комедия"],
    "833": ["боевик","комедия","спорт"],
    "1387021": ["фантастика","боевик","фэнтези"],
    "590286": ["драма","криминал","детектив","боевик"],
    "4368595": ["драма","ужасы"],
    "1381125": ["боевик","фэнтези","ужасы","мультфильм","аниме"],
    "1402067": ["драма","фантастика"],
    "575613": ["триллер","фантастика","приключения"],
    "842673": ["триллер","фантастика","приключения","боевик"],
    "727913": ["триллер","драма","ужасы","документальный"],
    "15527": ["мелодрама","комедия"],
    "309": ["триллер","драма","фантастика","боевик"],
    "507": ["триллер","фантастика","боевик"],
    "102474": ["комедия"],
    "444": ["триллер","фантастика","боевик"],
    "933307": ["драма","криминал"],
    "1245501": ["драма","криминал","биография"],
    "843463": ["триллер","драма","фантастика"],
    "5429853": ["триллер","драма"],
    "104938": ["драма","биография"],
    "517988": ["мелодрама","фантастика","боевик"],
    "930534": ["триллер"],
    "817969": ["драма","криминал","детектив"],
    "507440": ["комедия"],
    "464484": ["драма","детектив","фантастика","приключения","боевик"],
    "63732": ["ужасы"],
    "992500": ["драма","ужасы"],
    "468581": ["триллер","фантастика","приключения","боевик"],
    "602373": ["триллер","фантастика","приключения","боевик"],
    "6174": ["триллер","драма"],
    "5437609": ["триллер","криминал","боевик"],
    "94225": ["драма","детектив","фантастика","боевик"],
    "462240": ["триллер","драма","криминал"],
    "655435": ["триллер","фантастика","боевик"],
    "467972": ["триллер","драма"],
    "607737": ["триллер","драма","боевик","история"],
    "484878": ["триллер","драма","приключения","биография"],
    "6303": ["фантастика","боевик","ужасы"],
    "839823": ["триллер","криминал","боевик"],
    "1379512": ["триллер","драма","фантастика"],
    "10355286": ["ужасы"],
    "4541542": ["приключения","комедия"],
    "5599850": ["ужасы"],
    "5001443": ["фантастика","боевик"],
    "930000": ["комедия"],
    "999563": ["мелодрама","комедия"],
    "893245": ["драма","биография"],
    "503853": ["триллер","драма","приключения"],
    "725190": ["драма","музыка"],
    "409372": ["мелодрама","комедия"],
    "870": ["триллер","мелодрама","детектив","фантастика"],
    "5273": ["мелодрама","приключения","фэнтези","комедия","мультфильм","семейный"],
    "4484": ["приключения","боевик","фэнтези"],
    "6589797": ["комедия"],
    "14346": ["драма","криминал","боевик"],
    "81522": ["триллер","криминал","фантастика","боевик"]
};

// Подставляем жанры в каждый фильм по ID из ссылки
// Слова "мультфильм" и "аниме" исключаем — они дублируют колонку "Тип"
const EXCLUDE_GENRES = ['мультфильм', 'аниме', 'фильм', 'сериал'];

// ===== РЕЙТИНГИ КИНОПОИСКА (из ratings.json) =====
const kinopoiskRatings = {
    "1071384": 7.6,
    "1103803": 6.5,
    "4445150": 8.7,
    "1032606": 8.1,
    "8124": 8.3,
    "104901": 5.9,
    "5558": 7.7,
    "1012421": 6.6,
    "841681": 7.1,
    "707483": 6.2,
    "689": 8.3,
    "688": 8.2,
    "322": 8.3,
    "8408": 8.0,
    "48356": 7.9,
    "89515": 7.9,
    "276762": 7.9,
    "407636": 8.2,
    "4686248": 8.1,
    "1164520": 7.0,
    "817167": 6.4,
    "938643": 7.1,
    "823616": 7.2,
    "409600": 7.5,
    "5304403": 8.0,
    "1188248": 7.9,
    "4414587": 7.3,
    "258687": 8.7,
    "361": 8.7,
    "588": 7.2,
    "462682": 8.1,
    "47018": 7.1,
    "410": 7.6,
    "5167": 8.2,
    "328": 8.6,
    "839954": 7.3,
    "3561": 8.3,
    "5059": 8.1,
    "1047883": 7.7,
    "5930": 7.2,
    "277328": 7.6,
    "78871": 7.2,
    "397667": 8.6,
    "102128": 7.7,
    "577488": 7.7,
    "195434": 7.8,
    "4476885": 7.6,
    "5305583": 8.0,
    "681831": 8.5,
    "824954": 7.9,
    "5401195": 8.7,
    "963343": 8.2,
    "4374": 8.4,
    "63991": 8.2,
    "2053": 7.7,
    "401177": 6.7,
    "762738": 7.0,
    "885658": 7.2,
    "1009536": 7.1,
    "1267348": 7.6,
    "5002282": 8.3,
    "61237": 8.0,
    "411924": 7.5,
    "838": 7.8,
    "2898": 7.4,
    "1212316": 6.1,
    "889091": 6.5,
    "395": 8.2,
    "323": 7.2,
    "102510": 6.9,
    "280826": 6.6,
    "395066": 7.1,
    "298": 7.6,
    "462358": 7.7,
    "462754": 6.5,
    "1228069": 7.9,
    "197863": 7.7,
    "462360": 7.6,
    "961715": 7.4,
    "1008444": 7.3,
    "405608": 7.6,
    "102151": 7.4,
    "690593": 7.2,
    "1008445": 7.4,
    "1309570": 8.0,
    "11637": 7.3,
    "801": 7.6,
    "81288": 7.6,
    "395787": 8.2,
    "1388894": 6.4,
    "3908": 7.7,
    "2928": 7.7,
    "472386": 6.7,
    "584405": 7.7,
    "4852097": 7.5,
    "925669": 7.7,
    "258941": 7.1,
    "160946": 6.7,
    "843859": 6.5,
    "263531": 7.9,
    "462762": 7.4,
    "595938": 7.2,
    "676266": 7.3,
    "689066": 7.9,
    "841263": 7.8,
    "679830": 7.3,
    "195496": 7.1,
    "822708": 7.4,
    "623250": 6.7,
    "822709": 7.7,
    "843649": 8.1,
    "843650": 8.0,
    "1044280": 8.1,
    "935940": 7.0,
    "1203039": 7.8,
    "835877": 7.1,
    "184432": 7.1,
    "342": 8.7,
    "462649": 7.7,
    "976636": 7.8,
    "1228236": 6.3,
    "47237": 7.9,
    "111543": 8.5,
    "437410": 8.2,
    "252667": 6.9,
    "770631": 6.8,
    "1721": 7.8,
    "833": 7.0,
    "1387021": 7.8,
    "590286": 7.2,
    "4368595": 6.7,
    "1381125": 8.2,
    "1402067": 6.4,
    "575613": 6.8,
    "842673": 6.2,
    "727913": 7.9,
    "15527": 6.1,
    "309": 7.9,
    "507": 8.0,
    "102474": 6.8,
    "444": 8.4,
    "933307": 8.0,
    "1245501": 7.1,
    "843463": 6.9,
    "5429853": 6.6,
    "104938": 8.3,
    "517988": 7.3,
    "930534": 7.1,
    "817969": 6.9,
    "507440": 7.0,
    "464484": 7.8,
    "63732": 6.7,
    "992500": 7.1,
    "468581": 7.3,
    "602373": 7.5,
    "6174": 7.1,
    "5437609": 7.0,
    "94225": 7.8,
    "462240": 6.5,
    "655435": 7.0,
    "467972": 6.9,
    "607737": 7.3,
    "484878": 7.7,
    "6303": 7.9,
    "839823": 7.2,
    "1379512": 6.7,
    "10355286": 7.0,
    "4541542": 6.7,
    "5599850": 5.4,
    "5001443": 6.8,
    "930000": 6.7,
    "999563": 6.9,
    "893245": 7.6,
    "503853": 7.0,
    "725190": 8.4,
    "409372": 7.6,
    "870": 7.6,
    "5273": 8.0,
    "4484": 7.8,
    "6589797": 6.1,
    "14346": 7.3,
    "81522": 7.6
};

// ===== АКТЁРЫ (из actors.json) =====
const actorsById = {
  "1071384": [
    { "name": "Джессика Барден", "role": "Alyssa" },
    { "name": "Алекс Лоутер", "role": "James" },
    { "name": "Стив Орам", "role": "Phil" },
    { "name": "Кристин Боттомли", "role": "Gwen" },
    { "name": "Наоми Аки", "role": "Bonnie" },
    { "name": "Джонатан Арис", "role": "Professor Clive Koch" },
    { "name": "Вунми Мосаку", "role": "DC Teri Darego" },
    { "name": "Джемма Уилан", "role": "DC Eunice Noon" },
    { "name": "Джош Дилан", "role": "Todd" },
    { "name": "Навин Чоудхри", "role": "Tony" }
  ],
  "1103803": [
    { "name": "Кеннет Брана", "role": "Hercule Poirot" },
    { "name": "Галь Гадот", "role": "Linnet Ridgeway" },
    { "name": "Арми Хаммер", "role": "Simon Doyle" },
    { "name": "Эмма Маки", "role": "Jacqueline de Bellefort" },
    { "name": "Летиша Райт", "role": "Rosalie Otterbourne" },
    { "name": "Софи Оконедо", "role": "Salome Otterbourne" },
    { "name": "Том Бейтман", "role": "Bouc" },
    { "name": "Аннетт Бенинг", "role": "Euphemia Bouc" },
    { "name": "Роуз Лесли", "role": "Louise Bourget" },
    { "name": "Майкл Раус", "role": "Private Laurin" }
  ],
  "4445150": [
    { "name": "Хейли Стайнфелд", "role": "Vi, озвучка" },
    { "name": "Кевин Алехандро", "role": "Jayce / Workshop Owner" },
    { "name": "Джейсон Спайсэк", "role": "Silco / Pim" },
    { "name": "Токс Олагундойе", "role": "Mel Medarda / Mel" },
    { "name": "Джейби Бланк", "role": "Vander / Warwick / Bolbok" },
    { "name": "Гарри Ллойд", "role": "Viktor" },
    { "name": "Миа Синклер Дженнесс", "role": "Powder" },
    { "name": "Артур Ортис", "role": "дополнительные голоса" },
    { "name": "Элла Пернелл", "role": "Jinx / Older Powder" },
    { "name": "Кэти Льюнг", "role": "Caitlyn" }
  ],
  "1032606": [
    { "name": "Луис Хофман", "role": "Jonas Kahnwald" },
    { "name": "Каролина Эйхгорн", "role": "Charlotte Doppler / Adult Charlotte Doppler" },
    { "name": "Лиза Викари", "role": "Martha Nielsen" },
    { "name": "Майя Шёне", "role": "Hannah Kahnwald / Adult Hannah Kahnwald" },
    { "name": "Йёрдис Трибель", "role": "Katharina Nielsen / Adult Katharina Nielsen" },
    { "name": "Штефан Кампвирт", "role": "Peter Doppler / Adult Peter Doppler" },
    { "name": "Андреас Пичман", "role": "The Stranger / Stranger" },
    { "name": "Пауль Лукс", "role": "Bartosz Tiedemann / Young Bartosz Tiedemann" },
    { "name": "Кристиан Хатчерсон", "role": "Magnus Nielson" },
    { "name": "Мориц Ян", "role": "Magnus Nielsen / Young Magnus Nielsen" }
  ],
  "8124": [
    { "name": "Маколей Калкин", "role": "Kevin McCallister" },
    { "name": "Джо Пеши", "role": "Harry" },
    { "name": "Дэниел Стерн", "role": "Marv" },
    { "name": "Кэтрин О’Хара", "role": "Kate McCallister" },
    { "name": "Джон Хёрд", "role": "Peter McCallister" },
    { "name": "Робертс Блоссом", "role": "Marley" },
    { "name": "Джерри Бэммен", "role": "Uncle Frank McCallister" },
    { "name": "Девин Рэтрей", "role": "Buzz McCallister" },
    { "name": "Джон Кэнди", "role": "Gus Polinski" },
    { "name": "Киран Калкин", "role": "Fuller McCallister" }
  ],
  "104901": [
    { "name": "Тимоти Олифант", "role": "Agent 47" },
    { "name": "Дюгрей Скотт", "role": "Mike Whittier" },
    { "name": "Ольга Куриленко", "role": "Nika Boronina" },
    { "name": "Роберт Неппер", "role": "Yuri Marklov" },
    { "name": "Ульрих Томсен", "role": "Mikhail Belicoff" },
    { "name": "Генри Иэн Кьюсик", "role": "Udre Belicoff" },
    { "name": "Михаэль Оффей", "role": "Jenkins" },
    { "name": "Кристиан Эриксон", "role": "General Kormarov" },
    { "name": "Эрик Эбуане", "role": "Bwana Ovie" },
    { "name": "Джо Шеридан", "role": "Captain Gudnayev" }
  ],
  "5558": [
    { "name": "Мэтт Дэймон", "role": "Tom Ripley" },
    { "name": "Джуд Лоу", "role": "Dickie Greenleaf" },
    { "name": "Гвинет Пэлтроу", "role": "Marge Sherwood" },
    { "name": "Филип Сеймур Хоффман", "role": "Freddie Miles" },
    { "name": "Кейт Бланшетт", "role": "Meredith Logue" },
    { "name": "Джек Девенпорт", "role": "Peter Smith-Kingsley" },
    { "name": "Джеймс Ребхорн", "role": "Herbert Greenleaf" },
    { "name": "Серджо Рубини", "role": "Inspector Roverini" },
    { "name": "Филип Бейкер Холл", "role": "Alvin MacCarron" },
    { "name": "Селия Уэстон", "role": "Aunt Joan" }
  ],
  "1012421": [
    { "name": "Джессика Рот", "role": "Tree Gelbman" },
    { "name": "Израэль Бруссар", "role": "Carter Davis" },
    { "name": "Руби Модин", "role": "Lori Spengler" },
    { "name": "Чарльз Эйткин", "role": "Gregory Butler" },
    { "name": "Лаура Клифтон", "role": "Stephanie Butler" },
    { "name": "Джейсон Бэйл", "role": "David Gelbman" },
    { "name": "Роб Мелло", "role": "John Tombs" },
    { "name": "Рэйчел Мэттьюз", "role": "Danielle Bouseman" },
    { "name": "Рэмси Андерсон", "role": "Keith Lumbly" },
    { "name": "Брэйди Льюис", "role": "Frat Brother" }
  ],
  "841681": [
    { "name": "Нацуки Ханаэ", "role": "Kaneki Ken, озвучка" },
    { "name": "Сора Амамия", "role": "Kirishima, Touka, озвучка" },
    { "name": "Синтаро Асанума", "role": "Nishiki Nishio, озвучка" },
    { "name": "Мамору Мияно", "role": "Shuu Tsukiyama, озвучка" },
    { "name": "Трина Нисимура", "role": "Misato Gori, озвучка" },
    { "name": "Сумирэ Морохоси", "role": "Hinami Fueguchi, озвучка" },
    { "name": "Такахиро Сакурай", "role": "Uta, озвучка" },
    { "name": "Риэ Кугимия", "role": "Suzuya Juuzou, озвучка" },
    { "name": "Рэина Уэда", "role": "Taguchi (Nurse), озвучка" },
    { "name": "Кана Ханадзава", "role": "Rize Kamishiro, озвучка" }
  ],
  "707483": [
    { "name": "Эрик Бана", "role": "Sarchie" },
    { "name": "Эдгар Рамирес", "role": "Mendoza" },
    { "name": "Оливия Манн", "role": "Jen" },
    { "name": "Крис Кой", "role": "Jimmy" },
    { "name": "Дориан Миссик", "role": "Gordon" },
    { "name": "Шон Харрис", "role": "Santino" },
    { "name": "Джоэл Макхэйл", "role": "Butler" },
    { "name": "Майк Хьюстон", "role": "Nadler" },
    { "name": "Лулу Уилсон", "role": "Christina" },
    { "name": "Оливия Хортон", "role": "Jane" }
  ],
  "689": [
    { "name": "Дэниэл Рэдклифф", "role": "Harry Potter" },
    { "name": "Руперт Гринт", "role": "Ron Weasley" },
    { "name": "Эмма Уотсон", "role": "Hermione Granger" },
    { "name": "Ричард Харрис", "role": "Albus Dumbledore" },
    { "name": "Алан Рикман", "role": "Professor Snape" },
    { "name": "Мэгги Смит", "role": "Professor McGonagall" },
    { "name": "Робби Колтрейн", "role": "Hagrid" },
    { "name": "Том Фелтон", "role": "Draco Malfoy" },
    { "name": "Мэттью Льюис", "role": "Neville Longbottom" },
    { "name": "Иэн Харт", "role": "Professor Quirrell" }
  ],
  "688": [
    { "name": "Дэниэл Рэдклифф", "role": "Harry Potter" },
    { "name": "Руперт Гринт", "role": "Ron Weasley" },
    { "name": "Эмма Уотсон", "role": "Hermione Granger" },
    { "name": "Том Фелтон", "role": "Draco Malfoy" },
    { "name": "Кеннет Брана", "role": "Gilderoy Lockhart" },
    { "name": "Бонни Райт", "role": "Ginny Weasley" },
    { "name": "Алан Рикман", "role": "Professor Snape" },
    { "name": "Ричард Харрис", "role": "Albus Dumbledore" },
    { "name": "Мэгги Смит", "role": "Professor McGonagall (в титрах: Dame Maggie Smith)" },
    { "name": "Робби Колтрейн", "role": "Hagrid The Giant" }
  ],
  "322": [
    { "name": "Дэниэл Рэдклифф", "role": "Harry Potter" },
    { "name": "Руперт Гринт", "role": "Ron Weasley" },
    { "name": "Эмма Уотсон", "role": "Hermione Granger" },
    { "name": "Дэвид Тьюлис", "role": "Professor Lupin" },
    { "name": "Робби Колтрейн", "role": "Rubeus Hagrid" },
    { "name": "Гари Олдман", "role": "Sirius Black" },
    { "name": "Майкл Гэмбон", "role": "Albus Dumbledore" },
    { "name": "Алан Рикман", "role": "Professor Severus Snape" },
    { "name": "Том Фелтон", "role": "Draco Malfoy" },
    { "name": "Тимоти Сполл", "role": "Peter Pettigrew" }
  ],
  "8408": [
    { "name": "Дэниэл Рэдклифф", "role": "Harry Potter" },
    { "name": "Руперт Гринт", "role": "Ron Weasley" },
    { "name": "Эмма Уотсон", "role": "Hermione Granger" },
    { "name": "Брендан Глисон", "role": "Alastor «MadEye» Moody" },
    { "name": "Алан Рикман", "role": "Severus Snape" },
    { "name": "Майкл Гэмбон", "role": "Albus Dumbledore" },
    { "name": "Рэйф Файнс", "role": "Lord Voldemort" },
    { "name": "Роберт Паттинсон", "role": "Cedric Diggory" },
    { "name": "Робби Колтрейн", "role": "Rubeus Hagrid" },
    { "name": "Мэгги Смит", "role": "Minerva McGonagall" }
  ],
  "48356": [
    { "name": "Дэниэл Рэдклифф", "role": "Harry Potter" },
    { "name": "Руперт Гринт", "role": "Ron Weasley" },
    { "name": "Эмма Уотсон", "role": "Hermione Granger" },
    { "name": "Гари Олдман", "role": "Sirius Black" },
    { "name": "Рэйф Файнс", "role": "Lord Voldemort" },
    { "name": "Майкл Гэмбон", "role": "Albus Dumbledore" },
    { "name": "Том Фелтон", "role": "Draco Malfoy" },
    { "name": "Имелда Стонтон", "role": "Dolores Umbridge" },
    { "name": "Эванна Линч", "role": "Luna Lovegood" },
    { "name": "Алан Рикман", "role": "Severus Snape" }
  ],
  "89515": [
    { "name": "Дэниэл Рэдклифф", "role": "Harry Potter" },
    { "name": "Руперт Гринт", "role": "Ron Weasley" },
    { "name": "Эмма Уотсон", "role": "Hermione Granger" },
    { "name": "Майкл Гэмбон", "role": "Professor Albus Dumbledore" },
    { "name": "Джим Бродбент", "role": "Professor Horace Slughorn" },
    { "name": "Бонни Райт", "role": "Ginny Weasley" },
    { "name": "Хелена Бонем Картер", "role": "Bellatrix Lestrange" },
    { "name": "Алан Рикман", "role": "Professor Severus Snape" },
    { "name": "Том Фелтон", "role": "Draco Malfoy" },
    { "name": "Эванна Линч", "role": "Luna Lovegood" }
  ],
  "276762": [
    { "name": "Дэниэл Рэдклифф", "role": "Harry Potter" },
    { "name": "Руперт Гринт", "role": "Ron Weasley" },
    { "name": "Эмма Уотсон", "role": "Hermione Granger" },
    { "name": "Том Фелтон", "role": "Draco Malfoy" },
    { "name": "Бонни Райт", "role": "Ginny Weasley" },
    { "name": "Алан Рикман", "role": "Professor Severus Snape" },
    { "name": "Рэйф Файнс", "role": "Lord Voldemort" },
    { "name": "Хелена Бонем Картер", "role": "Bellatrix Lestrange" },
    { "name": "Майкл Гэмбон", "role": "Professor Albus Dumbledore" },
    { "name": "Брендан Глисон", "role": "Alastor «Mad-Eye» Moody" }
  ],
  "407636": [
    { "name": "Дэниэл Рэдклифф", "role": "Harry Potter" },
    { "name": "Руперт Гринт", "role": "Ron Weasley" },
    { "name": "Эмма Уотсон", "role": "Hermione Granger" },
    { "name": "Хелена Бонем Картер", "role": "Bellatrix Lestrange" },
    { "name": "Робби Колтрейн", "role": "Rubeus Hagrid" },
    { "name": "Уорвик Дэвис", "role": "Griphook / Professor Filius Flitwick" },
    { "name": "Рэйф Файнс", "role": "Lord Voldemort" },
    { "name": "Майкл Гэмбон", "role": "Professor Albus Dumbledore" },
    { "name": "Джон Хёрт", "role": "Ollivander" },
    { "name": "Джейсон Айзекс", "role": "Lucius Malfoy" }
  ],
  "4686248": [
    { "name": "Такуя Эгути", "role": "Loid Forger / Twilight, озвучка" },
    { "name": "Саори Хаями", "role": "Yor Forger / Thorn Princess, озвучка" },
    { "name": "Ацуми Танэдзаки", "role": "Anya Forger, озвучка" },
    { "name": "Хана Сато", "role": "Emile Elman / Tailor Shop Clerk / Eden Academy Examinee / Forgers' Neighbor (Neighbour 2) / Eden Academy Gutter Student / Wife of Colonel Zacharis, озвучка" },
    { "name": "Хироки Гото", "role": "Brennan / Eden Academy Teacher / Orphanage Owner / Bondman Anime Narrator / WISE Officer / Jack Glooman (George's Father, George no Chichi) / WISE Agency Member, озвучка" },
    { "name": "Эмико Такэути", "role": "Tailor Shop Proprietress / Eden Academy Student / Class 4 Student / Nurse / Forgers' Neighbor (Neighbour 1) / Eden Academy Applicant, озвучка" },
    { "name": "Таисукэ Накано", "role": "Bondman / Babol (Bobol, Bobble), озвучка" },
    { "name": "Мирэи Кумагаи", "role": "Yuri Briar (child) / Sharon / Class 4 Student / Eden Academy Student / Adoption Fair Staff / Animal Shelter Staff, озвучка" },
    { "name": "Кацунори Окаи", "role": "WISE Staff / Brennan's Man in Black / Eden Academy Teachers / Enemy Organization Agent / Politician's Audience / Becky's Driver / Jeebs (Jeeves) / Announcer / Colonel Erik Zacharis / Doctor / Project Apple Researcher / State Security Service Agent (National Security Officer), озвучка" },
    { "name": "Масафуми Кобатакэ", "role": "Central Bank CEO / Edgar's Subordinates / Section Chief Burns / Pool Instructor B / Art Smuggler / Politician's Audience / Waiter / Kurt / Barkeep (Barmaster) / Bartender / Doctor / Doorkeeper / National Security Officer (State Security Service Officer) / Project Apple Researcher / Tennis Club Member (Campbelldon Guest) / Eden Academy Security Guard, озвучка" }
  ],
  "1164520": [
    { "name": "Джерард Батлер", "role": "John Garrity" },
    { "name": "Морена Баккарин", "role": "Allison Garrity" },
    { "name": "Дэвид Денман", "role": "Ralph Vento" },
    { "name": "Хоуп Дэвис", "role": "Judy Vento" },
    { "name": "Роджер Дэйл Флойд", "role": "Nathan Garrity" },
    { "name": "Эндрю Бэчелор", "role": "Colin (в титрах: Andrew Byron Bachelor)" },
    { "name": "Меррин Данги", "role": "Major Breen" },
    { "name": "Холт Маккэллани", "role": "Twin Otter Pilot" },
    { "name": "Скотт Гленн", "role": "Dale" },
    { "name": "Рендал Гонсалес", "role": "Bobby" }
  ],
  "817167": [
    { "name": "Джейк Джилленхол", "role": "Dalton" },
    { "name": "Даниэла Мелшиор", "role": "Ellie" },
    { "name": "Билли Магнуссен", "role": "Ben Brandt" },
    { "name": "Конор Макгрегор", "role": "Knox" },
    { "name": "Гбемисола Икумело", "role": "—" },
    { "name": "Джессика Уильямс", "role": "Frankie" },
    { "name": "Жоакин де Алмейда", "role": "Sheriff" },
    { "name": "Б.К. Кэннон", "role": "Laura" },
    { "name": "Лукас Гейдж", "role": "Billy" },
    { "name": "Дж.Д. Пардо", "role": "Dell" }
  ],
  "938643": [
    { "name": "Дженнифер Лоуренс", "role": "Mother" },
    { "name": "Хавьер Бардем", "role": "Him" },
    { "name": "Эд Харрис", "role": "Man" },
    { "name": "Мишель Пфайффер", "role": "Woman" },
    { "name": "Донал Глисон", "role": "Oldest Son" },
    { "name": "Брин Глисон", "role": "Younger Brother" },
    { "name": "Кристен Уиг", "role": "Herald" },
    { "name": "Джован Адепо", "role": "Cupbearer" },
    { "name": "Аманда Чиу", "role": "Damsel" },
    { "name": "Патриша Саммерсетт", "role": "Consoler" }
  ],
  "823616": [
    { "name": "Том Хэнкс", "role": "Finch" },
    { "name": "Donat Balaj", "role": "Joe" },
    { "name": "Калеб Лэндри Джонс", "role": "Jeff" },
    { "name": "Скит Ульрих", "role": "Sam" },
    { "name": "Шеймус", "role": "Goodyear" },
    { "name": "Мари Уэйдженман", "role": "Daughter (Flashback)" },
    { "name": "Самира Уайли", "role": "—" },
    { "name": "Лора Каннингэм", "role": "Mother (Flashback) (в титрах: Lora Cunningham)" },
    { "name": "Christopher Farrar", "role": "Jimmy" },
    { "name": "Алексис Рабен", "role": "Ina" }
  ],
  "409600": [
    { "name": "Бенедикт Камбербэтч", "role": "Dr. Stephen Strange" },
    { "name": "Тильда Суинтон", "role": "The Ancient One" },
    { "name": "Мадс Миккельсен", "role": "Kaecilius" },
    { "name": "Чиветель Эджиофор", "role": "Mordo" },
    { "name": "Рэйчел Макадамс", "role": "Dr. Christine Palmer" },
    { "name": "Бенедикт Вонг", "role": "Wong" },
    { "name": "Майкл Стулбарг", "role": "Dr. Nicodemus West" },
    { "name": "Бенджамин Брэтт", "role": "Jonathan Pangborn" },
    { "name": "Скотт Эдкинс", "role": "Lucian / Strong Zealot" },
    { "name": "Зара Питиан", "role": "Brunette Zealot" }
  ],
  "5304403": [
    { "name": "Леон Кемстач", "role": "Андрей Васильев / Пальто" },
    { "name": "Рузиль Минекаев", "role": "Марат Суворов / Адидас-младший" },
    { "name": "Иван Янковский", "role": "Вова Суворов / Адидас" },
    { "name": "Анастасия Красовская", "role": "Ирина Сергеевна" },
    { "name": "Юлия Александрова", "role": "Светлана Михайловна, мама Андрея" },
    { "name": "Слава Копейкин", "role": "Валера Туркин / Турбо" },
    { "name": "Лев Зулькарнаев", "role": "Вахит Зималетдинов / Зима" },
    { "name": "Никита Кологривый", "role": "Кащей" },
    { "name": "Сергей Бурунов", "role": "Кирилл Суворов" },
    { "name": "Антон Васильев", "role": "Ильдар Юнусович" }
  ],
  "1188248": [
    { "name": "Юра Борисов", "role": "Калашников" },
    { "name": "Ольга Лерман", "role": "Катя" },
    { "name": "Артур Смольянинов", "role": "инженер капитан Лютый" },
    { "name": "Эльдар Калимулин", "role": "Зайцев" },
    { "name": "Виталий Хаев", "role": "генерал-майор Курбаткин" },
    { "name": "Валерий Баринов", "role": "генерал-майор Дегтярев" },
    { "name": "Анатолий Лобоцкий", "role": "полковник Глухов" },
    { "name": "Алексей Вертков", "role": "капитан госбезопасности Лобов" },
    { "name": "Дмитрий Богдан", "role": "инженер-майор Судаев" },
    { "name": "Максим Битюков", "role": "Казаков" }
  ],
  "4414587": [
    { "name": "Генри Кавилл", "role": "Gus March-Phillips" },
    { "name": "Алан Ричсон", "role": "Anders Lassen" },
    { "name": "Рори Киннер", "role": "Churchill" },
    { "name": "Генри Голдинг", "role": "Freddy Alvarez" },
    { "name": "Фредди Фокс", "role": "Ian Fleming" },
    { "name": "Эйса Гонсалес", "role": "Marjorie Stewart" },
    { "name": "Алекс Петтифер", "role": "Geoffrey Appleyard" },
    { "name": "Хиро Файнс Тиффин", "role": "Henry Hayes" },
    { "name": "Тиль Швайгер", "role": "Heinrich Luhr" },
    { "name": "Кэри Элвес", "role": "Brigadier Gubbins «M»" }
  ],
  "258687": [
    { "name": "Мэттью Макконахи", "role": "Cooper" },
    { "name": "Энн Хэтэуэй", "role": "Brand" },
    { "name": "Джессика Честейн", "role": "Murph" },
    { "name": "Маккензи Фой", "role": "Murph" },
    { "name": "Майкл Кейн", "role": "Professor Brand" },
    { "name": "Дэвид Джеси", "role": "Romilly" },
    { "name": "Уэс Бентли", "role": "Doyle" },
    { "name": "Кейси Аффлек", "role": "Tom" },
    { "name": "Джон Литгоу", "role": "Donald" },
    { "name": "Мэтт Дэймон", "role": "Mann" }
  ],
  "361": [
    { "name": "Эдвард Нортон", "role": "рассказчик" },
    { "name": "Брэд Питт", "role": "Tyler Durden" },
    { "name": "Хелена Бонем Картер", "role": "Marla Singer" },
    { "name": "Мит Лоаф", "role": "Robert Paulsen (в титрах: Meat Loaf Aday)" },
    { "name": "Зэк Гренье", "role": "Richard Chesler (Regional Manager)" },
    { "name": "Холт Маккэллани", "role": "The Mechanic" },
    { "name": "Джаред Лето", "role": "Angel Face" },
    { "name": "Эйон Бэйли", "role": "Ricky" },
    { "name": "Ричмонд Аркетт", "role": "Intern at Hospital" },
    { "name": "Дэвид Эндрюс", "role": "Thomas at Remaining Men Together" }
  ],
  "588": [
    { "name": "Кристиан Бэйл", "role": "Patrick Bateman" },
    { "name": "Уиллем Дефо", "role": "Donald Kimball" },
    { "name": "Джош Лукас", "role": "Craig McDermott" },
    { "name": "Риз Уизерспун", "role": "Evelyn Williams" },
    { "name": "Кэра Сеймур", "role": "Christie" },
    { "name": "Джастин Теру", "role": "Timothy Bryce" },
    { "name": "Джаред Лето", "role": "Paul Allen" },
    { "name": "Хлоя Севиньи", "role": "Jean" },
    { "name": "Саманта Мэтис", "role": "Courtney Rawlinson" },
    { "name": "Мэтт Росс", "role": "Luis Carruthers" }
  ],
  "462682": [
    { "name": "Леонардо ДиКаприо", "role": "Jordan Belfort" },
    { "name": "Джона Хилл", "role": "Donnie Azoff" },
    { "name": "Марго Робби", "role": "Naomi Lapaglia" },
    { "name": "Кайл Чендлер", "role": "Agent Patrick Denham" },
    { "name": "Роб Райнер", "role": "Max Belfort" },
    { "name": "П.Дж. Бирн", "role": "Nicky Koskoff ('Rugrat')" },
    { "name": "Джон Бернтал", "role": "Brad" },
    { "name": "Кристин Милиоти", "role": "Teresa Petrillo" },
    { "name": "Жан Дюжарден", "role": "Jean Jacques Saurel" },
    { "name": "Мэттью Макконахи", "role": "Mark Hanna" }
  ],
  "47018": [
    { "name": "Брайс Даллас Ховард", "role": "Ivy Walker" },
    { "name": "Хоакин Феникс", "role": "Lucius Hunt" },
    { "name": "Эдриан Броуди", "role": "Noah Percy" },
    { "name": "Уильям Хёрт", "role": "Edward Walker" },
    { "name": "Сигурни Уивер", "role": "Alice Hunt" },
    { "name": "Брендан Глисон", "role": "August Nicholson" },
    { "name": "Черри Джонс", "role": "Mrs. Clack" },
    { "name": "Селия Уэстон", "role": "Vivian Percy" },
    { "name": "Джон Кристофер Джонс", "role": "Robert Percy" },
    { "name": "Фрэнк Коллисон", "role": "Victor" }
  ],
  "410": [
    { "name": "Джейк Джилленхол", "role": "Donnie Darko" },
    { "name": "Джена Мэлоун", "role": "Gretchen Ross" },
    { "name": "Мэгги Джилленхол", "role": "Elizabeth Darko" },
    { "name": "Мэри Макдоннелл", "role": "Rose Darko" },
    { "name": "Холмс Осборн", "role": "Eddie Darko" },
    { "name": "Патрик Суэйзи", "role": "Jim Cunningham" },
    { "name": "Ноа Уайли", "role": "Prof. Kenneth Monnitoff" },
    { "name": "Дрю Бэрримор", "role": "Karen Pomeroy" },
    { "name": "Джеймс Дювал", "role": "Frank" },
    { "name": "Кэтрин Росс", "role": "Dr. Lilian Thurman" }
  ],
  "5167": [
    { "name": "Эштон Кутчер", "role": "Evan" },
    { "name": "Эми Смарт", "role": "Kayleigh" },
    { "name": "Элден Хенсон", "role": "Lenny" },
    { "name": "Уильям Ли Скотт", "role": "Tommy" },
    { "name": "Джон Патрик Амедори", "role": "Evan at 13" },
    { "name": "Кевин Шмидт", "role": "Lenny at 13" },
    { "name": "Ирина Горовая", "role": "Kayleigh at 13 (в титрах: Irene Gorovaia)" },
    { "name": "Джесси Джеймс", "role": "Tommy at 13" },
    { "name": "Мелора Уолтерс", "role": "Andrea" },
    { "name": "Эрик Столц", "role": "Mr. Miller" }
  ],
  "328": [
    { "name": "Элайджа Вуд", "role": "Frodo" },
    { "name": "Иэн Маккеллен", "role": "Gandalf" },
    { "name": "Шон Эстин", "role": "Sam" },
    { "name": "Вигго Мортенсен", "role": "Aragorn" },
    { "name": "Билли Бойд", "role": "Pippin" },
    { "name": "Доминик Монахэн", "role": "Merry" },
    { "name": "Джон Рис-Дэвис", "role": "Gimli" },
    { "name": "Орландо Блум", "role": "Legolas" },
    { "name": "Шон Бин", "role": "Boromir" },
    { "name": "Иэн Холм", "role": "Bilbo" }
  ],
  "839954": [
    { "name": "Том Харди", "role": "Reggie Kray / Ron Kray" },
    { "name": "Эмили Браунинг", "role": "Frances Shea" },
    { "name": "Дэвид Тьюлис", "role": "Leslie Payne" },
    { "name": "Даффи", "role": "Timi Yuro" },
    { "name": "Кристофер Экклстон", "role": "Nipper Read" },
    { "name": "Чазз Пальминтери", "role": "Angelo Bruno" },
    { "name": "Пол Андерсон", "role": "Albert Donoghue" },
    { "name": "Джошуа Хилл", "role": "Constable Scott" },
    { "name": "Колин Морган", "role": "Frank Shea" },
    { "name": "Тара Фитцджеральд", "role": "Mrs Shea" }
  ],
  "3561": [
    { "name": "Райан Гослинг", "role": "Noah" },
    { "name": "Рэйчел Макадамс", "role": "Allie" },
    { "name": "Джеймс Гарнер", "role": "Duke" },
    { "name": "Джина Роулендс", "role": "Allie Calhoun" },
    { "name": "Сэм Шепард", "role": "Frank Calhoun" },
    { "name": "Джоан Аллен", "role": "Anne Hamilton" },
    { "name": "Дэвид Торнтон", "role": "John Hamilton" },
    { "name": "Джеймс Марсден", "role": "Lon Hammond" },
    { "name": "Кевин Коннолли", "role": "Fin" },
    { "name": "Тим Айви", "role": "Rower" }
  ],
  "5059": [
    { "name": "Брэд Питт", "role": "Joe Black / Young Man in Coffee Shop" },
    { "name": "Энтони Хопкинс", "role": "William Parrish" },
    { "name": "Клэр Форлани", "role": "Susan Parrish" },
    { "name": "Джейк Уэбер", "role": "Drew" },
    { "name": "Марша Гэй Харден", "role": "Allison" },
    { "name": "Джеффри Тэмбор", "role": "Quince" },
    { "name": "Дэвид С. Ховард", "role": "Eddie Sloane" },
    { "name": "Луис Келли-Миллер", "role": "Jamaican Woman" },
    { "name": "Мэрилуиз Бёрк", "role": "Lillian" },
    { "name": "Джун Скуибб", "role": "Helen" }
  ],
  "1047883": [
    { "name": "Леонардо ДиКаприо", "role": "Rick Dalton" },
    { "name": "Брэд Питт", "role": "Cliff Booth" },
    { "name": "Марго Робби", "role": "Sharon Tate" },
    { "name": "Эмиль Хирш", "role": "Jay Sebring" },
    { "name": "Маргарет Куолли", "role": "Pussycat" },
    { "name": "Тимоти Олифант", "role": "James Stacy" },
    { "name": "Джулия Баттерз", "role": "Trudi Fraser" },
    { "name": "Остин Батлер", "role": "Tex Watson" },
    { "name": "Дакота Фаннинг", "role": "Squeaky Fromme" },
    { "name": "Брюс Дерн", "role": "George Spahn" }
  ],
  "5930": [
    { "name": "Билл Мюррей", "role": "Bob Harris" },
    { "name": "Скарлетт Йоханссон", "role": "Charlotte" },
    { "name": "Джованни Рибизи", "role": "John" },
    { "name": "Анна Фэрис", "role": "Kelly" },
    { "name": "Акико Такэсита", "role": "Ms. Kawasaki" },
    { "name": "Кадзуёси Минамимагоэ", "role": "Press Agent" },
    { "name": "Кадзуко Сибата", "role": "Press Agent" },
    { "name": "Такэ", "role": "Press Agent" },
    { "name": "Рюитиро Баба", "role": "Concierge" },
    { "name": "Акира Ямагути", "role": "Bellboy" }
  ],
  "277328": [
    { "name": "Трэвис Фиммел", "role": "Anduin Lothar" },
    { "name": "Пола Пэттон", "role": "Garona" },
    { "name": "Бен Фостер", "role": "Medivh" },
    { "name": "Доминик Купер", "role": "Llane Wrynn" },
    { "name": "Тоби Кеббелл", "role": "Durotan / Antonidas" },
    { "name": "Бен Шнетцер", "role": "Khadgar" },
    { "name": "Роберт Казински", "role": "Orgrim" },
    { "name": "Клэнси Браун", "role": "Blackhand" },
    { "name": "Дэниэл У", "role": "Gul'dan" },
    { "name": "Рут Негга", "role": "Lady Taria" }
  ],
  "78871": [
    { "name": "Рада Митчелл", "role": "Rose Da Silva" },
    { "name": "Джоделль Ферланд", "role": "Sharon / Alessa" },
    { "name": "Лори Холден", "role": "Cybil Bennett" },
    { "name": "Шон Бин", "role": "Christopher Da Silva" },
    { "name": "Дебора Кара Ангер", "role": "Dahlia Gillespie" },
    { "name": "Ким Коутс", "role": "Officer Thomas Gucci" },
    { "name": "Таня Аллен", "role": "Anna" },
    { "name": "Элис Криге", "role": "Christabella" },
    { "name": "Коллин Уильямс", "role": "Archivist" },
    { "name": "Рон Гэбриел", "role": "Old Mechanic" }
  ],
  "397667": [
    { "name": "Леонардо ДиКаприо", "role": "Teddy Daniels" },
    { "name": "Марк Руффало", "role": "Chuck Aule" },
    { "name": "Бен Кингсли", "role": "Dr. Cawley" },
    { "name": "Макс фон Сюдов", "role": "Dr. Naehring" },
    { "name": "Мишель Уильямс", "role": "Dolores" },
    { "name": "Эмили Мортимер", "role": "Rachel 1" },
    { "name": "Патриша Кларксон", "role": "Rachel 2" },
    { "name": "Джеки Эрл Хейли", "role": "George Noyce" },
    { "name": "Тед Левайн", "role": "Warden" },
    { "name": "Джон Кэрролл Линч", "role": "Deputy Warden McPherson" }
  ],
  "102128": [
    { "name": "Рэйчел Макадамс", "role": "Clare" },
    { "name": "Эрик Бана", "role": "Henry" },
    { "name": "Арлисс Ховард", "role": "Richard DeTamble" },
    { "name": "Рон Ливингстон", "role": "Gomez" },
    { "name": "Стивен Тоболовски", "role": "Dr. Kendrick" },
    { "name": "Мишель Нолден", "role": "Annette DeTamble" },
    { "name": "Джейн МакЛин", "role": "Charisse (в титрах: Jane McLean)" },
    { "name": "Хейли МакКанн", "role": "Alba at Nine and Ten" },
    { "name": "Бруклин Пру", "role": "Clare at Six and Eight" },
    { "name": "Татум МакКанн", "role": "Alba at Four and Five" }
  ],
  "577488": [
    { "name": "Хоакин Феникс", "role": "Theodore" },
    { "name": "Скарлетт Йоханссон", "role": "Samantha, озвучка" },
    { "name": "Эми Адамс", "role": "Amy" },
    { "name": "Руни Мара", "role": "Catherine" },
    { "name": "Крис Пратт", "role": "Paul" },
    { "name": "Оливия Уайлд", "role": "Blind Date" },
    { "name": "Мэтт Летчер", "role": "Charles" },
    { "name": "Кристен Уиг", "role": "SexyKitten, озвучка" },
    { "name": "Порша Даблдэй", "role": "Surrogate Date Isabella" },
    { "name": "Лаура Кай Чен", "role": "Tatiana" }
  ],
  "195434": [
    { "name": "Томми Ли Джонс", "role": "Ed Tom Bell" },
    { "name": "Джош Бролин", "role": "Llewelyn Moss" },
    { "name": "Хавьер Бардем", "role": "Anton Chigurh" },
    { "name": "Келли Макдоналд", "role": "Carla Jean Moss" },
    { "name": "Вуди Харрельсон", "role": "Carson Wells" },
    { "name": "Бет Грант", "role": "Carla Jean's Mother" },
    { "name": "Гаррет Диллахант", "role": "Wendell" },
    { "name": "Тесс Харпер", "role": "Loretta Bell" },
    { "name": "Барри Корбин", "role": "Ellis" },
    { "name": "Стивен Рут", "role": "Man Who Hires Wells" }
  ],
  "4476885": [
    { "name": "Хэролд Перрино", "role": "Boyd Stevens" },
    { "name": "Каталина Сандино Морено", "role": "Tabitha Matthews" },
    { "name": "Эйон Бэйли", "role": "Jim Matthews" },
    { "name": "Дэвид Алпей", "role": "Jade" },
    { "name": "Элизабет Сондерс", "role": "Donna" },
    { "name": "Скотт Маккорд", "role": "Victor" },
    { "name": "Рики Хе", "role": "Kenny" },
    { "name": "Хлоя Ван Ландшут", "role": "Kristi" },
    { "name": "Пега Гафури", "role": "Fatima" },
    { "name": "Кортен Мур", "role": "Ellis" }
  ],
  "5305583": [
    { "name": "Карина Разумовская", "role": "Светлана Незнамова" },
    { "name": "Александр Ильин мл.", "role": "Виктор Чужих" },
    { "name": "Анна Михалкова", "role": "Эльвира Бараева" },
    { "name": "Елизавета Ищенко", "role": "Кира" },
    { "name": "Семён Серзин", "role": "Андрей Тиль" },
    { "name": "Алексей Фатеев", "role": "Владислав Виниченко" },
    { "name": "Василиса Немцова", "role": "Вита Демченкова" },
    { "name": "Геннадий Смирнов", "role": "Игорь Друз" },
    { "name": "Елена Литвинова", "role": "Раиса Незнамова" },
    { "name": "Сергей Уманов", "role": "Юрий Незнамов" }
  ],
  "681831": [
    { "name": "Мэттью Макконахи", "role": "Detective Rust Cohle" },
    { "name": "Вуди Харрельсон", "role": "Detective Marty Hart" },
    { "name": "Мишель Монахэн", "role": "Maggie Hart" },
    { "name": "Колин Фаррелл", "role": "Detective Ray Velcoro" },
    { "name": "Рэйчел Макадамс", "role": "Detective Ani Bezzerides" },
    { "name": "Тейлор Китч", "role": "Officer Paul Woodrugh" },
    { "name": "Винс Вон", "role": "Frank Semyon" },
    { "name": "Махершала Али", "role": "Detective Wayne Hays" },
    { "name": "Стивен Дорфф", "role": "Detective Roland West" },
    { "name": "Джоди Фостер", "role": "Liz Danvers" }
  ],
  "824954": [
    { "name": "Дэвид Сандберг", "role": "Kung Fury" },
    { "name": "Йорма Такконе", "role": "Adolf Hitler" },
    { "name": "Стивен Чю", "role": "Dragon" },
    { "name": "Леопольд Нильссон", "role": "Hackerman" },
    { "name": "Андреас Калинг", "role": "Thor" },
    { "name": "Пер-Хенрик Арвидиус", "role": "Voice of Thor / Chief" },
    { "name": "Эрик Хёрнквист", "role": "Triceracop" },
    { "name": "Фрэнк Сэндерсон", "role": "Triceracop / Cobra / Dinomite, озвучка" },
    { "name": "Элени Янг", "role": "Barbarianna" },
    { "name": "Хелен Алсон", "role": "Katana" }
  ],
  "5401195": [
    { "name": "Ацуми Танэдзаки", "role": "Frieren, озвучка" },
    { "name": "Кана Итиносэ", "role": "Fern, озвучка" },
    { "name": "Ёдзи Уэда", "role": "Eisen, озвучка" },
    { "name": "Хироки Тоти", "role": "Heiter, озвучка" },
    { "name": "Нобухико Окамото", "role": "Himmel, озвучка" },
    { "name": "Тиаки Кобаяси", "role": "Stark, озвучка" },
    { "name": "Масафуми Кобатакэ", "role": "Guard, озвучка" },
    { "name": "Кэнто Сираиси", "role": "Attendee, озвучка" },
    { "name": "Ацуко Танака", "role": "Flamme, озвучка" },
    { "name": "Дзюнъити Сувабэ", "role": "Lügner, озвучка" }
  ],
  "963343": [
    { "name": "Мию Ирино", "role": "Shôya Ishida, озвучка" },
    { "name": "Саори Хаями", "role": "Shoko Nishimiya, озвучка" },
    { "name": "Аои Юки", "role": "Yuzuru Nishimiya, озвучка" },
    { "name": "Кэнсё Оно", "role": "Tomohiro Nagatsuka, озвучка" },
    { "name": "Юки Канэко", "role": "Naoka Ueno, озвучка" },
    { "name": "Юи Исикава", "role": "Miyoko Sahara, озвучка" },
    { "name": "Мэгуми Хан", "role": "Miki Kawai, озвучка" },
    { "name": "Тосиюки Тоёнага", "role": "Satoshi Mashiba, озвучка" },
    { "name": "Маю Мацуока", "role": "Young Shoya Ishida, озвучка" },
    { "name": "Сатико Кодзима", "role": "Young Kazuki Shimada, озвучка" }
  ],
  "4374": [
    { "name": "Джонни Депп", "role": "Jack Sparrow" },
    { "name": "Джеффри Раш", "role": "Barbossa" },
    { "name": "Орландо Блум", "role": "Will Turner" },
    { "name": "Кира Найтли", "role": "Elizabeth Swann" },
    { "name": "Джек Девенпорт", "role": "Norrington" },
    { "name": "Кевин Макнэлли", "role": "Joshamee Gibbs (в титрах: Kevin R. McNally)" },
    { "name": "Джонатан Прайс", "role": "Governor Weatherby Swann" },
    { "name": "Ли Аренберг", "role": "Pintel" },
    { "name": "Макензи Крук", "role": "Ragetti" },
    { "name": "Дэвид Бэйли", "role": "Cotton" }
  ],
  "63991": [
    { "name": "Джонни Депп", "role": "Jack Sparrow" },
    { "name": "Орландо Блум", "role": "Will Turner" },
    { "name": "Кира Найтли", "role": "Elizabeth Swann" },
    { "name": "Джек Девенпорт", "role": "Norrington" },
    { "name": "Билл Найи", "role": "Davy Jones" },
    { "name": "Стеллан Скарсгард", "role": "Bootstrap Bill" },
    { "name": "Кевин Макнэлли", "role": "Gibbs (в титрах: Kevin R. McNally)" },
    { "name": "Ли Аренберг", "role": "Pintel" },
    { "name": "Макензи Крук", "role": "Ragetti" },
    { "name": "Том Холландер", "role": "Cutler Beckett" }
  ],
  "2053": [
    { "name": "Деннис Куэйд", "role": "Jack Hall" },
    { "name": "Джейк Джилленхол", "role": "Sam Hall" },
    { "name": "Эмми Россам", "role": "Laura Chapman" },
    { "name": "Дэш Майок", "role": "Jason Evans" },
    { "name": "Джей О. Сэндерс", "role": "Frank Harris" },
    { "name": "Села Уорд", "role": "Dr. Lucy Hall" },
    { "name": "Иэн Холм", "role": "Terry Rapson" },
    { "name": "Кеннет Уэлш", "role": "Vice President Becker" },
    { "name": "Гленн Пламмер", "role": "Luther" },
    { "name": "Эдриан Лестер", "role": "Simon" }
  ],
  "401177": [
    { "name": "Кристен Стюарт", "role": "Bella Swan" },
    { "name": "Роберт Паттинсон", "role": "Edward Cullen" },
    { "name": "Билли Бёрк", "role": "Charlie Swan" },
    { "name": "Эшли Грин", "role": "Alice Cullen" },
    { "name": "Анна Кендрик", "role": "Jessica" },
    { "name": "Тейлор Лотнер", "role": "Jacob Black" },
    { "name": "Джексон Рэтбоун", "role": "Jasper" },
    { "name": "Питер Фачинелли", "role": "Dr. Carlisle Cullen" },
    { "name": "Рашель Лефевр", "role": "Victoria" },
    { "name": "Кэм Жиганде", "role": "James" }
  ],
  "762738": [
    { "name": "Киану Ривз", "role": "John Wick" },
    { "name": "Микаэл Нюквист", "role": "Viggo Tarasov" },
    { "name": "Алфи Аллен", "role": "Iosef Tarasov" },
    { "name": "Уиллем Дефо", "role": "Marcus" },
    { "name": "Дин Уинтерс", "role": "Avi" },
    { "name": "Эдрианн Палики", "role": "Ms. Perkins" },
    { "name": "Омер Барнеа", "role": "Gregori" },
    { "name": "Тоби Леонард Мур", "role": "Victor" },
    { "name": "Дэниэл Бернхард", "role": "Kirill" },
    { "name": "Бриджет Мойнэхэн", "role": "Helen" }
  ],
  "885658": [
    { "name": "Киану Ривз", "role": "John Wick" },
    { "name": "Риккардо Скамарчо", "role": "Santino D'Antonio" },
    { "name": "Иэн Макшейн", "role": "Winston" },
    { "name": "Руби Роуз", "role": "Ares" },
    { "name": "Коммон", "role": "Cassian" },
    { "name": "Клаудия Джерини", "role": "Gianna D'Antonio" },
    { "name": "Лэнс Реддик", "role": "Charon" },
    { "name": "Лоренс Фишбёрн", "role": "Bowery King" },
    { "name": "Тобиаш Сигал", "role": "Earl" },
    { "name": "Джон Легуизамо", "role": "Aurelio" }
  ],
  "1009536": [
    { "name": "Киану Ривз", "role": "John Wick" },
    { "name": "Холли Берри", "role": "Sofia" },
    { "name": "Иэн Макшейн", "role": "Winston" },
    { "name": "Лоренс Фишбёрн", "role": "Bowery King" },
    { "name": "Марк Дакаскос", "role": "Zero" },
    { "name": "Азия Кейт Диллон", "role": "The Adjudicator" },
    { "name": "Лэнс Реддик", "role": "Charon" },
    { "name": "Тобиаш Сигал", "role": "Earl" },
    { "name": "Анжелика Хьюстон", "role": "The Director" },
    { "name": "Саид Тагмауи", "role": "The Elder" }
  ],
  "1267348": [
    { "name": "Киану Ривз", "role": "John Wick" },
    { "name": "Донни Йен", "role": "Caine" },
    { "name": "Билл Скарсгард", "role": "Marquis" },
    { "name": "Шамир Андерсон", "role": "Tracker" },
    { "name": "Иэн Макшейн", "role": "Winston" },
    { "name": "Хироюки Санада", "role": "Shimazu" },
    { "name": "Рина Саваяма", "role": "Akira" },
    { "name": "Ryan Castle", "role": "Agent" },
    { "name": "Скотт Эдкинс", "role": "Killa" },
    { "name": "Марко Сарор", "role": "Chidi" }
  ],
  "5002282": [
    { "name": "Сунита Мани", "role": "Ursula, озвучка" },
    { "name": "Вунми Мосаку", "role": "Azi, озвучка" },
    { "name": "Боб Стивенсон", "role": "Sam, озвучка" },
    { "name": "Алиа Шокат", "role": "Levi / Fiona, озвучка" },
    { "name": "Поллианна Макинтош", "role": "Kris, озвучка" },
    { "name": "Тед Тревелстид", "role": "Kamen, озвучка" },
    { "name": "Дэш Уильямс", "role": "Barry, озвучка" },
    { "name": "Сепиде Моафи", "role": "Mia, озвучка" },
    { "name": "Фредди Родригес", "role": "Terrence, озвучка" },
    { "name": "Маша Кинг", "role": "Mascha, озвучка" }
  ],
  "61237": [
    { "name": "Роберт Дауни мл.", "role": "Tony Stark" },
    { "name": "Джефф Бриджес", "role": "Obadiah Stane" },
    { "name": "Гвинет Пэлтроу", "role": "Pepper Potts" },
    { "name": "Терренс Ховард", "role": "Rhodey" },
    { "name": "Лесли Бибб", "role": "Christine Everhart" },
    { "name": "Шон Тоуб", "role": "Yinsen" },
    { "name": "Фаран Таир", "role": "Raza" },
    { "name": "Кларк Грегг", "role": "Agent Coulson" },
    { "name": "Джон Фавро", "role": "Hogan" },
    { "name": "Саид Бадрия", "role": "Abu Bakaar" }
  ],
  "411924": [
    { "name": "Роберт Дауни мл.", "role": "Tony Stark" },
    { "name": "Микки Рурк", "role": "Ivan Vanko" },
    { "name": "Гвинет Пэлтроу", "role": "Pepper Potts" },
    { "name": "Дон Чидл", "role": "Lt. Col. James «Rhodey» Rhodes" },
    { "name": "Сэм Рокуэлл", "role": "Justin Hammer" },
    { "name": "Скарлетт Йоханссон", "role": "Natalie Rushman / Natasha Romanoff" },
    { "name": "Кларк Грегг", "role": "Agent Coulson" },
    { "name": "Сэмюэл Л. Джексон", "role": "Nick Fury" },
    { "name": "Джон Слэттери", "role": "Howard Stark" },
    { "name": "Гарри Шендлинг", "role": "Senator Stern" }
  ],
  "838": [
    { "name": "Тоби Магуайр", "role": "Spider-Man / Peter Parker" },
    { "name": "Уиллем Дефо", "role": "Green Goblin / Norman Osborn" },
    { "name": "Кирстен Данст", "role": "Mary Jane Watson" },
    { "name": "Джеймс Франко", "role": "Harry Osborn" },
    { "name": "Клифф Робертсон", "role": "Ben Parker" },
    { "name": "Розмари Харрис", "role": "May Parker" },
    { "name": "Дж.К. Симмонс", "role": "J. Jonah Jameson" },
    { "name": "Джо Манганьелло", "role": "Flash Thompson" },
    { "name": "Майкл Пападжон", "role": "Carjacker" },
    { "name": "Билл Нанн", "role": "Joseph «Robbie» Robertson" }
  ],
  "2898": [
    { "name": "Тоби Магуайр", "role": "Spider-Man / Peter Parker" },
    { "name": "Кирстен Данст", "role": "Mary Jane Watson" },
    { "name": "Джеймс Франко", "role": "Harry Osborn" },
    { "name": "Альфред Молина", "role": "Doc Ock / Dr. Otto Octavius" },
    { "name": "Розмари Харрис", "role": "May Parker" },
    { "name": "Дж.К. Симмонс", "role": "J. Jonah Jameson" },
    { "name": "Донна Мерфи", "role": "Rosalie Octavius" },
    { "name": "Дэниэл Гиллис", "role": "John Jameson" },
    { "name": "Дилан Бейкер", "role": "Dr. Curt Connors" },
    { "name": "Билл Нанн", "role": "Joseph «Robbie» Robertson" }
  ],
  "1212316": [
    { "name": "Мириам Тортоза", "role": "Mónica" },
    { "name": "Мариона Тена", "role": "Eva" },
    { "name": "Бернат Местре", "role": "Dani" },
    { "name": "Анна Бертран", "role": "Julia" },
    { "name": "Виктор Гомес", "role": "Ricardo" },
    { "name": "Víctor Gómez", "role": "Ricardo (в титрах: Victor Gomez)" },
    { "name": "Рок Эсквиус", "role": "David" },
    { "name": "Диана Ройг", "role": "Sara" },
    { "name": "Рубен Серрано", "role": "Rafa" },
    { "name": "Кристина Райя", "role": "Lucía" }
  ],
  "889091": [
    { "name": "Эмма Робертс", "role": "Vee" },
    { "name": "Дэйв Франко", "role": "Ian" },
    { "name": "Эмили Мид", "role": "Sydney" },
    { "name": "Майлс Хейзер", "role": "Tommy" },
    { "name": "Джульетт Льюис", "role": "Nancy" },
    { "name": "Кимико Гленн", "role": "Liv" },
    { "name": "Марк Джон Джеффрис", "role": "Wes" },
    { "name": "Колсон Бэйкер", "role": "Ty" },
    { "name": "Брайан «Сене» Марк", "role": "J.P." },
    { "name": "Эд Сквайр", "role": "Chuck" }
  ],
  "395": [
    { "name": "Брюс Уиллис", "role": "Malcolm Crowe" },
    { "name": "Хейли Джоэл Осмент", "role": "Cole Sear" },
    { "name": "Тони Коллетт", "role": "Lynn Sear" },
    { "name": "Оливия Уильямс", "role": "Anna Crowe" },
    { "name": "Тревор Морган", "role": "Tommy Tammisimo" },
    { "name": "Донни Уолберг", "role": "Vincent Gray" },
    { "name": "Питер Энтони Тамбакис", "role": "Darren (в титрах: Peter Tambakis)" },
    { "name": "Джеффри Зубернис", "role": "Bobby" },
    { "name": "Брюс Норрис", "role": "Stanley Cunningham" },
    { "name": "Гленн Фицджералд", "role": "Sean" }
  ],
  "323": [
    { "name": "Пол Уокер", "role": "Brian O'Conner" },
    { "name": "Тайриз Гибсон", "role": "Roman Pearce (в титрах: Tyrese)" },
    { "name": "Ева Мендес", "role": "Monica Fuentes" },
    { "name": "Коул Хаузер", "role": "Carter Verone" },
    { "name": "Лудакрис", "role": "Tej (в титрах: Chris «Ludacris» Bridges)" },
    { "name": "Том Бэрри", "role": "Agent Bilkins" },
    { "name": "Джеймс Римар", "role": "Agent Markham" },
    { "name": "Девон Аоки", "role": "Suki" },
    { "name": "Мэтт Галлини", "role": "Enrique (в титрах: Matt Gallini)" },
    { "name": "Роберто «Санс» Санчес", "role": "Roberto (в титрах: Roberto «Sanz» Sanchez)" }
  ],
  "102510": [
    { "name": "Николас Кейдж", "role": "John Koestler" },
    { "name": "Роуз Бирн", "role": "Diana" },
    { "name": "Чандлер Кентербери", "role": "Caleb Koestler" },
    { "name": "Лара Робинсон", "role": "Abby / Lucinda" },
    { "name": "Бен Мендельсон", "role": "Phil Beckman" },
    { "name": "Д.Г. Малоуни", "role": "The Stranger" },
    { "name": "Надя Таунсенд", "role": "Grace" },
    { "name": "Алан Хопгуд", "role": "Reverend Koestler" },
    { "name": "Эдриэнн Пикеринг", "role": "Allison" },
    { "name": "Джошуа Лонг", "role": "Younger Caleb" }
  ],
  "280826": [
    { "name": "Адам Сэндлер", "role": "Zohan" },
    { "name": "Джон Туртурро", "role": "Phantom" },
    { "name": "Эммануэль Шрики", "role": "Dalia" },
    { "name": "Ник Свардсон", "role": "Michael" },
    { "name": "Лэйни Казан", "role": "Gail" },
    { "name": "Идо Моссери", "role": "Oori" },
    { "name": "Роб Шнайдер", "role": "Salim" },
    { "name": "Дэйв Мэтьюз", "role": "James" },
    { "name": "Майкл Баффер", "role": "Walbridge" },
    { "name": "Шарлотта Рэй", "role": "Mrs. Greenhouse" }
  ],
  "395066": [
    { "name": "Зак Эфрон", "role": "Mike O'Donnell" },
    { "name": "Лесли Манн", "role": "Scarlet" },
    { "name": "Томас Леннон", "role": "Ned Gold" },
    { "name": "Мэттью Перри", "role": "Mike O'Donnell (Adult)" },
    { "name": "Стерлинг Найт", "role": "Alex" },
    { "name": "Мишель Трахтенберг", "role": "Maggie" },
    { "name": "Хантер Пэрриш", "role": "Stan" },
    { "name": "Мелора Хардин", "role": "Principal Jane Masterson" },
    { "name": "Брайан Дойл-Мюррей", "role": "Janitor" },
    { "name": "Джим Гэффиган", "role": "Coach Murphy" }
  ],
  "298": [
    { "name": "Патрик Стюарт", "role": "Professor Charles Xavier" },
    { "name": "Хью Джекман", "role": "Logan / Wolverine" },
    { "name": "Иэн Маккеллен", "role": "Eric Lehnsherr / Magneto" },
    { "name": "Холли Берри", "role": "Ororo Munroe / Storm" },
    { "name": "Фамке Янссен", "role": "Jean Grey" },
    { "name": "Джеймс Марсден", "role": "Scott Summers / Cyclops" },
    { "name": "Анна Пэкуин", "role": "Rogue" },
    { "name": "Ребекка Ромейн", "role": "Raven Darkholme / Mystique / Grace (в титрах: Rebecca Romijn-Stamos)" },
    { "name": "Брайан Кокс", "role": "William Stryker" },
    { "name": "Алан Камминг", "role": "Kurt Wagner / Nightcrawler" }
  ],
  "462358": [
    { "name": "Джеймс Макэвой", "role": "Charles Xavier (30 Years)" },
    { "name": "Майкл Фассбендер", "role": "Erik Lensherr" },
    { "name": "Кевин Бейкон", "role": "Sebastian Shaw" },
    { "name": "Дженнифер Лоуренс", "role": "Raven / Mystique" },
    { "name": "Дженьюэри Джонс", "role": "Emma Frost" },
    { "name": "Роуз Бирн", "role": "Moira MacTaggert" },
    { "name": "Оливер Платт", "role": "Man in Black Suit" },
    { "name": "Николас Холт", "role": "Hank / Beast" },
    { "name": "Зои Кравиц", "role": "Angel Salvadore" },
    { "name": "Калеб Лэндри Джонс", "role": "Cassidy / Banshee" }
  ],
  "462754": [
    { "name": "Хью Джекман", "role": "Logan" },
    { "name": "Тао Окамото", "role": "Mariko" },
    { "name": "Рила Фукусима", "role": "Yukio" },
    { "name": "Хироюки Санада", "role": "Shingen" },
    { "name": "Светлана Ходченкова", "role": "Viper" },
    { "name": "Брайан Ти", "role": "Noburo" },
    { "name": "Хал Яманоути", "role": "Yashida (в титрах: Haruhiko Yamanouchi)" },
    { "name": "Уилл Юн Ли", "role": "Harada" },
    { "name": "Кэн Ямамура", "role": "Young Yashida" },
    { "name": "Фамке Янссен", "role": "Jean Grey" }
  ],
  "1228069": [
    { "name": "Марк Руффало", "role": "Rob Bilott" },
    { "name": "Энн Хэтэуэй", "role": "Sarah Barlage Bilott" },
    { "name": "Тим Роббинс", "role": "Tom Terp" },
    { "name": "Билл Пуллман", "role": "Harry Dietzler" },
    { "name": "Билл Кэмп", "role": "Wilbur Tennant" },
    { "name": "Виктор Гарбер", "role": "Phil Donnelly" },
    { "name": "Мэр Уиннингхэм", "role": "Darlene Kiger" },
    { "name": "Уильям Джексон Харпер", "role": "James Ross" },
    { "name": "Луиза Краузе", "role": "Carla Pfeiffer" },
    { "name": "Кевин Краули", "role": "Larry Winter" }
  ],
  "197863": [
    { "name": "Чарли Кокс", "role": "Tristan Thorn" },
    { "name": "Клэр Дэйнс", "role": "Yvaine" },
    { "name": "Мишель Пфайффер", "role": "Lamia" },
    { "name": "Роберт Де Ниро", "role": "Captain Shakespeare" },
    { "name": "Марк Стронг", "role": "Septimus" },
    { "name": "Джейсон Флеминг", "role": "Primus" },
    { "name": "Руперт Эверетт", "role": "Secundus" },
    { "name": "Кейт Магоуэн", "role": "Slave Girl / Una" },
    { "name": "Сиенна Миллер", "role": "Victoria" },
    { "name": "Натаниель Паркер", "role": "Dunstan Thorn" }
  ],
  "462360": [
    { "name": "Райан Рейнольдс", "role": "Wade / Deadpool" },
    { "name": "Морена Баккарин", "role": "Vanessa" },
    { "name": "Эд Скрейн", "role": "Ajax" },
    { "name": "ТиДжей Миллер", "role": "Weasel" },
    { "name": "Джина Карано", "role": "Angel Dust" },
    { "name": "Брианна Хилдебранд", "role": "Negasonic Teenage Warhead" },
    { "name": "Стефан Капичич", "role": "Colossus, озвучка" },
    { "name": "Лесли Аггамс", "role": "Blind Al" },
    { "name": "Джед Риз", "role": "Recruiter" },
    { "name": "Каран Сони", "role": "Dopinder" }
  ],
  "961715": [
    { "name": "Райан Рейнольдс", "role": "Wade Wilson / Deadpool / Voice of Juggernaut" },
    { "name": "Джош Бролин", "role": "Cable" },
    { "name": "Морена Баккарин", "role": "Vanessa" },
    { "name": "Джулиан Деннисон", "role": "Firefist" },
    { "name": "Зази Битц", "role": "Domino" },
    { "name": "ТиДжей Миллер", "role": "Weasel" },
    { "name": "Лесли Аггамс", "role": "Blind Al" },
    { "name": "Каран Сони", "role": "Dopinder" },
    { "name": "Брианна Хилдебранд", "role": "Negasonic Teenage Warhead" },
    { "name": "Джек Кеси", "role": "Black Tom" }
  ],
  "1008444": [
    { "name": "Райан Рейнольдс", "role": "Wade Wilson / Deadpool / Nicepool (в титрах: Gordon Reynolds)" },
    { "name": "Хью Джекман", "role": "Logan / Wolverine" },
    { "name": "Эмма Коррин", "role": "Cassandra Nova" },
    { "name": "ТиДжей Миллер", "role": "Weasel" },
    { "name": "Морена Баккарин", "role": "Vanessa" },
    { "name": "Роб Делани", "role": "Peter" },
    { "name": "Лесли Аггамс", "role": "Blind Al" },
    { "name": "Дженнифер Гарнер", "role": "Elektra" },
    { "name": "Мэттью Макфэдиен", "role": "Mr. Paradox" },
    { "name": "Уэсли Снайпс", "role": "Blade" }
  ],
  "405608": [
    { "name": "Уилл Феррелл", "role": "Megamind, озвучка" },
    { "name": "Брэд Питт", "role": "Metro Man, озвучка" },
    { "name": "Тина Фей", "role": "Roxanne Ritchi, озвучка" },
    { "name": "Джона Хилл", "role": "Tighten, озвучка" },
    { "name": "Дэвид Кросс", "role": "Minion, озвучка" },
    { "name": "Бен Стиллер", "role": "Bernard, озвучка" },
    { "name": "Джастин Теру", "role": "Megamind's Father, озвучка" },
    { "name": "Джессика Шульте", "role": "Megamind's Mother, озвучка" },
    { "name": "Том МакГрат", "role": "Lord Scott / Prison Guard, озвучка" },
    { "name": "Эмили Нордвинд", "role": "Lady Scott, озвучка" }
  ],
  "102151": [
    { "name": "Уилл Смит", "role": "John Hancock" },
    { "name": "Шарлиз Терон", "role": "Mary" },
    { "name": "Джейсон Бейтман", "role": "Ray" },
    { "name": "Джей Хед", "role": "Aaron" },
    { "name": "Эдди Марсан", "role": "Red" },
    { "name": "Дэвид Мэтти", "role": "Man Mountain" },
    { "name": "Метрикс Фиттен", "role": "Matrix" },
    { "name": "Томас Леннон", "role": "Mike" },
    { "name": "Джонни Галэки", "role": "Jeremy" },
    { "name": "Хейли Норман", "role": "Hottie" }
  ],
  "690593": [
    { "name": "Том Холланд", "role": "Peter Parker / Spider-Man" },
    { "name": "Роберт Дауни мл.", "role": "Tony Stark / Iron Man" },
    { "name": "Майкл Китон", "role": "Adrian Toomes / Vulture" },
    { "name": "Мариса Томей", "role": "May Parker" },
    { "name": "Джон Фавро", "role": "Happy Hogan" },
    { "name": "Джейкоб Баталон", "role": "Ned" },
    { "name": "Зендея", "role": "Michelle" },
    { "name": "Лора Хэрриер", "role": "Liz" },
    { "name": "Тони Револори", "role": "Flash" },
    { "name": "Дональд Гловер", "role": "Aaron Davis" }
  ],
  "1008445": [
    { "name": "Том Холланд", "role": "Peter Parker / Spider-Man" },
    { "name": "Сэмюэл Л. Джексон", "role": "Nick Fury" },
    { "name": "Джейк Джилленхол", "role": "Quentin Beck / Mysterio" },
    { "name": "Зендея", "role": "MJ" },
    { "name": "Коби Смолдерс", "role": "Maria Hill" },
    { "name": "Мариса Томей", "role": "May Parker" },
    { "name": "Джон Фавро", "role": "Happy Hogan" },
    { "name": "Джейкоб Баталон", "role": "Ned Leeds" },
    { "name": "Тони Револори", "role": "Flash Thompson" },
    { "name": "Энгаури Райс", "role": "Betty Brant" }
  ],
  "1309570": [
    { "name": "Том Холланд", "role": "Peter Parker / Spider-Man" },
    { "name": "Зендея", "role": "MJ" },
    { "name": "Бенедикт Камбербэтч", "role": "Doctor Strange" },
    { "name": "Мариса Томей", "role": "May Parker" },
    { "name": "Уиллем Дефо", "role": "Norman Osborn / Green Goblin" },
    { "name": "Альфред Молина", "role": "Dr. Otto Octavius / Doc Ock" },
    { "name": "Джейми Фокс", "role": "Max Dillon / Electro" },
    { "name": "Томас Хейден Чёрч", "role": "Flint Marko / Sandman, озвучка" },
    { "name": "Рис Иванс", "role": "Dr. Curt Connors / The Lizard, озвучка" },
    { "name": "Джейкоб Баталон", "role": "Ned Leeds" }
  ],
  "11637": [
    { "name": "Джонни Депп", "role": "Dean Corso" },
    { "name": "Фрэнк Ланджелла", "role": "Boris Balkan" },
    { "name": "Лена Олин", "role": "Liana Telfer" },
    { "name": "Эмманюэль Сенье", "role": "The Girl" },
    { "name": "Барбара Джеффорд", "role": "Baroness Kessler" },
    { "name": "Джек Тейлор", "role": "Victor Fargas" },
    { "name": "Джеймс Руссо", "role": "Bernie" },
    { "name": "Хосе Лопес Родеро", "role": "Pablo & Pedro Ceniza / 1st & 2nd Workmen (в титрах: Jose Lopez Rodero)" },
    { "name": "Тони Амони", "role": "Liana's Bodyguard" },
    { "name": "Уилли Холт", "role": "Andrew Telfer" }
  ],
  "801": [
    { "name": "Милла Йовович", "role": "Alice" },
    { "name": "Мишель Родригес", "role": "Rain" },
    { "name": "Эрик Мэбиас", "role": "Matt" },
    { "name": "Джеймс Пьюрфой", "role": "Spence" },
    { "name": "Мартин Крюз", "role": "Kaplan" },
    { "name": "Колин Сэлмон", "role": "One" },
    { "name": "Райан МакКласки", "role": "Mr. Grey" },
    { "name": "Оскар Пирс", "role": "Mr. Red" },
    { "name": "Индра Ове", "role": "Ms. Black" },
    { "name": "Анна Болт", "role": "Dr. Green" }
  ],
  "81288": [
    { "name": "Шайа ЛаБаф", "role": "Sam Witwicky" },
    { "name": "Меган Фокс", "role": "Mikaela Banes" },
    { "name": "Джош Дюамель", "role": "Captain Lennox" },
    { "name": "Тайриз Гибсон", "role": "USAF Tech Sergeant Epps" },
    { "name": "Джон Туртурро", "role": "Agent Simmons" },
    { "name": "Рэйчел Тейлор", "role": "Maggie Madsen" },
    { "name": "Энтони Андерсон", "role": "Glen Whitmann" },
    { "name": "Джон Войт", "role": "Defense Secretary John Keller" },
    { "name": "Кевин Данн", "role": "Ron Witwicky" },
    { "name": "Джули Уайт", "role": "Judy Witwicky" }
  ],
  "395787": [
    { "name": "Уилл Смит", "role": "Ben" },
    { "name": "Розарио Доусон", "role": "Emily" },
    { "name": "Вуди Харрельсон", "role": "Ezra" },
    { "name": "Майкл Или", "role": "Ben's Brother" },
    { "name": "Барри Пеппер", "role": "Dan" },
    { "name": "Эльпидия Каррильо", "role": "Connie" },
    { "name": "Робин Ли", "role": "Sarah" },
    { "name": "Джо Нуньес", "role": "Larry / Hotel Owner (в титрах: Joseph A. Nuñez)" },
    { "name": "Билл Смитрович", "role": "George Ristuccia" },
    { "name": "Тим Келлехер", "role": "Stewart Goodman" }
  ],
  "1388894": [
    { "name": "Оскар Айзек", "role": "—" },
    { "name": "Энн Хэтэуэй", "role": "Esther Graff" },
    { "name": "Джереми Стронг", "role": "Irving Graff" },
    { "name": "Майкл Бэнкс Репета", "role": "Paul Graff" },
    { "name": "Роберт Де Ниро", "role": "—" },
    { "name": "Кейт Бланшетт", "role": "Maryanne Trump" },
    { "name": "Джейлин Уэбб", "role": "Johnny Davis" },
    { "name": "Энтони Хопкинс", "role": "Grandpa Aaron Rabinowitz" },
    { "name": "Райан Селл", "role": "Ted Graff" },
    { "name": "Эндрю Полк", "role": "Mr. Turkeltaub" }
  ],
  "3908": [
    { "name": "Уилл Смит", "role": "Mike Lowrey" },
    { "name": "Мартин Лоуренс", "role": "Marcus Burnett" },
    { "name": "Теа Леони", "role": "Julie Mott" },
    { "name": "Чеки Карио", "role": "Fouchet (в титрах: Tcheky Karyo)" },
    { "name": "Джо Пантольяно", "role": "Captain Howard" },
    { "name": "Марг Хельгенбергер", "role": "Alison Sinclair" },
    { "name": "Нестор Серрано", "role": "Detective Sanchez" },
    { "name": "Хулио Оскар Мечосо", "role": "Detective Ruiz" },
    { "name": "Тереза Рэндл", "role": "Theresa Burnett" },
    { "name": "Саверио Гуэрра", "role": "Chet the Doorman" }
  ],
  "2928": [
    { "name": "Уилл Смит", "role": "Detective Mike Lowrey" },
    { "name": "Мартин Лоуренс", "role": "Detective Marcus Burnett" },
    { "name": "Гэбриэл Юнион", "role": "Syd" },
    { "name": "Хорди Молья", "role": "Hector Juan Carlos «Johnny» Tapia" },
    { "name": "Петер Стормаре", "role": "Alexei" },
    { "name": "Тереза Рэндл", "role": "Theresa" },
    { "name": "Джо Пантольяно", "role": "Captain Howard" },
    { "name": "Майкл Шеннон", "role": "Floyd Poteet" },
    { "name": "Джон Седа", "role": "Roberto" },
    { "name": "Юл Васкес", "role": "Detective Mateo Reyes (в титрах: Yul Vázquez)" }
  ],
  "472386": [
    { "name": "Уилл Смит", "role": "Lt. Mike Lowrey" },
    { "name": "Мартин Лоуренс", "role": "Lt. Marcus Burnett" },
    { "name": "Ванесса Энн Хадженс", "role": "Kelly" },
    { "name": "Александр Людвиг", "role": "Dorn" },
    { "name": "Чарльз Мелтон", "role": "Rafe" },
    { "name": "Паола Нуньес", "role": "Lt. Rita Secada (в титрах: Paola Nunez)" },
    { "name": "Кейт дель Кастильо", "role": "Isabel Aretas" },
    { "name": "Ники Джем", "role": "Lorenzo «Zway-Lo» Rodriguez" },
    { "name": "Джо Пантольяно", "role": "Capt. Conrad Howard" },
    { "name": "Джейкоб Скипио", "role": "Armando Aretas" }
  ],
  "584405": [
    { "name": "Джейк Джилленхол", "role": "Brian Taylor" },
    { "name": "Майкл Пенья", "role": "Mike Zavala" },
    { "name": "Анна Кендрик", "role": "Janet" },
    { "name": "Натали Мартинес", "role": "Gabby" },
    { "name": "Фрэнк Грилло", "role": "Sarge" },
    { "name": "Дэвид Харбор", "role": "Van Hauser" },
    { "name": "Америка Феррера", "role": "Orozco" },
    { "name": "Коуди Хорн", "role": "Davis" },
    { "name": "Шондрелла Эйвери", "role": "Bonita" },
    { "name": "Кле Слоун", "role": "Mr. Tre" }
  ],
  "4852097": [
    { "name": "Джейк Джилленхол", "role": "Rusty Sabich" },
    { "name": "Рут Негга", "role": "Barbara Sabich" },
    { "name": "Билл Кэмп", "role": "Raymond Horgan" },
    { "name": "О. Т. Фагбенли", "role": "Nico Della Guardia" },
    { "name": "Чейз Инфинити", "role": "Jaden Sabich" },
    { "name": "Ренате Реинсве", "role": "Carolyn Polhemus" },
    { "name": "Питер Сарсгаард", "role": "Tommy Molto" },
    { "name": "Кингстон Руми Сауфвик", "role": "Kyle Sabich" },
    { "name": "Тейт Бёрчмор", "role": "Michael Caldwell" },
    { "name": "Элизабет Марвел", "role": "Lorraine Horgan" }
  ],
  "925669": [
    { "name": "Джузеппе Баттистон", "role": "Peppe" },
    { "name": "Анна Фольетта", "role": "Carlotta" },
    { "name": "Марко Джаллини", "role": "Rocco" },
    { "name": "Эдоардо Лео", "role": "Cosimo" },
    { "name": "Валерио Мастандреа", "role": "Lele" },
    { "name": "Альба Рорвахер", "role": "Bianca" },
    { "name": "Кася Смутняк", "role": "Eva" },
    { "name": "Бенедетта Поркароли", "role": "Sofia" },
    { "name": "Элизабетта Де Пало", "role": "Nonna" },
    { "name": "Томмазо Татафьоре", "role": "Bruno" }
  ],
  "258941": [
    { "name": "Крис Хемсворт", "role": "Thor" },
    { "name": "Натали Портман", "role": "Jane Foster" },
    { "name": "Том Хиддлстон", "role": "Loki" },
    { "name": "Энтони Хопкинс", "role": "Odin" },
    { "name": "Стеллан Скарсгард", "role": "Erik Selvig" },
    { "name": "Кэт Деннингс", "role": "Darcy Lewis" },
    { "name": "Кларк Грегг", "role": "Agent Coulson" },
    { "name": "Колм Фиор", "role": "King Laufey" },
    { "name": "Идрис Эльба", "role": "Heimdall" },
    { "name": "Рэй Стивенсон", "role": "Volstagg" }
  ],
  "160946": [
    { "name": "Крис Эванс", "role": "Captain America / Steve Rogers" },
    { "name": "Хейли Этвелл", "role": "Peggy Carter" },
    { "name": "Томми Ли Джонс", "role": "Colonel Chester Phillips" },
    { "name": "Хьюго Уивинг", "role": "Johann Schmidt / Red Skull" },
    { "name": "Себастиан Стэн", "role": "James Buchanan «Bucky» Barnes" },
    { "name": "Доминик Купер", "role": "Howard Stark" },
    { "name": "Тоби Джонс", "role": "Dr. Arnim Zola" },
    { "name": "Стэнли Туччи", "role": "Dr. Abraham Erskine" },
    { "name": "Нил Макдона", "role": "Timothy «Dum Dum» Dugan" },
    { "name": "Дерек Люк", "role": "Gabe Jones" }
  ],
  "843859": [
    { "name": "Бри Ларсон", "role": "Carol Danvers / Vers / Captain Marvel" },
    { "name": "Сэмюэл Л. Джексон", "role": "Nick Fury" },
    { "name": "Бен Мендельсон", "role": "Talos / Keller" },
    { "name": "Джуд Лоу", "role": "Yon-Rogg" },
    { "name": "Аннетт Бенинг", "role": "Supreme Intelligence / Dr. Wendy Lawson" },
    { "name": "Джимон Хонсу", "role": "Korath" },
    { "name": "Ли Пейс", "role": "Ronan" },
    { "name": "Лашана Линч", "role": "Maria Rambeau" },
    { "name": "Джемма Чан", "role": "Minn-Erva" },
    { "name": "Кларк Грегг", "role": "Agent Coulson" }
  ],
  "263531": [
    { "name": "Роберт Дауни мл.", "role": "Tony Stark / Iron Man" },
    { "name": "Крис Эванс", "role": "Steve Rogers / Captain America" },
    { "name": "Марк Руффало", "role": "Bruce Banner / The Hulk" },
    { "name": "Крис Хемсворт", "role": "Thor" },
    { "name": "Скарлетт Йоханссон", "role": "Natasha Romanoff / Black Widow" },
    { "name": "Джереми Реннер", "role": "Clint Barton / Hawkeye" },
    { "name": "Том Хиддлстон", "role": "Loki" },
    { "name": "Сэмюэл Л. Джексон", "role": "Nick Fury" },
    { "name": "Кларк Грегг", "role": "Agent Phil Coulson" },
    { "name": "Коби Смолдерс", "role": "Agent Maria Hill" }
  ],
  "462762": [
    { "name": "Роберт Дауни мл.", "role": "Tony Stark" },
    { "name": "Гвинет Пэлтроу", "role": "Pepper Potts" },
    { "name": "Дон Чидл", "role": "Colonel James Rhodes" },
    { "name": "Гай Пирс", "role": "Aldrich Killian" },
    { "name": "Ребекка Холл", "role": "Maya Hansen" },
    { "name": "Джон Фавро", "role": "Happy Hogan" },
    { "name": "Бен Кингсли", "role": "Trevor Slattery" },
    { "name": "Джеймс Бэдж Дейл", "role": "Savin" },
    { "name": "Стефани Шостак", "role": "Brandt" },
    { "name": "Пол Беттани", "role": "Jarvis, озвучка" }
  ],
  "595938": [
    { "name": "Крис Хемсворт", "role": "Thor" },
    { "name": "Натали Портман", "role": "Jane Foster" },
    { "name": "Том Хиддлстон", "role": "Loki" },
    { "name": "Энтони Хопкинс", "role": "Odin" },
    { "name": "Кристофер Экклстон", "role": "Malekith" },
    { "name": "Джейми Александер", "role": "Sif" },
    { "name": "Закари Ливай", "role": "Fandral" },
    { "name": "Рэй Стивенсон", "role": "Volstagg" },
    { "name": "Таданобу Асано", "role": "Hogun" },
    { "name": "Идрис Эльба", "role": "Heimdall" }
  ],
  "676266": [
    { "name": "Крис Эванс", "role": "Steve Rogers / Captain America" },
    { "name": "Скарлетт Йоханссон", "role": "Natasha Romanoff / Black Widow" },
    { "name": "Энтони Маки", "role": "Sam Wilson / Falcon" },
    { "name": "Себастиан Стэн", "role": "Bucky Barnes / Winter Soldier" },
    { "name": "Сэмюэл Л. Джексон", "role": "Nick Fury" },
    { "name": "Роберт Редфорд", "role": "Alexander Pierce" },
    { "name": "Фрэнк Грилло", "role": "Brock Rumlow" },
    { "name": "Коби Смолдерс", "role": "Maria Hill" },
    { "name": "Эмили ВанКэмп", "role": "Kate / Agent 13" },
    { "name": "Максимилиано Эрнандес", "role": "Jasper Sitwell (в титрах: Maximiliano Hernandez)" }
  ],
  "689066": [
    { "name": "Крис Пратт", "role": "Peter Quill" },
    { "name": "Зои Салдана", "role": "Gamora" },
    { "name": "Дэйв Батиста", "role": "Drax" },
    { "name": "Брэдли Купер", "role": "Rocket, озвучка" },
    { "name": "Вин Дизель", "role": "Groot, озвучка" },
    { "name": "Ли Пейс", "role": "Ronan" },
    { "name": "Майкл Рукер", "role": "Yondu Udonta" },
    { "name": "Карен Гиллан", "role": "Nebula" },
    { "name": "Гленн Клоуз", "role": "Nova Prime" },
    { "name": "Джимон Хонсу", "role": "Korath" }
  ],
  "841263": [
    { "name": "Крис Пратт", "role": "Peter Quill / Star-Lord" },
    { "name": "Зои Салдана", "role": "Gamora" },
    { "name": "Дэйв Батиста", "role": "Drax" },
    { "name": "Вин Дизель", "role": "Baby Groot, озвучка" },
    { "name": "Брэдли Купер", "role": "Rocket, озвучка" },
    { "name": "Майкл Рукер", "role": "Yondu" },
    { "name": "Карен Гиллан", "role": "Nebula" },
    { "name": "Пом Клементьефф", "role": "Mantis" },
    { "name": "Элизабет Дебики", "role": "Ayesha" },
    { "name": "Курт Рассел", "role": "Ego" }
  ],
  "679830": [
    { "name": "Роберт Дауни мл.", "role": "Tony Stark / Iron Man" },
    { "name": "Крис Хемсворт", "role": "Thor" },
    { "name": "Крис Эванс", "role": "Steve Rogers / Captain America" },
    { "name": "Скарлетт Йоханссон", "role": "Natasha Romanoff / Black Widow" },
    { "name": "Марк Руффало", "role": "Bruce Banner / Hulk" },
    { "name": "Джереми Реннер", "role": "Clint Barton / Hawkeye" },
    { "name": "Аарон Тейлор-Джонсон", "role": "Pietro Maximoff / Quicksilver" },
    { "name": "Элизабет Олсен", "role": "Wanda Maximoff / Scarlet Witch" },
    { "name": "Джеймс Спэйдер", "role": "Ultron" },
    { "name": "Сэмюэл Л. Джексон", "role": "Nick Fury" }
  ],
  "195496": [
    { "name": "Пол Радд", "role": "Scott Lang / Ant-Man" },
    { "name": "Майкл Дуглас", "role": "Dr. Hank Pym" },
    { "name": "Эванджелин Лилли", "role": "Hope van Dyne" },
    { "name": "Кори Столл", "role": "Darren Cross / Yellowjacket" },
    { "name": "Майкл Пенья", "role": "Luis" },
    { "name": "Бобби Каннавале", "role": "Paxton" },
    { "name": "Ти-Ай", "role": "Dave" },
    { "name": "Давид Дастмалчян", "role": "Kurt" },
    { "name": "Эбби Райдер Фортсон", "role": "Cassie Lang" },
    { "name": "Джуди Грир", "role": "Maggie Lang" }
  ],
  "822708": [
    { "name": "Крис Эванс", "role": "Steve Rogers / Captain America" },
    { "name": "Роберт Дауни мл.", "role": "Tony Stark / Iron Man" },
    { "name": "Скарлетт Йоханссон", "role": "Natasha Romanoff / Black Widow" },
    { "name": "Себастиан Стэн", "role": "Bucky Barnes / Winter Soldier" },
    { "name": "Энтони Маки", "role": "Sam Wilson / Falcon" },
    { "name": "Дон Чидл", "role": "Lieutenant James Rhodes / War Machine" },
    { "name": "Джереми Реннер", "role": "Clint Barton / Hawkeye" },
    { "name": "Чедвик Боузман", "role": "T'Challa / Black Panther" },
    { "name": "Пол Беттани", "role": "Vision" },
    { "name": "Элизабет Олсен", "role": "Wanda Maximoff / Scarlet Witch" }
  ],
  "623250": [
    { "name": "Чедвик Боузман", "role": "T'Challa / Black Panther" },
    { "name": "Майкл Б. Джордан", "role": "Erik Killmonger" },
    { "name": "Лупита Нионго", "role": "Nakia" },
    { "name": "Данай Гурира", "role": "Okoye" },
    { "name": "Мартин Фриман", "role": "Everett K. Ross" },
    { "name": "Дэниэл Калуя", "role": "W'Kabi" },
    { "name": "Летиша Райт", "role": "Shuri" },
    { "name": "Уинстон Дьюк", "role": "M'Baku" },
    { "name": "Стерлинг К. Браун", "role": "N'Jobu" },
    { "name": "Анджела Бассетт", "role": "Ramonda" }
  ],
  "822709": [
    { "name": "Крис Хемсворт", "role": "Thor" },
    { "name": "Том Хиддлстон", "role": "Loki" },
    { "name": "Кейт Бланшетт", "role": "Hela" },
    { "name": "Идрис Эльба", "role": "Heimdall" },
    { "name": "Джефф Голдблюм", "role": "Grandmaster" },
    { "name": "Тесса Томпсон", "role": "Valkyrie" },
    { "name": "Карл Урбан", "role": "Skurge" },
    { "name": "Марк Руффало", "role": "Bruce Banner / Hulk" },
    { "name": "Энтони Хопкинс", "role": "Odin" },
    { "name": "Бенедикт Камбербэтч", "role": "Doctor Strange" }
  ],
  "843649": [
    { "name": "Роберт Дауни мл.", "role": "Tony Stark / Iron Man" },
    { "name": "Крис Хемсворт", "role": "Thor" },
    { "name": "Марк Руффало", "role": "Bruce Banner / Hulk" },
    { "name": "Крис Эванс", "role": "Steve Rogers / Captain America" },
    { "name": "Скарлетт Йоханссон", "role": "Natasha Romanoff / Black Widow" },
    { "name": "Дон Чидл", "role": "James Rhodes / War Machine" },
    { "name": "Бенедикт Камбербэтч", "role": "Doctor Strange" },
    { "name": "Том Холланд", "role": "Peter Parker / Spider-Man" },
    { "name": "Чедвик Боузман", "role": "T'Challa / Black Panther" },
    { "name": "Зои Салдана", "role": "Gamora" }
  ],
  "843650": [
    { "name": "Роберт Дауни мл.", "role": "Tony Stark / Iron Man" },
    { "name": "Крис Эванс", "role": "Steve Rogers / Captain America" },
    { "name": "Марк Руффало", "role": "Bruce Banner / Hulk" },
    { "name": "Крис Хемсворт", "role": "Thor" },
    { "name": "Скарлетт Йоханссон", "role": "Natasha Romanoff / Black Widow" },
    { "name": "Джереми Реннер", "role": "Clint Barton / Hawkeye" },
    { "name": "Дон Чидл", "role": "James Rhodes / War Machine" },
    { "name": "Пол Радд", "role": "Scott Lang / Ant-Man" },
    { "name": "Бри Ларсон", "role": "Carol Danvers / Captain Marvel" },
    { "name": "Карен Гиллан", "role": "Nebula" }
  ],
  "1044280": [
    { "name": "Крис Пратт", "role": "Peter Quill / Star-Lord" },
    { "name": "Карен Гиллан", "role": "Nebula" },
    { "name": "Пом Клементьефф", "role": "Mantis" },
    { "name": "Дэйв Батиста", "role": "Drax" },
    { "name": "Зои Салдана", "role": "Gamora (в титрах: Zoe Saldaña)" },
    { "name": "Чукуди Ивуджи", "role": "The High Evolutionary" },
    { "name": "Брэдли Купер", "role": "Rocket, озвучка" },
    { "name": "Уилл Поултер", "role": "Adam Warlock" },
    { "name": "Вин Дизель", "role": "Groot, озвучка" },
    { "name": "Шон Ганн", "role": "Kraglin / Young Rocket" }
  ],
  "935940": [
    { "name": "Пол Радд", "role": "Scott Lang / Ant-Man" },
    { "name": "Эванджелин Лилли", "role": "Hope Van Dyne / Wasp" },
    { "name": "Майкл Дуглас", "role": "Dr. Hank Pym" },
    { "name": "Ханна Джон-Кэймен", "role": "Ava / Ghost" },
    { "name": "Майкл Пенья", "role": "Luis" },
    { "name": "Лоренс Фишбёрн", "role": "Dr. Bill Foster" },
    { "name": "Уолтон Гоггинс", "role": "Sonny Burch" },
    { "name": "Ти-Ай", "role": "Dave (в титрах: Tip «T.I.» Harris)" },
    { "name": "Давид Дастмалчян", "role": "Kurt" },
    { "name": "Мишель Пфайффер", "role": "Janet Van Dyne / Wasp" }
  ],
  "1203039": [
    { "name": "Том Хиддлстон", "role": "Loki" },
    { "name": "Гугу Эмбата-Ро", "role": "Ravonna Renslayer" },
    { "name": "Вунми Мосаку", "role": "Hunter B-15" },
    { "name": "Юджин Кордеро", "role": "Casey" },
    { "name": "Тара Стронг", "role": "Miss Minutes" },
    { "name": "Оуэн Уилсон", "role": "Mobius" },
    { "name": "Софи Ди Мартино", "role": "Sylvie" },
    { "name": "Саша Лэйн", "role": "Hunter C-20" },
    { "name": "Деобиа Опарей", "role": "Boastful Loki" },
    { "name": "Ричард Э. Грант", "role": "Classic Loki" }
  ],
  "835877": [
    { "name": "Райан Рейнольдс", "role": "Michael Bryce" },
    { "name": "Сэмюэл Л. Джексон", "role": "Darius Kincaid" },
    { "name": "Элоди Юнг", "role": "Amelia Roussel" },
    { "name": "Сальма Хайек", "role": "Sonia Kincaid" },
    { "name": "Гари Олдман", "role": "Vladislav Dukhovich" },
    { "name": "Жоакин де Алмейда", "role": "Jean Foucher" },
    { "name": "Юрий Колокольников", "role": "Ivan" },
    { "name": "Тине Жустра", "role": "Renata Casoria" },
    { "name": "Сэм Хэзелдайн", "role": "Garrett" },
    { "name": "Ричард Э. Грант", "role": "Seifert" }
  ],
  "184432": [
    { "name": "Зак Эфрон", "role": "Troy Bolton" },
    { "name": "Ванесса Энн Хадженс", "role": "Gabriella Montez (в титрах: Vanessa Anne Hudgens)" },
    { "name": "Эшли Тисдейл", "role": "Sharpay Evans" },
    { "name": "Лукас Грабил", "role": "Ryan Evans" },
    { "name": "Корбин Блю", "role": "Chad Danforth" },
    { "name": "Моника Коулмэн", "role": "Taylor McKessie" },
    { "name": "Барт Джонсон", "role": "Coach Jack Bolton" },
    { "name": "Элисон Рид", "role": "Ms. Darbus" },
    { "name": "Крис Уоррен", "role": "Zeke Baylor (в титрах: Chris Warren Jr.)" },
    { "name": "Олеся Рулин", "role": "Kelsi Nielsen" }
  ],
  "342": [
    { "name": "Джон Траволта", "role": "Vincent Vega" },
    { "name": "Сэмюэл Л. Джексон", "role": "Jules Winnfield" },
    { "name": "Брюс Уиллис", "role": "Butch Coolidge" },
    { "name": "Ума Турман", "role": "Mia Wallace" },
    { "name": "Винг Реймз", "role": "Marsellus Wallace" },
    { "name": "Тим Рот", "role": "Pumpkin" },
    { "name": "Харви Кейтель", "role": "The Wolf" },
    { "name": "Квентин Тарантино", "role": "Jimmie" },
    { "name": "Питер Грин", "role": "Zed" },
    { "name": "Аманда Пламмер", "role": "Honey Bunny" }
  ],
  "462649": [
    { "name": "Том Хиддлстон", "role": "Jonathan Pine" },
    { "name": "Хью Лори", "role": "Richard Roper" },
    { "name": "Элизабет Дебики", "role": "Jed Marshall" },
    { "name": "Оливия Колман", "role": "Angela Burr" },
    { "name": "Алистэр Петри", "role": "Sandy Langbourne" },
    { "name": "Ховик Кеучкерян", "role": "Tabby" },
    { "name": "Майкл Нардон", "role": "Frisky" },
    { "name": "Дуглас Ходж", "role": "Rex Mayhew" },
    { "name": "Тобайас Мензис", "role": "Geoffrey Dromgoole" },
    { "name": "Том Холландер", "role": "Lance Corkoran" }
  ],
  "976636": [
    { "name": "Джессика Честейн", "role": "Molly Bloom" },
    { "name": "Идрис Эльба", "role": "Charlie Jaffey" },
    { "name": "Кевин Костнер", "role": "Larry Bloom" },
    { "name": "Майкл Сера", "role": "Player X" },
    { "name": "Джереми Стронг", "role": "Dean Keith" },
    { "name": "Крис О’Дауд", "role": "Douglas Downey" },
    { "name": "Дж.С. Маккензи", "role": "Harrison Wellstone" },
    { "name": "Брайан Д’Арси Джеймс", "role": "Brad" },
    { "name": "Билл Кэмп", "role": "Harlan Eustice" },
    { "name": "Грэм Грин", "role": "Judge Foxman" }
  ],
  "1228236": [
    { "name": "Адам Дивайн", "role": "Phil" },
    { "name": "Александра Шипп", "role": "Cate" },
    { "name": "Роуз Бирн", "role": "Jexi, озвучка" },
    { "name": "Рон Фанчес", "role": "Craig" },
    { "name": "Шарлин Йи", "role": "Elaine" },
    { "name": "Майкл Пенья", "role": "Kai" },
    { "name": "Ванда Сайкс", "role": "Denice" },
    { "name": "Кид Кади", "role": "Kid Cudi" },
    { "name": "Джастин Хартли", "role": "Brody" },
    { "name": "Гэвин Рут", "role": "Phil (10 Years)" }
  ],
  "47237": [
    { "name": "Кристиан Бэйл", "role": "Bruce Wayne / Batman" },
    { "name": "Кэти Холмс", "role": "Rachel Dawes" },
    { "name": "Майкл Кейн", "role": "Alfred" },
    { "name": "Киллиан Мерфи", "role": "Dr. Jonathan Crane" },
    { "name": "Том Уилкинсон", "role": "Carmine Falcone" },
    { "name": "Лиам Нисон", "role": "Ducard" },
    { "name": "Кэн Ватанабэ", "role": "Ra's Al Ghul" },
    { "name": "Гари Олдман", "role": "Jim Gordon" },
    { "name": "Морган Фриман", "role": "Lucius Fox" },
    { "name": "Рутгер Хауэр", "role": "Earle" }
  ],
  "111543": [
    { "name": "Кристиан Бэйл", "role": "Bruce Wayne" },
    { "name": "Хит Леджер", "role": "Joker" },
    { "name": "Аарон Экхарт", "role": "Harvey Dent" },
    { "name": "Мэгги Джилленхол", "role": "Rachel" },
    { "name": "Гари Олдман", "role": "Gordon" },
    { "name": "Майкл Кейн", "role": "Alfred" },
    { "name": "Морган Фриман", "role": "Lucius Fox" },
    { "name": "Чинь Хань", "role": "Lau" },
    { "name": "Нестор Карбонелл", "role": "Mayor" },
    { "name": "Эрик Робертс", "role": "Maroni" }
  ],
  "437410": [
    { "name": "Кристиан Бэйл", "role": "Bruce Wayne" },
    { "name": "Том Харди", "role": "Bane" },
    { "name": "Энн Хэтэуэй", "role": "Selina" },
    { "name": "Джозеф Гордон-Левитт", "role": "Blake" },
    { "name": "Марион Котийяр", "role": "Miranda" },
    { "name": "Гари Олдман", "role": "Commissioner Gordon" },
    { "name": "Морган Фриман", "role": "Fox" },
    { "name": "Майкл Кейн", "role": "Alfred" },
    { "name": "Мэттью Модайн", "role": "Foley" },
    { "name": "Бен Мендельсон", "role": "Daggett" }
  ],
  "252667": [
    { "name": "Генри Кавилл", "role": "Clark Kent / Kal-El" },
    { "name": "Эми Адамс", "role": "Lois Lane" },
    { "name": "Майкл Шеннон", "role": "General Zod" },
    { "name": "Рассел Кроу", "role": "Jor-El" },
    { "name": "Дайан Лэйн", "role": "Martha Kent" },
    { "name": "Кевин Костнер", "role": "Jonathan Kent" },
    { "name": "Антье Трауэ", "role": "Faora-Ul" },
    { "name": "Лоренс Фишбёрн", "role": "Perry White" },
    { "name": "Кристофер Мелони", "role": "Colonel Nathan Hardy" },
    { "name": "Гарри Дж. Ленникс", "role": "General Swanwick" }
  ],
  "770631": [
    { "name": "Генри Кавилл", "role": "Clark Kent / Superman" },
    { "name": "Бен Аффлек", "role": "Bruce Wayne / Batman" },
    { "name": "Галь Гадот", "role": "Diana Prince / Wonder Woman" },
    { "name": "Эми Адамс", "role": "Lois" },
    { "name": "Джесси Айзенберг", "role": "Lex Luthor" },
    { "name": "Джереми Айронс", "role": "Alfred" },
    { "name": "Дайан Лэйн", "role": "Martha Kent" },
    { "name": "Лоренс Фишбёрн", "role": "Perry White" },
    { "name": "Холли Хантер", "role": "Senator Finch" },
    { "name": "Скут Макнэри", "role": "Wallace Keefe" }
  ],
  "1721": [
    { "name": "Джим Керри", "role": "Fletcher Reede" },
    { "name": "Мора Тирни", "role": "Audrey Reede" },
    { "name": "Джастин Купер", "role": "Max Reede" },
    { "name": "Кэри Элвес", "role": "Jerry" },
    { "name": "Энн Хейни", "role": "Greta" },
    { "name": "Дженнифер Тилли", "role": "Samantha Cole" },
    { "name": "Аманда Донохью", "role": "Miranda" },
    { "name": "Джейсон Бернард", "role": "Judge Marshall Stevens" },
    { "name": "Свузи Кёрц", "role": "Dana Appleton" },
    { "name": "Митчелл Райан", "role": "Mr. Allan" }
  ],
  "833": [
    { "name": "Стивен Чоу", "role": "Mighty Steel Leg Sing" },
    { "name": "Нг Ман-Тат", "role": "Golden Leg Fung (в титрах: Ng Mang Tat) (в титрах: Mang Tat Ng)" },
    { "name": "Вики Чжао", "role": "Mui (в титрах: Vicki Zhao)" },
    { "name": "Патрик Це", "role": "Team Evil Coach Hung (в титрах: Patrick Tse Yin)" },
    { "name": "Ли Хуэй", "role": "Banana Peel Girl" },
    { "name": "Сесилия Чун", "role": "Team Moustache Player 1" },
    { "name": "Карен Мок", "role": "Team Moustache Player 2" },
    { "name": "Винсент Кок", "role": "Team Puma Leader" },
    { "name": "Тинь Кай-Мань", "role": "Iron Shirt Tin (Third Brother)" },
    { "name": "Вон Ят-Фэй", "role": "Iron Head (First Brother) (в титрах: Wong Kai Yue)" }
  ],
  "1387021": [
    { "name": "Бен Аффлек", "role": "Batman / Bruce Wayne" },
    { "name": "Галь Гадот", "role": "Wonder Woman / Diana Prince" },
    { "name": "Генри Кавилл", "role": "Superman / Clark Kent" },
    { "name": "Джейсон Момоа", "role": "Aquaman / Arthur Curry" },
    { "name": "Эзра Миллер", "role": "The Flash / Barry Allen" },
    { "name": "Рэй Фишер", "role": "Cyborg / Victor Stone" },
    { "name": "Эми Адамс", "role": "Lois Lane" },
    { "name": "Джереми Айронс", "role": "Alfred" },
    { "name": "Дайан Лэйн", "role": "Martha Kent" },
    { "name": "Джаред Лето", "role": "The Joker" }
  ],
  "590286": [
    { "name": "Роберт Паттинсон", "role": "Bruce Wayne / The Batman" },
    { "name": "Зои Кравиц", "role": "Selina Kyle" },
    { "name": "Пол Дано", "role": "The Riddler" },
    { "name": "Джеффри Райт", "role": "Lt. James Gordon" },
    { "name": "Джон Туртурро", "role": "Carmine Falcone" },
    { "name": "Питер Сарсгаард", "role": "District Attorney Gil Colson" },
    { "name": "Барри Кеоган", "role": "Unseen Arkham Prisoner" },
    { "name": "Джейми Лоусон", "role": "Bella Reál" },
    { "name": "Энди Серкис", "role": "Alfred" },
    { "name": "Колин Фаррелл", "role": "Oz / The Penguin" }
  ],
  "4368595": [
    { "name": "Мэйсон Темз", "role": "Finney" },
    { "name": "Мадлен Макгроу", "role": "Gwen" },
    { "name": "Итан Хоук", "role": "The Grabber" },
    { "name": "Джереми Дэвис", "role": "Terrence" },
    { "name": "Скотт Менвиль", "role": "—" },
    { "name": "И. Роджер Митчелл", "role": "Detective Wright" },
    { "name": "Трой Радсил", "role": "Detective Miller" },
    { "name": "Джеймс Рэнсон", "role": "Max" },
    { "name": "Мигель Касарес Мора", "role": "Robin (в титрах: Miguel Cazarez Mora)" },
    { "name": "Ребекка Кларк", "role": "Donna" }
  ],
  "1381125": [
    { "name": "Юити Накамура", "role": "Satoru Gojou, озвучка" },
    { "name": "Дзюнъя Эноки", "role": "Yuuji Itadori, озвучка" },
    { "name": "Юма Утида", "role": "Megumi Fushiguro, озвучка" },
    { "name": "Асами Сэто", "role": "Nobara Kugisaki, озвучка" },
    { "name": "Мицуо Ивата", "role": "Kiyotaka Ijichi, озвучка" },
    { "name": "Нобунага Симадзаки", "role": "Mahito, озвучка" },
    { "name": "Томокадзу Сэки", "role": "Panda, озвучка" },
    { "name": "Микако Комацу", "role": "Maki Zenin, озвучка" },
    { "name": "Коки Утияма", "role": "Toge Inumaki, озвучка" },
    { "name": "Дзюнъити Сувабэ", "role": "Ryoumen Sukuna, озвучка" }
  ],
  "1402067": [
    { "name": "Эндрю Ридделл", "role": "Patrick" },
    { "name": "Нова Гейвер", "role": "Daphne" },
    { "name": "Филлип Андре Ботельо", "role": "Alex" },
    { "name": "Дебора Эрошас", "role": "Angela" },
    { "name": "Эрик Донован", "role": "Barber" },
    { "name": "Энди Аллен", "role": "Don" },
    { "name": "Дэйв Бин", "role": "Car Salesman" },
    { "name": "Стивен Уильям Менаш", "role": "Group host (в титрах: Steven Menasche)" },
    { "name": "Рей Торрес", "role": "Marshall" }
  ],
  "575613": [
    { "name": "Дилан О’Брайен", "role": "Thomas" },
    { "name": "Томас Сэнгстер", "role": "Newt" },
    { "name": "Кая Скоделарио", "role": "Teresa" },
    { "name": "Уилл Поултер", "role": "Gally" },
    { "name": "Ки Хон Ли", "role": "Minho" },
    { "name": "Блейк Купер", "role": "Chuck" },
    { "name": "Амл Амин", "role": "Alby" },
    { "name": "Алекс Дж. Флорес", "role": "Winston" },
    { "name": "Джейкоб Латимор", "role": "Jeff" },
    { "name": "Патриша Кларксон", "role": "Ava Paige" }
  ],
  "842673": [
    { "name": "Дилан О’Брайен", "role": "Thomas" },
    { "name": "Кая Скоделарио", "role": "Teresa" },
    { "name": "Ки Хон Ли", "role": "Minho" },
    { "name": "Томас Сэнгстер", "role": "Newt" },
    { "name": "Декстер Дарден", "role": "Frypan" },
    { "name": "Алекс Дж. Флорес", "role": "Winston" },
    { "name": "Джейкоб Лофленд", "role": "Aris" },
    { "name": "Роза Салазар", "role": "Brenda" },
    { "name": "Джанкарло Эспозито", "role": "Jorge" },
    { "name": "Патриша Кларксон", "role": "Ava Paige" }
  ],
  "727913": [
    { "name": "Тиликум", "role": "играет самого себя - Killer Whale, хроника" },
    { "name": "Джон Харгров", "role": "играет самого себя - Former SeaWorld Trainer" },
    { "name": "Саманта Берг", "role": "играет саму себя - Former SeaWorld Trainer" },
    { "name": "Марк Симмонс", "role": "играет самого себя - Former SeaWorld Trainer" },
    { "name": "Ким Эндаун", "role": "играет саму себя - Former SeaWorld Trainer" },
    { "name": "Дин Гомерсэлл", "role": "играет самого себя - Former SeaWorld Trainer" },
    { "name": "Джеймс Эрл Джонс", "role": "играет самого себя - SeaWorld Commercial Actor, хроника" },
    { "name": "Шаму", "role": "играет самого себя - Killer Whale, хроника" },
    { "name": "Кэрол Рэй", "role": "играет саму себя - Former SeaWorld Trainer" },
    { "name": "Джон Джетт", "role": "играет самого себя - Tilikum Former SeaWorld Trainer" }
  ],
  "15527": [
    { "name": "Кэмерон Диас", "role": "Christina" },
    { "name": "Кристина Эпплгейт", "role": "Courtney" },
    { "name": "Сэльма Блэр", "role": "Jane" },
    { "name": "Томас Джейн", "role": "Peter" },
    { "name": "Джейсон Бейтман", "role": "Roger" },
    { "name": "Паркер Поузи", "role": "Judy" },
    { "name": "Лиллиэн Адамс", "role": "Aunt Frida" },
    { "name": "Херберт В. Анкром", "role": "Wedding Guest #3 (в титрах: Herbert Ankrom)" },
    { "name": "Брайан Энтони", "role": "Geeky Guy" },
    { "name": "Линда Асума", "role": "Brawling Bridesmaid" }
  ],
  "309": [
    { "name": "Кристиан Бэйл", "role": "John Preston" },
    { "name": "Тэй Диггз", "role": "Brandt" },
    { "name": "Энгус Макфадьен", "role": "Dupont (в титрах: Angus MacFadyen)" },
    { "name": "Шон Бин", "role": "Partridge" },
    { "name": "Эмили Уотсон", "role": "Mary O'Brien" },
    { "name": "Уильям Фихтнер", "role": "Jurgen" },
    { "name": "Мэттью Харбор", "role": "Robbie Preston" },
    { "name": "Эмили Сьеверт", "role": "Lisa Preston" },
    { "name": "Шон Пертуи", "role": "Father" },
    { "name": "Доминик Пёрселл", "role": "Seamus" }
  ],
  "507": [
    { "name": "Арнольд Шварценеггер", "role": "Terminator" },
    { "name": "Майкл Бин", "role": "Kyle Reese" },
    { "name": "Линда Хэмилтон", "role": "Sarah Connor" },
    { "name": "Пол Уинфилд", "role": "Traxler" },
    { "name": "Лэнс Хенриксен", "role": "Vukovich" },
    { "name": "Бесс Мотта", "role": "Ginger" },
    { "name": "Рик Россович", "role": "Matt" },
    { "name": "Эрл Боэн", "role": "Silberman" },
    { "name": "Дик Миллер", "role": "Pawn Shop Clerk" },
    { "name": "Шон Шеппс", "role": "Nancy" }
  ],
  "102474": [
    { "name": "Саша Барон Коэн", "role": "Borat" },
    { "name": "Памела Андерсон", "role": "играет саму себя - Autograph Signing, в титрах не указан" },
    { "name": "Кен Давитян", "role": "Azamat" },
    { "name": "Луэнелль", "role": "Luenell" },
    { "name": "Честер", "role": "Bear" },
    { "name": "Чарли", "role": "Bear" },
    { "name": "Ильхам Алиев", "role": "играет самого себя, хроника, в титрах не указан" },
    { "name": "Боб Барр", "role": "играет самого себя - Former Georgia Congressman, в титрах не указан" },
    { "name": "Кэрол Де Сарам", "role": "играет саму себя - Feminist, в титрах не указан" },
    { "name": "Митчелл Фальк", "role": "Prime Minister of Kazakhstan, в титрах не указан" }
  ],
  "444": [
    { "name": "Арнольд Шварценеггер", "role": "The Terminator" },
    { "name": "Линда Хэмилтон", "role": "Sarah Connor" },
    { "name": "Эдвард Ферлонг", "role": "John Connor" },
    { "name": "Роберт Патрик", "role": "T-1000" },
    { "name": "Эрл Боэн", "role": "Dr. Silberman" },
    { "name": "Джо Мортон", "role": "Miles Dyson" },
    { "name": "С. Ипейта Меркерсон", "role": "Tarissa Dyson" },
    { "name": "Кастуло Герра", "role": "Enrique Salceda" },
    { "name": "Дэнни Кукси", "role": "Tim" },
    { "name": "Дженетт Голдстин", "role": "Janelle Voight" }
  ],
  "933307": [
    { "name": "Джессика Честейн", "role": "Madeline Elizabeth Sloane" },
    { "name": "Марк Стронг", "role": "Rodolfo Schmidt" },
    { "name": "Гугу Эмбата-Ро", "role": "Esme Manucharian" },
    { "name": "Элисон Пилл", "role": "Jane Molloy" },
    { "name": "Майкл Стулбарг", "role": "Pat Connors" },
    { "name": "Сэм Уотерстон", "role": "George Dupont" },
    { "name": "Джон Литгоу", "role": "Senator Ronald Sperling" },
    { "name": "Дэвид Уилсон Барнс", "role": "Daniel Posner" },
    { "name": "Джейк Лэси", "role": "Forde" },
    { "name": "Чак Шамата", "role": "Bill Sanford" }
  ],
  "1245501": [
    { "name": "Том Холланд", "role": "Cherry" },
    { "name": "Сиэра Браво", "role": "Emily" },
    { "name": "Джек Рейнор", "role": "Pills & Coke" },
    { "name": "Майкл Рисполи", "role": "Tommy" },
    { "name": "Джеффри Уолберг", "role": "Jimenez" },
    { "name": "Форрест Гудлак", "role": "James Lightfoot" },
    { "name": "Майкл Гандольфини", "role": "Cousin Joe" },
    { "name": "Сухейл Алдаббач", "role": "Old Man Fatook" },
    { "name": "Дэниэл Р. Хилл", "role": "Black" },
    { "name": "Фионн О’Ши", "role": "Arnold" }
  ],
  "843463": [
    { "name": "Джон Гудман", "role": "Howard" },
    { "name": "Мэри Элизабет Уинстэд", "role": "Michelle" },
    { "name": "Джон Галлахер мл.", "role": "Emmett" },
    { "name": "Дуглас М. Гриффин", "role": "Driver" },
    { "name": "Сюзанн Крайер", "role": "Woman" },
    { "name": "Брэдли Купер", "role": "Ben, озвучка" },
    { "name": "Сумали Монтано", "role": "Voice on Radio, озвучка" },
    { "name": "Фрэнк Моттек", "role": "Radio Broadcaster, озвучка" },
    { "name": "Kayla Bechor", "role": "Paper girl, в титрах не указан" }
  ],
  "5429853": [
    { "name": "Джеймс Макэвой", "role": "Paddy" },
    { "name": "Маккензи Дэвис", "role": "Louise Dalton" },
    { "name": "Скут Макнэри", "role": "Ben Dalton" },
    { "name": "Эшлинг Франчози", "role": "Ciara" },
    { "name": "Аликс Уэст Лефлер", "role": "Agnes Dalton" },
    { "name": "Дэн Хаф", "role": "Ant" },
    { "name": "Крис Хитчен", "role": "Mike" },
    { "name": "Мотаз Малхиз", "role": "Muhjid" },
    { "name": "Якоб Хёйлев Ёргенсон", "role": "Torsten" }
  ],
  "104938": [
    { "name": "Уилл Смит", "role": "Chris Gardner" },
    { "name": "Джейден Смит", "role": "Christopher (в титрах: Jaden Christopher Syre Smith)" },
    { "name": "Тандиве Ньютон", "role": "Linda (в титрах: Thandie Newton)" },
    { "name": "Брайан Хау", "role": "Jay Twistle" },
    { "name": "Джеймс Карен", "role": "Martin Frohm" },
    { "name": "Дэн Кастелланета", "role": "Alan Frakesh" },
    { "name": "Курт Фуллер", "role": "Walter Ribbon" },
    { "name": "Такайо Фишер", "role": "Mrs. Chu" },
    { "name": "Кевин Уэст", "role": "World's Greatest Dad" },
    { "name": "Джордж Чунг", "role": "Chinese Maintenance Worker (в титрах: George K. Cheung)" }
  ],
  "517988": [
    { "name": "Джастин Тимберлейк", "role": "Will Salas" },
    { "name": "Аманда Сайфред", "role": "Sylvia Weis" },
    { "name": "Киллиан Мерфи", "role": "Raymond Leon" },
    { "name": "Алекс Петтифер", "role": "Fortis" },
    { "name": "Винсент Картайзер", "role": "Philippe Weis" },
    { "name": "Оливия Уайлд", "role": "Rachel Salas" },
    { "name": "Мэтт Бомер", "role": "Henry Hamilton" },
    { "name": "Джонни Галэки", "role": "Borel" },
    { "name": "Коллинз Пенни", "role": "Timekeeper Jaeger" },
    { "name": "Итан Пек", "role": "Constantin" }
  ],
  "930534": [
    { "name": "Джеймс Макэвой", "role": "Dennis / Patricia / Hedwig / The Beast / Kevin Wendell Crumb / Barry / Orwell / Jade" },
    { "name": "Аня Тейлор-Джой", "role": "Casey Cooke" },
    { "name": "Бетти Бакли", "role": "Dr. Karen Fletcher" },
    { "name": "Хейли Лу Ричардсон", "role": "Claire Benoit" },
    { "name": "Джессика Сула", "role": "Marcia" },
    { "name": "Иззи Коффи", "role": "Five-Year-Old Casey (в титрах: Izzie Leigh Coffey)" },
    { "name": "Брэд Уильям Хенке", "role": "Uncle John" },
    { "name": "Себастьян Арселус", "role": "Casey's Father" },
    { "name": "Нил Хафф", "role": "Mr. Benoit" },
    { "name": "Уки Вашингтон", "role": "News Anchor" }
  ],
  "817969": [
    { "name": "Кеннет Брана", "role": "Hercule Poirot" },
    { "name": "Пенелопа Крус", "role": "Pilar Estravados" },
    { "name": "Уиллем Дефо", "role": "Gerhard Hardman" },
    { "name": "Джуди Денч", "role": "Princess Dragomiroff" },
    { "name": "Джонни Депп", "role": "Edward Ratchett" },
    { "name": "Джош Гэд", "role": "Hector MacQueen" },
    { "name": "Дерек Джекоби", "role": "Edward Henry Masterman" },
    { "name": "Лесли Одом мл.", "role": "Dr. Arbuthnot" },
    { "name": "Мишель Пфайффер", "role": "Caroline Hubbard" },
    { "name": "Дейзи Ридли", "role": "Miss Mary Debenham" }
  ],
  "507440": [
    { "name": "Томас Манн", "role": "Thomas" },
    { "name": "Оливер Купер", "role": "Costa" },
    { "name": "Джонатан Даниэль Браун", "role": "JB" },
    { "name": "Дакс Флэйм", "role": "Dax" },
    { "name": "Кирби Блисс Блэнтон", "role": "Kirby" },
    { "name": "Брэйди Эндер", "role": "Everett" },
    { "name": "Ник Нервис", "role": "Tyler" },
    { "name": "Алексис Нэп", "role": "Alexis" },
    { "name": "Майлз Теллер", "role": "Miles" },
    { "name": "Питер Маккензи", "role": "Dad" }
  ],
  "464484": [
    { "name": "Том Хэнкс", "role": "Dr. Henry Goose / Hotel Manager / Isaac Sachs / Dermot Hoggins / Cavendish Look-a-Like Actor / Zachry" },
    { "name": "Холли Берри", "role": "Native Woman / Jocasta Ayrs / Luisa Rey / Indian Party Guest / Ovid / Meronym" },
    { "name": "Джим Бродбент", "role": "Captain Molyneux / Vyvyan Ayrs / Timothy Cavendish / Korean Musician / Prescient 2" },
    { "name": "Джим Стёрджесс", "role": "Adam Ewing / Poor Hotel Guest / Megan's Dad / Highlander / Hae-Joo Chang / Adam (Zachry's Brother-in-Law)" },
    { "name": "Бен Уишоу", "role": "Cabin Boy / Robert Frobisher / Store Clerk / Georgette / Tribesman" },
    { "name": "Хьюго Уивинг", "role": "Haskell Moore / Tadeusz Kesselring / Bill Smoke / Nurse Noakes / Boardman Mephi / Old Georgie" },
    { "name": "Пэ Ду-на", "role": "Tilda / Megan's Mom / Mexican Woman / Sonmi-451 / Sonmi-351 / Sonmi Prostitute" },
    { "name": "Хью Грант", "role": "Rev. Giles Horrox / Hotel Heavy / Lloyd Hooks / Denholme Cavendish / Seer Rhee / Kona Chief" },
    { "name": "Сьюзен Сарандон", "role": "Madame Horrox / Older Ursula / Yusouf Suleiman / Abbess" },
    { "name": "Джеймс Д’Арси", "role": "Young Rufus Sixsmith / Old Rufus Sixsmith / Nurse James / Archivist" }
  ],
  "63732": [
    { "name": "Райан Рейнольдс", "role": "George Lutz" },
    { "name": "Мелисса Джордж", "role": "Kathy Lutz" },
    { "name": "Джесси Джеймс", "role": "Billy Lutz" },
    { "name": "Джимми Беннетт", "role": "Michael Lutz" },
    { "name": "Хлоя Грейс Морец", "role": "Chelsea Lutz" },
    { "name": "Рэйчел Николс", "role": "Lisa" },
    { "name": "Филип Бейкер Холл", "role": "Father Callaway" },
    { "name": "Изабель Коннер", "role": "Jodie Defeo" },
    { "name": "Брендан Дональдсон", "role": "Ronald Defeo" },
    { "name": "Аннабел Армор", "role": "Realtor" }
  ],
  "992500": [
    { "name": "Джордж Маккэй", "role": "Jack" },
    { "name": "Аня Тейлор-Джой", "role": "Allie" },
    { "name": "Чарли Хитон", "role": "Billy" },
    { "name": "Миа Гот", "role": "Jane" },
    { "name": "Мэттью Стэгг", "role": "Sam" },
    { "name": "Никола Харрисон", "role": "Mother" },
    { "name": "Кайл Соллер", "role": "Porter" },
    { "name": "Том Фишер", "role": "Father" },
    { "name": "Мира Кэтрин Пирс", "role": "Molly" },
    { "name": "Пол Джессон", "role": "Doctor" }
  ],
  "468581": [
    { "name": "Дженнифер Лоуренс", "role": "Katniss Everdeen" },
    { "name": "Джош Хатчерсон", "role": "Peeta Mellark" },
    { "name": "Лиам Хемсворт", "role": "Gale Hawthorne" },
    { "name": "Вуди Харрельсон", "role": "Haymitch Abernathy" },
    { "name": "Элизабет Бэнкс", "role": "Effie Trinket" },
    { "name": "Уэс Бентли", "role": "Seneca Crane" },
    { "name": "Дональд Сазерленд", "role": "President Snow" },
    { "name": "Стэнли Туччи", "role": "Caesar Flickerman" },
    { "name": "Ленни Кравиц", "role": "Cinna" },
    { "name": "Амандла Стенберг", "role": "Rue" }
  ],
  "602373": [
    { "name": "Дженнифер Лоуренс", "role": "Katniss Everdeen" },
    { "name": "Джош Хатчерсон", "role": "Peeta Mellark" },
    { "name": "Лиам Хемсворт", "role": "Gale Hawthorne" },
    { "name": "Вуди Харрельсон", "role": "Haymitch Abernathy" },
    { "name": "Сэм Клафлин", "role": "Finnick Odair" },
    { "name": "Джеффри Райт", "role": "Beetee" },
    { "name": "Джена Мэлоун", "role": "Johanna Mason" },
    { "name": "Элизабет Бэнкс", "role": "Effie Trinket" },
    { "name": "Дональд Сазерленд", "role": "President Snow" },
    { "name": "Филип Сеймур Хоффман", "role": "Plutarch Heavensbee" }
  ],
  "6174": [
    { "name": "Марк Уолберг", "role": "David McCall" },
    { "name": "Риз Уизерспун", "role": "Nicole Walker" },
    { "name": "Уильям Петерсен", "role": "Steve Walker" },
    { "name": "Эми Бреннеман", "role": "Laura Walker" },
    { "name": "Алисса Милано", "role": "Margo Masse" },
    { "name": "Кристофер Грэй", "role": "Toby" },
    { "name": "Трэйси Фрэйм", "role": "Logan" },
    { "name": "Гари Райли", "role": "Hacker" },
    { "name": "Джейсон Кристофер", "role": "Terry" },
    { "name": "Джед Риз", "role": "Knobby" }
  ],
  "5437609": [
    { "name": "Джейк Джилленхол", "role": "Bronco" },
    { "name": "Генри Кавилл", "role": "Sid" },
    { "name": "Эйса Гонсалес", "role": "Rachel" },
    { "name": "Розамунд Пайк", "role": "Bobby Sheen" },
    { "name": "Фишер Стивенс", "role": "William Horowitz" },
    { "name": "Карлос Бардем", "role": "Manny Salazar" },
    { "name": "Джейсон Вон", "role": "Gucci Reyes" },
    { "name": "Майкл Ву", "role": "Ed Glover" },
    { "name": "Мохаммед Аль Турки", "role": "Wolfgang Klose" },
    { "name": "Койо Атта", "role": "Andre Baker" }
  ],
  "94225": [
    { "name": "Джессика Альба", "role": "Max Guevera / X5-452 / X5-453" },
    { "name": "Майкл Уэтерли", "role": "Logan Cale" },
    { "name": "Алими Баллард", "role": "Herbal Thought" },
    { "name": "Дженнифер Бланк", "role": "Kendra Maibaum" },
    { "name": "Ричард Ганн", "role": "Calvin «Sketchy» Theodore / Calvin Theodore" },
    { "name": "Дж.С. Маккензи", "role": "Reagan «Normal» Ronald" },
    { "name": "Валери Рэй Миллер", "role": "Cynthia «Original Cindy» McEachin / Cynthia McEachin" },
    { "name": "Джон Сэвэдж", "role": "Donald Lydecker" },
    { "name": "Дженсен Эклс", "role": "Alec / X5-494 / Ben / X5-493" },
    { "name": "Мартин Камминс", "role": "Ames White" }
  ],
  "462240": [
    { "name": "Кристиан Бэйл", "role": "Russell Baze" },
    { "name": "Вуди Харрельсон", "role": "Harlan DeGroat" },
    { "name": "Кейси Аффлек", "role": "Rodney Baze Jr." },
    { "name": "Форест Уитакер", "role": "Chief Wesley Barnes" },
    { "name": "Уиллем Дефо", "role": "John Petty" },
    { "name": "Зои Салдана", "role": "Lena Taylor (в титрах: Zoë Saldana)" },
    { "name": "Сэм Шепард", "role": "Gerald «Red» Baze" },
    { "name": "Дендри Тейлор", "role": "DeGroat's Date" },
    { "name": "Карл Киарфалио", "role": "Man at Drive In" },
    { "name": "Нэнси Моссер", "role": "Woman at Drive In (в титрах: Nancy Mosser Bailey)" }
  ],
  "655435": [
    { "name": "Райан Рейнольдс", "role": "Young Damian" },
    { "name": "Бен Кингсли", "role": "Damian" },
    { "name": "Натали Мартинес", "role": "Madeline" },
    { "name": "Мэттью Гуд", "role": "Albright" },
    { "name": "Виктор Гарбер", "role": "Martin" },
    { "name": "Дерек Люк", "role": "Anton" },
    { "name": "Джейни-Линн Кинчен", "role": "Anna" },
    { "name": "Мелора Хардин", "role": "Judy" },
    { "name": "Мишель Докери", "role": "Claire" },
    { "name": "Сэмюэл Пейдж", "role": "Carl" }
  ],
  "467972": [
    { "name": "Эдриан Броуди", "role": "Travis" },
    { "name": "Форест Уитакер", "role": "Barris" },
    { "name": "Кэм Жиганде", "role": "Chase" },
    { "name": "Клифтон Коллинз мл.", "role": "Nix" },
    { "name": "Этан Кон", "role": "Benjy" },
    { "name": "Фишер Стивенс", "role": "Archaleta" },
    { "name": "Трэвис Фиммел", "role": "Helweg" },
    { "name": "Дэвид Бэннер", "role": "Bosch (в титрах: Lavell «David Banner» Crump)" },
    { "name": "Джейсон Лью", "role": "Oscar" },
    { "name": "Дэмиен Лик", "role": "Govenor" }
  ],
  "607737": [
    { "name": "Марк Уолберг", "role": "Mike Williams" },
    { "name": "Курт Рассел", "role": "Jimmy Harrell" },
    { "name": "Джон Малкович", "role": "Don Vidrine" },
    { "name": "Джина Родригес", "role": "Andrea Fleytas" },
    { "name": "Дилан О’Брайен", "role": "Caleb Holloway" },
    { "name": "Кейт Хадсон", "role": "Felicia" },
    { "name": "Итан Сапли", "role": "Jason Anderson" },
    { "name": "Генри Фрост", "role": "Shane M. Roshto" },
    { "name": "Джереми Сэнд", "role": "Adam Weise" },
    { "name": "Дуглас М. Гриффин", "role": "Captain Landry" }
  ],
  "484878": [
    { "name": "Джеймс Франко", "role": "Aron Ralston" },
    { "name": "Кейт Мара", "role": "Kristi" },
    { "name": "Эмбер Тэмблин", "role": "Megan" },
    { "name": "Клеманс Поэзи", "role": "Rana" },
    { "name": "Лиззи Каплан", "role": "Sonja" },
    { "name": "Трит Уильямс", "role": "Aron's Dad" },
    { "name": "Кейт Бёртон", "role": "Aron's Mom" },
    { "name": "Шон Ботт", "role": "Aron's Friend (в титрах: Sean A. Bott)" },
    { "name": "Джон Лоуренс", "role": "Brian" },
    { "name": "Колман Стингер", "role": "Aron Age 5" }
  ],
  "6303": [
    { "name": "Арнольд Шварценеггер", "role": "Dutch" },
    { "name": "Карл Уэзерс", "role": "Dillon" },
    { "name": "Эльпидия Каррильо", "role": "Anna" },
    { "name": "Билл Дьюк", "role": "Mac" },
    { "name": "Джесси Вентура", "role": "Blain" },
    { "name": "Сонни Лэндэм", "role": "Billy" },
    { "name": "Ричард Чавес", "role": "Poncho" },
    { "name": "Р.Г. Армстронг", "role": "General Phillips" },
    { "name": "Шейн Блэк", "role": "Hawkins" },
    { "name": "Кевин Питер Холл", "role": "The Predator / Helicopter Pilot" }
  ],
  "839823": [
    { "name": "Ли Сон-гюн", "role": "Ko Geon-soo" },
    { "name": "Чо Джин-ун", "role": "Park Chang-min" },
    { "name": "Чан Ин-соп", "role": "Policeman" },
    { "name": "Чон Ман-щик", "role": "Detective Choi" },
    { "name": "Ким Дон-ён", "role": "Detective Do" },
    { "name": "Пак По-гом", "role": "Police Officer Lee" },
    { "name": "Щин Дон-ми", "role": "Younger sister" },
    { "name": "Щин Джон-гын", "role": "Chief" },
    { "name": "Чо Ха-сок", "role": "Lee Gwang-min" },
    { "name": "Ли Джи-хун", "role": "Weapons & chemical storage constable" }
  ],
  "1379512": [
    { "name": "Флоренс Пью", "role": "Alice" },
    { "name": "Гарри Стайлс", "role": "Jack" },
    { "name": "Крис Пайн", "role": "Frank" },
    { "name": "Дакота Джонсон", "role": "—" },
    { "name": "Оливия Уайлд", "role": "Bunny" },
    { "name": "Кики Лэйн", "role": "Margaret" },
    { "name": "Джемма Чан", "role": "Shelley" },
    { "name": "Ник Кролл", "role": "Dean" },
    { "name": "Сидни Чендлер", "role": "Violet" },
    { "name": "Кейт Берлант", "role": "Peg" }
  ],
  "10355286": [
    { "name": "Майкл Джонстон", "role": "Bear" },
    { "name": "Инди Наварретти", "role": "Nikki" },
    { "name": "Купер Томлинсон", "role": "Ian" },
    { "name": "Меган Лоулесс", "role": "Sarah" },
    { "name": "Энди Рихтер", "role": "Carter" },
    { "name": "Хейли Фицджеральд", "role": "Viola" },
    { "name": "Дэрин Тондер", "role": "Harry" },
    { "name": "Энтони Павоне", "role": "Reggie" },
    { "name": "Джастис", "role": "Joe" },
    { "name": "Энтони Касабьянка", "role": "Chris" }
  ],
  "4541542": [
    { "name": "Уилл Феррелл", "role": "Reggie, озвучка" },
    { "name": "Джейми Фокс", "role": "Bug, озвучка" },
    { "name": "Айла Фишер", "role": "Maggie, озвучка" },
    { "name": "Рэндалл Пак", "role": "Hunter, озвучка" },
    { "name": "Уилл Форте", "role": "Doug" },
    { "name": "Бретт Гельман", "role": "Willy" },
    { "name": "Роб Риггл", "role": "Rolf, озвучка" },
    { "name": "Tyler Antonius", "role": "Jason, озвучка" },
    { "name": "Джош Гэд", "role": "Gus, озвучка" },
    { "name": "София Вергара", "role": "Dolores the Couch, озвучка" }
  ],
  "5599850": [
    { "name": "Хана Маласан", "role": "Purnama" },
    { "name": "Зара Леола", "role": "Kembang" },
    { "name": "Фадли Файсал", "role": "Tekun" },
    { "name": "Кики Нарендра", "role": "Bara" },
    { "name": "Путри Аюдья", "role": "Ramla" },
    { "name": "Яма Карлос", "role": "Santoso" },
    { "name": "Рут Марини", "role": "Ratu Jin" },
    { "name": "Сахира Анджани", "role": "Indah" },
    { "name": "Тотос Расити", "role": "Sidik" },
    { "name": "Агнес Наоми", "role": "Martha" }
  ],
  "5001443": [
    { "name": "Флоренс Пью", "role": "Yelena Belova" },
    { "name": "Харрисон Форд", "role": "Thaddeus «Thunderbolt» Ross" },
    { "name": "Себастиан Стэн", "role": "Bucky Barnes" },
    { "name": "Айо Эдебири", "role": "—" },
    { "name": "Рэйчел Вайс", "role": "Melina Vostokoff" },
    { "name": "Даниэль Брюль", "role": "Baron Zemo, слухи" },
    { "name": "Уайатт Рассел", "role": "John Walker" },
    { "name": "Ольга Куриленко", "role": "Antonia Dreykov" },
    { "name": "Льюис Пуллман", "role": "Robert Reynolds" },
    { "name": "Джеральдин Висванатан", "role": "Mel" }
  ],
  "930000": [
    { "name": "Брайан Крэнстон", "role": "Ned Fleming" },
    { "name": "Джеймс Франко", "role": "Laird Mayhew" },
    { "name": "Зои Дойч", "role": "Stephanie Fleming" },
    { "name": "Меган Маллалли", "role": "Barb Fleming" },
    { "name": "Гриффин Глюк", "role": "Scotty Fleming" },
    { "name": "Кигэн-Майкл Ки", "role": "Gustav" },
    { "name": "Седрик «Развлекатель»", "role": "Lou Dunne (в титрах: Cedric the Entertainer)" },
    { "name": "Зак Перлман", "role": "Kevin Dingle" },
    { "name": "Адам Дивайн", "role": "Tyson Modell" },
    { "name": "Боб Стивенсон", "role": "Jerry in Graphics" }
  ],
  "999563": [
    { "name": "Тарек Будали", "role": "Yassine" },
    { "name": "Филипп Лашо", "role": "Fred" },
    { "name": "Шарлотта Габрис", "role": "Lisa" },
    { "name": "Надеж Дабровски", "role": "Claire (в титрах: Andy)" },
    { "name": "Давид Марсе", "role": "Stan" },
    { "name": "Жюльен Аррути", "role": "L'aveugle" },
    { "name": "Байа Белаль", "role": "Ima" },
    { "name": "Филипп Дюкен", "role": "Dussart" },
    { "name": "Зинедин Суалем", "role": "Le père de Yassine" },
    { "name": "Дуду Маста", "role": "Daoud" }
  ],
  "893245": [
    { "name": "Майкл Китон", "role": "Ray Kroc" },
    { "name": "Ник Офферман", "role": "Dick McDonald" },
    { "name": "Джон Кэрролл Линч", "role": "Mac McDonald" },
    { "name": "Линда Карделлини", "role": "Joan Smith" },
    { "name": "Б.Дж. Новак", "role": "Harry J. Sonneborn" },
    { "name": "Лора Дерн", "role": "Ethel Kroc" },
    { "name": "Джастин Брук", "role": "Fred Turner" },
    { "name": "Кэти Нилэнд", "role": "June Martino" },
    { "name": "Патрик Уилсон", "role": "Rollie Smith" },
    { "name": "Грифф Ферст", "role": "Jim Zien" }
  ],
  "503853": [
    { "name": "Лиам Нисон", "role": "Ottway" },
    { "name": "Фрэнк Грилло", "role": "Diaz" },
    { "name": "Дермот Малруни", "role": "Talget" },
    { "name": "Даллас Робертс", "role": "Henrick" },
    { "name": "Джо Андерсон", "role": "Flannery" },
    { "name": "Нонсо Анози", "role": "Burke" },
    { "name": "Джеймс Бэдж Дейл", "role": "Lewenden" },
    { "name": "Бен Эрнандес Брей", "role": "Hernandez (в титрах: Ben Hernandez)" },
    { "name": "Энн Опеншоу", "role": "Ottway's Wife" },
    { "name": "Питер Гиргес", "role": "Company Clerk" }
  ],
  "725190": [
    { "name": "Майлз Теллер", "role": "Andrew" },
    { "name": "Дж.К. Симмонс", "role": "Fletcher" },
    { "name": "Пол Райзер", "role": "Jim Neimann" },
    { "name": "Мелисса Бенойст", "role": "Nicole" },
    { "name": "Остин Стоуэлл", "role": "Ryan" },
    { "name": "Нат Лэнг", "role": "Carl Tanner" },
    { "name": "Крис Малки", "role": "Uncle Frank" },
    { "name": "Дэймон Гаптон", "role": "Mr. Kramer" },
    { "name": "Сюанн Споук", "role": "Aunt Emma" },
    { "name": "Макс Кэш", "role": "Dorm Neighbor" }
  ],
  "409372": [
    { "name": "Джозеф Гордон-Левитт", "role": "Tom" },
    { "name": "Зои Дешанель", "role": "Summer" },
    { "name": "Джеффри Аренд", "role": "McKenzie" },
    { "name": "Хлоя Грейс Морец", "role": "Rachel" },
    { "name": "Мэттью Грей Гублер", "role": "Paul" },
    { "name": "Кларк Грегг", "role": "Vance" },
    { "name": "Патриша Белчер", "role": "Millie" },
    { "name": "Рейчел Бостон", "role": "Alison" },
    { "name": "Минка Келли", "role": "Autumn - Girl at Interview" },
    { "name": "Чарльз Уолкер", "role": "Millie's New Husband" }
  ],
  "870": [
    { "name": "Том Круз", "role": "David Aames" },
    { "name": "Пенелопа Крус", "role": "Sofia Serrano" },
    { "name": "Кэмерон Диас", "role": "Julie Gianni" },
    { "name": "Курт Рассел", "role": "McCabe" },
    { "name": "Джейсон Ли", "role": "Brian Shelby" },
    { "name": "Ноа Тейлор", "role": "Edmund Ventura" },
    { "name": "Тимоти Сполл", "role": "Thomas Tipp" },
    { "name": "Тильда Суинтон", "role": "Rebecca Dearborn" },
    { "name": "Майкл Шеннон", "role": "Aaron" },
    { "name": "Дилэйна Митчелл", "role": "David's Assistant (в титрах: Delaina Mitchell)" }
  ],
  "5273": [
    { "name": "Майк Майерс", "role": "Shrek, озвучка" },
    { "name": "Эдди Мерфи", "role": "Donkey, озвучка" },
    { "name": "Кэмерон Диас", "role": "Princess Fiona, озвучка" },
    { "name": "Джули Эндрюс", "role": "Queen, озвучка" },
    { "name": "Антонио Бандерас", "role": "Puss In Boots, озвучка" },
    { "name": "Джон Клиз", "role": "King, озвучка" },
    { "name": "Руперт Эверетт", "role": "Prince Charming, озвучка" },
    { "name": "Дженнифер Сондерс", "role": "Fairy Godmother, озвучка" },
    { "name": "Арон Уорнер", "role": "Wolf, озвучка" },
    { "name": "Келли Эсбёри", "role": "Page / Elf / Nobleman / Nobleman's Son, озвучка" }
  ],
  "4484": [
    { "name": "Брендан Фрейзер", "role": "Rick O'Connell" },
    { "name": "Рэйчел Вайс", "role": "Evelyn Carnahan" },
    { "name": "Джон Ханна", "role": "Jonathan Carnahan" },
    { "name": "Арнольд Вослу", "role": "Imhotep" },
    { "name": "Кевин Дж. О’Коннор", "role": "Beni Gabor" },
    { "name": "Джонатан Хайд", "role": "Dr. Allen Chamberlain" },
    { "name": "Одед Фер", "role": "Ardeth Bay" },
    { "name": "Эрик Авари", "role": "Dr. Terrence Bey" },
    { "name": "Стивен Данэм", "role": "Mr. Henderson" },
    { "name": "Кори Джонсон", "role": "Mr. Daniels" }
  ],
  "6589797": [
    { "name": "Кайл Марвин", "role": "Carey" },
    { "name": "Дакота Джонсон", "role": "Julie" },
    { "name": "Майкл Анджело Ковино", "role": "Paul" },
    { "name": "Адриа Архона", "role": "Ashley" },
    { "name": "Николас Браун", "role": "Matt" },
    { "name": "Дэвид Кастанеда", "role": "Fede" },
    { "name": "О. Т. Фагбенли", "role": "Brent" },
    { "name": "Саймон Уэбстер", "role": "Russ" },
    { "name": "Чарльз Гиллеспи", "role": "Jackson" },
    { "name": "Нахема Риччи", "role": "Antoneta (в титрах: Nahema Ricci)" }
  ],
  "14346": [
    { "name": "Чау Бель Дин", "role": "Les Yamakasi - Baseball (Oliver Chen) (в титрах: Chau Belle)" },
    { "name": "Уильямс Белль", "role": "Les Yamakasi - L'Araignée (Bruno Duris)" },
    { "name": "Малик Диуф", "role": "Les Yamakasi - La Belette (Malik N'Diaye)" },
    { "name": "Ян Нутра", "role": "Les Yamakasi - Zicmu (Ousmane Dadjacan)" },
    { "name": "Гилен Н’Губа-Бойеке", "role": "Les Yamakasi - Rocket (Abdou N'Goto)" },
    { "name": "Шарль Перьер", "role": "Les Yamakasi - Sitting Bull (Ousmane Bana)" },
    { "name": "Лоран Пьемонтези", "role": "Les Yamakasi - Tango (Michel Lucas)" },
    { "name": "Махер Камун", "role": "Vincent" },
    { "name": "Бруно Флендер", "role": "Michelin" },
    { "name": "Амель Джемель", "role": "Aila" }
  ],
  "81522": [
    { "name": "Сирил Раффаэлли", "role": "Capt. Damien Tomaso" },
    { "name": "Давид Белль", "role": "Leïto" },
    { "name": "Тони Д’Амарио", "role": "K2" },
    { "name": "Биби Насери", "role": "Taha Bemamud (в титрах: Larbi Naceri)" },
    { "name": "Дани Вериссимо", "role": "Lola (в титрах: Dany Verissimo)" },
    { "name": "Франсуа Шатто", "role": "Krüger" },
    { "name": "Николас Войрион", "role": "Corsini" },
    { "name": "Патрик Оливье", "role": "Le colonel" },
    { "name": "Самир Гесми", "role": "Jamel" },
    { "name": "Жером Гаднер", "role": "K2 boy 1" }
  ]
}
	
// Подставляем актёров, жанры и рейтинг по ID из ссылки
movies.forEach(m => {
    const idMatch = m.link.match(/\/(\d+)\//);
    const id = idMatch ? idMatch[1] : '';
    m.actors = actorsById[id] || [];
    const raw = genresById[id] || [];
    m.genres = raw.filter(g => !EXCLUDE_GENRES.includes(g.toLowerCase()));
    m.ratingKinopoisk = kinopoiskRatings[id] || null;
});

// ===== ВРЕМЕННЫЙ БЛОК: раздаём случайные оценки =====
// УДАЛИТЕ его, когда расставите реальные оценки вручную!
movies.forEach(m => {
    if (!m.rating || m.rating === '—') {
        m.rating = Math.floor(Math.random() * 4) + 1;
    }
});
// ====================================================

// ===== ПОДСЧЁТ СТАТИСТИКИ =====
function updateStats() {
    const filmsSet = new Set();
    const seriesSet = new Set();
    const animeSet = new Set();
    const multSet = new Set();
    const orderedSet = new Set();

    movies.forEach(movie => {
        if (movie.type === 'фильм') filmsSet.add(movie.link);
        else if (movie.type === 'сериал') seriesSet.add(movie.link);
        else if (movie.type === 'аниме') animeSet.add(movie.link);
        else if (movie.type === 'мультфильм') multSet.add(movie.link);

        if (movie.ordered && movie.ordered.includes('Заказ')) {
            orderedSet.add(movie.link);
        }
    });

    document.getElementById('count-films').innerText = filmsSet.size;
    document.getElementById('count-series').innerText = seriesSet.size;
    document.getElementById('count-anime').innerText = animeSet.size;
    document.getElementById('count-mult').innerText = multSet.size;
    document.getElementById('count-ordered').innerText = orderedSet.size;
    document.getElementById('total-count').innerText = movies.length;
}

// ===== ПОДСЧЁТ ТОПОВ =====
function updateTopUsers() {
    const orderedCounts = {};
    const luckyCounts = {};

    movies.forEach(movie => {
        if (!movie.viewer || movie.viewer === '—') return;

        const rawType = (movie.ordered || '').trim();
        const viewers = movie.viewer
            .split('/')
            .map(v => v.trim())
            .filter(v => v && v !== '—');

        if (viewers.length === 0) return;

        if (rawType === 'Заказ / Рулетка') {
            if (viewers[0]) {
                orderedCounts[viewers[0]] = (orderedCounts[viewers[0]] || 0) + 1;
            }
            if (viewers[1]) {
                luckyCounts[viewers[1]] = (luckyCounts[viewers[1]] || 0) + 1;
            }
        } else if (rawType === 'Рулетка' || rawType === 'СкамРулетка') {
            viewers.forEach(v => {
                luckyCounts[v] = (luckyCounts[v] || 0) + 1;
            });
        } else if (rawType === 'Заказ') {
            viewers.forEach(v => {
                orderedCounts[v] = (orderedCounts[v] || 0) + 1;
            });
        }
    });

    const getTop = (counts) => {
        let topCount = 0;
        for (const c of Object.values(counts)) {
            if (c > topCount) topCount = c;
        }
        if (topCount === 0) return { names: ['—'], count: 0 };

        const names = Object.entries(counts)
            .filter(([_, c]) => c === topCount)
            .map(([n]) => n);

        return { names, count: topCount };
    };

    const topOrdered = getTop(orderedCounts);
    const topLucky = getTop(luckyCounts);

    document.getElementById('top-ordered-name').innerText = topOrdered.names.join(', ');
    document.getElementById('top-ordered-count').innerText = topOrdered.count;
    document.getElementById('top-lucky-name').innerText = topLucky.names.join(', ');
    document.getElementById('top-lucky-count').innerText = topLucky.count;
}

// ===== ЗАПОЛНЕНИЕ ТАБЛИЦЫ =====
const tableBody = document.getElementById('table-body');

function renderTable(list) {
    tableBody.innerHTML = '';

        list.forEach(movie => {
        const match = movie.link.match(/\/(\d+)\//);
        const posterId = match ? match[1] : '';

        const row = document.createElement('tr');
        row.className = "odd:bg-[#141414] even:bg-[#181818] hover:!bg-[#1f1c14] cursor-pointer transition-colors relative z-[1] hover:z-20";

        row.innerHTML = `
    <td class="px-4 py-3 text-center text-gray-500 text-sm border-b border-r border-[#1f1f1f]">${movie.num}</td>
    <td class="px-4 py-3 border-b border-r border-[#1f1f1f]">
        <div class="flex items-center gap-3 text-left">
            <div class="flex flex-col items-center shrink-0 w-[46px]">
                <img src="posters/${posterId}.jpg"
                     alt=""
                     class="w-[30px] h-[45px] object-cover rounded-[3px] bg-[#222] transition-transform duration-[250ms] origin-top-left relative z-[1] cursor-zoom-in hover:scale-[4] hover:z-[9999] hover:shadow-[0_12px_30px_rgba(0,0,0,0.7)] hover:rounded-[2px]"
                     onerror="this.style.display='none'">
                ${movie.type
                    ? `<span class="mt-1 text-[8px] text-gray-500 uppercase tracking-wider font-semibold text-center leading-tight">${movie.type}</span>`
                    : ''}
            </div>
            <div class="flex flex-col min-w-0 flex-1 items-start">
                <a href="${movie.link}" target="_blank" class="text-gray-200 no-underline text-[18px] font-semibold hover:text-[#e5b95c] transition-colors break-words">${movie.title}</a>
                ${movie.genres && movie.genres.length > 0
                    ? `<span class="text-[9px] text-gray-500 uppercase tracking-wider font-semibold opacity-80 mt-0.5">${movie.genres.join(' · ')}</span>`
                    : ''}
            </div>
            <div class="flex items-center gap-2 shrink-0 ml-auto">
                ${movie.ordered && movie.ordered !== '—'
                    ? `<span class="text-xs px-2 py-1 rounded bg-[#1f1a0e] border border-[#e5b95c]/30 text-[#e5b95c] whitespace-nowrap">${movie.ordered}</span>`
                    : ''}
                ${movie.chance
                    ? `<span title="Шанс лота в рулетке" class="text-xs px-2 py-1 rounded bg-red-500/10 border border-red-500/30 text-red-400 font-bold whitespace-nowrap">${movie.chance}</span>`
                    : ''}
            </div>
        </div>
    </td>
    <td class="px-2 py-3 text-center text-gray-400 text-sm border-b border-r border-[#1f1f1f] break-all leading-tight">${movie.viewer}</td>
    <td class="px-1 py-3 text-center text-gray-400 text-sm border-b border-r border-[#1f1f1f] whitespace-nowrap">${movie.date}</td>
    <td class="px-2 md:px-3 py-3 text-center border-b border-r border-[#1f1f1f]">
        <div class="flex items-center justify-center gap-1.5 flex-wrap">
            ${(movie.rating >= 1 && movie.rating <= 4)
                ? `<img src="icons2/${movie.rating}stars.png" alt="${movie.rating}★" class="inline-block h-[18px] w-auto shrink-0 align-middle">`
                : `<span class="text-gray-500 text-sm">${movie.rating}</span>`
            }
            ${movie.ratingKinopoisk
                ? `<span class="flex items-center gap-1 whitespace-nowrap shrink-0">
                       <img src="icons2/kp.png" alt="Кинопоиск" class="h-[18px] w-auto shrink-0">
                       <span class="text-xs text-gray-300 font-semibold">${movie.ratingKinopoisk}</span>
                   </span>`
                : ''
            }
        </div>
    </td>
    <td class="hidden lg:table-cell px-4 py-3 text-center text-gray-500 text-xs border-b border-[#1f1f1f] break-words">${movie.comment}</td>
`;

// Создаём строку с расширенной информацией (скрыта по умолчанию)
const detailRow = document.createElement('tr');
detailRow.className = 'hidden';
detailRow.innerHTML = `
    <td colspan="6" class="px-6 pt-2 pb-5 bg-[#0d0d0d] border-b border-[#222]">

        <!-- Кнопки-вкладки внутри строки -->
        <div class="detail-tabs flex flex-wrap gap-1 mb-4">
            <button type="button" class="detail-tab-btn active" data-dtab="cast">В главных ролях</button>
            <button type="button" class="detail-tab-btn" data-dtab="info">Информация о фильме</button>
            <button type="button" class="detail-tab-btn" data-dtab="facts">Интересные факты</button>
            <button type="button" class="detail-tab-btn" data-dtab="related">Сиквелы и приквелы</button>
        </div>

        <!-- 1. Актёры -->
        <div class="detail-tab-content" data-dcontent="cast">
            ${movie.actors && movie.actors.length > 0
                ? `
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-3 max-w-[1200px]">
                        ${movie.actors.map(a => `
                            <div class="flex flex-col min-w-0">
                                <span class="text-gray-200 text-sm font-semibold truncate">${a.name}</span>
                                <span class="text-gray-500 text-xs truncate">${a.role}</span>
                            </div>
                        `).join('')}
                    </div>
                `
                : `<p class="text-gray-500 text-sm">Информация об актёрах недоступна</p>`
            }
        </div>

        <!-- 2. Информация о фильме -->
        <div class="detail-tab-content hidden" data-dcontent="info">
            ${movie.info
                ? (typeof movie.info === 'string'
                    ? `<p class="text-gray-300 text-sm leading-relaxed max-w-[900px]">${movie.info}</p>`
                    : `<div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 max-w-[800px]">
                        ${Object.entries(movie.info).map(([k, v]) => `
                            <div class="flex gap-2 text-sm">
                                <span class="text-gray-500 shrink-0">${k}:</span>
                                <span class="text-gray-200">${v}</span>
                            </div>
                        `).join('')}
                       </div>`)
                : `<p class="text-gray-500 text-sm">Информация о фильме пока не добавлена</p>`
            }
        </div>

        <!-- 3. Интересные факты -->
        <div class="detail-tab-content hidden" data-dcontent="facts">
            ${movie.facts && movie.facts.length > 0
                ? `<ul class="space-y-2 text-sm text-gray-300 leading-snug max-w-[900px]">
                    ${movie.facts.map(f => `
                        <li class="flex items-start gap-2">
                            <span class="text-[#e5b95c] shrink-0">•</span>
                            <span>${f}</span>
                        </li>
                    `).join('')}
                   </ul>`
                : `<p class="text-gray-500 text-sm">Интересные факты пока не добавлены</p>`
            }
        </div>

        <!-- 4. Сиквелы и приквелы -->
        <div class="detail-tab-content hidden" data-dcontent="related">
            ${movie.related && movie.related.length > 0
                ? `<div class="flex flex-wrap gap-2">
                    ${movie.related.map(r => `
                        <a href="${r.link || '#'}" target="_blank"
                           class="px-3 py-1.5 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-xs text-gray-300 hover:text-[#e5b95c] hover:border-[#e5b95c]/40 transition-colors">
                            ${r.title}${r.year ? ` (${r.year})` : ''}
                        </a>
                    `).join('')}
                   </div>`
                : `<p class="text-gray-500 text-sm">Сиквелы и приквелы не найдены</p>`
            }
        </div>
    </td>
`;

// Логика переключения вкладок внутри раскрытой строки
const detailTabBtns = detailRow.querySelectorAll('.detail-tab-btn');
const detailTabContents = detailRow.querySelectorAll('.detail-tab-content');

detailTabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const tab = btn.getAttribute('data-dtab');
        detailTabBtns.forEach(b => b.classList.toggle('active', b === btn));
        detailTabContents.forEach(c => {
            c.classList.toggle('hidden', c.getAttribute('data-dcontent') !== tab);
        });
    });
});

// Обработчик клика на строку (кроме ссылки-названия)
row.addEventListener('click', (e) => {
    // Если клик был по ссылке — не раскрываем строку, пусть работает переход
    if (e.target.closest('a')) return;

    // На экранах < 1024 (md и tablet) раскрытие строк не работает
    if (window.innerWidth < 1024) return;

    detailRow.classList.toggle('hidden');
});

tableBody.appendChild(row);
tableBody.appendChild(detailRow);
    });

// ===== МОБИЛЬНЫЕ КАРТОЧКИ (для экранов < 768px) =====
const mobileContainer = document.getElementById('mobile-cards');
if (mobileContainer) {
    mobileContainer.innerHTML = list.map(movie => {
        const match = movie.link.match(/\/(\d+)\//);
        const posterId = match ? match[1] : '';

        const ratingHtml = (movie.rating >= 1 && movie.rating <= 4)
            ? `<img src="icons2/${movie.rating}stars.png" alt="" class="inline-block h-[16px] w-auto align-middle">`
            : `<span class="text-gray-500 text-xs">${movie.rating}</span>`;

        const kpHtml = movie.ratingKinopoisk
            ? `<span class="flex items-center gap-1"><img src="icons2/kp.png" alt="" class="h-[16px] w-auto"><span class="text-xs text-gray-300 font-semibold">${movie.ratingKinopoisk}</span></span>`
            : '';

        return `
            <div class="p-4 cursor-pointer hover:bg-[#141414] transition-colors" data-mnum="${movie.num}">
            <div class="flex gap-3">
                <div class="shrink-0 w-[70px]">
                    <img src="posters/${posterId}.jpg" alt="" class="w-full aspect-[2/3] object-cover rounded bg-[#222]" onerror="this.style.display='none'">
                    ${movie.type ? `<div class="mt-1 text-[9px] text-gray-500 uppercase tracking-wider font-semibold text-center">${movie.type}</div>` : ''}
                </div>
                <div class="flex-1 min-w-0">
                    <a href="${movie.link}" target="_blank" class="block text-gray-200 text-[15px] font-semibold leading-snug hover:text-[#e5b95c] transition-colors">${movie.title}</a>
                    ${movie.genres && movie.genres.length ? `<div class="text-[9px] text-gray-500 uppercase tracking-wider font-semibold mt-1">${movie.genres.join(' · ')}</div>` : ''}
                    <div class="flex items-center gap-2 mt-2 flex-wrap">${ratingHtml}${kpHtml}</div>
                    <div class="flex items-center gap-2 mt-2 flex-wrap">
                        ${movie.ordered && movie.ordered !== '—' ? `<span class="text-[10px] px-2 py-0.5 rounded bg-[#1f1a0e] border border-[#e5b95c]/30 text-[#e5b95c]">${movie.ordered}</span>` : ''}
                        ${movie.chance ? `<span class="text-[10px] px-2 py-0.5 rounded bg-red-500/10 border border-red-500/30 text-red-400 font-bold">${movie.chance}</span>` : ''}
                    </div>
                    <div class="text-[11px] text-gray-500 mt-2 break-words">
                        ${movie.viewer !== '—' ? `<span class="break-all">${movie.viewer}</span> · ` : ''}${movie.date}
                    </div>
                    ${movie.comment ? `<div class="text-[11px] text-gray-500 mt-1 italic">${movie.comment}</div>` : ''}
                </div>
            </div>

            <div class="mt-3 hidden mobile-detail">
                <div class="detail-tabs flex flex-wrap gap-1 mb-3">
    <button type="button" class="detail-tab-btn active" data-dtab="cast">В главных ролях</button>
    <button type="button" class="detail-tab-btn" data-dtab="info">Информация о фильме</button>
    <button type="button" class="detail-tab-btn" data-dtab="facts">Интересные факты</button>
    <button type="button" class="detail-tab-btn" data-dtab="related">Сиквелы и приквелы</button>
                </div>

                <div class="detail-tab-content" data-dcontent="cast">
                    ${movie.actors && movie.actors.length
                        ? `<div class="grid grid-cols-1 gap-y-2">${movie.actors.map(a => `
                            <div><div class="text-gray-200 text-sm font-semibold">${a.name}</div><div class="text-gray-500 text-xs">${a.role}</div></div>
                          `).join('')}</div>`
                        : '<p class="text-gray-500 text-sm">Нет данных</p>'}
                </div>

                <div class="detail-tab-content hidden" data-dcontent="info">
                    ${movie.info
                        ? `<p class="text-gray-300 text-sm leading-relaxed">${typeof movie.info === 'string' ? movie.info : Object.entries(movie.info).map(([k,v])=>`<b class="text-gray-500">${k}:</b> ${v}`).join('<br>')}</p>`
                        : '<p class="text-gray-500 text-sm">Нет данных</p>'}
                </div>

                <div class="detail-tab-content hidden" data-dcontent="facts">
                    ${movie.facts && movie.facts.length
                        ? `<ul class="space-y-2 text-sm text-gray-300">${movie.facts.map(f=>`<li>• ${f}</li>`).join('')}</ul>`
                        : '<p class="text-gray-500 text-sm">Нет данных</p>'}
                </div>

                <div class="detail-tab-content hidden" data-dcontent="related">
                    ${movie.related && movie.related.length
                        ? movie.related.map(r=>`<a href="${r.link||'#'}" target="_blank" class="inline-block mr-2 mb-2 px-3 py-1.5 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-xs text-gray-300">${r.title}${r.year?` (${r.year})`:''}</a>`).join('')
                        : '<p class="text-gray-500 text-sm">Нет данных</p>'}
                </div>
            </div>
        </div>`;
    }).join('');

    // Раскрытие карточки и переключение вкладок
    mobileContainer.querySelectorAll('[data-mnum]').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('a')) return;
            if (e.target.closest('.detail-tab-btn')) return;
            card.querySelector('.mobile-detail').classList.toggle('hidden');
        });

        card.querySelectorAll('.detail-tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const tab = btn.getAttribute('data-dtab');
                card.querySelectorAll('.detail-tab-btn').forEach(b => b.classList.toggle('active', b === btn));
                card.querySelectorAll('.detail-tab-content').forEach(c => {
                    c.classList.toggle('hidden', c.getAttribute('data-dcontent') !== tab);
                });
            });
        });
    });
}

}

// ===== ОБНОВЛЕНИЕ БАННЕРОВ ПОСЛЕДНИМИ ФИЛЬМАМИ =====
function updateBannerSlides() {
    // Берем последние 5 элементов из общего массива (самые свежие добавления)
    const lastMovies = movies.slice(-5).reverse();
    const slides = document.querySelectorAll('.banner-slide');

    slides.forEach((slide, index) => {
        const movie = lastMovies[index];
        if (!movie) return;

        const titleEl = slide.querySelector('.banner-title');
        const dateEl = slide.querySelector('.banner-date');
        const metaEl = slide.querySelector('.banner-meta');

        if (titleEl) titleEl.textContent = movie.title;
        if (dateEl) dateEl.textContent = movie.date;

        if (metaEl) {
            let metaText = '';
            if (movie.ordered && movie.ordered !== '—') {
                metaText = (movie.viewer && movie.viewer !== '—') ? `${movie.ordered} · ${movie.viewer}` : movie.ordered;
            } else if (movie.viewer && movie.viewer !== '—') {
                metaText = movie.viewer;
            }
            metaEl.textContent = metaText;
        }
    });
}

// ===== ПОИСК ПО НАЗВАНИЮ =====
const searchInput = document.getElementById('search-input');
const totalCountEl = document.getElementById('total-count');
const catalogEl = document.getElementById('catalog');

if (searchInput) {
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();

        const filtered = query
            ? movies.filter(m => m.title.toLowerCase().includes(query))
            : movies;

        renderTable(filtered);
        if (totalCountEl) totalCountEl.innerText = filtered.length;

        if (catalogEl) {
            const rect = catalogEl.getBoundingClientRect();
            if (rect.top < 0) {
                catalogEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
}

// ===== ИНИЦИАЛИЗАЦИЯ ТАЙМЕРА БАННЕРА =====
(function initBanner() {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.banner-dot');
    if (slides.length === 0) return;

    let current = 0;

    function showSlide(index) {
        slides.forEach((s, i) => s.classList.toggle('active', i === index));
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
        current = index;
    }

    setInterval(() => {
        showSlide((current + 1) % slides.length);
    }, 3000);

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => showSlide(i));
    });

    showSlide(0);
})();

// ===== ТОП 3 ЖАНРА =====
function updateTopGenres() {
    const counts = {};

    movies.forEach(m => {
        (m.genres || []).forEach(g => {
            counts[g] = (counts[g] || 0) + 1;
        });
    });

    const sorted = Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

    const el = document.getElementById('top-genres-list');
    if (!el) return;

    el.innerHTML = sorted.map(([genre, count], idx) => {
        const capitalized = genre.charAt(0).toUpperCase() + genre.slice(1);
        return `<div class="flex justify-between items-center gap-2">
            <span class="text-gray-200">${idx + 1}. ${capitalized}</span>
            <span class="text-amber-500 font-bold">${count}</span>
        </div>`;
    }).join('');
}

// ===== АВТО-ПЕРЕСЧЁТ НОМЕРОВ ПО ПОРЯДКУ В МАССИВЕ =====
movies.forEach((m, i) => { m.num = i + 1; });
// ======================================================

// ===== ЗАПУСК =====
renderTable(movies);
updateStats();
updateTopUsers();
updateBannerSlides();
updateTopGenres();

document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const navTabLinks = document.querySelectorAll('.nav-tab-link');

    // Функция переключения вкладки
    function switchTab(tabId) {
        tabBtns.forEach(b => {
            if (b.getAttribute('data-tab') === tabId) {
                b.classList.add('bg-[#1a1a1a]', 'border-[#e5b95c]', 'text-[#e5b95c]');
                b.classList.remove('bg-[#141414]', 'border-[#222]', 'text-gray-400');
            } else {
                b.classList.remove('bg-[#1a1a1a]', 'border-[#e5b95c]', 'text-[#e5b95c]');
                b.classList.add('bg-[#141414]', 'border-[#222]', 'text-gray-400');
            }
        });

        tabContents.forEach(content => content.classList.add('hidden'));
        const targetContent = document.getElementById(`tab-${tabId}`);
        if (targetContent) {
            targetContent.classList.remove('hidden');
        }
    }

    // Клик по кнопкам вкладок над блоком
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Клик по ссылкам в верхнем меню навигации
    navTabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const tabId = link.getAttribute('data-target-tab');
            if (tabId) {
                switchTab(tabId);
            }
        });
    });
});

// ===== СЛУЧАЙНАЯ ЦИТАТА В ПОДВАЛЕ =====
const quotes = [
    { text: "Большинство дней в году не запоминаются ничем. Они начинаются. Они кончаются.", author: "", film: "500 дней лета (2009)" },
    { text: "Жизнь — как коробка шоколадных конфет. Никогда не знаешь, что внутри.", author: "Форрест Гамп", film: "Форрест Гамп (1994)" },
    { text: "То, что ты показываешь характер, вовсе не говорит о том, что этот самый характер у тебя есть.", author: "Бутч Кулидж", film: "Криминальное чтиво (1994)" },
    { text: "Вчера моя жизнь шла в одном направлении. Сегодня — в другом.", author: "Исаак Сакс", film: "Облачный атлас (2012)" },
    { text: "Но что есть любой океан, как не множество капель?", author: "Адам Юинг", film: "Облачный атлас (2012)" },
    { text: "Что есть жизнь, как не погоня за грезами?", author: "Эммануэль", film: "Ванильное небо (2001)" },
    { text: "Людям нравится думать, что жизнь имеет смысл даже в тех моментах, когда она полна бессмысленных страданий.", author: "Иеремия Наринг", film: "Остров проклятых (2009)" },
    { text: "Что по-твоему лучше: жить монстром или умереть человеком?", author: "Эдвард Дэниелс", film: "Остров проклятых (2009)" },
    { text: "Целая жизнь нужна, чтобы по-настоящему себя понять, и даже тогда можешь ошибиться.", author: "Эд Том Белл", film: "Старикам тут не место (2007)" },
    { text: "Жизни едва хватает, чтобы толком освоить хотя бы одно дело.", author: "Раст Коул", film: "Настоящий детектив (2014)" },
    { text: "Быть безумным в безумном мире — это не безумие, это нормальность!", author: "Лесли", film: "Конец ***го мира (сериал 2017 – 2019)" },
    { text: "Когда у тебя есть деньги, никто по-настоящему не становится твоим другом.", author: "Линнет Риджуэй-Дойл", film: "Смерть на Ниле (2020)" },
    { text: "Любовь не самое главное в жизни, мадемуазель. Мы думаем так только по молодости лет.", author: "Эркюль Пуаро", film: "Смерть на Ниле (2020)" },
    { text: "Если хочешь изменить мир, не спрашивай разрешения.", author: "Виктор", film: "Аркейн (сериал 2021 – 2024)" },
    { text: "В конце концов, жизнь – это коллекция упущенных возможностей.", author: "Клаудия Тидеманн", film: "Тьма (сериал 2017 – 2020)" },
    { text: "Этот дом так полон людей, что меня от этого тошнит! Когда я вырасту и женюсь, я буду жить один!", author: "Кевин Маккаллистер", film: "Один дома (1990)" },
    { text: "Ты думаешь, что можешь убежать от прошлого? Прошлое всегда находит тебя.", author: "Агент 47", film: "Хитмэн (2007)" },
    { text: "Иногда нужно стать кем-то другим, чтобы стать самим собой.", author: "Том Рипли", film: "Талантливый мистер Рипли (1999)" },
    { text: "Ложь становится правдой, если в неё достаточно долго верить.", author: "Том Рипли", film: "Талантливый мистер Рипли (1999)" },
    { text: "В этом мире сильные поедают слабых. Это закон природы.", author: "Кен Канеки", film: "Токийский гуль (сериал 2014 – 2018)" },
    { text: "Ошибка — это не провал. Ошибка — это возможность стать сильнее.", author: "Кен Канеки", film: "Токийский гуль (сериал 2014 – 2018)" },
    { text: "Иногда нужно спуститься во тьму, чтобы найти свет.", author: "Ральф Сарчи", film: "Избави нас от лукавого (2014)" },
    { text: "Не бойся имени. Бойся самого человека.", author: "Альбус Дамблдор", film: "Гарри Поттер и философский камень (2001)" },
    { text: "Выбор делает нас теми, кто мы есть на самом деле.", author: "Альбус Дамблдор", film: "Гарри Поттер и философский камень (2001)" },
    { text: "Слова — наш самый неисчерпаемый источник магии.", author: "Альбус Дамблдор", film: "Гарри Поттер и философский камень (2001)" },
    { text: "Счастье можно найти даже в тёмные времена, если не забывать обращаться к свету.", author: "Альбус Дамблдор", film: "Гарри Поттер и узник Азкабана (2004)" },
    { text: "Я верю, что правда и красота существуют и в самых простых вещах.", author: "Сириус Блэк", film: "Гарри Поттер и узник Азкабана (2004)" },
    { text: "Различия в привычках и языке не имеют значения, если наши цели идентичны и сердца открыты.", author: "Альбус Дамблдор", film: "Гарри Поттер и Кубок огня (2005)" },
    { text: "Мы сильны только тогда, когда едины, и слабы, когда разделены.", author: "Альбус Дамблдор", film: "Гарри Поттер и Кубок огня (2005)" },
    { text: "Великие перемены начинаются с маленьких шагов.", author: "Гарри Поттер", film: "Гарри Поттер и Кубок огня (2005)" },
    { text: "Молодость не может знать, как чувствует себя старость... но старики забывают, каково быть молодым.", author: "Альбус Дамблдор", film: "Гарри Поттер и Орден Феникса (2007)" },
    { text: "Любовь — самая мощная магия из всех существующих.", author: "Альбус Дамблдор", film: "Гарри Поттер и Принц-полукровка (2009)" },
    { text: "Где любовь, там и жизнь.", author: "Лили Поттер", film: "Гарри Поттер и Дары Смерти: Часть I (2010)" },
    { text: "После стольких лет? Всегда.", author: "Северус Снейп", film: "Гарри Поттер и Дары Смерти: Часть II (2011)" },
    { text: "Доверие зарабатывается действиями, а не словами.", author: "Агент Джонсон", film: "Семья шпиона (сериал 2022 – ...)" },
    { text: "Мы должны продолжать двигаться вперед, несмотря ни на что.", author: "Финч", film: "Финч (2021)" },
    { text: "Дормамму! Я пришел договориться!", author: "Доктор Стрэндж", film: "Доктор Стрэндж (2016)" },
    { text: "Мы не контролируем время. Время контролирует нас.", author: "Древняя", film: "Доктор Стрэндж (2016)" },
    { text: "Пацан сказал — пацан сделал.", author: "Андрей Пальто", film: "Слово пацана. Кровь на асфальте (2023)" },
    { text: "Кровь смывается, а позор остается навсегда.", author: "Вова Адидас", film: "Слово пацана. Кровь на асфальте (2023)" },
    { text: "Сложное ломается, простое работает.", author: "Михаил Калашников", film: "Калашников (2020)" },
    { text: "Иногда нужно нарушить правила, чтобы победить.", author: "Гас Марч-Филлипс", film: "Министерство неджентльменских дел (2024)" },
    { text: "Война ведется не только на поле боя.", author: "Гас Марч-Филлипс", film: "Министерство неджентльменских дел (2024)" },
    { text: "Любовь — это единственное доступное нам чувство, способное выйти за пределы времени и пространства.", author: "Амелия Бранд", film: "Интерстеллар (2014)" },
    { text: "Мы здесь для того, чтобы стать воспоминанием наших детей.", author: "Джозеф Купер", film: "Интерстеллар (2014)" },
    { text: "Первое правило бойцовского клуба: не говорить о бойцовском клубе.", author: "Тайлер Дёрден", film: "Бойцовский клуб (1999)" },
    { text: "Лишь утратив всё до конца, мы обретаем свободу.", author: "Тайлер Дёрден", film: "Бойцовский клуб (1999)" },
    { text: "Единственное, что стоит между тобой и твоей целью — это bullshit-история, которую ты продолжаешь рассказывать себе о том, почему ты не можешь её достичь.", author: "Джордан Белфорт", film: "Волк с Уолл-стрит (2013)" },
    { text: "Самые страшные монстры — те, что живут в наших головах.", author: "Люсия", film: "Таинственный лес (2004)" },
    { text: "Измени одно маленькое событие в прошлом, и всё будущее изменится.", author: "Эван Трэборн", film: "Эффект бабочки (2003)" },
    { text: "Чем чаще ты вспоминаешь прошлое, тем больше сожалений.", author: "Андреа Треборн", film: "Эффект бабочки (2003)" },
    { text: "Прошлое — это ловушка, из которой нельзя выбраться.", author: "Эван Трэборн", film: "Эффект бабочки (2003)" },
    { text: "Мы не можем контролировать последствия наших действий.", author: "Эван Трэборн", film: "Эффект бабочки (2003)" },
    { text: "Даже самый маленький человек может изменить ход будущего.", author: "Гэндальф", film: "Властелин колец: Братство кольца (2001)" },
    { text: "Не все те, кто блуждают, потеряны.", author: "Бильбо Бэггинс", film: "Властелин колец: Братство кольца (2001)" },
    { text: "Семья — это всё. Без семьи ты никто.", author: "Реджи Крэй", film: "Легенда (2015)" },
    { text: "Страх — лучший инструмент контроля.", author: "Реджи Крэй", film: "Легенда (2015)" },
    { text: "Лучшая любовь — это та, которая пробуждает душу.", author: "Ной Кэлхун", film: "Дневник памяти (2004)" },
    { text: "Жизнь прекрасна, если ты умеешь её ценить.", author: "Уильям Пэрриш", film: "Знакомьтесь Джо Блэк (1998)" },
    { text: "Время — самый драгоценный ресурс.", author: "Джо Блэк", film: "Знакомьтесь Джо Блэк (1998)" },
    { text: "Голливуд изменился, но магия осталась.", author: "Рик Далтон", film: "Однажды в… Голливуде (2019)" }
];

function renderRandomQuote() {
    const block = document.getElementById('quote-block');
    if (!block || quotes.length === 0) return;

    const q = quotes[Math.floor(Math.random() * quotes.length)];

    block.innerHTML = `
    <p class="text-gray-200 text-l md:text-xl italic leading-relaxed mb-4 max-w-[1300px] mx-auto">${q.text}</p>
    <div class="flex items-center justify-center gap-3 text-m flex-wrap">
        ${q.author ? `<span class="text-[#e5b95c] font-bold tracking-wide">${q.author}</span>` : ''}
        ${q.author ? '<span class="text-gray-600">·</span>' : ''}
        <span class="text-gray-500">${q.film}</span>
    </div>
`;
}

renderRandomQuote();
// =====================================

// ===== ДИНАМИЧЕСКАЯ ВЫСОТА STICKY-ЭЛЕМЕНТОВ =====
function updateStickyOffsets() {
    const nav = document.querySelector('nav');
    const searchWrap = document.querySelector('.sticky-search');
    if (!nav) return;

    document.documentElement.style.setProperty('--nav-height', nav.offsetHeight + 'px');

    if (searchWrap) {
        document.documentElement.style.setProperty('--search-height', searchWrap.offsetHeight + 'px');
    }
}

window.addEventListener('load', updateStickyOffsets);       // ← оставить
window.addEventListener('resize', updateStickyOffsets);     // ← оставить

// Реакция на изменение размеров самих sticky-элементов
if (window.ResizeObserver) {
    const ro = new ResizeObserver(updateStickyOffsets);
    const nav = document.querySelector('nav');
    const searchWrap = document.querySelector('.sticky-search');
    if (nav) ro.observe(nav);
    if (searchWrap) ro.observe(searchWrap);
}

// Надёжный пересчёт: ждём, пока высоты перестанут меняться
(function settleStickyOffsets() {
    let lastNav = -1;
    let lastSearch = -1;
    let stableFrames = 0;
    const startTime = Date.now();

    function tick() {
        const nav = document.querySelector('nav');
        const searchWrap = document.querySelector('.sticky-search');
        const navH = nav ? nav.offsetHeight : 0;
        const searchH = searchWrap ? searchWrap.offsetHeight : 0;

        if (navH === lastNav && searchH === lastSearch) {
            stableFrames++;
        } else {
            stableFrames = 0;
            lastNav = navH;
            lastSearch = searchH;
            updateStickyOffsets();
        }

        if (stableFrames < 10 && Date.now() - startTime < 3000) {
            requestAnimationFrame(tick);
        }
    }

    requestAnimationFrame(tick);
})();

window.addEventListener('load', updateStickyOffsets);
window.addEventListener('resize', updateStickyOffsets);