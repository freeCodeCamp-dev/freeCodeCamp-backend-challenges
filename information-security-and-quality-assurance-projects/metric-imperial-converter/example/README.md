# metric-imperial-converter
Convert values between imperial and metric

- [ ] I will prevent the client from trying to guess (sniff) the MIME type.
- [ ] I will prevent cross-site scripting (XSS) attacks.
- [ ] I can GET `/api/convert` with a single parameter containing an accepted number and unit and have it converted.
  - Hint: Split the input by looking for the index of the first character.
- [ ] I can convert 'gal' to 'L' and vice versa. (1 gal to 3.78541 L)
- [ ] I can convert 'lbs' to 'kg' and vice versa. (1 lbs to 0.453592 kg)
- [ ] I can convert 'mi' to 'km' and vice versa. (1 mi to 1.60934 km)
- [ ] If my unit of measurement is invalid, I will return the string 'invalid unit'.
- [ ] If my number is invalid, I will return the string 'invalid number'.
- [ ] If both are invalid, I will return the string 'invalid number and unit'.
- [ ] I can use fractions, decimals, or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.
- [ ] My successful return value will be a JSON object with the properties `initNum`, `initUnit`, `returnNum`, `returnUnit`, and a `string` property spelling out units in the format "{initNum} {initial_Units} converts to {returnNum} {return_Units}", with the result rounded to five decimals.
- [ ] All 16 unit tests are complete and passing.
- [ ] All 5 functional tests are complete and passing.

Example usage:
------
```
/api/convert?input=4gal
/api/convert?input=1/2km
/api/convert?input=5.4/3lbs
/api/convert?input=kg
```

Example return:
-----
```json
// GET /api/convert?input=3.1mi
{
     "initNum": 3.1,
     "initUnit": "mi",
     "returnNum": 4.98895,
     "returnUnit": "km",
     "string": "3.1 miles converts to 4.98895 kilometers"
 }
```

## Completed project:
* https://met-imp-convert.glitch.me/