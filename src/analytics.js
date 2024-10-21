import ReactGA from 'react-ga';

const TRACKING_ID = "G-JMQ5FLR3G4"; // Replace with your tracking ID
ReactGA.initialize(TRACKING_ID);

export const logPageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};