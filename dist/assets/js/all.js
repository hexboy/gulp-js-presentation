"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! highlight.js v9.12.0 | BSD3 License | git.io/hljslicense */
!function (e) {
  var t = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self;"undefined" != typeof exports ? e(exports) : t && (t.hljs = e({}), "function" == typeof define && define.amd && define([], function () {
    return t.hljs;
  }));
}(function (e) {
  function t(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }function r(e) {
    return e.nodeName.toLowerCase();
  }function a(e, t) {
    var r = e && e.exec(t);return r && 0 === r.index;
  }function n(e) {
    return E.test(e);
  }function i(e) {
    var t,
        r,
        a,
        i,
        s = e.className + " ";if (s += e.parentNode ? e.parentNode.className : "", r = M.exec(s)) return w(r[1]) ? r[1] : "no-highlight";for (s = s.split(/\s+/), t = 0, a = s.length; a > t; t++) {
      if (i = s[t], n(i) || w(i)) return i;
    }
  }function s(e) {
    var t,
        r = {},
        a = Array.prototype.slice.call(arguments, 1);for (t in e) {
      r[t] = e[t];
    }return a.forEach(function (e) {
      for (t in e) {
        r[t] = e[t];
      }
    }), r;
  }function c(e) {
    var t = [];return function a(e, n) {
      for (var i = e.firstChild; i; i = i.nextSibling) {
        3 === i.nodeType ? n += i.nodeValue.length : 1 === i.nodeType && (t.push({ event: "start", offset: n, node: i }), n = a(i, n), r(i).match(/br|hr|img|input/) || t.push({ event: "stop", offset: n, node: i }));
      }return n;
    }(e, 0), t;
  }function o(e, a, n) {
    function i() {
      return e.length && a.length ? e[0].offset !== a[0].offset ? e[0].offset < a[0].offset ? e : a : "start" === a[0].event ? e : a : e.length ? e : a;
    }function s(e) {
      function a(e) {
        return " " + e.nodeName + '="' + t(e.value).replace('"', "&quot;") + '"';
      }u += "<" + r(e) + N.map.call(e.attributes, a).join("") + ">";
    }function c(e) {
      u += "</" + r(e) + ">";
    }function o(e) {
      ("start" === e.event ? s : c)(e.node);
    }for (var l = 0, u = "", d = []; e.length || a.length;) {
      var b = i();if (u += t(n.substring(l, b[0].offset)), l = b[0].offset, b === e) {
        d.reverse().forEach(c);do {
          o(b.splice(0, 1)[0]), b = i();
        } while (b === e && b.length && b[0].offset === l);d.reverse().forEach(s);
      } else "start" === b[0].event ? d.push(b[0].node) : d.pop(), o(b.splice(0, 1)[0]);
    }return u + t(n.substr(l));
  }function l(e) {
    return e.v && !e.cached_variants && (e.cached_variants = e.v.map(function (t) {
      return s(e, { v: null }, t);
    })), e.cached_variants || e.eW && [s(e)] || [e];
  }function u(e) {
    function t(e) {
      return e && e.source || e;
    }function r(r, a) {
      return new RegExp(t(r), "m" + (e.cI ? "i" : "") + (a ? "g" : ""));
    }function a(n, i) {
      if (!n.compiled) {
        if (n.compiled = !0, n.k = n.k || n.bK, n.k) {
          var s = {},
              c = function c(t, r) {
            e.cI && (r = r.toLowerCase()), r.split(" ").forEach(function (e) {
              var r = e.split("|");s[r[0]] = [t, r[1] ? Number(r[1]) : 1];
            });
          };"string" == typeof n.k ? c("keyword", n.k) : k(n.k).forEach(function (e) {
            c(e, n.k[e]);
          }), n.k = s;
        }n.lR = r(n.l || /\w+/, !0), i && (n.bK && (n.b = "\\b(" + n.bK.split(" ").join("|") + ")\\b"), n.b || (n.b = /\B|\b/), n.bR = r(n.b), n.e || n.eW || (n.e = /\B|\b/), n.e && (n.eR = r(n.e)), n.tE = t(n.e) || "", n.eW && i.tE && (n.tE += (n.e ? "|" : "") + i.tE)), n.i && (n.iR = r(n.i)), null == n.r && (n.r = 1), n.c || (n.c = []), n.c = Array.prototype.concat.apply([], n.c.map(function (e) {
          return l("self" === e ? n : e);
        })), n.c.forEach(function (e) {
          a(e, n);
        }), n.starts && a(n.starts, i);var o = n.c.map(function (e) {
          return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b;
        }).concat([n.tE, n.i]).map(t).filter(Boolean);n.t = o.length ? r(o.join("|"), !0) : { exec: function exec() {
            return null;
          } };
      }
    }a(e);
  }function d(e, r, n, i) {
    function s(e, t) {
      var r, n;for (r = 0, n = t.c.length; n > r; r++) {
        if (a(t.c[r].bR, e)) return t.c[r];
      }
    }function c(e, t) {
      if (a(e.eR, t)) {
        for (; e.endsParent && e.parent;) {
          e = e.parent;
        }return e;
      }return e.eW ? c(e.parent, t) : void 0;
    }function o(e, t) {
      return !n && a(t.iR, e);
    }function l(e, t) {
      var r = v.cI ? t[0].toLowerCase() : t[0];return e.k.hasOwnProperty(r) && e.k[r];
    }function p(e, t, r, a) {
      var n = a ? "" : L.classPrefix,
          i = '<span class="' + n,
          s = r ? "" : R;return i += e + '">', i + t + s;
    }function m() {
      var e, r, a, n;if (!N.k) return t(E);for (n = "", r = 0, N.lR.lastIndex = 0, a = N.lR.exec(E); a;) {
        n += t(E.substring(r, a.index)), e = l(N, a), e ? (M += e[1], n += p(e[0], t(a[0]))) : n += t(a[0]), r = N.lR.lastIndex, a = N.lR.exec(E);
      }return n + t(E.substr(r));
    }function f() {
      var e = "string" == typeof N.sL;if (e && !x[N.sL]) return t(E);var r = e ? d(N.sL, E, !0, k[N.sL]) : b(E, N.sL.length ? N.sL : void 0);return N.r > 0 && (M += r.r), e && (k[N.sL] = r.top), p(r.language, r.value, !1, !0);
    }function g() {
      C += null != N.sL ? f() : m(), E = "";
    }function _(e) {
      C += e.cN ? p(e.cN, "", !0) : "", N = Object.create(e, { parent: { value: N } });
    }function h(e, t) {
      if (E += e, null == t) return g(), 0;var r = s(t, N);if (r) return r.skip ? E += t : (r.eB && (E += t), g(), r.rB || r.eB || (E = t)), _(r, t), r.rB ? 0 : t.length;var a = c(N, t);if (a) {
        var n = N;n.skip ? E += t : (n.rE || n.eE || (E += t), g(), n.eE && (E = t));do {
          N.cN && (C += R), N.skip || (M += N.r), N = N.parent;
        } while (N !== a.parent);return a.starts && _(a.starts, ""), n.rE ? 0 : t.length;
      }if (o(t, N)) throw new Error('Illegal lexeme "' + t + '" for mode "' + (N.cN || "<unnamed>") + '"');return E += t, t.length || 1;
    }var v = w(e);if (!v) throw new Error('Unknown language: "' + e + '"');u(v);var y,
        N = i || v,
        k = {},
        C = "";for (y = N; y !== v; y = y.parent) {
      y.cN && (C = p(y.cN, "", !0) + C);
    }var E = "",
        M = 0;try {
      for (var B, S, $ = 0;;) {
        if (N.t.lastIndex = $, B = N.t.exec(r), !B) break;S = h(r.substring($, B.index), B[0]), $ = B.index + S;
      }for (h(r.substr($)), y = N; y.parent; y = y.parent) {
        y.cN && (C += R);
      }return { r: M, value: C, language: e, top: N };
    } catch (A) {
      if (A.message && -1 !== A.message.indexOf("Illegal")) return { r: 0, value: t(r) };throw A;
    }
  }function b(e, r) {
    r = r || L.languages || k(x);var a = { r: 0, value: t(e) },
        n = a;return r.filter(w).forEach(function (t) {
      var r = d(t, e, !1);r.language = t, r.r > n.r && (n = r), r.r > a.r && (n = a, a = r);
    }), n.language && (a.second_best = n), a;
  }function p(e) {
    return L.tabReplace || L.useBR ? e.replace(B, function (e, t) {
      return L.useBR && "\n" === e ? "<br>" : L.tabReplace ? t.replace(/\t/g, L.tabReplace) : "";
    }) : e;
  }function m(e, t, r) {
    var a = t ? C[t] : r,
        n = [e.trim()];return e.match(/\bhljs\b/) || n.push("hljs"), -1 === e.indexOf(a) && n.push(a), n.join(" ").trim();
  }function f(e) {
    var t,
        r,
        a,
        s,
        l,
        u = i(e);n(u) || (L.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : t = e, l = t.textContent, a = u ? d(u, l, !0) : b(l), r = c(t), r.length && (s = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), s.innerHTML = a.value, a.value = o(r, c(s), l)), a.value = p(a.value), e.innerHTML = a.value, e.className = m(e.className, u, a.language), e.result = { language: a.language, re: a.r }, a.second_best && (e.second_best = { language: a.second_best.language, re: a.second_best.r }));
  }function g(e) {
    L = s(L, e);
  }function _() {
    if (!_.called) {
      _.called = !0;var e = document.querySelectorAll("pre code");N.forEach.call(e, f);
    }
  }function h() {
    addEventListener("DOMContentLoaded", _, !1), addEventListener("load", _, !1);
  }function v(t, r) {
    var a = x[t] = r(e);a.aliases && a.aliases.forEach(function (e) {
      C[e] = t;
    });
  }function y() {
    return k(x);
  }function w(e) {
    return e = (e || "").toLowerCase(), x[e] || x[C[e]];
  }var N = [],
      k = Object.keys,
      x = {},
      C = {},
      E = /^(no-?highlight|plain|text)$/i,
      M = /\blang(?:uage)?-([\w-]+)\b/i,
      B = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
      R = "</span>",
      L = { classPrefix: "hljs-", tabReplace: null, useBR: !1, languages: void 0 };return e.highlight = d, e.highlightAuto = b, e.fixMarkup = p, e.highlightBlock = f, e.configure = g, e.initHighlighting = _, e.initHighlightingOnLoad = h, e.registerLanguage = v, e.listLanguages = y, e.getLanguage = w, e.inherit = s, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = { b: "\\\\[\\s\\S]", r: 0 }, e.ASM = { cN: "string", b: "'", e: "'", i: "\\n", c: [e.BE] }, e.QSM = { cN: "string", b: '"', e: '"', i: "\\n", c: [e.BE] }, e.PWM = { b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ }, e.C = function (t, r, a) {
    var n = e.inherit({ cN: "comment", b: t, e: r, c: [] }, a || {});return n.c.push(e.PWM), n.c.push({ cN: "doctag", b: "(?:TODO|FIXME|NOTE|BUG|XXX):", r: 0 }), n;
  }, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = { cN: "number", b: e.NR, r: 0 }, e.CNM = { cN: "number", b: e.CNR, r: 0 }, e.BNM = { cN: "number", b: e.BNR, r: 0 }, e.CSSNM = { cN: "number", b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?", r: 0 }, e.RM = { cN: "regexp", b: /\//, e: /\/[gimuy]*/, i: /\n/, c: [e.BE, { b: /\[/, e: /\]/, r: 0, c: [e.BE] }] }, e.TM = { cN: "title", b: e.IR, r: 0 }, e.UTM = { cN: "title", b: e.UIR, r: 0 }, e.METHOD_GUARD = { b: "\\.\\s*" + e.UIR, r: 0 }, e.registerLanguage("apache", function (e) {
    var t = { cN: "number", b: "[\\$%]\\d+" };return { aliases: ["apacheconf"], cI: !0, c: [e.HCM, { cN: "section", b: "</?", e: ">" }, { cN: "attribute", b: /\w+/, r: 0, k: { nomarkup: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername" }, starts: { e: /$/, r: 0, k: { literal: "on off all" }, c: [{ cN: "meta", b: "\\s\\[", e: "\\]$" }, { cN: "variable", b: "[\\$%]\\{", e: "\\}", c: ["self", t] }, t, e.QSM] } }], i: /\S/ };
  }), e.registerLanguage("bash", function (e) {
    var t = { cN: "variable", v: [{ b: /\$[\w\d#@][\w\d_]*/ }, { b: /\$\{(.*?)}/ }] },
        r = { cN: "string", b: /"/, e: /"/, c: [e.BE, t, { cN: "variable", b: /\$\(/, e: /\)/, c: [e.BE] }] },
        a = { cN: "string", b: /'/, e: /'/ };return { aliases: ["sh", "zsh"], l: /\b-?[a-z\._]+\b/, k: { keyword: "if then else elif fi for while in do done case esac function", literal: "true false", built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp", _: "-ne -eq -lt -gt -f -d -e -s -l -a" }, c: [{ cN: "meta", b: /^#![^\n]+sh\s*$/, r: 10 }, { cN: "function", b: /\w[\w\d_]*\s*\(\s*\)\s*\{/, rB: !0, c: [e.inherit(e.TM, { b: /\w[\w\d_]*/ })], r: 0 }, e.HCM, r, a, t] };
  }), e.registerLanguage("coffeescript", function (e) {
    var t = { keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not", literal: "true false null undefined yes no on off", built_in: "npm require console print module global window document" },
        r = "[A-Za-z$_][0-9A-Za-z$_]*",
        a = { cN: "subst", b: /#\{/, e: /}/, k: t },
        n = [e.BNM, e.inherit(e.CNM, { starts: { e: "(\\s*/)?", r: 0 } }), { cN: "string", v: [{ b: /'''/, e: /'''/, c: [e.BE] }, { b: /'/, e: /'/, c: [e.BE] }, { b: /"""/, e: /"""/, c: [e.BE, a] }, { b: /"/, e: /"/, c: [e.BE, a] }] }, { cN: "regexp", v: [{ b: "///", e: "///", c: [a, e.HCM] }, { b: "//[gim]*", r: 0 }, { b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/ }] }, { b: "@" + r }, { sL: "javascript", eB: !0, eE: !0, v: [{ b: "```", e: "```" }, { b: "`", e: "`" }] }];a.c = n;var i = e.inherit(e.TM, { b: r }),
        s = "(\\(.*\\))?\\s*\\B[-=]>",
        c = { cN: "params", b: "\\([^\\(]", rB: !0, c: [{ b: /\(/, e: /\)/, k: t, c: ["self"].concat(n) }] };return { aliases: ["coffee", "cson", "iced"], k: t, i: /\/\*/, c: n.concat([e.C("###", "###"), e.HCM, { cN: "function", b: "^\\s*" + r + "\\s*=\\s*" + s, e: "[-=]>", rB: !0, c: [i, c] }, { b: /[:\(,=]\s*/, r: 0, c: [{ cN: "function", b: s, e: "[-=]>", rB: !0, c: [c] }] }, { cN: "class", bK: "class", e: "$", i: /[:="\[\]]/, c: [{ bK: "extends", eW: !0, i: /[:="\[\]]/, c: [i] }, i] }, { b: r + ":", e: ":", rB: !0, rE: !0, r: 0 }]) };
  }), e.registerLanguage("cpp", function (e) {
    var t = { cN: "keyword", b: "\\b[a-z\\d_]*_t\\b" },
        r = { cN: "string", v: [{ b: '(u8?|U)?L?"', e: '"', i: "\\n", c: [e.BE] }, { b: '(u8?|U)?R"', e: '"', c: [e.BE] }, { b: "'\\\\?.", e: "'", i: "." }] },
        a = { cN: "number", v: [{ b: "\\b(0b[01']+)" }, { b: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" }, { b: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }], r: 0 },
        n = { cN: "meta", b: /#\s*[a-z]+\b/, e: /$/, k: { "meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef include" }, c: [{ b: /\\\n/, r: 0 }, e.inherit(r, { cN: "meta-string" }), { cN: "meta-string", b: /<[^\n>]*>/, e: /$/, i: "\\n" }, e.CLCM, e.CBCM] },
        i = e.IR + "\\s*\\(",
        s = { keyword: "int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and or not", built_in: "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr", literal: "true false nullptr NULL" },
        c = [t, e.CLCM, e.CBCM, a, r];return { aliases: ["c", "cc", "h", "c++", "h++", "hpp"], k: s, i: "</", c: c.concat([n, { b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<", e: ">", k: s, c: ["self", t] }, { b: e.IR + "::", k: s }, { v: [{ b: /=/, e: /;/ }, { b: /\(/, e: /\)/ }, { bK: "new throw return else", e: /;/ }], k: s, c: c.concat([{ b: /\(/, e: /\)/, k: s, c: c.concat(["self"]), r: 0 }]), r: 0 }, { cN: "function", b: "(" + e.IR + "[\\*&\\s]+)+" + i, rB: !0, e: /[{;=]/, eE: !0, k: s, i: /[^\w\s\*&]/, c: [{ b: i, rB: !0, c: [e.TM], r: 0 }, { cN: "params", b: /\(/, e: /\)/, k: s, r: 0, c: [e.CLCM, e.CBCM, r, a, t] }, e.CLCM, e.CBCM, n] }, { cN: "class", bK: "class struct", e: /[{;:]/, c: [{ b: /</, e: />/, c: ["self"] }, e.TM] }]), exports: { preprocessor: n, strings: r, k: s } };
  }), e.registerLanguage("cs", function (e) {
    var t = { keyword: "abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long nameof object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield", literal: "null false true" },
        r = { cN: "string", b: '@"', e: '"', c: [{ b: '""' }] },
        a = e.inherit(r, { i: /\n/ }),
        n = { cN: "subst", b: "{", e: "}", k: t },
        i = e.inherit(n, { i: /\n/ }),
        s = { cN: "string", b: /\$"/, e: '"', i: /\n/, c: [{ b: "{{" }, { b: "}}" }, e.BE, i] },
        c = { cN: "string", b: /\$@"/, e: '"', c: [{ b: "{{" }, { b: "}}" }, { b: '""' }, n] },
        o = e.inherit(c, { i: /\n/, c: [{ b: "{{" }, { b: "}}" }, { b: '""' }, i] });n.c = [c, s, r, e.ASM, e.QSM, e.CNM, e.CBCM], i.c = [o, s, a, e.ASM, e.QSM, e.CNM, e.inherit(e.CBCM, { i: /\n/ })];var l = { v: [c, s, r, e.ASM, e.QSM] },
        u = e.IR + "(<" + e.IR + "(\\s*,\\s*" + e.IR + ")*>)?(\\[\\])?";return { aliases: ["csharp"], k: t, i: /::/, c: [e.C("///", "$", { rB: !0, c: [{ cN: "doctag", v: [{ b: "///", r: 0 }, { b: "<!--|-->" }, { b: "</?", e: ">" }] }] }), e.CLCM, e.CBCM, { cN: "meta", b: "#", e: "$", k: { "meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum" } }, l, e.CNM, { bK: "class interface", e: /[{;=]/, i: /[^\s:]/, c: [e.TM, e.CLCM, e.CBCM] }, { bK: "namespace", e: /[{;=]/, i: /[^\s:]/, c: [e.inherit(e.TM, { b: "[a-zA-Z](\\.?\\w)*" }), e.CLCM, e.CBCM] }, { cN: "meta", b: "^\\s*\\[", eB: !0, e: "\\]", eE: !0, c: [{ cN: "meta-string", b: /"/, e: /"/ }] }, { bK: "new return throw await else", r: 0 }, { cN: "function", b: "(" + u + "\\s+)+" + e.IR + "\\s*\\(", rB: !0, e: /[{;=]/, eE: !0, k: t, c: [{ b: e.IR + "\\s*\\(", rB: !0, c: [e.TM], r: 0 }, { cN: "params", b: /\(/, e: /\)/, eB: !0, eE: !0, k: t, r: 0, c: [l, e.CNM, e.CBCM] }, e.CLCM, e.CBCM] }] };
  }), e.registerLanguage("css", function (e) {
    var t = "[a-zA-Z-][a-zA-Z0-9_-]*",
        r = { b: /[A-Z\_\.\-]+\s*:/, rB: !0, e: ";", eW: !0, c: [{ cN: "attribute", b: /\S/, e: ":", eE: !0, starts: { eW: !0, eE: !0, c: [{ b: /[\w-]+\(/, rB: !0, c: [{ cN: "built_in", b: /[\w-]+/ }, { b: /\(/, e: /\)/, c: [e.ASM, e.QSM] }] }, e.CSSNM, e.QSM, e.ASM, e.CBCM, { cN: "number", b: "#[0-9A-Fa-f]+" }, { cN: "meta", b: "!important" }] } }] };return { cI: !0, i: /[=\/|'\$]/, c: [e.CBCM, { cN: "selector-id", b: /#[A-Za-z0-9_-]+/ }, { cN: "selector-class", b: /\.[A-Za-z0-9_-]+/ }, { cN: "selector-attr", b: /\[/, e: /\]/, i: "$" }, { cN: "selector-pseudo", b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/ }, { b: "@(font-face|page)", l: "[a-z-]+", k: "font-face page" }, { b: "@", e: "[{;]", i: /:/, c: [{ cN: "keyword", b: /\w+/ }, { b: /\s/, eW: !0, eE: !0, r: 0, c: [e.ASM, e.QSM, e.CSSNM] }] }, { cN: "selector-tag", b: t, r: 0 }, { b: "{", e: "}", i: /\S/, c: [e.CBCM, r] }] };
  }), e.registerLanguage("diff", function (e) {
    return { aliases: ["patch"], c: [{ cN: "meta", r: 10, v: [{ b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/ }, { b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/ }, { b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/ }] }, { cN: "comment", v: [{ b: /Index: /, e: /$/ }, { b: /={3,}/, e: /$/ }, { b: /^\-{3}/, e: /$/ }, { b: /^\*{3} /, e: /$/ }, { b: /^\+{3}/, e: /$/ }, { b: /\*{5}/, e: /\*{5}$/ }] }, { cN: "addition", b: "^\\+", e: "$" }, { cN: "deletion", b: "^\\-", e: "$" }, { cN: "addition", b: "^\\!", e: "$" }] };
  }), e.registerLanguage("http", function (e) {
    var t = "HTTP/[0-9\\.]+";return { aliases: ["https"], i: "\\S", c: [{ b: "^" + t, e: "$", c: [{ cN: "number", b: "\\b\\d{3}\\b" }] }, { b: "^[A-Z]+ (.*?) " + t + "$", rB: !0, e: "$", c: [{ cN: "string", b: " ", e: " ", eB: !0, eE: !0 }, { b: t }, { cN: "keyword", b: "[A-Z]+" }] }, { cN: "attribute", b: "^\\w", e: ": ", eE: !0, i: "\\n|\\s|=", starts: { e: "$", r: 0 } }, { b: "\\n\\n", starts: { sL: [], eW: !0 } }] };
  }), e.registerLanguage("ini", function (e) {
    var t = { cN: "string", c: [e.BE], v: [{ b: "'''", e: "'''", r: 10 }, { b: '"""', e: '"""', r: 10 }, { b: '"', e: '"' }, { b: "'", e: "'" }] };return { aliases: ["toml"], cI: !0, i: /\S/, c: [e.C(";", "$"), e.HCM, { cN: "section", b: /^\s*\[+/, e: /\]+/ }, { b: /^[a-z0-9\[\]_-]+\s*=\s*/, e: "$", rB: !0, c: [{ cN: "attr", b: /[a-z0-9\[\]_-]+/ }, { b: /=/, eW: !0, r: 0, c: [{ cN: "literal", b: /\bon|off|true|false|yes|no\b/ }, { cN: "variable", v: [{ b: /\$[\w\d"][\w\d_]*/ }, { b: /\$\{(.*?)}/ }] }, t, { cN: "number", b: /([\+\-]+)?[\d]+_[\d_]+/ }, e.NM] }] }] };
  }), e.registerLanguage("java", function (e) {
    var t = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",
        r = t + "(<" + t + "(\\s*,\\s*" + t + ")*>)?",
        a = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",
        n = "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
        i = { cN: "number", b: n, r: 0 };return { aliases: ["jsp"], k: a, i: /<\/|#/, c: [e.C("/\\*\\*", "\\*/", { r: 0, c: [{ b: /\w+@/, r: 0 }, { cN: "doctag", b: "@[A-Za-z]+" }] }), e.CLCM, e.CBCM, e.ASM, e.QSM, { cN: "class", bK: "class interface", e: /[{;=]/, eE: !0, k: "class interface", i: /[:"\[\]]/, c: [{ bK: "extends implements" }, e.UTM] }, { bK: "new throw return else", r: 0 }, { cN: "function", b: "(" + r + "\\s+)+" + e.UIR + "\\s*\\(", rB: !0, e: /[{;=]/, eE: !0, k: a, c: [{ b: e.UIR + "\\s*\\(", rB: !0, r: 0, c: [e.UTM] }, { cN: "params", b: /\(/, e: /\)/, k: a, r: 0, c: [e.ASM, e.QSM, e.CNM, e.CBCM] }, e.CLCM, e.CBCM] }, i, { cN: "meta", b: "@[A-Za-z]+" }] };
  }), e.registerLanguage("javascript", function (e) {
    var t = "[A-Za-z$_][0-9A-Za-z$_]*",
        r = { keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as", literal: "true false null undefined NaN Infinity", built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise" },
        a = { cN: "number", v: [{ b: "\\b(0[bB][01]+)" }, { b: "\\b(0[oO][0-7]+)" }, { b: e.CNR }], r: 0 },
        n = { cN: "subst", b: "\\$\\{", e: "\\}", k: r, c: [] },
        i = { cN: "string", b: "`", e: "`", c: [e.BE, n] };n.c = [e.ASM, e.QSM, i, a, e.RM];var s = n.c.concat([e.CBCM, e.CLCM]);return { aliases: ["js", "jsx"], k: r, c: [{ cN: "meta", r: 10, b: /^\s*['"]use (strict|asm)['"]/ }, { cN: "meta", b: /^#!/, e: /$/ }, e.ASM, e.QSM, i, e.CLCM, e.CBCM, a, { b: /[{,]\s*/, r: 0, c: [{ b: t + "\\s*:", rB: !0, r: 0, c: [{ cN: "attr", b: t, r: 0 }] }] }, { b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*", k: "return throw case", c: [e.CLCM, e.CBCM, e.RM, { cN: "function", b: "(\\(.*?\\)|" + t + ")\\s*=>", rB: !0, e: "\\s*=>", c: [{ cN: "params", v: [{ b: t }, { b: /\(\s*\)/ }, { b: /\(/, e: /\)/, eB: !0, eE: !0, k: r, c: s }] }] }, { b: /</, e: /(\/\w+|\w+\/)>/, sL: "xml", c: [{ b: /<\w+\s*\/>/, skip: !0 }, { b: /<\w+/, e: /(\/\w+|\w+\/)>/, skip: !0, c: [{ b: /<\w+\s*\/>/, skip: !0 }, "self"] }] }], r: 0 }, { cN: "function", bK: "function", e: /\{/, eE: !0, c: [e.inherit(e.TM, { b: t }), { cN: "params", b: /\(/, e: /\)/, eB: !0, eE: !0, c: s }], i: /\[|%/ }, { b: /\$[(.]/ }, e.METHOD_GUARD, { cN: "class", bK: "class", e: /[{;=]/, eE: !0, i: /[:"\[\]]/, c: [{ bK: "extends" }, e.UTM] }, { bK: "constructor", e: /\{/, eE: !0 }], i: /#(?!!)/ };
  }), e.registerLanguage("json", function (e) {
    var t = { literal: "true false null" },
        r = [e.QSM, e.CNM],
        a = { e: ",", eW: !0, eE: !0, c: r, k: t },
        n = { b: "{", e: "}", c: [{ cN: "attr", b: /"/, e: /"/, c: [e.BE], i: "\\n" }, e.inherit(a, { b: /:/ })], i: "\\S" },
        i = { b: "\\[", e: "\\]", c: [e.inherit(a)], i: "\\S" };return r.splice(r.length, 0, n, i), { c: r, k: t, i: "\\S" };
  }), e.registerLanguage("makefile", function (e) {
    var t = { cN: "variable", v: [{ b: "\\$\\(" + e.UIR + "\\)", c: [e.BE] }, { b: /\$[@%<?\^\+\*]/ }] },
        r = { cN: "string", b: /"/, e: /"/, c: [e.BE, t] },
        a = { cN: "variable", b: /\$\([\w-]+\s/, e: /\)/, k: { built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value" }, c: [t] },
        n = { b: "^" + e.UIR + "\\s*[:+?]?=", i: "\\n", rB: !0, c: [{ b: "^" + e.UIR, e: "[:+?]?=", eE: !0 }] },
        i = { cN: "meta", b: /^\.PHONY:/, e: /$/, k: { "meta-keyword": ".PHONY" }, l: /[\.\w]+/ },
        s = { cN: "section", b: /^[^\s]+:/, e: /$/, c: [t] };return { aliases: ["mk", "mak"], k: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath", l: /[\w-]+/, c: [e.HCM, t, r, a, n, i, s] };
  }), e.registerLanguage("xml", function (e) {
    var t = "[A-Za-z0-9\\._:-]+",
        r = { eW: !0, i: /</, r: 0, c: [{ cN: "attr", b: t, r: 0 }, { b: /=\s*/, r: 0, c: [{ cN: "string", endsParent: !0, v: [{ b: /"/, e: /"/ }, { b: /'/, e: /'/ }, { b: /[^\s"'=<>`]+/ }] }] }] };return { aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"], cI: !0, c: [{ cN: "meta", b: "<!DOCTYPE", e: ">", r: 10, c: [{ b: "\\[", e: "\\]" }] }, e.C("<!--", "-->", { r: 10 }), { b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10 }, { b: /<\?(php)?/, e: /\?>/, sL: "php", c: [{ b: "/\\*", e: "\\*/", skip: !0 }] }, { cN: "tag", b: "<style(?=\\s|>|$)", e: ">", k: { name: "style" }, c: [r], starts: { e: "</style>", rE: !0, sL: ["css", "xml"] } }, { cN: "tag", b: "<script(?=\\s|>|$)", e: ">", k: { name: "script" }, c: [r], starts: { e: "</script>", rE: !0, sL: ["actionscript", "javascript", "handlebars", "xml"] } }, { cN: "meta", v: [{ b: /<\?xml/, e: /\?>/, r: 10 }, { b: /<\?\w+/, e: /\?>/ }] }, { cN: "tag", b: "</?", e: "/?>", c: [{ cN: "name", b: /[^\/><\s]+/, r: 0 }, r] }] };
  }), e.registerLanguage("markdown", function (e) {
    return { aliases: ["md", "mkdown", "mkd"], c: [{ cN: "section", v: [{ b: "^#{1,6}", e: "$" }, { b: "^.+?\\n[=-]{2,}$" }] }, { b: "<", e: ">", sL: "xml", r: 0 }, { cN: "bullet", b: "^([*+-]|(\\d+\\.))\\s+" }, { cN: "strong", b: "[*_]{2}.+?[*_]{2}" }, { cN: "emphasis", v: [{ b: "\\*.+?\\*" }, { b: "_.+?_", r: 0 }] }, { cN: "quote", b: "^>\\s+", e: "$" }, { cN: "code", v: [{ b: "^```w*s*$", e: "^```s*$" }, { b: "`.+?`" }, { b: "^( {4}|	)", e: "$", r: 0 }] }, { b: "^[-\\*]{3,}", e: "$" }, { b: "\\[.+?\\][\\(\\[].*?[\\)\\]]", rB: !0, c: [{ cN: "string", b: "\\[", e: "\\]", eB: !0, rE: !0, r: 0 }, { cN: "link", b: "\\]\\(", e: "\\)", eB: !0, eE: !0 }, { cN: "symbol", b: "\\]\\[", e: "\\]", eB: !0, eE: !0 }], r: 10 }, { b: /^\[[^\n]+\]:/, rB: !0, c: [{ cN: "symbol", b: /\[/, e: /\]/, eB: !0, eE: !0 }, { cN: "link", b: /:\s*/, e: /$/, eB: !0 }] }] };
  }), e.registerLanguage("nginx", function (e) {
    var t = { cN: "variable", v: [{ b: /\$\d+/ }, { b: /\$\{/, e: /}/ }, { b: "[\\$\\@]" + e.UIR }] },
        r = { eW: !0, l: "[a-z/_]+", k: { literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll" }, r: 0, i: "=>", c: [e.HCM, { cN: "string", c: [e.BE, t], v: [{ b: /"/, e: /"/ }, { b: /'/, e: /'/ }] }, { b: "([a-z]+):/", e: "\\s", eW: !0, eE: !0, c: [t] }, { cN: "regexp", c: [e.BE, t], v: [{ b: "\\s\\^", e: "\\s|{|;", rE: !0 }, { b: "~\\*?\\s+", e: "\\s|{|;", rE: !0 }, { b: "\\*(\\.[a-z\\-]+)+" }, { b: "([a-z\\-]+\\.)+\\*" }] }, { cN: "number", b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b" }, { cN: "number", b: "\\b\\d+[kKmMgGdshdwy]*\\b", r: 0 }, t] };return { aliases: ["nginxconf"], c: [e.HCM, { b: e.UIR + "\\s+{", rB: !0, e: "{", c: [{ cN: "section", b: e.UIR }], r: 0 }, { b: e.UIR + "\\s", e: ";|{", rB: !0, c: [{ cN: "attribute", b: e.UIR, starts: r }], r: 0 }], i: "[^\\s\\}]" };
  }), e.registerLanguage("objectivec", function (e) {
    var t = { cN: "built_in", b: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+" },
        r = { keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN", literal: "false true FALSE TRUE nil YES NO NULL", built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once" },
        a = /[a-zA-Z@][a-zA-Z0-9_]*/,
        n = "@interface @class @protocol @implementation";return { aliases: ["mm", "objc", "obj-c"], k: r, l: a, i: "</", c: [t, e.CLCM, e.CBCM, e.CNM, e.QSM, { cN: "string", v: [{ b: '@"', e: '"', i: "\\n", c: [e.BE] }, { b: "'", e: "[^\\\\]'", i: "[^\\\\][^']" }] }, { cN: "meta", b: "#", e: "$", c: [{ cN: "meta-string", v: [{ b: '"', e: '"' }, { b: "<", e: ">" }] }] }, { cN: "class", b: "(" + n.split(" ").join("|") + ")\\b", e: "({|$)", eE: !0, k: n, l: a, c: [e.UTM] }, { b: "\\." + e.UIR, r: 0 }] };
  }), e.registerLanguage("perl", function (e) {
    var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
        r = { cN: "subst", b: "[$@]\\{", e: "\\}", k: t },
        a = { b: "->{", e: "}" },
        n = { v: [{ b: /\$\d/ }, { b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/ }, { b: /[\$%@][^\s\w{]/, r: 0 }] },
        i = [e.BE, r, n],
        s = [n, e.HCM, e.C("^\\=\\w", "\\=cut", { eW: !0 }), a, { cN: "string", c: i, v: [{ b: "q[qwxr]?\\s*\\(", e: "\\)", r: 5 }, { b: "q[qwxr]?\\s*\\[", e: "\\]", r: 5 }, { b: "q[qwxr]?\\s*\\{", e: "\\}", r: 5 }, { b: "q[qwxr]?\\s*\\|", e: "\\|", r: 5 }, { b: "q[qwxr]?\\s*\\<", e: "\\>", r: 5 }, { b: "qw\\s+q", e: "q", r: 5 }, { b: "'", e: "'", c: [e.BE] }, { b: '"', e: '"' }, { b: "`", e: "`", c: [e.BE] }, { b: "{\\w+}", c: [], r: 0 }, { b: "-?\\w+\\s*\\=\\>", c: [], r: 0 }] }, { cN: "number", b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b", r: 0 }, { b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*", k: "split return print reverse grep", r: 0, c: [e.HCM, { cN: "regexp", b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*", r: 10 }, { cN: "regexp", b: "(m|qr)?/", e: "/[a-z]*", c: [e.BE], r: 0 }] }, { cN: "function", bK: "sub", e: "(\\s*\\(.*?\\))?[;{]", eE: !0, r: 5, c: [e.TM] }, { b: "-\\w\\b", r: 0 }, { b: "^__DATA__$", e: "^__END__$", sL: "mojolicious", c: [{ b: "^@@.*", e: "$", cN: "comment" }] }];return r.c = s, a.c = s, { aliases: ["pl", "pm"], l: /[\w\.]+/, k: t, c: s };
  }), e.registerLanguage("php", function (e) {
    var t = { b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*" },
        r = { cN: "meta", b: /<\?(php)?|\?>/ },
        a = { cN: "string", c: [e.BE, r], v: [{ b: 'b"', e: '"' }, { b: "b'", e: "'" }, e.inherit(e.ASM, { i: null }), e.inherit(e.QSM, { i: null })] },
        n = { v: [e.BNM, e.CNM] };return { aliases: ["php3", "php4", "php5", "php6"], cI: !0, k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally", c: [e.HCM, e.C("//", "$", { c: [r] }), e.C("/\\*", "\\*/", { c: [{ cN: "doctag", b: "@[A-Za-z]+" }] }), e.C("__halt_compiler.+?;", !1, { eW: !0, k: "__halt_compiler", l: e.UIR }), { cN: "string", b: /<<<['"]?\w+['"]?$/, e: /^\w+;?$/, c: [e.BE, { cN: "subst", v: [{ b: /\$\w+/ }, { b: /\{\$/, e: /\}/ }] }] }, r, { cN: "keyword", b: /\$this\b/ }, t, { b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ }, { cN: "function", bK: "function", e: /[;{]/, eE: !0, i: "\\$|\\[|%", c: [e.UTM, { cN: "params", b: "\\(", e: "\\)", c: ["self", t, e.CBCM, a, n] }] }, { cN: "class", bK: "class interface", e: "{", eE: !0, i: /[:\(\$"]/, c: [{ bK: "extends implements" }, e.UTM] }, { bK: "namespace", e: ";", i: /[\.']/, c: [e.UTM] }, { bK: "use", e: ";", c: [e.UTM] }, { b: "=>" }, a, n] };
  }), e.registerLanguage("python", function (e) {
    var t = { keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False", built_in: "Ellipsis NotImplemented" },
        r = { cN: "meta", b: /^(>>>|\.\.\.) / },
        a = { cN: "subst", b: /\{/, e: /\}/, k: t, i: /#/ },
        n = { cN: "string", c: [e.BE], v: [{ b: /(u|b)?r?'''/, e: /'''/, c: [r], r: 10 }, { b: /(u|b)?r?"""/, e: /"""/, c: [r], r: 10 }, { b: /(fr|rf|f)'''/, e: /'''/, c: [r, a] }, { b: /(fr|rf|f)"""/, e: /"""/, c: [r, a] }, { b: /(u|r|ur)'/, e: /'/, r: 10 }, { b: /(u|r|ur)"/, e: /"/, r: 10 }, { b: /(b|br)'/, e: /'/ }, { b: /(b|br)"/, e: /"/ }, { b: /(fr|rf|f)'/, e: /'/, c: [a] }, { b: /(fr|rf|f)"/, e: /"/, c: [a] }, e.ASM, e.QSM] },
        i = { cN: "number", r: 0, v: [{ b: e.BNR + "[lLjJ]?" }, { b: "\\b(0o[0-7]+)[lLjJ]?" }, { b: e.CNR + "[lLjJ]?" }] },
        s = { cN: "params", b: /\(/, e: /\)/, c: ["self", r, i, n] };return a.c = [n, i, r], { aliases: ["py", "gyp"], k: t, i: /(<\/|->|\?)|=>/, c: [r, i, n, e.HCM, { v: [{ cN: "function", bK: "def" }, { cN: "class", bK: "class" }], e: /:/, i: /[${=;\n,]/, c: [e.UTM, s, { b: /->/, eW: !0, k: "None" }] }, { cN: "meta", b: /^[\t ]*@/, e: /$/ }, { b: /\b(print|exec)\(/ }] };
  }), e.registerLanguage("ruby", function (e) {
    var t = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
        r = { keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor", literal: "true false nil" },
        a = { cN: "doctag", b: "@[A-Za-z]+" },
        n = { b: "#<", e: ">" },
        i = [e.C("#", "$", { c: [a] }), e.C("^\\=begin", "^\\=end", { c: [a], r: 10 }), e.C("^__END__", "\\n$")],
        s = { cN: "subst", b: "#\\{", e: "}", k: r },
        c = { cN: "string", c: [e.BE, s], v: [{ b: /'/, e: /'/ }, { b: /"/, e: /"/ }, { b: /`/, e: /`/ }, { b: "%[qQwWx]?\\(", e: "\\)" }, { b: "%[qQwWx]?\\[", e: "\\]" }, { b: "%[qQwWx]?{", e: "}" }, { b: "%[qQwWx]?<", e: ">" }, { b: "%[qQwWx]?/", e: "/" }, { b: "%[qQwWx]?%", e: "%" }, { b: "%[qQwWx]?-", e: "-" }, { b: "%[qQwWx]?\\|", e: "\\|" }, { b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/ }, { b: /<<(-?)\w+$/, e: /^\s*\w+$/ }] },
        o = { cN: "params", b: "\\(", e: "\\)", endsParent: !0, k: r },
        l = [c, n, { cN: "class", bK: "class module", e: "$|;", i: /=/, c: [e.inherit(e.TM, { b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?" }), { b: "<\\s*", c: [{ b: "(" + e.IR + "::)?" + e.IR }] }].concat(i) }, { cN: "function", bK: "def", e: "$|;", c: [e.inherit(e.TM, { b: t }), o].concat(i) }, { b: e.IR + "::" }, { cN: "symbol", b: e.UIR + "(\\!|\\?)?:", r: 0 }, { cN: "symbol", b: ":(?!\\s)", c: [c, { b: t }], r: 0 }, { cN: "number", b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b", r: 0 }, { b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))" }, { cN: "params", b: /\|/, e: /\|/, k: r }, { b: "(" + e.RSR + "|unless)\\s*", k: "unless", c: [n, { cN: "regexp", c: [e.BE, s], i: /\n/, v: [{ b: "/", e: "/[a-z]*" }, { b: "%r{", e: "}[a-z]*" }, { b: "%r\\(", e: "\\)[a-z]*" }, { b: "%r!", e: "![a-z]*" }, { b: "%r\\[", e: "\\][a-z]*" }] }].concat(i), r: 0 }].concat(i);s.c = l, o.c = l;var u = "[>?]>",
        d = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
        b = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",
        p = [{ b: /^\s*=>/, starts: { e: "$", c: l } }, { cN: "meta", b: "^(" + u + "|" + d + "|" + b + ")", starts: { e: "$", c: l } }];return { aliases: ["rb", "gemspec", "podspec", "thor", "irb"], k: r, i: /\/\*/, c: i.concat(p).concat(l) };
  }), e.registerLanguage("shell", function (e) {
    return { aliases: ["console"], c: [{ cN: "meta", b: "^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]", starts: { e: "$", sL: "bash" } }] };
  }), e.registerLanguage("sql", function (e) {
    var t = e.C("--", "$");return { cI: !0, i: /[<>{}*#]/, c: [{ bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment", e: /;/, eW: !0, l: /[\w\.]+/, k: { keyword: "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek", literal: "true false null", built_in: "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void" }, c: [{ cN: "string", b: "'", e: "'", c: [e.BE, { b: "''" }] }, { cN: "string", b: '"', e: '"', c: [e.BE, { b: '""' }] }, { cN: "string", b: "`", e: "`", c: [e.BE] }, e.CNM, e.CBCM, t] }, e.CBCM, t] };
  }), e;
});
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// This file was automatically generated from files in src/ directory.

/**
 * impress.js
 *
 * impress.js is a presentation tool based on the power of CSS3 transforms and transitions
 * in modern browsers and inspired by the idea behind prezi.com.
 *
 *
 * Copyright 2011-2012 Bartek Szopka (@bartaz), 2016-2018 Henrik Ingo (@henrikingo)
 *
 * Released under the MIT and GPL Licenses.
 *
 * ------------------------------------------------
 *  author:  Bartek Szopka, Henrik Ingo
 *  version: 1.0.0
 *  url:     http://impress.js.org
 *  source:  http://github.com/impress/impress.js/
 */

// You are one of those who like to know how things work inside?
// Let me show you the cogs that make impress.js run...
(function (document, window) {
    "use strict";

    var lib;

    // HELPER FUNCTIONS

    // `pfx` is a function that takes a standard CSS property name as a parameter
    // and returns it's prefixed version valid for current browser it runs in.
    // The code is heavily inspired by Modernizr http://www.modernizr.com/
    var pfx = function () {

        var style = document.createElement("dummy").style,
            prefixes = "Webkit Moz O ms Khtml".split(" "),
            memory = {};

        return function (prop) {
            if (typeof memory[prop] === "undefined") {

                var ucProp = prop.charAt(0).toUpperCase() + prop.substr(1),
                    props = (prop + " " + prefixes.join(ucProp + " ") + ucProp).split(" ");

                memory[prop] = null;
                for (var i in props) {
                    if (style[props[i]] !== undefined) {
                        memory[prop] = props[i];
                        break;
                    }
                }
            }

            return memory[prop];
        };
    }();

    var validateOrder = function validateOrder(order, fallback) {
        var validChars = "xyz";
        var returnStr = "";
        if (typeof order === "string") {
            for (var i in order.split("")) {
                if (validChars.indexOf(order[i]) >= 0) {
                    returnStr += order[i];

                    // Each of x,y,z can be used only once.
                    validChars = validChars.split(order[i]).join("");
                }
            }
        }
        if (returnStr) {
            return returnStr;
        } else if (fallback !== undefined) {
            return fallback;
        } else {
            return "xyz";
        }
    };

    // `css` function applies the styles given in `props` object to the element
    // given as `el`. It runs all property names through `pfx` function to make
    // sure proper prefixed version of the property is used.
    var css = function css(el, props) {
        var key, pkey;
        for (key in props) {
            if (props.hasOwnProperty(key)) {
                pkey = pfx(key);
                if (pkey !== null) {
                    el.style[pkey] = props[key];
                }
            }
        }
        return el;
    };

    // `translate` builds a translate transform string for given data.
    var translate = function translate(t) {
        return " translate3d(" + t.x + "px," + t.y + "px," + t.z + "px) ";
    };

    // `rotate` builds a rotate transform string for given data.
    // By default the rotations are in X Y Z order that can be reverted by passing `true`
    // as second parameter.
    var rotate = function rotate(r, revert) {
        var order = r.order ? r.order : "xyz";
        var css = "";
        var axes = order.split("");
        if (revert) {
            axes = axes.reverse();
        }

        for (var i = 0; i < axes.length; i++) {
            css += " rotate" + axes[i].toUpperCase() + "(" + r[axes[i]] + "deg)";
        }
        return css;
    };

    // `scale` builds a scale transform string for given data.
    var scale = function scale(s) {
        return " scale(" + s + ") ";
    };

    // `computeWindowScale` counts the scale factor between window size and size
    // defined for the presentation in the config.
    var computeWindowScale = function computeWindowScale(config) {
        var hScale = window.innerHeight / config.height,
            wScale = window.innerWidth / config.width,
            scale = hScale > wScale ? wScale : hScale;

        if (config.maxScale && scale > config.maxScale) {
            scale = config.maxScale;
        }

        if (config.minScale && scale < config.minScale) {
            scale = config.minScale;
        }

        return scale;
    };

    // CHECK SUPPORT
    var body = document.body;
    var impressSupported =

    // Browser should support CSS 3D transtorms
    pfx("perspective") !== null &&

    // And `classList` and `dataset` APIs
    body.classList && body.dataset;

    if (!impressSupported) {

        // We can't be sure that `classList` is supported
        body.className += " impress-not-supported ";
    }

    // GLOBALS AND DEFAULTS

    // This is where the root elements of all impress.js instances will be kept.
    // Yes, this means you can have more than one instance on a page, but I'm not
    // sure if it makes any sense in practice ;)
    var roots = {};

    var preInitPlugins = [];
    var preStepLeavePlugins = [];

    // Some default config values.
    var defaults = {
        width: 1024,
        height: 768,
        maxScale: 1,
        minScale: 0,

        perspective: 1000,

        transitionDuration: 1000
    };

    // It's just an empty function ... and a useless comment.
    var empty = function empty() {
        return false;
    };

    // IMPRESS.JS API

    // And that's where interesting things will start to happen.
    // It's the core `impress` function that returns the impress.js API
    // for a presentation based on the element with given id ("impress"
    // by default).
    var impress = window.impress = function (rootId) {

        // If impress.js is not supported by the browser return a dummy API
        // it may not be a perfect solution but we return early and avoid
        // running code that may use features not implemented in the browser.
        if (!impressSupported) {
            return {
                init: empty,
                goto: empty,
                prev: empty,
                next: empty,
                swipe: empty,
                tear: empty,
                lib: {}
            };
        }

        rootId = rootId || "impress";

        // If given root is already initialized just return the API
        if (roots["impress-root-" + rootId]) {
            return roots["impress-root-" + rootId];
        }

        // The gc library depends on being initialized before we do any changes to DOM.
        lib = initLibraries(rootId);

        body.classList.remove("impress-not-supported");
        body.classList.add("impress-supported");

        // Data of all presentation steps
        var stepsData = {};

        // Element of currently active step
        var activeStep = null;

        // Current state (position, rotation and scale) of the presentation
        var currentState = null;

        // Array of step elements
        var steps = null;

        // Configuration options
        var config = null;

        // Scale factor of the browser window
        var windowScale = null;

        // Root presentation elements
        var root = lib.util.byId(rootId);
        var canvas = document.createElement("div");

        var initialized = false;

        // STEP EVENTS
        //
        // There are currently two step events triggered by impress.js
        // `impress:stepenter` is triggered when the step is shown on the
        // screen (the transition from the previous one is finished) and
        // `impress:stepleave` is triggered when the step is left (the
        // transition to next step just starts).

        // Reference to last entered step
        var lastEntered = null;

        // `onStepEnter` is called whenever the step element is entered
        // but the event is triggered only if the step is different than
        // last entered step.
        // We sometimes call `goto`, and therefore `onStepEnter`, just to redraw a step, such as
        // after screen resize. In this case - more precisely, in any case - we trigger a
        // `impress:steprefresh` event.
        var onStepEnter = function onStepEnter(step) {
            if (lastEntered !== step) {
                lib.util.triggerEvent(step, "impress:stepenter");
                lastEntered = step;
            }
            lib.util.triggerEvent(step, "impress:steprefresh");
        };

        // `onStepLeave` is called whenever the currentStep element is left
        // but the event is triggered only if the currentStep is the same as
        // lastEntered step.
        var onStepLeave = function onStepLeave(currentStep, nextStep) {
            if (lastEntered === currentStep) {
                lib.util.triggerEvent(currentStep, "impress:stepleave", { next: nextStep });
                lastEntered = null;
            }
        };

        // `initStep` initializes given step element by reading data from its
        // data attributes and setting correct styles.
        var initStep = function initStep(el, idx) {
            var data = el.dataset,
                step = {
                translate: {
                    x: lib.util.toNumber(data.x),
                    y: lib.util.toNumber(data.y),
                    z: lib.util.toNumber(data.z)
                },
                rotate: {
                    x: lib.util.toNumber(data.rotateX),
                    y: lib.util.toNumber(data.rotateY),
                    z: lib.util.toNumber(data.rotateZ || data.rotate),
                    order: validateOrder(data.rotateOrder)
                },
                scale: lib.util.toNumber(data.scale, 1),
                transitionDuration: lib.util.toNumber(data.transitionDuration, config.transitionDuration),
                el: el
            };

            if (!el.id) {
                el.id = "step-" + (idx + 1);
            }

            stepsData["impress-" + el.id] = step;

            css(el, {
                position: "absolute",
                transform: "translate(-50%,-50%)" + translate(step.translate) + rotate(step.rotate) + scale(step.scale),
                transformStyle: "preserve-3d"
            });
        };

        // Initialize all steps.
        // Read the data-* attributes, store in internal stepsData, and render with CSS.
        var initAllSteps = function initAllSteps() {
            steps = lib.util.$$(".step", root);
            steps.forEach(initStep);
        };

        // `init` API function that initializes (and runs) the presentation.
        var init = function init() {
            if (initialized) {
                return;
            }
            execPreInitPlugins(root);

            // First we set up the viewport for mobile devices.
            // For some reason iPad goes nuts when it is not done properly.
            var meta = lib.util.$("meta[name='viewport']") || document.createElement("meta");
            meta.content = "width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=no";
            if (meta.parentNode !== document.head) {
                meta.name = "viewport";
                document.head.appendChild(meta);
            }

            // Initialize configuration object
            var rootData = root.dataset;
            config = {
                width: lib.util.toNumber(rootData.width, defaults.width),
                height: lib.util.toNumber(rootData.height, defaults.height),
                maxScale: lib.util.toNumber(rootData.maxScale, defaults.maxScale),
                minScale: lib.util.toNumber(rootData.minScale, defaults.minScale),
                perspective: lib.util.toNumber(rootData.perspective, defaults.perspective),
                transitionDuration: lib.util.toNumber(rootData.transitionDuration, defaults.transitionDuration)
            };

            windowScale = computeWindowScale(config);

            // Wrap steps with "canvas" element
            lib.util.arrayify(root.childNodes).forEach(function (el) {
                canvas.appendChild(el);
            });
            root.appendChild(canvas);

            // Set initial styles
            document.documentElement.style.height = "100%";

            css(body, {
                height: "100%",
                overflow: "hidden"
            });

            var rootStyles = {
                position: "absolute",
                transformOrigin: "top left",
                transition: "all 0s ease-in-out",
                transformStyle: "preserve-3d"
            };

            css(root, rootStyles);
            css(root, {
                top: "50%",
                left: "50%",
                perspective: config.perspective / windowScale + "px",
                transform: scale(windowScale)
            });
            css(canvas, rootStyles);

            body.classList.remove("impress-disabled");
            body.classList.add("impress-enabled");

            // Get and init steps
            initAllSteps();

            // Set a default initial state of the canvas
            currentState = {
                translate: { x: 0, y: 0, z: 0 },
                rotate: { x: 0, y: 0, z: 0, order: "xyz" },
                scale: 1
            };

            initialized = true;

            lib.util.triggerEvent(root, "impress:init", { api: roots["impress-root-" + rootId] });
        };

        // `getStep` is a helper function that returns a step element defined by parameter.
        // If a number is given, step with index given by the number is returned, if a string
        // is given step element with such id is returned, if DOM element is given it is returned
        // if it is a correct step element.
        var getStep = function getStep(step) {
            if (typeof step === "number") {
                step = step < 0 ? steps[steps.length + step] : steps[step];
            } else if (typeof step === "string") {
                step = lib.util.byId(step);
            }
            return step && step.id && stepsData["impress-" + step.id] ? step : null;
        };

        // Used to reset timeout for `impress:stepenter` event
        var stepEnterTimeout = null;

        // `goto` API function that moves to step given as `el` parameter (by index, id or element).
        // `duration` optionally given as second parameter, is the transition duration in css.
        // `reason` is the string "next", "prev" or "goto" (default) and will be made available to
        // preStepLeave plugins.
        // `origEvent` may contain event that caused the call to goto, such as a key press event
        var goto = function goto(el, duration, reason, origEvent) {
            reason = reason || "goto";
            origEvent = origEvent || null;

            if (!initialized) {
                return false;
            }

            // Re-execute initAllSteps for each transition. This allows to edit step attributes
            // dynamically, such as change their coordinates, or even remove or add steps, and have
            // that change apply when goto() is called.
            initAllSteps();

            if (!(el = getStep(el))) {
                return false;
            }

            // Sometimes it's possible to trigger focus on first link with some keyboard action.
            // Browser in such a case tries to scroll the page to make this element visible
            // (even that body overflow is set to hidden) and it breaks our careful positioning.
            //
            // So, as a lousy (and lazy) workaround we will make the page scroll back to the top
            // whenever slide is selected
            //
            // If you are reading this and know any better way to handle it, I'll be glad to hear
            // about it!
            window.scrollTo(0, 0);

            var step = stepsData["impress-" + el.id];
            duration = duration !== undefined ? duration : step.transitionDuration;

            // If we are in fact moving to another step, start with executing the registered
            // preStepLeave plugins.
            if (activeStep && activeStep !== el) {
                var event = { target: activeStep, detail: {} };
                event.detail.next = el;
                event.detail.transitionDuration = duration;
                event.detail.reason = reason;
                if (origEvent) {
                    event.origEvent = origEvent;
                }

                if (execPreStepLeavePlugins(event) === false) {

                    // PreStepLeave plugins are allowed to abort the transition altogether, by
                    // returning false.
                    // see stop and substep plugins for an example of doing just that
                    return false;
                }

                // Plugins are allowed to change the detail values
                el = event.detail.next;
                step = stepsData["impress-" + el.id];
                duration = event.detail.transitionDuration;
            }

            if (activeStep) {
                activeStep.classList.remove("active");
                body.classList.remove("impress-on-" + activeStep.id);
            }
            el.classList.add("active");

            body.classList.add("impress-on-" + el.id);

            // Compute target state of the canvas based on given step
            var target = {
                rotate: {
                    x: -step.rotate.x,
                    y: -step.rotate.y,
                    z: -step.rotate.z,
                    order: step.rotate.order
                },
                translate: {
                    x: -step.translate.x,
                    y: -step.translate.y,
                    z: -step.translate.z
                },
                scale: 1 / step.scale
            };

            // Check if the transition is zooming in or not.
            //
            // This information is used to alter the transition style:
            // when we are zooming in - we start with move and rotate transition
            // and the scaling is delayed, but when we are zooming out we start
            // with scaling down and move and rotation are delayed.
            var zoomin = target.scale >= currentState.scale;

            duration = lib.util.toNumber(duration, config.transitionDuration);
            var delay = duration / 2;

            // If the same step is re-selected, force computing window scaling,
            // because it is likely to be caused by window resize
            if (el === activeStep) {
                windowScale = computeWindowScale(config);
            }

            var targetScale = target.scale * windowScale;

            // Trigger leave of currently active element (if it's not the same step again)
            if (activeStep && activeStep !== el) {
                onStepLeave(activeStep, el);
            }

            // Now we alter transforms of `root` and `canvas` to trigger transitions.
            //
            // And here is why there are two elements: `root` and `canvas` - they are
            // being animated separately:
            // `root` is used for scaling and `canvas` for translate and rotations.
            // Transitions on them are triggered with different delays (to make
            // visually nice and "natural" looking transitions), so we need to know
            // that both of them are finished.
            css(root, {

                // To keep the perspective look similar for different scales
                // we need to "scale" the perspective, too
                // For IE 11 support we must specify perspective independent
                // of transform.
                perspective: config.perspective / targetScale + "px",
                transform: scale(targetScale),
                transitionDuration: duration + "ms",
                transitionDelay: (zoomin ? delay : 0) + "ms"
            });

            css(canvas, {
                transform: rotate(target.rotate, true) + translate(target.translate),
                transitionDuration: duration + "ms",
                transitionDelay: (zoomin ? 0 : delay) + "ms"
            });

            // Here is a tricky part...
            //
            // If there is no change in scale or no change in rotation and translation, it means
            // there was actually no delay - because there was no transition on `root` or `canvas`
            // elements. We want to trigger `impress:stepenter` event in the correct moment, so
            // here we compare the current and target values to check if delay should be taken into
            // account.
            //
            // I know that this `if` statement looks scary, but it's pretty simple when you know
            // what is going on - it's simply comparing all the values.
            if (currentState.scale === target.scale || currentState.rotate.x === target.rotate.x && currentState.rotate.y === target.rotate.y && currentState.rotate.z === target.rotate.z && currentState.translate.x === target.translate.x && currentState.translate.y === target.translate.y && currentState.translate.z === target.translate.z) {
                delay = 0;
            }

            // Store current state
            currentState = target;
            activeStep = el;

            // And here is where we trigger `impress:stepenter` event.
            // We simply set up a timeout to fire it taking transition duration (and possible delay)
            // into account.
            //
            // I really wanted to make it in more elegant way. The `transitionend` event seemed to
            // be the best way to do it, but the fact that I'm using transitions on two separate
            // elements and that the `transitionend` event is only triggered when there was a
            // transition (change in the values) caused some bugs and made the code really
            // complicated, cause I had to handle all the conditions separately. And it still
            // needed a `setTimeout` fallback for the situations when there is no transition at all.
            // So I decided that I'd rather make the code simpler than use shiny new
            // `transitionend`.
            //
            // If you want learn something interesting and see how it was done with `transitionend`
            // go back to version 0.5.2 of impress.js:
            // http://github.com/bartaz/impress.js/blob/0.5.2/js/impress.js
            window.clearTimeout(stepEnterTimeout);
            stepEnterTimeout = window.setTimeout(function () {
                onStepEnter(activeStep);
            }, duration + delay);

            return el;
        };

        // `prev` API function goes to previous step (in document order)
        // `event` is optional, may contain the event that caused the need to call prev()
        var prev = function prev(origEvent) {
            var prev = steps.indexOf(activeStep) - 1;
            prev = prev >= 0 ? steps[prev] : steps[steps.length - 1];

            return goto(prev, undefined, "prev", origEvent);
        };

        // `next` API function goes to next step (in document order)
        // `event` is optional, may contain the event that caused the need to call next()
        var next = function next(origEvent) {
            var next = steps.indexOf(activeStep) + 1;
            next = next < steps.length ? steps[next] : steps[0];

            return goto(next, undefined, "next", origEvent);
        };

        // Swipe for touch devices by @and3rson.
        // Below we extend the api to control the animation between the currently
        // active step and a presumed next/prev step. See touch plugin for
        // an example of using this api.

        // Helper function
        var interpolate = function interpolate(a, b, k) {
            return a + (b - a) * k;
        };

        // Animate a swipe.
        //
        // Pct is a value between -1.0 and +1.0, designating the current length
        // of the swipe.
        //
        // If pct is negative, swipe towards the next() step, if positive,
        // towards the prev() step.
        //
        // Note that pre-stepleave plugins such as goto can mess with what is a
        // next() and prev() step, so we need to trigger the pre-stepleave event
        // here, even if a swipe doesn't guarantee that the transition will
        // actually happen.
        //
        // Calling swipe(), with any value of pct, won't in itself cause a
        // transition to happen, this is just to animate the swipe. Once the
        // transition is committed - such as at a touchend event - caller is
        // responsible for also calling prev()/next() as appropriate.
        //
        // Note: For now, this function is made available to be used by the swipe plugin (which
        // is the UI counterpart to this). It is a semi-internal API and intentionally not
        // documented in DOCUMENTATION.md.
        var swipe = function swipe(pct) {
            if (Math.abs(pct) > 1) {
                return;
            }

            // Prepare & execute the preStepLeave event
            var event = { target: activeStep, detail: {} };
            event.detail.swipe = pct;

            // Will be ignored within swipe animation, but just in case a plugin wants to read this,
            // humor them
            event.detail.transitionDuration = config.transitionDuration;
            var idx; // Needed by jshint
            if (pct < 0) {
                idx = steps.indexOf(activeStep) + 1;
                event.detail.next = idx < steps.length ? steps[idx] : steps[0];
                event.detail.reason = "next";
            } else if (pct > 0) {
                idx = steps.indexOf(activeStep) - 1;
                event.detail.next = idx >= 0 ? steps[idx] : steps[steps.length - 1];
                event.detail.reason = "prev";
            } else {

                // No move
                return;
            }
            if (execPreStepLeavePlugins(event) === false) {

                // If a preStepLeave plugin wants to abort the transition, don't animate a swipe
                // For stop, this is probably ok. For substep, the plugin it self might want to do
                // some animation, but that's not the current implementation.
                return false;
            }
            var nextElement = event.detail.next;

            var nextStep = stepsData["impress-" + nextElement.id];

            // If the same step is re-selected, force computing window scaling,
            var nextScale = nextStep.scale * windowScale;
            var k = Math.abs(pct);

            var interpolatedStep = {
                translate: {
                    x: interpolate(currentState.translate.x, -nextStep.translate.x, k),
                    y: interpolate(currentState.translate.y, -nextStep.translate.y, k),
                    z: interpolate(currentState.translate.z, -nextStep.translate.z, k)
                },
                rotate: {
                    x: interpolate(currentState.rotate.x, -nextStep.rotate.x, k),
                    y: interpolate(currentState.rotate.y, -nextStep.rotate.y, k),
                    z: interpolate(currentState.rotate.z, -nextStep.rotate.z, k),

                    // Unfortunately there's a discontinuity if rotation order changes. Nothing I
                    // can do about it?
                    order: k < 0.7 ? currentState.rotate.order : nextStep.rotate.order
                },
                scale: interpolate(currentState.scale, nextScale, k)
            };

            css(root, {

                // To keep the perspective look similar for different scales
                // we need to 'scale' the perspective, too
                perspective: config.perspective / interpolatedStep.scale + "px",
                transform: scale(interpolatedStep.scale),
                transitionDuration: "0ms",
                transitionDelay: "0ms"
            });

            css(canvas, {
                transform: rotate(interpolatedStep.rotate, true) + translate(interpolatedStep.translate),
                transitionDuration: "0ms",
                transitionDelay: "0ms"
            });
        };

        // Teardown impress
        // Resets the DOM to the state it was before impress().init() was called.
        // (If you called impress(rootId).init() for multiple different rootId's, then you must
        // also call tear() once for each of them.)
        var tear = function tear() {
            lib.gc.teardown();
            delete roots["impress-root-" + rootId];
        };

        // Adding some useful classes to step elements.
        //
        // All the steps that have not been shown yet are given `future` class.
        // When the step is entered the `future` class is removed and the `present`
        // class is given. When the step is left `present` class is replaced with
        // `past` class.
        //
        // So every step element is always in one of three possible states:
        // `future`, `present` and `past`.
        //
        // There classes can be used in CSS to style different types of steps.
        // For example the `present` class can be used to trigger some custom
        // animations when step is shown.
        lib.gc.addEventListener(root, "impress:init", function () {

            // STEP CLASSES
            steps.forEach(function (step) {
                step.classList.add("future");
            });

            lib.gc.addEventListener(root, "impress:stepenter", function (event) {
                event.target.classList.remove("past");
                event.target.classList.remove("future");
                event.target.classList.add("present");
            }, false);

            lib.gc.addEventListener(root, "impress:stepleave", function (event) {
                event.target.classList.remove("present");
                event.target.classList.add("past");
            }, false);
        }, false);

        // Adding hash change support.
        lib.gc.addEventListener(root, "impress:init", function () {

            // Last hash detected
            var lastHash = "";

            // `#/step-id` is used instead of `#step-id` to prevent default browser
            // scrolling to element in hash.
            //
            // And it has to be set after animation finishes, because in Chrome it
            // makes transtion laggy.
            // BUG: http://code.google.com/p/chromium/issues/detail?id=62820
            lib.gc.addEventListener(root, "impress:stepenter", function (event) {
                window.location.hash = lastHash = "#/" + event.target.id;
            }, false);

            lib.gc.addEventListener(window, "hashchange", function () {

                // When the step is entered hash in the location is updated
                // (just few lines above from here), so the hash change is
                // triggered and we would call `goto` again on the same element.
                //
                // To avoid this we store last entered hash and compare.
                if (window.location.hash !== lastHash) {
                    goto(lib.util.getElementFromHash());
                }
            }, false);

            // START
            // by selecting step defined in url or first step of the presentation
            goto(lib.util.getElementFromHash() || steps[0], 0);
        }, false);

        body.classList.add("impress-disabled");

        // Store and return API for given impress.js root element
        return roots["impress-root-" + rootId] = {
            init: init,
            goto: goto,
            next: next,
            prev: prev,
            swipe: swipe,
            tear: tear,
            lib: lib
        };
    };

    // Flag that can be used in JS to check if browser have passed the support test
    impress.supported = impressSupported;

    // ADD and INIT LIBRARIES
    // Library factories are defined in src/lib/*.js, and register themselves by calling
    // impress.addLibraryFactory(libraryFactoryObject). They're stored here, and used to augment
    // the API with library functions when client calls impress(rootId).
    // See src/lib/README.md for clearer example.
    // (Advanced usage: For different values of rootId, a different instance of the libaries are
    // generated, in case they need to hold different state for different root elements.)
    var libraryFactories = {};
    impress.addLibraryFactory = function (obj) {
        for (var libname in obj) {
            if (obj.hasOwnProperty(libname)) {
                libraryFactories[libname] = obj[libname];
            }
        }
    };

    // Call each library factory, and return the lib object that is added to the api.
    var initLibraries = function initLibraries(rootId) {
        //jshint ignore:line
        var lib = {};
        for (var libname in libraryFactories) {
            if (libraryFactories.hasOwnProperty(libname)) {
                if (lib[libname] !== undefined) {
                    throw "impress.js ERROR: Two libraries both tried to use libname: " + libname;
                }
                lib[libname] = libraryFactories[libname](rootId);
            }
        }
        return lib;
    };

    // `addPreInitPlugin` allows plugins to register a function that should
    // be run (synchronously) at the beginning of init, before
    // impress().init() itself executes.
    impress.addPreInitPlugin = function (plugin, weight) {
        weight = parseInt(weight) || 10;
        if (weight <= 0) {
            throw "addPreInitPlugin: weight must be a positive integer";
        }

        if (preInitPlugins[weight] === undefined) {
            preInitPlugins[weight] = [];
        }
        preInitPlugins[weight].push(plugin);
    };

    // Called at beginning of init, to execute all pre-init plugins.
    var execPreInitPlugins = function execPreInitPlugins(root) {
        //jshint ignore:line
        for (var i = 0; i < preInitPlugins.length; i++) {
            var thisLevel = preInitPlugins[i];
            if (thisLevel !== undefined) {
                for (var j = 0; j < thisLevel.length; j++) {
                    thisLevel[j](root);
                }
            }
        }
    };

    // `addPreStepLeavePlugin` allows plugins to register a function that should
    // be run (synchronously) at the beginning of goto()
    impress.addPreStepLeavePlugin = function (plugin, weight) {
        //jshint ignore:line
        weight = parseInt(weight) || 10;
        if (weight <= 0) {
            throw "addPreStepLeavePlugin: weight must be a positive integer";
        }

        if (preStepLeavePlugins[weight] === undefined) {
            preStepLeavePlugins[weight] = [];
        }
        preStepLeavePlugins[weight].push(plugin);
    };

    // Called at beginning of goto(), to execute all preStepLeave plugins.
    var execPreStepLeavePlugins = function execPreStepLeavePlugins(event) {
        //jshint ignore:line
        for (var i = 0; i < preStepLeavePlugins.length; i++) {
            var thisLevel = preStepLeavePlugins[i];
            if (thisLevel !== undefined) {
                for (var j = 0; j < thisLevel.length; j++) {
                    if (thisLevel[j](event) === false) {

                        // If a plugin returns false, the stepleave event (and related transition)
                        // is aborted
                        return false;
                    }
                }
            }
        }
    };
})(document, window);

// THAT'S ALL FOLKS!
//
// Thanks for reading it all.
// Or thanks for scrolling down and reading the last part.
//
// I've learnt a lot when building impress.js and I hope this code and comments
// will help somebody learn at least some part of it.

/**
 * Garbage collection utility
 *
 * This library allows plugins to add elements and event listeners they add to the DOM. The user
 * can call `impress().lib.gc.teardown()` to cause all of them to be removed from DOM, so that
 * the document is in the state it was before calling `impress().init()`.
 *
 * In addition to just adding elements and event listeners to the garbage collector, plugins
 * can also register callback functions to do arbitrary cleanup upon teardown.
 *
 * Henrik Ingo (c) 2016
 * MIT License
 */

(function (document, window) {
    "use strict";

    var roots = [];
    var rootsCount = 0;
    var startingState = { roots: [] };

    var libraryFactory = function libraryFactory(rootId) {
        if (roots[rootId]) {
            return roots[rootId];
        }

        // Per root global variables (instance variables?)
        var elementList = [];
        var eventListenerList = [];
        var callbackList = [];

        recordStartingState(rootId);

        // LIBRARY FUNCTIONS
        // Definitions of the library functions we return as an object at the end

        // `pushElement` adds a DOM element to the gc stack
        var pushElement = function pushElement(element) {
            elementList.push(element);
        };

        // `appendChild` is a convenience wrapper that combines DOM appendChild with gc.pushElement
        var appendChild = function appendChild(parent, element) {
            parent.appendChild(element);
            pushElement(element);
        };

        // `pushEventListener` adds an event listener to the gc stack
        var pushEventListener = function pushEventListener(target, type, listenerFunction) {
            eventListenerList.push({ target: target, type: type, listener: listenerFunction });
        };

        // `addEventListener` combines DOM addEventListener with gc.pushEventListener
        var addEventListener = function addEventListener(target, type, listenerFunction) {
            target.addEventListener(type, listenerFunction);
            pushEventListener(target, type, listenerFunction);
        };

        // `pushCallback` If the above utilities are not enough, plugins can add their own callback
        // function to do arbitrary things.
        var pushCallback = function pushCallback(callback) {
            callbackList.push(callback);
        };
        pushCallback(function (rootId) {
            resetStartingState(rootId);
        });

        // `teardown` will
        // - execute all callbacks in LIFO order
        // - call `removeChild` on all DOM elements in LIFO order
        // - call `removeEventListener` on all event listeners in LIFO order
        // The goal of a teardown is to return to the same state that the DOM was before
        // `impress().init()` was called.
        var teardown = function teardown() {

            // Execute the callbacks in LIFO order
            var i; // Needed by jshint
            for (i = callbackList.length - 1; i >= 0; i--) {
                callbackList[i](rootId);
            }
            callbackList = [];
            for (i = 0; i < elementList.length; i++) {
                elementList[i].parentElement.removeChild(elementList[i]);
            }
            elementList = [];
            for (i = 0; i < eventListenerList.length; i++) {
                var target = eventListenerList[i].target;
                var type = eventListenerList[i].type;
                var listener = eventListenerList[i].listener;
                target.removeEventListener(type, listener);
            }
        };

        var lib = {
            pushElement: pushElement,
            appendChild: appendChild,
            pushEventListener: pushEventListener,
            addEventListener: addEventListener,
            pushCallback: pushCallback,
            teardown: teardown
        };
        roots[rootId] = lib;
        rootsCount++;
        return lib;
    };

    // Let impress core know about the existence of this library
    window.impress.addLibraryFactory({ gc: libraryFactory });

    // CORE INIT
    // The library factory (gc(rootId)) is called at the beginning of impress(rootId).init()
    // For the purposes of teardown(), we can use this as an opportunity to save the state
    // of a few things in the DOM in their virgin state, before impress().init() did anything.
    // Note: These could also be recorded by the code in impress.js core as these values
    // are changed, but in an effort to not deviate too much from upstream, I'm adding
    // them here rather than the core itself.
    var recordStartingState = function recordStartingState(rootId) {
        startingState.roots[rootId] = {};
        startingState.roots[rootId].steps = [];

        // Record whether the steps have an id or not
        var steps = document.getElementById(rootId).querySelectorAll(".step");
        for (var i = 0; i < steps.length; i++) {
            var el = steps[i];
            startingState.roots[rootId].steps.push({
                el: el,
                id: el.getAttribute("id")
            });
        }

        // In the rare case of multiple roots, the following is changed on first init() and
        // reset at last tear().
        if (rootsCount === 0) {
            startingState.body = {};

            // It is customary for authors to set body.class="impress-not-supported" as a starting
            // value, which can then be removed by impress().init(). But it is not required.
            // Remember whether it was there or not.
            if (document.body.classList.contains("impress-not-supported")) {
                startingState.body.impressNotSupported = true;
            } else {
                startingState.body.impressNotSupported = false;
            }

            // If there's a <meta name="viewport"> element, its contents will be overwritten by init
            var metas = document.head.querySelectorAll("meta");
            for (i = 0; i < metas.length; i++) {
                var m = metas[i];
                if (m.name === "viewport") {
                    startingState.meta = m.content;
                }
            }
        }
    };

    // CORE TEARDOWN
    var resetStartingState = function resetStartingState(rootId) {

        // Reset body element
        document.body.classList.remove("impress-enabled");
        document.body.classList.remove("impress-disabled");

        var root = document.getElementById(rootId);
        var activeId = root.querySelector(".active").id;
        document.body.classList.remove("impress-on-" + activeId);

        document.documentElement.style.height = "";
        document.body.style.height = "";
        document.body.style.overflow = "";

        // Remove style values from the root and step elements
        // Note: We remove the ones set by impress.js core. Otoh, we didn't preserve any original
        // values. A more sophisticated implementation could keep track of original values and then
        // reset those.
        var steps = root.querySelectorAll(".step");
        for (var i = 0; i < steps.length; i++) {
            steps[i].classList.remove("future");
            steps[i].classList.remove("past");
            steps[i].classList.remove("present");
            steps[i].classList.remove("active");
            steps[i].style.position = "";
            steps[i].style.transform = "";
            steps[i].style["transform-style"] = "";
        }
        root.style.position = "";
        root.style["transform-origin"] = "";
        root.style.transition = "";
        root.style["transform-style"] = "";
        root.style.top = "";
        root.style.left = "";
        root.style.transform = "";

        // Reset id of steps ("step-1" id's are auto generated)
        steps = startingState.roots[rootId].steps;
        var step;
        while (step = steps.pop()) {
            if (step.id === null) {
                step.el.removeAttribute("id");
            } else {
                step.el.setAttribute("id", step.id);
            }
        }
        delete startingState.roots[rootId];

        // Move step div elements away from canvas, then delete canvas
        // Note: There's an implicit assumption here that the canvas div is the only child element
        // of the root div. If there would be something else, it's gonna be lost.
        var canvas = root.firstChild;
        var canvasHTML = canvas.innerHTML;
        root.innerHTML = canvasHTML;

        if (roots[rootId] !== undefined) {
            delete roots[rootId];
            rootsCount--;
        }
        if (rootsCount === 0) {

            // In the rare case that more than one impress root elements were initialized, these
            // are only reset when all are uninitialized.
            document.body.classList.remove("impress-supported");
            if (startingState.body.impressNotSupported) {
                document.body.classList.add("impress-not-supported");
            }

            // We need to remove or reset the meta element inserted by impress.js
            var metas = document.head.querySelectorAll("meta");
            for (i = 0; i < metas.length; i++) {
                var m = metas[i];
                if (m.name === "viewport") {
                    if (startingState.meta !== undefined) {
                        m.content = startingState.meta;
                    } else {
                        m.parentElement.removeChild(m);
                    }
                }
            }
        }
    };
})(document, window);

/**
 * Common utility functions
 *
 * Copyright 2011-2012 Bartek Szopka (@bartaz)
 * Henrik Ingo (c) 2016
 * MIT License
 */

(function (document, window) {
    "use strict";

    var roots = [];

    var libraryFactory = function libraryFactory(rootId) {
        if (roots[rootId]) {
            return roots[rootId];
        }

        // `$` returns first element for given CSS `selector` in the `context` of
        // the given element or whole document.
        var $ = function $(selector, context) {
            context = context || document;
            return context.querySelector(selector);
        };

        // `$$` return an array of elements for given CSS `selector` in the `context` of
        // the given element or whole document.
        var $$ = function $$(selector, context) {
            context = context || document;
            return arrayify(context.querySelectorAll(selector));
        };

        // `arrayify` takes an array-like object and turns it into real Array
        // to make all the Array.prototype goodness available.
        var arrayify = function arrayify(a) {
            return [].slice.call(a);
        };

        // `byId` returns element with given `id` - you probably have guessed that ;)
        var byId = function byId(id) {
            return document.getElementById(id);
        };

        // `getElementFromHash` returns an element located by id from hash part of
        // window location.
        var getElementFromHash = function getElementFromHash() {

            // Get id from url # by removing `#` or `#/` from the beginning,
            // so both "fallback" `#slide-id` and "enhanced" `#/slide-id` will work
            return byId(window.location.hash.replace(/^#\/?/, ""));
        };

        // Throttling function calls, by Remy Sharp
        // http://remysharp.com/2010/07/21/throttling-function-calls/
        var throttle = function throttle(fn, delay) {
            var timer = null;
            return function () {
                var context = this,
                    args = arguments;
                window.clearTimeout(timer);
                timer = window.setTimeout(function () {
                    fn.apply(context, args);
                }, delay);
            };
        };

        // `toNumber` takes a value given as `numeric` parameter and tries to turn
        // it into a number. If it is not possible it returns 0 (or other value
        // given as `fallback`).
        var toNumber = function toNumber(numeric, fallback) {
            return isNaN(numeric) ? fallback || 0 : Number(numeric);
        };

        // `triggerEvent` builds a custom DOM event with given `eventName` and `detail` data
        // and triggers it on element given as `el`.
        var triggerEvent = function triggerEvent(el, eventName, detail) {
            var event = document.createEvent("CustomEvent");
            event.initCustomEvent(eventName, true, true, detail);
            el.dispatchEvent(event);
        };

        var lib = {
            $: $,
            $$: $$,
            arrayify: arrayify,
            byId: byId,
            getElementFromHash: getElementFromHash,
            throttle: throttle,
            toNumber: toNumber,
            triggerEvent: triggerEvent
        };
        roots[rootId] = lib;
        return lib;
    };

    // Let impress core know about the existence of this library
    window.impress.addLibraryFactory({ util: libraryFactory });
})(document, window);

/**
 * Autoplay plugin - Automatically advance slideshow after N seconds
 *
 * Copyright 2016 Henrik Ingo, henrik.ingo@avoinelama.fi
 * Released under the MIT license.
 */
/* global clearTimeout, setTimeout, document */

(function (document) {
    "use strict";

    var autoplayDefault = 0;
    var currentStepTimeout = 0;
    var api = null;
    var timeoutHandle = null;
    var root = null;
    var util;

    // On impress:init, check whether there is a default setting, as well as
    // handle step-1.
    document.addEventListener("impress:init", function (event) {
        util = event.detail.api.lib.util;

        // Getting API from event data instead of global impress().init().
        // You don't even need to know what is the id of the root element
        // or anything. `impress:init` event data gives you everything you
        // need to control the presentation that was just initialized.
        api = event.detail.api;
        root = event.target;

        // Element attributes starting with "data-", become available under
        // element.dataset. In addition hyphenized words become camelCased.
        var data = root.dataset;

        if (data.autoplay) {
            autoplayDefault = util.toNumber(data.autoplay, 0);
        }

        var toolbar = document.querySelector("#impress-toolbar");
        if (toolbar) {
            addToolbarButton(toolbar);
        }

        api.lib.gc.pushCallback(function () {
            clearTimeout(timeoutHandle);
        });

        // Note that right after impress:init event, also impress:stepenter is
        // triggered for the first slide, so that's where code flow continues.
    }, false);

    // If default autoplay time was defined in the presentation root, or
    // in this step, set timeout.
    var reloadTimeout = function reloadTimeout(event) {
        var step = event.target;
        currentStepTimeout = util.toNumber(step.dataset.autoplay, autoplayDefault);
        if (status === "paused") {
            setAutoplayTimeout(0);
        } else {
            setAutoplayTimeout(currentStepTimeout);
        }
    };

    document.addEventListener("impress:stepenter", function (event) {
        reloadTimeout(event);
    }, false);

    document.addEventListener("impress:substep:stepleaveaborted", function (event) {
        reloadTimeout(event);
    }, false);

    /**
     * Set timeout after which we move to next() step.
     */
    var setAutoplayTimeout = function setAutoplayTimeout(timeout) {
        if (timeoutHandle) {
            clearTimeout(timeoutHandle);
        }

        if (timeout > 0) {
            timeoutHandle = setTimeout(function () {
                api.next();
            }, timeout * 1000);
        }
        setButtonText();
    };

    /*** Toolbar plugin integration *******************************************/
    var status = "not clicked";
    var toolbarButton = null;

    // Copied from core impress.js. Good candidate for moving to a utilities collection.
    var triggerEvent = function triggerEvent(el, eventName, detail) {
        var event = document.createEvent("CustomEvent");
        event.initCustomEvent(eventName, true, true, detail);
        el.dispatchEvent(event);
    };

    var makeDomElement = function makeDomElement(html) {
        var tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        return tempDiv.firstChild;
    };

    var toggleStatus = function toggleStatus() {
        if (currentStepTimeout > 0 && status !== "paused") {
            status = "paused";
        } else {
            status = "playing";
        }
    };

    var getButtonText = function getButtonText() {
        if (currentStepTimeout > 0 && status !== "paused") {
            return "||"; // Pause
        } else {
            return "&#9654;"; // Play
        }
    };

    var setButtonText = function setButtonText() {
        if (toolbarButton) {

            // Keep button size the same even if label content is changing
            var buttonWidth = toolbarButton.offsetWidth;
            var buttonHeight = toolbarButton.offsetHeight;
            toolbarButton.innerHTML = getButtonText();
            if (!toolbarButton.style.width) {
                toolbarButton.style.width = buttonWidth + "px";
            }
            if (!toolbarButton.style.height) {
                toolbarButton.style.height = buttonHeight + "px";
            }
        }
    };

    var addToolbarButton = function addToolbarButton(toolbar) {
        var html = '<button id="impress-autoplay-playpause" ' + // jshint ignore:line
        'title="Autoplay" class="impress-autoplay">' + // jshint ignore:line
        getButtonText() + "</button>"; // jshint ignore:line
        toolbarButton = makeDomElement(html);
        toolbarButton.addEventListener("click", function () {
            toggleStatus();
            if (status === "playing") {
                if (autoplayDefault === 0) {
                    autoplayDefault = 7;
                }
                if (currentStepTimeout === 0) {
                    currentStepTimeout = autoplayDefault;
                }
                setAutoplayTimeout(currentStepTimeout);
            } else if (status === "paused") {
                setAutoplayTimeout(0);
            }
        });

        triggerEvent(toolbar, "impress:toolbar:appendChild", { group: 10, element: toolbarButton });
    };
})(document);

/**
 * Blackout plugin
 *
 * Press Ctrl+b to hide all slides, and Ctrl+b again to show them.
 * Also navigating to a different slide will show them again (impress:stepleave).
 *
 * Copyright 2014 @Strikeskids
 * Released under the MIT license.
 */
/* global document */

(function (document) {
    "use strict";

    var canvas = null;
    var blackedOut = false;

    // While waiting for a shared library of utilities, copying these 2 from main impress.js
    var css = function css(el, props) {
        var key, pkey;
        for (key in props) {
            if (props.hasOwnProperty(key)) {
                pkey = pfx(key);
                if (pkey !== null) {
                    el.style[pkey] = props[key];
                }
            }
        }
        return el;
    };

    var pfx = function () {

        var style = document.createElement("dummy").style,
            prefixes = "Webkit Moz O ms Khtml".split(" "),
            memory = {};

        return function (prop) {
            if (typeof memory[prop] === "undefined") {

                var ucProp = prop.charAt(0).toUpperCase() + prop.substr(1),
                    props = (prop + " " + prefixes.join(ucProp + " ") + ucProp).split(" ");

                memory[prop] = null;
                for (var i in props) {
                    if (style[props[i]] !== undefined) {
                        memory[prop] = props[i];
                        break;
                    }
                }
            }

            return memory[prop];
        };
    }();

    var removeBlackout = function removeBlackout() {
        if (blackedOut) {
            css(canvas, {
                display: "block"
            });
            blackedOut = false;
        }
    };

    var blackout = function blackout() {
        if (blackedOut) {
            removeBlackout();
        } else {
            css(canvas, {
                display: (blackedOut = !blackedOut) ? "none" : "block"
            });
            blackedOut = true;
        }
    };

    // Wait for impress.js to be initialized
    document.addEventListener("impress:init", function (event) {
        var api = event.detail.api;
        var root = event.target;
        canvas = root.firstElementChild;
        var gc = api.lib.gc;

        gc.addEventListener(document, "keydown", function (event) {
            if (event.keyCode === 66) {
                event.preventDefault();
                if (!blackedOut) {
                    blackout();
                } else {
                    removeBlackout();
                }
            }
        }, false);

        gc.addEventListener(document, "keyup", function (event) {
            if (event.keyCode === 66) {
                event.preventDefault();
            }
        }, false);
    }, false);

    document.addEventListener("impress:stepleave", function () {
        removeBlackout();
    }, false);
})(document);

/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global markdown, hljs, mermaid, impress, document, window */

(function (document, window) {
    "use strict";

    var preInit = function preInit() {
        if (window.markdown) {

            // Unlike the other extras, Markdown.js doesn't by default do anything in
            // particular. We do it ourselves here.
            // In addition, we use "-----" as a delimiter for new slide.

            // Query all .markdown elements and translate to HTML
            var markdownDivs = document.querySelectorAll(".markdown");
            for (var idx = 0; idx < markdownDivs.length; idx++) {
                var element = markdownDivs[idx];

                var slides = element.textContent.split(/^-----$/m);
                var i = slides.length - 1;
                element.innerHTML = markdown.toHTML(slides[i]);

                // If there's an id, unset it for last, and all other, elements,
                // and then set it for the first.
                var id = null;
                if (element.id) {
                    id = element.id;
                    element.id = "";
                }
                i--;
                while (i >= 0) {
                    var newElement = element.cloneNode(false);
                    newElement.innerHTML = markdown.toHTML(slides[i]);
                    element.parentNode.insertBefore(newElement, element);
                    element = newElement;
                    i--;
                }
                if (id !== null) {
                    element.id = id;
                }
            }
        } // Markdown

        if (window.hljs) {
            hljs.initHighlightingOnLoad();
        }

        if (window.mermaid) {
            mermaid.initialize({ startOnLoad: true });
        }
    };

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin(preInit, 1);
})(document, window);

/**
 * Form support
 *
 * Functionality to better support use of input, textarea, button... elements in a presentation.
 *
 * This plugin does two things:
 *
 * Set stopPropagation on any element that might take text input. This allows users to type, for
 * example, the letter 'P' into a form field, without causing the presenter console to spring up.
 *
 * On impress:stepleave, de-focus any potentially active
 * element. This is to prevent the focus from being left in a form element that is no longer visible
 * in the window, and user therefore typing garbage into the form.
 *
 * TODO: Currently it is not possible to use TAB to navigate between form elements. Impress.js, and
 * in particular the navigation plugin, unfortunately must fully take control of the tab key,
 * otherwise a user could cause the browser to scroll to a link or button that's not on the current
 * step. However, it could be possible to allow tab navigation between form elements, as long as
 * they are on the active step. This is a topic for further study.
 *
 * Copyright 2016 Henrik Ingo
 * MIT License
 */
/* global document */
(function (document) {
    "use strict";

    var root;
    var api;

    document.addEventListener("impress:init", function (event) {
        root = event.target;
        api = event.detail.api;
        var gc = api.lib.gc;

        var selectors = ["input[type=text]", "textarea", "select", "[contenteditable=true]"];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = selectors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var selector = _step.value;

                var elements = document.querySelectorAll(selector);
                if (!elements) {
                    continue;
                }

                for (var i = 0; i < elements.length; i++) {
                    var e = elements[i];
                    gc.addEventListener(e, "keydown", function (event) {
                        event.stopPropagation();
                    });
                    gc.addEventListener(e, "keyup", function (event) {
                        event.stopPropagation();
                    });
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }, false);

    document.addEventListener("impress:stepleave", function () {
        document.activeElement.blur();
    }, false);
})(document);

/**
 * Goto Plugin
 *
 * The goto plugin is a pre-stepleave plugin. It is executed before impress:stepleave,
 * and will alter the destination where to transition next.
 *
 * Example:
 *
 *         <!-- When leaving this step, go directly to "step-5" -->
 *         <div class="step" data-goto="step-5">
 *
 *         <!-- When leaving this step with next(), go directly to "step-5", instead of next step.
 *              If moving backwards to previous step - e.g. prev() instead of next() -
 *              then go to "step-1". -->
 *         <div class="step" data-goto-next="step-5" data-goto-prev="step-1">
 *
 *        <!-- data-goto-key-list and data-goto-next-list allow you to build advanced non-linear
 *             navigation. -->
 *        <div class="step"
 *             data-goto-key-list="ArrowUp ArrowDown ArrowRight ArrowLeft"
 *             data-goto-next-list="step-4 step-3 step-2 step-5">
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values for a table
 * of what strings to use for each key.
 *
 * Copyright 2016-2017 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global window, document, impress */

(function (document, window) {
    "use strict";

    var lib;

    document.addEventListener("impress:init", function (event) {
        lib = event.detail.api.lib;
    }, false);

    var isNumber = function isNumber(numeric) {
        return !isNaN(numeric);
    };

    var goto = function goto(event) {
        if (!event || !event.target) {
            return;
        }

        var data = event.target.dataset;
        var steps = document.querySelectorAll(".step");

        // Data-goto-key-list="" & data-goto-next-list="" //////////////////////////////////////////
        if (data.gotoKeyList !== undefined && data.gotoNextList !== undefined && event.origEvent !== undefined && event.origEvent.key !== undefined) {
            var keylist = data.gotoKeyList.split(" ");
            var nextlist = data.gotoNextList.split(" ");

            if (keylist.length !== nextlist.length) {
                window.console.log("impress goto plugin: data-goto-key-list and data-goto-next-list don't match:");
                window.console.log(keylist);
                window.console.log(nextlist);

                // Don't return, allow the other categories to work despite this error
            } else {
                var index = keylist.indexOf(event.origEvent.key);
                if (index >= 0) {
                    var next = nextlist[index];
                    if (isNumber(next)) {
                        event.detail.next = steps[next];

                        // If the new next element has its own transitionDuration, we're responsible
                        // for setting that on the event as well
                        event.detail.transitionDuration = lib.util.toNumber(event.detail.next.dataset.transitionDuration, event.detail.transitionDuration);
                        return;
                    } else {
                        var newTarget = document.getElementById(next);
                        if (newTarget && newTarget.classList.contains("step")) {
                            event.detail.next = newTarget;
                            event.detail.transitionDuration = lib.util.toNumber(event.detail.next.dataset.transitionDuration, event.detail.transitionDuration);
                            return;
                        } else {
                            window.console.log("impress goto plugin: " + next + " is not a step in this impress presentation.");
                        }
                    }
                }
            }
        }

        // Data-goto-next="" & data-goto-prev="" ///////////////////////////////////////////////////

        // Handle event.target data-goto-next attribute
        if (isNumber(data.gotoNext) && event.detail.reason === "next") {
            event.detail.next = steps[data.gotoNext];

            // If the new next element has its own transitionDuration, we're responsible for setting
            // that on the event as well
            event.detail.transitionDuration = lib.util.toNumber(event.detail.next.dataset.transitionDuration, event.detail.transitionDuration);
            return;
        }
        if (data.gotoNext && event.detail.reason === "next") {
            var newTarget = document.getElementById(data.gotoNext); // jshint ignore:line
            if (newTarget && newTarget.classList.contains("step")) {
                event.detail.next = newTarget;
                event.detail.transitionDuration = lib.util.toNumber(event.detail.next.dataset.transitionDuration, event.detail.transitionDuration);
                return;
            } else {
                window.console.log("impress goto plugin: " + data.gotoNext + " is not a step in this impress presentation.");
            }
        }

        // Handle event.target data-goto-prev attribute
        if (isNumber(data.gotoPrev) && event.detail.reason === "prev") {
            event.detail.next = steps[data.gotoPrev];
            event.detail.transitionDuration = lib.util.toNumber(event.detail.next.dataset.transitionDuration, event.detail.transitionDuration);
            return;
        }
        if (data.gotoPrev && event.detail.reason === "prev") {
            var newTarget = document.getElementById(data.gotoPrev); // jshint ignore:line
            if (newTarget && newTarget.classList.contains("step")) {
                event.detail.next = newTarget;
                event.detail.transitionDuration = lib.util.toNumber(event.detail.next.dataset.transitionDuration, event.detail.transitionDuration);
                return;
            } else {
                window.console.log("impress goto plugin: " + data.gotoPrev + " is not a step in this impress presentation.");
            }
        }

        // Data-goto="" ///////////////////////////////////////////////////////////////////////////

        // Handle event.target data-goto attribute
        if (isNumber(data.goto)) {
            event.detail.next = steps[data.goto];
            event.detail.transitionDuration = lib.util.toNumber(event.detail.next.dataset.transitionDuration, event.detail.transitionDuration);
            return;
        }
        if (data.goto) {
            var newTarget = document.getElementById(data.goto); // jshint ignore:line
            if (newTarget && newTarget.classList.contains("step")) {
                event.detail.next = newTarget;
                event.detail.transitionDuration = lib.util.toNumber(event.detail.next.dataset.transitionDuration, event.detail.transitionDuration);
                return;
            } else {
                window.console.log("impress goto plugin: " + data.goto + " is not a step in this impress presentation.");
            }
        }
    };

    // Register the plugin to be called in pre-stepleave phase
    impress.addPreStepLeavePlugin(goto);
})(document, window);

/**
 * Help popup plugin
 *
 * Example:
 *
 *     <!-- Show a help popup at start, or if user presses "H" -->
 *     <div id="impress-help"></div>
 *
 * For developers:
 *
 * Typical use for this plugin, is for plugins that support some keypress, to add a line
 * to the help popup produced by this plugin. For example "P: Presenter console".
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global window, document */

(function (document, window) {
    "use strict";

    var rows = [];
    var timeoutHandle;

    var triggerEvent = function triggerEvent(el, eventName, detail) {
        var event = document.createEvent("CustomEvent");
        event.initCustomEvent(eventName, true, true, detail);
        el.dispatchEvent(event);
    };

    var renderHelpDiv = function renderHelpDiv() {
        var helpDiv = document.getElementById("impress-help");
        if (helpDiv) {
            var html = [];
            for (var row in rows) {
                for (var arrayItem in row) {
                    html.push(rows[row][arrayItem]);
                }
            }
            if (html) {
                helpDiv.innerHTML = "<table>\n" + html.join("\n") + "</table>\n";
            }
        }
    };

    var toggleHelp = function toggleHelp() {
        var helpDiv = document.getElementById("impress-help");
        if (!helpDiv) {
            return;
        }

        if (helpDiv.style.display === "block") {
            helpDiv.style.display = "none";
        } else {
            helpDiv.style.display = "block";
            window.clearTimeout(timeoutHandle);
        }
    };

    document.addEventListener("keyup", function (event) {

        if (event.keyCode === 72) {
            // "h"
            event.preventDefault();
            toggleHelp();
        }
    }, false);

    // API
    // Other plugins can add help texts, typically if they support an action on a keypress.
    /**
     * Add a help text to the help popup.
     *
     * :param: e.detail.command  Example: "H"
     * :param: e.detail.text     Example: "Show this help."
     * :param: e.detail.row      Row index from 0 to 9 where to place this help text. Example: 0
     */
    document.addEventListener("impress:help:add", function (e) {

        // The idea is for the sender of the event to supply a unique row index, used for sorting.
        // But just in case two plugins would ever use the same row index, we wrap each row into
        // its own array. If there are more than one entry for the same index, they are shown in
        // first come, first serve ordering.
        var rowIndex = e.detail.row;
        if (_typeof(rows[rowIndex]) !== "object" || !rows[rowIndex].isArray) {
            rows[rowIndex] = [];
        }
        rows[e.detail.row].push("<tr><td><strong>" + e.detail.command + "</strong></td><td>" + e.detail.text + "</td></tr>");
        renderHelpDiv();
    });

    document.addEventListener("impress:init", function (e) {
        renderHelpDiv();

        // At start, show the help for 7 seconds.
        var helpDiv = document.getElementById("impress-help");
        if (helpDiv) {
            helpDiv.style.display = "block";
            timeoutHandle = window.setTimeout(function () {
                var helpDiv = document.getElementById("impress-help");
                helpDiv.style.display = "none";
            }, 7000);

            // Regster callback to empty the help div on teardown
            var api = e.detail.api;
            api.lib.gc.pushCallback(function () {
                window.clearTimeout(timeoutHandle);
                helpDiv.style.display = "";
                helpDiv.innerHTML = "";
                rows = [];
            });
        }

        // Use our own API to register the help text for "h"
        triggerEvent(document, "impress:help:add", { command: "H", text: "Show this help", row: 0 });
    });
})(document, window);

/**
 * Adds a presenter console to impress.js
 *
 * MIT Licensed, see license.txt.
 *
 * Copyright 2012, 2013, 2015 impress-console contributors (see README.txt)
 *
 * version: 1.3-dev
 *
 */

// This file contains so much HTML, that we will just respectfully disagree about js
/* jshint quotmark:single */
/* global navigator, top, setInterval, clearInterval, document, window */

(function (document, window) {
    'use strict';

    // TODO: Move this to src/lib/util.js

    var triggerEvent = function triggerEvent(el, eventName, detail) {
        var event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, detail);
        el.dispatchEvent(event);
    };

    // Create Language object depending on browsers language setting
    var lang;
    switch (navigator.language) {
        case 'de':
            lang = {
                'noNotes': '<div class="noNotes">Keine Notizen hierzu</div>',
                'restart': 'Neustart',
                'clickToOpen': 'Klicken um Sprecherkonsole zu öffnen',
                'prev': 'zurück',
                'next': 'weiter',
                'loading': 'initalisiere',
                'ready': 'Bereit',
                'moving': 'in Bewegung',
                'useAMPM': false
            };
            break;
        case 'en': // jshint ignore:line
        default:
            // jshint ignore:line
            lang = {
                'noNotes': '<div class="noNotes">No notes for this step</div>',
                'restart': 'Restart',
                'clickToOpen': 'Click to open speaker console',
                'prev': 'Prev',
                'next': 'Next',
                'loading': 'Loading',
                'ready': 'Ready',
                'moving': 'Moving',
                'useAMPM': false
            };
            break;
    }

    // Settings to set iframe in speaker console
    var preViewDefaultFactor = 0.7;
    var preViewMinimumFactor = 0.5;
    var preViewGap = 4;

    // This is the default template for the speaker console window
    var consoleTemplate = '<!DOCTYPE html>' + '<html id="impressconsole"><head>' +

    // Order is important: If user provides a cssFile, those will win, because they're later
    '{{cssStyle}}' + '{{cssLink}}' + '</head><body>' + '<div id="console">' + '<div id="views">' + '<iframe id="slideView" scrolling="no"></iframe>' + '<iframe id="preView" scrolling="no"></iframe>' + '<div id="blocker"></div>' + '</div>' + '<div id="notes"></div>' + '</div>' + '<div id="controls"> ' + '<div id="prev"><a  href="#" onclick="impress().prev(); return false;" />' + '{{prev}}</a></div>' + '<div id="next"><a  href="#" onclick="impress().next(); return false;" />' + '{{next}}</a></div>' + '<div id="clock">--:--</div>' + '<div id="timer" onclick="timerReset()">00m 00s</div>' + '<div id="status">{{loading}}</div>' + '</div>' + '</body></html>';

    // Default css location
    var cssFileOldDefault = 'css/impressConsole.css';
    var cssFile = undefined; // jshint ignore:line

    // Css for styling iframs on the console
    var cssFileIframeOldDefault = 'css/iframe.css';
    var cssFileIframe = undefined; // jshint ignore:line

    // All console windows, so that you can call impressConsole() repeatedly.
    var allConsoles = {};

    // Zero padding helper function:
    var zeroPad = function zeroPad(i) {
        return (i < 10 ? '0' : '') + i;
    };

    // The console object
    var impressConsole = window.impressConsole = function (rootId) {

        rootId = rootId || 'impress';

        if (allConsoles[rootId]) {
            return allConsoles[rootId];
        }

        // Root presentation elements
        var root = document.getElementById(rootId);

        var consoleWindow = null;

        var nextStep = function nextStep() {
            var classes = '';
            var nextElement = document.querySelector('.active');

            // Return to parents as long as there is no next sibling
            while (!nextElement.nextElementSibling && nextElement.parentNode) {
                nextElement = nextElement.parentNode;
            }
            nextElement = nextElement.nextElementSibling;
            while (nextElement) {
                classes = nextElement.attributes['class'];
                if (classes && classes.value.indexOf('step') !== -1) {
                    consoleWindow.document.getElementById('blocker').innerHTML = lang.next;
                    return nextElement;
                }

                if (nextElement.firstElementChild) {
                    // First go into deep
                    nextElement = nextElement.firstElementChild;
                } else {

                    // Go to next sibling or through parents until there is a next sibling
                    while (!nextElement.nextElementSibling && nextElement.parentNode) {
                        nextElement = nextElement.parentNode;
                    }
                    nextElement = nextElement.nextElementSibling;
                }
            }

            // No next element. Pick the first
            consoleWindow.document.getElementById('blocker').innerHTML = lang.restart;
            return document.querySelector('.step');
        };

        // Sync the notes to the step
        var onStepLeave = function onStepLeave() {
            if (consoleWindow) {

                // Set notes to next steps notes.
                var newNotes = document.querySelector('.active').querySelector('.notes');
                if (newNotes) {
                    newNotes = newNotes.innerHTML;
                } else {
                    newNotes = lang.noNotes;
                }
                consoleWindow.document.getElementById('notes').innerHTML = newNotes;

                // Set the views
                var baseURL = document.URL.substring(0, document.URL.search('#/'));
                var slideSrc = baseURL + '#' + document.querySelector('.active').id;
                var preSrc = baseURL + '#' + nextStep().id;
                var slideView = consoleWindow.document.getElementById('slideView');

                // Setting them when they are already set causes glithes in Firefox, so check first:
                if (slideView.src !== slideSrc) {
                    slideView.src = slideSrc;
                }
                var preView = consoleWindow.document.getElementById('preView');
                if (preView.src !== preSrc) {
                    preView.src = preSrc;
                }

                consoleWindow.document.getElementById('status').innerHTML = '<span class="moving">' + lang.moving + '</span>';
            }
        };

        // Sync the previews to the step
        var onStepEnter = function onStepEnter() {
            if (consoleWindow) {

                // We do everything here again, because if you stopped the previos step to
                // early, the onstepleave trigger is not called for that step, so
                // we need this to sync things.
                var newNotes = document.querySelector('.active').querySelector('.notes');
                if (newNotes) {
                    newNotes = newNotes.innerHTML;
                } else {
                    newNotes = lang.noNotes;
                }
                var notes = consoleWindow.document.getElementById('notes');
                notes.innerHTML = newNotes;
                notes.scrollTop = 0;

                // Set the views
                var baseURL = document.URL.substring(0, document.URL.search('#/'));
                var slideSrc = baseURL + '#' + document.querySelector('.active').id;
                var preSrc = baseURL + '#' + nextStep().id;
                var slideView = consoleWindow.document.getElementById('slideView');

                // Setting them when they are already set causes glithes in Firefox, so check first:
                if (slideView.src !== slideSrc) {
                    slideView.src = slideSrc;
                }
                var preView = consoleWindow.document.getElementById('preView');
                if (preView.src !== preSrc) {
                    preView.src = preSrc;
                }

                consoleWindow.document.getElementById('status').innerHTML = '<span  class="ready">' + lang.ready + '</span>';
            }
        };

        // Sync substeps
        var onSubstep = function onSubstep(event) {
            if (consoleWindow) {
                if (event.detail.reason === 'next') {
                    onSubstepShow();
                }
                if (event.detail.reason === 'prev') {
                    onSubstepHide();
                }
            }
        };

        var onSubstepShow = function onSubstepShow() {
            var slideView = consoleWindow.document.getElementById('slideView');
            triggerEventInView(slideView, 'impress:substep:show');
        };

        var onSubstepHide = function onSubstepHide() {
            var slideView = consoleWindow.document.getElementById('slideView');
            triggerEventInView(slideView, 'impress:substep:hide');
        };

        var triggerEventInView = function triggerEventInView(frame, eventName, detail) {

            // Note: Unfortunately Chrome does not allow createEvent on file:// URLs, so this won't
            // work. This does work on Firefox, and should work if viewing the presentation on a
            // http:// URL on Chrome.
            var event = frame.contentDocument.createEvent('CustomEvent');
            event.initCustomEvent(eventName, true, true, detail);
            frame.contentDocument.dispatchEvent(event);
        };

        var spaceHandler = function spaceHandler() {
            var notes = consoleWindow.document.getElementById('notes');
            if (notes.scrollTopMax - notes.scrollTop > 20) {
                notes.scrollTop = notes.scrollTop + notes.clientHeight * 0.8;
            } else {
                window.impress().next();
            }
        };

        var timerReset = function timerReset() {
            consoleWindow.timerStart = new Date();
        };

        // Show a clock
        var clockTick = function clockTick() {
            var now = new Date();
            var hours = now.getHours();
            var minutes = now.getMinutes();
            var seconds = now.getSeconds();
            var ampm = '';

            if (lang.useAMPM) {
                ampm = hours < 12 ? 'AM' : 'PM';
                hours = hours > 12 ? hours - 12 : hours;
                hours = hours === 0 ? 12 : hours;
            }

            // Clock
            var clockStr = zeroPad(hours) + ':' + zeroPad(minutes) + ':' + zeroPad(seconds) + ' ' + ampm;
            consoleWindow.document.getElementById('clock').firstChild.nodeValue = clockStr;

            // Timer
            seconds = Math.floor((now - consoleWindow.timerStart) / 1000);
            minutes = Math.floor(seconds / 60);
            seconds = Math.floor(seconds % 60);
            consoleWindow.document.getElementById('timer').firstChild.nodeValue = zeroPad(minutes) + 'm ' + zeroPad(seconds) + 's';

            if (!consoleWindow.initialized) {

                // Nudge the slide windows after load, or they will scrolled wrong on Firefox.
                consoleWindow.document.getElementById('slideView').contentWindow.scrollTo(0, 0);
                consoleWindow.document.getElementById('preView').contentWindow.scrollTo(0, 0);
                consoleWindow.initialized = true;
            }
        };

        var registerKeyEvent = function registerKeyEvent(keyCodes, handler, window) {
            if (window === undefined) {
                window = consoleWindow;
            }

            // Prevent default keydown action when one of supported key is pressed
            window.document.addEventListener('keydown', function (event) {
                if (!event.ctrlKey && !event.altKey && !event.shiftKey && !event.metaKey && keyCodes.indexOf(event.keyCode) !== -1) {
                    event.preventDefault();
                }
            }, false);

            // Trigger impress action on keyup
            window.document.addEventListener('keyup', function (event) {
                if (!event.ctrlKey && !event.altKey && !event.shiftKey && !event.metaKey && keyCodes.indexOf(event.keyCode) !== -1) {
                    handler();
                    event.preventDefault();
                }
            }, false);
        };

        var consoleOnLoad = function consoleOnLoad() {
            var slideView = consoleWindow.document.getElementById('slideView');
            var preView = consoleWindow.document.getElementById('preView');

            // Firefox:
            slideView.contentDocument.body.classList.add('impress-console');
            preView.contentDocument.body.classList.add('impress-console');
            if (cssFileIframe !== undefined) {
                slideView.contentDocument.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" type="text/css" href="' + cssFileIframe + '">');
                preView.contentDocument.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" type="text/css" href="' + cssFileIframe + '">');
            }

            // Chrome:
            slideView.addEventListener('load', function () {
                slideView.contentDocument.body.classList.add('impress-console');
                if (cssFileIframe !== undefined) {
                    slideView.contentDocument.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" type="text/css" href="' + cssFileIframe + '">');
                }
            });
            preView.addEventListener('load', function () {
                preView.contentDocument.body.classList.add('impress-console');
                if (cssFileIframe !== undefined) {
                    preView.contentDocument.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" type="text/css" href="' + cssFileIframe + '">');
                }
            });
        };

        var open = function open() {
            if (top.isconsoleWindow) {
                return;
            }

            if (consoleWindow && !consoleWindow.closed) {
                consoleWindow.focus();
            } else {
                consoleWindow = window.open('', 'impressConsole');

                // If opening failes this may be because the browser prevents this from
                // not (or less) interactive JavaScript...
                if (consoleWindow == null) {

                    // ... so I add a button to klick.
                    // workaround on firefox
                    var message = document.createElement('div');
                    message.id = 'impress-console-button';
                    message.style.position = 'fixed';
                    message.style.left = 0;
                    message.style.top = 0;
                    message.style.right = 0;
                    message.style.bottom = 0;
                    message.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                    var clickStr = 'var x = document.getElementById(\'impress-console-button\');' + 'x.parentNode.removeChild(x);' + 'var r = document.getElementById(\'' + rootId + '\');' + 'impress(\'' + rootId + '\').lib.util.triggerEvent(r, \'impress:console:open\', {})';
                    var styleStr = 'margin: 25vh 25vw;width:50vw;height:50vh;';
                    message.innerHTML = '<button style="' + styleStr + '" ' + 'onclick="' + clickStr + '">' + lang.clickToOpen + '</button>';
                    document.body.appendChild(message);
                    return;
                }

                var cssLink = '';
                if (cssFile !== undefined) {
                    cssLink = '<link rel="stylesheet" type="text/css" media="screen" href="' + cssFile + '">';
                }

                // This sets the window location to the main window location, so css can be loaded:
                consoleWindow.document.open();

                // Write the template:
                consoleWindow.document.write(

                // CssStyleStr is lots of inline <style></style> defined at the end of this file
                consoleTemplate.replace('{{cssStyle}}', cssStyleStr()).replace('{{cssLink}}', cssLink).replace(/{{.*?}}/gi, function (x) {
                    return lang[x.substring(2, x.length - 2)];
                }));
                consoleWindow.document.title = 'Speaker Console (' + document.title + ')';
                consoleWindow.impress = window.impress;

                // We set this flag so we can detect it later, to prevent infinite popups.
                consoleWindow.isconsoleWindow = true;

                // Set the onload function:
                consoleWindow.onload = consoleOnLoad;

                // Add clock tick
                consoleWindow.timerStart = new Date();
                consoleWindow.timerReset = timerReset;
                consoleWindow.clockInterval = setInterval(allConsoles[rootId].clockTick, 1000);

                // Keyboard navigation handlers
                // 33: pg up, 37: left, 38: up
                registerKeyEvent([33, 37, 38], window.impress().prev);

                // 34: pg down, 39: right, 40: down
                registerKeyEvent([34, 39, 40], window.impress().next);

                // 32: space
                registerKeyEvent([32], spaceHandler);

                // 82: R
                registerKeyEvent([82], timerReset);

                // Cleanup
                consoleWindow.onbeforeunload = function () {

                    // I don't know why onunload doesn't work here.
                    clearInterval(consoleWindow.clockInterval);
                };

                // It will need a little nudge on Firefox, but only after loading:
                onStepEnter();
                consoleWindow.initialized = false;
                consoleWindow.document.close();

                //Catch any window resize to pass size on
                window.onresize = resize;
                consoleWindow.onresize = resize;

                return consoleWindow;
            }
        };

        var resize = function resize() {
            var slideView = consoleWindow.document.getElementById('slideView');
            var preView = consoleWindow.document.getElementById('preView');

            // Get ratio of presentation
            var ratio = window.innerHeight / window.innerWidth;

            // Get size available for views
            var views = consoleWindow.document.getElementById('views');

            // SlideView may have a border or some padding:
            // asuming same border width on both direktions
            var delta = slideView.offsetWidth - slideView.clientWidth;

            // Set views
            var slideViewWidth = views.clientWidth - delta;
            var slideViewHeight = Math.floor(slideViewWidth * ratio);

            var preViewTop = slideViewHeight + preViewGap;

            var preViewWidth = Math.floor(slideViewWidth * preViewDefaultFactor);
            var preViewHeight = Math.floor(slideViewHeight * preViewDefaultFactor);

            // Shrink preview to fit into space available
            if (views.clientHeight - delta < preViewTop + preViewHeight) {
                preViewHeight = views.clientHeight - delta - preViewTop;
                preViewWidth = Math.floor(preViewHeight / ratio);
            }

            // If preview is not high enough forget ratios!
            if (preViewWidth <= Math.floor(slideViewWidth * preViewMinimumFactor)) {
                slideViewWidth = views.clientWidth - delta;
                slideViewHeight = Math.floor((views.clientHeight - delta - preViewGap) / (1 + preViewMinimumFactor));

                preViewTop = slideViewHeight + preViewGap;

                preViewWidth = Math.floor(slideViewWidth * preViewMinimumFactor);
                preViewHeight = views.clientHeight - delta - preViewTop;
            }

            // Set the calculated into styles
            slideView.style.width = slideViewWidth + 'px';
            slideView.style.height = slideViewHeight + 'px';

            preView.style.top = preViewTop + 'px';

            preView.style.width = preViewWidth + 'px';
            preView.style.height = preViewHeight + 'px';
        };

        var _init = function _init(cssConsole, cssIframe) {
            if (cssConsole !== undefined) {
                cssFile = cssConsole;
            }

            // You can also specify the css in the presentation root div:
            // <div id="impress" data-console-css=..." data-console-css-iframe="...">
            else if (root.dataset.consoleCss !== undefined) {
                    cssFile = root.dataset.consoleCss;
                }

            if (cssIframe !== undefined) {
                cssFileIframe = cssIframe;
            } else if (root.dataset.consoleCssIframe !== undefined) {
                cssFileIframe = root.dataset.consoleCssIframe;
            }

            // Register the event
            root.addEventListener('impress:stepleave', onStepLeave);
            root.addEventListener('impress:stepenter', onStepEnter);
            root.addEventListener('impress:substep:stepleaveaborted', onSubstep);
            root.addEventListener('impress:substep:show', onSubstepShow);
            root.addEventListener('impress:substep:hide', onSubstepHide);

            //When the window closes, clean up after ourselves.
            window.onunload = function () {
                if (consoleWindow && !consoleWindow.closed) {
                    consoleWindow.close();
                }
            };

            //Open speaker console when they press 'p'
            registerKeyEvent([80], open, window);

            //Btw, you can also launch console automatically:
            //<div id="impress" data-console-autolaunch="true">
            if (root.dataset.consoleAutolaunch === 'true') {
                open();
            }
        };

        var init = function init(cssConsole, cssIframe) {
            if ((cssConsole === undefined || cssConsole === cssFileOldDefault) && (cssIframe === undefined || cssIframe === cssFileIframeOldDefault)) {
                window.console.log('impressConsole().init() is deprecated. ' + 'impressConsole is now initialized automatically when you ' + 'call impress().init().');
            }
            _init(cssConsole, cssIframe);
        };

        // New API for impress.js plugins is based on using events
        root.addEventListener('impress:console:open', function () {
            open();
        });

        /**
         * Register a key code to an event handler
         *
         * :param: event.detail.keyCodes    List of key codes
         * :param: event.detail.handler     A function registered as the event handler
         * :param: event.detail.window      The console window to register the keycode in
         */
        root.addEventListener('impress:console:registerKeyEvent', function (event) {
            registerKeyEvent(event.detail.keyCodes, event.detail.handler, event.detail.window);
        });

        // Return the object
        allConsoles[rootId] = { init: init, open: open, clockTick: clockTick,
            registerKeyEvent: registerKeyEvent, _init: _init };
        return allConsoles[rootId];
    };

    // This initializes impressConsole automatically when initializing impress itself
    document.addEventListener('impress:init', function (event) {

        // Note: impressConsole wants the id string, not the DOM element directly
        impressConsole(event.target.id)._init();

        // Add 'P' to the help popup
        triggerEvent(document, 'impress:help:add', { command: 'P', text: 'Presenter console', row: 10 });
    });

    // Returns a string to be used inline as a css <style> element in the console window.
    // Apologies for length, but hiding it here at the end to keep it away from rest of the code.
    var cssStyleStr = function cssStyleStr() {
        return "<style>\n            #impressconsole body {\n                background-color: rgb(255, 255, 255);\n                padding: 0;\n                margin: 0;\n                font-family: verdana, arial, sans-serif;\n                font-size: 2vw;\n            }\n\n            #impressconsole div#console {\n                position: absolute;\n                top: 0.5vw;\n                left: 0.5vw;\n                right: 0.5vw;\n                bottom: 3vw;\n                margin: 0;\n            }\n\n            #impressconsole div#views, #impressconsole div#notes {\n                position: absolute;\n                top: 0;\n                bottom: 0;\n            }\n\n            #impressconsole div#views {\n                left: 0;\n                right: 50vw;\n                overflow: hidden;\n            }\n\n            #impressconsole div#blocker {\n                position: absolute;\n                right: 0;\n                bottom: 0;\n            }\n\n            #impressconsole div#notes {\n                left: 50vw;\n                right: 0;\n                overflow-x: hidden;\n                overflow-y: auto;\n                padding: 0.3ex;\n                background-color: rgb(255, 255, 255);\n                border: solid 1px rgb(120, 120, 120);\n            }\n\n            #impressconsole div#notes .noNotes {\n                color: rgb(200, 200, 200);\n            }\n\n            #impressconsole div#notes p {\n                margin-top: 0;\n            }\n\n            #impressconsole iframe {\n                position: absolute;\n                margin: 0;\n                padding: 0;\n                left: 0;\n                border: solid 1px rgb(120, 120, 120);\n            }\n\n            #impressconsole iframe#slideView {\n                top: 0;\n                width: 49vw;\n                height: 49vh;\n            }\n\n            #impressconsole iframe#preView {\n                opacity: 0.7;\n                top: 50vh;\n                width: 30vw;\n                height: 30vh;\n            }\n\n            #impressconsole div#controls {\n                margin: 0;\n                position: absolute;\n                bottom: 0.25vw;\n                left: 0.5vw;\n                right: 0.5vw;\n                height: 2.5vw;\n                background-color: rgb(255, 255, 255);\n                background-color: rgba(255, 255, 255, 0.6);\n            }\n\n            #impressconsole div#prev, div#next {\n            }\n\n            #impressconsole div#prev a, #impressconsole div#next a {\n                display: block;\n                border: solid 1px rgb(70, 70, 70);\n                border-radius: 0.5vw;\n                font-size: 1.5vw;\n                padding: 0.25vw;\n                text-decoration: none;\n                background-color: rgb(220, 220, 220);\n                color: rgb(0, 0, 0);\n            }\n\n            #impressconsole div#prev a:hover, #impressconsole div#next a:hover {\n                background-color: rgb(245, 245, 245);\n            }\n\n            #impressconsole div#prev {\n                float: left;\n            }\n\n            #impressconsole div#next {\n                float: right;\n            }\n\n            #impressconsole div#status {\n                margin-left: 2em;\n                margin-right: 2em;\n                text-align: center;\n                float: right;\n            }\n\n            #impressconsole div#clock {\n                margin-left: 2em;\n                margin-right: 2em;\n                text-align: center;\n                float: left;\n            }\n\n            #impressconsole div#timer {\n                margin-left: 2em;\n                margin-right: 2em;\n                text-align: center;\n                float: left;\n            }\n\n            #impressconsole span.moving {\n                color: rgb(255, 0, 0);\n            }\n\n            #impressconsole span.ready {\n                color: rgb(0, 128, 0);\n            }\n        </style>";
    };
})(document, window);

/**
 * Media Plugin
 *
 * This plugin will do the following things:
 *
 *  - Add a special class when playing (body.impress-media-video-playing
 *    and body.impress-media-video-playing) and pausing media (body.impress-media-video-paused
 *    and body.impress-media-audio-paused) (removing them when ending).
 *    This can be useful for example for darkening the background or fading out other elements
 *    while a video is playing.
 *    Only media at the current step are taken into account. All classes are removed when leaving
 *    a step.
 *
 *  - Introduce the following new data attributes:
 *
 *    - data-media-autoplay="true": Autostart media when entering its step.
 *    - data-media-autostop="true": Stop media (= pause and reset to start), when leaving its
 *      step.
 *    - data-media-autopause="true": Pause media but keep current time when leaving its step.
 *
 *    When these attributes are added to a step they are inherited by all media on this step.
 *    Of course this setting can be overwritten by adding different attributes to inidvidual
 *    media.
 *
 *    The same rule applies when this attributes is added to the root element. Settings can be
 *    overwritten for individual steps and media.
 *
 *    Examples:
 *    - data-media-autostart="true" data-media-autostop="true": start media on enter, stop on
 *      leave, restart from beginning when re-entering the step.
 *
 *    - data-media-autostart="true" data-media-autopause="true": start media on enter, pause on
 *      leave, resume on re-enter
 *
 *    - data-media-autostart="true" data-media-autostop="true" data-media-autopause="true": start
 *      media on enter, stop on leave (stop overwrites pause).
 *
 *    - data-media-autostart="true" data-media-autopause="false": let media start automatically
 *      when entering a step and let it play when leaving the step.
 *
 *    - <div id="impress" data-media-autostart="true"> ... <div class="step"
 *      data-media-autostart="false">
 *      All media is startet automatically on all steps except the one that has the
 *      data-media-autostart="false" attribute.
 *
 *  - Pro tip: Use <audio onended="impress().next()"> or <video onended="impress().next()"> to
 *    proceed to the next step automatically, when the end of the media is reached.
 *
 *
 * Copyright 2018 Holger Teichert (@complanar)
 * Released under the MIT license.
 */
/* global window, document */

(function (document, window) {
    "use strict";

    var root, api, gc, attributeTracker;

    attributeTracker = [];

    // Function names
    var enhanceMediaNodes, enhanceMedia, removeMediaClasses, onStepenterDetectImpressConsole, onStepenter, onStepleave, onPlay, onPause, onEnded, getMediaAttribute, teardown;

    document.addEventListener("impress:init", function (event) {
        root = event.target;
        api = event.detail.api;
        gc = api.lib.gc;

        enhanceMedia();

        gc.pushCallback(teardown);
    }, false);

    teardown = function teardown() {
        var el, i;
        removeMediaClasses();
        for (i = 0; i < attributeTracker.length; i += 1) {
            el = attributeTracker[i];
            el.node.removeAttribute(el.attr);
        }
        attributeTracker = [];
    };

    getMediaAttribute = function getMediaAttribute(attributeName, nodes) {
        var attrName, attrValue, i, node;
        attrName = "data-media-" + attributeName;

        // Look for attributes in all nodes
        for (i = 0; i < nodes.length; i += 1) {
            node = nodes[i];

            // First test, if the attribute exists, because some browsers may return
            // an empty string for non-existing attributes - specs are not clear at that point
            if (node.hasAttribute(attrName)) {

                // Attribute found, return their parsed boolean value, empty strings count as true
                // to enable empty value booleans (common in html5 but not allowed in well formed
                // xml).
                attrValue = node.getAttribute(attrName);
                if (attrValue === "" || attrValue === "true") {
                    return true;
                } else {
                    return false;
                }
            }

            // No attribute found at current node, proceed with next round
        }

        // Last resort: no attribute found - return undefined to distiguish from false
        return undefined;
    };

    onPlay = function onPlay(event) {
        var type = event.target.nodeName.toLowerCase();
        document.body.classList.add("impress-media-" + type + "-playing");
        document.body.classList.remove("impress-media-" + type + "-paused");
    };

    onPause = function onPause(event) {
        var type = event.target.nodeName.toLowerCase();
        document.body.classList.add("impress-media-" + type + "-paused");
        document.body.classList.remove("impress-media-" + type + "-playing");
    };

    onEnded = function onEnded(event) {
        var type = event.target.nodeName.toLowerCase();
        document.body.classList.remove("impress-media-" + type + "-playing");
        document.body.classList.remove("impress-media-" + type + "-paused");
    };

    removeMediaClasses = function removeMediaClasses() {
        var type, types;
        types = ["video", "audio"];
        for (type in types) {
            document.body.classList.remove("impress-media-" + types[type] + "-playing");
            document.body.classList.remove("impress-media-" + types[type] + "-paused");
        }
    };

    enhanceMediaNodes = function enhanceMediaNodes() {
        var i, id, media, mediaElement, type;

        media = root.querySelectorAll("audio, video");
        for (i = 0; i < media.length; i += 1) {
            type = media[i].nodeName.toLowerCase();

            // Set an id to identify each media node - used e.g. for cross references by
            // the consoleMedia plugin
            mediaElement = media[i];
            id = mediaElement.getAttribute("id");
            if (id === undefined || id === null) {
                mediaElement.setAttribute("id", "media-" + type + "-" + i);
                attributeTracker.push({ "node": mediaElement, "attr": "id" });
            }
            gc.addEventListener(mediaElement, "play", onPlay);
            gc.addEventListener(mediaElement, "playing", onPlay);
            gc.addEventListener(mediaElement, "pause", onPause);
            gc.addEventListener(mediaElement, "ended", onEnded);
        }
    };

    enhanceMedia = function enhanceMedia() {
        var steps, stepElement, i;
        enhanceMediaNodes();
        steps = document.getElementsByClassName("step");
        for (i = 0; i < steps.length; i += 1) {
            stepElement = steps[i];

            gc.addEventListener(stepElement, "impress:stepenter", onStepenter);
            gc.addEventListener(stepElement, "impress:stepleave", onStepleave);
        }
    };

    onStepenterDetectImpressConsole = function onStepenterDetectImpressConsole() {
        return {
            "preview": window.frameElement !== null && window.frameElement.id === "preView",
            "slideView": window.frameElement !== null && window.frameElement.id === "slideView"
        };
    };

    onStepenter = function onStepenter(event) {
        var stepElement, media, mediaElement, i, onConsole, autoplay;
        if (!event || !event.target) {
            return;
        }

        stepElement = event.target;
        removeMediaClasses();

        media = stepElement.querySelectorAll("audio, video");
        for (i = 0; i < media.length; i += 1) {
            mediaElement = media[i];

            // Autoplay when (maybe inherited) autoplay setting is true,
            // but only if not on preview of the next step in impressConsole
            onConsole = onStepenterDetectImpressConsole();
            autoplay = getMediaAttribute("autoplay", [mediaElement, stepElement, root]);
            if (autoplay && !onConsole.preview) {
                if (onConsole.slideView) {
                    mediaElement.muted = true;
                }
                mediaElement.play();
            }
        }
    };

    onStepleave = function onStepleave(event) {
        var stepElement, media, i, mediaElement, autoplay, autopause, autostop;
        if (!event || !event.target) {
            return;
        }

        stepElement = event.target;
        media = event.target.querySelectorAll("audio, video");
        for (i = 0; i < media.length; i += 1) {
            mediaElement = media[i];

            autoplay = getMediaAttribute("autoplay", [mediaElement, stepElement, root]);
            autopause = getMediaAttribute("autopause", [mediaElement, stepElement, root]);
            autostop = getMediaAttribute("autostop", [mediaElement, stepElement, root]);

            // If both autostop and autopause are undefined, set it to the value of autoplay
            if (autostop === undefined && autopause === undefined) {
                autostop = autoplay;
            }

            if (autopause || autostop) {
                mediaElement.pause();
                if (autostop) {
                    mediaElement.currentTime = 0;
                }
            }
        }
        removeMediaClasses();
    };
})(document, window);

/**
 * Mobile devices support
 *
 * Allow presentation creators to hide all but 3 slides, to save resources, particularly on mobile
 * devices, using classes body.impress-mobile, .step.prev, .step.active and .step.next.
 *
 * Note: This plugin does not take into account possible redirections done with skip, goto etc
 * plugins. Basically it wouldn't work as intended in such cases, but the active step will at least
 * be correct.
 *
 * Adapted to a plugin from a submission by @Kzeni:
 * https://github.com/impress/impress.js/issues/333
 */
/* global document, navigator */
(function (document) {
    "use strict";

    var getNextStep = function getNextStep(el) {
        var steps = document.querySelectorAll(".step");
        for (var i = 0; i < steps.length; i++) {
            if (steps[i] === el) {
                if (i + 1 < steps.length) {
                    return steps[i + 1];
                } else {
                    return steps[0];
                }
            }
        }
    };
    var getPrevStep = function getPrevStep(el) {
        var steps = document.querySelectorAll(".step");
        for (var i = steps.length - 1; i >= 0; i--) {
            if (steps[i] === el) {
                if (i - 1 >= 0) {
                    return steps[i - 1];
                } else {
                    return steps[steps.length - 1];
                }
            }
        }
    };

    // Detect mobile browsers & add CSS class as appropriate.
    document.addEventListener("impress:init", function (event) {
        var body = document.body;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            body.classList.add("impress-mobile");
        }

        // Unset all this on teardown
        var api = event.detail.api;
        api.lib.gc.pushCallback(function () {
            document.body.classList.remove("impress-mobile");
            var prev = document.getElementsByClassName("prev")[0];
            var next = document.getElementsByClassName("next")[0];
            if (typeof prev !== "undefined") {
                prev.classList.remove("prev");
            }
            if (typeof next !== "undefined") {
                next.classList.remove("next");
            }
        });
    });

    // Add prev and next classes to the siblings of the newly entered active step element
    // Remove prev and next classes from their current step elements
    // Note: As an exception we break namespacing rules, as these are useful general purpose
    // classes. (Naming rules would require us to use css classes mobile-next and mobile-prev,
    // based on plugin name.)
    document.addEventListener("impress:stepenter", function (event) {
        var oldprev = document.getElementsByClassName("prev")[0];
        var oldnext = document.getElementsByClassName("next")[0];

        var prev = getPrevStep(event.target);
        prev.classList.add("prev");
        var next = getNextStep(event.target);
        next.classList.add("next");

        if (typeof oldprev !== "undefined") {
            oldprev.classList.remove("prev");
        }
        if (typeof oldnext !== "undefined") {
            oldnext.classList.remove("next");
        }
    });
})(document);

/**
 * Mouse timeout plugin
 *
 * After 3 seconds of mouse inactivity, add the css class
 * `body.impress-mouse-timeout`. On `mousemove`, `click` or `touch`, remove the
 * class.
 *
 * The use case for this plugin is to use CSS to hide elements from the screen
 * and only make them visible when the mouse is moved. Examples where this
 * might be used are: the toolbar from the toolbar plugin, and the mouse cursor
 * itself.
 *
 * Example CSS:
 *
 *     body.impress-mouse-timeout {
 *         cursor: none;
 *     }
 *     body.impress-mouse-timeout div#impress-toolbar {
 *         display: none;
 *     }
 *
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global window, document */
(function (document, window) {
    "use strict";

    var timeout = 3;
    var timeoutHandle;

    var hide = function hide() {

        // Mouse is now inactive
        document.body.classList.add("impress-mouse-timeout");
    };

    var show = function show() {
        if (timeoutHandle) {
            window.clearTimeout(timeoutHandle);
        }

        // Mouse is now active
        document.body.classList.remove("impress-mouse-timeout");

        // Then set new timeout after which it is considered inactive again
        timeoutHandle = window.setTimeout(hide, timeout * 1000);
    };

    document.addEventListener("impress:init", function (event) {
        var api = event.detail.api;
        var gc = api.lib.gc;
        gc.addEventListener(document, "mousemove", show);
        gc.addEventListener(document, "click", show);
        gc.addEventListener(document, "touch", show);

        // Set first timeout
        show();

        // Unset all this on teardown
        gc.pushCallback(function () {
            window.clearTimeout(timeoutHandle);
            document.body.classList.remove("impress-mouse-timeout");
        });
    }, false);
})(document, window);

/**
 * Navigation events plugin
 *
 * As you can see this part is separate from the impress.js core code.
 * It's because these navigation actions only need what impress.js provides with
 * its simple API.
 *
 * This plugin is what we call an _init plugin_. It's a simple kind of
 * impress.js plugin. When loaded, it starts listening to the `impress:init`
 * event. That event listener initializes the plugin functionality - in this
 * case we listen to some keypress and mouse events. The only dependencies on
 * core impress.js functionality is the `impress:init` method, as well as using
 * the public api `next(), prev(),` etc when keys are pressed.
 *
 * Copyright 2011-2012 Bartek Szopka (@bartaz)
 * Released under the MIT license.
 * ------------------------------------------------
 *  author:  Bartek Szopka
 *  version: 0.5.3
 *  url:     http://bartaz.github.com/impress.js/
 *  source:  http://github.com/bartaz/impress.js/
 *
 */
/* global document */
(function (document) {
    "use strict";

    // Wait for impress.js to be initialized

    document.addEventListener("impress:init", function (event) {

        // Getting API from event data.
        // So you don't event need to know what is the id of the root element
        // or anything. `impress:init` event data gives you everything you
        // need to control the presentation that was just initialized.
        var api = event.detail.api;
        var gc = api.lib.gc;
        var util = api.lib.util;

        // Supported keys are:
        // [space] - quite common in presentation software to move forward
        // [up] [right] / [down] [left] - again common and natural addition,
        // [pgdown] / [pgup] - often triggered by remote controllers,
        // [tab] - this one is quite controversial, but the reason it ended up on
        //   this list is quite an interesting story... Remember that strange part
        //   in the impress.js code where window is scrolled to 0,0 on every presentation
        //   step, because sometimes browser scrolls viewport because of the focused element?
        //   Well, the [tab] key by default navigates around focusable elements, so clicking
        //   it very often caused scrolling to focused element and breaking impress.js
        //   positioning. I didn't want to just prevent this default action, so I used [tab]
        //   as another way to moving to next step... And yes, I know that for the sake of
        //   consistency I should add [shift+tab] as opposite action...
        var isNavigationEvent = function isNavigationEvent(event) {

            // Don't trigger navigation for example when user returns to browser window with ALT+TAB
            if (event.altKey || event.ctrlKey || event.metaKey) {
                return false;
            }

            // In the case of TAB, we force step navigation always, overriding the browser
            // navigation between input elements, buttons and links.
            if (event.keyCode === 9) {
                return true;
            }

            // With the sole exception of TAB, we also ignore keys pressed if shift is down.
            if (event.shiftKey) {
                return false;
            }

            if (event.keyCode >= 32 && event.keyCode <= 34 || event.keyCode >= 37 && event.keyCode <= 40) {
                return true;
            }
        };

        // KEYBOARD NAVIGATION HANDLERS

        // Prevent default keydown action when one of supported key is pressed.
        gc.addEventListener(document, "keydown", function (event) {
            if (isNavigationEvent(event)) {
                event.preventDefault();
            }
        }, false);

        // Trigger impress action (next or prev) on keyup.
        gc.addEventListener(document, "keyup", function (event) {
            if (isNavigationEvent(event)) {
                if (event.shiftKey) {
                    switch (event.keyCode) {
                        case 9:
                            // Shift+tab
                            api.prev();
                            break;
                    }
                } else {
                    switch (event.keyCode) {
                        case 33: // Pg up
                        case 37: // Left
                        case 38:
                            // Up
                            api.prev(event);
                            break;
                        case 9: // Tab
                        case 32: // Space
                        case 34: // Pg down
                        case 39: // Right
                        case 40:
                            // Down
                            api.next(event);
                            break;
                    }
                }
                event.preventDefault();
            }
        }, false);

        // Delegated handler for clicking on the links to presentation steps
        gc.addEventListener(document, "click", function (event) {

            // Event delegation with "bubbling"
            // check if event target (or any of its parents is a link)
            var target = event.target;
            try {
                while (target.tagName !== "A" && target !== document.documentElement) {
                    target = target.parentNode;
                }

                if (target.tagName === "A") {
                    var href = target.getAttribute("href");

                    // If it's a link to presentation step, target this step
                    if (href && href[0] === "#") {
                        target = document.getElementById(href.slice(1));
                    }
                }

                if (api.goto(target)) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                }
            } catch (err) {

                // For example, when clicking on the button to launch speaker console, the button
                // is immediately deleted from the DOM. In this case target is a DOM element when
                // we get it, but turns out to be null if you try to actually do anything with it.
                if (err instanceof TypeError && err.message === "target is null") {
                    return;
                }
                throw err;
            }
        }, false);

        // Delegated handler for clicking on step elements
        gc.addEventListener(document, "click", function (event) {
            var target = event.target;
            try {

                // Find closest step element that is not active
                while (!(target.classList.contains("step") && !target.classList.contains("active")) && target !== document.documentElement) {
                    target = target.parentNode;
                }

                if (api.goto(target)) {
                    event.preventDefault();
                }
            } catch (err) {

                // For example, when clicking on the button to launch speaker console, the button
                // is immediately deleted from the DOM. In this case target is a DOM element when
                // we get it, but turns out to be null if you try to actually do anything with it.
                if (err instanceof TypeError && err.message === "target is null") {
                    return;
                }
                throw err;
            }
        }, false);

        // Add a line to the help popup
        util.triggerEvent(document, "impress:help:add", { command: "Left &amp; Right",
            text: "Previous &amp; Next step",
            row: 1 });
    }, false);
})(document);

/**
 * Navigation UI plugin
 *
 * This plugin provides UI elements "back", "forward" and a list to select
 * a specific slide number.
 *
 * The navigation controls are added to the toolbar plugin via DOM events. User must enable the
 * toolbar in a presentation to have them visible.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */

// This file contains so much HTML, that we will just respectfully disagree about js
/* jshint quotmark:single */
/* global document */

(function (document) {
    'use strict';

    var toolbar;
    var api;
    var root;
    var steps;
    var hideSteps = [];
    var prev;
    var select;
    var next;

    var triggerEvent = function triggerEvent(el, eventName, detail) {
        var event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, detail);
        el.dispatchEvent(event);
    };

    var makeDomElement = function makeDomElement(html) {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        return tempDiv.firstChild;
    };

    var selectOptionsHtml = function selectOptionsHtml() {
        var options = '';
        for (var i = 0; i < steps.length; i++) {

            // Omit steps that are listed as hidden from select widget
            if (hideSteps.indexOf(steps[i]) < 0) {
                options = options + '<option value="' + steps[i].id + '">' + // jshint ignore:line
                steps[i].id + '</option>' + '\n'; // jshint ignore:line
            }
        }
        return options;
    };

    var addNavigationControls = function addNavigationControls(event) {
        api = event.detail.api;
        var gc = api.lib.gc;
        root = event.target;
        steps = root.querySelectorAll('.step');

        var prevHtml = '<button id="impress-navigation-ui-prev" title="Previous" ' + 'class="impress-navigation-ui">&lt;</button>';
        var selectHtml = '<select id="impress-navigation-ui-select" title="Go to" ' + 'class="impress-navigation-ui">' + '\n' + selectOptionsHtml() + '</select>';
        var nextHtml = '<button id="impress-navigation-ui-next" title="Next" ' + 'class="impress-navigation-ui">&gt;</button>';

        prev = makeDomElement(prevHtml);
        prev.addEventListener('click', function () {
            api.prev();
        });
        select = makeDomElement(selectHtml);
        select.addEventListener('change', function (event) {
            api.goto(event.target.value);
        });
        gc.addEventListener(root, 'impress:steprefresh', function (event) {

            // As impress.js core now allows to dynamically edit the steps, including adding,
            // removing, and reordering steps, we need to requery and redraw the select list on
            // every stepenter event.
            steps = root.querySelectorAll('.step');
            select.innerHTML = '\n' + selectOptionsHtml();

            // Make sure the list always shows the step we're actually on, even if it wasn't
            // selected from the list
            select.value = event.target.id;
        });
        next = makeDomElement(nextHtml);
        next.addEventListener('click', function () {
            api.next();
        });

        triggerEvent(toolbar, 'impress:toolbar:appendChild', { group: 0, element: prev });
        triggerEvent(toolbar, 'impress:toolbar:appendChild', { group: 0, element: select });
        triggerEvent(toolbar, 'impress:toolbar:appendChild', { group: 0, element: next });
    };

    // API for not listing given step in the select widget.
    // For example, if you set class="skip" on some element, you may not want it to show up in the
    // list either. Otoh we cannot assume that, or anything else, so steps that user wants omitted
    // must be specifically added with this API call.
    document.addEventListener('impress:navigation-ui:hideStep', function (event) {
        hideSteps.push(event.target);
        if (select) {
            select.innerHTML = selectOptionsHtml();
        }
    }, false);

    // Wait for impress.js to be initialized
    document.addEventListener('impress:init', function (event) {
        toolbar = document.querySelector('#impress-toolbar');
        if (toolbar) {
            addNavigationControls(event);
        }
    }, false);
})(document);

/* global document */
(function (document) {
    "use strict";

    var root;
    var stepids = [];

    // Get stepids from the steps under impress root
    var getSteps = function getSteps() {
        stepids = [];
        var steps = root.querySelectorAll(".step");
        for (var i = 0; i < steps.length; i++) {
            stepids[i + 1] = steps[i].id;
        }
    };

    // Wait for impress.js to be initialized
    document.addEventListener("impress:init", function (event) {
        root = event.target;
        getSteps();
        var gc = event.detail.api.lib.gc;
        gc.pushCallback(function () {
            stepids = [];
            if (progressbar) {
                progressbar.style.width = "";
            }
            if (progress) {
                progress.innerHTML = "";
            }
        });
    });

    var progressbar = document.querySelector("div.impress-progressbar div");
    var progress = document.querySelector("div.impress-progress");

    if (null !== progressbar || null !== progress) {
        document.addEventListener("impress:stepleave", function (event) {
            updateProgressbar(event.detail.next.id);
        });

        document.addEventListener("impress:steprefresh", function (event) {
            getSteps();
            updateProgressbar(event.target.id);
        });
    }

    function updateProgressbar(slideId) {
        var slideNumber = stepids.indexOf(slideId);
        if (null !== progressbar) {
            var width = 100 / (stepids.length - 1) * slideNumber;
            progressbar.style.width = width.toFixed(2) + "%";
        }
        if (null !== progress) {
            progress.innerHTML = slideNumber + "/" + (stepids.length - 1);
        }
    }
})(document);

/**
 * Relative Positioning Plugin
 *
 * This plugin provides support for defining the coordinates of a step relative
 * to the previous step. This is often more convenient when creating presentations,
 * since as you add, remove or move steps, you may not need to edit the positions
 * as much as is the case with the absolute coordinates supported by impress.js
 * core.
 *
 * Example:
 *
 *         <!-- Position step 1000 px to the right and 500 px up from the previous step. -->
 *         <div class="step" data-rel-x="1000" data-rel-y="500">
 *
 * Following html attributes are supported for step elements:
 *
 *     data-rel-x
 *     data-rel-y
 *     data-rel-z
 *
 * These values are also inherited from the previous step. This makes it easy to
 * create a boring presentation where each slide shifts for example 1000px down
 * from the previous.
 *
 * In addition to plain numbers, which are pixel values, it is also possible to
 * define relative positions as a multiple of screen height and width, using
 * a unit of "h" and "w", respectively, appended to the number.
 *
 * Example:
 *
 *        <div class="step" data-rel-x="1.5w" data-rel-y="1.5h">
 *
 * This plugin is a *pre-init plugin*. It is called synchronously from impress.js
 * core at the beginning of `impress().init()`. This allows it to process its own
 * data attributes first, and possibly alter the data-x, data-y and data-z attributes
 * that will then be processed by `impress().init()`.
 *
 * (Another name for this kind of plugin might be called a *filter plugin*, but
 * *pre-init plugin* is more generic, as a plugin might do whatever it wants in
 * the pre-init stage.)
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */

/* global document, window */

(function (document, window) {
    "use strict";

    var startingState = {};

    /**
     * Copied from core impress.js. We currently lack a library mechanism to
     * to share utility functions like this.
     */
    var toNumber = function toNumber(numeric, fallback) {
        return isNaN(numeric) ? fallback || 0 : Number(numeric);
    };

    /**
     * Extends toNumber() to correctly compute also relative-to-screen-size values 5w and 5h.
     *
     * Returns the computed value in pixels with w/h postfix removed.
     */
    var toNumberAdvanced = function toNumberAdvanced(numeric, fallback) {
        if (typeof numeric !== "string") {
            return toNumber(numeric, fallback);
        }
        var ratio = numeric.match(/^([+-]*[\d\.]+)([wh])$/);
        if (ratio == null) {
            return toNumber(numeric, fallback);
        } else {
            var value = parseFloat(ratio[1]);
            var multiplier = ratio[2] === "w" ? window.innerWidth : window.innerHeight;
            return value * multiplier;
        }
    };

    var computeRelativePositions = function computeRelativePositions(el, prev) {
        var data = el.dataset;

        if (!prev) {

            // For the first step, inherit these defaults
            prev = { x: 0, y: 0, z: 0, relative: { x: 0, y: 0, z: 0 } };
        }

        if (data.relTo) {

            var ref = document.getElementById(data.relTo);
            if (ref) {

                // Test, if it is a previous step that already has some assigned position data
                if (el.compareDocumentPosition(ref) & Node.DOCUMENT_POSITION_PRECEDING) {
                    prev.x = toNumber(ref.getAttribute("data-x"));
                    prev.y = toNumber(ref.getAttribute("data-y"));
                    prev.z = toNumber(ref.getAttribute("data-z"));
                    prev.relative = {};
                } else {
                    window.console.error("impress.js rel plugin: Step \"" + data.relTo + "\" is not defined " + "*before* the current step. Referencing is limited to previously defined " + "steps. Please check your markup. Ignoring data-rel-to attribute of " + "this step. Have a look at the documentation for how to create relative " + "positioning to later shown steps with the help of the goto plugin.");
                }
            } else {

                // Step not found
                window.console.warn("impress.js rel plugin: \"" + data.relTo + "\" is not a valid step in this " + "impress.js presentation. Please check your markup. Ignoring data-rel-to " + "attribute of this step.");
            }
        }

        var step = {
            x: toNumber(data.x, prev.x),
            y: toNumber(data.y, prev.y),
            z: toNumber(data.z, prev.z),
            relative: {
                x: toNumberAdvanced(data.relX, prev.relative.x),
                y: toNumberAdvanced(data.relY, prev.relative.y),
                z: toNumberAdvanced(data.relZ, prev.relative.z)
            }
        };

        // Relative position is ignored/zero if absolute is given.
        // Note that this also has the effect of resetting any inherited relative values.
        if (data.x !== undefined) {
            step.relative.x = 0;
        }
        if (data.y !== undefined) {
            step.relative.y = 0;
        }
        if (data.z !== undefined) {
            step.relative.z = 0;
        }

        // Apply relative position to absolute position, if non-zero
        // Note that at this point, the relative values contain a number value of pixels.
        step.x = step.x + step.relative.x;
        step.y = step.y + step.relative.y;
        step.z = step.z + step.relative.z;

        return step;
    };

    var rel = function rel(root) {
        var steps = root.querySelectorAll(".step");
        var prev;
        startingState[root.id] = [];
        for (var i = 0; i < steps.length; i++) {
            var el = steps[i];
            startingState[root.id].push({
                el: el,
                x: el.getAttribute("data-x"),
                y: el.getAttribute("data-y"),
                z: el.getAttribute("data-z")
            });
            var step = computeRelativePositions(el, prev);

            // Apply relative position (if non-zero)
            el.setAttribute("data-x", step.x);
            el.setAttribute("data-y", step.y);
            el.setAttribute("data-z", step.z);
            prev = step;
        }
    };

    // Register the plugin to be called in pre-init phase
    window.impress.addPreInitPlugin(rel);

    // Register teardown callback to reset the data.x, .y, .z values.
    document.addEventListener("impress:init", function (event) {
        var root = event.target;
        event.detail.api.lib.gc.pushCallback(function () {
            var steps = startingState[root.id];
            var step;
            while (step = steps.pop()) {
                if (step.x === null) {
                    step.el.removeAttribute("data-x");
                } else {
                    step.el.setAttribute("data-x", step.x);
                }
                if (step.y === null) {
                    step.el.removeAttribute("data-y");
                } else {
                    step.el.setAttribute("data-y", step.y);
                }
                if (step.z === null) {
                    step.el.removeAttribute("data-z");
                } else {
                    step.el.setAttribute("data-z", step.z);
                }
            }
            delete startingState[root.id];
        });
    }, false);
})(document, window);

/**
 * Resize plugin
 *
 * Rescale the presentation after a window resize.
 *
 * Copyright 2011-2012 Bartek Szopka (@bartaz)
 * Released under the MIT license.
 * ------------------------------------------------
 *  author:  Bartek Szopka
 *  version: 0.5.3
 *  url:     http://bartaz.github.com/impress.js/
 *  source:  http://github.com/bartaz/impress.js/
 *
 */

/* global document, window */

(function (document, window) {
    "use strict";

    // Wait for impress.js to be initialized

    document.addEventListener("impress:init", function (event) {
        var api = event.detail.api;

        // Rescale presentation when window is resized
        api.lib.gc.addEventListener(window, "resize", api.lib.util.throttle(function () {

            // Force going to active step again, to trigger rescaling
            api.goto(document.querySelector(".step.active"), 500);
        }, 250), false);
    }, false);
})(document, window);

/**
 * Skip Plugin
 *
 * Example:
 *
 *    <!-- This slide is disabled in presentations, when moving with next()
 *         and prev() commands, but you can still move directly to it, for
 *         example with a url (anything using goto()). -->
 *         <div class="step skip">
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */

/* global document, window */

(function (document, window) {
    "use strict";

    var util;

    document.addEventListener("impress:init", function (event) {
        util = event.detail.api.lib.util;
    }, false);

    var getNextStep = function getNextStep(el) {
        var steps = document.querySelectorAll(".step");
        for (var i = 0; i < steps.length; i++) {
            if (steps[i] === el) {
                if (i + 1 < steps.length) {
                    return steps[i + 1];
                } else {
                    return steps[0];
                }
            }
        }
    };
    var getPrevStep = function getPrevStep(el) {
        var steps = document.querySelectorAll(".step");
        for (var i = steps.length - 1; i >= 0; i--) {
            if (steps[i] === el) {
                if (i - 1 >= 0) {
                    return steps[i - 1];
                } else {
                    return steps[steps.length - 1];
                }
            }
        }
    };

    var skip = function skip(event) {
        if (!event || !event.target) {
            return;
        }

        if (event.detail.next.classList.contains("skip")) {
            if (event.detail.reason === "next") {

                // Go to the next next step instead
                event.detail.next = getNextStep(event.detail.next);

                // Recursively call this plugin again, until there's a step not to skip
                skip(event);
            } else if (event.detail.reason === "prev") {

                // Go to the previous previous step instead
                event.detail.next = getPrevStep(event.detail.next);
                skip(event);
            }

            // If the new next element has its own transitionDuration, we're responsible for setting
            // that on the event as well
            event.detail.transitionDuration = util.toNumber(event.detail.next.dataset.transitionDuration, event.detail.transitionDuration);
        }
    };

    // Register the plugin to be called in pre-stepleave phase
    // The weight makes this plugin run early. This is a good thing, because this plugin calls
    // itself recursively.
    window.impress.addPreStepLeavePlugin(skip, 1);
})(document, window);

/**
 * Stop Plugin
 *
 * Example:
 *
 *        <!-- Stop at this slide.
 *             (For example, when used on the last slide, this prevents the
 *             presentation from wrapping back to the beginning.) -->
 *        <div class="step stop">
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global document, window */
(function (document, window) {
    "use strict";

    var stop = function stop(event) {
        if (!event || !event.target) {
            return;
        }

        if (event.target.classList.contains("stop")) {
            if (event.detail.reason === "next") {
                return false;
            }
        }
    };

    // Register the plugin to be called in pre-stepleave phase
    // The weight makes this plugin run fairly early.
    window.impress.addPreStepLeavePlugin(stop, 2);
})(document, window);

/**
 * Substep Plugin
 *
 * Copyright 2017 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */

/* global document, window */

(function (document, window) {
    "use strict";

    // Copied from core impress.js. Good candidate for moving to src/lib/util.js.

    var triggerEvent = function triggerEvent(el, eventName, detail) {
        var event = document.createEvent("CustomEvent");
        event.initCustomEvent(eventName, true, true, detail);
        el.dispatchEvent(event);
    };

    var activeStep = null;
    document.addEventListener("impress:stepenter", function (event) {
        activeStep = event.target;
    }, false);

    var substep = function substep(event) {
        if (!event || !event.target) {
            return;
        }

        var step = event.target;
        var el; // Needed by jshint
        if (event.detail.reason === "next") {
            el = showSubstepIfAny(step);
            if (el) {

                // Send a message to others, that we aborted a stepleave event.
                // Autoplay will reload itself from this, as there won't be a stepenter event now.
                triggerEvent(step, "impress:substep:stepleaveaborted", { reason: "next", substep: el });

                // Returning false aborts the stepleave event
                return false;
            }
        }
        if (event.detail.reason === "prev") {
            el = hideSubstepIfAny(step);
            if (el) {
                triggerEvent(step, "impress:substep:stepleaveaborted", { reason: "prev", substep: el });
                return false;
            }
        }
    };

    var showSubstepIfAny = function showSubstepIfAny(step) {
        var substeps = step.querySelectorAll(".substep");
        var visible = step.querySelectorAll(".substep-visible");
        if (substeps.length > 0) {
            return showSubstep(substeps, visible);
        }
    };

    var showSubstep = function showSubstep(substeps, visible) {
        if (visible.length < substeps.length) {
            var el = substeps[visible.length];
            el.classList.add("substep-visible");
            return el;
        }
    };

    var hideSubstepIfAny = function hideSubstepIfAny(step) {
        var substeps = step.querySelectorAll(".substep");
        var visible = step.querySelectorAll(".substep-visible");
        if (substeps.length > 0) {
            return hideSubstep(visible);
        }
    };

    var hideSubstep = function hideSubstep(visible) {
        if (visible.length > 0) {
            var el = visible[visible.length - 1];
            el.classList.remove("substep-visible");
            return el;
        }
    };

    // Register the plugin to be called in pre-stepleave phase.
    // The weight makes this plugin run before other preStepLeave plugins.
    window.impress.addPreStepLeavePlugin(substep, 1);

    // When entering a step, in particular when re-entering, make sure that all substeps are hidden
    // at first
    document.addEventListener("impress:stepenter", function (event) {
        var step = event.target;
        var visible = step.querySelectorAll(".substep-visible");
        for (var i = 0; i < visible.length; i++) {
            visible[i].classList.remove("substep-visible");
        }
    }, false);

    // API for others to reveal/hide next substep ////////////////////////////////////////////////
    document.addEventListener("impress:substep:show", function () {
        showSubstepIfAny(activeStep);
    }, false);

    document.addEventListener("impress:substep:hide", function () {
        hideSubstepIfAny(activeStep);
    }, false);
})(document, window);

/**
 * Support for swipe and tap on touch devices
 *
 * This plugin implements navigation for plugin devices, via swiping left/right,
 * or tapping on the left/right edges of the screen.
 *
 *
 *
 * Copyright 2015: Andrew Dunai (@and3rson)
 * Modified to a plugin, 2016: Henrik Ingo (@henrikingo)
 *
 * MIT License
 */
/* global document, window */
(function (document, window) {
    "use strict";

    // Touch handler to detect swiping left and right based on window size.
    // If the difference in X change is bigger than 1/20 of the screen width,
    // we simply call an appropriate API function to complete the transition.

    var startX = 0;
    var lastX = 0;
    var lastDX = 0;
    var threshold = window.innerWidth / 20;

    document.addEventListener("touchstart", function (event) {
        lastX = startX = event.touches[0].clientX;
    });

    document.addEventListener("touchmove", function (event) {
        var x = event.touches[0].clientX;
        var diff = x - startX;

        // To be used in touchend
        lastDX = lastX - x;
        lastX = x;

        window.impress().swipe(diff / window.innerWidth);
    });

    document.addEventListener("touchend", function () {
        var totalDiff = lastX - startX;
        if (Math.abs(totalDiff) > window.innerWidth / 5 && totalDiff * lastDX <= 0) {
            if (totalDiff > window.innerWidth / 5 && lastDX <= 0) {
                window.impress().prev();
            } else if (totalDiff < -window.innerWidth / 5 && lastDX >= 0) {
                window.impress().next();
            }
        } else if (Math.abs(lastDX) > threshold) {
            if (lastDX < -threshold) {
                window.impress().prev();
            } else if (lastDX > threshold) {
                window.impress().next();
            }
        } else {

            // No movement - move (back) to the current slide
            window.impress().goto(document.querySelector("#impress .step.active"));
        }
    });

    document.addEventListener("touchcancel", function () {

        // Move (back) to the current slide
        window.impress().goto(document.querySelector("#impress .step.active"));
    });
})(document, window);

/**
 * Toolbar plugin
 *
 * This plugin provides a generic graphical toolbar. Other plugins that
 * want to expose a button or other widget, can add those to this toolbar.
 *
 * Using a single consolidated toolbar for all GUI widgets makes it easier
 * to position and style the toolbar rather than having to do that for lots
 * of different divs.
 *
 *
 * *** For presentation authors: *****************************************
 *
 * To add/activate the toolbar in your presentation, add this div:
 *
 *     <div id="impress-toolbar"></div>
 *
 * Styling the toolbar is left to presentation author. Here's an example CSS:
 *
 *    .impress-enabled div#impress-toolbar {
 *        position: fixed;
 *        right: 1px;
 *        bottom: 1px;
 *        opacity: 0.6;
 *    }
 *    .impress-enabled div#impress-toolbar > span {
 *        margin-right: 10px;
 *    }
 *
 * The [mouse-timeout](../mouse-timeout/README.md) plugin can be leveraged to hide
 * the toolbar from sight, and only make it visible when mouse is moved.
 *
 *    body.impress-mouse-timeout div#impress-toolbar {
 *        display: none;
 *    }
 *
 *
 * *** For plugin authors **********************************************
 *
 * To add a button to the toolbar, trigger the `impress:toolbar:appendChild`
 * or `impress:toolbar:insertBefore` events as appropriate. The detail object
 * should contain following parameters:
 *
 *    { group : 1,                       // integer. Widgets with the same group are grouped inside
 *                                       // the same <span> element.
 *      html : "<button>Click</button>", // The html to add.
 *      callback : "mycallback",         // Toolbar plugin will trigger event
 *                                       // `impress:toolbar:added:mycallback` when done.
 *      before: element }                // The reference element for an insertBefore() call.
 *
 * You should also listen to the `impress:toolbar:added:mycallback` event. At
 * this point you can find the new widget in the DOM, and for example add an
 * event listener to it.
 *
 * You are free to use any integer for the group. It's ok to leave gaps. It's
 * ok to co-locate with widgets for another plugin, if you think they belong
 * together.
 *
 * See navigation-ui for an example.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */

/* global document */

(function (document) {
    "use strict";

    var toolbar = document.getElementById("impress-toolbar");
    var groups = [];

    /**
     * Get the span element that is a child of toolbar, identified by index.
     *
     * If span element doesn't exist yet, it is created.
     *
     * Note: Because of Run-to-completion, this is not a race condition.
     * https://developer.mozilla.org/en/docs/Web/JavaScript/EventLoop#Run-to-completion
     *
     * :param: index   Method will return the element <span id="impress-toolbar-group-{index}">
     */
    var getGroupElement = function getGroupElement(index) {
        var id = "impress-toolbar-group-" + index;
        if (!groups[index]) {
            groups[index] = document.createElement("span");
            groups[index].id = id;
            var nextIndex = getNextGroupIndex(index);
            if (nextIndex === undefined) {
                toolbar.appendChild(groups[index]);
            } else {
                toolbar.insertBefore(groups[index], groups[nextIndex]);
            }
        }
        return groups[index];
    };

    /**
     * Get the span element from groups[] that is immediately after given index.
     *
     * This can be used to find the reference node for an insertBefore() call.
     * If no element exists at a larger index, returns undefined. (In this case,
     * you'd use appendChild() instead.)
     *
     * Note that index needn't itself exist in groups[].
     */
    var getNextGroupIndex = function getNextGroupIndex(index) {
        var i = index + 1;
        while (!groups[i] && i < groups.length) {
            i++;
        }
        if (i < groups.length) {
            return i;
        }
    };

    // API
    // Other plugins can add and remove buttons by sending them as events.
    // In return, toolbar plugin will trigger events when button was added.
    if (toolbar) {
        /**
         * Append a widget inside toolbar span element identified by given group index.
         *
         * :param: e.detail.group    integer specifying the span element where widget will be placed
         * :param: e.detail.element  a dom element to add to the toolbar
         */
        toolbar.addEventListener("impress:toolbar:appendChild", function (e) {
            var group = getGroupElement(e.detail.group);
            group.appendChild(e.detail.element);
        });

        /**
         * Add a widget to toolbar using insertBefore() DOM method.
         *
         * :param: e.detail.before   the reference dom element, before which new element is added
         * :param: e.detail.element  a dom element to add to the toolbar
         */
        toolbar.addEventListener("impress:toolbar:insertBefore", function (e) {
            toolbar.insertBefore(e.detail.element, e.detail.before);
        });

        /**
         * Remove the widget in e.detail.remove.
         */
        toolbar.addEventListener("impress:toolbar:removeWidget", function (e) {
            toolbar.removeChild(e.detail.remove);
        });

        document.addEventListener("impress:init", function (event) {
            var api = event.detail.api;
            api.lib.gc.pushCallback(function () {
                toolbar.innerHTML = "";
                groups = [];
            });
        });
    } // If toolbar
})(document);
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (a, b) {
  "use strict";
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
  "use strict";
  var c = [],
      d = a.document,
      e = Object.getPrototypeOf,
      f = c.slice,
      g = c.concat,
      h = c.push,
      i = c.indexOf,
      j = {},
      k = j.toString,
      l = j.hasOwnProperty,
      m = l.toString,
      n = m.call(Object),
      o = {};function p(a, b) {
    b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
  }var q = "3.2.1",
      r = function r(a, b) {
    return new r.fn.init(a, b);
  },
      s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      t = /^-ms-/,
      u = /-([a-z])/g,
      v = function v(a, b) {
    return b.toUpperCase();
  };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
      return f.call(this);
    }, get: function get(a) {
      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
    }, pushStack: function pushStack(a) {
      var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
    }, each: function each(a) {
      return r.each(this, a);
    }, map: function map(a) {
      return this.pushStack(r.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(f.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (a < 0 ? b : 0);return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }return g;
  }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === r.type(a);
    }, isWindow: function isWindow(a) {
      return null != a && a === a.window;
    }, isNumeric: function isNumeric(a) {
      var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
    }, isPlainObject: function isPlainObject(a) {
      var b, c;return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n));
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(a) {
      p(a);
    }, camelCase: function camelCase(a) {
      return a.replace(t, "ms-").replace(u, v);
    }, each: function each(a, b) {
      var c,
          d = 0;if (w(a)) {
        for (c = a.length; d < c; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(s, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : i.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; d < c; d++) {
        a[e++] = b[d];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          f = 0,
          h = [];if (w(a)) for (d = a.length; f < d; f++) {
        e = b(a[f], f, c), null != e && h.push(e);
      } else for (f in a) {
        e = b(a[f], f, c), null != e && h.push(e);
      }return g.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, e;if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function e() {
        return a.apply(b || this, d.concat(f.call(arguments)));
      }, e.guid = a.guid = a.guid || r.guid++, e;
    }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    j["[object " + b + "]"] = b.toLowerCase();
  });function w(a) {
    var b = !!a && "length" in a && a.length,
        c = r.type(a);return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
  }var x = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = {}.hasOwnProperty,
        D = [],
        E = D.pop,
        F = D.push,
        G = D.push,
        H = D.slice,
        I = function I(a, b) {
      for (var c = 0, d = a.length; c < d; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        K = "[\\x20\\t\\r\\n\\f]",
        L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
        N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
        O = new RegExp(K + "+", "g"),
        P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
        Q = new RegExp("^" + K + "*," + K + "*"),
        R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
        T = new RegExp(N),
        U = new RegExp("^" + L + "$"),
        V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
        W = /^(?:input|select|textarea|button)$/i,
        X = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        $ = /[+~]/,
        _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
        aa = function aa(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ca = function ca(a, b) {
      return b ? "\0" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
    },
        da = function da() {
      m();
    },
        ea = ta(function (a) {
      return a.disabled === !0 && ("form" in a || "label" in a);
    }, { dir: "parentNode", next: "legend" });try {
      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = { apply: D.length ? function (a, b) {
          F.apply(a, H.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function ga(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s = b && b.ownerDocument,
          w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
          if (9 === w) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
              o[h] = "#" + k + " " + sa(o[h]);
            }r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
          }if (r) try {
            return G.apply(d, s.querySelectorAll(r)), d;
          } catch (x) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(P, "$1"), b, d, e);
    }function ha() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ia(a) {
      return a[u] = !0, a;
    }function ja(a) {
      var b = n.createElement("fieldset");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ka(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function la(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function oa(a) {
      return function (b) {
        return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
      };
    }function pa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return !!b && "HTML" !== b.nodeName;
    }, m = ga.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          return a.getAttribute("id") === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }) : (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c,
              d,
              e,
              f = b.getElementById(a);if (f) {
            if (c = f.getAttributeNode("id"), c && c.value === a) return [f];e = b.getElementsByName(a), d = 0;while (f = e[d++]) {
              if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
            }
          }return [];
        }
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
      }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ja(function (a) {
        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
          g.unshift(c);
        }c = b;while (c = c.parentNode) {
          h.unshift(c);
        }while (g[d] === h[d]) {
          d++;
        }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b);
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return ga(b, n, null, [a]).length > 0;
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, ga.escape = function (a) {
      return (a + "").replace(ba, ca);
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, ga.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = ga.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = I(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ia(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }), contains: ia(function (a) {
          return a = a.replace(_, aa), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ia(function (a) {
          return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return X.test(a.nodeName);
        }, input: function input(a) {
          return W.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: pa(function () {
          return [0];
        }), last: pa(function (a, b) {
          return [b - 1];
        }), eq: pa(function (a, b, c) {
          return [c < 0 ? c + b : c];
        }), even: pa(function (a, b) {
          for (var c = 0; c < b; c += 2) {
            a.push(c);
          }return a;
        }), odd: pa(function (a, b) {
          for (var c = 1; c < b; c += 2) {
            a.push(c);
          }return a;
        }), lt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = ma(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = na(b);
    }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    };function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) {
        d += a[b].value;
      }return d;
    }function ta(a, b, c) {
      var d = b.dir,
          e = b.next,
          f = e || d,
          g = c && "parentNode" === f,
          h = x++;return b.first ? function (b, c, e) {
        while (b = b[d]) {
          if (1 === b.nodeType || g) return a(b, c, e);
        }return !1;
      } : function (b, c, i) {
        var j,
            k,
            l,
            m = [w, h];if (i) {
          while (b = b[d]) {
            if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
            if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
          }
        }return !1;
      };
    }function ua(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) {
        ga(a, b[d], c);
      }return c;
    }function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) {
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      }return g;
    }function xa(a, b, c, d, e, f) {
      return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : wa(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
      });
    }function ya(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
        return a === b;
      }, h, !0), l = ta(function (a) {
        return I(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; i < f; i++) {
        if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; e < f; e++) {
              if (d.relative[a[e].type]) break;
            }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
          }m.push(c);
        }
      }return ua(m);
    }function za(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);break;
              }
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) {
            q(t, u, g, h);
          }if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = E.call(i));
            }u = wa(u);
          }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ia(f) : f;
    }return h = ga.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, za(e, d)), f.selector = a;
      }return f;
    }, i = ga.select = function (a, b, c, e) {
      var f,
          i,
          j,
          k,
          l,
          m = "function" == typeof a && a,
          n = !e && g(a = m.selector || a);if (c = c || [], 1 === n.length) {
        if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
          if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;m && (b = b.parentNode), a = a.slice(i.shift().value.length);
        }f = V.needsContext.test(a) ? 0 : i.length;while (f--) {
          if (j = i[f], d.relative[k = j.type]) break;if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
            if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;break;
          }
        }
      }return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ka("type|href|height|width", function (a, b, c) {
      if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ka("value", function (a, b, c) {
      if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute("disabled");
    }) || ka(J, function (a, b, c) {
      var d;if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), ga;
  }(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && r(a).is(c)) break;d.push(a);
      }
    }return d;
  },
      z = function z(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }return c;
  },
      A = r.expr.match.needsContext;function B(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
  }var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      D = /^.[^:#\[\.,]*$/;function E(a, b, c) {
    return r.isFunction(b) ? r.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    }) : b.nodeType ? r.grep(a, function (a) {
      return a === b !== c;
    }) : "string" != typeof b ? r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c;
    }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c && 1 === a.nodeType;
    }));
  }r.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, r.fn.extend({ find: function find(a) {
      var b,
          c,
          d = this.length,
          e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
        for (b = 0; b < d; b++) {
          if (r.contains(e[b], this)) return !0;
        }
      }));for (c = this.pushStack([]), b = 0; b < d; b++) {
        r.find(a, e[b], c);
      }return d > 1 ? r.uniqueSort(c) : c;
    }, filter: function filter(a) {
      return this.pushStack(E(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(E(this, a || [], !0));
    }, is: function is(a) {
      return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
    } });var F,
      G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      H = r.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || F, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b)) for (e in b) {
          r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }return this;
      }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
    }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
  };H.prototype = r.fn, F = r(d);var I = /^(?:parents|prev(?:Until|All))/,
      J = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
      var b = r(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; a < c; a++) {
          if (r.contains(this, b[a])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      var c,
          d = 0,
          e = this.length,
          f = [],
          g = "string" != typeof a && r(a);if (!A.test(a)) for (; d < e; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function K(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
  }r.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return y(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return y(a, "parentNode", c);
    }, next: function next(a) {
      return K(a, "nextSibling");
    }, prev: function prev(a) {
      return K(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return y(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return y(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return y(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return y(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return z((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return z(a.firstChild);
    }, contents: function contents(a) {
      return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes));
    } }, function (a, b) {
    r.fn[a] = function (c, d) {
      var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e);
    };
  });var L = /[^\x20\t\r\n\f]+/g;function M(a) {
    var b = {};return r.each(a.match(L) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }r.Callbacks = function (a) {
    a = "string" == typeof a ? M(a) : r.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = e || a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          r.each(b, function (b, c) {
            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return r.each(arguments, function (a, b) {
          var c;while ((c = r.inArray(b, f, c)) > -1) {
            f.splice(c, 1), c <= h && h--;
          }
        }), this;
      }, has: function has(a) {
        return a ? r.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = g = [], c || b || (f = c = ""), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
  };function N(a) {
    return a;
  }function O(a) {
    throw a;
  }function P(a, b, c, d) {
    var e;try {
      a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d));
    } catch (a) {
      c.apply(void 0, [a]);
    }
  }r.extend({ Deferred: function Deferred(b) {
      var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
          d = "pending",
          e = { state: function state() {
          return d;
        }, always: function always() {
          return f.done(arguments).fail(arguments), this;
        }, "catch": function _catch(a) {
          return e.then(null, a);
        }, pipe: function pipe() {
          var a = arguments;return r.Deferred(function (b) {
            r.each(c, function (c, d) {
              var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, then: function then(b, d, e) {
          var f = 0;function g(b, c, d, e) {
            return function () {
              var h = this,
                  i = arguments,
                  j = function j() {
                var a, j;if (!(b < f)) {
                  if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
                }
              },
                  k = e ? j : function () {
                try {
                  j();
                } catch (a) {
                  r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i));
                }
              };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
            };
          }return r.Deferred(function (a) {
            c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O));
          }).promise();
        }, promise: function promise(a) {
          return null != a ? r.extend(a, e) : e;
        } },
          f = {};return r.each(c, function (a, b) {
        var g = b[2],
            h = b[5];e[b[1]] = g.add, h && g.add(function () {
          d = h;
        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
          return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
        }, f[b[0] + "With"] = g.fireWith;
      }), e.promise(f), b && b.call(f, f), f;
    }, when: function when(a) {
      var b = arguments.length,
          c = b,
          d = Array(c),
          e = f.call(arguments),
          g = r.Deferred(),
          h = function h(a) {
        return function (c) {
          d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
        };
      };if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
        P(e[c], h(c), g.reject);
      }return g.promise();
    } });var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
    a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }, r.readyException = function (b) {
    a.setTimeout(function () {
      throw b;
    });
  };var R = r.Deferred();r.fn.ready = function (a) {
    return R.then(a)["catch"](function (a) {
      r.readyException(a);
    }), this;
  }, r.extend({ isReady: !1, readyWait: 1, ready: function ready(a) {
      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]));
    } }), r.ready.then = R.then;function S() {
    d.removeEventListener("DOMContentLoaded", S), a.removeEventListener("load", S), r.ready();
  }"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));var T = function T(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === r.type(c)) {
      e = !0;for (h in c) {
        T(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(r(a), c);
    })), b)) for (; h < i; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      U = function U(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };function V() {
    this.expando = r.expando + V.uid++;
  }V.uid = 1, V.prototype = { cache: function cache(a) {
      var b = a[this.expando];return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function set(a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
        e[r.camelCase(d)] = b[d];
      }return e;
    }, get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
    }, access: function access(a, b, c) {
      return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d = a[this.expando];if (void 0 !== d) {
        if (void 0 !== b) {
          Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length;while (c--) {
            delete d[b[c]];
          }
        }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function hasData(a) {
      var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
    } };var W = new V(),
      X = new V(),
      Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;function $(a) {
    return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a);
  }function _(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = $(c);
      } catch (e) {}X.set(a, b, c);
    } else c = void 0;return c;
  }r.extend({ hasData: function hasData(a) {
      return X.hasData(a) || W.hasData(a);
    }, data: function data(a, b, c) {
      return X.access(a, b, c);
    }, removeData: function removeData(a, b) {
      X.remove(a, b);
    }, _data: function _data(a, b, c) {
      return W.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      W.remove(a, b);
    } }), r.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
          }W.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        X.set(this, a);
      }) : T(this, function (b) {
        var c;if (f && void 0 === b) {
          if (c = X.get(f, a), void 0 !== c) return c;if (c = _(f, a), void 0 !== c) return c;
        } else this.each(function () {
          X.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        X.remove(this, a);
      });
    } }), r.extend({ queue: function queue(a, b, c) {
      var d;if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || [];
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = r.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = r._queueHooks(a, b),
          g = function g() {
        r.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return W.get(a, c) || W.access(a, c, { empty: r.Callbacks("once memory").add(function () {
          W.remove(a, [b + "queue", c]);
        }) });
    } }), r.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        r.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = r.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
      ca = ["Top", "Right", "Bottom", "Left"],
      da = function da(a, b) {
    return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
  },
      ea = function ea(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  };function fa(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return r.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
        k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do {
        f = f || ".5", k /= f, r.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var ga = {};function ha(a) {
    var b,
        c = a.ownerDocument,
        d = a.nodeName,
        e = ga[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e);
  }function ia(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++) {
      d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
    }for (f = 0; f < g; f++) {
      null != e[f] && (a[f].style.display = e[f]);
    }return a;
  }r.fn.extend({ show: function show() {
      return ia(this, !0);
    }, hide: function hide() {
      return ia(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        da(this) ? r(this).show() : r(this).hide();
      });
    } });var ja = /^(?:checkbox|radio)$/i,
      ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      la = /^$|\/(?:java|ecma)script/i,
      ma = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;function na(a, b) {
    var c;return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c;
  }function oa(a, b) {
    for (var c = 0, d = a.length; c < d; c++) {
      W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
    }
  }var pa = /<|&#?\w+;/;function qa(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) {
      if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (pa.test(f)) {
        g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
          g = g.lastChild;
        }r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
      } else m.push(b.createTextNode(f));
    }l.textContent = "", n = 0;while (f = m[n++]) {
      if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) {
        k = 0;while (f = g[k++]) {
          la.test(f.type || "") && c.push(f);
        }
      }
    }return l;
  }!function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var ra = d.documentElement,
      sa = /^key/,
      ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ua = /^([^.]*)(?:\.(.+)|)/;function va() {
    return !0;
  }function wa() {
    return !1;
  }function xa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function ya(a, b, c, d, e, f) {
    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
        ya(a, h, c, d, b[h], f);
      }return a;
    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
      return r().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
      r.event.add(this, b, e, d, c);
    });
  }r.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = W.get(a);if (q) {
        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(L) || [""], j = b.length;while (j--) {
          h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
        }
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = W.hasData(a) && W.get(a);if (q && (i = q.events)) {
        b = (b || "").match(L) || [""], j = b.length;while (j--) {
          if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
            l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
              k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
          } else for (n in i) {
            r.event.remove(a, n + b[j], c, d, !0);
          }
        }r.isEmptyObject(i) && W.remove(a, "handle events");
      }
    }, dispatch: function dispatch(a) {
      var b = r.event.fix(a),
          c,
          d,
          e,
          f,
          g,
          h,
          i = new Array(arguments.length),
          j = (W.get(this, "events") || {})[b.type] || [],
          k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
        i[c] = arguments[c];
      }if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
        h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
          b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
            b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, b), b.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g,
          h = [],
          i = b.delegateCount,
          j = a.target;if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) {
        if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
          for (f = [], g = {}, c = 0; c < i; c++) {
            d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
          }f.length && h.push({ elem: j, handlers: f });
        }
      }return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h;
    }, addProp: function addProp(a, b) {
      Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
          if (this.originalEvent) return b(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[a];
        }, set: function set(b) {
          Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
        } });
    }, fix: function fix(a) {
      return a[r.expando] ? a : new r.Event(a);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== xa() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === xa() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1;
        }, _default: function _default(a) {
          return B(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, r.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, r.Event = function (a, b) {
    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
  }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: wa, isPropagationStopped: wa, isImmediatePropagationStopped: wa, isSimulated: !1, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
    } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
      var b = a.button;return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
    } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), r.fn.extend({ on: function on(a, b, c, d) {
      return ya(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return ya(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function () {
        r.event.remove(this, a, c, b);
      });
    } });var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Aa = /<script|<style|<link/i,
      Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ca = /^true\/(.*)/,
      Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a, b) {
    return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a;
  }function Fa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function Ga(a) {
    var b = Ca.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function Ha(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) {
          for (c = 0, d = j[e].length; c < d; c++) {
            r.event.add(b, e, j[e][c]);
          }
        }
      }X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i));
    }
  }function Ia(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
  }function Ja(a, b, c, d) {
    b = g.apply([], b);var e,
        f,
        h,
        i,
        j,
        k,
        l = 0,
        m = a.length,
        n = m - 1,
        q = b[0],
        s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function (e) {
      var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
    });if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
      for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) {
        j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
      }if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) {
        j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k));
      }
    }return a;
  }function Ka(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
    }return a;
  }r.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(za, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) {
        Ia(f[d], g[d]);
      }if (b) if (c) for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) {
        Ha(f[d], g[d]);
      } else Ha(a, h);return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
        if (U(c)) {
          if (b = c[W.expando]) {
            if (b.events) for (d in b.events) {
              e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            }c[W.expando] = void 0;
          }c[X.expando] && (c[X.expando] = void 0);
        }
      }
    } }), r.fn.extend({ detach: function detach(a) {
      return Ka(this, a, !0);
    }, remove: function remove(a) {
      return Ka(this, a);
    }, text: function text(a) {
      return T(this, function (a) {
        return void 0 === a ? r.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
      }return this;
    }, clone: function clone(a, b) {
      return a = null != a && a, b = null == b ? a : b, this.map(function () {
        return r.clone(this, a, b);
      });
    }, html: function html(a) {
      return T(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = r.htmlPrefilter(a);try {
            for (; c < d; c++) {
              b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return Ja(this, arguments, function (b) {
        var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this));
      }, a);
    } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    r.fn[a] = function (a) {
      for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) {
        c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
      }return this.pushStack(d);
    };
  });var La = /^margin/,
      Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
      Na = function Na(b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  };!function () {
    function b() {
      if (i) {
        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null;
      }
    }var c,
        e,
        f,
        g,
        h = d.createElement("div"),
        i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
        return b(), c;
      }, boxSizingReliable: function boxSizingReliable() {
        return b(), e;
      }, pixelMarginRight: function pixelMarginRight() {
        return b(), f;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return b(), g;
      } }));
  }();function Oa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
  }function Pa(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Qa = /^(none|table(?!-c[ea]).+)/,
      Ra = /^--/,
      Sa = { position: "absolute", visibility: "hidden", display: "block" },
      Ta = { letterSpacing: "0", fontWeight: "400" },
      Ua = ["Webkit", "Moz", "ms"],
      Va = d.createElement("div").style;function Wa(a) {
    if (a in Va) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Ua.length;while (c--) {
      if (a = Ua[c] + b, a in Va) return a;
    }
  }function Xa(a) {
    var b = r.cssProps[a];return b || (b = r.cssProps[a] = Wa(a) || a), b;
  }function Ya(a, b, c) {
    var d = ba.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Za(a, b, c, d, e) {
    var f,
        g = 0;for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) {
      "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
    }return g;
  }function $a(a, b, c) {
    var d,
        e = Na(a),
        f = Oa(a, b, e),
        g = "border-box" === r.css(a, "boxSizing", !1, e);return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
  }r.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Oa(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = r.camelCase(b),
            i = Ra.test(b),
            j = a.style;return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = r.camelCase(b),
          i = Ra.test(b);return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), r.each(["height", "width"], function (a, b) {
    r.cssHooks[b] = { get: function get(a, c, d) {
        if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function () {
          return $a(a, b, d);
        });
      }, set: function set(a, c, d) {
        var e,
            f = d && Na(a),
            g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g);
      } };
  }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
    if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px";
  }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    r.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) {
          e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, La.test(a) || (r.cssHooks[a + b].set = Ya);
  }), r.fn.extend({ css: function css(a, b) {
      return T(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (Array.isArray(b)) {
          for (d = Na(a), e = b.length; g < e; g++) {
            f[b[g]] = r.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
      }, a, b, arguments.length > 1);
    } });function _a(a, b, c, d, e) {
    return new _a.prototype.init(a, b, c, d, e);
  }r.Tween = _a, _a.prototype = { constructor: _a, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = _a.propHooks[this.prop];return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = _a.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this;
    } }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = { _default: { get: function get(a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function set(a) {
        r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
      } } }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, r.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, r.fx = _a.prototype.init, r.fx.step = {};var ab,
      bb,
      cb = /^(?:toggle|show|hide)$/,
      db = /queueHooks$/;function eb() {
    bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick());
  }function fb() {
    return a.setTimeout(function () {
      ab = void 0;
    }), ab = r.now();
  }function gb(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; d < 4; d += 2 - b) {
      c = ca[d], e["margin" + c] = e["padding" + c] = a;
    }return b && (e.opacity = e.width = a), e;
  }function hb(a, b, c) {
    for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function ib(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = "width" in b || "height" in b,
        m = this,
        n = {},
        o = a.style,
        p = a.nodeType && da(a),
        q = W.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
      g.unqueued || h();
    }), g.unqueued++, m.always(function () {
      m.always(function () {
        g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
      });
    }));for (d in b) {
      if (e = b[d], cb.test(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
        }n[d] = q && q[d] || r.style(a, d);
      }
    }if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
      l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
        o.display = j;
      }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
      })), i = !1;for (d in n) {
        i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ia([a], !0), m.done(function () {
          p || ia([a]), W.remove(a, "fxshow");for (d in n) {
            r.style(a, d, n[d]);
          }
        })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
      }
    }
  }function jb(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function kb(a, b, c) {
    var d,
        e,
        f = 0,
        g = kb.prefilters.length,
        h = r.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: ab || fb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; c < d; c++) {
          j.tweens[c].run(1);
        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for (jb(k, j.opts.specialEasing); f < g; f++) {
      if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
    }return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j;
  }r.Animation = r.extend(kb, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return fa(c.elem, a, ba.exec(b), c), c;
      }] }, tweener: function tweener(a, b) {
      r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L);for (var c, d = 0, e = a.length; d < e; d++) {
        c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b);
      }
    }, prefilters: [ib], prefilter: function prefilter(a, b) {
      b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
    } }), r.speed = function (a, b, c) {
    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue);
    }, d;
  }, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(da).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function g() {
        var b = kb(this, r.extend({}, a), f);(e || W.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = r.timers,
            g = W.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && db.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }!b && c || r.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = W.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = r.timers,
            g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; b < g; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), r.each(["toggle", "show", "hide"], function (a, b) {
    var c = r.fn[b];r.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
    };
  }), r.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    r.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), r.timers = [], r.fx.tick = function () {
    var a,
        b = 0,
        c = r.timers;for (ab = r.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }c.length || r.fx.stop(), ab = void 0;
  }, r.fx.timer = function (a) {
    r.timers.push(a), r.fx.start();
  }, r.fx.interval = 13, r.fx.start = function () {
    bb || (bb = !0, eb());
  }, r.fx.stop = function () {
    bb = null;
  }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
    return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
  }();var lb,
      mb = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
      return T(this, r.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        r.removeAttr(this, a);
      });
    } }), r.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!o.radioValue && "radio" === b && B(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d = 0,
          e = b && b.match(L);if (e && 1 === a.nodeType) while (c = e[d++]) {
        a.removeAttribute(c);
      }
    } }), lb = { set: function set(a, b, c) {
      return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = mb[b] || r.find.attr;mb[b] = function (a, b, d) {
      var e,
          f,
          g = b.toLowerCase();return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e;
    };
  });var nb = /^(?:input|select|textarea|button)$/i,
      ob = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
      return T(this, r.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[r.propFix[a] || a];
      });
    } }), r.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    }, set: function set(a) {
      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    r.propFix[this.toLowerCase()] = this;
  });function pb(a) {
    var b = a.match(L) || [];return b.join(" ");
  }function qb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }r.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).addClass(a.call(this, b, qb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(L) || [];while (c = this[i++]) {
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }h = pb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).removeClass(a.call(this, b, qb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(L) || [];while (c = this[i++]) {
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }h = pb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
        r(this).toggleClass(a.call(this, c, qb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = r(this), f = a.match(L) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) {
        if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
      }return !1;
    } });var rb = /\r/g;r.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c);
      }
    } }), r.extend({ valHooks: { option: { get: function get(a) {
          var b = r.find.attr(a, "value");return null != b ? b : pb(r.text(a));
        } }, select: { get: function get(a) {
          var b,
              c,
              d,
              e = a.options,
              f = a.selectedIndex,
              g = "select-one" === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length;for (d = f < 0 ? i : g ? f : 0; d < i; d++) {
            if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
              if (b = r(c).val(), g) return b;h.push(b);
            }
          }return h;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = r.makeArray(b),
              g = e.length;while (g--) {
            d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
          }return c || (a.selectedIndex = -1), f;
        } } } }), r.each(["radio", "checkbox"], function () {
    r.valHooks[this] = { set: function set(a, b) {
        if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;
      } }, o.checkOn || (r.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var sb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          k,
          m,
          n,
          o = [e || d],
          p = l.call(b, "type") ? b.type : b,
          q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
            o.push(h), i = h;
          }i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
          b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        }return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
      }
    }, simulate: function simulate(a, b, c) {
      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
    } }), r.fn.extend({ trigger: function trigger(a, b) {
      return this.each(function () {
        r.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];if (c) return r.event.trigger(a, b, c, !0);
    } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
    r.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), r.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      r.event.simulate(b, a.target, r.event.fix(a));
    };r.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = W.access(d, b);e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = W.access(d, b) - 1;e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b));
      } };
  });var tb = a.location,
      ub = r.now(),
      vb = /\?/;r.parseXML = function (b) {
    var c;if (!b || "string" != typeof b) return null;try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
  };var wb = /\[\]$/,
      xb = /\r?\n/g,
      yb = /^(?:submit|button|image|reset|file)$/i,
      zb = /^(?:input|select|textarea|keygen)/i;function Ab(a, b, c, d) {
    var e;if (Array.isArray(b)) r.each(b, function (b, e) {
      c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
      Ab(a + "[" + e + "]", b[e], c, d);
    }
  }r.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
    };if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Ab(c, a[c], b, e);
    }return d.join("&");
  }, r.fn.extend({ serialize: function serialize() {
      return r.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a));
      }).map(function (a, b) {
        var c = r(this).val();return null == c ? null : Array.isArray(c) ? r.map(c, function (a) {
          return { name: b.name, value: a.replace(xb, "\r\n") };
        }) : { name: b.name, value: c.replace(xb, "\r\n") };
      }).get();
    } });var Bb = /%20/g,
      Cb = /#.*$/,
      Db = /([?&])_=[^&]*/,
      Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Gb = /^(?:GET|HEAD)$/,
      Hb = /^\/\//,
      Ib = {},
      Jb = {},
      Kb = "*/".concat("*"),
      Lb = d.createElement("a");Lb.href = tb.href;function Mb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(L) || [];if (r.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function Nb(a, b, c, d) {
    var e = {},
        f = a === Jb;function g(h) {
      var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function Ob(a, b) {
    var c,
        d,
        e = r.ajaxSettings.flatOptions || {};for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }return d && r.extend(!0, a, d), a;
  }function Pb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }if (f) return f !== i[0] && i.unshift(f), c[f];
  }function Qb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: tb.href, type: "GET", isLocal: Fb.test(tb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
    }, ajaxPrefilter: Mb(Ib), ajaxTransport: Mb(Jb), ajax: function ajax(b, c) {
      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = r.ajaxSetup({}, c),
          p = o.context || o,
          q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
          s = r.Deferred(),
          t = r.Callbacks("once memory"),
          u = o.statusCode || {},
          v = {},
          w = {},
          x = "canceled",
          y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (k) {
            if (!h) {
              h = {};while (b = Eb.exec(g)) {
                h[b[1].toLowerCase()] = b[2];
              }
            }b = h[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return k ? g : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return null == k && (o.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
            u[b] = [u[b], a[b]];
          }return this;
        }, abort: function abort(a) {
          var b = a || x;return e && e.abort(b), A(0, b), this;
        } };if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
        j = d.createElement("a");try {
          j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host;
        } catch (z) {
          o.crossDomain = !0;
        }
      }if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
        y.setRequestHeader(m, o.headers[m]);
      }if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
        if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
          y.abort("timeout");
        }, o.timeout));try {
          k = !1, e.send(v, A);
        } catch (z) {
          if (k) throw z;A(-1, z);
        }
      } else A(-1, "No Transport");function A(b, c, d, h) {
        var j,
            m,
            n,
            v,
            w,
            x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
      }return y;
    }, getJSON: function getJSON(a, b, c) {
      return r.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return r.get(a, void 0, b, "script");
    } }), r.each(["get", "post"], function (a, b) {
    r[b] = function (a, c, d, e) {
      return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
    };
  }), r._evalUrl = function (a) {
    return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, r.fn.extend({ wrapAll: function wrapAll(a) {
      var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) {
          a = a.firstElementChild;
        }return a;
      }).append(this)), this;
    }, wrapInner: function wrapInner(a) {
      return r.isFunction(a) ? this.each(function (b) {
        r(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = r(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = r.isFunction(a);return this.each(function (c) {
        r(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap(a) {
      return this.parent(a).not("body").each(function () {
        r(this).replaceWith(this.childNodes);
      }), this;
    } }), r.expr.pseudos.hidden = function (a) {
    return !r.expr.pseudos.visible(a);
  }, r.expr.pseudos.visible = function (a) {
    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
  }, r.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };var Rb = { 0: 200, 1223: 204 },
      Sb = r.ajaxSettings.xhr();o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function (b) {
    var _c, d;if (o.cors || Sb && !b.crossDomain) return { send: function send(e, f) {
        var g,
            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
          h[g] = b.xhrFields[g];
        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
          h.setRequestHeader(g, e[g]);
        }_c = function c(a) {
          return function () {
            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
          };
        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            _c && d();
          });
        }, _c = _c("abort");try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (_c) throw i;
        }
      }, abort: function abort() {
        _c && _c();
      } };
  }), r.ajaxPrefilter(function (a) {
    a.crossDomain && (a.contents.script = !1);
  }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
        return r.globalEval(a), a;
      } } }), r.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), r.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c2;return { send: function send(e, f) {
          b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        }, abort: function abort() {
          _c2 && _c2();
        } };
    }
  });var Tb = [],
      Ub = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = Tb.pop() || r.expando + "_" + ub++;return this[a] = !0, a;
    } }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || r.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script";
  }), o.createHTMLDocument = function () {
    var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
  }(), r.parseHTML = function (a, b, c) {
    if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
  }, r.fn.load = function (a, b, c) {
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    r.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), r.expr.pseudos.animated = function (a) {
    return r.grep(r.timers, function (b) {
      return a === b.elem;
    }).length;
  }, r.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = r.css(a, "position"),
          l = r(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, r.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        r.offset.setOffset(this, a, b);
      });var b,
          c,
          d,
          e,
          f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, { top: d.top + e.pageYOffset - c.clientTop, left: d.left + e.pageXOffset - c.clientLeft }) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
          a = a.offsetParent;
        }return a || ra;
      });
    } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;r.fn[a] = function (d) {
      return T(this, function (a, d, e) {
        var f;return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), r.each(["top", "left"], function (a, b) {
    r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
      if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c;
    });
  }), r.each({ Height: "height", Width: "width" }, function (a, b) {
    r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      r.fn[d] = function (e, f) {
        var g = arguments.length && (c || "boolean" != typeof e),
            h = c || (e === !0 || f === !0 ? "margin" : "border");return T(this, function (b, c, e) {
          var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
        }, b, g ? e : void 0, g);
      };
    });
  }), r.fn.extend({ bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    } }), r.holdReady = function (a) {
    a ? r.readyWait++ : r.ready(!0);
  }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function () {
    return r;
  });var Vb = a.jQuery,
      Wb = a.$;return r.noConflict = function (b) {
    return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r;
  }, b || (a.jQuery = a.$ = r), r;
});
'use strict';

impress().init();
hljs.configure({
	tabReplace: '    '
});

$('.code-container code').each(function (i, block) {
	hljs.highlightBlock(block);
});

var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="90" height="30" viewBox="0 0 60 20"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle></g></svg>';
$('.code-container.with-btns').prepend(svg);
//# sourceMappingURL=all.js.map
