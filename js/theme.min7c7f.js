(function (j) {
    function A(a) {
        return a.replace(B, h).replace(C, function (a, d, b) {
            for (var a = b.split(","), b = 0, e = a.length; b < e; b++) {
                var s = D(a[b].replace(E, h).replace(F, h)) + o, l = [];
                a[b] = s.replace(G, function (a, b, c, d, e) {
                    if (b) {
                        if (l.length > 0) {
                            var a = l, f, e = s.substring(0, e).replace(H, i);
                            if (e == i || e.charAt(e.length - 1) == o) {
                                e += "*"
                            }
                            try {
                                f = t(e)
                            } catch (k) {
                            }
                            if (f) {
                                e = 0;
                                for (c = f.length; e < c; e++) {
                                    for (var d = f[e], h = d.className, j = 0, m = a.length; j < m; j++) {
                                        var g = a[j];
                                        if (!RegExp("(^|\\s)" + g.className + "(\\s|$)").test(d.className) && g.b && (g.b === !0 || g.b(d) === !0)) {
                                            h = u(h, g.className, !0)
                                        }
                                    }
                                    d.className = h
                                }
                            }
                            l = []
                        }
                        return b
                    } else {
                        if (b = c ? I(c) : !v || v.test(d) ? {className: w(d), b: !0} : null) {
                            return l.push(b), "." + b.className
                        }
                        return a
                    }
                })
            }
            return d + a.join(",")
        })
    }

    function I(a) {
        var c = !0, d = w(a.slice(1)), b = a.substring(0, 5) == ":not(", e, f;
        b && (a = a.slice(5, -1));
        var l = a.indexOf("(");
        l > -1 && (a = a.substring(0, l));
        if (a.charAt(0) == ":") {
            switch (a.slice(1)) {
                case"root":
                    c = function (a) {
                        return b ? a != p : a == p
                    };
                    break;
                case"target":
                    if (m == 8) {
                        c = function (a) {
                            function c() {
                                var d = location.hash, e = d.slice(1);
                                return b ? d == i || a.id != e : d != i && a.id == e
                            }

                            k(j, "hashchange", function () {
                                g(a, d, c())
                            });
                            return c()
                        };
                        break
                    }
                    return !1;
                case"checked":
                    c = function (a) {
                        J.test(a.type) && k(a, "propertychange", function () {
                            event.propertyName == "checked" && g(a, d, a.checked !== b)
                        });
                        return a.checked !== b
                    };
                    break;
                case"disabled":
                    b = !b;
                case"enabled":
                    c = function (c) {
                        if (K.test(c.tagName)) {
                            return k(c, "propertychange", function () {
                                event.propertyName == "$disabled" && g(c, d, c.a === b)
                            }), q.push(c), c.a = c.disabled, c.disabled === b
                        }
                        return a == ":enabled" ? b : !b
                    };
                    break;
                case"focus":
                    e = "focus", f = "blur";
                case"hover":
                    e || (e = "mouseenter", f = "mouseleave");
                    c = function (a) {
                        k(a, b ? f : e, function () {
                            g(a, d, !0)
                        });
                        k(a, b ? e : f, function () {
                            g(a, d, !1)
                        });
                        return b
                    };
                    break;
                default:
                    if (!L.test(a)) {
                        return !1
                    }
            }
        }
        return {className: d, b: c}
    }

    function w(a) {
        return M + "-" + (m == 6 && N ? O++ : a.replace(P, function (a) {
            return a.charCodeAt(0)
        }))
    }

    function D(a) {
        return a.replace(x, h).replace(Q, o)
    }

    function g(a, c, d) {
        var b = a.className, c = u(b, c, d);
        if (c != b) {
            a.className = c, a.parentNode.className += i
        }
    }

    function u(a, c, d) {
        var b = RegExp("(^|\\s)" + c + "(\\s|$)"), e = b.test(a);
        return d ? e ? a : a + o + c : e ? a.replace(b, h).replace(x, h) : a
    }

    function k(a, c, d) {
        a.attachEvent("on" + c, d)
    }

    function r(a, c) {
        if (/^https?:\/\//i.test(a)) {
            return c.substring(0, c.indexOf("/", 8)) == a.substring(0, a.indexOf("/", 8)) ? a : null
        }
        if (a.charAt(0) == "/") {
            return c.substring(0, c.indexOf("/", 8)) + a
        }
        var d = c.split(/[?#]/)[0];
        a.charAt(0) != "?" && d.charAt(d.length - 1) != "/" && (d = d.substring(0, d.lastIndexOf("/") + 1));
        return d + a
    }

    function y(a) {
        if (a) {
            return n.open("GET", a, !1), n.send(), (n.status == 200 ? n.responseText : i).replace(R, i).replace(S, function (c, d, b, e, f) {
                return y(r(b || f, a))
            }).replace(T, function (c, d, b) {
                d = d || i;
                return " url(" + d + r(b, a) + d + ") "
            })
        }
        return i
    }

    function U() {
        var a, c;
        a = f.getElementsByTagName("BASE");
        for (var d = a.length > 0 ? a[0].href : f.location.href, b = 0; b < f.styleSheets.length; b++) {
            if (c = f.styleSheets[b], c.href != i && (a = r(c.href, d))) {
                c.cssText = A(y(a))
            }
        }
        q.length > 0 && setInterval(function () {
            for (var a = 0, c = q.length; a < c; a++) {
                var b = q[a];
                if (b.disabled !== b.a) {
                    b.disabled ? (b.disabled = !1, b.a = !0, b.disabled = !0) : b.a = b.disabled
                }
            }
        }, 250)
    }

    if (!
        /*@cc_on!@*/
        true) {
        var f = document, p = f.documentElement, n = function () {
            if (j.XMLHttpRequest) {
                return new XMLHttpRequest
            }
            try {
                return new ActiveXObject("Microsoft.XMLHTTP")
            } catch (a) {
                return null
            }
        }(), m = /MSIE (\d+)/.exec(navigator.userAgent)[1];
        if (!(f.compatMode != "CSS1Compat" || m < 6 || m > 8 || !n)) {
            var z = {
                    NW: "*.Dom.select",
                    MooTools: "$$",
                    DOMAssistant: "*.$",
                    Prototype: "$$",
                    YAHOO: "*.util.Selector.query",
                    Sizzle: "*",
                    jQuery: "*",
                    dojo: "*.query"
                }, t, q = [], O = 0, N = !0, M = "slvzr", R = /(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*/g,
                S = /@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))[^;]*;/g,
                T = /\burl\(\s*(["']?)(?!data:)([^"')]+)\1\s*\)/g,
                L = /^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/, B = /:(:first-(?:line|letter))/g,
                C = /(^|})\s*([^\{]*?[\[:][^{]+)/g, G = /([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g,
                H = /(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g,
                P = /[^\w-]/g, K = /^(INPUT|SELECT|TEXTAREA|BUTTON)$/, J = /^(checkbox|radio)$/,
                v = m > 6 ? /[\$\^*]=(['"])\1/ : null, E = /([(\[+~])\s+/g, F = /\s+([)\]+~])/g, Q = /\s+/g,
                x = /^\s*((?:[\S\s]*\S)?)\s*$/, i = "", o = " ", h = "$1";
            (function (a, c) {
                function d() {
                    try {
                        p.doScroll("left")
                    } catch (a) {
                        setTimeout(d, 50);
                        return
                    }
                    b("poll")
                }

                function b(d) {
                    if (!(d.type == "readystatechange" && f.readyState != "complete") && ((d.type == "load" ? a : f).detachEvent("on" + d.type, b, !1), !e && (e = !0))) {
                        c.call(a, d.type || d)
                    }
                }

                var e = !1, g = !0;
                if (f.readyState == "complete") {
                    c.call(a, i)
                } else {
                    if (f.createEventObject && p.doScroll) {
                        try {
                            g = !a.frameElement
                        } catch (h) {
                        }
                        g && d()
                    }
                    k(f, "readystatechange", b);
                    k(a, "load", b)
                }
            })(j, function () {
                for (var a in z) {
                    var c, d, b = j;
                    if (j[a]) {
                        for (c = z[a].replace("*", a).split("."); (d = c.shift()) && (b = b[d]);) {
                        }
                        if (typeof b == "function") {
                            t = b;
                            U();
                            break
                        }
                    }
                }
            })
        }
    }
})(this);
var pixelentity = window.pixelentity || {classes: {}, targets: {}};
(function (f) {
    var h, d;

    function g(k) {
        k = k.toLowerCase();
        var j = /(chrome)[ \/]([\w.]+)/.exec(k) || /(webkit)[ \/]([\w.]+)/.exec(k) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(k) || /(msie) ([\w.]+)/.exec(k) || k.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(k) || [];
        return {browser: j[1] || "", version: j[2] || "0"}
    }

    if (!jQuery.browser) {
        d = g(navigator.userAgent);
        h = {};
        if (d.browser) {
            h[d.browser] = true;
            h.version = d.version
        }
        if (h.chrome) {
            h.webkit = true
        } else {
            if (h.webkit) {
                h.safari = true
            }
        }
        jQuery.browser = h
    }
    f.pixelentity = f.pixelentity || {version: "1.0.0"};
    var b = navigator.userAgent.toLowerCase();
    var c = b.match(/(iphone|ipod|ipad)/) !== null;
    var e = !c && b.match(/android ([^;]+)/);
    var i = b.match("webkit") !== null;
    if (e) {
        e = e[1].split(/\./);
        e = parseFloat(e.shift() + "." + e.join(""))
    } else {
        e = false
    }
    var a = (c || e || b.match(/(android|blackberry|webOS|opera mobi)/) !== null);
    f.pixelentity.browser = {iDev: c, android: e, mobile: a, webkit: i}
}(jQuery));
(function (c) {
    c.pixelentity = c.pixelentity || {version: "1.0.0"};
    c.pixelentity.peLazyLoading = {conf: {api: false}};
    var d = c(window);
    var a = false;
    var b = window.devicePixelRatio >= 1.5;
    c(function () {
        a = c(".scroller > .scroll-content");
        a = a.length === 0 ? false : a
    });

    function e(l, m) {
        var o, f, n = true, g = 0;

        function i(s, u) {
            if (u.peLoading || u._peLoaded) {
                return
            }
            u = l.eq(u.peIDX);
            if (!u.hasClass("pe-lazyloading-forceload")) {
                var v = (n || !u.data("pe-lazyload-top")) ? (u.data("pe-lazyload-forced-top") ? u.data("pe-lazyload-forced-top") : u.offset().top) : u.data("pe-lazyload-top");
                u.data("pe-lazyload-top", v);
                var t = (n || !u.data("pe-lazyload-height")) ? u.height() : u.data("pe-lazyload-height");
                u.data("pe-lazyload-height", t);
                if ((v + t) < o || v > f) {
                    return
                }
            }
            u.triggerHandler("pe-lazyload-load")
        }

        function k() {
            var s = l.eq(this.idx);
            s.attr("src", this.src);
            s.addClass("pe-lazyload-loaded").triggerHandler("pe-lazyload-loaded");
            s.fadeTo(c.pixelentity.browser.mobile ? 0 : 200, 1);
            s[0].peLoaded = true;
            this.src = "";
            g--
        }

        function q() {
            var s = this.peIDX;
            var u = l.eq(s);
            this.peLoading = true;
            var t = c("<img />");
            t[0].idx = this.peIDX;
            var v = b ? u.attr("data-original-hires") : u.attr("data-original");
            v = v || u.attr("data-original");
            t.one("load", k).attr("src", v)
        }

        function r(s) {
            this.peLoading = false;
            this.peLoaded = false;
            this.peIDX = s;
            g++;
            l.eq(s).css("opacity", 0).addClass("pe-lazyload-inited")
        }

        function j() {
            if (g === 0) {
                p();
                return true
            }
            o = a ? a.scrollTop() : 0;
            o += d.scrollTop();
            f = o + (window.innerHeight ? window.innerHeight : d.height());
            n = true;
            l.each(i);
            return true
        }

        function p() {
            d.off("scroll pe-lazyloading-refresh", j);
            if (a) {
                a.off("scroll", j)
            }
            if (l) {
                l.off("pe-lazyload-load");
                l.data("peLazyLoading", null);
                l = undefined
            }
        }

        function h() {
            l.each(r);
            l.on("pe-lazyload-load", q);
            c(j);
            d.on("scroll pe-lazyloading-refresh", j);
            if (a) {
                a.on("scroll", j)
            }
        }

        c.extend(this, {destroy: p});
        h()
    }

    c.fn.peLazyLoading = function (f) {
        var h = this.data("peLazyLoading");
        if (h) {
            return h
        }
        f = c.extend(true, {}, c.pixelentity.peLazyLoading.conf, f);
        var g = c(this);
        h = new e(g, f);
        g.data("peLazyLoading", h);
        return f.api ? h : this
    }
}(jQuery));
(function (c) {
    c.pixelentity = c.pixelentity || {version: "1.0.0"};
    c.pixelentity.peThemeContactForm = {conf: {api: false}};
    var d = window.peContactForm ? decodeURIComponent(window.peContactForm.url) : false;
    var b = {email: /^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/, "default": /.{4}/};

    function a(l, m) {
        var k = [];
        var h, j;

        function g() {
            l.bind("submit", n).find("input,textarea").each(f).bind("change", e).end();
            h = c("#contactFormSent");
            j = c("#contactFormError")
        }

        function f() {
            var q = c(this);
            if (q.attr("type") == "submit") {
                return
            }
            k.push(q);
            q.attr("data-fieldID", k.length - 1)
        }

        function e() {
            o(k[this.getAttribute("data-fieldID")]);
            return true
        }

        function o(v, t) {
            var w = v.val();
            var r = v.attr("data-validation");
            var q = true;
            if (w === "") {
                if (v.hasClass("required")) {
                    q = false
                }
            } else {
                var u = b[r] ? b[r] : b["default"];
                q = (w.match(u) !== null)
            }
            var s = q ? "removeClass" : "addClass";
            v[s]("error");
            v.closest(".control-group")[s]("error");
            return q
        }

        function n(t) {
            var r = true;
            var s = {};
            var u;
            var q;
            for (q = 0; q < k.length; q++) {
                r = o(k[q], true) && r;
                if (r) {
                    if (k[q].is(":radio") && !k[q].is(":checked")) {
                        continue
                    }
                    u = k[q].val();
                    s[k[q].attr("name")] = u
                }
            }
            l.find("span.error")[r ? "hide" : "show"]().end();
            l.find("span.success")[r ? "show" : "hide"]().end();
            if (r) {
                i(s);
                j.hide()
            } else {
                j.show()
            }
            return false
        }

        function i(q) {
            jQuery.post(d || l.attr("action"), {action: "peThemeContactForm", data: q}, p)
        }

        function p(q) {
            if (q.success) {
                for (var r = 0; r < k.length; r++) {
                    k[r].val("")
                }
                h.show();
                j.hide()
            } else {
                j.show();
                h.hide()
            }
        }

        c.extend(this, {
            destroy: function () {
                l.data("peThemeContactForm", null);
                l = undefined
            }
        });
        g()
    }

    c.fn.peThemeContactForm = function (e) {
        var f = this.data("peThemeContactForm");
        if (f) {
            return f
        }
        e = c.extend(true, {}, c.pixelentity.peThemeContactForm.conf, e);
        this.each(function () {
            var g = c(this);
            f = new a(g, e);
            g.data("peThemeContactForm", f)
        });
        return e.api ? f : this
    }
}(jQuery));
(function (c) {
    c.pixelentity = c.pixelentity || {};
    var b = [];
    var d = [];

    function a() {
        function e(g, h) {
            b.push({check: g, widget: h})
        }

        function f(m, g) {
            if (m.data("peWidgets")) {
                return false
            }
            var l = false;
            m.data("peWidgets", true);
            var o = b.length;
            var k;
            var j;
            for (var h = 0; h < o; h++) {
                k = b[h];
                j = k.check(m, g);
                if (j) {
                    l = true;
                    if (k.widget) {
                        d.push(new k.widget(j))
                    }
                }
            }
            return l
        }

        c.extend(this, {add: e, build: f})
    }

    c.pixelentity.widgets = new a()
}(jQuery));
(function (b) {
    function a(d) {
        var c = d.find(".peThemeContactForm");
        if (c.length > 0) {
            c.peThemeContactForm()
        }
        return false
    }

    b.pixelentity.widgets.add(a)
}(jQuery));
(function (aS) {
    var aR = "Close", aQ = "BeforeClose", aP = "AfterClose", aO = "BeforeAppend", aN = "MarkupParse", aM = "Open",
        aL = "Change", aK = "mfp", aJ = "." + aK, aI = "mfp-ready", aH = "mfp-removing", aG = "mfp-prevent-close", aF,
        aE = function () {
        }, aD = !!window.jQuery, aC, aB = aS(window), aA, az, ay, ax, aw, av = function (d, c) {
            aF.ev.on(aK + d + aJ, c)
        }, au = function (a, j, i, h) {
            var g = document.createElement("div");
            return g.className = "mfp-" + a, i && (g.innerHTML = i), h ? j && j.appendChild(g) : (g = aS(g), j && g.appendTo(j)), g
        }, at = function (a, d) {
            aF.ev.triggerHandler(aK + a, d), aF.st.callbacks && (a = a.charAt(0).toLowerCase() + a.slice(1), aF.st.callbacks[a] && aF.st.callbacks[a].apply(aF, aS.isArray(d) ? d : [d]))
        }, ar = function (a) {
            if (a !== aw || !aF.currTemplate.closeBtn) {
                aF.currTemplate.closeBtn = aS(aF.st.closeMarkup.replace("%title%", aF.st.tClose)), aw = a
            }
            return aF.currTemplate.closeBtn
        }, aq = function () {
            aS.magnificPopup.instance || (aF = new aE, aF.init(), aS.magnificPopup.instance = aF)
        }, ap = function () {
            var d = document.createElement("p").style, c = ["ms", "O", "Moz", "Webkit"];
            if (d.transition !== undefined) {
                return !0
            }
            while (c.length) {
                if (c.pop() + "Transition" in d) {
                    return !0
                }
            }
            return !1
        };
    aE.prototype = {
        constructor: aE, init: function () {
            var a = navigator.appVersion;
            aF.isIE7 = a.indexOf("MSIE 7.") !== -1, aF.isIE8 = a.indexOf("MSIE 8.") !== -1, aF.isLowIE = aF.isIE7 || aF.isIE8, aF.isAndroid = /android/gi.test(a), aF.isIOS = /iphone|ipad|ipod/gi.test(a), aF.supportsTransition = ap(), aF.probablyMobile = aF.isAndroid || aF.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), aA = aS(document.body), az = aS(document), aF.popupsCache = {}
        }, open: function (t) {
            var s;
            if (t.isObj === !1) {
                aF.items = t.items.toArray(), aF.index = 0;
                var r = t.items, q;
                for (s = 0; s < r.length; s++) {
                    q = r[s], q.parsed && (q = q.el[0]);
                    if (q === t.el[0]) {
                        aF.index = s;
                        break
                    }
                }
            } else {
                aF.items = aS.isArray(t.items) ? t.items : [t.items], aF.index = t.index || 0
            }
            if (aF.isOpen) {
                aF.updateItemHTML();
                return
            }
            aF.types = [], ax = "", t.mainEl && t.mainEl.length ? aF.ev = t.mainEl.eq(0) : aF.ev = az, t.key ? (aF.popupsCache[t.key] || (aF.popupsCache[t.key] = {}), aF.currTemplate = aF.popupsCache[t.key]) : aF.currTemplate = {}, aF.st = aS.extend(!0, {}, aS.magnificPopup.defaults, t), aF.fixedContentPos = aF.st.fixedContentPos === "auto" ? !aF.probablyMobile : aF.st.fixedContentPos, aF.st.modal && (aF.st.closeOnContentClick = !1, aF.st.closeOnBgClick = !1, aF.st.showCloseBtn = !1, aF.st.enableEscapeKey = !1), aF.bgOverlay || (aF.bgOverlay = au("bg").on("click" + aJ, function () {
                aF.close()
            }), aF.wrap = au("wrap").attr("tabindex", -1).on("click" + aJ, function (b) {
                aF._checkIfClose(b.target) && aF.close()
            }), aF.container = au("container", aF.wrap)), aF.contentContainer = au("content"), aF.st.preloader && (aF.preloader = au("preloader", aF.container, aF.st.tLoading));
            var n = aS.magnificPopup.modules;
            for (s = 0; s < n.length; s++) {
                var k = n[s];
                k = k.charAt(0).toUpperCase() + k.slice(1), aF["init" + k].call(aF)
            }
            at("BeforeOpen"), aF.st.showCloseBtn && (aF.st.closeBtnInside ? (av(aN, function (h, e, l, i) {
                l.close_replaceWith = ar(i.type)
            }), ax += " mfp-close-btn-in") : aF.wrap.append(ar())), aF.st.alignTop && (ax += " mfp-align-top"), aF.fixedContentPos ? aF.wrap.css({
                overflow: aF.st.overflowY,
                overflowX: "hidden",
                overflowY: aF.st.overflowY
            }) : aF.wrap.css({
                top: aB.scrollTop(),
                position: "absolute"
            }), (aF.st.fixedBgPos === !1 || aF.st.fixedBgPos === "auto" && !aF.fixedContentPos) && aF.bgOverlay.css({
                height: az.height(),
                position: "absolute"
            }), aF.st.enableEscapeKey && az.on("keyup" + aJ, function (b) {
                b.keyCode === 27 && aF.close()
            }), aB.on("resize" + aJ, function () {
                aF.updateSize()
            }), aF.st.closeOnContentClick || (ax += " mfp-auto-cursor"), ax && aF.wrap.addClass(ax);
            var j = aF.wH = aB.height(), g = {};
            if (aF.fixedContentPos && aF._hasScrollBar(j)) {
                var f = aF._getScrollbarSize();
                f && (g.marginRight = f)
            }
            aF.fixedContentPos && (aF.isIE7 ? aS("body, html").css("overflow", "hidden") : g.overflow = "hidden");
            var a = aF.st.mainClass;
            return aF.isIE7 && (a += " mfp-ie7"), a && aF._addClassToMFP(a), aF.updateItemHTML(), at("BuildControls"), aS("html").css(g), aF.bgOverlay.add(aF.wrap).prependTo(document.body), aF._lastFocusedEl = document.activeElement, setTimeout(function () {
                aF.content ? (aF._addClassToMFP(aI), aF._setFocus()) : aF.bgOverlay.addClass(aI), az.on("focusin" + aJ, aF._onFocusIn)
            }, 16), aF.isOpen = !0, aF.updateSize(j), at(aM), t
        }, close: function () {
            if (!aF.isOpen) {
                return
            }
            at(aQ), aF.isOpen = !1, aF.st.removalDelay && !aF.isLowIE && aF.supportsTransition ? (aF._addClassToMFP(aH), setTimeout(function () {
                aF._close()
            }, aF.st.removalDelay)) : aF._close()
        }, _close: function () {
            at(aR);
            var b = aH + " " + aI + " ";
            aF.bgOverlay.detach(), aF.wrap.detach(), aF.container.empty(), aF.st.mainClass && (b += aF.st.mainClass + " "), aF._removeClassFromMFP(b);
            if (aF.fixedContentPos) {
                var a = {marginRight: ""};
                aF.isIE7 ? aS("body, html").css("overflow", "") : a.overflow = "", aS("html").css(a)
            }
            az.off("keyup" + aJ + " focusin" + aJ), aF.ev.off(aJ), aF.wrap.attr("class", "mfp-wrap").removeAttr("style"), aF.bgOverlay.attr("class", "mfp-bg"), aF.container.attr("class", "mfp-container"), aF.st.showCloseBtn && (!aF.st.closeBtnInside || aF.currTemplate[aF.currItem.type] === !0) && aF.currTemplate.closeBtn && aF.currTemplate.closeBtn.detach(), aF._lastFocusedEl && aS(aF._lastFocusedEl).focus(), aF.currItem = null, aF.content = null, aF.currTemplate = null, aF.prevHeight = 0, at(aP)
        }, updateSize: function (e) {
            if (aF.isIOS) {
                var d = document.documentElement.clientWidth / window.innerWidth, f = window.innerHeight * d;
                aF.wrap.css("height", f), aF.wH = f
            } else {
                aF.wH = e || aB.height()
            }
            aF.fixedContentPos || aF.wrap.css("height", aF.wH), at("Resize")
        }, updateItemHTML: function () {
            var a = aF.items[aF.index];
            aF.contentContainer.detach(), aF.content && aF.content.detach(), a.parsed || (a = aF.parseEl(aF.index));
            var h = a.type;
            at("BeforeChange", [aF.currItem ? aF.currItem.type : "", h]), aF.currItem = a;
            if (!aF.currTemplate[h]) {
                var g = aF.st[h] ? aF.st[h].markup : !1;
                at("FirstMarkupParse", g), g ? aF.currTemplate[h] = aS(g) : aF.currTemplate[h] = !0
            }
            ay && ay !== a.type && aF.container.removeClass("mfp-" + ay + "-holder");
            var f = aF["get" + h.charAt(0).toUpperCase() + h.slice(1)](a, aF.currTemplate[h]);
            aF.appendContent(f, h), a.preloaded = !0, at(aL, a), ay = a.type, aF.container.prepend(aF.contentContainer), at("AfterChange")
        }, appendContent: function (d, c) {
            aF.content = d, d ? aF.st.showCloseBtn && aF.st.closeBtnInside && aF.currTemplate[c] === !0 ? aF.content.find(".mfp-close").length || aF.content.append(ar()) : aF.content = d : aF.content = "", at(aO), aF.container.addClass("mfp-" + c + "-holder"), aF.contentContainer.append(aF.content)
        }, parseEl: function (a) {
            var j = aF.items[a], i = j.type;
            j.tagName ? j = {el: aS(j)} : j = {data: j, src: j.src};
            if (j.el) {
                var h = aF.types;
                for (var g = 0; g < h.length; g++) {
                    if (j.el.hasClass("mfp-" + h[g])) {
                        i = h[g];
                        break
                    }
                }
                j.src = j.el.attr("data-mfp-src"), j.src || (j.src = j.el.attr("href"))
            }
            return j.type = i || aF.st.type || "inline", j.index = a, j.parsed = !0, aF.items[a] = j, at("ElementParse", j), aF.items[a]
        }, addGroup: function (f, e) {
            var h = function (a) {
                a.mfpEl = this, aF._openClick(a, f, e)
            };
            e || (e = {});
            var g = "click.magnificPopup";
            e.mainEl = f, e.items ? (e.isObj = !0, f.off(g).on(g, h)) : (e.isObj = !1, e.delegate ? f.off(g).on(g, e.delegate, h) : (e.items = f, f.off(g).on(g, h)))
        }, _openClick: function (a, j, i) {
            var h = i.midClick !== undefined ? i.midClick : aS.magnificPopup.defaults.midClick;
            if (!h && (a.which === 2 || a.ctrlKey || a.metaKey)) {
                return
            }
            var g = i.disableOn !== undefined ? i.disableOn : aS.magnificPopup.defaults.disableOn;
            if (g) {
                if (aS.isFunction(g)) {
                    if (!g.call(aF)) {
                        return !0
                    }
                } else {
                    if (aB.width() < g) {
                        return !0
                    }
                }
            }
            a.type && (a.preventDefault(), aF.isOpen && a.stopPropagation()), i.el = aS(a.mfpEl), i.delegate && (i.items = j.find(i.delegate)), aF.open(i)
        }, updateStatus: function (e, d) {
            if (aF.preloader) {
                aC !== e && aF.container.removeClass("mfp-s-" + aC), !d && e === "loading" && (d = aF.st.tLoading);
                var f = {status: e, text: d};
                at("UpdateStatus", f), e = f.status, d = f.text, aF.preloader.html(d), aF.preloader.find("a").on("click", function (b) {
                    b.stopImmediatePropagation()
                }), aF.container.addClass("mfp-s-" + e), aC = e
            }
        }, _checkIfClose: function (a) {
            if (aS(a).hasClass(aG)) {
                return
            }
            var f = aF.st.closeOnContentClick, e = aF.st.closeOnBgClick;
            if (f && e) {
                return !0
            }
            if (!aF.content || aS(a).hasClass("mfp-close") || aF.preloader && a === aF.preloader[0]) {
                return !0
            }
            if (a !== aF.content[0] && !aS.contains(aF.content[0], a)) {
                if (e && aS.contains(document, a)) {
                    return !0
                }
            } else {
                if (f) {
                    return !0
                }
            }
            return !1
        }, _addClassToMFP: function (b) {
            aF.bgOverlay.addClass(b), aF.wrap.addClass(b)
        }, _removeClassFromMFP: function (b) {
            this.bgOverlay.removeClass(b), aF.wrap.removeClass(b)
        }, _hasScrollBar: function (b) {
            return (aF.isIE7 ? az.height() : document.body.scrollHeight) > (b || aB.height())
        }, _setFocus: function () {
            (aF.st.focus ? aF.content.find(aF.st.focus).eq(0) : aF.wrap).focus()
        }, _onFocusIn: function (a) {
            if (a.target !== aF.wrap[0] && !aS.contains(aF.wrap[0], a.target)) {
                return aF._setFocus(), !1
            }
        }, _parseMarkup: function (a, h, g) {
            var f;
            g.data && (h = aS.extend(g.data, h)), at(aN, [a, h, g]), aS.each(h, function (b, j) {
                if (j === undefined || j === !1) {
                    return !0
                }
                f = b.split("_");
                if (f.length > 1) {
                    var i = a.find(aJ + "-" + f[0]);
                    if (i.length > 0) {
                        var e = f[1];
                        e === "replaceWith" ? i[0] !== j[0] && i.replaceWith(j) : e === "img" ? i.is("img") ? i.attr("src", j) : i.replaceWith('<img src="' + j + '" class="' + i.attr("class") + '" />') : i.attr(f[1], j)
                    }
                } else {
                    a.find(aJ + "-" + b).html(j)
                }
            })
        }, _getScrollbarSize: function () {
            if (aF.scrollbarSize === undefined) {
                var b = document.createElement("div");
                b.id = "mfp-sbm", b.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(b), aF.scrollbarSize = b.offsetWidth - b.clientWidth, document.body.removeChild(b)
            }
            return aF.scrollbarSize
        }
    }, aS.magnificPopup = {
        instance: null,
        proto: aE.prototype,
        modules: [],
        open: function (a, d) {
            return aq(), a ? a = aS.extend(!0, {}, a) : a = {}, a.isObj = !0, a.index = d || 0, this.instance.open(a)
        },
        close: function () {
            return aS.magnificPopup.instance && aS.magnificPopup.instance.close()
        },
        registerModule: function (a, d) {
            d.options && (aS.magnificPopup.defaults[a] = d.options), aS.extend(this.proto, d.proto), this.modules.push(a)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, aS.fn.magnificPopup = function (a) {
        aq();
        var j = aS(this);
        if (typeof a == "string") {
            if (a === "open") {
                var i, h = aD ? j.data("magnificPopup") : j[0].magnificPopup, g = parseInt(arguments[1], 10) || 0;
                h.items ? i = h.items[g] : (i = j, h.delegate && (i = i.find(h.delegate)), i = i.eq(g)), aF._openClick({mfpEl: i}, j, h)
            } else {
                aF.isOpen && aF[a].apply(aF, Array.prototype.slice.call(arguments, 1))
            }
        } else {
            a = aS.extend(!0, {}, a), aD ? j.data("magnificPopup", a) : j[0].magnificPopup = a, aF.addGroup(j, a)
        }
        return j
    };
    var ao = "inline", an, am, al, ak = function () {
        al && (am.after(al.addClass(an)).detach(), al = null)
    };
    aS.magnificPopup.registerModule(ao, {
        options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"},
        proto: {
            initInline: function () {
                aF.types.push(ao), av(aR + "." + ao, function () {
                    ak()
                })
            }, getInline: function (a, j) {
                ak();
                if (a.src) {
                    var i = aF.st.inline, h = aS(a.src);
                    if (h.length) {
                        var g = h[0].parentNode;
                        g && g.tagName && (am || (an = i.hiddenClass, am = au(an), an = "mfp-" + an), al = h.after(am).detach().removeClass(an)), aF.updateStatus("ready")
                    } else {
                        aF.updateStatus("error", i.tNotFound), h = aS("<div>")
                    }
                    return a.inlineElement = h, h
                }
                return aF.updateStatus("ready"), aF._parseMarkup(j, {}, a), j
            }
        }
    });
    var aj = "ajax", ai, ah = function () {
        ai && aA.removeClass(ai)
    }, ag = function () {
        ah(), aF.req && aF.req.abort()
    };
    aS.magnificPopup.registerModule(aj, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        }, proto: {
            initAjax: function () {
                aF.types.push(aj), ai = aF.st.ajax.cursor, av(aR + "." + aj, ag), av("BeforeChange." + aj, ag)
            }, getAjax: function (a) {
                ai && aA.addClass(ai), aF.updateStatus("loading");
                var d = aS.extend({
                    url: a.src, success: function (i, h, g) {
                        var b = {data: i, xhr: g};
                        at("ParseAjax", b), aF.appendContent(aS(b.data), aj), a.finished = !0, ah(), aF._setFocus(), setTimeout(function () {
                            aF.wrap.addClass(aI)
                        }, 16), aF.updateStatus("ready"), at("AjaxContentAdded")
                    }, error: function () {
                        ah(), a.finished = a.loadError = !0, aF.updateStatus("error", aF.st.ajax.tError.replace("%url%", a.src))
                    }
                }, aF.st.ajax.settings);
                return aF.req = aS.ajax(d), ""
            }
        }
    });
    var af, ae = function (a) {
        if (a.data && a.data.title !== undefined) {
            return a.data.title
        }
        var d = aF.st.image.titleSrc;
        if (d) {
            if (aS.isFunction(d)) {
                return d.call(aF, a)
            }
            if (a.el) {
                return a.el.attr(d) || ""
            }
        }
        return ""
    };
    aS.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        }, proto: {
            initImage: function () {
                var b = aF.st.image, d = ".image";
                aF.types.push("image"), av(aM + d, function () {
                    aF.currItem.type === "image" && b.cursor && aA.addClass(b.cursor)
                }), av(aR + d, function () {
                    b.cursor && aA.removeClass(b.cursor), aB.off("resize" + aJ)
                }), av("Resize" + d, aF.resizeImage), aF.isLowIE && av("AfterChange", aF.resizeImage)
            }, resizeImage: function () {
                var d = aF.currItem;
                if (!d || !d.img) {
                    return
                }
                if (aF.st.image.verticalFit) {
                    var c = 0;
                    aF.isLowIE && (c = parseInt(d.img.css("padding-top"), 10) + parseInt(d.img.css("padding-bottom"), 10)), d.img.css("max-height", aF.wH - c)
                }
            }, _onImageHasSize: function (b) {
                b.img && (b.hasSize = !0, af && clearInterval(af), b.isCheckingImgSize = !1, at("ImageHasSize", b), b.imgHidden && (aF.content && aF.content.removeClass("mfp-loading"), b.imgHidden = !1))
            }, findImageSize: function (f) {
                var e = 0, h = f.img[0], g = function (a) {
                    af && clearInterval(af), af = setInterval(function () {
                        if (h.naturalWidth > 0) {
                            aF._onImageHasSize(f);
                            return
                        }
                        e > 200 && clearInterval(af), e++, e === 3 ? g(10) : e === 40 ? g(50) : e === 100 && g(500)
                    }, a)
                };
                g(1)
            }, getImage: function (a, p) {
                var o = 0, n = function () {
                    a && (a.img[0].complete ? (a.img.off(".mfploader"), a === aF.currItem && (aF._onImageHasSize(a), aF.updateStatus("ready")), a.hasSize = !0, a.loaded = !0, at("ImageLoadComplete")) : (o++, o < 200 ? setTimeout(n, 100) : m()))
                }, m = function () {
                    a && (a.img.off(".mfploader"), a === aF.currItem && (aF._onImageHasSize(a), aF.updateStatus("error", l.tError.replace("%url%", a.src))), a.hasSize = !0, a.loaded = !0, a.loadError = !0)
                }, l = aF.st.image, k = p.find(".mfp-img");
                if (k.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", a.img = aS(j).on("load.mfploader", n).on("error.mfploader", m), j.src = a.src, k.is("img") && (a.img = a.img.clone()), j = a.img[0], j.naturalWidth > 0 ? a.hasSize = !0 : j.width || (a.hasSize = !1)
                }
                return aF._parseMarkup(p, {
                    title: ae(a),
                    img_replaceWith: a.img
                }, a), aF.resizeImage(), a.hasSize ? (af && clearInterval(af), a.loadError ? (p.addClass("mfp-loading"), aF.updateStatus("error", l.tError.replace("%url%", a.src))) : (p.removeClass("mfp-loading"), aF.updateStatus("ready")), p) : (aF.updateStatus("loading"), a.loading = !0, a.hasSize || (a.imgHidden = !0, p.addClass("mfp-loading"), aF.findImageSize(a)), p)
            }
        }
    });
    var ad, ac = function () {
        return ad === undefined && (ad = document.createElement("p").style.MozTransform !== undefined), ad
    };
    aS.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1, easing: "ease-in-out", duration: 300, opener: function (b) {
                return b.is("img") ? b : b.find("img")
            }
        }, proto: {
            initZoom: function () {
                var b = aF.st.zoom, p = ".zoom", o;
                if (!b.enabled || !aF.supportsTransition) {
                    return
                }
                var n = b.duration, m = function (a) {
                    var j = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                        i = "all " + b.duration / 1000 + "s " + b.easing,
                        h = {position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden"},
                        g = "transition";
                    return h["-webkit-" + g] = h["-moz-" + g] = h["-o-" + g] = h[g] = i, j.css(h), j
                }, l = function () {
                    aF.content.css("visibility", "visible")
                }, k, c;
                av("BuildControls" + p, function () {
                    if (aF._allowZoom()) {
                        clearTimeout(k), aF.content.css("visibility", "hidden"), o = aF._getItemToZoom();
                        if (!o) {
                            l();
                            return
                        }
                        c = m(o), c.css(aF._getOffset()), aF.wrap.append(c), k = setTimeout(function () {
                            c.css(aF._getOffset(!0)), k = setTimeout(function () {
                                l(), setTimeout(function () {
                                    c.remove(), o = c = null, at("ZoomAnimationEnded")
                                }, 16)
                            }, n)
                        }, 16)
                    }
                }), av(aQ + p, function () {
                    if (aF._allowZoom()) {
                        clearTimeout(k), aF.st.removalDelay = n;
                        if (!o) {
                            o = aF._getItemToZoom();
                            if (!o) {
                                return
                            }
                            c = m(o)
                        }
                        c.css(aF._getOffset(!0)), aF.wrap.append(c), aF.content.css("visibility", "hidden"), setTimeout(function () {
                            c.css(aF._getOffset())
                        }, 16)
                    }
                }), av(aR + p, function () {
                    aF._allowZoom() && (l(), c && c.remove(), o = null)
                })
            }, _allowZoom: function () {
                return aF.currItem.type === "image"
            }, _getItemToZoom: function () {
                return aF.currItem.hasSize ? aF.currItem.img : !1
            }, _getOffset: function (a) {
                var l;
                a ? l = aF.currItem.img : l = aF.st.zoom.opener(aF.currItem.el || aF.currItem);
                var k = l.offset(), j = parseInt(l.css("padding-top"), 10), i = parseInt(l.css("padding-bottom"), 10);
                k.top -= aS(window).scrollTop() - j;
                var h = {width: l.width(), height: (aD ? l.innerHeight() : l[0].offsetHeight) - i - j};
                return ac() ? h["-moz-transform"] = h.transform = "translate(" + k.left + "px," + k.top + "px)" : (h.left = k.left, h.top = k.top), h
            }
        }
    });
    var ab = "iframe", aa = "//about:blank", Z = function (d) {
        if (aF.currTemplate[ab]) {
            var c = aF.currTemplate[ab].find("iframe");
            c.length && (d || (c[0].src = aa), aF.isIE8 && c.css("display", d ? "block" : "none"))
        }
    };
    aS.magnificPopup.registerModule(ab, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
                vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
                gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
            }
        }, proto: {
            initIframe: function () {
                aF.types.push(ab), av("BeforeChange", function (e, d, f) {
                    d !== f && (d === ab ? Z() : f === ab && Z(!0))
                }), av(aR + "." + ab, function () {
                    Z()
                })
            }, getIframe: function (a, j) {
                var i = a.src, h = aF.st.iframe;
                aS.each(h.patterns, function () {
                    if (i.indexOf(this.index) > -1) {
                        return this.id && (typeof this.id == "string" ? i = i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : i = this.id.call(this, i)), i = this.src.replace("%id%", i), !1
                    }
                });
                var g = {};
                return h.srcAction && (g[h.srcAction] = i), aF._parseMarkup(j, g, a), aF.updateStatus("ready"), j
            }
        }
    });
    var Y = function (d) {
        var c = aF.items.length;
        return d > c - 1 ? d - c : d < 0 ? c + d : d
    }, X = function (e, d, f) {
        return e.replace(/%curr%/gi, d + 1).replace(/%total%/gi, f)
    };
    aS.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        }, proto: {
            initGallery: function () {
                var f = aF.st.gallery, b = ".mfp-gallery", a = Boolean(aS.fn.mfpFastClick);
                aF.direction = !0;
                if (!f || !f.enabled) {
                    return !1
                }
                ax += " mfp-gallery", av(aM + b, function () {
                    f.navigateByImgClick && aF.wrap.on("click" + b, ".mfp-img", function () {
                        if (aF.items.length > 1) {
                            return aF.next(), !1
                        }
                    }), az.on("keydown" + b, function (c) {
                        c.keyCode === 37 ? aF.prev() : c.keyCode === 39 && aF.next()
                    })
                }), av("UpdateStatus" + b, function (d, c) {
                    c.text && (c.text = X(c.text, aF.currItem.index, aF.items.length))
                }), av(aN + b, function (g, c, j, i) {
                    var h = aF.items.length;
                    j.counter = h > 1 ? X(f.tCounter, i.index, h) : ""
                }), av("BuildControls" + b, function () {
                    if (aF.items.length > 1 && f.arrows && !aF.arrowLeft) {
                        var c = f.arrowMarkup,
                            i = aF.arrowLeft = aS(c.replace(/%title%/gi, f.tPrev).replace(/%dir%/gi, "left")).addClass(aG),
                            h = aF.arrowRight = aS(c.replace(/%title%/gi, f.tNext).replace(/%dir%/gi, "right")).addClass(aG),
                            e = a ? "mfpFastClick" : "click";
                        i[e](function () {
                            aF.prev()
                        }), h[e](function () {
                            aF.next()
                        }), aF.isIE7 && (au("b", i[0], !1, !0), au("a", i[0], !1, !0), au("b", h[0], !1, !0), au("a", h[0], !1, !0)), aF.container.append(i.add(h))
                    }
                }), av(aL + b, function () {
                    aF._preloadTimeout && clearTimeout(aF._preloadTimeout), aF._preloadTimeout = setTimeout(function () {
                        aF.preloadNearbyImages(), aF._preloadTimeout = null
                    }, 16)
                }), av(aR + b, function () {
                    az.off(b), aF.wrap.off("click" + b), aF.arrowLeft && a && aF.arrowLeft.add(aF.arrowRight).destroyMfpFastClick(), aF.arrowRight = aF.arrowLeft = null
                })
            }, next: function () {
                aF.direction = !0, aF.index = Y(aF.index + 1), aF.updateItemHTML()
            }, prev: function () {
                aF.direction = !1, aF.index = Y(aF.index - 1), aF.updateItemHTML()
            }, goTo: function (b) {
                aF.direction = b >= aF.index, aF.index = b, aF.updateItemHTML()
            }, preloadNearbyImages: function () {
                var f = aF.st.gallery.preload, e = Math.min(f[0], aF.items.length), h = Math.min(f[1], aF.items.length),
                    g;
                for (g = 1; g <= (aF.direction ? h : e); g++) {
                    aF._preloadItem(aF.index + g)
                }
                for (g = 1; g <= (aF.direction ? e : h); g++) {
                    aF._preloadItem(aF.index - g)
                }
            }, _preloadItem: function (a) {
                a = Y(a);
                if (aF.items[a].preloaded) {
                    return
                }
                var d = aF.items[a];
                d.parsed || (d = aF.parseEl(a)), at("LazyLoad", d), d.type === "image" && (d.img = aS('<img class="mfp-img" />').on("load.mfploader", function () {
                    d.hasSize = !0
                }).on("error.mfploader", function () {
                    d.hasSize = !0, d.loadError = !0, at("LazyLoadError", d)
                }).attr("src", d.src)), d.preloaded = !0
            }
        }
    });
    var W = "retina";
    aS.magnificPopup.registerModule(W, {
        options: {
            replaceSrc: function (b) {
                return b.src.replace(/\.\w+$/, function (c) {
                    return "@2x" + c
                })
            }, ratio: 1
        }, proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var d = aF.st.retina, c = d.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (av("ImageHasSize." + W, function (b, e) {
                        e.img.css({"max-width": e.img[0].naturalWidth / c, width: "100%"})
                    }), av("ElementParse." + W, function (b, a) {
                        a.src = d.replaceSrc(a, c)
                    }))
                }
            }
        }
    }), function () {
        var a = 1000, j = "ontouchstart" in window, i = function () {
            aB.off("touchmove" + g + " touchend" + g)
        }, h = "mfpFastClick", g = "." + h;
        aS.fn.mfpFastClick = function (b) {
            return aS(this).each(function () {
                var q = aS(this), p;
                if (j) {
                    var o, f, e, d, c, r;
                    q.on("touchstart" + g, function (k) {
                        d = !1, r = 1, c = k.originalEvent ? k.originalEvent.touches[0] : k.touches[0], f = c.clientX, e = c.clientY, aB.on("touchmove" + g, function (l) {
                            c = l.originalEvent ? l.originalEvent.touches : l.touches, r = c.length, c = c[0];
                            if (Math.abs(c.clientX - f) > 10 || Math.abs(c.clientY - e) > 10) {
                                d = !0, i()
                            }
                        }).on("touchend" + g, function (l) {
                            i();
                            if (d || r > 1) {
                                return
                            }
                            p = !0, l.preventDefault(), clearTimeout(o), o = setTimeout(function () {
                                p = !1
                            }, a), b()
                        })
                    })
                }
                q.on("click" + g, function () {
                    p || b()
                })
            })
        }, aS.fn.destroyMfpFastClick = function () {
            aS(this).off("touchstart" + g + " click" + g), j && aB.off("touchmove" + g + " touchend" + g)
        }
    }(), aq()
})(window.jQuery || window.Zepto);
!function (a) {
    var c = {}, b = {
        mode: "horizontal",
        slideSelector: "",
        infiniteLoop: !0,
        hideControlOnEnd: !1,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: !1,
        captions: !1,
        ticker: !1,
        tickerHover: !1,
        adaptiveHeight: !1,
        adaptiveHeightSpeed: 500,
        video: !1,
        useCSS: !0,
        preloadImages: "visible",
        responsive: !0,
        touchEnabled: !0,
        swipeThreshold: 50,
        oneToOneTouch: !0,
        preventDefaultSwipeX: !0,
        preventDefaultSwipeY: !1,
        pager: !0,
        pagerType: "full",
        pagerShortSeparator: " / ",
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,
        controls: !0,
        nextText: "Next",
        prevText: "Prev",
        nextSelector: null,
        prevSelector: null,
        autoControls: !1,
        startText: "Start",
        stopText: "Stop",
        autoControlsCombine: !1,
        autoControlsSelector: null,
        auto: !1,
        pause: 4000,
        autoStart: !0,
        autoDirection: "next",
        autoHover: !1,
        autoDelay: 0,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        onSliderLoad: function () {
        },
        onSlideBefore: function () {
        },
        onSlideAfter: function () {
        },
        onSlideNext: function () {
        },
        onSlidePrev: function () {
        }
    };
    a.fn.bxSlider = function (aq) {
        if (0 == this.length) {
            return this
        }
        if (this.length > 1) {
            return this.each(function () {
                a(this).bxSlider(aq)
            }), this
        }
        var ap = {}, am = this;
        c.el = this;
        var aB = a(window).width(), at = a(window).height(), ay = function () {
            ap.settings = a.extend({}, b, aq), ap.settings.slideWidth = parseInt(ap.settings.slideWidth), ap.children = am.children(ap.settings.slideSelector), ap.children.length < ap.settings.minSlides && (ap.settings.minSlides = ap.children.length), ap.children.length < ap.settings.maxSlides && (ap.settings.maxSlides = ap.children.length), ap.settings.randomStart && (ap.settings.startSlide = Math.floor(Math.random() * ap.children.length)), ap.active = {index: ap.settings.startSlide}, ap.carousel = ap.settings.minSlides > 1 || ap.settings.maxSlides > 1, ap.carousel && (ap.settings.preloadImages = "all"), ap.minThreshold = ap.settings.minSlides * ap.settings.slideWidth + (ap.settings.minSlides - 1) * ap.settings.slideMargin, ap.maxThreshold = ap.settings.maxSlides * ap.settings.slideWidth + (ap.settings.maxSlides - 1) * ap.settings.slideMargin, ap.working = !1, ap.controls = {}, ap.interval = null, ap.animProp = "vertical" == ap.settings.mode ? "top" : "left", ap.usingCSS = ap.settings.useCSS && "fade" != ap.settings.mode && function () {
                var f = document.createElement("div"),
                    g = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                for (var d in g) {
                    if (void 0 !== f.style[g[d]]) {
                        return ap.cssPrefix = g[d].replace("Perspective", "").toLowerCase(), ap.animProp = "-" + ap.cssPrefix + "-transform", !0
                    }
                }
                return !1
            }(), "vertical" == ap.settings.mode && (ap.settings.maxSlides = ap.settings.minSlides), am.data("origStyle", am.attr("style")), am.children(ap.settings.slideSelector).each(function () {
                a(this).data("origStyle", a(this).attr("style"))
            }), az()
        }, az = function () {
            am.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), ap.viewport = am.parent(), ap.loader = a('<div class="bx-loading" />'), ap.viewport.prepend(ap.loader), am.css({
                width: "horizontal" == ap.settings.mode ? 100 * ap.children.length + 215 + "%" : "auto",
                position: "relative"
            }), ap.usingCSS && ap.settings.easing ? am.css("-" + ap.cssPrefix + "-transition-timing-function", ap.settings.easing) : ap.settings.easing || (ap.settings.easing = "swing"), ax(), ap.viewport.css({
                width: "100%",
                overflow: "hidden",
                position: "relative"
            }), ap.viewport.parent().css({maxWidth: ak()}), ap.settings.pager || ap.viewport.parent().css({margin: "0 auto 0px"}), ap.children.css({
                "float": "horizontal" == ap.settings.mode ? "left" : "none",
                listStyle: "none",
                position: "relative"
            }), ap.children.css("width", al()), "horizontal" == ap.settings.mode && ap.settings.slideMargin > 0 && ap.children.css("marginRight", ap.settings.slideMargin), "vertical" == ap.settings.mode && ap.settings.slideMargin > 0 && ap.children.css("marginBottom", ap.settings.slideMargin), "fade" == ap.settings.mode && (ap.children.css({
                position: "absolute",
                zIndex: 0,
                display: "none"
            }), ap.children.eq(ap.settings.startSlide).css({
                zIndex: 50,
                display: "block"
            })), ap.controls.el = a('<div class="bx-controls" />'), ap.settings.captions && J(), ap.active.last = ap.settings.startSlide == ai() - 1, ap.settings.video && am.fitVids();
            var d = ap.children.eq(ap.settings.startSlide);
            "all" == ap.settings.preloadImages && (d = ap.children), ap.settings.ticker ? ap.settings.pager = !1 : (ap.settings.pager && F(), ap.settings.controls && ad(), ap.settings.auto && ap.settings.autoControls && ab(), (ap.settings.controls || ap.settings.autoControls || ap.settings.pager) && ap.viewport.after(ap.controls.el)), aw(d, av)
        }, aw = function (g, d) {
            var f = g.find("img, iframe").length;
            if (0 == f) {
                return d(), void 0
            }
            var h = 0;
            g.find("img, iframe").each(function () {
                a(this).one("load", function () {
                    ++h == f && d()
                }).each(function () {
                    this.complete && a(this).load()
                })
            })
        }, av = function () {
            if (ap.settings.infiniteLoop && "fade" != ap.settings.mode && !ap.settings.ticker) {
                var g = "vertical" == ap.settings.mode ? ap.settings.minSlides : ap.settings.maxSlides,
                    d = ap.children.slice(0, g).clone().addClass("bx-clone"),
                    f = ap.children.slice(-g).clone().addClass("bx-clone");
                am.append(d).prepend(f)
            }
            ap.loader.remove(), G(), "vertical" == ap.settings.mode && (ap.settings.adaptiveHeight = !0), ap.viewport.height(ao()), am.redrawSlider(), ap.settings.onSliderLoad(ap.active.index), ap.initialized = !0, ap.settings.responsive && a(window).bind("resize", ae), ap.settings.auto && ap.settings.autoStart && aa(), ap.settings.ticker && U(), ap.settings.pager && Z(ap.settings.startSlide), ap.settings.controls && s(), ap.settings.touchEnabled && !ap.settings.ticker && K()
        }, ao = function () {
            var f = 0, d = a();
            if ("vertical" == ap.settings.mode || ap.settings.adaptiveHeight) {
                if (ap.carousel) {
                    var g = 1 == ap.settings.moveSlides ? ap.active.index : ap.active.index * ar();
                    for (d = ap.children.eq(g), i = 1; i <= ap.settings.maxSlides - 1; i++) {
                        d = g + i >= ap.children.length ? d.add(ap.children.eq(i - 1)) : d.add(ap.children.eq(g + i))
                    }
                } else {
                    d = ap.children.eq(ap.active.index)
                }
            } else {
                d = ap.children
            }
            return "vertical" == ap.settings.mode ? (d.each(function () {
                f += a(this).outerHeight()
            }), ap.settings.slideMargin > 0 && (f += ap.settings.slideMargin * (ap.settings.minSlides - 1))) : f = Math.max.apply(Math, d.map(function () {
                return a(this).outerHeight(!1)
            }).get()), f
        }, ak = function () {
            var d = "100%";
            return ap.settings.slideWidth > 0 && (d = "horizontal" == ap.settings.mode ? ap.settings.maxSlides * ap.settings.slideWidth + (ap.settings.maxSlides - 1) * ap.settings.slideMargin : ap.settings.slideWidth), d
        }, al = function () {
            var d = ap.settings.slideWidth, f = ap.viewport.width();
            return 0 == ap.settings.slideWidth || ap.settings.slideWidth > f && !ap.carousel || "vertical" == ap.settings.mode ? d = f : ap.settings.maxSlides > 1 && "horizontal" == ap.settings.mode && (f > ap.maxThreshold || f < ap.minThreshold && (d = (f - ap.settings.slideMargin * (ap.settings.minSlides - 1)) / ap.settings.minSlides)), d
        }, ax = function () {
            var d = 1;
            if ("horizontal" == ap.settings.mode && ap.settings.slideWidth > 0) {
                if (ap.viewport.width() < ap.minThreshold) {
                    d = ap.settings.minSlides
                } else {
                    if (ap.viewport.width() > ap.maxThreshold) {
                        d = ap.settings.maxSlides
                    } else {
                        var f = ap.children.first().width();
                        d = Math.floor(ap.viewport.width() / f)
                    }
                }
            } else {
                "vertical" == ap.settings.mode && (d = ap.settings.minSlides)
            }
            return d
        }, ai = function () {
            var f = 0;
            if (ap.settings.moveSlides > 0) {
                if (ap.settings.infiniteLoop) {
                    f = ap.children.length / ar()
                } else {
                    for (var g = 0, d = 0; g < ap.children.length;) {
                        ++f, g = d + ax(), d += ap.settings.moveSlides <= ax() ? ap.settings.moveSlides : ax()
                    }
                }
            } else {
                f = Math.ceil(ap.children.length / ax())
            }
            return f
        }, ar = function () {
            return ap.settings.moveSlides > 0 && ap.settings.moveSlides <= ax() ? ap.settings.moveSlides : ax()
        }, G = function () {
            if (ap.children.length > ap.settings.maxSlides && ap.active.last && !ap.settings.infiniteLoop) {
                if ("horizontal" == ap.settings.mode) {
                    var f = ap.children.last(), g = f.position();
                    aA(-(g.left - (ap.viewport.width() - f.width())), "reset", 0)
                } else {
                    if ("vertical" == ap.settings.mode) {
                        var d = ap.children.length - ap.settings.minSlides, g = ap.children.eq(d).position();
                        aA(-g.top, "reset", 0)
                    }
                }
            } else {
                var g = ap.children.eq(ap.active.index * ar()).position();
                ap.active.index == ai() - 1 && (ap.active.last = !0), void 0 != g && ("horizontal" == ap.settings.mode ? aA(-g.left, "reset", 0) : "vertical" == ap.settings.mode && aA(-g.top, "reset", 0))
            }
        }, aA = function (g, k, f, h) {
            if (ap.usingCSS) {
                var l = "vertical" == ap.settings.mode ? "translate3d(0, " + g + "px, 0)" : "translate3d(" + g + "px, 0, 0)";
                am.css("-" + ap.cssPrefix + "-transition-duration", f / 1000 + "s"), "slide" == k ? (am.css(ap.animProp, l), am.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                    am.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), ac()
                })) : "reset" == k ? am.css(ap.animProp, l) : "ticker" == k && (am.css("-" + ap.cssPrefix + "-transition-timing-function", "linear"), am.css(ap.animProp, l), am.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                    am.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), aA(h.resetValue, "reset", 0), Q()
                }))
            } else {
                var d = {};
                d[ap.animProp] = g, "slide" == k ? am.animate(d, f, ap.settings.easing, function () {
                    ac()
                }) : "reset" == k ? am.css(ap.animProp, g) : "ticker" == k && am.animate(d, speed, "linear", function () {
                    aA(h.resetValue, "reset", 0), Q()
                })
            }
        }, aj = function () {
            for (var g = "", d = ai(), f = 0; d > f; f++) {
                var h = "";
                ap.settings.buildPager && a.isFunction(ap.settings.buildPager) ? (h = ap.settings.buildPager(f), ap.pagerEl.addClass("bx-custom-pager")) : (h = f + 1, ap.pagerEl.addClass("bx-default-pager")), g += '<div class="bx-pager-item"><a href="" data-slide-index="' + f + '" class="bx-pager-link">' + h + "</a></div>"
            }
            ap.pagerEl.html(g)
        }, F = function () {
            ap.settings.pagerCustom ? ap.pagerEl = a(ap.settings.pagerCustom) : (ap.pagerEl = a('<div class="bx-pager" />'), ap.settings.pagerSelector ? a(ap.settings.pagerSelector).html(ap.pagerEl) : ap.controls.el.addClass("bx-has-pager").append(ap.pagerEl), aj()), ap.pagerEl.delegate("a", "click", an)
        }, ad = function () {
            ap.controls.next = a('<a class="bx-next" href="">' + ap.settings.nextText + "</a>"), ap.controls.prev = a('<a class="bx-prev" href="">' + ap.settings.prevText + "</a>"), ap.controls.next.bind("click", ah), ap.controls.prev.bind("click", ag), ap.settings.nextSelector && a(ap.settings.nextSelector).append(ap.controls.next), ap.settings.prevSelector && a(ap.settings.prevSelector).append(ap.controls.prev), ap.settings.nextSelector || ap.settings.prevSelector || (ap.controls.directionEl = a('<div class="bx-controls-direction" />'), ap.controls.directionEl.append(ap.controls.prev).append(ap.controls.next), ap.controls.el.addClass("bx-has-controls-direction").append(ap.controls.directionEl))
        }, ab = function () {
            ap.controls.start = a('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + ap.settings.startText + "</a></div>"), ap.controls.stop = a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + ap.settings.stopText + "</a></div>"), ap.controls.autoEl = a('<div class="bx-controls-auto" />'), ap.controls.autoEl.delegate(".bx-start", "click", au), ap.controls.autoEl.delegate(".bx-stop", "click", R), ap.settings.autoControlsCombine ? ap.controls.autoEl.append(ap.controls.start) : ap.controls.autoEl.append(ap.controls.start).append(ap.controls.stop), ap.settings.autoControlsSelector ? a(ap.settings.autoControlsSelector).html(ap.controls.autoEl) : ap.controls.el.addClass("bx-has-controls-auto").append(ap.controls.autoEl), af(ap.settings.autoStart ? "stop" : "start")
        }, J = function () {
            ap.children.each(function () {
                var d = a(this).find("img:first").attr("title");
                void 0 != d && ("" + d).length && a(this).append('<div class="bx-caption"><span>' + d + "</span></div>")
            })
        }, ah = function (d) {
            ap.settings.auto && am.stopAuto(), am.goToNextSlide(), d.preventDefault()
        }, ag = function (d) {
            ap.settings.auto && am.stopAuto(), am.goToPrevSlide(), d.preventDefault()
        }, au = function (d) {
            am.startAuto(), d.preventDefault()
        }, R = function (d) {
            am.stopAuto(), d.preventDefault()
        }, an = function (g) {
            ap.settings.auto && am.stopAuto();
            var d = a(g.currentTarget), f = parseInt(d.attr("data-slide-index"));
            f != ap.active.index && am.goToSlide(f), g.preventDefault()
        }, Z = function (f) {
            var d = ap.children.length;
            return "short" == ap.settings.pagerType ? (ap.settings.maxSlides > 1 && (d = Math.ceil(ap.children.length / ap.settings.maxSlides)), ap.pagerEl.html(f + 1 + ap.settings.pagerShortSeparator + d), void 0) : (ap.pagerEl.find("a").removeClass("active"), ap.pagerEl.each(function (g, h) {
                a(h).find("a").eq(f).addClass("active")
            }), void 0)
        }, ac = function () {
            if (ap.settings.infiniteLoop) {
                var d = "";
                0 == ap.active.index ? d = ap.children.eq(0).position() : ap.active.index == ai() - 1 && ap.carousel ? d = ap.children.eq((ai() - 1) * ar()).position() : ap.active.index == ap.children.length - 1 && (d = ap.children.eq(ap.children.length - 1).position()), "horizontal" == ap.settings.mode ? aA(-d.left, "reset", 0) : "vertical" == ap.settings.mode && aA(-d.top, "reset", 0)
            }
            ap.working = !1, ap.settings.onSlideAfter(ap.children.eq(ap.active.index), ap.oldIndex, ap.active.index)
        }, af = function (d) {
            ap.settings.autoControlsCombine ? ap.controls.autoEl.html(ap.controls[d]) : (ap.controls.autoEl.find("a").removeClass("active"), ap.controls.autoEl.find("a:not(.bx-" + d + ")").addClass("active"))
        }, s = function () {
            1 == ai() ? (ap.controls.prev.addClass("disabled"), ap.controls.next.addClass("disabled")) : !ap.settings.infiniteLoop && ap.settings.hideControlOnEnd && (0 == ap.active.index ? (ap.controls.prev.addClass("disabled"), ap.controls.next.removeClass("disabled")) : ap.active.index == ai() - 1 ? (ap.controls.next.addClass("disabled"), ap.controls.prev.removeClass("disabled")) : (ap.controls.prev.removeClass("disabled"), ap.controls.next.removeClass("disabled")))
        }, aa = function () {
            ap.settings.autoDelay > 0 ? setTimeout(am.startAuto, ap.settings.autoDelay) : am.startAuto(), ap.settings.autoHover && am.hover(function () {
                ap.interval && (am.stopAuto(!0), ap.autoPaused = !0)
            }, function () {
                ap.autoPaused && (am.startAuto(!0), ap.autoPaused = null)
            })
        }, U = function () {
            var f = 0;
            if ("next" == ap.settings.autoDirection) {
                am.append(ap.children.clone().addClass("bx-clone"))
            } else {
                am.prepend(ap.children.clone().addClass("bx-clone"));
                var d = ap.children.first().position();
                f = "horizontal" == ap.settings.mode ? -d.left : -d.top
            }
            aA(f, "reset", 0), ap.settings.pager = !1, ap.settings.controls = !1, ap.settings.autoControls = !1, ap.settings.tickerHover && !ap.usingCSS && ap.viewport.hover(function () {
                am.stop()
            }, function () {
                var k = 0;
                ap.children.each(function () {
                    k += "horizontal" == ap.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0)
                });
                var g = ap.settings.speed / k, h = "horizontal" == ap.settings.mode ? "left" : "top",
                    l = g * (k - Math.abs(parseInt(am.css(h))));
                Q(l)
            }), Q()
        }, Q = function (g) {
            speed = g ? g : ap.settings.speed;
            var k = {left: 0, top: 0}, f = {left: 0, top: 0};
            "next" == ap.settings.autoDirection ? k = am.find(".bx-clone").first().position() : f = ap.children.first().position();
            var h = "horizontal" == ap.settings.mode ? -k.left : -k.top,
                l = "horizontal" == ap.settings.mode ? -f.left : -f.top, d = {resetValue: l};
            aA(h, "ticker", speed, d)
        }, K = function () {
            ap.touch = {start: {x: 0, y: 0}, end: {x: 0, y: 0}}, ap.viewport.bind("touchstart", j)
        }, j = function (d) {
            if (ap.working) {
                d.preventDefault()
            } else {
                ap.touch.originalPos = am.position();
                var f = d.originalEvent;
                ap.touch.start.x = f.changedTouches[0].pageX, ap.touch.start.y = f.changedTouches[0].pageY, ap.viewport.bind("touchmove", e), ap.viewport.bind("touchend", t)
            }
        }, e = function (f) {
            var k = f.originalEvent, d = Math.abs(k.changedTouches[0].pageX - ap.touch.start.x),
                g = Math.abs(k.changedTouches[0].pageY - ap.touch.start.y);
            if (3 * d > g && ap.settings.preventDefaultSwipeX ? f.preventDefault() : 3 * g > d && ap.settings.preventDefaultSwipeY && f.preventDefault(), "fade" != ap.settings.mode && ap.settings.oneToOneTouch) {
                var l = 0;
                if ("horizontal" == ap.settings.mode) {
                    var h = k.changedTouches[0].pageX - ap.touch.start.x;
                    l = ap.touch.originalPos.left + h
                } else {
                    var h = k.changedTouches[0].pageY - ap.touch.start.y;
                    l = ap.touch.originalPos.top + h
                }
                aA(l, "reset", 0)
            }
        }, t = function (f) {
            ap.viewport.unbind("touchmove", e);
            var h = f.originalEvent, d = 0;
            if (ap.touch.end.x = h.changedTouches[0].pageX, ap.touch.end.y = h.changedTouches[0].pageY, "fade" == ap.settings.mode) {
                var g = Math.abs(ap.touch.start.x - ap.touch.end.x);
                g >= ap.settings.swipeThreshold && (ap.touch.start.x > ap.touch.end.x ? am.goToNextSlide() : am.goToPrevSlide(), am.stopAuto())
            } else {
                var g = 0;
                "horizontal" == ap.settings.mode ? (g = ap.touch.end.x - ap.touch.start.x, d = ap.touch.originalPos.left) : (g = ap.touch.end.y - ap.touch.start.y, d = ap.touch.originalPos.top), !ap.settings.infiniteLoop && (0 == ap.active.index && g > 0 || ap.active.last && 0 > g) ? aA(d, "reset", 200) : Math.abs(g) >= ap.settings.swipeThreshold ? (0 > g ? am.goToNextSlide() : am.goToPrevSlide(), am.stopAuto()) : aA(d, "reset", 200)
            }
            ap.viewport.unbind("touchend", t)
        }, ae = function () {
            var f = a(window).width(), d = a(window).height();
            (aB != f || at != d) && (aB = f, at = d, am.redrawSlider())
        };
        return am.goToSlide = function (o, k) {
            if (!ap.working && ap.active.index != o) {
                if (ap.working = !0, ap.oldIndex = ap.active.index, ap.active.index = 0 > o ? ai() - 1 : o >= ai() ? 0 : o, ap.settings.onSlideBefore(ap.children.eq(ap.active.index), ap.oldIndex, ap.active.index), "next" == k ? ap.settings.onSlideNext(ap.children.eq(ap.active.index), ap.oldIndex, ap.active.index) : "prev" == k && ap.settings.onSlidePrev(ap.children.eq(ap.active.index), ap.oldIndex, ap.active.index), ap.active.last = ap.active.index >= ai() - 1, ap.settings.pager && Z(ap.active.index), ap.settings.controls && s(), "fade" == ap.settings.mode) {
                    ap.settings.adaptiveHeight && ap.viewport.height() != ao() && ap.viewport.animate({height: ao()}, ap.settings.adaptiveHeightSpeed), ap.children.filter(":visible").fadeOut(ap.settings.speed).css({zIndex: 0}), ap.children.eq(ap.active.index).css("zIndex", 51).fadeIn(ap.settings.speed, function () {
                        a(this).css("zIndex", 50), ac()
                    })
                } else {
                    ap.settings.adaptiveHeight && ap.viewport.height() != ao() && ap.viewport.animate({height: ao()}, ap.settings.adaptiveHeightSpeed);
                    var u = 0, f = {left: 0, top: 0};
                    if (!ap.settings.infiniteLoop && ap.carousel && ap.active.last) {
                        if ("horizontal" == ap.settings.mode) {
                            var r = ap.children.eq(ap.children.length - 1);
                            f = r.position(), u = ap.viewport.width() - r.outerWidth()
                        } else {
                            var h = ap.children.length - ap.settings.minSlides;
                            f = ap.children.eq(h).position()
                        }
                    } else {
                        if (ap.carousel && ap.active.last && "prev" == k) {
                            var p = 1 == ap.settings.moveSlides ? ap.settings.maxSlides - ar() : (ai() - 1) * ar() - (ap.children.length - ap.settings.maxSlides),
                                r = am.children(".bx-clone").eq(p);
                            f = r.position()
                        } else {
                            if ("next" == k && 0 == ap.active.index) {
                                f = am.find("> .bx-clone").eq(ap.settings.maxSlides).position(), ap.active.last = !1
                            } else {
                                if (o >= 0) {
                                    var q = o * ar();
                                    f = ap.children.eq(q).position()
                                }
                            }
                        }
                    }
                    if ("undefined" != typeof f) {
                        var m = "horizontal" == ap.settings.mode ? -(f.left - u) : -f.top;
                        aA(m, "slide", ap.settings.speed)
                    }
                }
            }
        }, am.goToNextSlide = function () {
            if (ap.settings.infiniteLoop || !ap.active.last) {
                var d = parseInt(ap.active.index) + 1;
                am.goToSlide(d, "next")
            }
        }, am.goToPrevSlide = function () {
            if (ap.settings.infiniteLoop || 0 != ap.active.index) {
                var d = parseInt(ap.active.index) - 1;
                am.goToSlide(d, "prev")
            }
        }, am.startAuto = function (d) {
            ap.interval || (ap.interval = setInterval(function () {
                "next" == ap.settings.autoDirection ? am.goToNextSlide() : am.goToPrevSlide()
            }, ap.settings.pause), ap.settings.autoControls && 1 != d && af("stop"))
        }, am.stopAuto = function (d) {
            ap.interval && (clearInterval(ap.interval), ap.interval = null, ap.settings.autoControls && 1 != d && af("start"))
        }, am.getCurrentSlide = function () {
            return ap.active.index
        }, am.getSlideCount = function () {
            return ap.children.length
        }, am.redrawSlider = function () {
            ap.children.add(am.find(".bx-clone")).outerWidth(al()), ap.viewport.css("height", ao()), ap.settings.ticker || G(), ap.active.last && (ap.active.index = ai() - 1), ap.active.index >= ai() && (ap.active.last = !0), ap.settings.pager && !ap.settings.pagerCustom && (aj(), Z(ap.active.index))
        }, am.destroySlider = function () {
            ap.initialized && (ap.initialized = !1, a(".bx-clone", this).remove(), ap.children.each(function () {
                void 0 != a(this).data("origStyle") ? a(this).attr("style", a(this).data("origStyle")) : a(this).removeAttr("style")
            }), void 0 != a(this).data("origStyle") ? this.attr("style", a(this).data("origStyle")) : a(this).removeAttr("style"), a(this).unwrap().unwrap(), ap.controls.el && ap.controls.el.remove(), ap.controls.next && ap.controls.next.remove(), ap.controls.prev && ap.controls.prev.remove(), ap.pagerEl && ap.pagerEl.remove(), a(".bx-caption", this).remove(), ap.controls.autoEl && ap.controls.autoEl.remove(), clearInterval(ap.interval), ap.settings.responsive && a(window).unbind("resize", ae))
        }, am.reloadSlider = function (d) {
            void 0 != d && (aq = d), am.destroySlider(), ay()
        }, ay(), this
    }
}(jQuery);
eval(function (h, b, i, d, g, f) {
    g = function (a) {
        return (a < b ? "" : g(parseInt(a / b))) + ((a = a % b) > 35 ? String.fromCharCode(a + 29) : a.toString(36))
    };
    if (!"".replace(/^/, String)) {
        while (i--) {
            f[g(i)] = d[i] || g(i)
        }
        d = [function (a) {
            return f[a]
        }];
        g = function () {
            return "\\w+"
        };
        i = 1
    }
    while (i--) {
        if (d[i]) {
            h = h.replace(new RegExp("\\b" + g(i) + "\\b", "g"), d[i])
        }
    }
    return h
}('7(A 3c.3q!=="9"){3c.3q=9(e){9 t(){}t.5S=e;p 5R t}}(9(e,t,n){h r={1N:9(t,n){h r=c;r.$k=e(n);r.6=e.4M({},e.37.2B.6,r.$k.v(),t);r.2A=t;r.4L()},4L:9(){9 r(e){h n,r="";7(A t.6.33==="9"){t.6.33.R(c,[e])}l{1A(n 38 e.d){7(e.d.5M(n)){r+=e.d[n].1K}}t.$k.2y(r)}t.3t()}h t=c,n;7(A t.6.2H==="9"){t.6.2H.R(c,[t.$k])}7(A t.6.2O==="2Y"){n=t.6.2O;e.5K(n,r)}l{t.3t()}},3t:9(){h e=c;e.$k.v("d-4I",e.$k.2x("2w")).v("d-4F",e.$k.2x("H"));e.$k.z({2u:0});e.2t=e.6.q;e.4E();e.5v=0;e.1X=14;e.23()},23:9(){h e=c;7(e.$k.25().N===0){p b}e.1M();e.4C();e.$S=e.$k.25();e.E=e.$S.N;e.4B();e.$G=e.$k.17(".d-1K");e.$K=e.$k.17(".d-1p");e.3u="U";e.13=0;e.26=[0];e.m=0;e.4A();e.4z()},4z:9(){h e=c;e.2V();e.2W();e.4t();e.30();e.4r();e.4q();e.2p();e.4o();7(e.6.2o!==b){e.4n(e.6.2o)}7(e.6.O===j){e.6.O=4Q}e.19();e.$k.17(".d-1p").z("4i","4h");7(!e.$k.2m(":3n")){e.3o()}l{e.$k.z("2u",1)}e.5O=b;e.2l();7(A e.6.3s==="9"){e.6.3s.R(c,[e.$k])}},2l:9(){h e=c;7(e.6.1Z===j){e.1Z()}7(e.6.1B===j){e.1B()}e.4g();7(A e.6.3w==="9"){e.6.3w.R(c,[e.$k])}},3x:9(){h e=c;7(A e.6.3B==="9"){e.6.3B.R(c,[e.$k])}e.3o();e.2V();e.2W();e.4f();e.30();e.2l();7(A e.6.3D==="9"){e.6.3D.R(c,[e.$k])}},3F:9(){h e=c;t.1c(9(){e.3x()},0)},3o:9(){h e=c;7(e.$k.2m(":3n")===b){e.$k.z({2u:0});t.18(e.1C);t.18(e.1X)}l{p b}e.1X=t.4d(9(){7(e.$k.2m(":3n")){e.3F();e.$k.4b({2u:1},2M);t.18(e.1X)}},5x)},4B:9(){h e=c;e.$S.5n(\'<L H="d-1p">\').4a(\'<L H="d-1K"></L>\');e.$k.17(".d-1p").4a(\'<L H="d-1p-49">\');e.1H=e.$k.17(".d-1p-49");e.$k.z("4i","4h")},1M:9(){h e=c,t=e.$k.1I(e.6.1M),n=e.$k.1I(e.6.2i);7(!t){e.$k.I(e.6.1M)}7(!n){e.$k.I(e.6.2i)}},2V:9(){h t=c,n,r;7(t.6.2Z===b){p b}7(t.6.48===j){t.6.q=t.2t=1;t.6.1h=b;t.6.1s=b;t.6.1O=b;t.6.22=b;t.6.1Q=b;t.6.1R=b;p b}n=e(t.6.47).1f();7(n>(t.6.1s[0]||t.2t)){t.6.q=t.2t}7(t.6.1h!==b){t.6.1h.5g(9(e,t){p e[0]-t[0]});1A(r=0;r<t.6.1h.N;r+=1){7(t.6.1h[r][0]<=n){t.6.q=t.6.1h[r][1]}}}l{7(n<=t.6.1s[0]&&t.6.1s!==b){t.6.q=t.6.1s[1]}7(n<=t.6.1O[0]&&t.6.1O!==b){t.6.q=t.6.1O[1]}7(n<=t.6.22[0]&&t.6.22!==b){t.6.q=t.6.22[1]}7(n<=t.6.1Q[0]&&t.6.1Q!==b){t.6.q=t.6.1Q[1]}7(n<=t.6.1R[0]&&t.6.1R!==b){t.6.q=t.6.1R[1]}}7(t.6.q>t.E&&t.6.46===j){t.6.q=t.E}},4r:9(){h n=c,r,i;7(n.6.2Z!==j){p b}i=e(t).1f();n.3d=9(){7(e(t).1f()!==i){7(n.6.O!==b){t.18(n.1C)}t.5d(r);r=t.1c(9(){i=e(t).1f();n.3x()},n.6.45)}};e(t).44(n.3d)},4f:9(){h e=c;e.2g(e.m);7(e.6.O!==b){e.3j()}},43:9(){h t=c,n=0,r=t.E-t.6.q;t.$G.2f(9(i){h s=e(c);s.z({1f:t.M}).v("d-1K",3p(i));7(i%t.6.q===0||i===r){7(!(i>r)){n+=1}}s.v("d-24",n)})},42:9(){h e=c,t=e.$G.N*e.M;e.$K.z({1f:t*2,T:0});e.43()},2W:9(){h e=c;e.40();e.42();e.3Z();e.3v()},40:9(){h e=c;e.M=1F.4O(e.$k.1f()/e.6.q)},3v:9(){h e=c,t=(e.E*e.M-e.6.q*e.M)*-1;7(e.6.q>e.E){e.D=0;t=0;e.3z=0}l{e.D=e.E-e.6.q;e.3z=t}p t},3Y:9(){p 0},3Z:9(){h t=c,n=0,r=0,i,s,o;t.J=[0];t.3E=[];1A(i=0;i<t.E;i+=1){r+=t.M;t.J.2D(-r);7(t.6.12===j){s=e(t.$G[i]);o=s.v("d-24");7(o!==n){t.3E[n]=t.J[i];n=o}}}},4t:9(){h t=c;7(t.6.2a===j||t.6.1v===j){t.B=e(\'<L H="d-5A"/>\').5m("5l",!t.F.15).5c(t.$k)}7(t.6.1v===j){t.3T()}7(t.6.2a===j){t.3S()}},3S:9(){h t=c,n=e(\'<L H="d-4U"/>\');t.B.1o(n);t.1u=e("<L/>",{"H":"d-1n",2y:t.6.2U[0]||""});t.1q=e("<L/>",{"H":"d-U",2y:t.6.2U[1]||""});n.1o(t.1u).1o(t.1q);n.w("2X.B 21.B",\'L[H^="d"]\',9(e){e.1l()});n.w("2n.B 28.B",\'L[H^="d"]\',9(n){n.1l();7(e(c).1I("d-U")){t.U()}l{t.1n()}})},3T:9(){h t=c;t.1k=e(\'<L H="d-1v"/>\');t.B.1o(t.1k);t.1k.w("2n.B 28.B",".d-1j",9(n){n.1l();7(3p(e(c).v("d-1j"))!==t.m){t.1g(3p(e(c).v("d-1j")),j)}})},3P:9(){h t=c,n,r,i,s,o,u;7(t.6.1v===b){p b}t.1k.2y("");n=0;r=t.E-t.E%t.6.q;1A(s=0;s<t.E;s+=1){7(s%t.6.q===0){n+=1;7(r===s){i=t.E-t.6.q}o=e("<L/>",{"H":"d-1j"});u=e("<3N></3N>",{4R:t.6.39===j?n:"","H":t.6.39===j?"d-59":""});o.1o(u);o.v("d-1j",r===s?i:s);o.v("d-24",n);t.1k.1o(o)}}t.35()},35:9(){h t=c;7(t.6.1v===b){p b}t.1k.17(".d-1j").2f(9(){7(e(c).v("d-24")===e(t.$G[t.m]).v("d-24")){t.1k.17(".d-1j").Z("2d");e(c).I("2d")}})},3e:9(){h e=c;7(e.6.2a===b){p b}7(e.6.2e===b){7(e.m===0&&e.D===0){e.1u.I("1b");e.1q.I("1b")}l 7(e.m===0&&e.D!==0){e.1u.I("1b");e.1q.Z("1b")}l 7(e.m===e.D){e.1u.Z("1b");e.1q.I("1b")}l 7(e.m!==0&&e.m!==e.D){e.1u.Z("1b");e.1q.Z("1b")}}},30:9(){h e=c;e.3P();e.3e();7(e.B){7(e.6.q>=e.E){e.B.3K()}l{e.B.3J()}}},55:9(){h e=c;7(e.B){e.B.3k()}},U:9(e){h t=c;7(t.1E){p b}t.m+=t.6.12===j?t.6.q:1;7(t.m>t.D+(t.6.12===j?t.6.q-1:0)){7(t.6.2e===j){t.m=0;e="2k"}l{t.m=t.D;p b}}t.1g(t.m,e)},1n:9(e){h t=c;7(t.1E){p b}7(t.6.12===j&&t.m>0&&t.m<t.6.q){t.m=0}l{t.m-=t.6.12===j?t.6.q:1}7(t.m<0){7(t.6.2e===j){t.m=t.D;e="2k"}l{t.m=0;p b}}t.1g(t.m,e)},1g:9(e,n,r){h i=c,s;7(i.1E){p b}7(A i.6.1Y==="9"){i.6.1Y.R(c,[i.$k])}7(e>=i.D){e=i.D}l 7(e<=0){e=0}i.m=i.d.m=e;7(i.6.2o!==b&&r!=="4e"&&i.6.q===1&&i.F.1x===j){i.1t(0);7(i.F.1x===j){i.1L(i.J[e])}l{i.1r(i.J[e],1)}i.2r();i.4l();p b}s=i.J[e];7(i.F.1x===j){i.1T=b;7(n===j){i.1t("1w");t.1c(9(){i.1T=j},i.6.1w)}l 7(n==="2k"){i.1t(i.6.2v);t.1c(9(){i.1T=j},i.6.2v)}l{i.1t("1m");t.1c(9(){i.1T=j},i.6.1m)}i.1L(s)}l{7(n===j){i.1r(s,i.6.1w)}l 7(n==="2k"){i.1r(s,i.6.2v)}l{i.1r(s,i.6.1m)}}i.2r()},2g:9(e){h t=c;7(A t.6.1Y==="9"){t.6.1Y.R(c,[t.$k])}7(e>=t.D||e===-1){e=t.D}l 7(e<=0){e=0}t.1t(0);7(t.F.1x===j){t.1L(t.J[e])}l{t.1r(t.J[e],1)}t.m=t.d.m=e;t.2r()},2r:9(){h e=c;e.26.2D(e.m);e.13=e.d.13=e.26[e.26.N-2];e.26.5f(0);7(e.13!==e.m){e.35();e.3e();e.2l();7(e.6.O!==b){e.3j()}}7(A e.6.3y==="9"&&e.13!==e.m){e.6.3y.R(c,[e.$k])}},X:9(){h e=c;e.3A="X";t.18(e.1C)},3j:9(){h e=c;7(e.3A!=="X"){e.19()}},19:9(){h e=c;e.3A="19";7(e.6.O===b){p b}t.18(e.1C);e.1C=t.4d(9(){e.U(j)},e.6.O)},1t:9(e){h t=c;7(e==="1m"){t.$K.z(t.2z(t.6.1m))}l 7(e==="1w"){t.$K.z(t.2z(t.6.1w))}l 7(A e!=="2Y"){t.$K.z(t.2z(e))}},2z:9(e){p{"-1G-1a":"2C "+e+"1z 2s","-1W-1a":"2C "+e+"1z 2s","-o-1a":"2C "+e+"1z 2s",1a:"2C "+e+"1z 2s"}},3H:9(){p{"-1G-1a":"","-1W-1a":"","-o-1a":"",1a:""}},3I:9(e){p{"-1G-P":"1i("+e+"V, C, C)","-1W-P":"1i("+e+"V, C, C)","-o-P":"1i("+e+"V, C, C)","-1z-P":"1i("+e+"V, C, C)",P:"1i("+e+"V, C,C)"}},1L:9(e){h t=c;t.$K.z(t.3I(e))},3L:9(e){h t=c;t.$K.z({T:e})},1r:9(e,t){h n=c;n.29=b;n.$K.X(j,j).4b({T:e},{54:t||n.6.1m,3M:9(){n.29=j}})},4E:9(){h e=c,r="1i(C, C, C)",i=n.56("L"),s,o,u,a;i.2w.3O="  -1W-P:"+r+"; -1z-P:"+r+"; -o-P:"+r+"; -1G-P:"+r+"; P:"+r;s=/1i\\(C, C, C\\)/g;o=i.2w.3O.5i(s);u=o!==14&&o.N===1;a="5z"38 t||t.5Q.4P;e.F={1x:u,15:a}},4q:9(){h e=c;7(e.6.27!==b||e.6.1U!==b){e.3Q();e.3R()}},4C:9(){h e=c,t=["s","e","x"];e.16={};7(e.6.27===j&&e.6.1U===j){t=["2X.d 21.d","2N.d 3U.d","2n.d 3V.d 28.d"]}l 7(e.6.27===b&&e.6.1U===j){t=["2X.d","2N.d","2n.d 3V.d"]}l 7(e.6.27===j&&e.6.1U===b){t=["21.d","3U.d","28.d"]}e.16.3W=t[0];e.16.2K=t[1];e.16.2J=t[2]},3R:9(){h t=c;t.$k.w("5y.d",9(e){e.1l()});t.$k.w("21.3X",9(t){p e(t.1d).2m("5C, 5E, 5F, 5N")})},3Q:9(){9 s(e){7(e.2b!==W){p{x:e.2b[0].2c,y:e.2b[0].41}}7(e.2b===W){7(e.2c!==W){p{x:e.2c,y:e.41}}7(e.2c===W){p{x:e.52,y:e.53}}}}9 o(t){7(t==="w"){e(n).w(r.16.2K,a);e(n).w(r.16.2J,f)}l 7(t==="Q"){e(n).Q(r.16.2K);e(n).Q(r.16.2J)}}9 u(n){h u=n.3h||n||t.3g,a;7(u.5a===3){p b}7(r.E<=r.6.q){p}7(r.29===b&&!r.6.3f){p b}7(r.1T===b&&!r.6.3f){p b}7(r.6.O!==b){t.18(r.1C)}7(r.F.15!==j&&!r.$K.1I("3b")){r.$K.I("3b")}r.11=0;r.Y=0;e(c).z(r.3H());a=e(c).2h();i.2S=a.T;i.2R=s(u).x-a.T;i.2P=s(u).y-a.5o;o("w");i.2j=b;i.2L=u.1d||u.4c}9 a(o){h u=o.3h||o||t.3g,a,f;r.11=s(u).x-i.2R;r.2I=s(u).y-i.2P;r.Y=r.11-i.2S;7(A r.6.2E==="9"&&i.3C!==j&&r.Y!==0){i.3C=j;r.6.2E.R(r,[r.$k])}7((r.Y>8||r.Y<-8)&&r.F.15===j){7(u.1l!==W){u.1l()}l{u.5L=b}i.2j=j}7((r.2I>10||r.2I<-10)&&i.2j===b){e(n).Q("2N.d")}a=9(){p r.Y/5};f=9(){p r.3z+r.Y/5};r.11=1F.3v(1F.3Y(r.11,a()),f());7(r.F.1x===j){r.1L(r.11)}l{r.3L(r.11)}}9 f(n){h s=n.3h||n||t.3g,u,a,f;s.1d=s.1d||s.4c;i.3C=b;7(r.F.15!==j){r.$K.Z("3b")}7(r.Y<0){r.1y=r.d.1y="T"}l{r.1y=r.d.1y="3i"}7(r.Y!==0){u=r.4j();r.1g(u,b,"4e");7(i.2L===s.1d&&r.F.15!==j){e(s.1d).w("3a.4k",9(t){t.4S();t.4T();t.1l();e(t.1d).Q("3a.4k")});a=e.4N(s.1d,"4V").3a;f=a.4W();a.4X(0,0,f)}}o("Q")}h r=c,i={2R:0,2P:0,4Y:0,2S:0,2h:14,4Z:14,50:14,2j:14,51:14,2L:14};r.29=j;r.$k.w(r.16.3W,".d-1p",u)},4j:9(){h e=c,t=e.4m();7(t>e.D){e.m=e.D;t=e.D}l 7(e.11>=0){t=0;e.m=0}p t},4m:9(){h t=c,n=t.6.12===j?t.3E:t.J,r=t.11,i=14;e.2f(n,9(s,o){7(r-t.M/20>n[s+1]&&r-t.M/20<o&&t.34()==="T"){i=o;7(t.6.12===j){t.m=e.4p(i,t.J)}l{t.m=s}}l 7(r+t.M/20<o&&r+t.M/20>(n[s+1]||n[s]-t.M)&&t.34()==="3i"){7(t.6.12===j){i=n[s+1]||n[n.N-1];t.m=e.4p(i,t.J)}l{i=n[s+1];t.m=s+1}}});p t.m},34:9(){h e=c,t;7(e.Y<0){t="3i";e.3u="U"}l{t="T";e.3u="1n"}p t},4A:9(){h e=c;e.$k.w("d.U",9(){e.U()});e.$k.w("d.1n",9(){e.1n()});e.$k.w("d.19",9(t,n){e.6.O=n;e.19();e.32="19"});e.$k.w("d.X",9(){e.X();e.32="X"});e.$k.w("d.1g",9(t,n){e.1g(n)});e.$k.w("d.2g",9(t,n){e.2g(n)})},2p:9(){h e=c;7(e.6.2p===j&&e.F.15!==j&&e.6.O!==b){e.$k.w("57",9(){e.X()});e.$k.w("58",9(){7(e.32!=="X"){e.19()}})}},1Z:9(){h t=c,n,r,i,s,o;7(t.6.1Z===b){p b}1A(n=0;n<t.E;n+=1){r=e(t.$G[n]);7(r.v("d-1e")==="1e"){4s}i=r.v("d-1K");s=r.17(".5b");7(A s.v("1J")!=="2Y"){r.v("d-1e","1e");4s}7(r.v("d-1e")===W){s.3K();r.I("4u").v("d-1e","5e")}7(t.6.4v===j){o=i>=t.m}l{o=j}7(o&&i<t.m+t.6.q&&s.N){t.4w(r,s)}}},4w:9(e,n){9 o(){e.v("d-1e","1e").Z("4u");n.5h("v-1J");7(r.6.4x==="4y"){n.5j(5k)}l{n.3J()}7(A r.6.2T==="9"){r.6.2T.R(c,[r.$k])}}9 u(){i+=1;7(r.2Q(n.3l(0))||s===j){o()}l 7(i<=2q){t.1c(u,2q)}l{o()}}h r=c,i=0,s;7(n.5p("5q")==="5r"){n.z("5s-5t","5u("+n.v("1J")+")");s=j}l{n[0].1J=n.v("1J")}u()},1B:9(){9 s(){h r=e(n.$G[n.m]).2G();n.1H.z("2G",r+"V");7(!n.1H.1I("1B")){t.1c(9(){n.1H.I("1B")},0)}}9 o(){i+=1;7(n.2Q(r.3l(0))){s()}l 7(i<=2q){t.1c(o,2q)}l{n.1H.z("2G","")}}h n=c,r=e(n.$G[n.m]).17("5w"),i;7(r.3l(0)!==W){i=0;o()}l{s()}},2Q:9(e){h t;7(!e.3M){p b}t=A e.4D;7(t!=="W"&&e.4D===0){p b}p j},4g:9(){h t=c,n;7(t.6.2F===j){t.$G.Z("2d")}t.1D=[];1A(n=t.m;n<t.m+t.6.q;n+=1){t.1D.2D(n);7(t.6.2F===j){e(t.$G[n]).I("2d")}}t.d.1D=t.1D},4n:9(e){h t=c;t.4G="d-"+e+"-5B";t.4H="d-"+e+"-38"},4l:9(){9 a(e){p{2h:"5D",T:e+"V"}}h e=c,t=e.4G,n=e.4H,r=e.$G.1S(e.m),i=e.$G.1S(e.13),s=1F.4J(e.J[e.m])+e.J[e.13],o=1F.4J(e.J[e.m])+e.M/2,u="5G 5H 5I 5J";e.1E=j;e.$K.I("d-1P").z({"-1G-P-1P":o+"V","-1W-4K-1P":o+"V","4K-1P":o+"V"});i.z(a(s,10)).I(t).w(u,9(){e.3m=j;i.Q(u);e.31(i,t)});r.I(n).w(u,9(){e.36=j;r.Q(u);e.31(r,n)})},31:9(e,t){h n=c;e.z({2h:"",T:""}).Z(t);7(n.3m&&n.36){n.$K.Z("d-1P");n.3m=b;n.36=b;n.1E=b}},4o:9(){h e=c;e.d={2A:e.2A,5P:e.$k,S:e.$S,G:e.$G,m:e.m,13:e.13,1D:e.1D,15:e.F.15,F:e.F,1y:e.1y}},3G:9(){h r=c;r.$k.Q(".d d 21.3X");e(n).Q(".d d");e(t).Q("44",r.3d)},1V:9(){h e=c;7(e.$k.25().N!==0){e.$K.3r();e.$S.3r().3r();7(e.B){e.B.3k()}}e.3G();e.$k.2x("2w",e.$k.v("d-4I")||"").2x("H",e.$k.v("d-4F"))},5T:9(){h e=c;e.X();t.18(e.1X);e.1V();e.$k.5U()},5V:9(t){h n=c,r=e.4M({},n.2A,t);n.1V();n.1N(r,n.$k)},5W:9(e,t){h n=c,r;7(!e){p b}7(n.$k.25().N===0){n.$k.1o(e);n.23();p b}n.1V();7(t===W||t===-1){r=-1}l{r=t}7(r>=n.$S.N||r===-1){n.$S.1S(-1).5X(e)}l{n.$S.1S(r).5Y(e)}n.23()},5Z:9(e){h t=c,n;7(t.$k.25().N===0){p b}7(e===W||e===-1){n=-1}l{n=e}t.1V();t.$S.1S(n).3k();t.23()}};e.37.2B=9(t){p c.2f(9(){7(e(c).v("d-1N")===j){p b}e(c).v("d-1N",j);h n=3c.3q(r);n.1N(t,c);e.v(c,"2B",n)})};e.37.2B.6={q:5,1h:b,1s:[60,4],1O:[61,3],22:[62,2],1Q:b,1R:[63,1],48:b,46:b,1m:2M,1w:64,2v:65,O:b,2p:b,2a:b,2U:["1n","U"],2e:j,12:b,1v:j,39:b,2Z:j,45:2M,47:t,1M:"d-66",2i:"d-2i",1Z:b,4v:j,4x:"4y",1B:b,2O:b,33:b,3f:j,27:j,1U:j,2F:b,2o:b,3B:b,3D:b,2H:b,3s:b,1Y:b,3y:b,3w:b,2E:b,2T:b}})(67,68,69)', 62, 382, "||||||options|if||function||false|this|owl||||var||true|elem|else|currentItem|||return|items|||||data|on|||css|typeof|owlControls|0px|maximumItem|itemsAmount|browser|owlItems|class|addClass|positionsInArray|owlWrapper|div|itemWidth|length|autoPlay|transform|off|apply|userItems|left|next|px|undefined|stop|newRelativeX|removeClass||newPosX|scrollPerPage|prevItem|null|isTouch|ev_types|find|clearInterval|play|transition|disabled|setTimeout|target|loaded|width|goTo|itemsCustom|translate3d|page|paginationWrapper|preventDefault|slideSpeed|prev|append|wrapper|buttonNext|css2slide|itemsDesktop|swapSpeed|buttonPrev|pagination|paginationSpeed|support3d|dragDirection|ms|for|autoHeight|autoPlayInterval|visibleItems|isTransition|Math|webkit|wrapperOuter|hasClass|src|item|transition3d|baseClass|init|itemsDesktopSmall|origin|itemsTabletSmall|itemsMobile|eq|isCss3Finish|touchDrag|unWrap|moz|checkVisible|beforeMove|lazyLoad||mousedown|itemsTablet|setVars|roundPages|children|prevArr|mouseDrag|mouseup|isCssFinish|navigation|touches|pageX|active|rewindNav|each|jumpTo|position|theme|sliding|rewind|eachMoveUpdate|is|touchend|transitionStyle|stopOnHover|100|afterGo|ease|orignalItems|opacity|rewindSpeed|style|attr|html|addCssSpeed|userOptions|owlCarousel|all|push|startDragging|addClassActive|height|beforeInit|newPosY|end|move|targetElement|200|touchmove|jsonPath|offsetY|completeImg|offsetX|relativePos|afterLazyLoad|navigationText|updateItems|calculateAll|touchstart|string|responsive|updateControls|clearTransStyle|hoverStatus|jsonSuccess|moveDirection|checkPagination|endCurrent|fn|in|paginationNumbers|click|grabbing|Object|resizer|checkNavigation|dragBeforeAnimFinish|event|originalEvent|right|checkAp|remove|get|endPrev|visible|watchVisibility|Number|create|unwrap|afterInit|logIn|playDirection|max|afterAction|updateVars|afterMove|maximumPixels|apStatus|beforeUpdate|dragging|afterUpdate|pagesInArray|reload|clearEvents|removeTransition|doTranslate|show|hide|css2move|complete|span|cssText|updatePagination|gestures|disabledEvents|buildButtons|buildPagination|mousemove|touchcancel|start|disableTextSelect|min|loops|calculateWidth|pageY|appendWrapperSizes|appendItemsSizes|resize|responsiveRefreshRate|itemsScaleUp|responsiveBaseWidth|singleItem|outer|wrap|animate|srcElement|setInterval|drag|updatePosition|onVisibleItems|block|display|getNewPosition|disable|singleItemTransition|closestItem|transitionTypes|owlStatus|inArray|moveEvents|response|continue|buildControls|loading|lazyFollow|lazyPreload|lazyEffect|fade|onStartup|customEvents|wrapItems|eventTypes|naturalWidth|checkBrowser|originalClasses|outClass|inClass|originalStyles|abs|perspective|loadContent|extend|_data|round|msMaxTouchPoints|5e3|text|stopImmediatePropagation|stopPropagation|buttons|events|pop|splice|baseElWidth|minSwipe|maxSwipe|dargging|clientX|clientY|duration|destroyControls|createElement|mouseover|mouseout|numbers|which|lazyOwl|appendTo|clearTimeout|checked|shift|sort|removeAttr|match|fadeIn|400|clickable|toggleClass|wrapAll|top|prop|tagName|DIV|background|image|url|wrapperWidth|img|500|dragstart|ontouchstart|controls|out|input|relative|textarea|select|webkitAnimationEnd|oAnimationEnd|MSAnimationEnd|animationend|getJSON|returnValue|hasOwnProperty|option|onstartup|baseElement|navigator|new|prototype|destroy|removeData|reinit|addItem|after|before|removeItem|1199|979|768|479|800|1e3|carousel|jQuery|window|document".split("|"), 0, {}));
(function (a) {
    a.fn.fitVids = function (b) {
        var c = {customSelector: null};
        if (!document.getElementById("fit-vids-style")) {
            var f = document.createElement("div"),
                d = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0],
                e = "&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";
            f.className = "fit-vids-style";
            f.id = "fit-vids-style";
            f.style.display = "none";
            f.innerHTML = e;
            d.parentNode.insertBefore(f, d)
        }
        if (b) {
            a.extend(c, b)
        }
        return this.each(function () {
            var g = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            if (c.customSelector) {
                g.push(c.customSelector)
            }
            var h = a(this).find(g.join(","));
            h = h.not("object object");
            h.each(function () {
                var m = a(this);
                if (this.tagName.toLowerCase() === "embed" && m.parent("object").length || m.parent(".fluid-width-video-wrapper").length) {
                    return
                }
                var i = (this.tagName.toLowerCase() === "object" || (m.attr("height") && !isNaN(parseInt(m.attr("height"), 10)))) ? parseInt(m.attr("height"), 10) : m.height(),
                    j = !isNaN(parseInt(m.attr("width"), 10)) ? parseInt(m.attr("width"), 10) : m.width(), k = i / j;
                if (!m.attr("id")) {
                    var l = "fitvid" + Math.floor(Math.random() * 999999);
                    m.attr("id", l)
                }
                m.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", (k * 100) + "%");
                m.removeAttr("height").removeAttr("width")
            })
        })
    }
})(window.jQuery || window.Zepto);
(function (a) {
    a.fn.equalizeHeight = function () {
        var b = this.length;
        var g = true;
        var j = 0;
        var i = 0;
        var h = 0;
        var f = this;
        var c = 1;
        var e = 0;
        this.each(function () {
            var k = a(this);
            k.height("auto");
            if (g) {
                g = false;
                i = k.offset().top
            }
            e++;
            j = k.offset().top;
            if (i == j) {
                if (k.height() > h) {
                    h = k.height()
                }
            } else {
                d(c, e - 1, h, k);
                h = 0;
                if (k.height() > h) {
                    h = k.height()
                }
            }
            if (e == b) {
                d(c, e, h, k)
            }
        });

        function d(k, l, n, o) {
            for (var m = k; m <= l; m++) {
                f.eq(m - 1).height(n)
            }
            i = o.offset().top;
            h = 0;
            c = l + 1
        }

        return f
    }
})(jQuery);
(function (c) {
    c(function () {
        c("#toggle").click(function (f) {
            f.stopPropagation()
        });
        c("html").click(function (f) {
            if (!c(".toggle").is(c(f.target))) {
                c("#toggle").prop("checked", false)
            }
        })
    });
    c(window).bind("scroll", function () {
        if (c(this).scrollTop() > 100) {
            c(".top-bar").removeClass("tb-large").addClass("tb-small")
        } else {
            c(".top-bar").removeClass("tb-small").addClass("tb-large")
        }
    });
    c(".home-c-slider").bxSlider({
        mode: "horizontal",
        pager: false,
        controls: true,
        nextText: '<i class="bs-right fa fa-angle-right"></i>',
        prevText: '<i class="bs-left fa fa-angle-left"></i>'
    });
    c(".home-bg-slider").bxSlider({
        mode: "fade",
        auto: true,
        speed: 1000,
        pager: false,
        controls: false,
        nextText: '<i class="bs-right fa fa-angle-right"></i>',
        prevText: '<i class="bs-left fa fa-angle-left"></i>'
    });
    c(".home-bgc-slider").bxSlider({
        mode: "fade",
        pager: true,
        controls: true,
        nextText: '<i class="bs-right fa fa-angle-right"></i>',
        prevText: '<i class="bs-left fa fa-angle-left"></i>'
    });
    c(".quote-slider").bxSlider({mode: "horizontal", controls: false, adaptiveHeight: true});
    c(".img-slider").bxSlider({
        mode: "fade",
        pager: false,
        controls: true,
        nextText: '<i class="bs-right fa fa-angle-right"></i>',
        prevText: '<i class="bs-left fa fa-angle-left"></i>'
    });
    c(function () {
        var f = c(".services-slider");
        f.each(function () {
            var g = c(this);
            g.owlCarousel({
                pagination: false,
                navigation: false,
                items: 4,
                itemsDesktop: [1000, 3],
                itemsTablet: [600, 2],
                itemsMobile: [321, 1],
                itemsScaleUp: true
            });
            g.siblings(".serv-next").click(function () {
                g.trigger("owl.next")
            });
            g.siblings(".serv-prev").click(function () {
                g.trigger("owl.prev")
            })
        })
    });
    c(function () {
        var f = c(".employee-slider");
        f.each(function () {
            var g = c(this);
            g.owlCarousel({
                pagination: false,
                navigation: false,
                items: 4,
                itemsDesktop: [1000, 3],
                itemsTablet: [600, 2],
                itemsMobile: [321, 1],
                itemsScaleUp: true
            });
            g.siblings(".emp-next").click(function () {
                g.trigger("owl.next")
            });
            g.siblings(".emp-prev").click(function () {
                g.trigger("owl.prev")
            })
        })
    });
    c(function () {
        var f = c(".work-slider");
        f.each(function () {
            var g = c(this);
            g.owlCarousel({
                pagination: false,
                navigation: false,
                items: 3,
                itemsDesktop: [1000, 3],
                itemsTablet: [600, 2],
                itemsMobile: [321, 1]
            });
            g.siblings(".work-next").click(function () {
                g.trigger("owl.next")
            });
            g.siblings(".work-prev").click(function () {
                g.trigger("owl.prev")
            })
        })
    });
    c(".promo-control").click(function () {
        c(".footer-promo").slideToggle(500);
        if (c(".footer-promo").is(":visible")) {
            c("html, body").animate({scrollTop: c(".footer-promo").offset().top}, 500)
        }
    });
    c(function () {
        c(".scrollto").bind("click.scrollto", function (h) {
            h.preventDefault();
            var g = this.hash, f = c(g);
            c("html, body").stop().animate({scrollTop: f.offset().top - 0}, 900, "swing", function () {
                window.location.hash = g
            })
        })
    });
    var b = c("body"), d = c(window), e = c("body, html"), a = c(".admin-bar").length;
    b.on("click", "a[href*=#]", function (j) {
        var i = c(this);
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var h = b.find("#section-" + this.hash.slice(1));
            h = h.length ? h : b.find("[name=section-" + this.hash.slice(1) + "]");
            if (h.length) {
                var g = c(".top-bar.tb-large"), f = c(".top-bar.tb-small");
                var k = (g.length) ? g.outerHeight() - 50 : f.outerHeight();
                j.preventDefault();
                e.animate({scrollTop: (a) ? h.offset().top - k - 32 : h.offset().top - k}, 900, "swing", function () {
                    window.location.hash = i.prop("hash")
                })
            }
        }
    });
    d.on("load", function () {
        setTimeout(function () {
            if ("" === window.location.hash) {
                return
            }
            var h = b.find("#section-" + window.location.hash.slice(1));
            h = h.length ? h : b.find("[name=section-" + window.location.hash.slice(1) + "]");
            if (h.length) {
                var g = c(".top-bar.tb-large"), f = c(".top-bar.tb-small");
                var i = (g.length) ? g.outerHeight() - 50 : f.outerHeight();
                e.animate({scrollTop: (a) ? h.offset().top - i - 32 : h.offset().top - i}, 900, "swing")
            }
        }, 50)
    });
    c(".popup").magnificPopup({
        type: "image",
        fixedContentPos: false,
        fixedBgPos: false,
        removalDelay: 300,
        mainClass: "mfp-fade"
    });
    c('.popup-youtube, .popup-vimeo, .popup-gmaps, .popup-video, a[href*="vimeo.com"], a[href*="youtube.com"]').magnificPopup({
        disableOn: 700,
        type: "iframe",
        fixedContentPos: false,
        fixedBgPos: false,
        removalDelay: 300,
        mainClass: "mfp-fade",
        preloader: false
    });
    c(".popup-gallery").each(function () {
        c(this).magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {enabled: true},
            fixedContentPos: false,
            fixedBgPos: false,
            removalDelay: 300,
            mainClass: "mfp-fade"
        })
    });
    c(".equal").children(".col").equalizeHeight();
    c(window).resize(function () {
        c(".equal").children(".col").equalizeHeight();
        setTimeout(function () {
            c(".equal").children(".col").equalizeHeight()
        }, 100);
        setTimeout(function () {
            c(".equal").children(".col").equalizeHeight()
        }, 400);
        setTimeout(function () {
            c(".equal").children(".col").equalizeHeight()
        }, 1400);
        setTimeout(function () {
            c(".equal").children(".col").equalizeHeight()
        }, 2400)
    });
    setTimeout(function () {
        c(window).trigger("resize scroll")
    }, 1000);
    setTimeout(function () {
        c(window).trigger("resize scroll")
    }, 3000);
    c(window).load(function () {
        c(".equal").children(".col").equalizeHeight();
        c(window).trigger("resize scroll");
        setTimeout(function () {
            c(".equal").children(".col").equalizeHeight()
        }, 1000);
        setTimeout(function () {
            c(".equal").children(".col").equalizeHeight()
        }, 1300)
    });
    c(".responsive-video").fitVids()
})(jQuery);
jQuery(function (c) {
    var f = c(window), b = c("body"), e = c("section.splash"), d = c("#section-contact"), a = c(".peThemeContactForm");
    c("#commentform").addClass("form form-blog");
    if (a.length) {
        a.peThemeContactForm()
    }
    c(".featured-post-slider").bxSlider({
        mode: "fade",
        pager: true,
        controls: true,
        nextText: '<i class="bs-right fa fa-angle-right"></i>',
        prevText: '<i class="bs-left fa fa-angle-left"></i>',
        adaptiveHeight: true
    });
    b.on("click", "a", function (h) {
        var g = c(this);
        if (window.location.href.replace(window.location.hash, "").replace("#", "") === g.attr("href")) {
            c("html, body").animate({scrollTop: 0}, 900, "swing");
            h.preventDefault()
        }
    });
    if (e.length) {
        b.addClass("has-splash")
    } else {
        b.addClass("has-no-splash")
    }
    if (d.length) {
        b.addClass("has-contact")
    } else {
        b.addClass("has-no-contact")
    }
});
(function (l) {
    var f, e;
    var c = l(window), d;
    var y = l("html");
    var n;
    var s;
    var p;
    var o = 0, w = 0;
    var x;
    var g = false, b = false;
    var z = false;
    var j;
    var m;
    var t = 0;
    var r, u, q, i, v;
    var a;
    window.peGmapStyle = [{stylers: [{saturation: -100}]}, {
        featureType: "road",
        elementType: "geometry",
        stylers: [{lightness: 100}, {visibility: "simplified"}]
    }, {featureType: "road", elementType: "labels", stylers: [{visibility: "off"}]}];

    function k() {
        return this.href.match(/\.(jpg|jpeg|png|gif)$/i)
    }

    pixelentity.classes.Controller = function () {
        var M, I;
        var G;
        var A;

        function K(h, P) {
            P = l(P);
            P.attr("data-target", "flare")
        }

        function J() {
            var h = s.filter(this).parent();
            if (h.hasClass("dropdown-on")) {
                h.removeClass("dropdown-on").find(".dropdown-on").removeClass("dropdown-on")
            } else {
                h.addClass("dropdown-on")
            }
            h.siblings(".dropdown-on").removeClass("dropdown-on").find(".dropdown-on").removeClass("dropdown-on");
            return false
        }

        function B(h) {
            var T = e.eq(h);
            var Q, S = T.find("ul.sub-menu").removeClass("rightAlign");
            var R, P = T.width() + T.parent().offset().left;
            if (P >= M) {
                T.addClass("rightAlign")
            } else {
                for (R = 0; R < S.length; R++) {
                    Q = S.eq(R);
                    if (P + Q.width() > M) {
                        Q.addClass("rightAlign")
                    }
                }
            }
        }

        function D() {
            a.find(".peNeedResize").triggerHandler("resize")
        }

        function E() {
            M = c.width();
            I = window.innerHeight ? window.innerHeight : c.height();
            if (a.length > 0) {
                a.height(Math.max(300, I - u.outerHeight() - r.outerHeight()));
                D();
                setTimeout(D, 500);
                if (l.browser.msie && l.browser.version < 10) {
                    setTimeout(D, 1500);
                    setTimeout(D, 2000);
                    setTimeout(D, 2000)
                }
            }
            e.removeClass("rightAlign").each(B)
        }

        function O(h) {
            j.filter(h.currentTarget).find("div.scalable img").addClass("animated")
        }

        function F(P) {
            var h = j.eq(P);
            var R, S = h.find("span.cell-title");
            var Q = false;
            R = S.find("> a");
            if (R.length > 0) {
                Q = true;
                S.html("<span>" + R.html() + "</span>");
                R.addClass("pe-over-icon pe-over-icon-link").html('<i class="icon-info"></i>');
                S.addClass("has-icons").append(R)
            }
            R = h.find(".scalable > a[data-target=flare]");
            if (R.length > 0) {
                R = R.clone(true);
                R.addClass("pe-over-icon pe-over-icon-lb").html('<i class="icon-plus"></i>');
                if (!Q) {
                    S.wrapInner("<span></span>");
                    Q = true
                }
                S.addClass("has-icons").append(R)
            }
            if (Q) {
                S.wrapInner("<span></span>")
            }
        }

        function N(h) {
            var P = m.eq(h);
            P.prepend('<span class="cell-title"><span><i class="icon-%0"></i></span></span>'.format(P.attr("data-target") == "flare" ? "plus" : "info"))
        }

        function H(Q) {
            var h = m.filter(Q.currentTarget);
            var P = h.find("img");
            P.addClass("animated");
            h[Q.type === "mouseenter" ? "addClass" : "removeClass"]("pe-status-over")
        }

        function L(h) {
            if (c.scrollTop() > 45) {
                n.addClass("sticky-header")
            } else {
                n.removeClass("sticky-header")
            }
        }

        function C() {
            n = l("body");
            i = l.pixelentity.browser.mobile;
            if (i) {
                l("a[data-rel='tooltip']").removeAttr("data-rel");
                y.removeClass("desktop").addClass("mobile");
                if (l.pixelentity.browser.android) {
                    y.addClass("android")
                }
            } else {
                y.addClass("desktop").removeClass("mobile")
            }
            u = l(".site-wrapper > .sticky-bar");
            r = l(".site-wrapper > .footer");
            a = l(".site-wrapper > .site-body > .pe-full-page");
            e = u.find("ul.nav > li > ul");
            var h = u.find("ul:eq(0) > li > a ");
            f = l('a[data-target!="flare"]').not("a[data-toggle]");
            f.filter(k).each(K);
            if (!i) {
                m = l("a.over-effect");
                m.each(N);
                m.on("mouseenter mouseleave", H)
            }
            s = u.find("li.dropdown > a");
            if (i) {
                s.on("touchstart", J)
            }
            l("a.peVideo").attr({"data-autoplay": "disabled"});
            var P = l("span.cell-title");
            P.each(function () {
                var Q = P.filter(this);
                if (Q.next().find("> a").length > 0) {
                    Q.addClass("show-on-top")
                }
            });
            l("img[data-original]:not(img.pe-lazyload-inited)").peLazyLoading();
            if (i) {
                setTimeout(function () {
                    c.triggerHandler("pe-lazyloading-refresh")
                }, 100)
            } else {
                j = l(".peIsotopeGrid .peIsotopeItem");
                j.each(F).one("mouseenter", O)
            }
            c.resize(E);
            c.on("load", E);
            E()
        }

        l.extend(this, {start: C})
    }
}(jQuery));
jQuery(function (a) {
    if (window.peFallBackPlayer) {
        a.pixelentity.video.fallBackPlayer = decodeURIComponent(window.peFallBackPlayer.url)
    }
    pixelentity.controller = new pixelentity.classes.Controller();
    pixelentity.controller.start()
});