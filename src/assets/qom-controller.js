/**
 * Quick Order Matrix Controller (Bundled with Alpine.js 3.13.5)
 *
 * Handles quantity tracking, cart operations, and UI state.
 * This file is self-contained and includes the Alpine.js core library.
 *
 * @version 1.1.0
 */

// ==============================================
// 1. ALPINE.JS CORE (MINIFIED)
// ==============================================
(() => {
  var rt = !1, nt = !1, q = [], it = -1; function Vt(e) { Sn(e) } function Sn(e) { q.includes(e) || q.push(e), An() } function ve(e) { let t = q.indexOf(e); t !== -1 && t > it && q.splice(t, 1) } function An() { !nt && !rt && (rt = !0, queueMicrotask(On)) } function On() { rt = !1, nt = !0; for (let e = 0; e < q.length; e++)q[e](), it = e; q.length = 0, it = -1, nt = !1 } var T, N, L, st, ot = !0; function qt(e) { ot = !1, e(), ot = !0 } function Ut(e) { T = e.reactive, L = e.release, N = t => e.effect(t, { scheduler: r => { ot ? Vt(r) : r() } }), st = e.raw } function at(e) { N = e } function Wt(e) { let t = () => { }; return [n => { let i = N(n); return e._x_effects || (e._x_effects = new Set, e._x_runEffects = () => { e._x_effects.forEach(o => o()) }), e._x_effects.add(i), t = () => { i !== void 0 && (e._x_effects.delete(i), L(i)) }, i }, () => { t() }] } function Se(e, t) { let r = !0, n, i = N(() => { let o = e(); JSON.stringify(o), r ? n = o : queueMicrotask(() => { t(o, n), n = o }), r = !1 }); return () => L(i) } function U(e, t, r = {}) { e.dispatchEvent(new CustomEvent(t, { detail: r, bubbles: !0, composed: !0, cancelable: !0 })) } function O(e, t) { if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) { Array.from(e.children).forEach(i => O(i, t)); return } let r = !1; if (t(e, () => r = !0), r) return; let n = e.firstElementChild; for (; n;)O(n, t, !1), n = n.nextElementSibling } function v(e, ...t) { console.warn(`Alpine Warning: ${e}`, ...t) } var Gt = !1; function Jt() { Gt && v("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."), Gt = !0, document.body || v("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"), U(document, "alpine:init"), U(document, "alpine:initializing"), le(), rr(t => S(t, O)), ee(t => ce(t)), Ce((t, r) => { ue(t, r).forEach(n => n()) }); let e = t => !W(t.parentElement, !0); Array.from(document.querySelectorAll(Zt().join(","))).filter(e).forEach(t => { S(t) }), U(document, "alpine:initialized") } var ct = [], Yt = []; function Xt() { return ct.map(e => e()) } function Zt() { return ct.concat(Yt).map(e => e()) } function Ae(e) { ct.push(e) } function Oe(e) { Yt.push(e) } function W(e, t = !1) { return Q(e, r => { if ((t ? Zt() : Xt()).some(i => r.matches(i))) return !0 }) } function Q(e, t) { if (e) { if (t(e)) return e; if (e._x_teleportBack && (e = e._x_teleportBack), !!e.parentElement) return Q(e.parentElement, t) } } function Qt(e) { return Xt().some(t => e.matches(t)) } var er = []; function tr(e) { er.push(e) } function S(e, t = O, r = () => { }) { ir(() => { t(e, (n, i) => { r(n, i), er.forEach(o => o(n, i)), ue(n, n.attributes).forEach(o => o()), n._x_ignore && i() }) }) } function ce(e) { O(e, t => { lt(t), nr(t) }) } var or = [], sr = [], ar = []; function rr(e) { ar.push(e) } function ee(e, t) { typeof t == "function" ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t)) : (t = e, sr.push(t)) } function Ce(e) { or.push(e) } function Re(e, t, r) { e._x_attributeCleanups || (e._x_attributeCleanups = {}), e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []), e._x_attributeCleanups[t].push(r) } function lt(e, t) { e._x_attributeCleanups && Object.entries(e._x_attributeCleanups).forEach(([r, n]) => { (t === void 0 || t.includes(r)) && (n.forEach(i => i()), delete e._x_attributeCleanups[r]) }) } function nr(e) { if (e._x_cleanups) for (; e._x_cleanups.length;)e._x_cleanups.pop()() } var ut = new MutationObserver(mt), ft = !1; function le() { ut.observe(document, { subtree: !0, childList: !0, attributes: !0, attributeOldValue: !0 }), ft = !0 } function dt() { Cn(), ut.disconnect(), ft = !1 } var fe = []; function Cn() { let e = ut.takeRecords(); fe.push(() => e.length > 0 && mt(e)); let t = fe.length; queueMicrotask(() => { if (fe.length === t) for (; fe.length > 0;)fe.shift()() }) } function h(e) { if (!ft) return e(); dt(); let t = e(); return le(), t } var pt = !1, Te = []; function cr() { pt = !0 } function lr() { pt = !1, mt(Te), Te = [] } function mt(e) { if (pt) { Te = Te.concat(e); return } let t = new Set, r = new Set, n = new Map, i = new Map; for (let o = 0; o < e.length; o++)if (!e[o].target._x_ignoreMutationObserver && (e[o].type === "childList" && (e[o].addedNodes.forEach(s => s.nodeType === 1 && t.add(s)), e[o].removedNodes.forEach(s => s.nodeType === 1 && r.add(s))), e[o].type === "attributes")) { let s = e[o].target, a = e[o].attributeName, c = e[o].oldValue, l = () => { n.has(s) || n.set(s, []), n.get(s).push({ name: a, value: s.getAttribute(a) }) }, u = () => { i.has(s) || i.set(s, []), i.get(s).push(a) }; s.hasAttribute(a) && c === null ? l() : s.hasAttribute(a) ? (u(), l()) : u() } i.forEach((o, s) => { lt(s, o) }), n.forEach((o, s) => { or.forEach(a => a(s, o)) }); for (let o of r) t.has(o) || (sr.forEach(s => s(o)), ce(o)); t.forEach(o => { o._x_ignoreSelf = !0, o._x_ignore = !0 }); for (let o of t) r.has(o) || o.isConnected && (delete o._x_ignoreSelf, delete o._x_ignore, ar.forEach(s => s(o)), o._x_ignore = !0, o._x_ignoreSelf = !0); t.forEach(o => { delete o._x_ignoreSelf, delete o._x_ignore }), t = null, r = null, n = null, i = null } function Me(e) { return F(j(e)) } function P(e, t, r) { return e._x_dataStack = [t, ...j(r || e)], () => { e._x_dataStack = e._x_dataStack.filter(n => n !== t) } } function j(e) { return e._x_dataStack ? e._x_dataStack : typeof ShadowRoot == "function" && e instanceof ShadowRoot ? j(e.host) : e.parentNode ? j(e.parentNode) : [] } function F(e) { return new Proxy({ objects: e }, Tn) } var Tn = { ownKeys({ objects: e }) { return Array.from(new Set(e.flatMap(t => Object.keys(t)))) }, has({ objects: e }, t) { return t == Symbol.unscopables ? !1 : e.some(r => Object.prototype.hasOwnProperty.call(r, t)) }, get({ objects: e }, t, r) { return t == "toJSON" ? Rn : Reflect.get(e.find(n => Object.prototype.hasOwnProperty.call(n, t)) || {}, t, r) }, set({ objects: e }, t, r, n) { let i = e.find(s => Object.prototype.hasOwnProperty.call(s, t)) || e[e.length - 1], o = Object.getOwnPropertyDescriptor(i, t); return o?.set && o?.get ? Reflect.set(i, t, r, n) : Reflect.set(i, t, r) } }; function Rn() { return Reflect.ownKeys(this).reduce((t, r) => (t[r] = Reflect.get(this, r), t), {}) } function Ne(e) { let t = n => typeof n == "object" && !Array.isArray(n) && n !== null, r = (n, i = "") => { Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(([o, { value: s, enumerable: a }]) => { if (a === !1 || s === void 0) return; let c = i === "" ? o : `${i}.${o}`; typeof s == "object" && s !== null && s._x_interceptor ? n[o] = s.initialize(e, c, o) : t(s) && s !== n && !(s instanceof Element) && r(s, c) }) }; return r(e) } function Pe(e, t = () => { }) { let r = { initialValue: void 0, _x_interceptor: !0, initialize(n, i, o) { return e(this.initialValue, () => Mn(n, i), s => ht(n, i, s), i, o) } }; return t(r), n => { if (typeof n == "object" && n !== null && n._x_interceptor) { let i = r.initialize.bind(r); r.initialize = (o, s, a) => { let c = n.initialize(o, s, a); return r.initialValue = c, i(o, s, a) } } else r.initialValue = n; return r } } function Mn(e, t) { return t.split(".").reduce((r, n) => r[n], e) } function ht(e, t, r) { if (typeof t == "string" && (t = t.split(".")), t.length === 1) e[t[0]] = r; else { if (t.length === 0) throw error; return e[t[0]] || (e[t[0]] = {}), ht(e[t[0]], t.slice(1), r) } } var ur = {}; function y(e, t) { ur[e] = t } function de(e, t) { return Object.entries(ur).forEach(([r, n]) => { let i = null; function o() { if (i) return i; { let [s, a] = _t(t); return i = { interceptor: Pe, ...s }, ee(t, a), i } } Object.defineProperty(e, `$${r}`, { get() { return n(t, o()) }, enumerable: !1 }) }), e } function fr(e, t, r, ...n) { try { return r(...n) } catch (i) { te(i, e, t) } } function te(e, t, r = void 0) {
    e = Object.assign(e ?? { message: "No error message given." }, { el: t, expression: r }), console.warn(`Alpine Expression Error: ${e.message}

${r ? 'Expression: "' + r + `"

`: ""}`, t), setTimeout(() => { throw e }, 0)
  } var Ie = !0; function ke(e) { let t = Ie; Ie = !1; let r = e(); return Ie = t, r } function R(e, t, r = {}) { let n; return x(e, t)(i => n = i, r), n } function x(...e) { return dr(...e) } var dr = xt; function pr(e) { dr = e } function xt(e, t) { let r = {}; de(r, e); let n = [r, ...j(e)], i = typeof t == "function" ? Nn(n, t) : In(n, t, e); return fr.bind(null, e, t, i) } function Nn(e, t) { return (r = () => { }, { scope: n = {}, params: i = [] } = {}) => { let o = t.apply(F([n, ...e]), i); De(r, o) } } var gt = {}; function Pn(e, t) { if (gt[e]) return gt[e]; let r = Object.getPrototypeOf(async function () { }).constructor, n = /^[\n\s]*if.*\(.*\)/.test(e.trim()) || /^(let|const)\s/.test(e.trim()) ? `(async()=>{ ${e} })()` : e, o = (() => { try { let s = new r(["__self", "scope"], `with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`); return Object.defineProperty(s, "name", { value: `[Alpine] ${e}` }), s } catch (s) { return te(s, t, e), Promise.resolve() } })(); return gt[e] = o, o } function In(e, t, r) { let n = Pn(t, r); return (i = () => { }, { scope: o = {}, params: s = [] } = {}) => { n.result = void 0, n.finished = !1; let a = F([o, ...e]); if (typeof n == "function") { let c = n(n, a).catch(l => te(l, r, t)); n.finished ? (De(i, n.result, a, s, r), n.result = void 0) : c.then(l => { De(i, l, a, s, r) }).catch(l => te(l, r, t)).finally(() => n.result = void 0) } } } function De(e, t, r, n, i) { if (Ie && typeof t == "function") { let o = t.apply(r, n); o instanceof Promise ? o.then(s => De(e, s, r, n)).catch(s => te(s, i, t)) : e(o) } else typeof t == "object" && t instanceof Promise ? t.then(o => e(o)) : e(t) } var Et = "x-"; function C(e = "") { return Et + e } function mr(e) { Et = e } var yt = {}; function d(e, t) { return yt[e] = t, { before(r) { if (!yt[r]) { console.warn(String.raw`Cannot find directive \`${r}\`. \`${e}\` will use the default order of execution`); return } let n = G.indexOf(r); G.splice(n >= 0 ? n : G.indexOf("DEFAULT"), 0, e) } } } function ue(e, t, r) { if (t = Array.from(t), e._x_virtualDirectives) { let o = Object.entries(e._x_virtualDirectives).map(([a, c]) => ({ name: a, value: c })), s = vt(o); o = o.map(a => s.find(c => c.name === a.name) ? { name: `x-bind:${a.name}`, value: `"${a.value}"` } : a), t = t.concat(o) } let n = {}; return t.map(_r((o, s) => n[o] = s)).filter(xr).map(kn(n, r)).sort(Ln).map(o => Dn(e, o)) } function vt(e) { return Array.from(e).map(_r()).filter(t => !xr(t)) } var bt = !1, pe = new Map, hr = Symbol(); function ir(e) { bt = !0; let t = Symbol(); hr = t, pe.set(t, []); let r = () => { for (; pe.get(t).length;)pe.get(t).shift()(); pe.delete(t) }, n = () => { bt = !1, r() }; e(r), n() } function _t(e) { let t = [], r = a => t.push(a), [n, i] = Wt(e); return t.push(i), [{ Alpine: B, effect: n, cleanup: r, evaluateLater: x.bind(x, e), evaluate: R.bind(R, e) }, () => t.forEach(a => a())] } function Dn(e, t) { let r = () => { }, n = yt[t.type] || r, [i, o] = _t(e); Re(e, t.original, o); let s = () => { e._x_ignore || e._x_ignoreSelf || (n.inline && n.inline(e, t, i), n = n.bind(n, e, t, i), bt ? pe.get(hr).push(n) : n()) }; return s.runCleanups = o, s } var Le = (e, t) => ({ name: r, value: n }) => (r.startsWith(e) && (r = r.replace(e, t)), { name: r, value: n }), $e = e => e; function _r(e = () => { }) { return ({ name: t, value: r }) => { let { name: n, value: i } = gr.reduce((o, s) => s(o), { name: t, value: r }); return n !== t && e(n, t), { name: n, value: i } } } var gr = []; function re(e) { gr.push(e) } function xr({ name: e }) { return yr().test(e) } var yr = () => new RegExp(`^${Et}([^:^.]+)\\b`); function kn(e, t) { return ({ name: r, value: n }) => { let i = r.match(yr()), o = r.match(/:([a-zA-Z0-9\-_:]+)/), s = r.match(/\.[^.\]]+(?=[^\]]*$)/g) || [], a = t || e[r] || r; return { type: i ? i[1] : null, value: o ? o[1] : null, modifiers: s.map(c => c.replace(".", "")), expression: n, original: a } } } var wt = "DEFAULT", G = ["ignore", "ref", "data", "id", "anchor", "bind", "init", "for", "model", "modelable", "transition", "show", "if", wt, "teleport"]; function Ln(e, t) { let r = G.indexOf(e.type) === -1 ? wt : e.type, n = G.indexOf(t.type) === -1 ? wt : t.type; return G.indexOf(r) - G.indexOf(n) } var St = [], At = !1; function ne(e = () => { }) { return queueMicrotask(() => { At || setTimeout(() => { je() }) }), new Promise(t => { St.push(() => { e(), t() }) }) } function je() { for (At = !1; St.length;)St.shift()() } function br() { At = !0 } function me(e, t) { return Array.isArray(t) ? wr(e, t.join(" ")) : typeof t == "object" && t !== null ? $n(e, t) : typeof t == "function" ? me(e, t()) : wr(e, t) } function wr(e, t) { let r = o => o.split(" ").filter(Boolean), n = o => o.split(" ").filter(s => !e.classList.contains(s)).filter(Boolean), i = o => (e.classList.add(...o), () => { e.classList.remove(...o) }); return t = t === !0 ? t = "" : t || "", i(n(t)) } function $n(e, t) { let r = a => a.split(" ").filter(Boolean), n = Object.entries(t).flatMap(([a, c]) => c ? r(a) : !1).filter(Boolean), i = Object.entries(t).flatMap(([a, c]) => c ? !1 : r(a)).filter(Boolean), o = [], s = []; return i.forEach(a => { e.classList.contains(a) && (e.classList.remove(a), s.push(a)) }), n.forEach(a => { e.classList.contains(a) || (e.classList.add(a), o.push(a)) }), () => { s.forEach(a => e.classList.add(a)), o.forEach(a => e.classList.remove(a)) } } function J(e, t) { return typeof t == "object" && t !== null ? jn(e, t) : Fn(e, t) } function jn(e, t) { let r = {}; return Object.entries(t).forEach(([n, i]) => { r[n] = e.style[n], n.startsWith("--") || (n = Bn(n)), e.style.setProperty(n, i) }), setTimeout(() => { e.style.length === 0 && e.removeAttribute("style") }), () => { J(e, r) } } function Fn(e, t) { let r = e.getAttribute("style", t); return e.setAttribute("style", t), () => { e.setAttribute("style", r || "") } } function Bn(e) { return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() } function he(e, t = () => { }) { let r = !1; return function () { r ? t.apply(this, arguments) : (r = !0, e.apply(this, arguments)) } } d("transition", (e, { value: t, modifiers: r, expression: n }, { evaluate: i }) => { typeof n == "function" && (n = i(n)), n !== !1 && (!n || typeof n == "boolean" ? Kn(e, r, t) : zn(e, n, t)) }); function zn(e, t, r) { Er(e, me, ""), { enter: i => { e._x_transition.enter.during = i }, "enter-start": i => { e._x_transition.enter.start = i }, "enter-end": i => { e._x_transition.enter.end = i }, leave: i => { e._x_transition.leave.during = i }, "leave-start": i => { e._x_transition.leave.start = i }, "leave-end": i => { e._x_transition.leave.end = i } }[r](t) } function Kn(e, t, r) { Er(e, J); let n = !t.includes("in") && !t.includes("out") && !r, i = n || t.includes("in") || ["enter"].includes(r), o = n || t.includes("out") || ["leave"].includes(r); t.includes("in") && !n && (t = t.filter((g, b) => b < t.indexOf("out"))), t.includes("out") && !n && (t = t.filter((g, b) => b > t.indexOf("out"))); let s = !t.includes("opacity") && !t.includes("scale"), a = s || t.includes("opacity"), c = s || t.includes("scale"), l = a ? 0 : 1, u = c ? _e(t, "scale", 95) / 100 : 1, p = _e(t, "delay", 0) / 1e3, m = _e(t, "origin", "center"), w = "opacity, transform", $ = _e(t, "duration", 150) / 1e3, Ee = _e(t, "duration", 75) / 1e3, f = "cubic-bezier(0.4, 0.0, 0.2, 1)"; i && (e._x_transition.enter.during = { transformOrigin: m, transitionDelay: `${p}s`, transitionProperty: w, transitionDuration: `${$}s`, transitionTimingFunction: f }, e._x_transition.enter.start = { opacity: l, transform: `scale(${u})` }, e._x_transition.enter.end = { opacity: 1, transform: "scale(1)" }), o && (e._x_transition.leave.during = { transformOrigin: m, transitionDelay: `${p}s`, transitionProperty: w, transitionDuration: `${Ee}s`, transitionTimingFunction: f }, e._x_transition.leave.start = { opacity: 1, transform: "scale(1)" }, e._x_transition.leave.end = { opacity: l, transform: `scale(${u})` }) } function Er(e, t, r = {}) { e._x_transition || (e._x_transition = { enter: { during: r, start: r, end: r }, leave: { during: r, start: r, end: r }, in(n = () => { }, i = () => { }) { Fe(e, t, { during: this.enter.during, start: this.enter.start, end: this.enter.end }, n, i) }, out(n = () => { }, i = () => { }) { Fe(e, t, { during: this.leave.during, start: this.leave.start, end: this.leave.end }, n, i) } }) } window.Element.prototype._x_toggleAndCascadeWithTransitions = function (e, t, r, n) { let i = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout, o = () => i(r); if (t) { e._x_transition && (e._x_transition.enter || e._x_transition.leave) ? e._x_transition.enter && (Object.entries(e._x_transition.enter.during).length || Object.entries(e._x_transition.enter.start).length || Object.entries(e._x_transition.enter.end).length) ? e._x_transition.in(r) : o() : e._x_transition ? e._x_transition.in(r) : o(); return } e._x_hidePromise = e._x_transition ? new Promise((s, a) => { e._x_transition.out(() => { }, () => s(n)), e._x_transitioning && e._x_transitioning.beforeCancel(() => a({ isFromCancelledTransition: !0 })) }) : Promise.resolve(n), queueMicrotask(() => { let s = vr(e); s ? (s._x_hideChildren || (s._x_hideChildren = []), s._x_hideChildren.push(e)) : i(() => { let a = c => { let l = Promise.all([c._x_hidePromise, ...(c._x_hideChildren || []).map(a)]).then(([u]) => u()); return delete c._x_hidePromise, delete c._x_hideChildren, l }; a(e).catch(c => { if (!c.isFromCancelledTransition) throw c }) }) }) }; function vr(e) { let t = e.parentNode; if (t) return t._x_hidePromise ? t : vr(t) } function Fe(e, t, { during: r, start: n, end: i } = {}, o = () => { }, s = () => { }) { if (e._x_transitioning && e._x_transitioning.cancel(), Object.keys(r).length === 0 && Object.keys(n).length === 0 && Object.keys(i).length === 0) { o(), s(); return } let a, c, l; Hn(e, { start() { a = t(e, n) }, during() { c = t(e, r) }, before: o, end() { a(), l = t(e, i) }, after: s, cleanup() { c(), l() } }) } function Hn(e, t) { let r, n, i, o = he(() => { h(() => { r = !0, n || t.before(), i || (t.end(), je()), t.after(), e.isConnected && t.cleanup(), delete e._x_transitioning }) }); e._x_transitioning = { beforeCancels: [], beforeCancel(s) { this.beforeCancels.push(s) }, cancel: he(function () { for (; this.beforeCancels.length;)this.beforeCancels.shift()(); o() }), finish: o }, h(() => { t.start(), t.during() }), br(), requestAnimationFrame(() => { if (r) return; let s = Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3, a = Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3; s === 0 && (s = Number(getComputedStyle(e).animationDuration.replace("s", "")) * 1e3), h(() => { t.before() }), n = !0, requestAnimationFrame(() => { r || (h(() => { t.end() }), je(), setTimeout(e._x_transitioning.finish, s + a), i = !0) }) }) } function _e(e, t, r) { if (e.indexOf(t) === -1) return r; let n = e[e.indexOf(t) + 1]; if (!n || t === "scale" && isNaN(n)) return r; if (t === "duration" || t === "delay") { let i = n.match(/([0-9]+)ms/); if (i) return i[1] } return t === "origin" && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [n, e[e.indexOf(t) + 2]].join(" ") : n } var I = !1; function D(e, t = () => { }) { return (...r) => I ? t(...r) : e(...r) } function Sr(e) { return (...t) => I && e(...t) } var Ar = []; function z(e) { Ar.push(e) } function Or(e, t) { Ar.forEach(r => r(e, t)), I = !0, Tr(() => { S(t, (r, n) => { n(r, () => { }) }) }), I = !1 } var Be = !1; function Cr(e, t) { t._x_dataStack || (t._x_dataStack = e._x_dataStack), I = !0, Be = !0, Tr(() => { Vn(t) }), I = !1, Be = !1 } function Vn(e) { let t = !1; S(e, (n, i) => { O(n, (o, s) => { if (t && Qt(o)) return s(); t = !0, i(o, s) }) }) } function Tr(e) { let t = N; at((r, n) => { let i = t(r); return L(i), () => { } }), e(), at(t) } function ge(e, t, r, n = []) { switch (e._x_bindings || (e._x_bindings = T({})), e._x_bindings[t] = r, t = n.includes("camel") ? Zn(t) : t, t) { case "value": qn(e, r); break; case "style": Wn(e, r); break; case "class": Un(e, r); break; case "selected": case "checked": Gn(e, t, r); break; default: Mr(e, t, r); break } } function qn(e, t) { if (e.type === "radio") e.attributes.value === void 0 && (e.value = t), window.fromModel && (typeof t == "boolean" ? e.checked = xe(e.value) === t : e.checked = Rr(e.value, t)); else if (e.type === "checkbox") Number.isInteger(t) ? e.value = t : !Array.isArray(t) && typeof t != "boolean" && ![null, void 0].includes(t) ? e.value = String(t) : Array.isArray(t) ? e.checked = t.some(r => Rr(r, e.value)) : e.checked = !!t; else if (e.tagName === "SELECT") Xn(e, t); else { if (e.value === t) return; e.value = t === void 0 ? "" : t } } function Un(e, t) { e._x_undoAddedClasses && e._x_undoAddedClasses(), e._x_undoAddedClasses = me(e, t) } function Wn(e, t) { e._x_undoAddedStyles && e._x_undoAddedStyles(), e._x_undoAddedStyles = J(e, t) } function Gn(e, t, r) { Mr(e, t, r), Yn(e, t, r) } function Mr(e, t, r) { [null, void 0, !1].includes(r) && Qn(t) ? e.removeAttribute(t) : (Nr(t) && (r = t), Jn(e, t, r)) } function Jn(e, t, r) { e.getAttribute(t) != r && e.setAttribute(t, r) } function Yn(e, t, r) { e[t] !== r && (e[t] = r) } function Xn(e, t) { let r = [].concat(t).map(n => n + ""); Array.from(e.options).forEach(n => { n.selected = r.includes(n.value) }) } function Zn(e) { return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase()) } function Rr(e, t) { return e == t } function xe(e) { return [1, "1", "true", "on", "yes", !0].includes(e) ? !0 : [0, "0", "false", "off", "no", !1].includes(e) ? !1 : e ? Boolean(e) : null } function Nr(e) { return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(e) } function Qn(e) { return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(e) } function Pr(e, t, r) { return e._x_bindings && e._x_bindings[t] !== void 0 ? e._x_bindings[t] : Dr(e, t, r) } function Ir(e, t, r, n = !0) { if (e._x_bindings && e._x_bindings[t] !== void 0) return e._x_bindings[t]; if (e._x_inlineBindings && e._x_inlineBindings[t] !== void 0) { let i = e._x_inlineBindings[t]; return i.extract = n, ke(() => R(e, i.expression)) } return Dr(e, t, r) } function Dr(e, t, r) { let n = e.getAttribute(t); return n === null ? typeof r == "function" ? r() : r : n === "" ? !0 : Nr(t) ? !![t, "true"].includes(n) : n } function ze(e, t) { var r; return function () { var n = this, i = arguments, o = function () { r = null, e.apply(n, i) }; clearTimeout(r), r = setTimeout(o, t) } } function Ke(e, t) { let r; return function () { let n = this, i = arguments; r || (e.apply(n, i), r = !0, setTimeout(() => r = !1, t)) } } function He({ get: e, set: t }, { get: r, set: n }) { let i = !0, o, s, a = N(() => { let c = e(), l = r(); if (i) n(Ot(c)), i = !1; else { let u = JSON.stringify(c), p = JSON.stringify(l); u !== o ? n(Ot(c)) : u !== p && t(Ot(l)) } o = JSON.stringify(e()), s = JSON.stringify(r()) }); return () => { L(a) } } function Ot(e) { return typeof e == "object" ? JSON.parse(JSON.stringify(e)) : e } function kr(e) { (Array.isArray(e) ? e : [e]).forEach(r => r(B)) } var Y = {}, Lr = !1; function $r(e, t) { if (Lr || (Y = T(Y), Lr = !0), t === void 0) return Y[e]; Y[e] = t, typeof t == "object" && t !== null && t.hasOwnProperty("init") && typeof t.init == "function" && Y[e].init(), Ne(Y[e]) } function jr() { return Y } var Fr = {}; function Br(e, t) { let r = typeof t != "function" ? () => t : t; return e instanceof Element ? Ct(e, r()) : (Fr[e] = r, () => { }) } function zr(e) { return Object.entries(Fr).forEach(([t, r]) => { Object.defineProperty(e, t, { get() { return (...n) => r(...n) } }) }), e } function Ct(e, t, r) { let n = []; for (; n.length;)n.pop()(); let i = Object.entries(t).map(([s, a]) => ({ name: s, value: a })), o = vt(i); return i = i.map(s => o.find(a => a.name === s.name) ? { name: `x-bind:${s.name}`, value: `"${s.value}"` } : s), ue(e, i, r).map(s => { n.push(s.runCleanups), s() }), () => { for (; n.length;)n.pop()() } } var Kr = {}; function Hr(e, t) { Kr[e] = t } function Vr(e, t) { return Object.entries(Kr).forEach(([r, n]) => { Object.defineProperty(e, r, { get() { return (...i) => n.bind(t)(...i) }, enumerable: !1 }) }), e } var ei = { get reactive() { return T }, get release() { return L }, get effect() { return N }, get raw() { return st }, version: "3.13.5", flushAndStopDeferringMutations: lr, dontAutoEvaluateFunctions: ke, disableEffectScheduling: qt, startObservingMutations: le, stopObservingMutations: dt, setReactivityEngine: Ut, onAttributeRemoved: Re, onAttributesAdded: Ce, closestDataStack: j, skipDuringClone: D, onlyDuringClone: Sr, addRootSelector: Ae, addInitSelector: Oe, interceptClone: z, addScopeToNode: P, deferMutations: cr, mapAttributes: re, evaluateLater: x, interceptInit: tr, setEvaluator: pr, mergeProxies: F, extractProp: Ir, findClosest: Q, onElRemoved: ee, closestRoot: W, destroyTree: ce, interceptor: Pe, transition: Fe, setStyles: J, mutateDom: h, directive: d, entangle: He, throttle: Ke, debounce: ze, evaluate: R, initTree: S, nextTick: ne, prefixed: C, prefix: mr, plugin: kr, magic: y, store: $r, start: Jt, clone: Cr, cloneNode: Or, bound: Pr, $data: Me, watch: Se, walk: O, data: Hr, bind: Br }, B = ei; function Tt(e, t) { let r = Object.create(null), n = e.split(","); for (let i = 0; i < n.length; i++)r[n[i]] = !0; return t ? i => !!r[i.toLowerCase()] : i => !!r[i] } var ti = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"; var Ps = Tt(ti + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"); var qr = Object.freeze({}), Is = Object.freeze([]); var ri = Object.prototype.hasOwnProperty, ye = (e, t) => ri.call(e, t), K = Array.isArray, ie = e => Ur(e) === "[object Map]"; var ni = e => typeof e == "string", Ve = e => typeof e == "symbol", be = e => e !== null && typeof e == "object"; var ii = Object.prototype.toString, Ur = e => ii.call(e), Rt = e => Ur(e).slice(8, -1); var qe = e => ni(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e; var Ue = e => { let t = Object.create(null); return r => t[r] || (t[r] = e(r)) }, oi = /-(\w)/g, Ds = Ue(e => e.replace(oi, (t, r) => r ? r.toUpperCase() : "")), si = /\B([A-Z])/g, ks = Ue(e => e.replace(si, "-$1").toLowerCase()), Mt = Ue(e => e.charAt(0).toUpperCase() + e.slice(1)), Ls = Ue(e => e ? `on${Mt(e)}` : ""), Nt = (e, t) => e !== t && (e === e || t === t); var Pt = new WeakMap, we = [], k, X = Symbol("iterate"), It = Symbol("Map key iterate"); function ai(e) { return e && e._isEffect === !0 } function Zr(e, t = qr) { ai(e) && (e = e.raw); let r = li(e, t); return t.lazy || r(), r } function Qr(e) { e.active && (en(e), e.options.onStop && e.options.onStop(), e.active = !1) } var ci = 0; function li(e, t) { let r = function () { if (!r.active) return e(); if (!we.includes(r)) { en(r); try { return fi(), we.push(r), k = r, e() } finally { we.pop(), tn(), k = we[we.length - 1] } } }; return r.id = ci++, r.allowRecurse = !!t.allowRecurse, r._isEffect = !0, r.active = !0, r.raw = e, r.deps = [], r.options = t, r } function en(e) { let { deps: t } = e; if (t.length) { for (let r = 0; r < t.length; r++)t[r].delete(e); t.length = 0 } } var oe = !0, kt = []; function ui() { kt.push(oe), oe = !1 } function fi() { kt.push(oe), oe = !0 } function tn() { let e = kt.pop(); oe = e === void 0 ? !0 : e } function M(e, t, r) { if (!oe || k === void 0) return; let n = Pt.get(e); n || Pt.set(e, n = new Map); let i = n.get(r); i || n.set(r, i = new Set), i.has(k) || (i.add(k), k.deps.push(i), k.options.onTrack && k.options.onTrack({ effect: k, target: e, type: t, key: r })) } function V(e, t, r, n, i, o) { let s = Pt.get(e); if (!s) return; let a = new Set, c = u => { u && u.forEach(p => { (p !== k || p.allowRecurse) && a.add(p) }) }; if (t === "clear") s.forEach(c); else if (r === "length" && K(e)) s.forEach((u, p) => { (p === "length" || p >= n) && c(u) }); else switch (r !== void 0 && c(s.get(r)), t) { case "add": K(e) ? qe(r) && c(s.get("length")) : (c(s.get(X)), ie(e) && c(s.get(It))); break; case "delete": K(e) || (c(s.get(X)), ie(e) && c(s.get(It))); break; case "set": ie(e) && c(s.get(X)); break }let l = u => { u.options.onTrigger && u.options.onTrigger({ effect: u, target: e, key: r, type: t, newValue: n, oldValue: i, oldTarget: o }), u.options.scheduler ? u.options.scheduler(u) : u() }; a.forEach(l) } var di = Tt("__proto__,__v_isRef,__isVue"), rn = new Set(Object.getOwnPropertyNames(Symbol).map(e => Symbol[e]).filter(Ve)), pi = nn(); var mi = nn(!0); var Wr = hi(); function hi() { let e = {}; return ["includes", "indexOf", "lastIndexOf"].forEach(t => { e[t] = function (...r) { let n = _(this); for (let o = 0, s = this.length; o < s; o++)M(n, "get", o + ""); let i = n[t](...r); return i === -1 || i === !1 ? n[t](...r.map(_)) : i } }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => { e[t] = function (...r) { ui(); let n = _(this)[t].apply(this, r); return tn(), n } }), e } function nn(e = !1, t = !1) { return function (n, i, o) { if (i === "__v_isReactive") return !e; if (i === "__v_isReadonly") return e; if (i === "__v_raw" && o === (e ? t ? Ni : cn : t ? Mi : an).get(n)) return n; let s = K(n); if (!e && s && ye(Wr, i)) return Reflect.get(Wr, i, o); let a = Reflect.get(n, i, o); return (Ve(i) ? rn.has(i) : di(i)) || (e || M(n, "get", i), t) ? a : Dt(a) ? !s || !qe(i) ? a.value : a : be(a) ? e ? ln(a) : Qe(a) : a } } var _i = gi(); function gi(e = !1) { return function (r, n, i, o) { let s = r[n]; if (!e && (i = _(i), s = _(s), !K(r) && Dt(s) && !Dt(i))) return s.value = i, !0; let a = K(r) && qe(n) ? Number(n) < r.length : ye(r, n), c = Reflect.set(r, n, i, o); return r === _(o) && (a ? Nt(i, s) && V(r, "set", n, i, s) : V(r, "add", n, i)), c } } function xi(e, t) { let r = ye(e, t), n = e[t], i = Reflect.deleteProperty(e, t); return i && r && V(e, "delete", t, void 0, n), i } function yi(e, t) { let r = Reflect.has(e, t); return (!Ve(t) || !rn.has(t)) && M(e, "has", t), r } function bi(e) { return M(e, "iterate", K(e) ? "length" : X), Reflect.ownKeys(e) } var wi = { get: pi, set: _i, deleteProperty: xi, has: yi, ownKeys: bi }, Ei = { get: mi, set(e, t) { return console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0 }, deleteProperty(e, t) { return console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0 } }; var Lt = e => be(e) ? Qe(e) : e, $t = e => be(e) ? ln(e) : e, jt = e => e, Ze = e => Reflect.getPrototypeOf(e); function We(e, t, r = !1, n = !1) { e = e.__v_raw; let i = _(e), o = _(t); t !== o && !r && M(i, "get", t), !r && M(i, "get", o); let { has: s } = Ze(i), a = n ? jt : r ? $t : Lt; if (s.call(i, t)) return a(e.get(t)); if (s.call(i, o)) return a(e.get(o)); e !== i && e.get(t) } function Ge(e, t = !1) { let r = this.__v_raw, n = _(r), i = _(e); return e !== i && !t && M(n, "has", e), !t && M(n, "has", i), e === i ? r.has(e) : r.has(e) || r.has(i) } function Je(e, t = !1) { return e = e.__v_raw, !t && M(_(e), "iterate", X), Reflect.get(e, "size", e) } function Gr(e) { e = _(e); let t = _(this); return Ze(t).has.call(t, e) || (t.add(e), V(t, "add", e, e)), this } function Jr(e, t) { t = _(t); let r = _(this), { has: n, get: i } = Ze(r), o = n.call(r, e); o ? sn(r, n, e) : (e = _(e), o = n.call(r, e)); let s = i.call(r, e); return r.set(e, t), o ? Nt(t, s) && V(r, "set", e, t, s) : V(r, "add", e, t), this } function Yr(e) { let t = _(this), { has: r, get: n } = Ze(t), i = r.call(t, e); i ? sn(t, r, e) : (e = _(e), i = r.call(t, e)); let o = n ? n.call(t, e) : void 0, s = t.delete(e); return i && V(t, "delete", e, void 0, o), s } function Xr() { let e = _(this), t = e.size !== 0, r = ie(e) ? new Map(e) : new Set(e), n = e.clear(); return t && V(e, "clear", void 0, void 0, r), n } function Ye(e, t) { return function (n, i) { let o = this, s = o.__v_raw, a = _(s), c = t ? jt : e ? $t : Lt; return !e && M(a, "iterate", X), s.forEach((l, u) => n.call(i, c(l), c(u), o)) } } function Xe(e, t, r) { return function (...n) { let i = this.__v_raw, o = _(i), s = ie(o), a = e === "entries" || e === Symbol.iterator && s, c = e === "keys" && s, l = i[e](...n), u = r ? jt : t ? $t : Lt; return !t && M(o, "iterate", c ? It : X), { next() { let { value: p, done: m } = l.next(); return m ? { value: p, done: m } : { value: a ? [u(p[0]), u(p[1])] : u(p), done: m } }, [Symbol.iterator]() { return this } } } } function H(e) { return function (...t) { { let r = t[0] ? `on key "${t[0]}" ` : ""; console.warn(`${Mt(e)} operation ${r}failed: target is readonly.`, _(this)) } return e === "delete" ? !1 : this } } function vi() { let e = { get(o) { return We(this, o) }, get size() { return Je(this) }, has: Ge, add: Gr, set: Jr, delete: Yr, clear: Xr, forEach: Ye(!1, !1) }, t = { get(o) { return We(this, o, !1, !0) }, get size() { return Je(this) }, has: Ge, add: Gr, set: Jr, delete: Yr, clear: Xr, forEach: Ye(!1, !0) }, r = { get(o) { return We(this, o, !0) }, get size() { return Je(this, !0) }, has(o) { return Ge.call(this, o, !0) }, add: H("add"), set: H("set"), delete: H("delete"), clear: H("clear"), forEach: Ye(!0, !1) }, n = { get(o) { return We(this, o, !0, !0) }, get size() { return Je(this, !0) }, has(o) { return Ge.call(this, o, !0) }, add: H("add"), set: H("set"), delete: H("delete"), clear: H("clear"), forEach: Ye(!0, !0) }; return ["keys", "values", "entries", Symbol.iterator].forEach(o => { e[o] = Xe(o, !1, !1), r[o] = Xe(o, !0, !1), t[o] = Xe(o, !1, !0), n[o] = Xe(o, !0, !0) }), [e, r, t, n] } var [Si, Ai, Oi, Ci] = vi(); function on(e, t) { let r = t ? e ? Ci : Oi : e ? Ai : Si; return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(ye(r, i) && i in n ? r : n, i, o) } var Ti = { get: on(!1, !1) }; var Ri = { get: on(!0, !1) }; function sn(e, t, r) { let n = _(r); if (n !== r && t.call(e, n)) { let i = Rt(e); console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`) } } var an = new WeakMap, Mi = new WeakMap, cn = new WeakMap, Ni = new WeakMap; function Pi(e) { switch (e) { case "Object": case "Array": return 1; case "Map": case "Set": case "WeakMap": case "WeakSet": return 2; default: return 0 } } function Ii(e) { return e.__v_skip || !Object.isExtensible(e) ? 0 : Pi(Rt(e)) } function Qe(e) { return e && e.__v_isReadonly ? e : un(e, !1, wi, Ti, an) } function ln(e) { return un(e, !0, Ei, Ri, cn) } function un(e, t, r, n, i) { if (!be(e)) return console.warn(`value cannot be made reactive: ${String(e)}`), e; if (e.__v_raw && !(t && e.__v_isReactive)) return e; let o = i.get(e); if (o) return o; let s = Ii(e); if (s === 0) return e; let a = new Proxy(e, s === 2 ? n : r); return i.set(e, a), a } function _(e) { return e && _(e.__v_raw) || e } function Dt(e) { return Boolean(e && e.__v_isRef === !0) } y("nextTick", () => ne); y("dispatch", e => U.bind(U, e)); y("watch", (e, { evaluateLater: t, cleanup: r }) => (n, i) => { let o = t(n), a = Se(() => { let c; return o(l => c = l), c }, i); r(a) }); y("store", jr); y("data", e => Me(e)); y("root", e => W(e)); y("refs", e => (e._x_refs_proxy || (e._x_refs_proxy = F(Di(e))), e._x_refs_proxy)); function Di(e) { let t = [], r = e; for (; r;)r._x_refs && t.push(r._x_refs), r = r.parentNode; return t } var Ft = {}; function Bt(e) { return Ft[e] || (Ft[e] = 0), ++Ft[e] } function fn(e, t) { return Q(e, r => { if (r._x_ids && r._x_ids[t]) return !0 }) } function dn(e, t) { e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = Bt(t)) } y("id", (e, { cleanup: t }) => (r, n = null) => { let i = `${r}${n ? `-${n}` : ""}`; return ki(e, i, t, () => { let o = fn(e, r), s = o ? o._x_ids[r] : Bt(r); return n ? `${r}-${s}-${n}` : `${r}-${s}` }) }); z((e, t) => { e._x_id && (t._x_id = e._x_id) }); function ki(e, t, r, n) { if (e._x_id || (e._x_id = {}), e._x_id[t]) return e._x_id[t]; let i = n(); return e._x_id[t] = i, r(() => { delete e._x_id[t] }), i } y("el", e => e); pn("Focus", "focus", "focus"); pn("Persist", "persist", "persist"); function pn(e, t, r) { y(t, n => v(`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`, n)) } d("modelable", (e, { expression: t }, { effect: r, evaluateLater: n, cleanup: i }) => { let o = n(t), s = () => { let u; return o(p => u = p), u }, a = n(`${t} = __placeholder`), c = u => a(() => { }, { scope: { __placeholder: u } }), l = s(); c(l), queueMicrotask(() => { if (!e._x_model) return; e._x_removeModelListeners.default(); let u = e._x_model.get, p = e._x_model.set, m = He({ get() { return u() }, set(w) { p(w) } }, { get() { return s() }, set(w) { c(w) } }); i(m) }) }); d("teleport", (e, { modifiers: t, expression: r }, { cleanup: n }) => { e.tagName.toLowerCase() !== "template" && v("x-teleport can only be used on a <template> tag", e); let i = mn(r), o = e.content.cloneNode(!0).firstElementChild; e._x_teleport = o, o._x_teleportBack = e, e.setAttribute("data-teleport-template", !0), o.setAttribute("data-teleport-target", !0), e._x_forwardEvents && e._x_forwardEvents.forEach(a => { o.addEventListener(a, c => { c.stopPropagation(), e.dispatchEvent(new c.constructor(c.type, c)) }) }), P(o, {}, e); let s = (a, c, l) => { l.includes("prepend") ? c.parentNode.insertBefore(a, c) : l.includes("append") ? c.parentNode.insertBefore(a, c.nextSibling) : c.appendChild(a) }; h(() => { s(o, i, t), S(o), o._x_ignore = !0 }), e._x_teleportPutBack = () => { let a = mn(r); h(() => { s(e._x_teleport, a, t) }) }, n(() => o.remove()) }); var Li = document.createElement("div"); function mn(e) { let t = D(() => document.querySelector(e), () => Li)(); return t || v(`Cannot find x-teleport element for selector: "${e}"`), t } var hn = () => { }; hn.inline = (e, { modifiers: t }, { cleanup: r }) => { t.includes("self") ? e._x_ignoreSelf = !0 : e._x_ignore = !0, r(() => { t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore }) }; d("ignore", hn); d("effect", D((e, { expression: t }, { effect: r }) => { r(x(e, t)) })); function se(e, t, r, n) { let i = e, o = c => n(c), s = {}, a = (c, l) => u => l(c, u); if (r.includes("dot") && (t = $i(t)), r.includes("camel") && (t = ji(t)), r.includes("passive") && (s.passive = !0), r.includes("capture") && (s.capture = !0), r.includes("window") && (i = window), r.includes("document") && (i = document), r.includes("debounce")) { let c = r[r.indexOf("debounce") + 1] || "invalid-wait", l = et(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250; o = ze(o, l) } if (r.includes("throttle")) { let c = r[r.indexOf("throttle") + 1] || "invalid-wait", l = et(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250; o = Ke(o, l) } return r.includes("prevent") && (o = a(o, (c, l) => { l.preventDefault(), c(l) })), r.includes("stop") && (o = a(o, (c, l) => { l.stopPropagation(), c(l) })), r.includes("self") && (o = a(o, (c, l) => { l.target === e && c(l) })), (r.includes("away") || r.includes("outside")) && (i = document, o = a(o, (c, l) => { e.contains(l.target) || l.target.isConnected !== !1 && (e.offsetWidth < 1 && e.offsetHeight < 1 || e._x_isShown !== !1 && c(l)) })), r.includes("once") && (o = a(o, (c, l) => { c(l), i.removeEventListener(t, o, s) })), o = a(o, (c, l) => { Bi(t) && zi(l, r) || c(l) }), i.addEventListener(t, o, s), () => { i.removeEventListener(t, o, s) } } function $i(e) { return e.replace(/-/g, ".") } function ji(e) { return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase()) } function et(e) { return !Array.isArray(e) && !isNaN(e) } function Fi(e) { return [" ", "_"].includes(e) ? e : e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase() } function Bi(e) { return ["keydown", "keyup"].includes(e) } function zi(e, t) { let r = t.filter(o => !["window", "document", "prevent", "stop", "once", "capture"].includes(o)); if (r.includes("debounce")) { let o = r.indexOf("debounce"); r.splice(o, et((r[o + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1) } if (r.includes("throttle")) { let o = r.indexOf("throttle"); r.splice(o, et((r[o + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1) } if (r.length === 0 || r.length === 1 && _n(e.key).includes(r[0])) return !1; let i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter(o => r.includes(o)); return r = r.filter(o => !i.includes(o)), !(i.length > 0 && i.filter(s => ((s === "cmd" || s === "super") && (s = "meta"), e[`${s}Key`])).length === i.length && _n(e.key).includes(r[0])) } function _n(e) { if (!e) return []; e = Fi(e); let t = { ctrl: "control", slash: "/", space: " ", spacebar: " ", cmd: "meta", esc: "escape", up: "arrow-up", down: "arrow-down", left: "arrow-left", right: "arrow-right", period: ".", equal: "=", minus: "-", underscore: "_" }; return t[e] = e, Object.keys(t).map(r => { if (t[r] === e) return r }).filter(r => r) } d("model", (e, { modifiers: t, expression: r }, { effect: n, cleanup: i }) => { let o = e; t.includes("parent") && (o = e.parentNode); let s = x(o, r), a; typeof r == "string" ? a = x(o, `${r} = __placeholder`) : typeof r == "function" && typeof r() == "string" ? a = x(o, `${r()} = __placeholder`) : a = () => { }; let c = () => { let m; return s(w => m = w), gn(m) ? m.get() : m }, l = m => { let w; s($ => w = $), gn(w) ? w.set(m) : a(() => { }, { scope: { __placeholder: m } }) }; typeof r == "string" && e.type === "radio" && h(() => { e.hasAttribute("name") || e.setAttribute("name", r) }); var u = e.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(e.type) || t.includes("lazy") ? "change" : "input"; let p = I ? () => { } : se(e, u, t, m => { l(Ki(e, t, m, c())) }); if (t.includes("fill") && ([void 0, null, ""].includes(c()) || e.type === "checkbox" && Array.isArray(c())) && e.dispatchEvent(new Event(u, {})), e._x_removeModelListeners || (e._x_removeModelListeners = {}), e._x_removeModelListeners.default = p, i(() => e._x_removeModelListeners.default()), e.form) { let m = se(e.form, "reset", [], w => { ne(() => e._x_model && e._x_model.set(e.value)) }); i(() => m()) } e._x_model = { get() { return c() }, set(m) { l(m) } }, e._x_forceModelUpdate = m => { m === void 0 && typeof r == "string" && r.match(/\./) && (m = ""), window.fromModel = !0, h(() => ge(e, "value", m)), delete window.fromModel }, n(() => { let m = c(); t.includes("unintrusive") && document.activeElement.isSameNode(e) || e._x_forceModelUpdate(m) }) }); function Ki(e, t, r, n) { return h(() => { if (r instanceof CustomEvent && r.detail !== void 0) return r.detail !== null && r.detail !== void 0 ? r.detail : r.target.value; if (e.type === "checkbox") if (Array.isArray(n)) { let i = null; return t.includes("number") ? i = zt(r.target.value) : t.includes("boolean") ? i = xe(r.target.value) : i = r.target.value, r.target.checked ? n.concat([i]) : n.filter(o => !Hi(o, i)) } else return r.target.checked; else return e.tagName.toLowerCase() === "select" && e.multiple ? t.includes("number") ? Array.from(r.target.selectedOptions).map(i => { let o = i.value || i.text; return zt(o) }) : t.includes("boolean") ? Array.from(r.target.selectedOptions).map(i => { let o = i.value || i.text; return xe(o) }) : Array.from(r.target.selectedOptions).map(i => i.value || i.text) : t.includes("number") ? zt(r.target.value) : t.includes("boolean") ? xe(r.target.value) : t.includes("trim") ? r.target.value.trim() : r.target.value }) } function zt(e) { let t = e ? parseFloat(e) : null; return Vi(t) ? t : e } function Hi(e, t) { return e == t } function Vi(e) { return !Array.isArray(e) && !isNaN(e) } function gn(e) { return e !== null && typeof e == "object" && typeof e.get == "function" && typeof e.set == "function" } d("cloak", e => queueMicrotask(() => h(() => e.removeAttribute(C("cloak"))))); Oe(() => `[${C("init")}]`); d("init", D((e, { expression: t }, { evaluate: r }) => typeof t == "string" ? !!t.trim() && r(t, {}, !1) : r(t, {}, !1))); d("text", (e, { expression: t }, { effect: r, evaluateLater: n }) => { let i = n(t); r(() => { i(o => { h(() => { e.textContent = o }) }) }) }); d("html", (e, { expression: t }, { effect: r, evaluateLater: n }) => { let i = n(t); r(() => { i(o => { h(() => { e.innerHTML = o, e._x_ignoreSelf = !0, S(e), delete e._x_ignoreSelf }) }) }) }); re(Le(":", $e(C("bind:")))); var xn = (e, { value: t, modifiers: r, expression: n, original: i }, { effect: o }) => { if (!t) { let a = {}; zr(a), x(e, n)(l => { Ct(e, l, i) }, { scope: a }); return } if (t === "key") return qi(e, n); if (e._x_inlineBindings && e._x_inlineBindings[t] && e._x_inlineBindings[t].extract) return; let s = x(e, n); o(() => s(a => { a === void 0 && typeof n == "string" && n.match(/\./) && (a = ""), h(() => ge(e, t, a, r)) })) }; xn.inline = (e, { value: t, modifiers: r, expression: n }) => { t && (e._x_inlineBindings || (e._x_inlineBindings = {}), e._x_inlineBindings[t] = { expression: n, extract: !1 }) }; d("bind", xn); function qi(e, t) { e._x_keyExpression = t } Ae(() => `[${C("data")}]`); d("data", (e, { expression: t }, { cleanup: r }) => { if (Ui(e)) return; t = t === "" ? "{}" : t; let n = {}; de(n, e); let i = {}; Vr(i, n); let o = R(e, t, { scope: i }); (o === void 0 || o === !0) && (o = {}), de(o, e); let s = T(o); Ne(s); let a = P(e, s); s.init && R(e, s.init), r(() => { s.destroy && R(e, s.destroy), a() }) }); z((e, t) => { e._x_dataStack && (t._x_dataStack = e._x_dataStack, t.setAttribute("data-has-alpine-state", !0)) }); function Ui(e) { return I ? Be ? !0 : e.hasAttribute("data-has-alpine-state") : !1 } d("show", (e, { modifiers: t, expression: r }, { effect: n }) => { let i = x(e, r); e._x_doHide || (e._x_doHide = () => { h(() => { e.style.setProperty("display", "none", t.includes("important") ? "important" : void 0) }) }), e._x_doShow || (e._x_doShow = () => { h(() => { e.style.length === 1 && e.style.display === "none" ? e.removeAttribute("style") : e.style.removeProperty("display") }) }); let o = () => { e._x_doHide(), e._x_isShown = !1 }, s = () => { e._x_doShow(), e._x_isShown = !0 }, a = () => setTimeout(s), c = he(p => p ? s() : o(), p => { typeof e._x_toggleAndCascadeWithTransitions == "function" ? e._x_toggleAndCascadeWithTransitions(e, p, s, o) : p ? a() : o() }), l, u = !0; n(() => i(p => { !u && p === l || (t.includes("immediate") && (p ? a() : o()), c(p), l = p, u = !1) })) }); d("for", (e, { expression: t }, { effect: r, cleanup: n }) => { let i = Gi(t), o = x(e, i.items), s = x(e, e._x_keyExpression || "index"); e._x_prevKeys = [], e._x_lookup = {}, r(() => Wi(e, i, o, s)), n(() => { Object.values(e._x_lookup).forEach(a => a.remove()), delete e._x_prevKeys, delete e._x_lookup }) }); function Wi(e, t, r, n) { let i = s => typeof s == "object" && !Array.isArray(s), o = e; r(s => { Ji(s) && s >= 0 && (s = Array.from(Array(s).keys(), f => f + 1)), s === void 0 && (s = []); let a = e._x_lookup, c = e._x_prevKeys, l = [], u = []; if (i(s)) s = Object.entries(s).map(([f, g]) => { let b = yn(t, g, f, s); n(E => u.push(E), { scope: { index: f, ...b } }), l.push(b) }); else for (let f = 0; f < s.length; f++) { let g = yn(t, s[f], f, s); n(b => u.push(b), { scope: { index: f, ...g } }), l.push(g) } let p = [], m = [], w = [], $ = []; for (let f = 0; f < c.length; f++) { let g = c[f]; u.indexOf(g) === -1 && w.push(g) } c = c.filter(f => !w.includes(f)); let Ee = "template"; for (let f = 0; f < u.length; f++) { let g = u[f], b = c.indexOf(g); if (b === -1) c.splice(f, 0, g), p.push([Ee, f]); else if (b !== f) { let E = c.splice(f, 1)[0], A = c.splice(b - 1, 1)[0]; c.splice(f, 0, A), c.splice(b, 0, E), m.push([E, A]) } else $.push(g); Ee = g } for (let f = 0; f < w.length; f++) { let g = w[f]; a[g]._x_effects && a[g]._x_effects.forEach(ve), a[g].remove(), a[g] = null, delete a[g] } for (let f = 0; f < m.length; f++) { let [g, b] = m[f], E = a[g], A = a[b], Z = document.createElement("div"); h(() => { A || v('x-for ":key" is undefined or invalid', o), A.after(Z), E.after(A), A._x_currentIfEl && A.after(A._x_currentIfEl), Z.before(E), E._x_currentIfEl && E.after(E._x_currentIfEl), Z.remove() }), A._x_refreshXForScope(l[u.indexOf(b)]) } for (let f = 0; f < p.length; f++) { let [g, b] = p[f], E = g === "template" ? o : a[g]; E._x_currentIfEl && (E = E._x_currentIfEl); let A = l[b], Z = u[b], ae = document.importNode(o.content, !0).firstElementChild, Ht = T(A); P(ae, Ht, o), ae._x_refreshXForScope = wn => { Object.entries(wn).forEach(([En, vn]) => { Ht[En] = vn }) }, h(() => { E.after(ae), S(ae) }), typeof Z == "object" && v("x-for key cannot be an object, it must be a string or an integer", o), a[Z] = ae } for (let f = 0; f < $.length; f++)a[$[f]]._x_refreshXForScope(l[u.indexOf($[f])]); o._x_prevKeys = u }) } function Gi(e) { let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, r = /^\s*\(|\)\s*$/g, n = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, i = e.match(n); if (!i) return; let o = {}; o.items = i[2].trim(); let s = i[1].replace(r, "").trim(), a = s.match(t); return a ? (o.item = s.replace(t, "").trim(), o.index = a[1].trim(), a[2] && (o.collection = a[2].trim())) : o.item = s, o } function yn(e, t, r, n) { let i = {}; return /^\[.*\]$/.test(e.item) && Array.isArray(t) ? e.item.replace("[", "").replace("]", "").split(",").map(s => s.trim()).forEach((s, a) => { i[s] = t[a] }) : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == "object" ? e.item.replace("{", "").replace("}", "").split(",").map(s => s.trim()).forEach(s => { i[s] = t[s] }) : i[e.item] = t, e.index && (i[e.index] = r), e.collection && (i[e.collection] = n), i } function Ji(e) { return !Array.isArray(e) && !isNaN(e) } function bn() { } bn.inline = (e, { expression: t }, { cleanup: r }) => { let n = W(e); n._x_refs || (n._x_refs = {}), n._x_refs[t] = e, r(() => delete n._x_refs[t]) }; d("ref", bn); d("if", (e, { expression: t }, { effect: r, cleanup: n }) => { e.tagName.toLowerCase() !== "template" && v("x-if can only be used on a <template> tag", e); let i = x(e, t), o = () => { if (e._x_currentIfEl) return e._x_currentIfEl; let a = e.content.cloneNode(!0).firstElementChild; return P(a, {}, e), h(() => { e.after(a), S(a) }), e._x_currentIfEl = a, e._x_undoIf = () => { O(a, c => { c._x_effects && c._x_effects.forEach(ve) }), a.remove(), delete e._x_currentIfEl }, a }, s = () => { e._x_undoIf && (e._x_undoIf(), delete e._x_undoIf) }; r(() => i(a => { a ? o() : s() })), n(() => e._x_undoIf && e._x_undoIf()) }); d("id", (e, { expression: t }, { evaluate: r }) => { r(t).forEach(i => dn(e, i)) }); z((e, t) => { e._x_ids && (t._x_ids = e._x_ids) }); re(Le("@", $e(C("on:")))); d("on", D((e, { value: t, modifiers: r, expression: n }, { cleanup: i }) => { let o = n ? x(e, n) : () => { }; e.tagName.toLowerCase() === "template" && (e._x_forwardEvents || (e._x_forwardEvents = []), e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t)); let s = se(e, t, r, a => { o(() => { }, { scope: { $event: a }, params: [a] }) }); i(() => s()) })); tt("Collapse", "collapse", "collapse"); tt("Intersect", "intersect", "intersect"); tt("Focus", "trap", "focus"); tt("Mask", "mask", "mask"); function tt(e, t, r) { d(t, n => v(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`, n)) } B.setEvaluator(xt); B.setReactivityEngine({ reactive: Qe, effect: Zr, release: Qr, raw: _ }); var Kt = B; window.Alpine = Kt; queueMicrotask(() => { Kt.start() });
})();

