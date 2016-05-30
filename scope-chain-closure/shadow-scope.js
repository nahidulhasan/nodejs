 function someFunc() {
       var foo = 1;
       function inner() {
          var foo = 2;
       }
    }

/**
This is called Shadowing. The foo inside inner() is said to Shadow the foo
inside someFunc.

Shadowing means that the inner() scope only has access to its own foo. There
is no way for it to access the foo defined in someFunc().

This can also be an accidental source of bugs, especially when there is deep
nesting, or long functions.
*/
