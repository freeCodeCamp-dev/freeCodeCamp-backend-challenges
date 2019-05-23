/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

const chai = require('chai')
const assert = chai.assert
const ConvertHandler = require('../controllers/convertHandler.js')

const convertHandler = new ConvertHandler()

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      const input = '32L'
      assert.equal(convertHandler.getNum(input), 32)
      done()
    })
    
    test('Decimal Input', function(done) {
      const input = '3.2L'
      assert.equal(convertHandler.getNum(input), 3.2)
      done()
    })
    
    test('Fractional Input', function(done) {
      const input = '1/2km'
      assert.equal(convertHandler.getNum(input), 0.5)
      done()
    })
    
    test('Fractional Input w/ Decimal', function(done) {
      const input = '3/1.5lbs'
      assert.equal(convertHandler.getNum(input), 2)
      done()
    })
    
    test('Invalid Input (double fraction)', function(done) {
      const input = '1//2lbs'
      assert.isNull(convertHandler.getNum(input))
      done()
    })

    test('Invalid Input (double decimal)', function (done) {
      const input = '1/2..3lbs'
      assert.isNull(convertHandler.getNum(input))
      done()
    })

    test('Divide by Zero', function (done) {
      const input = '1/0lbs'
      assert.isNull(convertHandler.getNum(input))
      done()
    })
    
    test('No Numerical Input', function(done) {
      const input = 'lbs'
      assert.equal(convertHandler.getNum(input), 1)
      done()
    }) 
    
  })
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      const input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG']
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele), ele)
      })
      done()
    })
    
    test('Unknown Unit Input', function(done) {
      const input = ['bo', '', 'c', 123]
      input.forEach(function(ele, i) {
        assert.isNull(convertHandler.getUnit(ele))
      })
      done()
    })  
    
  })
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      const input = ['gal','l','mi','km','lbs','kg']
      const expect = ['l','gal','km','mi','kg','lbs']
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i])
      })
      done()
    })
    
  })  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      const input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']
      const expect = ['gallon', 'liter', 'mile', 'kilometer', 'pound', 'kilogram']
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i])
      })
      done()
    })
    
  })
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      const input = [5, 'gal']
      const expected = 18.9271
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1) //0.1 tolerance
      done()
    })
    
    test('L to Gal', function(done) {
      const input = [18.9271, 'l']
      const expected = 5
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1) //0.1 tolerance
      done()
    })
    
    test('Mi to Km', function(done) {
      const input = [3.10686, 'mi']
      const expected = 5
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1) //0.1 tolerance
      done()
    })
    
    test('Km to Mi', function(done) {
      const input = [5, 'km']
      const expected = 3.10686
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1) //0.1 tolerance
      done()
    })
    
    test('Lbs to Kg', function(done) {
      const input = [10, 'lbs']
      const expected = 4.53592
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1) //0.1 tolerance
      done()
    })
    
    test('Kg to Lbs', function(done) {
      const input = [4.53592, 'kg']
      const expected = 10
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1) //0.1 tolerance
      done()
    })
    
  })

})