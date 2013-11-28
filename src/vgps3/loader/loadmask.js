/**
 * Copyright Victor Berchet.
 *
 * VisuGps3
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */

/**
 * @fileoverview Modal overlay used while loading.
 * @author Victor Berchet <victor@suumit.com>
 */

goog.provide('vgps3.loadMask');

goog.require('goog.soy');
goog.require('goog.ui.ModalPopup');
goog.require('vgps3.loadMask.templates');


/**
 * @type {goog.ui.ModalPopup}
 * @private
 */
vgps3.loadMask.popup_;


/**
 * @type {number} Count the number of nested calls
 * @private
 */
vgps3.loadMask.opened_ = 0;


/**
 * Set the message (and show the popup when currently hidden).
 *
 * @param {string} message The message to display.
 * @param {vgps3.loadMask.Style=} opt_class A css class to add to the message.
 * @param {boolean=} opt_open Whether to create a new mask if none exists.
 */
vgps3.loadMask.setMessage = function(message, opt_class, opt_open) {
  if (opt_open && !vgps3.loadMask.popup_) {
    vgps3.loadMask.popup_ = new goog.ui.ModalPopup(true);
    vgps3.loadMask.popup_.render();
  }
  if (vgps3.loadMask.popup_) {
    goog.soy.renderElement(
        vgps3.loadMask.popup_.getElement(),
        vgps3.loadMask.templates.wait,
        {message: message, 'class': opt_class}
    );
    if (!vgps3.loadMask.popup_.isVisible()) {
      vgps3.loadMask.popup_.setVisible(true);
    } else {
      vgps3.loadMask.popup_.reposition();
    }
  }
  opt_open && vgps3.loadMask.opened_++;
};


/**
 * Closes the popup.
 */
vgps3.loadMask.close = function() {
  if (vgps3.loadMask.popup_ && --vgps3.loadMask.opened_ === 0) {
    vgps3.loadMask.popup_.exitDocument();
    goog.dispose(vgps3.loadMask.popup_);
    delete vgps3.loadMask.popup_;
  }
};


/**
 * CSS classes of the message.
 * @enum {string}
 */
vgps3.loadMask.Style = {
  MESSAGE: 'info',
  ERROR: 'error'
};


/**
 * @define {string} The src of the image.
 */
vgps3.loadMask.IMG_SRC = 'img/wait.gif';


/**
 * @define {number} The width of the image.
 */
vgps3.loadMask.IMG_WIDTH = 300;


/**
 * @define {number} The height of the image.
 */
vgps3.loadMask.IMG_HEIGHT = 219;





