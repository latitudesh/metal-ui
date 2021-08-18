import "@testing-library/jest-dom";

class ResizeObserver {
  cb;

  constructor(cb) {
    this.cb = cb;
  }
  observe(cb) {
    this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }]);
  }
  unobserve() { }
  disconnect() { }
}

global.ResizeObserver = ResizeObserver;

global.DOMRect = {
  fromRect: () => ({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 0,
    height: 0
  })
};
