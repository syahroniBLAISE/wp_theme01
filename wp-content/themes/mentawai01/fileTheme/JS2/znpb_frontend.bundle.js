!(function(h) {
  (h.ZnbFrontendJs = function() {
    (this.scope = h(document)), this.zinit();
  }), (h.ZnbFrontendJs.prototype = {
    zinit: function() {
      var t = this;
      t.addActions(), t.initHelpers(h(document)), t.refresh_events(
        h(document)
      ), h(document).trigger("ZnbFrontendJsReady", this);
    },
    refresh_events: function(t) {
      var e = this;
      e.contact_forms(t), e.doParallax(t), e.doObjectParallax(
        t
      ), e.background_video(t), e.entryAnimations(t), e.objectFitCover(t);
    },
    RefreshOnWidthChange: function(t) {},
    addActions: function() {
      var e = this;
      e.scope.on("ZnWidthChanged", function(t) {
        e.RefreshOnWidthChange(t.content), h(window).trigger("resize");
      }), e.scope.on("ZnNewContent", function(t) {
        e.refresh_events(t.content);
      });
    },
    unbind_events: function(t) {},
    initHelpers: function(t) {
      var p = this;
      (this.helpers = {}), (this.helpers.IsJsonString = function(t) {
        try {
          JSON.parse(t);
        } catch (t) {
          return !1;
        }
        return !0;
      }), (this.helpers.is_null = function(t) {
        return null === t;
      }), (this.helpers.is_undefined = function(t) {
        return null == t || "" === t || "undefined" === t;
      }), (this.helpers.is_number = function(t) {
        return (t instanceof Number || "number" == typeof t) && !isNaN(t);
      }), (this.helpers.is_true = function(t) {
        return !0 === t || "true" === t;
      }), (this.helpers.is_false = function(t) {
        return !1 === t || "false" === t;
      }), (this.helpers.throttle = function(i, o, n) {
        var s,
          a,
          r,
          l,
          h = 0;
        n || (n = {});
        var d = function() {
            (h =
              !1 === n.leading
                ? 0
                : p.helpers.date_now), (s = null), (l = i.apply(a, r)), s ||
              (a = r = null);
          },
          t = function() {
            var t = p.helpers.date_now;
            h || !1 !== n.leading || (h = t);
            var e = o - (t - h);
            return (a = this), (r = arguments), e <= 0 || o < e
              ? (
                  s && (clearTimeout(s), (s = null)),
                  (h = t),
                  (l = i.apply(a, r)),
                  s || (a = r = null)
                )
              : s || !1 === n.trailing || (s = setTimeout(d, e)), l;
          };
        return (t.cancel = function() {
          clearTimeout(s), (h = 0), (s = a = r = null);
        }), t;
      }), (this.helpers.debounce = function(o, n, s) {
        var a;
        return function() {
          var t = this,
            e = arguments,
            i = s && !a;
          clearTimeout(a), (a = setTimeout(function() {
            (a = null), s || o.apply(t, e);
          }, n)), i && o.apply(t, e);
        };
      }), (this.helpers.isInViewport = function(t) {
        var e = t.getBoundingClientRect(),
          i = document.documentElement,
          o = 0.75 * e.height;
        return (
          e.top >= -o && e.bottom <= (window.innerHeight || i.clientHeight) + o
        );
      }), (this.helpers.date_now =
        Date.now ||
        function() {
          return new Date().getTime();
        }), (this.helpers.hasTouch =
        ("object" == typeof Modernizr && Modernizr.touchevents) ||
        !1), (this.helpers.hasTouchMobile =
        this.helpers.hasTouch &&
        window.matchMedia("(max-width: 1024px)").matches), (this.helpers.ua =
        navigator.userAgent || ""), (this.helpers.is_mobile_ie =
        -1 !== this.helpers.ua.indexOf("IEMobile")), (this.helpers.is_firefox =
        -1 !==
        this.helpers.ua.indexOf("Firefox")), (this.helpers.isAtLeastIE11 = !(
        !this.helpers.ua.match(/Trident/) || this.helpers.ua.match(/MSIE/)
      )), (this.helpers.isIE11 = !(
        !this.helpers.ua.match(/Trident/) || !this.helpers.ua.match(/rv[ :]11/)
      )), (this.helpers.isMac = /^Mac/.test(
        navigator.platform
      )), (this.helpers.is_safari = /^((?!chrome|android).)*safari/i.test(
        this.helpers.ua
      )), (this.helpers.isIE10 = navigator.userAgent.match(
        "MSIE 10"
      )), (this.helpers.isIE9 = navigator.userAgent.match(
        "MSIE 9"
      )), (this.helpers.is_EDGE = /Edge\/12./i.test(
        this.helpers.ua
      )), (this.helpers.is_pb = !this.helpers.is_undefined(window.ZnPbData));
      var e = h("body");
      this.helpers.is_EDGE && e.addClass("is-edge"), this.helpers.isIE11 &&
        e.addClass("is-ie11"), this.helpers.is_safari &&
        e.addClass("is-safari");
    },
    contact_forms: function(t) {
      var l = this;
      (t ? t.find(".zn-contactForm") : h(".zn-contactForm")).each(function(
        t,
        e
      ) {
        var i = h(e),
          o = i.find(".zn-formItem-field--timepicker"),
          n = i.find(".zn-formItem-field--datepicker"),
          s = n.is("[data-datepickerlang]")
            ? n.attr("data-datepickerlang")
            : "",
          a = n.is("[data-dateformat]")
            ? n.attr("data-dateformat")
            : "yy-mm-dd",
          r = o.is("[data-timeformat]") ? o.attr("data-timeformat") : "h:i A";
        0 < o.length &&
          o.timepicker({ timeFormat: r, className: "cf-elm-tp" }), 0 <
          n.length &&
          (
            n
              .datepicker({ dateFormat: a, showOtherMonths: !0 })
              .datepicker("widget")
              .wrap('<div class="ll-skin-melon"/>'),
            "" !== s && h.datepicker.setDefaults(h.datepicker.regional[s])
          ), i.on("submit", function(t) {
          if ((t.preventDefault(), !0 === l.form_submitting)) return !1;
          l.form_submitting = !0;
          var n = h(this),
            e = n.find(".zn_contact_ajax_response:eq(0)"),
            i = !1,
            s = {
              fields: n.find(
                'textarea, select, input[type="text"], input[type="checkbox"], input[type="hidden"]'
              )
            },
            a = e.attr("id"),
            r = n.find(".zn-formSubmit");
          if (
            (
              (l.helpers.isIE11 || l.helpers.isIE10 || l.helpers.isIE9) &&
                n.is('[action="#"]') &&
                n.attr("action", ""),
              r.addClass("zn-contactForm--loading"),
              s.fields.each(function() {
                var t = h(this),
                  e = t.parent();
                t.is(":checkbox") &&
                  (t.is(":checked")
                    ? t.val(!0)
                    : t.val(
                        ""
                      )), e.removeClass("zn-formItem--invalid"), t.hasClass("zn_validate_not_empty") ? (t.is(":checkbox") ? t.is(":checked") || (e.addClass("zn-formItem--invalid"), (i = !0)) : "" === t.val() && (e.addClass("zn-formItem--invalid"), (i = !0))) : t.hasClass("zn_validate_is_email") ? t.val().match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) || (e.addClass("zn-formItem--invalid"), (i = !0)) : t.hasClass("zn_validate_is_numeric") && isNaN(t.val()) && (e.addClass("zn-formItem--invalid"), (i = !0));
              }),
              i
            )
          )
            return r.removeClass(
              "zn-contactForm--loading"
            ), (l.form_submitting = !1);
          var o = n.serialize();
          return h
            .post(n.attr("action"), o)
            .success(function(t) {
              (l.form_submitting = !1), r.removeClass("zn-contactForm--loading");
              var e = h(t).find("#" + a + " > .zn_cf_response"),
                i = h("#" + a),
                o = n.data("redirect");
              i.html(
                e
              ), e.hasClass("alert-success") && (s.fields.val(""), o && window.location.replace(o));
            })
            .error(function() {
              console.log("Error loading page");
            }), !1;
        });
      });
    },
    background_video: function(t) {
      var n = this,
        e = t.find(".zn-videoBg:not(.zn-videoBg--no-init)");
      e.length &&
        e.each(function(t, e) {
          var i = h(e),
            o =
              i.is("[data-video-setup]") &&
              n.helpers.IsJsonString(i.attr("data-video-setup"))
                ? JSON.parse(i.attr("data-video-setup"))
                : {};
          if ("undefined" != typeof video_background)
            new video_background(i, o);
        });
    },
    doParallax: function(t) {
      var e = h(".js-znParallax", h(t));
      0 < e.length &&
        !this.helpers.hasTouchMobile &&
        void 0 !== h.fn.znParallax &&
        e.znParallax();
    },
    doObjectParallax: function(t) {
      if (
        0 < h(".js-doObjParallax", h(t)).length &&
        !this.helpers.hasTouchMobile &&
        !this.helpers.is_mobile_ie &&
        "undefined" != typeof Rellax
      )
        new Rellax(".js-doObjParallax");
    },
    entryAnimations: function(t) {
      var n = this,
        e = h(t).find(".zn-animateInViewport"),
        s = [];
      0 < e.length &&
        e.each(function(t, e) {
          var i = h(e);
          function o() {
            h(e).parent().hasClass("eluida7543286") &&
              console.log(
                n.helpers.isInViewport(e)
              ), !s[t] && n.helpers.isInViewport(e) && (i.removeClass("zn-animateInViewport").addClass("is-animating"), (s[t] = !0));
          }
          i.css(
            "animation-delay",
            i.attr("data-anim-delay")
          ), o(), h(window).on("scroll", o);
        });
    },
    objectFitCover: function(t) {
      function l(t, e, i) {
        if (!t || !e) return !1;
        var o = e.naturalHeight || e.videoHeight,
          n = e.naturalWidth || e.videoWidth,
          s = !1;
        t.offsetWidth / t.offsetHeight <= n / o && (s = !0), i &&
          (s = !s), (e.style.width = s
          ? ((e.style.height = "100%"), "auto")
          : ((e.style.height = "auto"), "100%"));
      }
      function e(t) {
        for (
          var e, i, o, n = document.getElementsByClassName(t), s = 0;
          s < n.length;
          s++
        ) {
          var a = n[s],
            r = a.parentElement;
          l(r, a), (e = r), (i = a), void 0, "hidden" !==
            (o = window.getComputedStyle(e)).overflow &&
            (e.style.overflow = "hidden"), "relative" !== o.position &&
            "absolute" !== o.position &&
            "fixed" !== o.position &&
            (e.style.position = "relative"), (i.style.position =
            "absolute"), (i.style.top = "50%"), (i.style.left =
            "50%"), (i.style.transform = "translate(-50%,-50%)");
        }
      }
      "object" != typeof Modernizr ||
        Modernizr.objectfit ||
        (
          window.addEventListener("load", e("object-fit__cover"), !1),
          window.addEventListener(
            "resize",
            this.helpers.throttle(function() {
              var t,
                e,
                i = document.getElementsByClassName("object-fit__cover");
              for (t = 0; t < i.length; t++) l((e = i[t]).parentElement, e);
            }, 100),
            !1
          )
        ), 0 !== h(".js-object-fit-cover", t).length &&
        (
          window.addEventListener("load", e("js-object-fit-cover"), !1),
          window.addEventListener(
            "resize",
            this.helpers.throttle(function() {
              var t,
                e,
                i = document.getElementsByClassName("js-object-fit-cover");
              for (t = 0; t < i.length; t++) l((e = i[t]).parentElement, e);
            }, 100),
            !1
          )
        );
    }
  }), h(document).ready(function() {
    h.znb_frontend_js = new h.ZnbFrontendJs();
  });
})(jQuery);
var znCaptchaOnloadCallback = function() {
  jQuery(".zn-recaptcha").each(function(t, e) {
    var i = jQuery(e);
    grecaptcha.render(i.attr("id"), {
      sitekey: i.data("sitekey"),
      theme: i.data("colorscheme")
    });
  });
};
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
!(function(t) {
  "use strict";
  var e = jQuery.fn.jquery.split(" ")[0].split(".");
  if (
    (e[0] < 2 && e[1] < 9) ||
    (1 == e[0] && 9 == e[1] && e[2] < 1) ||
    3 < e[0]
  )
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4"
    );
})(), (function(s) {
  "use strict";
  var e = '[data-dismiss="alert"]',
    a = function(t) {
      s(t).on("click", e, this.close);
    };
  (a.VERSION =
    "3.3.7"), (a.TRANSITION_DURATION = 150), (a.prototype.close = function(t) {
    var e = s(this),
      i = e.attr("data-target");
    i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, ""));
    var o = s("#" === i ? [] : i);
    function n() {
      o.detach().trigger("closed.bs.alert").remove();
    }
    t && t.preventDefault(), o.length || (o = e.closest(".alert")), o.trigger(
      (t = s.Event("close.bs.alert"))
    ), t.isDefaultPrevented() ||
      (
        o.removeClass("in"),
        s.support.transition && o.hasClass("fade")
          ? o
              .one("bsTransitionEnd", n)
              .emulateTransitionEnd(a.TRANSITION_DURATION)
          : n()
      );
  });
  var t = s.fn.alert;
  (s.fn.alert = function(i) {
    return this.each(function() {
      var t = s(this),
        e = t.data("bs.alert");
      e ||
        t.data(
          "bs.alert",
          (e = new a(this))
        ), "string" == typeof i && e[i].call(t);
    });
  }), (s.fn.alert.Constructor = a), (s.fn.alert.noConflict = function() {
    return (s.fn.alert = t), this;
  }), s(document).on("click.bs.alert.data-api", e, a.prototype.close);
})(jQuery), (function(s) {
  "use strict";
  var n = function(t, e) {
    (this.$element = s(t)), (this.options = s.extend(
      {},
      n.DEFAULTS,
      e
    )), (this.isLoading = !1);
  };
  function i(o) {
    return this.each(function() {
      var t = s(this),
        e = t.data("bs.button"),
        i = "object" == typeof o && o;
      e ||
        t.data(
          "bs.button",
          (e = new n(this, i))
        ), "toggle" == o ? e.toggle() : o && e.setState(o);
    });
  }
  (n.VERSION = "3.3.7"), (n.DEFAULTS = {
    loadingText: "loading..."
  }), (n.prototype.setState = function(t) {
    var e = "disabled",
      i = this.$element,
      o = i.is("input") ? "val" : "html",
      n = i.data();
    (t += "Text"), null == n.resetText &&
      i.data("resetText", i[o]()), setTimeout(
      s.proxy(function() {
        i[o](
          null == n[t] ? this.options[t] : n[t]
        ), "loadingText" == t ? ((this.isLoading = !0), i.addClass(e).attr(e, e).prop(e, !0)) : this.isLoading && ((this.isLoading = !1), i.removeClass(e).removeAttr(e).prop(e, !1));
      }, this),
      0
    );
  }), (n.prototype.toggle = function() {
    var t = !0,
      e = this.$element.closest('[data-toggle="buttons"]');
    if (e.length) {
      var i = this.$element.find("input");
      "radio" == i.prop("type")
        ? (
            i.prop("checked") && (t = !1),
            e.find(".active").removeClass("active"),
            this.$element.addClass("active")
          )
        : "checkbox" == i.prop("type") &&
          (
            i.prop("checked") !== this.$element.hasClass("active") && (t = !1),
            this.$element.toggleClass("active")
          ), i.prop("checked", this.$element.hasClass("active")), t &&
        i.trigger("change");
    } else
      this.$element.attr(
        "aria-pressed",
        !this.$element.hasClass("active")
      ), this.$element.toggleClass("active");
  });
  var t = s.fn.button;
  (s.fn.button = i), (s.fn.button.Constructor = n), (s.fn.button.noConflict = function() {
    return (s.fn.button = t), this;
  }), s(document)
    .on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
      var e = s(t.target).closest(".btn");
      i.call(
        e,
        "toggle"
      ), s(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), e.is("input,button") ? e.trigger("focus") : e.find("input:visible,button:visible").first().trigger("focus"));
    })
    .on(
      "focus.bs.button.data-api blur.bs.button.data-api",
      '[data-toggle^="button"]',
      function(t) {
        s(t.target)
          .closest(".btn")
          .toggleClass("focus", /^focus(in)?$/.test(t.type));
      }
    );
})(jQuery), (function(a) {
  "use strict";
  var r = '[data-toggle="dropdown"]',
    o = function(t) {
      a(t).on("click.bs.dropdown", this.toggle);
    };
  function l(t) {
    var e = t.attr("data-target");
    e ||
      (e =
        (e = t.attr("href")) &&
        /#[A-Za-z]/.test(e) &&
        e.replace(/.*(?=#[^\s]*$)/, ""));
    var i = e && a(e);
    return i && i.length ? i : t.parent();
  }
  function s(o) {
    (o && 3 === o.which) ||
      (
        a(".dropdown-backdrop").remove(),
        a(r).each(function() {
          var t = a(this),
            e = l(t),
            i = { relatedTarget: this };
          e.hasClass("open") &&
            ((o &&
              "click" == o.type &&
              /input|textarea/i.test(o.target.tagName) &&
              a.contains(e[0], o.target)) ||
              (
                e.trigger((o = a.Event("hide.bs.dropdown", i))),
                o.isDefaultPrevented() ||
                  (
                    t.attr("aria-expanded", "false"),
                    e
                      .removeClass("open")
                      .trigger(a.Event("hidden.bs.dropdown", i))
                  )
              ));
        })
      );
  }
  (o.VERSION = "3.3.7"), (o.prototype.toggle = function(t) {
    var e = a(this);
    if (!e.is(".disabled, :disabled")) {
      var i = l(e),
        o = i.hasClass("open");
      if ((s(), !o)) {
        "ontouchstart" in document.documentElement &&
          !i.closest(".navbar-nav").length &&
          a(document.createElement("div"))
            .addClass("dropdown-backdrop")
            .insertAfter(a(this))
            .on("click", s);
        var n = { relatedTarget: this };
        if (
          (
            i.trigger((t = a.Event("show.bs.dropdown", n))),
            t.isDefaultPrevented()
          )
        )
          return;
        e.trigger("focus").attr("aria-expanded", "true"), i
          .toggleClass("open")
          .trigger(a.Event("shown.bs.dropdown", n));
      }
      return !1;
    }
  }), (o.prototype.keydown = function(t) {
    if (
      /(38|40|27|32)/.test(t.which) &&
      !/input|textarea/i.test(t.target.tagName)
    ) {
      var e = a(this);
      if (
        (t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))
      ) {
        var i = l(e),
          o = i.hasClass("open");
        if ((!o && 27 != t.which) || (o && 27 == t.which))
          return 27 == t.which && i.find(r).trigger("focus"), e.trigger(
            "click"
          );
        var n = i.find(".dropdown-menu li:not(.disabled):visible a");
        if (n.length) {
          var s = n.index(t.target);
          38 == t.which && 0 < s && s--, 40 == t.which &&
            s < n.length - 1 &&
            s++, ~s || (s = 0), n.eq(s).trigger("focus");
        }
      }
    }
  });
  var t = a.fn.dropdown;
  (a.fn.dropdown = function(i) {
    return this.each(function() {
      var t = a(this),
        e = t.data("bs.dropdown");
      e ||
        t.data(
          "bs.dropdown",
          (e = new o(this))
        ), "string" == typeof i && e[i].call(t);
    });
  }), (a.fn.dropdown.Constructor = o), (a.fn.dropdown.noConflict = function() {
    return (a.fn.dropdown = t), this;
  }), a(document)
    .on("click.bs.dropdown.data-api", s)
    .on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
      t.stopPropagation();
    })
    .on("click.bs.dropdown.data-api", r, o.prototype.toggle)
    .on("keydown.bs.dropdown.data-api", r, o.prototype.keydown)
    .on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown);
})(jQuery), (function(m) {
  "use strict";
  var v = function(t, e) {
    (this.type = null), (this.options = null), (this.enabled = null), (this.timeout = null), (this.hoverState = null), (this.$element = null), (this.inState = null), this.init(
      "tooltip",
      t,
      e
    );
  };
  (v.VERSION = "3.3.7"), (v.TRANSITION_DURATION = 150), (v.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template:
      '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: { selector: "body", padding: 0 }
  }), (v.prototype.init = function(t, e, i) {
    if (
      (
        (this.enabled = !0),
        (this.type = t),
        (this.$element = m(e)),
        (this.options = this.getOptions(i)),
        (this.$viewport =
          this.options.viewport &&
          m(
            m.isFunction(this.options.viewport)
              ? this.options.viewport.call(this, this.$element)
              : this.options.viewport.selector || this.options.viewport
          )),
        (this.inState = { click: !1, hover: !1, focus: !1 }),
        this.$element[0] instanceof document.constructor &&
          !this.options.selector
      )
    )
      throw new Error(
        "`selector` option must be specified when initializing " +
          this.type +
          " on the window.document object!"
      );
    for (var o = this.options.trigger.split(" "), n = o.length; n--; ) {
      var s = o[n];
      if ("click" == s)
        this.$element.on(
          "click." + this.type,
          this.options.selector,
          m.proxy(this.toggle, this)
        );
      else if ("manual" != s) {
        var a = "hover" == s ? "mouseenter" : "focusin",
          r = "hover" == s ? "mouseleave" : "focusout";
        this.$element.on(
          a + "." + this.type,
          this.options.selector,
          m.proxy(this.enter, this)
        ), this.$element.on(
          r + "." + this.type,
          this.options.selector,
          m.proxy(this.leave, this)
        );
      }
    }
    this.options.selector
      ? (this._options = m.extend({}, this.options, {
          trigger: "manual",
          selector: ""
        }))
      : this.fixTitle();
  }), (v.prototype.getDefaults = function() {
    return v.DEFAULTS;
  }), (v.prototype.getOptions = function(t) {
    return (t = m.extend({}, this.getDefaults(), this.$element.data(), t))
      .delay &&
      "number" == typeof t.delay &&
      (t.delay = { show: t.delay, hide: t.delay }), t;
  }), (v.prototype.getDelegateOptions = function() {
    var i = {},
      o = this.getDefaults();
    return this._options &&
      m.each(this._options, function(t, e) {
        o[t] != e && (i[t] = e);
      }), i;
  }), (v.prototype.enter = function(t) {
    var e =
      t instanceof this.constructor
        ? t
        : m(t.currentTarget).data("bs." + this.type);
    if (
      (
        e ||
          (
            (e = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            m(t.currentTarget).data("bs." + this.type, e)
          ),
        t instanceof m.Event &&
          (e.inState["focusin" == t.type ? "focus" : "hover"] = !0),
        e.tip().hasClass("in") || "in" == e.hoverState
      )
    )
      e.hoverState = "in";
    else {
      if (
        (
          clearTimeout(e.timeout),
          (e.hoverState = "in"),
          !e.options.delay || !e.options.delay.show
        )
      )
        return e.show();
      e.timeout = setTimeout(function() {
        "in" == e.hoverState && e.show();
      }, e.options.delay.show);
    }
  }), (v.prototype.isInStateTrue = function() {
    for (var t in this.inState) if (this.inState[t]) return !0;
    return !1;
  }), (v.prototype.leave = function(t) {
    var e =
      t instanceof this.constructor
        ? t
        : m(t.currentTarget).data("bs." + this.type);
    if (
      (
        e ||
          (
            (e = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            m(t.currentTarget).data("bs." + this.type, e)
          ),
        t instanceof m.Event &&
          (e.inState["focusout" == t.type ? "focus" : "hover"] = !1),
        !e.isInStateTrue()
      )
    ) {
      if (
        (
          clearTimeout(e.timeout),
          (e.hoverState = "out"),
          !e.options.delay || !e.options.delay.hide
        )
      )
        return e.hide();
      e.timeout = setTimeout(function() {
        "out" == e.hoverState && e.hide();
      }, e.options.delay.hide);
    }
  }), (v.prototype.show = function() {
    var t = m.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(t);
      var e = m.contains(
        this.$element[0].ownerDocument.documentElement,
        this.$element[0]
      );
      if (t.isDefaultPrevented() || !e) return;
      var i = this,
        o = this.tip(),
        n = this.getUID(this.type);
      this.setContent(), o.attr("id", n), this.$element.attr(
        "aria-describedby",
        n
      ), this.options.animation && o.addClass("fade");
      var s =
          "function" == typeof this.options.placement
            ? this.options.placement.call(this, o[0], this.$element[0])
            : this.options.placement,
        a = /\s?auto?\s?/i,
        r = a.test(s);
      r && (s = s.replace(a, "") || "top"), o
        .detach()
        .css({ top: 0, left: 0, display: "block" })
        .addClass(s)
        .data("bs." + this.type, this), this.options.container
        ? o.appendTo(this.options.container)
        : o.insertAfter(this.$element), this.$element.trigger(
        "inserted.bs." + this.type
      );
      var l = this.getPosition(),
        h = o[0].offsetWidth,
        d = o[0].offsetHeight;
      if (r) {
        var p = s,
          c = this.getPosition(this.$viewport);
        (s =
          "bottom" == s && l.bottom + d > c.bottom
            ? "top"
            : "top" == s && l.top - d < c.top
              ? "bottom"
              : "right" == s && l.right + h > c.width
                ? "left"
                : "left" == s && l.left - h < c.left
                  ? "right"
                  : s), o.removeClass(p).addClass(s);
      }
      var u = this.getCalculatedOffset(s, l, h, d);
      this.applyPlacement(u, s);
      var f = function() {
        var t = i.hoverState;
        i.$element.trigger(
          "shown.bs." + i.type
        ), (i.hoverState = null), "out" == t && i.leave(i);
      };
      m.support.transition && this.$tip.hasClass("fade")
        ? o
            .one("bsTransitionEnd", f)
            .emulateTransitionEnd(v.TRANSITION_DURATION)
        : f();
    }
  }), (v.prototype.applyPlacement = function(t, e) {
    var i = this.tip(),
      o = i[0].offsetWidth,
      n = i[0].offsetHeight,
      s = parseInt(i.css("margin-top"), 10),
      a = parseInt(i.css("margin-left"), 10);
    isNaN(s) && (s = 0), isNaN(a) &&
      (a = 0), (t.top += s), (t.left += a), m.offset.setOffset(
      i[0],
      m.extend(
        {
          using: function(t) {
            i.css({ top: Math.round(t.top), left: Math.round(t.left) });
          }
        },
        t
      ),
      0
    ), i.addClass("in");
    var r = i[0].offsetWidth,
      l = i[0].offsetHeight;
    "top" == e && l != n && (t.top = t.top + n - l);
    var h = this.getViewportAdjustedDelta(e, t, r, l);
    h.left ? (t.left += h.left) : (t.top += h.top);
    var d = /top|bottom/.test(e),
      p = d ? 2 * h.left - o + r : 2 * h.top - n + l,
      c = d ? "offsetWidth" : "offsetHeight";
    i.offset(t), this.replaceArrow(p, i[0][c], d);
  }), (v.prototype.replaceArrow = function(t, e, i) {
    this.arrow()
      .css(i ? "left" : "top", 50 * (1 - t / e) + "%")
      .css(i ? "top" : "left", "");
  }), (v.prototype.setContent = function() {
    var t = this.tip(),
      e = this.getTitle();
    t
      .find(".tooltip-inner")
      [this.options.html ? "html" : "text"](e), t.removeClass(
      "fade in top bottom left right"
    );
  }), (v.prototype.hide = function(t) {
    var e = this,
      i = m(this.$tip),
      o = m.Event("hide.bs." + this.type);
    function n() {
      "in" != e.hoverState && i.detach(), e.$element &&
        e.$element
          .removeAttr("aria-describedby")
          .trigger("hidden.bs." + e.type), t && t();
    }
    if ((this.$element.trigger(o), !o.isDefaultPrevented()))
      return i.removeClass("in"), m.support.transition && i.hasClass("fade")
        ? i
            .one("bsTransitionEnd", n)
            .emulateTransitionEnd(v.TRANSITION_DURATION)
        : n(), (this.hoverState = null), this;
  }), (v.prototype.fixTitle = function() {
    var t = this.$element;
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) &&
      t.attr("data-original-title", t.attr("title") || "").attr("title", "");
  }), (v.prototype.hasContent = function() {
    return this.getTitle();
  }), (v.prototype.getPosition = function(t) {
    var e = (t = t || this.$element)[0],
      i = "BODY" == e.tagName,
      o = e.getBoundingClientRect();
    null == o.width &&
      (o = m.extend({}, o, {
        width: o.right - o.left,
        height: o.bottom - o.top
      }));
    var n = window.SVGElement && e instanceof window.SVGElement,
      s = i ? { top: 0, left: 0 } : n ? null : t.offset(),
      a = {
        scroll: i
          ? document.documentElement.scrollTop || document.body.scrollTop
          : t.scrollTop()
      },
      r = i ? { width: m(window).width(), height: m(window).height() } : null;
    return m.extend({}, o, a, r, s);
  }), (v.prototype.getCalculatedOffset = function(t, e, i, o) {
    return "bottom" == t
      ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 }
      : "top" == t
        ? { top: e.top - o, left: e.left + e.width / 2 - i / 2 }
        : "left" == t
          ? { top: e.top + e.height / 2 - o / 2, left: e.left - i }
          : { top: e.top + e.height / 2 - o / 2, left: e.left + e.width };
  }), (v.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
    var n = { top: 0, left: 0 };
    if (!this.$viewport) return n;
    var s = (this.options.viewport && this.options.viewport.padding) || 0,
      a = this.getPosition(this.$viewport);
    if (/right|left/.test(t)) {
      var r = e.top - s - a.scroll,
        l = e.top + s - a.scroll + o;
      r < a.top
        ? (n.top = a.top - r)
        : l > a.top + a.height && (n.top = a.top + a.height - l);
    } else {
      var h = e.left - s,
        d = e.left + s + i;
      h < a.left
        ? (n.left = a.left - h)
        : d > a.right && (n.left = a.left + a.width - d);
    }
    return n;
  }), (v.prototype.getTitle = function() {
    var t = this.$element,
      e = this.options;
    return (
      t.attr("data-original-title") ||
      ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    );
  }), (v.prototype.getUID = function(t) {
    for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
    return t;
  }), (v.prototype.tip = function() {
    if (
      !this.$tip &&
      ((this.$tip = m(this.options.template)), 1 != this.$tip.length)
    )
      throw new Error(
        this.type +
          " `template` option must consist of exactly 1 top-level element!"
      );
    return this.$tip;
  }), (v.prototype.arrow = function() {
    return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
  }), (v.prototype.enable = function() {
    this.enabled = !0;
  }), (v.prototype.disable = function() {
    this.enabled = !1;
  }), (v.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled;
  }), (v.prototype.toggle = function(t) {
    var e = this;
    t &&
      ((e = m(t.currentTarget).data("bs." + this.type)) ||
        (
          (e = new this.constructor(
            t.currentTarget,
            this.getDelegateOptions()
          )),
          m(t.currentTarget).data("bs." + this.type, e)
        )), t
      ? (
          (e.inState.click = !e.inState.click),
          e.isInStateTrue() ? e.enter(e) : e.leave(e)
        )
      : e.tip().hasClass("in") ? e.leave(e) : e.enter(e);
  }), (v.prototype.destroy = function() {
    var t = this;
    clearTimeout(this.timeout), this.hide(function() {
      t.$element
        .off("." + t.type)
        .removeData(
          "bs." + t.type
        ), t.$tip && t.$tip.detach(), (t.$tip = null), (t.$arrow = null), (t.$viewport = null), (t.$element = null);
    });
  });
  var t = m.fn.tooltip;
  (m.fn.tooltip = function(o) {
    return this.each(function() {
      var t = m(this),
        e = t.data("bs.tooltip"),
        i = "object" == typeof o && o;
      (!e && /destroy|hide/.test(o)) ||
        (
          e || t.data("bs.tooltip", (e = new v(this, i))),
          "string" == typeof o && e[o]()
        );
    });
  }), (m.fn.tooltip.Constructor = v), (m.fn.tooltip.noConflict = function() {
    return (m.fn.tooltip = t), this;
  });
})(jQuery), (function(r) {
  "use strict";
  var a = function(t) {
    this.element = r(t);
  };
  function e(i) {
    return this.each(function() {
      var t = r(this),
        e = t.data("bs.tab");
      e || t.data("bs.tab", (e = new a(this))), "string" == typeof i && e[i]();
    });
  }
  (a.VERSION =
    "3.3.7"), (a.TRANSITION_DURATION = 150), (a.prototype.show = function() {
    var t = this.element,
      e = t.closest("ul:not(.dropdown-menu)"),
      i = t.data("target");
    if (
      (
        i || (i = (i = t.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")),
        !t.parent("li").hasClass("active")
      )
    ) {
      var o = e.find(".active:last a"),
        n = r.Event("hide.bs.tab", { relatedTarget: t[0] }),
        s = r.Event("show.bs.tab", { relatedTarget: o[0] });
      if (
        (
          o.trigger(n),
          t.trigger(s),
          !s.isDefaultPrevented() && !n.isDefaultPrevented()
        )
      ) {
        var a = r(i);
        this.activate(
          t.closest("li"),
          e
        ), this.activate(a, a.parent(), function() {
          o.trigger({
            type: "hidden.bs.tab",
            relatedTarget: t[0]
          }), t.trigger({ type: "shown.bs.tab", relatedTarget: o[0] });
        });
      }
    }
  }), (a.prototype.activate = function(t, e, i) {
    var o = e.find("> .active"),
      n =
        i &&
        r.support.transition &&
        ((o.length && o.hasClass("fade")) || !!e.find("> .fade").length);
    function s() {
      o
        .removeClass("active")
        .find("> .dropdown-menu > .active")
        .removeClass("active")
        .end()
        .find('[data-toggle="tab"]')
        .attr("aria-expanded", !1), t
        .addClass("active")
        .find('[data-toggle="tab"]')
        .attr("aria-expanded", !0), n
        ? (t[0].offsetWidth, t.addClass("in"))
        : t.removeClass("fade"), t.parent(".dropdown-menu").length &&
        t
          .closest("li.dropdown")
          .addClass("active")
          .end()
          .find('[data-toggle="tab"]')
          .attr("aria-expanded", !0), i && i();
    }
    o.length && n
      ? o.one("bsTransitionEnd", s).emulateTransitionEnd(a.TRANSITION_DURATION)
      : s(), o.removeClass("in");
  });
  var t = r.fn.tab;
  (r.fn.tab = e), (r.fn.tab.Constructor = a), (r.fn.tab.noConflict = function() {
    return (r.fn.tab = t), this;
  });
  var i = function(t) {
    t.preventDefault(), e.call(r(this), "show");
  };
  r(document)
    .on("click.bs.tab.data-api", '[data-toggle="tab"]', i)
    .on("click.bs.tab.data-api", '[data-toggle="pill"]', i);
})(jQuery), (function(a) {
  "use strict";
  var r = function(t, e) {
    (this.$element = a(t)), (this.options = a.extend(
      {},
      r.DEFAULTS,
      e
    )), (this.$trigger = a(
      '[data-toggle="collapse"][href="#' +
        t.id +
        '"],[data-toggle="collapse"][data-target="#' +
        t.id +
        '"]'
    )), (this.transitioning = null), this.options.parent
      ? (this.$parent = this.getParent())
      : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this
      .options.toggle && this.toggle();
  };
  function n(t) {
    var e,
      i =
        t.attr("data-target") ||
        ((e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""));
    return a(i);
  }
  function l(o) {
    return this.each(function() {
      var t = a(this),
        e = t.data("bs.collapse"),
        i = a.extend({}, r.DEFAULTS, t.data(), "object" == typeof o && o);
      !e &&
        i.toggle &&
        /show|hide/.test(o) &&
        (i.toggle = !1), e || t.data("bs.collapse", (e = new r(this, i))), "string" == typeof o && e[o]();
    });
  }
  (r.VERSION = "3.3.7"), (r.TRANSITION_DURATION = 350), (r.DEFAULTS = {
    toggle: !0
  }), (r.prototype.dimension = function() {
    return this.$element.hasClass("width") ? "width" : "height";
  }), (r.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var t,
        e =
          this.$parent &&
          this.$parent.children(".panel").children(".in, .collapsing");
      if (!(e && e.length && (t = e.data("bs.collapse")) && t.transitioning)) {
        var i = a.Event("show.bs.collapse");
        if ((this.$element.trigger(i), !i.isDefaultPrevented())) {
          e &&
            e.length &&
            (l.call(e, "hide"), t || e.data("bs.collapse", null));
          var o = this.dimension();
          this.$element
            .removeClass("collapse")
            .addClass("collapsing")
            [o](0)
            .attr("aria-expanded", !0), this.$trigger
            .removeClass("collapsed")
            .attr("aria-expanded", !0), (this.transitioning = 1);
          var n = function() {
            this.$element
              .removeClass("collapsing")
              .addClass("collapse in")
              [o](""), (this.transitioning = 0), this.$element.trigger(
              "shown.bs.collapse"
            );
          };
          if (!a.support.transition) return n.call(this);
          var s = a.camelCase(["scroll", o].join("-"));
          this.$element
            .one("bsTransitionEnd", a.proxy(n, this))
            .emulateTransitionEnd(r.TRANSITION_DURATION)
            [o](this.$element[0][s]);
        }
      }
    }
  }), (r.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var t = a.Event("hide.bs.collapse");
      if ((this.$element.trigger(t), !t.isDefaultPrevented())) {
        var e = this.dimension();
        this.$element[e](this.$element[e]())[0]
          .offsetHeight, this.$element
          .addClass("collapsing")
          .removeClass("collapse in")
          .attr("aria-expanded", !1), this.$trigger
          .addClass("collapsed")
          .attr("aria-expanded", !1), (this.transitioning = 1);
        var i = function() {
          (this.transitioning = 0), this.$element
            .removeClass("collapsing")
            .addClass("collapse")
            .trigger("hidden.bs.collapse");
        };
        if (!a.support.transition) return i.call(this);
        this.$element
          [e](0)
          .one("bsTransitionEnd", a.proxy(i, this))
          .emulateTransitionEnd(r.TRANSITION_DURATION);
      }
    }
  }), (r.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }), (r.prototype.getParent = function() {
    return a(this.options.parent)
      .find(
        '[data-toggle="collapse"][data-parent="' + this.options.parent + '"]'
      )
      .each(
        a.proxy(function(t, e) {
          var i = a(e);
          this.addAriaAndCollapsedClass(n(i), i);
        }, this)
      )
      .end();
  }), (r.prototype.addAriaAndCollapsedClass = function(t, e) {
    var i = t.hasClass("in");
    t.attr("aria-expanded", i), e
      .toggleClass("collapsed", !i)
      .attr("aria-expanded", i);
  });
  var t = a.fn.collapse;
  (a.fn.collapse = l), (a.fn.collapse.Constructor = r), (a.fn.collapse.noConflict = function() {
    return (a.fn.collapse = t), this;
  }), a(
    document
  ).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
    var e = a(this);
    e.attr("data-target") || t.preventDefault();
    var i = n(e),
      o = i.data("bs.collapse") ? "toggle" : e.data();
    l.call(i, o);
  });
})(jQuery), (function(o) {
  "use strict";
  (o.fn.emulateTransitionEnd = function(t) {
    var e = !1,
      i = this;
    o(this).one("bsTransitionEnd", function() {
      e = !0;
    });
    return setTimeout(function() {
      e || o(i).trigger(o.support.transition.end);
    }, t), this;
  }), o(function() {
    (o.support.transition = (function() {
      var t = document.createElement("bootstrap"),
        e = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
        };
      for (var i in e) if (void 0 !== t.style[i]) return { end: e[i] };
      return !1;
    })()), o.support.transition &&
      (o.event.special.bsTransitionEnd = {
        bindType: o.support.transition.end,
        delegateType: o.support.transition.end,
        handle: function(t) {
          if (o(t.target).is(this))
            return t.handleObj.handler.apply(this, arguments);
        }
      });
  });
})(jQuery), (function() {
  if (null != jQuery) {
    var t,
      n = jQuery,
      e =
        -1 != (t = navigator.userAgent.toLowerCase()).indexOf("msie") &&
        parseInt(t.split("msie")[1]),
      o = 0,
      s = 0,
      i = 0;
    jQuery.fn.extend({
      ensureLoad: function(t) {
        return this.each(function() {
          this.complete || 4 === this.readyState
            ? t.call(this)
            : "uninitialized" === this.readyState &&
              0 === this.src.indexOf("data:")
              ? (n(this).trigger("error"), t.call(this))
              : (
                  n(this).one("load", t),
                  e &&
                    null != this.src &&
                    -1 == this.src.indexOf("?") &&
                    (this.src = this.src + "?" + new Date().getTime())
                );
        });
      }
    }), (video_background = function(t, e) {
      (this.hidden = !1), (this.$holder = t), (this.isVimeoPlaying = !0), (this.isVimeoMute = 1), (this.id =
        "video_background_video_" + o), o++, (this.parameters = {
        position: "absolute",
        "z-index": "-1",
        video_ratio: !1,
        loop: !0,
        autoplay: !0,
        muted: !1,
        mp4: !1,
        webm: !1,
        ogg: !1,
        youtube: !1,
        vimeo: !1,
        controls: 1,
        controls_position: "bottom-right",
        priority: "html5",
        fallback_image: !1,
        sizing: "fill",
        start: 0,
        video_overlay: 0,
        mobile_play: "no",
        tranitionIn: !0
      }), n.each(
        e,
        n.proxy(function(t, e) {
          this.parameters[t] = e;
        }, this)
      ), (this.$video_holder = n(
        '<div id="' + this.id + '" class="evb-video-holder"></div>'
      )
        .appendTo(t)
        .css({
          "z-index": this.parameters["z-index"],
          position: this.parameters.position,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden"
        })), (this.ismobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      )), (this.decision = "image");
      var i = ZionBuilderFrontend.allow_video_on_mobile;
      return (this.ismobile && !i) ||
        (
          (this.decision = this.parameters.priority),
          !1 !== this.parameters.youtube
            ? (this.decision = "youtube")
            : !1 !== this.parameters.vimeo
              ? (this.decision = "vimeo")
              : (this.decision = "html5")
        ), "image" == this.decision
        ? this.make_image()
        : "youtube" == this.decision
          ? this.make_youtube()
          : "vimeo" == this.decision
            ? this.make_vimeo()
            : this.make_video(), this;
    }), (video_background.prototype = {
      make_video: function() {
        var t =
            (this.parameters.autoplay ? "autoplay " : "") +
            (this.parameters.loop ? 'loop onended="this.play()" ' : ""),
          e =
            '<video width="100%" height="100%" ' +
            (t += this.parameters.muted ? " muted " : "") +
            ">";
        !1 !== this.parameters.mp4 &&
          (e +=
            '<source src="' +
            this.parameters.mp4 +
            '" type="video/mp4"></source>'), !1 !== this.parameters.webm &&
          (e +=
            '<source src="' +
            this.parameters.webm +
            '" type="video/webm"></source>'), !1 !== this.parameters.ogg &&
          (e +=
            '<source src="' +
            this.parameters.ogg +
            '" type="video/ogg"></source>'), (e +=
          "</video>"), (this.$video = n(e).addClass(
          "object-fit__cover"
        )), this.$video_holder.append(
          this.$video
        ), (this.video = this.$video.get(0)), "object" != typeof Modernizr ||
        Modernizr.objectfit
          ? this.$video.css({ width: "100%", height: "100%" })
          : !1 !== this.parameters.video_ratio &&
            (
              (this.resize_timeout = !1),
              n(window).resize(
                n.proxy(function() {
                  clearTimeout(
                    this.resize_timeout
                  ), (this.resize_timeout = setTimeout(n.proxy(this.video_resize, this), 10));
                }, this)
              ),
              this.video_resize()
            ), this.$video_holder
          .closest(".zn-videoBg")
          .addClass("is-loaded"), this.parameters.muted && this.mute(), this
          .parameters.controls && this.make_controls();
      },
      video_resize: function(t) {
        this.$video =
          void 0 !== t && !0 === t
            ? this.$video.children("iframe")
            : this.$video;
        var e = this.$video_holder.width(),
          i = this.$video_holder.height(),
          o = e,
          n = e / this.parameters.video_ratio;
        n < i && (o = (n = i) * this.parameters.video_ratio), (n = Math.ceil(
          n
        )), (o = Math.ceil(o));
        var s = Math.round(i / 2 - n / 2),
          a = Math.round(e / 2 - o / 2);
        this.$video.attr("width", o), this.$video.attr(
          "height",
          n
        ), this.$video.css({
          position: "absolute",
          top: s + "px",
          left: a + "px"
        });
      },
      make_youtube: function() {
        var t = n("html"),
          e = {
            loop: this.parameters.loop ? 1 : 0,
            start: this.parameters.start,
            autoplay: this.parameters.autoplay ? 1 : 0,
            controls: 0,
            showinfo: 0,
            wmode: "transparent",
            iv_load_policy: 3,
            modestbranding: 1,
            rel: 0,
            mute: this.parameters.muted ? 1 : 0
          };
        if (
          (
            this.parameters.loop && (e.playlist = this.parameters.youtube),
            (this.$video = n(
              '<iframe id="' +
                this.id +
                '_yt" allowfullscreen="allowfullscreen" width="640" height="360" src="https://www.youtube.com/embed/' +
                this.parameters.youtube +
                "?enablejsapi=1&" +
                n.param(e) +
                '" frameborder="0"></iframe>'
            )
              .appendTo(this.$video_holder)
              .css({ position: "absolute" })),
            (this.youtube_ready = !1),
            0 == s
          )
        ) {
          var i = document.createElement("script");
          i.src = "https://www.youtube.com/iframe_api";
          var o = document.getElementsByTagName("script")[0];
          o.parentNode.insertBefore(
            i,
            o
          ), (s = 1), (window.onYouTubeIframeAPIReady = n.proxy(function() {
            t.trigger("yt_loaded"), this.build_youtube(), (s = 2);
          }, this));
        } else
          1 == s
            ? t.bind("yt_loaded", n.proxy(this.build_youtube, this))
            : 2 == s && this.build_youtube();
      },
      build_youtube: function() {
        this.player = new YT.Player(this.id + "_yt", {
          height: "100%",
          width: "100%",
          videoId: this.parameters.youtube,
          events: { onReady: n.proxy(this.youtube_ready_fun, this) }
        });
      },
      youtube_ready_fun: function(t) {
        (this.youtube_ready = !0), (this.$video = n(
          "#" + this.id + "_yt"
        )), this.$video_holder
          .closest(".zn-videoBg")
          .addClass("is-loaded"), !1 !== this.parameters.video_ratio &&
          (
            (this.resize_timeout = !1),
            n(window).resize(
              n.proxy(function() {
                clearTimeout(
                  this.resize_timeout
                ), (this.resize_timeout = setTimeout(n.proxy(this.video_resize, this), 10));
              }, this)
            ),
            this.video_resize()
          ), this.parameters.muted && this.mute(), this.parameters.controls &&
          this.make_controls();
      },
      make_vimeo: function() {
        n("html");
        (this.$video = n('<div id="' + this.id + '_vm"></div>')
          .appendTo(this.$video_holder)
          .css({
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          })), (this.vimeo_ready = !1), 0 === i
          ? n.getScript(
              "//player.vimeo.com/api/player.js",
              n.proxy(function() {
                this.build_vimeo(), (i = 1);
              }, this)
            )
          : 1 == i && this.build_vimeo();
      },
      build_vimeo: function() {
        console.log(this.parameters);
        var t = {
          id: this.parameters.vimeo,
          loop: this.parameters.loop ? 1 : 0,
          autoplay: this.parameters.autoplay ? 1 : 0,
          muted: this.parameters.muted ? 1 : 0
        };
        this.player = new Vimeo.Player(this.id + "_vm", t);
        var e = this;
        this.player.on("loaded", function() {
          e.vimeo_ready_fun();
        }), this.player.on("play", function() {
          e.isVimeoPlaying = !0;
        }), this.player.on("pause", function() {
          e.isVimeoPlaying = !1;
        }), this.player.getPaused().then(function(t) {
          e.isVimeoPlaying = !t;
        }), this.player.on("volumechange", function(t) {
          e.isVimeoMute = 0 === t.volume;
        });
      },
      vimeo_ready_fun: function(t) {
        (this.vimeo_ready = !0), (this.$video = n(
          "#" + this.id + "_vm"
        )), this.$video_holder
          .closest(".zn-videoBg")
          .addClass("is-loaded"), !1 !== this.parameters.video_ratio &&
          (
            (this.resize_timeout = !1),
            n(window).resize(
              n.proxy(function() {
                clearTimeout(
                  this.resize_timeout
                ), (this.resize_timeout = setTimeout(n.proxy(this.video_resize, this), 10));
              }, this)
            ),
            this.video_resize(!0)
          ), this.parameters.start &&
          this.player.setCurrentTime(this.parameters.start), this.parameters
          .muted && ((this.isVimeoMute = !0), this.mute()), this.parameters
          .controls && this.make_controls();
      },
      make_controls: function() {
        var t,
          e = this;
        (t =
          '<ul class="zn-videoBg-controls" data-position="' +
          this.parameters.controls_position +
          '">'), (t +=
          '<li><a href="#" class="btn-toggleplay zn-videoBg-controls-toggleplay">'), (t +=
          '<i class="kl-icon glyphicon glyphicon-play circled-icon ' +
          (this.isPlaying() ? "" : "paused") +
          '"></i>'), (t += "</a></li>"), (t +=
          '<li><a href="#" class="btn-audio zn-videoBg-controls-togglemute">'), (t +=
          '<i class="kl-icon glyphicon glyphicon-volume-up circled-icon ci-xsmall ' +
          (this.parameters.muted ? "mute" : "") +
          '"></i>'), (t += "</a></li>"), n((t += "</ul>")).appendTo(
          this.$video_holder
        ), this.$video_holder.find(".btn-toggleplay").on("click", function(t) {
          t.preventDefault(), e.toggle_play(), n(this).children("i").toggleClass("paused");
        }), this.$video_holder.find(".btn-audio").on("click", function(t) {
          t.preventDefault(), e.toggle_mute(), n(this).children("i").toggleClass("mute");
        });
      },
      make_image: function() {
        !1 !== this.parameters.fallback_image &&
          "" != this.parameters.fallback_image &&
          (
            (this.$img = n(
              '<img src="' +
                this.parameters.fallback_image +
                '" class="cover-fit-img" />'
            )
              .appendTo(this.$video_holder)
              .css({ position: "absolute" })),
            "object" != typeof Modernizr || Modernizr.objectfit
              ? this.$img.css({ width: "100%", height: "100%" })
              : this.$img.ensureLoad(n.proxy(this.image_loaded, this)),
            this.$video_holder.closest(".zn-videoBg").addClass("is-loaded")
          );
      },
      image_loaded: function() {
        (this.original_width = this.$img.width()), (this.original_height = this.$img.height()), (this.resize_timeout = !1), n(
          window
        ).resize(
          n.proxy(function() {
            clearTimeout(
              this.resize_timeout
            ), (this.resize_timeout = setTimeout(n.proxy(this.image_resize, this), 10));
          }, this)
        ), this.image_resize();
      },
      image_resize: function() {
        var t = this.$video_holder.width(),
          e = this.$video_holder.height(),
          i = t,
          o = this.original_height / (this.original_width / t);
        (("adjust" == this.parameters.sizing && e < o) ||
          ("fill" == this.parameters.sizing && o < e)) &&
          (
            (o = e),
            (i = this.original_width / (this.original_height / e))
          ), (o = Math.ceil(o)), (i = Math.ceil(i));
        var n = Math.round(e / 2 - o / 2),
          s = Math.round(t / 2 - i / 2);
        this.$img.css({
          width: i + "px",
          height: o + "px",
          top: n + "px",
          left: s + "px"
        });
      },
      funcIsVimeoPlaying: function(t) {
        this.isVimeoPlaying = t;
      },
      isPlaying: function() {
        if ("html5" == this.decision) return !this.video.paused;
        if ("youtube" == this.decision && this.youtube_ready)
          return 1 === this.player.getPlayerState();
        if ("vimeo" == this.decision && this.vimeo_ready) {
          var e = this;
          return this.player.getPaused().then(function(t) {
            e.funcIsVimeoPlaying(!t);
          }), this.isVimeoPlaying;
        }
        return !1;
      },
      play: function() {
        "html5" == this.decision
          ? this.video.play()
          : "youtube" == this.decision && this.youtube_ready
            ? this.player.playVideo()
            : "vimeo" == this.decision &&
              this.vimeo_ready &&
              this.player.play();
      },
      pause: function() {
        "html5" == this.decision
          ? this.video.pause()
          : "youtube" == this.decision && this.youtube_ready
            ? this.player.pauseVideo()
            : "vimeo" == this.decision &&
              this.vimeo_ready &&
              this.player.pause();
      },
      toggle_play: function() {
        this.isPlaying() ? this.pause() : this.play();
      },
      funcIsVimeoMute: function(t) {
        this.isVimeoMute = t;
      },
      isMuted: function() {
        if ("html5" == this.decision) return !this.video.volume;
        if ("youtube" == this.decision && this.youtube_ready)
          return this.player.isMuted();
        if ("vimeo" == this.decision && this.vimeo_ready) {
          var e = this;
          return this.player.getVolume().then(function(t) {
            e.funcIsVimeoMute(0 === t);
          }), this.isVimeoMute;
        }
        return !1;
      },
      mute: function() {
        "html5" == this.decision
          ? (this.video.volume = 0)
          : "youtube" == this.decision && this.youtube_ready
            ? this.player.mute()
            : "vimeo" == this.decision &&
              this.vimeo_ready &&
              this.player.setVolume(0);
      },
      unmute: function() {
        "html5" == this.decision
          ? (this.video.volume = 1)
          : "youtube" == this.decision && this.youtube_ready
            ? this.player.unMute()
            : "vimeo" == this.decision &&
              this.vimeo_ready &&
              this.player.setVolume(1);
      },
      toggle_mute: function() {
        this.isMuted() ? this.unmute() : this.mute();
      },
      hide: function() {
        this.pause(), this.$video_holder
          .stop()
          .fadeTo(700, 0), (this.hidden = !0);
      },
      show: function() {
        this.play(), this.$video_holder
          .stop()
          .fadeTo(700, 1), (this.hidden = !1);
      },
      toogle_hidden: function() {
        this.hidden ? this.show() : this.hide();
      },
      rewind: function() {
        "html5" == this.decision
          ? (this.video.currentTime = 0)
          : "youtube" == this.decision && this.youtube_ready
            ? this.player.seekTo(0)
            : "vimeo" == this.decision &&
              this.vimeo_ready &&
              this.player.setCurrentTime(0);
      }
    });
  } else console.log("Jquery not included!");
})(), (function(t, e) {
  "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.Rellax = e());
})(this, function() {
  var c = function(t, e) {
    "use strict";
    var f = Object.create(c.prototype),
      o = 0,
      m = 0,
      n = [],
      i = !1,
      s =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function(t) {
          setTimeout(t, 1e3 / 60);
        },
      a =
        window.transformProp ||
        (function() {
          var t = document.createElement("div");
          if (null == t.style.transform) {
            var e = ["Webkit", "Moz", "ms"];
            for (var i in e)
              if (void 0 !== t.style[e[i] + "Transform"])
                return e[i] + "Transform";
          }
          return "transform";
        })(),
      v = function(t, e, i) {
        return t <= e ? e : i <= t ? i : t;
      };
    (f.options = { speed: -2, center: !1, round: !0 }), e &&
      Object.keys(e).forEach(function(t) {
        f.options[t] = e[t];
      }), (f.options.speed = v(f.options.speed, -10, 10)), t || (t = ".rellax");
    var r = document.querySelectorAll(t);
    if (!(0 < r.length))
      throw new Error("The elements you're trying to select don't exist.");
    f.elems = r;
    var l = function(t) {
        var e = t.dataset.rellaxPercentage,
          i = t.dataset.rellaxSpeed,
          o =
            e || f.options.center
              ? window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop
              : 0,
          n = o + t.getBoundingClientRect().top,
          s = t.clientHeight || t.offsetHeight || t.scrollHeight,
          a = e || (o - n + m) / (s + m);
        f.options.center && (a = 0.5);
        var r = i ? v(i, -10, 10) : f.options.speed;
        (e || f.options.center) && (r = v(i || f.options.speed, -5, 5));
        var l = g(a, r),
          h = t.style.cssText,
          d = "";
        if (0 <= h.indexOf("transform")) {
          var p = h.indexOf("transform"),
            c = h.slice(p),
            u = c.indexOf(";");
          d = u
            ? " " + c.slice(11, u).replace(/\s/g, "")
            : " " + c.slice(11).replace(/\s/g, "");
        }
        return { base: l, top: n, height: s, speed: r, style: h, transform: d };
      },
      h = function() {
        return (
          o !=
          (o =
            void 0 !== window.pageYOffset
              ? window.pageYOffset
              : (document.documentElement ||
                  document.body.parentNode ||
                  document.body).scrollTop)
        );
      },
      g = function(t, e) {
        var i = e * (100 * (1 - t));
        return f.options.round ? Math.round(10 * i) / 10 : i;
      },
      d = function() {
        h() && !1 === i && p(), s(d);
      },
      p = function() {
        for (var t = 0; t < f.elems.length; t++) {
          var e = (o - n[t].top + m) / (n[t].height + m),
            i =
              "translate3d(0," +
              (g(e, n[t].speed) - n[t].base) +
              "px,0) " +
              n[t].transform;
          f.elems[t].style[a] = i;
        }
      };
    return (f.destroy = function() {
      for (var t = 0; t < f.elems.length; t++)
        f.elems[t].style.cssText = n[t].style;
      i = !0;
    }), (function() {
      (m = window.innerHeight), h();
      for (var t = 0; t < f.elems.length; t++) {
        var e = l(f.elems[t]);
        n.push(e);
      }
      window.addEventListener("resize", function() {
        p();
      }), d(), p();
    })(), f;
  };
  return c;
}), (function(n, s) {
  "use strict";
  var i = "znParallax",
    a = n(s),
    r = !1,
    l = a.height(),
    h = !1,
    o = { bleed: 0 };
  function d(o, n, s) {
    var a;
    return function() {
      var t = this,
        e = arguments,
        i = s && !a;
      clearTimeout(a), (a = setTimeout(function() {
        (a = null), s || o.apply(t, e);
      }, n || 100)), i && o.apply(t, e);
    };
  }
  function e(t, e) {
    (this.element = t), (this.options = n.extend(
      {},
      o,
      e
    )), (this._defaults = o), (this._name = i), this.init(t);
  }
  (e.prototype = {
    init: function(t) {
      var e = this,
        i = n(t);
      (this.$par = i.parent()), (this.$bg = i
        .children()
        .first()), (this.scaleFactor = this.options.bleed
        ? "scale(" + this.options.bleed + ")"
        : ""), this.updateStuff(), this.render(), i.hasClass("is-fixed") ||
        i.addClass("is-fixed"), (r = this.mobileCheck());
      var o =
        void 0 !== s.isSmoothScroll
          ? "smoothScrollCustomEvent scroll"
          : "scroll";
      a.on(o, function() {
        e.mobileCheck(), r || (e.updateStuff(), e.render());
      }), a.on(
        "orientationchange resize",
        d(function() {
          e.mobileCheck(), r ? e.disableParallax() : (e.updateStuff(), i.hasClass("is-fixed") || i.addClass("is-fixed"));
        })
      );
    },
    mobileCheck: function() {
      var t = ("object" == typeof Modernizr && Modernizr.touchevents) || !1;
      r = t && s.matchMedia("(max-width: 1024px)").matches;
    },
    updateStuff: function() {
      var t = this;
      d(
        (
          (l = a.height()),
          (t.parTop = t.$par.offset().top),
          (t.parLeft = Math.ceil(
            t.isRtl()
              ? "-" + (a.width() - (t.$par.offset().left + t.$par.outerWidth()))
              : t.$par.offset().left
          )),
          (t.parWidth = t.$par.outerWidth()),
          (t.parHeight = t.$par.outerHeight()),
          void n(t.element).css({ height: t.parHeight, width: t.parWidth })
        ),
        200
      );
    },
    isRtl: function() {
      var t = n("html");
      return t.is("[dir]") && "rtl" === t.attr("dir");
    },
    render: function() {
      var t = n(this.element),
        e = s.scrollY || s.pageYOffset || 0,
        i = a.scrollTop();
      if (!h || (i + l >= this.parTop && i <= this.parTop + this.parHeight)) {
        var o = ((e - this.parTop) / 1.3).toFixed(0);
        t.addClass("is-visible"), t.css({
          transform:
            "translate3d(" +
            this.parLeft +
            "px," +
            (this.parTop - e) +
            "px,0)" +
            this.scaleFactor
        }), this.$bg.css("transform", "translate3d(0," + o + "px,0)"), (h = !0);
      } else t.removeClass("is-visible");
    },
    disableParallax: function() {
      n(this.element)
        .removeClass("is-fixed")
        .css({ transform: "", height: "" }), this.$bg.css("transform", "");
    }
  }), (n.fn[i] = function(t) {
    return this.each(function() {
      n.data(this, "plugin_" + i) ||
        n.data(this, "plugin_" + i, new e(this, t));
    });
  });
})(jQuery, window), (function(c, u, f) {
  function m(t, e) {
    return typeof t === e;
  }
  function v() {
    return "function" != typeof u.createElement
      ? u.createElement(arguments[0])
      : _
        ? u.createElementNS.call(u, "http://www.w3.org/2000/svg", arguments[0])
        : u.createElement.apply(u, arguments);
  }
  function g(t) {
    return t
      .replace(/([a-z])-([a-z])/g, function(t, e, i) {
        return e + i.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function y(t, e, i, o) {
    var n,
      s,
      a,
      r,
      l,
      h = "modernizr",
      d = v("div"),
      p = ((l = u.body) || ((l = v(_ ? "svg" : "body")).fake = !0), l);
    if (parseInt(i, 10))
      for (; i--; )
        ((a = v("div")).id = o ? o[i] : h + (i + 1)), d.appendChild(a);
    return ((n = v("style")).type = "text/css"), (n.id = "s" + h), (p.fake
      ? p
      : d).appendChild(n), p.appendChild(d), n.styleSheet
      ? (n.styleSheet.cssText = t)
      : n.appendChild(u.createTextNode(t)), (d.id = h), p.fake &&
      (
        (p.style.background = ""),
        (p.style.overflow = "hidden"),
        (r = w.style.overflow),
        (w.style.overflow = "hidden"),
        w.appendChild(p)
      ), (s = e(d, t)), p.fake
      ? (p.parentNode.removeChild(p), (w.style.overflow = r), w.offsetHeight)
      : d.parentNode.removeChild(d), !!s;
  }
  function r(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }
  function b(t) {
    return t
      .replace(/([A-Z])/g, function(t, e) {
        return "-" + e.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function l(t, e, i, o) {
    function n() {
      a && (delete $.style, delete $.modElem);
    }
    if (((o = !m(o, "undefined") && o), !m(i, "undefined"))) {
      var s = (function(t, e) {
        var i = t.length;
        if ("CSS" in c && "supports" in c.CSS) {
          for (; i--; ) if (c.CSS.supports(b(t[i]), e)) return !0;
          return !1;
        }
        if ("CSSSupportsRule" in c) {
          for (var o = []; i--; ) o.push("(" + b(t[i]) + ":" + e + ")");
          return y(
            "@supports (" +
              (o = o.join(" or ")) +
              ") { #modernizr { position: absolute; } }",
            function(t) {
              return "absolute" == getComputedStyle(t, null).position;
            }
          );
        }
        return f;
      })(t, i);
      if (!m(s, "undefined")) return s;
    }
    for (
      var a, r, l, h, d, p = ["modernizr", "tspan", "samp"];
      !$.style && p.length;

    )
      (a = !0), ($.modElem = v(p.shift())), ($.style = $.modElem.style);
    for (l = t.length, r = 0; r < l; r++)
      if (
        (
          (h = t[r]),
          (d = $.style[h]),
          !!~("" + h).indexOf("-") && (h = g(h)),
          $.style[h] !== f
        )
      ) {
        if (o || m(i, "undefined")) return n(), "pfx" != e || h;
        try {
          $.style[h] = i;
        } catch (t) {}
        if ($.style[h] != d) return n(), "pfx" != e || h;
      }
    return n(), !1;
  }
  function o(t, e, i, o, n) {
    var s = t.charAt(0).toUpperCase() + t.slice(1),
      a = (t + " " + T.join(s + " ") + s).split(" ");
    return m(e, "string") || m(e, "undefined")
      ? l(a, e, o, n)
      : (function(t, e, i) {
          var o;
          for (var n in t)
            if (t[n] in e)
              return !1 === i
                ? t[n]
                : m((o = e[t[n]]), "function") ? r(o, i || e) : o;
          return !1;
        })((a = (t + " " + C.join(s + " ") + s).split(" ")), e, i);
  }
  function t(t, e, i) {
    return o(t, f, f, e, i);
  }
  var h = [],
    d = [],
    e = {
      _version: "3.3.1",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function(t, e) {
        var i = this;
        setTimeout(function() {
          e(i[t]);
        }, 0);
      },
      addTest: function(t, e, i) {
        d.push({ name: t, fn: e, options: i });
      },
      addAsyncTest: function(t) {
        d.push({ name: null, fn: t });
      }
    },
    p = function() {};
  (p.prototype = e), (p = new p());
  var w = u.documentElement,
    _ = "svg" === w.nodeName.toLowerCase(),
    a = e._config.usePrefixes
      ? " -webkit- -moz- -o- -ms- ".split(" ")
      : ["", ""];
  (e._prefixes = a), p.addTest("video", function() {
    var t = v("video"),
      e = !1;
    try {
      (e = !!t.canPlayType) &&
        (
          ((e = new Boolean(e)).ogg = t
            .canPlayType('video/ogg; codecs="theora"')
            .replace(/^no$/, "")),
          (e.h264 = t
            .canPlayType('video/mp4; codecs="avc1.42E01E"')
            .replace(/^no$/, "")),
          (e.webm = t
            .canPlayType('video/webm; codecs="vp8, vorbis"')
            .replace(/^no$/, "")),
          (e.vp9 = t
            .canPlayType('video/webm; codecs="vp9"')
            .replace(/^no$/, "")),
          (e.hls = t
            .canPlayType('application/x-mpegURL; codecs="avc1.42E01E"')
            .replace(/^no$/, ""))
        );
    } catch (t) {}
    return e;
  }), p.addTest("csspointerevents", function() {
    var t = v("a").style;
    return (t.cssText = "pointer-events:auto"), "auto" === t.pointerEvents;
  });
  var i = (e.testStyles = y);
  p.addTest("touchevents", function() {
    var e;
    if ("ontouchstart" in c || (c.DocumentTouch && u instanceof DocumentTouch))
      e = !0;
    else {
      var t = [
        "@media (",
        a.join("touch-enabled),("),
        "heartz",
        ")",
        "{#modernizr{top:9px;position:absolute}}"
      ].join("");
      i(t, function(t) {
        e = 9 === t.offsetTop;
      });
    }
    return e;
  });
  var n = "Moz O ms Webkit",
    T = e._config.usePrefixes ? n.split(" ") : [];
  e._cssomPrefixes = T;
  var s = function(t) {
    var e,
      i = a.length,
      o = c.CSSRule;
    if (void 0 === o) return f;
    if (!t) return !1;
    if (
      (e =
        (t = t.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in
      o
    )
      return "@" + t;
    for (var n = 0; n < i; n++) {
      var s = a[n];
      if (s.toUpperCase() + "_" + e in o)
        return "@-" + s.toLowerCase() + "-" + t;
    }
    return !1;
  };
  e.atRule = s;
  var C = e._config.usePrefixes ? n.toLowerCase().split(" ") : [];
  e._domPrefixes = C;
  var x = { elem: v("modernizr") };
  p._q.push(function() {
    delete x.elem;
  });
  var $ = { style: x.elem.style };
  p._q.unshift(function() {
    delete $.style;
  }), (e.testAllProps = o), (e.testAllProps = t), p.addTest(
    "flexbox",
    t("flexBasis", "1px", !0)
  );
  var E = (e.prefixed = function(t, e, i) {
    return 0 === t.indexOf("@")
      ? s(t)
      : (-1 != t.indexOf("-") && (t = g(t)), e ? o(t, e, i) : o(t, "pfx"));
  });
  p.addTest("objectfit", !!E("objectFit"), {
    aliases: ["object-fit"]
  }), p.addTest("backgroundcliptext", function() {
    return t("backgroundClip", "text");
  }), (function() {
    var t, e, i, o, n, s;
    for (var a in d)
      if (d.hasOwnProperty(a)) {
        if (
          (
            (t = []),
            (e = d[a]).name &&
              (
                t.push(e.name.toLowerCase()),
                e.options && e.options.aliases && e.options.aliases.length
              )
          )
        )
          for (i = 0; i < e.options.aliases.length; i++)
            t.push(e.options.aliases[i].toLowerCase());
        for (o = m(e.fn, "function") ? e.fn() : e.fn, n = 0; n < t.length; n++)
          1 === (s = t[n].split(".")).length
            ? (p[s[0]] = o)
            : (
                !p[s[0]] ||
                  p[s[0]] instanceof Boolean ||
                  (p[s[0]] = new Boolean(p[s[0]])),
                (p[s[0]][s[1]] = o)
              ), h.push((o ? "" : "no-") + s.join("-"));
      }
  })(), (function(t) {
    var e = w.className,
      i = p._config.classPrefix || "";
    if ((_ && (e = e.baseVal), p._config.enableJSClass)) {
      var o = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
      e = e.replace(o, "$1" + i + "js$2");
    }
    p._config.enableClasses &&
      (
        (e += " " + i + t.join(" " + i)),
        _ ? (w.className.baseVal = e) : (w.className = e)
      );
  })(h), delete e.addTest, delete e.addAsyncTest;
  for (var z = 0; z < p._q.length; z++) p._q[z]();
  c.Modernizr = p;
})(window, document);
