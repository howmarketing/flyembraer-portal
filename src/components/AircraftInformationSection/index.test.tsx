import { render } from 'next-test-utils';
import  from './src/components/AircraftInformationSection/index.tsx';
describe('./src/components/AircraftInformationSection/index.tsx', () => {
  it('renders without crashing', () => {
    render(<./src/components/AircraftInformationSection/index />);
  });
});
