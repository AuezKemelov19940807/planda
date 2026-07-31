export default function HeaderMenu({ closeMenu }: { closeMenu?: () => void }) {
  return (
    <menu>
      <ul className="flex flex-col text-xl lg:text-base gap-y-5 lg:gap-y-0 lg:flex-row gap-x-2 xl:gap-x-5 2xl:gap-x-10 font-semibold">
        <li className="cursor-pointer">
          <a href="#features" onClick={closeMenu}>
            Возможности
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="#how-it-works" onClick={closeMenu}>
            Как это работает
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="#for-who" onClick={closeMenu}>
            Для кого
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="#reviews" onClick={closeMenu}>
            Отзывы
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="#pricing" onClick={closeMenu}>
            Цены
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="#faq">FAQ</a>
        </li>
      </ul>
    </menu>
  );
}
