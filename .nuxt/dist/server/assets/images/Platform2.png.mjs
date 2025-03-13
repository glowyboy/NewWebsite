const _imports_4 = "data:image/png;base64,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";
export {
  _imports_4 as default
};
//# sourceMappingURL=Platform2.png.mjs.map
