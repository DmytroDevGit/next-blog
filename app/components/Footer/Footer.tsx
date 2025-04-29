// components
import Container from "@/app/components/Container";
import FooterNav from "@/app/components/Footer/FooterNav";

export default function Footer() {
  return (
    <footer className="mt-auto py-4 bg-gray-100">
      <Container className={'flex justify-end'}>
        <FooterNav />
      </Container>
    </footer>
  )
}
