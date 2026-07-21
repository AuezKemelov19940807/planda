export default function HeaderMenu() {
  return (
    <menu>
      <ul className="flex flex-col text-xl lg:text-base gap-y-5 lg:gap-y-0 lg:flex-row gap-x-2 xl:gap-x-5 2xl:gap-x-10 font-semibold">
        <li>
          <span>Возможности</span>
        </li>
        <li>
          <span>Как это работает</span>
        </li>
        <li>
          <span>Для кого</span>
        </li>
        <li>
          <span>Отзывы</span>
        </li>
        <li>
          <span>Цены</span>
        </li>
        <li>
          <span>FAQ</span>
        </li>
      </ul>
    </menu>
  );
}
