function QueryJS (query) {
  var element,
  elements = [];
  _self = this;

  function init_query (query) {
    if (!query) {
      return false;
    }
    if (typeof query == "string") {
      elements = document.querySelectorAll(query);
    }
    if (typeof query == "string") {
      if (elements.length > 1) {
        element = null;
      } else {
        elements = [];
        element = document.querySelector(query);
      }
    } else if (typeof query == "object") {
      elements = [];
      element = query;
    }
    return _self.getQuery();
  }

  _self.getQuery = function() {
    if (elements.length) {
      var _elements = [];
      elements.forEach(function(e){
        _elements.push(QueryJS(e));
      });
      var object = {
        elements: {
          0: _elements,
          css: function (css, value = false) {
            elements.forEach(function(element){
              if (typeof css == "object") {
                var index = 0;
                for (var name in css) {
                  eval("element.style."+ name +" = css."+ name +";");
                  index++;
                }
                return true;
              } else if (typeof css == "string" && value) {
                eval("element.style."+ css +" = '"+ value +"';");
                return true;
              } else {
                return false;
              }
            });
          },
          event: {
            add: function (type, event) {
              elements.forEach(function(element){
                eval("element."+ type +" = "+ event +";");
              });
              return event;
            },
            remove: function (name) {
              elements.forEach(function(element){
                eval("element."+ name +" = null;");
              });
              return true;
            },
          },
          remove: function () {
            elements.forEach(function(element){
              element.remove();
            });
            return elements;
          },
        }
      }
    } else {
      var object = {
        element: {
          0: element,
          html: function (change) {
            if (change) {
              if (typeof change != "object") {
                element.innerHTML = change;
              } else {
                return false;
              }
            }
            return element.innerHTML;
          },
          css: function (css, value = false) {
            if (typeof css == "object") {
              var index = 0;
              for (var name in css) {
                eval("element.style."+ name +" = css."+ name +";");
                index++;
              }
              return true;
            } else if (typeof css == "string" && value) {
              eval("element.style."+ css +" = '"+ value +"';");
              return true;
            } else {
              return false;
            }
          },
          event: {
            add: function (type, event) {
              eval("element."+ type +" = "+ event +";");
              return event;
            },
            remove: function (name) {
              eval("element."+ name +" = null;");
              return true;
            },
            trigger: function (name) {
              try {
                eval("element."+ name +"();");
              } catch (e) {
                return false;
              }
            },
            get: function (name) {
              try {
                return eval("element."+ name +";");
              } catch (e) {
                return false;
              }
            },
          },
          id: function (id = undefined) {
            if (typeof id != "undefined") {
              element.id = id;
            }
            return element.id;
          },
          remove: function () {
            element.remove();
            return element;
          },
        },
        class: _self.class,
        parent: _self.parent,
        children: _self.children,
        siblings: _self.siblings,
        append: _self.append,
      };
    }
    return object;
  }

  _self.class = {
    getClass: function(string = 1) {
      var _return = false;
      if (typeof string == "number" || typeof string == "boolean") {
        var _class = string?"":[];
        var array = true;
      } else if (typeof string == "string") {
        var _class = string;
        var array = false;
      }
      element.classList.forEach(function(e) {
      	if (typeof e == "string") {
          if (array) {
            if (typeof _class == "string") {
                _class += e+" ";
                _return = _class.trim();
            } else {
              _class.push(e);
              _return = _class;
            }
          } else {
            if (_class == e) {
              _return = true;
            }
          }
        }
      });
      return _return;
    },
    setClass: function(addClass) {
      try {
        element.classList.add(addClass);
        return true;
      } catch (e) {
        return false;
      }
    },
    hasClass: function (className) {
      var _return = false;
      element.classList.forEach(function(e){
        if (e == className) {
          _return = true;
        }
      });
      return _return;
    },
    toggleClass: function(toggle) {
        return element.classList.toggle(toggle);
    },
  }

  _self.parent = function () {
    return QueryJS(element.parentNode);
  };

  _self.children = {
    first: function() {
      return QueryJS(element.children[0]);
    },
    all: function(index) {
      var arrayChildrens = [];
      for (var i = 0; i < element.children.length; i++) {
        arrayChildrens.push(QueryJS(element.children[i]));
      }
      if (typeof index != "undefined") {
        return arrayChildrens[index]||false;
      }
      return arrayChildrens;
    }
  }

  _self.append = {
    after: function (append) {
      element.innerHTML = append + element.innerHTML;
    },
    before: function (append) {
      element.innerHTML = element.innerHTML + append;
    }
  }

  _self.siblings = function () {
    var siblings = QueryJS(element).parent().children.all();
    return siblings.filter(function(value){
      if (value.element[0] != element) {
        return true;
      }
    });
  }

  return init_query(query);
}
