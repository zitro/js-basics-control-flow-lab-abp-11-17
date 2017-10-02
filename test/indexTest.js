const expect = chai.expect;
var feet;
var city;
var tip;
describe('index.js', function () {
  describe('scuberGreetingForFeet()', function () {
    it('gives customers a free sample if the ride is less than or equal to 400 feet', function () {
      feet = 199
      expect(scuberGreetingForFeet()).to.equal('This one is on me!');
    });

    it('charges 25 dollars for a distance over 2000 feet', function () {
      feet = 2001
      expect(scuberGreetingForFeet()).to.equal('I will gladly take your thirty bucks.');
    });

    it('does not allow rides over 2500 feet', function () {
      feet = 2501
      expect(scuberGreetingForFeet()).to.equal('No can do.');
    });
  });

  describe('ternaryCheckCity()', function () {
    it('returns "Ok, sounds good." when the city is NYC', function () {
      city = 'NYC'
      expect(ternaryCheckCity()).to.equal('Ok, sounds good.');
    });

    it('should return "No go." if the destination city is not NYC', function () {
      city = 'Pittsburgh'
      expect(ternaryCheckCity()).to.equal('No go.');
    });
  });

  describe('switchOnCharmFromTip()', function () {
    it('should return "Thank you so much." if the tip is generous', function () {
      tip = 'generous'
      expect(switchOnCharmFromTip()).to.equal('Thank you so much.');
    });

    it('should return "Thank you." if the tip is not so generous', function () {
      tip = 'not as generous'
      expect(switchOnCharmFromTip()).to.equal('Thank you.');
    });

    it('should return "Bye." if anything else', function () {
      tip = 'thanks for everything'
      expect(switchOnCharmFromTip()).to.equal('Bye.');
    });
  });
});
