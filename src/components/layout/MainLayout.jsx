import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Chat } from './ChatWidget';
import RevealOnScroll from '../shared/RevealOnScroll';

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <RevealOnScroll><Footer /></RevealOnScroll>
      <Chat />
    </>
  );
}
