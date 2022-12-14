import renderer from 'react-test-renderer';
import React from 'react';
import NavBar from '../../client/src/NavBar';
import CreateAcct from '../../client/src/CreateAcct';
import HomePage from '../../client/src/HomePage';
import Team from '../../client/src/Team';
import LoginPage from '../../client/src/LoginPage';
import LandingPage from '../../client/src/LandingPage';
import AboutUs from '../../client/src/AboutUs';

// stay away from merchant data/card user information

describe('NavBar component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<NavBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('CreateAcct component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<CreateAcct />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Homepage component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Team component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Team />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('LoginPage component', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<LoginPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('LandingPage component', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<LandingPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('AboutUs component', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<AboutUs />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
