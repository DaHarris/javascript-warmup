module.exports = {
  sameLength: function(string1, string2) {
    if (string1.length == string2.length) {
      return true;
    } else {
      return false;
    }
  },

  firstGreater: function(int1, int2) {
    if (int1 > int2) {
      return true;
    } else {
      return false;
    }
  },

  firstGreaterThanOrEqualTo: function(int1, int2) {
    if (int1 >= int2) {
      return true;
    } else {
      return false;
    }
  },

  firstLengthGreater: function(array1, array2) {
    if (array1.length > array2.length) {
      return true;
    } else {
      return false;
    }
  },

  secondGreater: function(int1, int2) {
    if (int2 > int1) {
      return true;
    } else {
      return false;
    }
  }
}
