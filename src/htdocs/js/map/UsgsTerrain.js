/* global L */
'use strict';

var Util = require('util/Util');

/**
 * Factory for Ocean base layer
 *
 * @param options {Object}
 *     L.TileLayer options
 *
 * @return {L.TileLayer}
 */
var UsgsTerrain = function (options) {
  options = Util.extend({
    maxZoom: 16,
  }, options);

  return L.tileLayer(
    'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
    options
  );
};

L.usgsTerrain = UsgsTerrain;

module.exports = UsgsTerrain;
