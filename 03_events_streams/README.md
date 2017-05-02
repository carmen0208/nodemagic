## Callbacks vs. Events

Callbacks | Events
---| ---
Request / Reply|Publish / Subscribe
No results until all results | Act on results as they arrive
Either error or results|Partial results before error

* Callbacks:

```javascript
getThem(param, function(err, items) {
  // check for error
  // operate on array of items
}};

```

* Events

```javascript
var results = getThem(param);
results.on(‘item’, function(i) {
  // do something with this one item
});
results.on(‘done’, function() {
  // No more items
});
results.on(‘error’, function(err) {
  // React to error
});
```
## Node’s “EventEmitter” class

The publisher | The subscriber
---|---
emitter.emit(event, [args]); |emitter.on(event, listener);

## Stream in Node.js

ReadableStream |WritableStream
---|---
readable [boolean] |writable [boolean]
event:‘data’ |event:‘drain’
event:‘end’ |event:‘error’
event:‘error’ |event:‘close’
event:‘close’  |event:‘pipe’
pause()|write()
resume()|end()
destroy()|destroy()
pipe()|destroySoon()
