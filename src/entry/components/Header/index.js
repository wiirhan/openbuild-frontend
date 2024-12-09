import { Navs } from './nav';
import { APP_NAVS } from '#/lib/nav'

export function Header() {
  return (
    <>
      <Navs data={APP_NAVS} />
    </>
  );
}
