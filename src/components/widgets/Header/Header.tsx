import { HeaderInfo } from './HeaderInfo';
import { SpecialOffers } from './SpecialOffers';
import { UserControls } from './UserControls';

const Header = () => {
  return (
    <header>
      <HeaderInfo />
      <UserControls />
      <SpecialOffers />
    </header>
  );
};

export default Header;
