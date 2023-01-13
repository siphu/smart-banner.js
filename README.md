# smart-banner.js
Simple Smart Banner script to redirect app to either the application (if installed) or the store.

## smart-banner vs smart-banner.set-timeout
`smart-banner.js` and `smart-banner.set-timeout.js` will do the same thing.  
1 uses `Worker` for threading, and the other uses `setTimeout`.

  
## Call Options
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

`view_element` - Id of <a> to bind `onclick`  
`ios.store` - store link to open if app is not installed  
`ios.intent` - URL Schema of app that is registered with the app. this will be executed in attempt to open the app
`android.store` - store link to open if app is not installed  
`android.intent` Intent URL to send to the app to attempt to open. This must be registered with the app.