// ==============================================
// 2. QOM CONTROLLER - Register with Alpine.data()
// ==============================================
function initQOMController() {
  Alpine.data('qomController', () => ({
    // -------------------------
    // State
    // -------------------------
    quantities: {}, // { variantId: quantity }
    prices: {}, // { variantId: priceInCents }
    totalItems: 0,
    totalPrice: 0,
    isSubmitting: false,
    searchQuery: "",
    toast: {
      show: false,
      message: "",
      type: "success", // "success" | "error"
    },
    toastTimeout: null,
    showClearConfirm: false,
    messages: {
      added: "",
      error: "",
      copied: ""
    },
    _footerClone: null,
    // Search index for products across all pages
    productIndex: [], // Array of { id, title, skus: [], variantIds: [], fullProduct: {...} }
    isLoadingProducts: false,
    productIndexLoaded: false,
    matchingProducts: [], // Products that match current search (for dynamic rendering)
    originalTbodyContent: null, // Store original tbody HTML for restoration

    // -------------------------
    // Initialization
    // -------------------------
    init() {
      // Load messages from data attributes
      this.messages.added = this.$el.getAttribute('data-added-message') || "items added to cart";
      this.messages.error = this.$el.getAttribute('data-error-message') || "Failed to add items. Please try again.";
      this.messages.copied = this.$el.getAttribute('data-copied-message') || "SKU copied!";

      // Move footer to body for reliable fixed positioning
      this.setupStickyFooter();

      // Watch for state changes and update footer clone
      this.$watch('totalItems', () => {
        this.updateFooterClone();
      });
      this.$watch('totalPrice', () => {
        this.updateFooterClone();
      });
      this.$watch('isSubmitting', () => {
        this.updateFooterClone();
      });

      // Watch quantities object for changes (fallback if input events don't fire)
      this.$watch('quantities', () => {
        this.recalculateTotals();
      }, { deep: true });

      // Store original tbody content for restoration
      const tbody = this.$el.querySelector('.qom-tbody');
      if (tbody) {
        this.originalTbodyContent = tbody.innerHTML;
      }

      // Watch search query for lazy loading product index and filtering
      this.$watch('searchQuery', (newQuery) => {
        if (newQuery && newQuery.trim()) {
          if (!this.productIndexLoaded && !this.isLoadingProducts) {
            this.loadAllProducts().then(() => {
              this.filterAndRenderProducts();
            });
          } else if (this.productIndexLoaded) {
            this.filterAndRenderProducts();
          }
        } else {
          // Restore original content when search is cleared
          this.restoreOriginalProducts();
        }
      });

      // Initial footer update after a short delay to ensure DOM is ready
      setTimeout(() => {
        this.updateFooterClone();
      }, 100);
    },

    // -------------------------
    // Quantity Management
    // -------------------------
    updateQuantity(variantId, quantity, price, max) {
      let qty = parseInt(quantity) || 0;
      const variantIdNum = parseInt(variantId) || variantId;
      const maxQty = (max !== undefined && max !== null) ? parseInt(max) : 999999;

      // Cap quantity at max available stock
      if (qty > maxQty) {
        qty = maxQty;
        // Update the bound model so the input reflects the capped value
        this.quantities[variantIdNum] = qty;
      }

      if (qty > 0) {
        this.quantities[variantIdNum] = qty;
        this.prices[variantIdNum] = price;
      } else {
        delete this.quantities[variantIdNum];
        delete this.prices[variantIdNum];
      }

      // Recalculate totals immediately
      this.recalculateTotals();
    },

    increment(variantId, price, max) {
      const variantIdNum = parseInt(variantId) || variantId;
      const currentQty = this.quantities[variantIdNum] || 0;
      const maxQty = (max !== undefined && max !== null) ? parseInt(max) : 999999;

      if (currentQty < maxQty) {
        this.updateQuantity(variantIdNum, currentQty + 1, price, maxQty);
      }
    },

    decrement(variantId, price, max) {
      const variantIdNum = parseInt(variantId) || variantId;
      const currentQty = this.quantities[variantIdNum] || 0;
      const maxQty = (max !== undefined && max !== null) ? parseInt(max) : 999999;

      if (currentQty > 0) {
        this.updateQuantity(variantIdNum, currentQty - 1, price, maxQty);
      }
    },


    recalculateTotals() {
      let items = 0;
      let price = 0;

      for (const [variantId, qtyValue] of Object.entries(this.quantities)) {
        const qty = parseInt(qtyValue) || 0;
        if (qty > 0) {
          items += qty;

          // Try to get price from state, fallback to DOM if missing
          let variantPrice = this.prices[variantId];
          if (variantPrice === undefined) {
            // Fallback: search for input within this section specifically
            const input = this.$el.querySelector(`.qom-qty-input[data-variant-id="${variantId}"]`);
            if (input) {
              variantPrice = parseInt(input.getAttribute('data-price')) || 0;
              this.prices[variantId] = variantPrice;
            }
          }
          price += qty * (variantPrice || 0);
        }
      }

      this.totalItems = items;
      this.totalPrice = price;

      // Manually trigger footer update to ensure it happens
      this.updateFooterClone();
    },

    // -------------------------
    // Search/Filter
    // -------------------------
    isProductVisible(element) {
      if (!this.searchQuery || !this.searchQuery.trim()) return true;
      if (!element) return false;

      const query = this.searchQuery.toLowerCase().trim();
      const title = (element.dataset.productTitle || '').toLowerCase();
      const skuString = (element.dataset.productSku || '').toLowerCase();

      if (title.includes(query)) return true;

      if (skuString) {
        const skus = skuString.split('|').filter(s => s.trim());
        for (const sku of skus) {
          if (sku.trim().includes(query)) return true;
        }
      }

      return false;
    },

    isProductVisibleByData(title, skuString, productId = null) {
      if (!this.searchQuery || !this.searchQuery.trim()) return true;

      const query = this.searchQuery.toLowerCase().trim();
      const titleLower = String(title || '').toLowerCase();
      const skuStringLower = String(skuString || '').toLowerCase();

      // First check the DOM data (for products on current page)
      if (titleLower.includes(query)) return true;

      if (skuStringLower) {
        const skus = skuStringLower.split('|').filter(s => s && s.trim());
        for (const sku of skus) {
          if (sku.trim().toLowerCase().includes(query)) return true;
        }
      }

      // If product index is loaded and we have a product ID, check the index
      if (this.productIndexLoaded && this.productIndex.length > 0 && productId) {
        return this.isProductIdVisible(productId);
      }

      // Fallback: if we have title, try to match against index by title
      if (this.productIndexLoaded && this.productIndex.length > 0 && titleLower) {
        const matchingProduct = this.productIndex.find(product => {
          const productTitle = String(product.title || '').toLowerCase();
          return productTitle === titleLower || productTitle.includes(query);
        });
        if (matchingProduct) {
          // Verify the match by checking if search query matches
          const productTitle = String(matchingProduct.title || '').toLowerCase();
          if (productTitle.includes(query)) return true;

          // Check SKUs in matching product
          if (matchingProduct.skus && matchingProduct.skus.length > 0) {
            for (const sku of matchingProduct.skus) {
              if (sku && sku.toLowerCase().includes(query)) return true;
            }
          }
        }
      }

      return false;
    },

    // Check if a product ID matches the search query using the index
    isProductIdVisible(productId) {
      if (!this.searchQuery || !this.searchQuery.trim()) return true;
      if (!this.productIndexLoaded || this.productIndex.length === 0) return false;

      const query = this.searchQuery.toLowerCase().trim();
      // Convert both to strings for comparison (API might return number, template might be string)
      const productIdStr = String(productId);
      const product = this.productIndex.find(p => String(p.id) === productIdStr);

      if (!product) return false;

      // Check title
      const title = String(product.title || '').toLowerCase();
      if (title.includes(query)) return true;

      // Check SKUs
      if (product.skus && product.skus.length > 0) {
        for (const sku of product.skus) {
          if (sku && sku.toLowerCase().includes(query)) return true;
        }
      }

      return false;
    },

    // Load all products from collection API (up to 200)
    async loadAllProducts() {
      if (this.isLoadingProducts || this.productIndexLoaded) return;

      const collectionHandle = this.$el.getAttribute('data-collection-handle');
      if (!collectionHandle) {
        console.warn('QOM: No collection handle found, cannot load products for search');
        return;
      }

      this.isLoadingProducts = true;
      const maxProducts = 200;
      const productsPerPage = 250; // Maximum allowed by Shopify storefront API
      const maxPages = Math.ceil(maxProducts / productsPerPage);
      const allProducts = [];
      const seenProductIds = new Set();
      let currentPage = 1;

      try {
        while (allProducts.length < maxProducts && currentPage <= maxPages) {
          // Always include page parameter for consistency, and add limit for larger page sizes
          const url = `/collections/${collectionHandle}/products.json?page=${currentPage}&limit=${productsPerPage}`;

          let response;
          try {
            response = await fetch(url);
          } catch (networkError) {
            console.warn('QOM: Network error fetching products, trying fallback URL', networkError);
            // Fallback to original endpoint format
            const fallbackUrl = `/collections/${collectionHandle}.json?page=${currentPage}`;
            response = await fetch(fallbackUrl);
          }

          if (!response.ok) {
            // Try alternative endpoint format if first one fails
            if (currentPage === 1) {
              const altUrl = `/collections/${collectionHandle}.json`;
              const altResponse = await fetch(altUrl);
              if (altResponse.ok) {
                const altData = await altResponse.json();
                const altProducts = altData.products || [];
                for (const product of altProducts) {
                  if (!seenProductIds.has(product.id) && allProducts.length < maxProducts) {
                    seenProductIds.add(product.id);
                    allProducts.push(this.createProductIndexEntry(product));
                  }
                }
              }
            }
            break;
          }

          const data = await response.json();
          const products = data.products || [];

          if (products.length === 0) break; // No more products

          // Process products and add to index (avoid duplicates)
          for (const product of products) {
            if (allProducts.length >= maxProducts) break;

            // Skip if we've already seen this product
            if (seenProductIds.has(product.id)) continue;
            seenProductIds.add(product.id);

            allProducts.push(this.createProductIndexEntry(product));
          }

          // If we got fewer products than requested, we've likely reached the end
          if (products.length < productsPerPage) break;

          currentPage++;
        }

        this.productIndex = allProducts;
        this.productIndexLoaded = true;
        console.log(`QOM: Loaded ${allProducts.length} products for search index`);
      } catch (error) {
        console.error('QOM: Failed to load products for search', error);
        // Fallback: mark as loaded with empty index to prevent retries
        this.productIndex = [];
        this.productIndexLoaded = true;
      } finally {
        this.isLoadingProducts = false;
      }
    },

    // Helper to create a product index entry from API response
    createProductIndexEntry(product) {
      const skus = [];
      const variantIds = [];

      // Collect all SKUs and variant IDs
      if (product.variants && product.variants.length > 0) {
        for (const variant of product.variants) {
          if (variant.sku) {
            skus.push(variant.sku);
          }
          if (variant.id) {
            variantIds.push(variant.id);
          }
        }
      }

      return {
        id: product.id,
        title: product.title || '',
        handle: product.handle || '',
        skus: skus,
        variantIds: variantIds,
        fullProduct: product // Store full product data for rendering
      };
    },

    // Get matching products from index based on search query
    getMatchingProducts() {
      if (!this.searchQuery || !this.searchQuery.trim()) {
        return [];
      }

      if (!this.productIndexLoaded || this.productIndex.length === 0) {
        return [];
      }

      const query = this.searchQuery.toLowerCase().trim();
      const matches = [];

      for (const product of this.productIndex) {
        let isMatch = false;

        // Check title
        const title = String(product.title || '').toLowerCase();
        if (title.includes(query)) {
          isMatch = true;
        }

        // Check SKUs
        if (!isMatch && product.skus && product.skus.length > 0) {
          for (const sku of product.skus) {
            if (sku && sku.toLowerCase().includes(query)) {
              isMatch = true;
              break;
            }
          }
        }

        if (isMatch && product.fullProduct) {
          matches.push(product.fullProduct);
        }
      }

      return matches;
    },

    // Get count of matching products from search index
    getSearchResultCount() {
      if (!this.searchQuery || !this.searchQuery.trim()) {
        return null; // No search active
      }

      if (!this.productIndexLoaded || this.productIndex.length === 0) {
        // Count visible products in DOM as fallback
        const visibleRows = this.$el.querySelectorAll('.qom-product-row:not([style*="display: none"])');
        return visibleRows.length;
      }

      return this.getMatchingProducts().length;
    },

    // Filter products and render matching ones dynamically
    async filterAndRenderProducts() {
      if (!this.searchQuery || !this.searchQuery.trim()) {
        this.restoreOriginalProducts();
        return;
      }

      const tbody = this.$el.querySelector('.qom-tbody');
      if (!tbody) return;

      // Get section settings from data attributes
      const variantLayout = this.$el.getAttribute('data-variant-layout') || 'compact';
      const showSku = this.$el.getAttribute('data-show-sku') !== 'false';
      const showImage = this.$el.getAttribute('data-show-image') !== 'false';
      const showStock = this.$el.getAttribute('data-show-stock') !== 'false';

      // Get matching products from index
      const matchingProducts = this.getMatchingProducts();
      this.matchingProducts = matchingProducts;

      // Get all currently rendered product IDs
      const currentProductIds = new Set();
      const currentRows = tbody.querySelectorAll('.qom-product-row:not(.qom-product-row--dynamic)');
      currentRows.forEach(row => {
        const productId = row.getAttribute('data-product-id');
        if (productId) {
          currentProductIds.add(String(productId));
        }
      });

      // Hide all current product rows first
      currentRows.forEach(row => {
        row.style.display = 'none';
      });

      // Hide pagination row
      const paginationRow = tbody.querySelector('.qom-pagination');
      if (paginationRow) {
        paginationRow.style.display = 'none';
      }

      // Remove any existing dynamically rendered products
      const existingDynamic = tbody.querySelectorAll('.qom-product-row--dynamic');
      existingDynamic.forEach(row => row.remove());

      // Render matching products
      const searchQuery = this.searchQuery.toLowerCase().trim();

      for (const product of matchingProducts) {
        const productIdStr = String(product.id);

        // Check if this product is already rendered on current page
        const existingRow = tbody.querySelector(`[data-product-id="${productIdStr}"]:not(.qom-product-row--dynamic)`);
        if (existingRow) {
          // Product is on current page, show it
          existingRow.style.display = '';
          continue;
        }

        // Product is not on current page, render it dynamically with search query for variant filtering
        await this.renderProductRow(product, tbody, variantLayout, showSku, showImage, showStock, searchQuery);
      }
    },

    // Render a single product row dynamically
    async renderProductRow(product, tbody, variantLayout, showSku, showImage, showStock, searchQuery = '') {
      const lowStockThreshold = parseInt(this.$el.getAttribute('data-low-stock-threshold')) || 10;

      // Fetch full product data if we don't have complete variant data
      if (!product.variants || product.variants.length === 0 || !product.variants[0].price) {
        try {
          const productHandle = product.handle || product.id;
          const productUrl = `/products/${productHandle}.json`;
          const response = await fetch(productUrl);
          if (response.ok) {
            const productData = await response.json();
            if (productData.product) {
              product = productData.product;
            }
          }
        } catch (e) {
          console.warn('QOM: Could not fetch product data', e);
        }
      }

      // Filter variants based on search query if provided
      let variantsToShow = product.variants || [];
      if (searchQuery && variantsToShow.length > 1) {
        // Check if search matches product title - if so, show all variants
        const productTitle = (product.title || '').toLowerCase();
        const titleMatches = productTitle.includes(searchQuery);

        if (!titleMatches) {
          // Search doesn't match title, so filter to only variants that match
          const filteredVariants = variantsToShow.filter(variant => {
            const sku = (variant.sku || '').toLowerCase();
            const title = (variant.title || '').toLowerCase();
            return sku.includes(searchQuery) || title.includes(searchQuery);
          });

          // Only use filtered list if we found matches, otherwise show all
          if (filteredVariants.length > 0) {
            variantsToShow = filteredVariants;
          }
        }
      }

      // Collect SKUs from filtered variants
      const allSkus = [];
      for (const variant of variantsToShow) {
        if (variant.sku) {
          allSkus.push(variant.sku);
        }
      }
      const skuString = allSkus.join('|');
      const escapedTitle = this.escapeHtmlDynamic(product.title || '');

      // Create row element
      const row = document.createElement('tr');
      row.className = 'qom-product-row qom-product-row--dynamic';
      row.setAttribute('data-product-id', product.id);
      row.setAttribute('data-product-title', product.title || '');
      row.setAttribute('data-product-sku', skuString);

      let rowHTML = '';

      // Image column
      if (showImage !== 'false' && showImage !== false) {
        const imageUrl = this.escapeHtmlDynamic(product.featured_image || product.images?.[0]?.src || '');
        rowHTML += '<td class="qom-cell qom-cell--image">';
        if (imageUrl) {
          rowHTML += `<img src="${imageUrl}" alt="${escapedTitle}" width="50" height="50" loading="lazy" class="qom-product-image">`;
        } else {
          rowHTML += '<div class="qom-product-image qom-product-image--placeholder"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div>';
        }
        rowHTML += '</td>';
      }

      // SKU column
      if (showSku !== 'false' && showSku !== false) {
        const firstSku = this.escapeHtmlDynamic(allSkus[0] || '-');
        rowHTML += `<td class="qom-cell qom-cell--sku"><div class="qom-sku-wrapper"><span class="qom-sku">${firstSku}</span></div></td>`;
      }

      // Name column
      const productPageUrl = `/products/${product.handle || product.id}`;
      rowHTML += `<td class="qom-cell qom-cell--name"><a href="${productPageUrl}" class="qom-product-link" target="_blank">${escapedTitle}</a></td>`;

      // Price column - use first filtered variant for price
      const firstVariant = variantsToShow?.[0] || product.variants?.[0];
      const displayPrice = this.parseProductPrice(firstVariant?.price);
      const moneyFormat = window.qomMoneyFormat || '${{amount}}';
      const formattedPrice = moneyFormat.replace('{{amount}}', displayPrice);
      rowHTML += `<td class="qom-cell qom-cell--price"><span class="qom-price">${formattedPrice}</span></td>`;

      // Quantity column - use filtered variantsToShow instead of product.variants
      rowHTML += `<td class="qom-cell qom-cell--quantity"><div class="qom-variant-inputs" data-product-id="${product.id}">`;

      if (variantsToShow && variantsToShow.length > 0) {
        const variantCount = variantsToShow.length;
        const showStockBool = showStock !== 'false' && showStock !== false;

        if (variantCount === 1) {
          // Single variant - simple layout
          const variant = variantsToShow[0];
          const vData = this.getVariantStockData(variant, lowStockThreshold);

          rowHTML += '<div class="qom-single-variant">';
          rowHTML += `<div class="qom-qty-field${showStockBool ? ' ' + vData.stockClass : ''}"${vData.stockTooltip ? ` title="${vData.stockTooltip}"` : ''}>`;
          rowHTML += this.buildDynamicVariantInputs(variant, vData);
          rowHTML += '</div></div>';
        } else {
          // Multiple variants - matrix layout
          rowHTML += '<div class="qom-variant-matrix">';
          for (const variant of variantsToShow) {
            const vData = this.getVariantStockData(variant, lowStockThreshold);
            const variantTitle = this.escapeHtmlDynamic(variant.title || 'Default');
            const variantSku = this.escapeHtmlDynamic(variant.sku || '-');

            rowHTML += `<div class="qom-variant-cell" data-variant-id="${variant.id}">`;
            rowHTML += `<span class="qom-variant-label">${variantTitle}</span>`;
            rowHTML += `<div class="qom-variant-sku"><span class="qom-sku qom-sku--small">${variantSku}</span></div>`;
            rowHTML += `<div class="qom-qty-field${showStockBool ? ' ' + vData.stockClass : ''}"${vData.stockTooltip ? ` title="${vData.stockTooltip}"` : ''}>`;
            rowHTML += this.buildDynamicVariantInputs(variant, vData);
            rowHTML += '</div></div>';
          }
          rowHTML += '</div>';
        }
      }
      rowHTML += '</div></td>';

      row.innerHTML = rowHTML;
      tbody.appendChild(row);

      // Bind native event handlers to dynamically created elements
      // Using native JS instead of Alpine to avoid double-firing of events
      this.bindDynamicEventHandlers(row);
    },

    // Helper: Parse product price from storefront API (returns price as "35.00" not cents)
    parseProductPrice(priceValue) {
      if (!priceValue) return '0.00';
      const priceStr = String(priceValue);
      const priceNum = parseFloat(priceStr);
      // Storefront API returns "35.00" format, not cents
      // If price has decimal or is < 1000, treat as dollars; otherwise as cents
      if (priceStr.includes('.') || priceNum < 1000) {
        return priceNum.toFixed(2);
      }
      // Fallback for cents format
      return (priceNum / 100).toFixed(2);
    },

    // Helper: Get variant stock status data
    getVariantStockData(variant, threshold) {
      const inventory = variant.inventory_quantity ?? 0;
      const policy = variant.inventory_policy || 'deny';
      const tracking = variant.inventory_management;

      let stockClass = '';
      let stockTooltip = '';
      let shouldDisable = false;
      let maxQty = 999999;

      if (!tracking || policy === 'continue') {
        stockClass = 'qom-qty-input--stock-in';
        stockTooltip = 'In Stock';
      } else if (inventory <= 0) {
        stockClass = 'qom-qty-input--stock-out';
        stockTooltip = 'Out of Stock';
        shouldDisable = true;
        maxQty = 0;
      } else if (inventory <= threshold) {
        stockClass = 'qom-qty-input--stock-low';
        stockTooltip = `Low Stock (${inventory})`;
        maxQty = inventory;
      } else {
        stockClass = 'qom-qty-input--stock-in';
        stockTooltip = 'In Stock';
        maxQty = inventory;
      }

      // Price in cents for the controller functions
      const priceStr = String(variant.price || 0);
      const priceNum = parseFloat(priceStr);
      let priceInCents;
      if (priceStr.includes('.') || priceNum < 1000) {
        priceInCents = Math.round(priceNum * 100);
      } else {
        priceInCents = Math.round(priceNum);
      }

      return { stockClass, stockTooltip, shouldDisable, maxQty: Math.max(0, maxQty), priceInCents };
    },

    // Helper: Build variant input HTML - uses data attributes for native JS event binding
    buildDynamicVariantInputs(variant, data) {
      const { shouldDisable, maxQty, priceInCents } = data;
      let html = '';

      if (shouldDisable) {
        html += `<button type="button" class="qom-qty-btn qom-qty-btn--minus" disabled aria-label="Decrease quantity">&minus;</button>`;
        html += `<input type="number" class="qom-qty-input" data-variant-id="${variant.id}" data-price="${priceInCents}" min="0" max="0" placeholder="0" disabled>`;
        html += `<button type="button" class="qom-qty-btn qom-qty-btn--plus" disabled aria-label="Increase quantity">&plus;</button>`;
      } else {
        html += `<button type="button" class="qom-qty-btn qom-qty-btn--minus qom-dynamic-minus" data-variant-id="${variant.id}" data-price="${priceInCents}" data-max="${maxQty}" aria-label="Decrease quantity">&minus;</button>`;
        html += `<input type="number" class="qom-qty-input qom-dynamic-input" data-variant-id="${variant.id}" data-price="${priceInCents}" min="0" max="${maxQty}" placeholder="0">`;
        html += `<button type="button" class="qom-qty-btn qom-qty-btn--plus qom-dynamic-plus" data-variant-id="${variant.id}" data-price="${priceInCents}" data-max="${maxQty}" aria-label="Increase quantity">&plus;</button>`;
      }
      return html;
    },

    // Bind event handlers to dynamically created elements (called after row is added to DOM)
    bindDynamicEventHandlers(row) {
      const self = this;

      // Bind minus buttons
      row.querySelectorAll('.qom-dynamic-minus').forEach(btn => {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          const variantId = parseInt(this.getAttribute('data-variant-id'));
          const price = parseInt(this.getAttribute('data-price'));
          const max = parseInt(this.getAttribute('data-max'));
          self.decrement(variantId, price, max);
          self.updateDynamicInputValue(variantId);
        });
      });

      // Bind plus buttons
      row.querySelectorAll('.qom-dynamic-plus').forEach(btn => {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          const variantId = parseInt(this.getAttribute('data-variant-id'));
          const price = parseInt(this.getAttribute('data-price'));
          const max = parseInt(this.getAttribute('data-max'));
          self.increment(variantId, price, max);
          self.updateDynamicInputValue(variantId);
        });
      });

      // Bind inputs
      row.querySelectorAll('.qom-dynamic-input').forEach(input => {
        input.addEventListener('input', function (e) {
          const variantId = parseInt(this.getAttribute('data-variant-id'));
          const price = parseInt(this.getAttribute('data-price'));
          const max = parseInt(this.getAttribute('max')) || 999999;
          const value = parseInt(this.value) || 0;
          self.updateQuantity(variantId, value, price, max);
        });
      });
    },

    // Update dynamic input value to match state
    updateDynamicInputValue(variantId) {
      const input = document.querySelector(`.qom-dynamic-input[data-variant-id="${variantId}"]`);
      if (input) {
        const qty = this.quantities[variantId] || 0;
        input.value = qty > 0 ? qty : '';
      }
    },

    // Helper: Escape HTML for dynamic content
    escapeHtmlDynamic(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    },


    // Restore original products when search is cleared
    restoreOriginalProducts() {
      const tbody = this.$el.querySelector('.qom-tbody');
      if (!tbody || !this.originalTbodyContent) return;

      // Remove dynamically rendered products
      const dynamicRows = tbody.querySelectorAll('.qom-product-row--dynamic');
      dynamicRows.forEach(row => row.remove());

      // Show all original rows
      const originalRows = tbody.querySelectorAll('.qom-product-row:not(.qom-product-row--dynamic)');
      originalRows.forEach(row => {
        row.style.display = '';
      });

      // Show pagination
      const paginationRow = tbody.querySelector('.qom-pagination');
      if (paginationRow) {
        paginationRow.style.display = '';
      }

      this.matchingProducts = [];
    },

    // -------------------------
    // Cart Operations
    // -------------------------
    async addAllToCart() {
      if (this.isSubmitting || this.totalItems === 0) return;
      this.isSubmitting = true;

      try {
        const items = [];
        for (const [variantId, qty] of Object.entries(this.quantities)) {
          if (qty > 0) {
            items.push({ id: parseInt(variantId), quantity: qty });
          }
        }

        const batches = this.chunkArray(items, 10);
        let addedCount = 0;

        for (const batch of batches) {
          const response = await fetch("/cart/add.js", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ items: batch }),
          });

          if (!response.ok) {
            throw new Error(`Cart API error: ${response.status}`);
          }

          const data = await response.json();
          // Sum the quantities of items in this batch
          const batchQty = batch.reduce((sum, item) => sum + (item.quantity || 0), 0);
          addedCount += batchQty;

          if (batches.indexOf(batch) < batches.length - 1) {
            await this.delay(100);
          }
        }

        const message = this.messages.added
          ? `${addedCount} ${this.messages.added}`
          : `${addedCount} item${addedCount === 1 ? '' : 's'} added to cart`;
        this.showToast(message, "success");
        this.resetQuantities();
        this.updateCartCount();
      } catch (error) {
        console.error("QOM: Add to cart failed", error);
        this.showToast(this.messages.error, "error");
      } finally {
        this.isSubmitting = false;
      }
    },

    async updateCartCount() {
      try {
        const response = await fetch("/cart.js");
        const cart = await response.json();
        const selectors = [
          "[data-cart-count]",
          ".cart-count",
          "#cart-icon-bubble span",
          ".header__cart-count",
        ];
        for (const selector of selectors) {
          const el = document.querySelector(selector);
          if (el) {
            el.textContent = cart.item_count;
          }
        }
      } catch (e) {
        // Silent fail
      }
    },

    // -------------------------
    // Sticky Footer
    // -------------------------
    stripAlpineAttributes(element) {
      // Remove Alpine directive attributes from an element and all descendants
      // This prevents Alpine from trying to process the cloned elements
      const processElement = (el) => {
        if (!el.attributes) return;

        // Collect attributes to remove (can't modify while iterating)
        const attrsToRemove = [];
        for (const attr of el.attributes) {
          const name = attr.name;
          if (
            name.startsWith('x-') ||
            name.startsWith('@') ||
            name.startsWith(':') ||
            name === 'x-cloak'
          ) {
            attrsToRemove.push(name);
          }
        }

        // Remove collected attributes
        for (const attrName of attrsToRemove) {
          el.removeAttribute(attrName);
        }
      };

      // Process the element itself
      processElement(element);

      // Process all descendants
      const descendants = element.querySelectorAll('*');
      for (const desc of descendants) {
        processElement(desc);
      }
    },

    setupStickyFooter() {
      // Remove any existing clones first to prevent duplicates
      document.querySelectorAll('.qom-footer--clone').forEach(el => el.remove());

      const originalFooter = this.$el.querySelector('.qom-footer');
      if (!originalFooter) return;

      // Get the button label from the original before cloning
      const originalBtn = originalFooter.querySelector('.qom-add-all-btn');
      let buttonLabel = 'Add All to Cart';
      if (originalBtn) {
        // Try to get text from the span inside qom-btn-content, or fallback to textContent
        const btnTextSpan = originalBtn.querySelector('.qom-btn-content span');
        if (btnTextSpan) {
          buttonLabel = btnTextSpan.textContent.trim();
        } else {
          buttonLabel = originalBtn.textContent.trim() || 'Add All to Cart';
        }
      }

      // Clone the footer
      const footerClone = originalFooter.cloneNode(true);
      footerClone.classList.add('qom-footer--clone');

      // Strip Alpine directives to prevent Alpine from processing the clone
      this.stripAlpineAttributes(footerClone);

      // Also remove any inline display:none styles that Alpine might have set
      footerClone.querySelectorAll('*').forEach(el => {
        if (el.style.display === 'none') {
          el.style.removeProperty('display');
        }
      });

      // Don't set display on totals sections here - let updateFooterClone handle it
      // Just set up the flex properties for when they are shown
      footerClone.querySelectorAll('.qom-totals').forEach(totals => {
        Object.assign(totals.style, {
          alignItems: 'center',
          gap: '24px'
        });
        // Initially hide all totals - updateFooterClone will show the right one
        totals.style.display = 'none';
      });

      // Style total items and price containers
      footerClone.querySelectorAll('.qom-total-items, .qom-total-price').forEach(container => {
        Object.assign(container.style, {
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        });
      });

      // Style labels
      footerClone.querySelectorAll('.qom-total-label').forEach(label => {
        Object.assign(label.style, {
          color: '#6b7280',
          fontSize: '14px'
        });
      });

      // Style values
      footerClone.querySelectorAll('.qom-total-value').forEach(value => {
        Object.assign(value.style, {
          fontWeight: '600',
          fontSize: '16px',
          color: '#111827'
        });
      });

      // Apply essential inline styles for fixed positioning
      footerClone.classList.add('qom-footer--clone');

      // Ensure the button exists and is properly set up
      const addBtn = footerClone.querySelector('.qom-add-all-btn');
      if (addBtn) {
        // Just set up the event listener, styling is handled by CSS
        addBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.addAllToCart();
        });
      }

      const clearAllBtn = footerClone.querySelector('.qom-clear-all');
      if (clearAllBtn) {
        // Explicitly set up the clear all button from the clone
        clearAllBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.resetQuantities();
        });
      }

      const exportBtn = footerClone.querySelector('.qom-export-btn');
      if (exportBtn) {
        exportBtn.style.display = 'inline-flex';
        exportBtn.addEventListener('click', (e) => {
          e.preventDefault();
          if (typeof this.exportToCSV === 'function') this.exportToCSV();
        });
      }

      // Move clone to body
      document.body.appendChild(footerClone);

      // Hide original
      originalFooter.style.display = 'none';

      // Store reference and button label
      this._footerClone = footerClone;
      this._buttonLabel = buttonLabel;

      // Initial update
      this.updateFooterClone();
    },

    updateFooterClone() {
      if (!this._footerClone) return;

      const clone = this._footerClone;

      // Get both totals sections - the one with items and the empty state
      const allTotals = clone.querySelectorAll('.qom-totals');
      const emptyMessage = clone.querySelector('.qom-empty-cart-message');
      const totalsWithItems = clone.querySelector('.qom-total-items')?.closest('.qom-totals');

      // Hide all totals sections first, then show the appropriate one
      allTotals.forEach(totals => {
        totals.style.display = 'none';
      });

      if (this.totalItems > 0) {
        // Show the totals section with items and price
        if (totalsWithItems) {
          totalsWithItems.style.setProperty('display', 'flex', 'important');
        } else if (allTotals.length > 0) {
          // Fallback: show first totals section
          allTotals[0].style.setProperty('display', 'flex', 'important');
        }
      } else {
        // Show empty message section
        const emptyTotals = clone.querySelector('.qom-totals--empty');
        if (emptyTotals) {
          emptyTotals.style.setProperty('display', 'flex', 'important');
        } else if (emptyMessage) {
          const parentTotals = emptyMessage.closest('.qom-totals');
          if (parentTotals) {
            parentTotals.style.setProperty('display', 'flex', 'important');
          }
        } else if (allTotals.length > 1) {
          // Fallback: show second totals section (empty state)
          allTotals[1].style.setProperty('display', 'flex', 'important');
        }
      }

      // Ensure clone itself is visible
      clone.style.setProperty('visibility', 'visible', 'important');
      clone.style.setProperty('opacity', '1', 'important');

      // Update values in the visible totals section
      const itemsValue = clone.querySelector('.qom-total-items .qom-total-value');
      if (itemsValue) itemsValue.textContent = this.totalItems;

      const priceValue = clone.querySelector('.qom-total-price .qom-total-value');
      if (priceValue) priceValue.textContent = this.formatMoney(this.totalPrice);

      // Update button state
      const addBtn = clone.querySelector('.qom-add-all-btn');
      if (addBtn) {
        addBtn.disabled = this.isSubmitting || this.totalItems === 0;
        addBtn.classList.toggle('qom-btn--loading', this.isSubmitting);
        addBtn.style.display = 'inline-flex';

        // Update button content and spinner visibility
        const btnContent = addBtn.querySelector('.qom-btn-content');
        const spinnerSpan = addBtn.querySelector('.qom-spinner');

        if (btnContent) {
          btnContent.style.display = this.isSubmitting ? 'none' : 'inline-flex';
        }
        if (spinnerSpan) {
          if (this.isSubmitting) {
            spinnerSpan.style.display = 'inline-block';
            spinnerSpan.style.visibility = 'visible';
          } else {
            spinnerSpan.style.display = 'none';
            spinnerSpan.style.visibility = 'hidden';
          }
        }

        // Update button opacity based on disabled state
        if (addBtn.disabled) {
          addBtn.style.opacity = '0.6';
          addBtn.style.cursor = 'not-allowed';
        } else {
          addBtn.style.opacity = '1';
          addBtn.style.cursor = 'pointer';
        }
      }

      // Handle clear all link visibility
      const clearAllBtn = clone.querySelector('.qom-clear-all');
      if (clearAllBtn) {
        clearAllBtn.style.display = this.totalItems > 0 ? 'inline-block' : 'none';
      }

      // Handle export button if present
      const exportBtn = clone.querySelector('.qom-export-btn');
      if (exportBtn) {
        exportBtn.style.display = 'inline-flex';
      }
    },

    // -------------------------
    // Utilities
    // -------------------------
    chunkArray(array, size) {
      const chunks = [];
      for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
      }
      return chunks;
    },

    delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },

    resetQuantities() {
      this.showClearConfirm = true;
    },

    confirmReset() {
      this.quantities = {};
      this.prices = {};
      this.totalItems = 0;
      this.totalPrice = 0;
      document.querySelectorAll(".qom-qty-input").forEach((input) => {
        input.value = "";
      });
      this.recalculateTotals();
      this.showClearConfirm = false;
    },

    cancelReset() {
      this.showClearConfirm = false;
    },

    formatMoney(cents) {
      const format = window.qomMoneyFormat || "${{amount}}";
      const amount = (cents / 100).toFixed(2);
      return format
        .replace("{{amount}}", amount)
        .replace("{{amount_no_decimals}}", Math.round(cents / 100))
        .replace("{{amount_with_comma_separator}}", amount.replace(".", ","));
    },

    copyToClipboard(text) {
      if (!text || text === "-") return;
      const message = this.messages.copied || "SKU copied!";
      navigator.clipboard
        .writeText(text)
        .then(() => {
          this.showToast(message, "success");
        })
        .catch(() => {
          const textarea = document.createElement("textarea");
          textarea.value = text;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
          this.showToast(message, "success");
        });
    },

    showToast(message, type = "success") {
      if (this.toastTimeout) {
        clearTimeout(this.toastTimeout);
        this.toastTimeout = null;
      }

      // Update Alpine state for toast
      this.toast = { show: true, message, type };

      this.toastTimeout = setTimeout(() => {
        this.toast.show = false;
        setTimeout(() => {
          this.toastTimeout = null;
        }, 350);
      }, 3000);
    },

    hideManualToast() {
      // No-op for backward compatibility if called, but can be removed if certain
    },
  }));
}

// Initialize when Alpine is ready
if (typeof window.Alpine !== 'undefined') {
  // Alpine already loaded
  initQOMController();
} else {
  // Wait for Alpine to load
  document.addEventListener('alpine:init', () => {
    initQOMController();
  });
}
