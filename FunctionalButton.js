export default {
  functional: true,
  render(createElement, { data, children }) {
    console.log(data);
    return createElement(
      "button",
      data,
      children
    );
  }
};