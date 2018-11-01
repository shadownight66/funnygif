'use strict';

/*global chrome:false */

chrome.browserAction.setBadgeText({text: '(ツ)'});
chrome.browserAction.setBadgeBackgroundColor({color: '#eae'});

chrome.browserAction.onClicked.addListener(function(aTab) {
    chrome.tabs.query({'url': 'http://www.gifbin.com/random'}, (tabs) => {
      if (tabs.length === 0) {
        chrome.tabs.create({'url': 'http://www.gifbin.com/random', 'active': true});
      } else {
        chrome.tabs.query({'url': 'http://www.gifbin.com/random', 'active': true}, (active) => {
            if (active.length === 0) {
              chrome.tabs.update(tabs[0].id, {'active': true});
            } else{
                window.location.reload();
            }
        });
      }
    });
  });