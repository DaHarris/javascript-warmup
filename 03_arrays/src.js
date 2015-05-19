module.exports = {

  first: function(array) {
    return array[0];
  },

  last: function(array) {
    return array[-1];
  },

  empty: function(array) {
    if (array.length === 0) {
      return true;
    } else {
      return false;
    }
  },

  first_n: function(array, n) {
    returnArray = [];
    for (var i=0;i<n;i++) {
      returnArray.push(array[i]);
    }
    return returnArray;
  },

  drop: function(array, n) {
    returnArray = [];
    for (var i=n;i<array.length;i++) {
      returnArray.push(array[i]);
    }
    return returnArray;
  },

  union: function(a, b) {
    returnArray = [];
    for (var i=0;i<a.length;i++) {
      returnArray.push(a[i]);
    }
    for (var i=0;i<b.length;i++) {
      returnArray.push(b[i]);
    }
    return returnArray;
  },

  intersection: function(a,b) {
    for (var i=0;i<a.length;i++) {
      for (var j=0;j<b.length;j++) {
        if (b[j]===a[i]) {
          return b[j];
        }
      }
    }
  }
}
