google
    .maps
    .__gjsload__('stats', function (_) {
        var VX = function () {
                this.b = new _.pk
            },
            WX = function (a) {
                var b = 0,
                    c = 0;
                a
                    .b
                    .forEach(function (a) {
                        b += a.mo;
                        c += a.Kn
                    });
                return c
                    ? b / c
                    : 0
            },
            XX = function (a, b, c) {
                var d = [];
                _.ij(a, function (a, c) {
                    d.push(c + b + a)
                });
                return d.join(c)
            },
            YX = function (a) {
                var b = {};
                _.ij(a, function (a, d) {
                    b[(0, window.encodeURIComponent)(d)] = (0, window.encodeURIComponent)(a).replace(/%7C/g, "|")
                });
                return XX(b, ":", ",")
            },
            ZX = function () {
                var a;
                _.sf[35]
                    ? a = _.Q(_.U(_.T), 11)
                    : a = _.Hq;
                var b = window.document;
                this.l = _.di;
                this.f = a + "/maps/gen_204";
                this.j = b
            },
            $X = function (a, b, c, d) {
                var e = {};
                e.host = window.document.location && window.document.location.host || window.location.host;
                e.v = a;
                e.r = Math.round(1 / b);
                c && (e.client = c);
                d && (e.key = d);
                return e
            },
            aY = function (a, b, c, d) {
                var e = _.P(_.T, 0, 1);
                this.m = a;
                this.B = b;
                this.l = e;
                this.f = c;
                this.j = d;
                this.b = new _.pk;
                this.A = _.Ra()
            },
            cY = function (a, b, c, d, e) {
                var f = _.P(_.T, 23, 500);
                var g = _.P(_.T, 22, 2);
                this.D = a;
                this.H = b;
                this.I = f;
                this.l = g;
                this.B = c;
                this.m = d;
                this.A = e;
                this.f = new _.pk;
                this.b = 0;
                this.j = _.Ra();
                bY(this)
            },
            bY = function (a) {
                window
                    .setTimeout(function () {
                        dY(a);
                        bY(a)
                    }, Math.min(a.I * Math.pow(a.l, a.b), 2147483647))
            },
            dY = function (a) {
                var b = $X(a.H, a.B, a.m, a.A);
                b.t = a.b + "-" + (_.Ra() - a.j);
                a
                    .f
                    .forEach(function (a, d) {
                        a = a();
                        0 < a && (b[d] = Number(a.toFixed(2)) + (_.nl()
                            ? "-if"
                            : ""))
                    });
                a
                    .D
                    .b({
                        ev: "api_snap"
                    }, b);
                ++a.b
            },
            eY = function (a, b, c, d, e) {
                this.A = a;
                this.B = b;
                this.m = c;
                this.j = d;
                this.l = e;
                this.f = {};
                this.b = []
            },
            fY = function (a, b, c) {
                var d = _.Wh;
                this.j = a;
                _
                    .M
                    .bind(this.j, "set_at", this, this.l);
                _
                    .M
                    .bind(this.j, "insert_at", this, this.l);
                this.A = b;
                this.B = d;
                this.m = c;
                this.f = 0;
                this.b = {};
                this.l()
            },
            gY = function () {
                this.j = _.Q(_.T, 6);
                this.B = _.bf();
                this.b = new ZX;
                _.Vh && new fY(_.Vh, (0, _.v)(this.b.b, this.b), !!this.j);
                var a = _.Q(new _.Xe(_.T.data[3]), 1);
                this.D = a.split(".")[1] || a;
                this.H = {};
                this.A = {};
                this.m = {};
                this.I = {};
                this.Z = _.P(_.T, 0, 1);
                _.ci && (this.l = new cY(this.b, this.D, this.Z, this.j, this.B))
            };
        VX.prototype.f = function (a, b, c) {
            this
                .b
                .set(_.Jc(a), {
                    mo: b,
                    Kn: c
                })
        };
        ZX.prototype.b = function (a, b) {
            b = b || {};
            var c = _
                .wj()
                .toString(36);
            b.src = "apiv3";
            b.token = this.l;
            b.ts = c.substr(c.length - 6);
            a.cad = YX(b);
            a = XX(a, "=", "&");
            a = this.f + "?target=api&" + a;
            this
                .j
                .createElement("img")
                .src = a;
            (b = _.C.__gm_captureCSI) && b(a)
        };
        aY.prototype.D = function (a, b) {
            b = _.q(b)
                ? b
                : 1;
            this
                .b
                .isEmpty() && window.setTimeout((0, _.v)(function () {
                var a = $X(this.B, this.l, this.f, this.j);
                a.t = _.Ra() - this.A;
                var b = this.b;
                _.qk(b);
                for (var e = {}, f = 0; f < b.b.length; f++) {
                    var g = b.b[f];
                    e[g] = b.F[g]
                }
                _.Iu(a, e);
                this
                    .b
                    .clear();
                this
                    .m
                    .b({
                        ev: "api_maprft"
                    }, a)
            },
            this), 500);
            b = this
                .b
                .get(a, 0) + b;
            this
                .b
                .set(a, b)
        };
        cY.prototype.register = function (a, b) {
            this
                .f
                .set(a, b)
        };
        eY.prototype.D = function (a) {
            this.f[a] || (this.f[a] = !0, this.b.push(a), 2 > this.b.length && _.ev(this, this.H, 500))
        };
        eY.prototype.H = function () {
            for (var a = $X(this.B, this.m, this.j, this.l), b = 0, c; c = this.b[b]; ++b) 
                a[c] = "1";
            a.hybrid =+ _.Xk();
            this.b.length = 0;
            this
                .A
                .b({
                    ev: "api_mapft"
                }, a)
        };
        fY.prototype.l = function () {
            for (var a; a = this.j.removeAt(0);) {
                var b = a.pn;
                a = a.timestamp - this.B;
                ++this.f;
                this.b[b] || (this.b[b] = 0);
                ++this.b[b];
                if (20 <= this.f && !(this.f % 5)) {
                    var c = {};
                    c.s = b;
                    c.sr = this.b[b];
                    c.tr = this.f;
                    c.te = a;
                    c.hc = this.m
                        ? "1"
                        : "0";
                    this.A({
                        ev: "api_services"
                    }, c)
                }
            }
        };
        gY.prototype.ac = function (a) {
            a = _.Jc(a);
            this.H[a] || (this.H[a] = new eY(this.b, this.D, this.Z, this.j, this.B));
            return this.H[a]
        };
        gY.prototype.la = function (a) {
            a = _.Jc(a);
            this.A[a] || (this.A[a] = new aY(this.b, this.D, this.j, this.B));
            return this.A[a]
        };
        gY.prototype.f = function (a) {
            if (this.l) {
                this.m[a] || (this.m[a] = new _.dw, this.l.register(a, function () {
                    return b.qb()
                }));
                var b = this.m[a];
                return b
            }
        };
        gY.prototype.na = function (a) {
            if (this.l) {
                this.I[a] || (this.I[a] = new VX, this.l.register(a, function () {
                    return WX(b)
                }));
                var b = this.I[a];
                return b
            }
        };
        var hY = new gY;
        _.Sd("stats", hY);
    });
