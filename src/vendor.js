/* 
    Here is the place we import "vendor code", which can be several packages 
    like bootstrap.js.
    It works just like index.js as another entry point.
    since we use "[name].[contentHash].bundle.js" as the output file,
    the output bundle of vendor.js is also hashed so that we can bust cache
    every time a change is made in vendor.js!
    However, it is likely that the vendor code changes not as often as index.js,
    so that the cached vendor output can often be reused.
*/
import "bootstrap";