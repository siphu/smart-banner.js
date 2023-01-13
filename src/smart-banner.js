const SmartBanner = (props) => {
    const isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
    const isIOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false );
    const {view_element,ios,android} = props;
    if(view_element) {
        view_element.onclick = e => {
            e.preventDefault();
            if(isAndroid && android) {
                window.location = android.intent || android.store;
            } else if(isIOS && ios) {
                if(iso.intent)
                    window.location = ios.intent;
                setTimeout(()=>{ window.location = ios.store; },1); 
            } else {
                console.error('[Smart Banner]','Not a mobile device');
            }
        }
    }
}
