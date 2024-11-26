type EventParameter = Record<string, string | number>;

declare global {
  interface Window {
    gtag: (
      tag: "event" | string,
      type: string,
      params?: EventParameter
    ) => void;
  }
}

export const sendEvent = (type: string, params?: EventParameter) => {
  // https://developers.google.com/analytics/devguides/collection/ga4/events?client_type=gtag#set-up-events
  window.gtag("event", type, params);
};
