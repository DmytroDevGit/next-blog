// components
import Container from "@/app/components/Container";
import HeaderNav from "@/app/components/Header/HeaderNav";
import Hamburger from "@/app/components/UI/Hamburger";

export default function Header() {
  return (
    <header className={'py-8 sticky top-0 bg-gray-100 shadow z-20'}>
      <Container className={'md:flex md:justify-end'}>
        <Hamburger className={'md:hidden ml-auto peer'} />
        <div className={'absolute top-full left-0 w-full p-4 md:p-0 bg-gray-200 md:bg-transparent md:static peer-aria-collapsed:hidden md:peer-aria-collapsed:block'}>
          <HeaderNav />
        </div>
      </Container>
    </header>
  )
}
