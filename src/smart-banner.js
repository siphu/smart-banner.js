const SmartBanner = (props) => {
    const isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
    const isIOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false );
    const {view_element,ios,android} = props;

    const fakeScript = s => window.URL.createObjectURL(new Blob([s.toString().match(/^\s*\s*\(\s*\)\s*=>\s*\{(([\s\S](?!\}$))*[\s\S])/)[1]],{type:'text/javascript'}));
    const makeWorker = (url,wait=0) => {
        let worker = new Worker(fakeScript(() => {
            self.addEventListener('message', e => {
                if(e.data.wait && e.data.wait > 0)
                    setTimeout(()=>{ self.postMessage(e.data.url); }, e.data.wait);
                else 
                    self.postMessage(e.data.url);
            }, false);
        }));
        worker.addEventListener('message', function(e) { window.location=e.data; }, false);
        worker.postMessage({ wait: wait ?? 0, url: url }); 
    }

    if(view_element) {
        view_element.onclick = e => {
            e.preventDefault();
            if(isAndroid && android) {
                window.location = android.intent || android.store;
            } else if(isIOS && ios) {
                if(ios.intent)
                    makeWorker(ios.intent);
                makeWorker(ios.store,2000);
            } else {
                console.error('[Smart Banner]','Not a mobile device');
            }
        }
    }
}
