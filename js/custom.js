! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.atrament = e() : t.atrament = e()
}(this, function() {
    return function(t) {
        function e(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return t[o].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0)
    }([function(t, e, n) {
        t.exports = n(1)
    }, function(t, e, n) {
        "use strict";
        t.exports = n(2)
    }, function(t, e) {
        "use strict";

        function n(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return Array.from(t)
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }



        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e, n, o) {
            return new f(t, e, n, o)
        }
        var a = function() {
                function t(t, e) {
                    var n = [],
                        o = !0,
                        i = !1,
                        r = void 0;
                    try {
                        for (var s, a = t[Symbol.iterator](); !(o = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); o = !0);
                    } catch (h) {
                        i = !0, r = h
                    } finally {
                        try {
                            !o && a["return"] && a["return"]()
                        } finally {
                            if (i) throw r
                        }
                    }
                    return n
                }
                return function(e, n) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return t(e, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            h = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var o = e[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                    }
                }
                return function(e, n, o) {
                    return n && t(e.prototype, n), o && t(e, o), e
                }
            }(),
            c = function() {
                function t(e, n) {
                    if (r(this, t), arguments.length < 2) throw new Error("not enough coordinates for Point.");
                    this._x = e, this._y = n
                }
                return h(t, [{
                    key: "set",
                    value: function(t, e) {
                        if (arguments.length < 2) throw new Error("not enough coordinates for Point.set");
                        this._x = t, this._y = e
                    }
                }, {
                    key: "x",
                    get: function() {
                        return this._x
                    },
                    set: function(t) {
                        this._x = t
                    }
                }, {
                    key: "y",
                    get: function() {
                        return this._y
                    },
                    set: function(t) {
                        this._y = t
                    }
                }]), t
            }(),
            u = function(t) {
                function e() {
                    r(this, e);
                    var t = o(this, Object.getPrototypeOf(e).call(this, 0, 0));
                    return t._down = !1, t._px = 0, t._py = 0, t
                }
                return i(e, t), h(e, [{
                    key: "down",
                    get: function() {
                        return this._down
                    },
                    set: function(t) {
                        this._down = t
                    }
                }, {
                    key: "x",
                    get: function() {
                        return this._x
                    },
                    set: function(t) {
                        this._x = t
                    }
                }, {
                    key: "y",
                    get: function() {
                        return this._y
                    },
                    set: function(t) {
                        this._y = t
                    }
                }, {
                    key: "px",
                    get: function() {
                        return this._px
                    },
                    set: function(t) {
                        this._px = t
                    }
                }, {
                    key: "py",
                    get: function() {
                        return this._py
                    },
                    set: function(t) {
                        this._py = t
                    }
                }]), e
            }(c),
            f = function() {
                function t(e, n, o, i) {
                    var s = this;
                    if (r(this, t), !document) throw new Error("no DOM found");
                    if (e instanceof Node && "CANVAS" === e.tagName) this.canvas = e;
                    else {
                        if ("string" != typeof e) throw new Error("can't look for canvas based on '" + e + "'");
                        this.canvas = document.querySelector(e)
                    }
                    if (!this.canvas) throw new Error("canvas not found");
                    this.canvas.width = n ? n : 500, this.canvas.height = o ? o : 500, this.canvas.style.cursor = "crosshair", this.mouse = new u;
                    var a = function(t) {
                            t.preventDefault();
                            var e = void 0,
                                n = void 0;
                            t.changedTouches ? (e = t.changedTouches[0].pageX - t.target.offsetLeft, n = t.changedTouches[0].pageY - t.target.offsetTop) : t.layerX || 0 == t.layerX ? (e = t.layerX, n = t.layerY) : (t.offsetX || 0 == t.offsetX) && (e = t.offsetX, n = t.offsetY), s.mouse.down ? s.draw(e, n) : (s.mouse.x = e, s.mouse.y = n)
                        },
                        h = function(t) {
                            return t.preventDefault(), a(t), "fill" == s._mode ? void s.fill() : (s.mouse.px = s.mouse.x, s.mouse.py = s.mouse.y, s.mouse.down = !0, s.context.beginPath(), void s.context.moveTo(s.mouse.px, s.mouse.py))
                        },
                        c = function(t) {
                            t.preventDefault(), s.mouse.down = !1, s.context.closePath()
                        };
                    this.canvas.addEventListener("mousemove", a), this.canvas.addEventListener("mousedown", h), this.canvas.addEventListener("mouseup", c), this.canvas.addEventListener("touchstart", h), this.canvas.addEventListener("touchend", c), this.canvas.addEventListener("touchmove", a), this.context = this.canvas.getContext("2d"), this.context.globalCompositeOperation = "source-over", this.context.globalAlpha = 1, this.context.strokeStyle = i ? i : "black", this.context.lineCap = "round", this.context.lineJoin = "round", this.context.translate(.5, .5), this._filling = !1, this._fillStack = [], this.SMOOTHING_INIT = .85, this.WEIGHT_SPREAD = 10, this._smoothing = this.SMOOTHING_INIT, this._maxWeight = 12, this._thickness = 2, this._targetThickness = 2, this._weight = 2, this._mode = "draw"
                }
                return h(t, [{
                    key: "draw",
                    value: function(e, n) {
                        
                        var o = this.mouse,
                            i = this.context,
                            r = t.lineDistance(e, n, o.px, o.py),
                            s = Math.min(.87, this._smoothing + (r - 60) / 3e3);
                        o.x = e - (e - o.px) * s, o.y = n - (n - o.py) * s;
                        var a = t.lineDistance(o.x, o.y, o.px, o.py);
                        this._targetThickness = (a - 10) / 300 * (this._maxWeight - this._weight) + this._weight, this._thickness > this._targetThickness ? this._thickness -= .5 : this._thickness < this._targetThickness && (this._thickness += .5), i.lineWidth = this._thickness, i.quadraticCurveTo(o.px, o.py, o.x, o.y), i.stroke(), o.px = o.x, o.py = o.y
                    }
                }, {
                    key: "clear",
                    value: function() {
                        "destination-out" === this.context.globalCompositeOperation ? (this.mode = "draw", this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.mode = "erase") : this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
                    }
                }, {
                    key: "toImage",
                    value: function() {
                        return this.canvas.toDataURL()
                    }
                }, {
                    key: "fill",
                    value: function() {
                        var t = this,
                            e = this.mouse,
                            n = this.context,
                            o = Array.prototype.slice.call(n.getImageData(e.x, e.y, 1, 1).data, 0);
                        this._filling ? this._fillStack.push([e.x, e.y, o]) : (this.canvas.style.cursor = "progress", this._filling = !0, setTimeout(function() {
                            t._floodFill(e.x, e.y, o)
                        }, 100))
                    }
                }, {
                    key: "_floodFill",
                    value: function(e, o, i) {
                        for (var r = this, s = this.context, h = s.canvas.width, c = s.canvas.height, u = [
                                [e, o]
                            ], f = t.hexToRgb(this.color), l = s.getImageData(0, 0, s.canvas.width, s.canvas.height), p = Math.min(10 * s.globalAlpha * 255, 255), y = t.colorPixel.apply(t, [l.data].concat(n(f), [i, p])), g = t.matchColor.apply(t, [l.data].concat(n(i))); u.length;) {
                            for (var d = u.pop(), v = a(d, 2), m = v[0], x = v[1], _ = 4 * (x * h + m); x-- >= 0 && g(_);) _ -= 4 * h;
                            _ += 4 * h, ++x;
                            for (var w = !1, k = !1; x++ < c - 1 && g(_);) y(_), m > 0 && (g(_ - 4) ? w || (u.push([m - 1, x]), w = !0) : w && (w = !1)), h - 1 > m && (g(_ + 4) ? k || (u.push([m + 1, x]), k = !0) : k && (k = !1)), _ += 4 * h
                        }
                        s.putImageData(l, 0, 0), this._fillStack.length ? this._floodFill.apply(this, n(this._fillStack.shift())) : (this._filling = !1, setTimeout(function() {
                            r.canvas.style.cursor = "crosshair"
                        }, 500))
                    }
                }, {
                    key: "color",
                    get: function() {
                        return this.context.strokeStyle
                    },
                    set: function(t) {
                        if ("string" != typeof t) throw new Error("wrong argument type");
                        this.context.strokeStyle = t
                    }
                }, {
                    key: "weight",
                    get: function() {
                        return this._weight
                    },
                    set: function(t) {
                        if ("number" != typeof t) throw new Error("wrong argument type");
                        this._weight = t, this._thickness = t, this._targetThickness = t, this._maxWeight = t + this.WEIGHT_SPREAD
                    }
                }, {
                    key: "mode",
                    get: function() {
                        return this._mode
                    },
                    set: function(t) {
                        if ("string" != typeof t) throw new Error("wrong argument type");
                        switch (t) {
                            case "erase":
                                this._mode = "erase", this.context.globalCompositeOperation = "destination-out";
                                break;
                            case "fill":
                                this._mode = "fill", this.context.globalCompositeOperation = "source-over";
                                break;
                            default:
                                this._mode = "draw", this.context.globalCompositeOperation = "source-over"
                        }
                    }
                }, {
                    key: "smoothing",
                    get: function() {
                        return this._smoothing === this.SMOOTHING_INIT
                    },
                    set: function(t) {
                        if ("boolean" != typeof t) throw new Error("wrong argument type");
                        this._smoothing = t ? this.SMOOTHING_INIT : 0
                    }
                }, {
                    key: "opacity",
                    set: function(t) {
                        if ("number" != typeof t) throw new Error("wrong argument type");
                        t >= 4 ? this.context.globalAlpha = 4 : this.context.globalAlpha = t / 10
                    }
                }], [{
                    key: "lineDistance",
                    value: function(t, e, n, o) {
                        var i = Math.pow(n - t, 2),
                            r = Math.pow(o - e, 2);
                        return Math.sqrt(i + r)
                    }
                }, {
                    key: "hexToRgb",
                    value: function(t) {
                        var e = t.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
                        return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                    }
                }, {
                    key: "matchColor",
                    value: function(t, e, n, o, i) {
                        return function(r) {
                            var s = t[r],
                                a = t[r + 1],
                                h = t[r + 2],
                                c = t[r + 3];
                            return s == e && a == n && h == o && c == i
                        }
                    }
                }, {
                    key: "colorPixel",
                    value: function(e, o, i, r, s, a) {
                        var h = t.matchColor.apply(t, [e].concat(n(s)));
                        return function(t) {
                            e[t] = o, e[t + 1] = i, e[t + 2] = r, e[t + 3] = a, h(t + 4) || (e[t + 4] = .01 * e[t + 4] + .99 * o, e[t + 4 + 1] = .01 * e[t + 4 + 1] + .99 * i, e[t + 4 + 2] = .01 * e[t + 4 + 2] + .99 * r, e[t + 4 + 3] = .01 * e[t + 4 + 3] + .99 * a), h(t - 4) || (e[t - 4] = .01 * e[t - 4] + .99 * o, e[t - 4 + 1] = .01 * e[t - 4 + 1] + .99 * i, e[t - 4 + 2] = .01 * e[t - 4 + 2] + .99 * r, e[t - 4 + 3] = .01 * e[t - 4 + 3] + .99 * a)
                        }
                    }
                }]), t
            }();

        t.exports = s, t.exports.Atrament = f
    }])

});
//# sourceMappingURL=atrament.min.js.map

