const events = {};

const PubSub = (function () {
  const subscribe = function (event, callback) {
    if (!events[event]) {
      events[event] = [];
    }
    events[event].push(callback);
  };

  const publish = function (event, data) {
    if (!events[event]) {
      return;
    }
    events[event].forEach((callback) => callback(data));
  };

  return { publish, subscribe };
})();

export default PubSub;
