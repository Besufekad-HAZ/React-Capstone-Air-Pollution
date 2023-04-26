import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Home from '../components/Home';
import store from '../redux/configureStore';

describe('Home component', () => {
  let component;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
  });

  afterEach(() => {
    component.unmount();
  });

  describe('definition test', () => {
    it('should be defined', () => {
      expect(component.container).toBeDefined();
    });
  });

  describe('snapshot test', () => {
    it('should match snapshot', () => {
      const tree = renderer
        .create(
          <Provider store={store}>
            <BrowserRouter>
              <Home />
            </BrowserRouter>
          </Provider>,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('render test', () => {
    it('should have OCEANIA', () => {
      expect(screen.queryByText('OCEANIA')).toBeInTheDocument();
    });

    it('should have ASIA', () => {
      expect(screen.queryByText('ASIA')).toBeInTheDocument();
    });

    it('should have AFRICA', () => {
      expect(screen.queryByText('AFRICA')).toBeInTheDocument();
    });

    it('should have AMERICA', () => {
      expect(screen.queryByText('AMERICA')).toBeInTheDocument();
    });

    it('should have EUROPE', () => {
      expect(screen.queryByText('EUROPE')).toBeInTheDocument();
    });
  });
});
