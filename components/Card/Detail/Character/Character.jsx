import c from './Character.module.scss'

const Character = () => {


    const object = [
        {
            id: 1,
            title: "Размер",
            desc: "218 × 95 × 90 (Дл. × Шир. × Выс.)"
        },
        {
            id: 2,
            title: "Спальное место",
            desc: "195 × 144 × 44 (Дл. × Шир. × Выс.)"
        },
        {
            id: 3,
            title: "Посадочное место",
            desc: "50 × 44 (Глуб. × Выс.)"
        },
        {
            id: 4,
            title: "Каркас",
            desc: "массив, фанера, ДВП, пружинная змейка"
        },
        {
            id: 5,
            title: "Механизм",
            desc: "пантограф"
        },
        {
            id: 6,
            title: "Материал ножек",
            desc: "массив"
        },
        {
            id: 7,
            title: "Наполнение подушек",
            desc: "крошка ППУ, холлофайбер"
        },
        {
            id: 8,
            title: "Бельевой ящик",
            desc: "есть"
        },
        {
            id: 9,
            title: "Зарядное устройство USB",
            desc: "нет"
        },
        {
            id: 10,
            title: "Съемный чехол",
            desc: "нет"
        },
        {
            id: 12,
            title: "Декоративные подушки",
            desc: "есть"
        },
        {
            id: 13,
            title: "Вариант доставки",
            desc: "в разобранном виде"
        },
        {
            id: 14,
            title: "Производитель",
            desc: "Россия"
        }
    ]


    return (
        <ul className={c.list}>
            {
                object.map(item => (
                    <li key={item.id} className={c.list__item}>
                        <span className={c.list__item_text}>
                            {item.title}
                        </span>

                        <span className={c.list__item_text}>
                            {item.desc}
                        </span>
                    </li>
                ))
            }
        </ul>
    )
}

export default Character