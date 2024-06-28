import todoImage from "../../../assets/images/projects/todo.svg";
import socialImage from "../../../assets/images/projects/network.svg";
import cardsImage from "../../../assets/images/projects/cards.svg";
import taxiImage from "../../../assets/images/projects/taxi.svg";
import art from "../../../assets/images/projects/art.svg";
import pizza from "../../../assets/images/projects/pizza.svg";
import weather from "../../../assets/images/projects/weather.svg";
import counter from "../../../assets/images/projects/counter.svg";
import {generateId} from "../../../common/utils/generate-id/generateId";

export const ProjectData = {
    en: {
        project: [
            {
                id: generateId(),
                title: 'DUAL COUNTER',
                description: 'A React app allows users to set the initial and max value of the counter, as well as increase, decrease, reset the counter. The project with Redux, TS, Local Storage',
                bg: {
                    backgroundImage: 'url(' + counter + ')',
                },
                sprId: 'counter',
                demoBtn: 'Demo',
                demoLink: 'https://dual-counter.netlify.app/',
                codeLink: 'https://github.com/veluat/dual-counter-app',
                codeBtn: 'Code'
            },
            {
                id: generateId(),
                title: 'PIZZA-ORDERING',
                description: 'Pizza Ordering Online Store. React Project with Redux Toolkit, Axios, Lodash.Debounce, TypeScript, React Router Dom, React Content Loader (skeleton), Prettier',
                bg: {
                    backgroundImage: 'url(' + pizza + ')',
                },
                sprId: 'pizza-ordering',
                demoBtn: 'Demo',
                demoLink: 'https://pizza-ordering-layout.netlify.app/',
                codeLink: 'https://github.com/veluat/pizza-ordering-layout',
                codeBtn: 'Code'
            },
            {
                id: generateId(),
                title: 'TO-DO LIST',
                description: 'Create, edit and delete yours To-do lists, manage your tasks. React project with Redux Toolkit, TS, MUI, React Router Dom, Axios, Formik',
                bg: {
                    backgroundImage: 'url(' + todoImage + ')',
                },
                sprId: 'todo-list',
                demoBtn: 'Demo',
                demoLink: 'https://veluat.github.io/task-manager-app',
                codeLink: 'https://github.com/veluat/task-manager-app',
                codeBtn: 'Code'
            },
            {
                id: generateId(),
                title: 'SOCIAL NETWORK',
                description: 'A social network that implements adding and deleting friends, authorization, sending messages etc. React project with Redux, Axios, TS, React Hook Form',
                bg: {
                    backgroundImage: 'url(' + socialImage + ')',
                },
                sprId: 'network',
                demoBtn: 'Demo',
                demoLink: 'https://veluat.github.io/social-network-app',
                codeLink: 'https://github.com/veluat/social-network-app',
                codeBtn: 'Code'
            },
            {
                id: generateId(),
                title: 'TAXI SERVICES',
                description: 'Example of a business website. Images and text are created by AI. The design was developed by me. Used React, CSS, JavaScript, React Router Dom',
                bg: {
                    backgroundImage: 'url(' + taxiImage + ')',
                },
                sprId: 'taxi',
                demoBtn: 'Demo',
                demoLink: 'https://taxi-services-layout.netlify.app/',
                codeLink: 'https://github.com/veluat/taxi-services-layout',
                codeBtn: 'Code'
            },
            {
                id: generateId(),
                title: 'CREATIVE ART',
                description: 'A web development project for a simple and secure platform for purchasing and exchanging digital ART and NFTs. React project with TS, Styled Components',
                bg: {
                    backgroundImage: 'url(' + art + ')',
                },
                sprId: 'creative-art',
                demoBtn: 'Demo',
                demoLink: 'https://veluat.github.io/creative-art-layout',
                codeLink: 'https://github.com/veluat/creative-art-layout',
                codeBtn: 'Code'
            },
            {
                id: generateId(),
                title: 'WEATHER-MATTER',
                description: 'SPA allows users to view the weather information of a specific city. React project with Redux-Toolkit, Axios, React router dom',
                bg: {
                    backgroundImage: 'url(' + weather + ')',
                },
                sprId: 'weather',
                demoBtn: 'Demo',
                demoLink: 'https://weather-matter.netlify.app/',
                codeLink: 'https://github.com/veluat/weather-matter-app',
                codeBtn: 'Code'
            },
            {
                id: generateId(),
                title: 'LEARNING CARDS',
                description: 'Flashcard learning app to help you learn new topics. React project with Redux Toolkit, Axios, TS, React Hook Form, Zod, React Router Dom, Git, Radix UI',
                bg: {
                    backgroundImage: 'url(' + cardsImage + ')',
                },
                sprId: 'cards',
                demoBtn: 'Coming soon',
                demoLink: '#',
                codeLink: '#',
                codeBtn: 'Code'
            },
        ],
        text: 'My Projects',
        shadowText: 'PORTFOLIO'
    },
    ru: {
        project: [
            {
                id: generateId(),
                title: 'СЧЕТЧИК (2 варианта UI)',
                description: '2 UI Счетчик позволяет устанавливать начальное и максимальное значение, увеличивать, уменьшать и сбрасывать счетчик. Проект React с Redux, TS, localstorage',
                bg: {
                    backgroundImage: 'url(' + counter + ')',
                },
                sprId: 'counter',
                demoBtn: 'Демо',
                demoLink: 'https://dual-counter.netlify.app/',
                codeLink: 'https://github.com/veluat/dual-counter-app',
                codeBtn: 'Код'
            },
            {
                id: generateId(),
                title: 'ЗАКАЗ ПИЦЦЫ ОНЛАЙН',
                description: 'Интернет-магазин по заказу пиццы. Проект React с Redux Toolkit, Axios, Lodash.Debounce, TS, React Router Dom, React Content Loader (skeleton), Prettier',
                bg: {
                    backgroundImage: 'url(' + pizza + ')',
                },
                sprId: 'pizza-ordering',
                demoBtn: 'Демо',
                demoLink: 'https://pizza-ordering-layout.netlify.app/',
                codeLink: 'https://github.com/veluat/pizza-ordering-layout',
                codeBtn: 'Код'
            },
            {
                id: generateId(),
                title: 'ПЛАНЕР',
                description: 'Создавайте, редактируйте и удаляйте свои списки дел, управляйте задачами, которые настраиваются. Проект React с Redux Toolkit, TS, MUI, React Router, Axios, Formik',
                bg: {
                    backgroundImage: 'url(' + todoImage + ')',
                },
                sprId: 'todo-list',
                demoBtn: 'Демо',
                demoLink: 'https://veluat.github.io/task-manager-app',
                codeLink: 'https://github.com/veluat/task-manager-app',
                codeBtn: 'Код'
            },
            {
                id: generateId(),
                title: 'СОЦИАЛЬНАЯ СЕТЬ',
                description: 'Социальная сеть, реализующая добавление и удаление друзей, авторизацию, отправку сообщений и т. д. Проект React с Redux, Axios, TypeScript, React Hook Form',
                bg: {
                    backgroundImage: 'url(' + socialImage + ')',
                },
                sprId: 'network',
                demoBtn: 'Демо',
                demoLink: 'https://veluat.github.io/social-network-app',
                codeLink: 'https://github.com/veluat/social-network-app',
                codeBtn: 'Код'
            },
            {
                id: generateId(),
                title: 'УСЛУГИ ТАКСИ',
                description: 'Пример бизнес-сайта. Изображения и текст созданы искусственным интеллектом. Дизайн разработан мной. Использованы React, CSS, JavaScript, React Router Dom',
                bg: {
                    backgroundImage: 'url(' + taxiImage + ')',
                },
                sprId: 'taxi',
                demoBtn: 'Демо',
                demoLink: 'https://taxi-services-layout.netlify.app/',
                codeLink: 'https://github.com/veluat/taxi-services-layout',
                codeBtn: 'Код'
            },
            {
                id: generateId(),
                title: 'ВЕБ-ТВОРЧЕСТВО',
                description: 'Проект веб-разработки простой и безопасной платформы для покупки и обмена цифрового искусства и NTF. Проект React с TypeScript, Styled Components',
                bg: {
                    backgroundImage: 'url(' + art + ')',
                },
                sprId: 'creative-art',
                demoBtn: 'Демо',
                demoLink: 'https://veluat.github.io/creative-art-layout',
                codeLink: 'https://github.com/veluat/creative-art-layout',
                codeBtn: 'Код'
            },
            {
                id: generateId(),
                title: 'ПРОГНОЗ ПОГОДЫ',
                description: 'Одностраничное приложение позволяет пользователям просматривать информацию о погоде в конкретном городе. Проект React с Redux-Toolkit, Axios, React router dom',
                bg: {
                    backgroundImage: 'url(' + weather + ')',
                },
                sprId: 'weather',
                demoBtn: 'Демо',
                demoLink: 'https://weather-matter.netlify.app/',
                codeLink: 'https://github.com/veluat/weather-matter-app',
                codeBtn: 'Код'
            },
            {
                id: generateId(),
                title: 'ОБУЧАЮЩИЕ КАРТОЧКИ',
                description: 'Приложение для обучения с помощью карточек для изучения новых тем. Проект React с Redux Toolkit, Axios, TS, React Hook Form, Zod, React Router Dom, Git, Radix UI',
                bg: {
                    backgroundImage: 'url(' + cardsImage + ')',
                },
                sprId: 'cards',
                demoBtn: 'В разработке',
                demoLink: '#',
                codeLink: '#',
                codeBtn: 'Код'
            },
        ],
        text: 'Мои проекты',
        shadowText: 'Портфолио'
    }
}