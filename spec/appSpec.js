// Application code
function getManagerName(){
  return 'Roberto Martine';
}
// Tests
describe("foo tests", function () {

  it('returns correct value', function (){
    let newValue = "this is a test"
    foo.bar = newValue
    expect(foo.bar).toBe(newValue)
  });
});

// Tests
describe("getManagerName tests", function () {
  
  beforeEach(function() {
    foo = 0
    foo += 1
    
    spyOn(obja, 'bar')
  });
  
  afterEach(function() {
    foo = 0
  });
  
  it('returns correct value', function (){
    let newValue = "this is a test"
    obja.foo = newValue
    expect(obja.foo).toBe(newValue)
    expect(foo).toBe(1)
  });
  
  it('returns correct value 2', function (){
    expect(foo).toBe(1);
  });
  
  it('returns correct value 3', function (){
    
    let ret = obja.bar('test')
    //expect(ret).toBe("I am bar with value: test")
    expect(obja.bar).toHaveBeenCalledWith('test')
  });
  
  xit("can be declared 'xit'", function() {
    expect(true).toBe(false)
  });

  it("can be declared with 'it' but without a function");
});

xdescribe("A spec", function() {
  var foo

  beforeEach(function() {
    foo = 0
    foo += 1
  });

  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1)
  });
});