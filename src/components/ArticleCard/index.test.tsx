import { render } from 'next-test-utils';
import  from './src/components/ArticleCard/index.tsx';
describe('./src/components/ArticleCard/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/ArticleCard/index />);
  });
});
