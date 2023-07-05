import { render } from 'next-test-utils';
import  from './src/components/Sidebar/MenuListItem.tsx';
describe('./src/components/Sidebar/MenuListItem.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/Sidebar/MenuListItem />);
  });
});
