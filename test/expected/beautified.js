var fixtures = {
  foo: {}
};

(function() {
  var t = {}.hasOwnProperty, o = function(o, r) {
    function n() {
      this.constructor = o;
    }
    for (var e in r) t.call(r, e) && (o[e] = r[e]);
    return n.prototype = r.prototype, o.prototype = new n(), o.__super__ = r.prototype, 
    o;
  };
  app.foo.B = function() {
    function t() {}
    return t.prototype.bye = function(t) {
      return "bye " + t;
    }, t;
  }(), app.Foo = function() {
    function t() {}
    return t.prototype.hello = function(t) {
      return "hello " + t;
    }, t;
  }(), app.foo.A = function(t) {
    function r() {
      return r.__super__.constructor.apply(this, arguments);
    }
    return o(r, t), r.prototype.bye = function(t) {
      var o;
      try {
        return r.__super__.bye.apply(this, arguments).bye(t);
      } catch (n) {
        return o = n, "ups";
      }
    }, r;
  }(app.foo.B);
}).call(this);