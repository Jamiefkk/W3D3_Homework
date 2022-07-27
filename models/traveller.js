const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = []
  this.journeys.forEach( (n) => {
    result.push(n.startLocation)})
  return result
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = []
  this.journeys.forEach( (n) => {
    result.push(n.endLocation)})
  return result
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = []
  this.journeys.forEach( (n) => {
    if (n.transport == transport)
      result.push(n)})
  return result
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = []
  this.journeys.forEach( (n) => {
    if (n.distance >= minDistance)
      result.push(n)})
  return result
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let result = 0
  this.journeys.forEach( (n) => {
    result += n.distance})
  return result
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const result = []
  this.journeys.forEach( (n) => {
    if (result.includes(n.transport)){}
    else (result.push(n.transport))})
  return result
};


module.exports = Traveller;
