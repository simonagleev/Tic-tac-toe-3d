import './homePage.css';
import React from "react";
import { Link } from 'react-router-dom';

const HomePage = () => {

    return (
        <>
            <section className='home-page'>
                <h1 className='main-header'>Тестовое задание на должность <br />
                    Junior Frontend Developer
                </h1>
                <Link to={'game'}>
                    <div className='play-btn'>
                        <p className='play-btn-text'>Крестики-Нолики</p>
                    </div>
                </Link>

                <h2 className='task-header'>Задание 1</h2>
                <div className='table-container'>
                    <table>
                        <tbody>

                            <tr>
                                <th scope="col">Ссылка</th>
                                <th scope="col">Какую задачу решает эта новость?</th>
                                <th scope="col">Почему это оформление лучшим образом подходит для этой задачи?</th>
                            </tr>
                            <tr>
                                <td>
                                    <a href='https://www.dota2.com/newsentry/3398555399437783294'>
                                        Новость Dota2
                                    </a>
                                </td>
                                <td>
                                    Объявить чемпионов The International 2022 в Dota 2. Дать краткую информацию о них.
                                </td>
                                <td>
                                    Лакончино, просто и понятно показали результат главного события в мире Dota2 2022 года. Сказали кто, где, как и каким составом победил. Написали немного предистории. Дали необходимые ссылки и прорекламировали сопуствующий внутриигровой продукт (стикеры). Ничего лишнего.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href='https://back4blood.com/ru-ru/news/hello-and-welcome-to-the-back-4-blood-website'>
                                        Новость B4B
                                    </a>
                                </td>
                                <td>
                                    Подогреть интерес и дать пользователям ссылки на хабы, где можно общаться, узнавать новости и быть частью мира B4B.
                                </td>
                                <td>
                                    Опять же, коротко, понятно, лаконично, дает нужную информацию, выполняет свою задачу.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href='https://lolesports.com/article/save-the-date-msi-2023-is-coming-to-london-/blte27eccb71ba7688b'>
                                        Новость LOL
                                    </a>
                                </td>
                                <td>
                                    Дать информацию о предстоящем турнире.
                                </td>
                                <td>
                                    Все четко и понятно, что, где, соклько стоит, как купить. Все ссылки есть. Интересный баннер. Информация дана полниценно.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href='https://www.dota2.com/newsentry/3382785191078165680'>
                                        Новость B4B
                                    </a>
                                </td>
                                <td>
                                    Объявить выход нового сезона аниме по игре.
                                </td>
                                <td>
                                    Понятно донесена информация, даны необходимые ссылки.  Сказано, что, где и когда.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href='https://www.ea.com/ru-ru/games/apex-legends/news/stormpoint-map-blog'>
                                        Новость Apex Legends
                                    </a>
                                </td>
                                <td>
                                    Представить и дать информацию о новой карте в игре, тем самым подогреть интерес игроков.
                                </td>
                                <td>
                                    Информация преподнесена понятно и четко. Есть описательные изображения и видео. Продемонстророваны новые NPC и особенности карты.
                                    Текст простой и понятный, нет лишней нагруженности. Зашел, прочитал о новой карте и пошел дальше играть в любимую игру.
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>

                <div className='task-two-container'>
                    <h2 className='task-header'>Задание 2</h2>
                    <ol className='compare-list'>
                        <li className='compare-list-item'>
                            На первой картинке убрали значок 'сохранить' (или что это значит?) в левом верхнем углу, который не нажимался и мог вводить в заблуждение.
                        </li>
                        <li className='compare-list-item'>
                            Добавлен очень важный заголовок "В обновлении 0.11.11 вас ждут следующие новинки:" Т.к. до этого могло быть не понятно, что ниже следует меню, по которому можно перейти к интересующей части обновления.
                        </li>
                        <li className='compare-list-item'>
                            Изменена главная структура. Теперь не просто все обновления подряд, что делает страницу очень объемной, а каждое обновление имеет свой выпадающий div, который можно развернуть и прочитать подробнее, а можно пропустить, если пользователю это не интересно. И теперь ему не нужно пол часа скроллить до нужного места.
                        </li>
                        <li className='compare-list-item'>
                            Добавлен маленький параграф про подарок, что является небольшой маркетинговой уловкой и позволяет больше заинтересовать пользователя.
                        </li>
                        <li className='compare-list-item'>
                            Я бы добавил больше ссылок на ключевые слова по типу "За завершение строительства вы получите  IX Admiral Schröder в «Парадном» постоянном камуфляже..." и сылка на этот корабль, чтоб человек мог сразу узнать, что он получит. Или, может не ссылка, а небольшое всплывающее окно рядом с курсором при наведении на слово.
                        </li>
                        <li className='compare-list-item'>
                            Так же я бы добавил еще 1 вкладку, в которой бы очень кратко и сухо были перечислены обновления, особенно, влияющие на игровой процесс. Чтоб игроки, которые не хотят проводить время на сайте, а хотят играть, быстро могли узнать, что изменилось и продолжить получать удовольствие от любимой игры. Без картинок, иконок, красивого текста. Просто чистая информация.
                        </li>
                        <li className='compare-list-item'>
                            Была добавлена возможность перехода по ссылке "Обсудить на форуме" - это хорошо. Комьюнити - важная составляющая любой игры. Можно еще добавить дискорд и телеграм туда же. Хотя, зависит от того, где больше сидят ваши пользователи.
                        </li>
                        <li className='compare-list-item'>
                            А вот ссылки на другие изменения убрали. Это бы я оставил, вдруг кто-то хочет еще подробнее со всем ознакомиться. Хотя, может в этом обновлении просто нет других изменений, тогда все норм.
                        </li>
                        <li className='compare-list-item'>
                            Добавлены рекомендации к другим статьям и постам, это хорошо, позволит задержать пользователя на сайте.
                        </li>
                        <li className='compare-list-item'>
                            Хорошо, что появилось больше интерактивности, можно кликать, менять вкладки и тп. Интерактивность - это хорошо, не позволяет заскучать в процессе.
                        </li>
                        <li className='compare-list-item'>
                            Если проскроллить до самого конца вниз, то появляются стрелочки перехода на другие странички. Думаю, так не должно быть, надо бы исправить. Они портят разметку и закрывают собой ссылки соц. сетей.
                        </li>
                        <li className='compare-list-item'>
                            Из крупного я бы добавил систему оценки (рейтинга) обновлений. Чтоб пользователь мог непосредственно участвовать. Банально сделать 2 кнопки под каждым обновлением: нравится/не нравится. Пользователь будет чувствовать, что он важен, что он вносит вклад. А вы сможете собирать фидбек и статистику, что позволит лучше понять желания и настроение пользователей.
                        </li>
                    </ol>
                </div>

                <div className='task-three-container'>
                    <h2 className='task-header'>Задание 3</h2>
                    <ol className='compare-list'>
                        <li className='compare-list-item'>
                            <span className='my-span'><em>Первая секция.</em></span> Плохой контраст у главного заголовка. Нужно сделать более контрастным для улучшения читабельности. Это позволит пользователю не всматриваться в текст (и не ворчать при этом, что ничего не видно) и улучшит общее впечатление о сайте. Так же оставил бы фоновую картинку для экранов среднего размера. Убрал бы только для мобильных устройств. Вместо просто фонового изображения можно вставить фоновое видео (например геймплей или еще какой красивый клип).
                        </li>
                        <li className='compare-list-item'>
                            <span className='my-span'><em>3 видео.</em></span> Курсор pointer между видео не становится обычным, что может раздражать и вводить пользователя в заблуждение. Оставить pointer только на самих видео. Так же размер видео посередине больше, чем справа и слева. Это создает впечатление, что тут слайдер, но слайдера нет. (Может быть это специально, чтоб выделить самое важное видео, конечно) Но я бы сделал их одинакового размера или добавил слайдер, тогда центральное (выбранное) видео можно оставить чуть большим размером.
                            Так же сделать воспроизведение видео внутри изначальных границ видео, а не автоматически открывать на весь экран. А если пользователь захочет, то сам сделает его на весь экран.
                        </li>
                        <li className='compare-list-item'>
                            <span className='my-span'><em>Классы кораблей.</em></span> Вообще, если уделить этому время и ресурсы, то можно было бы добавить сюда 3d модели этих кораблей с Three.js. Это было бы очень круто, пользователь мог бы покрутить корабль со всех сторон, повзаимодействовать с ним уже на сайте. Это бы создало незабываемое впечатление и побудило бы скорее стать частью игры. Помимо этого, возможно, в мобильной версии стоит сделать выравнивание текста поцентру.
                        </li>
                        <li className='compare-list-item'>
                            <span className='my-span'><em>Нации.</em></span> Все, вроде, ок. Я бы ничего не менял, все работает. Единственное, можно добавить анимацию на цифры, чтоб они типа прокручивались до нужного числа или еще что.
                        </li>
                        <li className='compare-list-item'>
                            <span className='my-span'><em>Смена погоды в бою.</em></span> Слишком большой отступ снизу на мобильных устройствах. Так же на мобильных устройствах я бы добавил автоматическое воспроизведение видео либо начало воспроизведения, когда пользователь доскроллил до секции. Т.к. сейчас оно воспроизводится только при наведении мыши на секцию.
                        </li>
                        <li className='compare-list-item'>
                            <span className='my-span'><em>Галерея сражений.</em></span> Я бы измени эту секцию, мне не нравится, когда торчит часть картинки, особенно это заметно на мобильных устройствах. Сделал бы слайдер со стрелочками на фиксированное количество целых картинок (скролл бар тоже можно оставить). Хотя, это, может вкусовщина.
                        </li>
                        <li className='compare-list-item'>
                            <span className='my-span'><em>Награды и достижения.</em></span> Нечего сказать.
                        </li>
                        <li className='compare-list-item'>
                            <span className='my-span'><em>Игра с друзьями.</em></span> Мне кажется, что это достаточно важная секция, т.к. многие играют в такие игры именно из-за мультиплеера и социальной составляющей. Так что я бы вынес эту секцию ближе к началу. И приукрасил бы, как минимум добавить изображение, как на предыдущих секциях.
                        </li>
                        <li className='compare-list-item'>
                            <span className='my-span'><em>Единый аккаунт.</em></span> Я бы веделил ключевые слова, такие как «Мир кораблей», Lesta Games, «Мир танков». И повесил бы на них соответствующие ссылки, чтоб пользователь мог легко переместиться внутри экосистемы.  На разрешении меньше 550px и до 400px плывет разметка картинок и текста под ними, это тоже нужно исправить.
                            Затем фраза "Участвуй в масштабных морских сражениях!" идет 2 раза подряд в одном месте. Так что лучше оставить только одну.
                        </li>
                        <li className='compare-list-item'>
                            <span className='my-span'><em>Footer.</em></span> На мобильных устройствах пропадают ссылки на соц. сети. Это очень важный пункт для многих людей, так что необходимо, чтоб он оставался и на мобильных устройствах. Так же нужно на мобильных отцентровать Lesta Games и весь футер. Можно уменьшить шрифт текста после политики конфиденциальности, это все равно не читают 99% пользователей.
                        </li>
                    </ol>
                    <div className='end-dots'>...</div>
                    <p className='last-parag'>Если в общем по сайту, то мне не хватает анимаций и интерактивности, особенно на мобильных устройствах. Благо, современные устройства и скорость интернета позволяют сильнее нагружать сайты вплоть до работы с 3d. Так же нужно выровнять отступы (они не везде одинаковые). Так же в стилях я бы поменял статичные px на относительные значения типа rem, wh, wv. Отсутствует семантика, нужно использовать больше семантических тегов по типу section, article и тп. Для ускорения загрузки лучше заменить картинки .jpg на .webp. Добавить атрибут alt для картинок. Так же нужно добавить lazy-loading для мендиа. Скорее всего нужно еще отрефакторить код, убрать лишние пустые строки, неискользуемый код.</p>
                </div>
            </section>
        </>
    )
}

export default HomePage