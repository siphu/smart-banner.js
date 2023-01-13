# smart-banner.js
Simple Smart Banner script to redirect app to either the application (if installed) or the store.

## smart-banner vs smart-banner.set-timeout
`smart-banner.js` and `smart-banner.set-timeout.js` will do the same thing.  
1 uses `Worker` for threading, and the other uses `setTimeout`.

  
## Usage
```javascript
    SmartBanner({
        view_element: document.getElementById('smart-banner-view-link'),
        ios: {
            store: 'https://apps.apple.com/us/app/whatsapp-messenger/id310633997',
            intent: 'whatsapp://'
        },
        android: {
            store: 'https://play.google.com/store/apps/details?id=com.whatsapp',
            intent: 'intent://#Intent;scheme=whatsapp;package=com.whatsapp;end'
        }
    });

```


| props | description |
|:------|:------------|
| view_element | element to bind onclick to to trigger the link. typically on an `<a>` element | 
| ios.store | URL to Apple Store App |
| ios.intent | `*Optional*` URL Schema that is registered with the app. This will be used to attempt to open the app |
| android.intent | `*Optional*` URL to Play Store App |
| android.intent | `*Optional*` Intent URL that is registered with the app. |


## Android Intents with Google Chrome
Read more about how to syntax the Intent URL for Android: https://developer.chrome.com/docs/multidevice/android/intents/
