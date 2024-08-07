import { Ia as l, Ka as u, La as g, Ma as v, Na as e, Oa as i, Pa as a, U as m, Wa as s, Xa as d, Ya as b, oa as p, ra as r } from "./chunk-WHCYNHCJ.js";
function y(n, t) {
  if ((n & 1 && (e(0, "div", 3)(1, "div", 4), a(2, "img", 5), e(3, "div", 6)(4, "h5", 7), s(5), i(), e(6, "p", 8), s(7), i(), e(8, "div", 9)(9, "div", 10)(10, "button", 11), s(11, "View"), i(), e(12, "button", 11), s(13, "Edit"), i()(), e(14, "small", 12), s(15), i()()()()()), n & 2)) {
    let o = t.$implicit;
    r(2), l("src", o.src, p), r(3), d(o.title), r(2), d(o.description), r(8), d(o.price);
  }
}
var D = (() => {
  let t = class t {
    constructor() {
      this.recommendedItems = [
        { src: "assets/images/product1.jpg", title: "Product 10", description: "Description 10", price: "$40" },
        { src: "assets/images/product2.jpg", title: "Product 11", description: "Description 11", price: "$50" },
        { src: "assets/images/product3.jpg", title: "Product 12", description: "Description 12", price: "$60" },
        { src: "assets/images/product2.jpg", title: "Product 16", description: "Description 16", price: "$40" },
        { src: "assets/images/product1.jpg", title: "Product 17", description: "Description 17", price: "$50" },
        { src: "assets/images/product2.jpg", title: "Product 18", description: "Description 18", price: "$60" },
      ];
    }
  };
  (t.ɵfac = function (c) {
    return new (c || t)();
  }),
    (t.ɵcmp = m({
      type: t,
      selectors: [["app-recommended-products"]],
      standalone: !0,
      features: [b],
      decls: 5,
      vars: 0,
      consts: [
        [1, "container"],
        [1, "border-1", "border-bottom", "border-warning", "mb-4"],
        [1, "row"],
        [1, "col-md-4"],
        [1, "card", "mb-4", "shadow-sm", "border-warning", "border-2"],
        ["alt", "Product Image", 1, "card-img-top", 3, "src"],
        [1, "card-body"],
        [1, "card-title"],
        [1, "card-text"],
        [1, "d-flex", "justify-content-between", "align-items-center"],
        [1, "btn-group"],
        ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary"],
        [1, "text-muted"],
      ],
      template: function (c, x) {
        c & 1 && (e(0, "div", 0), a(1, "div", 1), e(2, "div", 2), g(3, y, 16, 4, "div", 3, u), i()()), c & 2 && (r(3), v(x.recommendedItems));
      },
    }));
  let n = t;
  return n;
})();
export { D as RecommendedProductsComponent };
