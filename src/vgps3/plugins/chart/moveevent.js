/**
 * Copyright 2012 Victor Berchet
 *
 * This file is part of VisuGps3
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */

/**
 * @fileoverview Chart move event.
 * @author Victor Berchet <victor@suumit.com>
 */

goog.provide('vgps3.chart.MoveEvent');

goog.require('goog.events.Event');



/**
 * @param {number} position [0...1].
 *
 * @constructor
 * @extends {goog.events.Event}
 */
vgps3.chart.MoveEvent = function(position) {
  goog.base(this, vgps3.chart.EventType.MOVE);

  /**
  * @type {number} Position [0...1]
  */
  this.position = position;
};
goog.inherits(vgps3.chart.MoveEvent, goog.events.Event);


