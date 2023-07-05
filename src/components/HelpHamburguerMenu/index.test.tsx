import { render } from 'next-test-utils';
import  from './src/components/HelpHamburguerMenu/index.tsx';
describe('./src/components/HelpHamburguerMenu/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/HelpHamburguerMenu/index />);
  });
});
