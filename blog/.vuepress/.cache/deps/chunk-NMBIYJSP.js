import {
  L,
  Lt
} from "./chunk-FC6IOP63.js";

// node_modules/.pnpm/mermaid@10.1.0_react-dom@16.14.0_react@16.14.0/node_modules/mermaid/dist/is_dark-a2294536.js
var e = (n) => {
  const { r: t, g: o, b: a } = Lt.parse(n), s = 0.2126 * L.channel.toLinear(t) + 0.7152 * L.channel.toLinear(o) + 0.0722 * L.channel.toLinear(a);
  return L.lang.round(s);
};
var i = e;
var l = (n) => i(n) >= 0.5;
var u = l;
var h = (n) => !u(n);
var L2 = h;

export {
  L2 as L
};
//# sourceMappingURL=chunk-NMBIYJSP.js.map
