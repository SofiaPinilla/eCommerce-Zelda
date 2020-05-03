# Currently

Currently `.full` returns `new Date()` - with simplified extensions of `.year`, `.month`, `.date`, and `.timeOfDay`.

## Notes

 * normally, JavaScript's `.getMonth()` returns a zero-indexed integer (i.e. January = 0, February = 1, December = 11), whereas currently's `.month` returns the "regular" integer for simplicity's sake (January = 1, December = 12)
 * currently is designed to go with the [onezero](onezero) package, which converts individual digits (0 - 9) into double digits (00 - 09)
   * install via `npm install onezero --save`

## Usage

```
var now = require('currently');
// now.full, now.year, now.month, now.date, now.timeOfDay
```

#### Footer Copyright

```
<p>Copyright 2012
<script>
if (now.year != 2012) {
  document.write('-', now.year); // ' - 2016'
}
</script>
</p>
```

#### Today's date

```
// print 'DD/MM/YYYY':
var zero = require('onezero');
document.write(
  zero(now.date) +'/'+ zero(now.month) +'/'+ now.year
);
```

#### Humanize greetings
```
if (now !== 'night' || now != 'noon') {
  'Good '+ now.timeOfDay; // morning / afternoon / evening
}
```

## Roadmap

 * `.short('month') // = 'Apr'`
 * `.short('day') // = 'Fri'`
 * `.display('mm/dd/yy') // intelligent formatting`
