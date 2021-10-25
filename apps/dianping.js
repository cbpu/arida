function toJson(obj) {
    try {
        const gson = Java.use('com.google.gson.Gson');
        return (gson.$new().toJson(obj)).toString()
    } catch (e) {
        return "error:" + e
    }
}

let rep = {
    status: 0,
    err: null,
    data: null
};

function getReq(base64JsonStr) {
    Java.perform(function () {
        // 定义Java的数据类型
        let Object = Java.use('java.lang.Object');
        let Thread = Java.use('java.lang.Thread');
        let String = Java.use('java.lang.String');
        let Integer = Java.use('java.lang.Integer');
        let Boolean = Java.use('java.lang.Boolean');
        let Long = Java.use('java.lang.Long');
        let Array = Java.use('java.lang.reflect.Array');


        // 构造JSON参数
        let JSONObject = Java.use('org.json.JSONObject');
        //门店基础信息
        // let jsonStr = '{"url":"https:\/\/mapi.dianping.com\/mapi\/shop.bin","mapi_cacheType":0,"params":{"lat":39.910271,"lng":116.410789,"shopid":121252536,"shopuuid":"l1LQ8K9CypEbmzlE","clientuuid":"","token":"","extra":"","promoid":"0","usermode":0},"version":1}';

        //门店扩展信息
        // let jsonStr = '{"url":"https:\/\/mapi.dianping.com\/mapi\/mshop\/shopextra.bin","mapi_cacheType":0,"params":{"shopid":"92917651","shopuuid":"G9Ibj1Ti4by22Rh3","lng":116.267345,"lat":39.865072,"mapi_cacheType":0},"version":1}';

        //商家招牌菜
        // let jsonStr = '{"url":"https:\/\/mapi.dianping.com\/mapi\/merchantdish\/merchantsdishes.bin","mapi_cacheType":0,"params":{"mapi_cacheType":0,"mapi_usePreloadCache":false,"poiid":"92917651","shopuuid":"G9Ibj1Ti4by22Rh3"},"version":1}';

        //网友推荐菜
        // let jsonStr = '{"url":"https:\/\/mapi.dianping.com\/mapi\/dish\/recommenddishshoppagedish.bin","mapi_cacheType":0,"params":{"shopid":507685,"shopuuid":"l1cJqwU5kMnrcb1w","mapi_cacheType":0,"cityid":2,"lat":39.865072,"lng":116.267345,"locatecityid":2,"userMode":0,"dishids":"","enableYoda":true},"version":1}';

        //推荐菜
        // let jsonStr = '{"url":"https:\/\/mapi.dianping.com\/mapi\/dish\/recommenddishmenusummary.bin","mapi_cacheType":0,"params":{"shopuuid":"l1cJqwU5kMnrcb1w","shopid":"507685","from":0,"mapi_cacheType":0},"version":1}';

        //精选评价
        // let jsonStr = '{"url":"https:\/\/m.api.dianping.com\/review\/shopreviewlist.bin","mapi_cacheType":0,"params":{"shopid":507685,"shopuuid":"l1cJqwU5kMnrcb1w","picsize":"{\"single\":{\"width\":500,\"height\":500},\"many\":{\"width\":300,\"height\":300},\"glance\":{\"width\":720,\"minHeight\":405,\"maxHeight\":960}}"},"version":1}';

        //优惠
        // let jsonStr = '{"url":"https:\/\/mapi.dianping.com\/hui\/getmopaypromosinfo.hui","mapi_cacheType":0,"params":{"shopId":507685,"shopuuid":"l1cJqwU5kMnrcb1w","cityid":2,"promostring":""},"version":1}';
        let Base64 = Java.use('com.dianping.delores.utils.a');
        let jsonStr = String.$new.overload('[B').call(String, Base64.a.overload('java.lang.String').call(Base64, base64JsonStr));
        console.log(jsonStr);
        let jSONObject = JSONObject.$new.overload('java.lang.String').call(JSONObject, jsonStr);
        console.log(`构造JSON参数: ${jSONObject}`);

        // 构造Uri
        let url = jSONObject.optString("url");
        let mapiCacheType = jSONObject.optInt("mapi_cacheType");
        // let isSignature = jSONObject.optBoolean("isSignature");
        let isSignature = false;
        // let isFabricate = jSONObject.optBoolean("isFabricate");
        let isFabricate = false;
        // let enableYoda = jSONObject.optBoolean("enableYoda");
        let enableYoda = false;
        // let failOver = jSONObject.optBoolean("failOver", true);
        let failOver = true;
        let version = jSONObject.optInt("version");
        let params = jSONObject.optJSONObject("params");
        let respHeaderKeys = jSONObject.optJSONArray("respHeaderKeys");

        let buildUpon = Java.use('android.net.Uri').parse(url).buildUpon();
        if (params != null) {
            let keys = params.keys();
            while (keys.hasNext()) {
                let next = keys.next();
                buildUpon.appendQueryParameter(next, params.optString(next));
            }
        }
        console.log(`构造Uri: ${buildUpon.toString()}`);

        let CacheType = Java.use('com.dianping.dataservice.mapi.c');
        let BasicMApiRequest = Java.use('com.dianping.dataservice.mapi.b');
        let BaseMApiRequest = Java.use('com.dianping.dataservice.mapi.a');
        let BasicHttpRequest = Java.use('com.dianping.dataservice.http.a');

        // 构造BasicMApiRequest请求对象
        let cacheType = mapiCacheType === 0 ? CacheType.valueOf('DISABLED') : CacheType.valueOf('NORMAL')
        console.log(`构造CacheType: ${cacheType}`);

        let request = BasicMApiRequest.b
            .overload('java.lang.String', 'com.dianping.dataservice.mapi.c')
            .call(BasicMApiRequest, buildUpon.toString(), cacheType);

        let basicMApiRequest = Java.cast(request, BasicMApiRequest);

        basicMApiRequest.c(failOver);
        if (true) {

            let headers = jSONObject.optJSONObject("headers");
            console.log(`Header: ${headers}`);
            if (headers != null) {
                let ArrayList = Java.use('java.util.ArrayList');
                let arrayList = ArrayList.$new.overload().call(ArrayList);
                let keys2 = headers.keys();
                while (keys2.hasNext()) {
                    let next2 = keys2.next();
                    let BasicNameValuePair = Java.use('com.dianping.apache.http.message.a');
                    arrayList.add(
                        BasicNameValuePair.$new
                            .overload('java.lang.String', 'java.lang.String')
                            .call(next2, headers.optString(next2)));
                }

                console.log(`Header: ${arrayList}`);
                basicMApiRequest.$super.$super.a
                    .overload('java.util.List')
                    .call(basicMApiRequest, arrayList);
            }

            console.log(`isSignature: ${isSignature}`);
            console.log(`isFabricate: ${isFabricate}`);

            basicMApiRequest.$super.a
                .overload('boolean')
                .call(basicMApiRequest, enableYoda);
        }

        let ArrayList = Java.use('java.util.ArrayList');
        let arrayList = ArrayList.$new.overload().call(ArrayList);
        let BasicNameValuePair = Java.use('com.dianping.apache.http.message.a');

        arrayList.add(
            BasicNameValuePair.$new
                .overload('java.lang.String', 'java.lang.String')
                .call(BasicNameValuePair, Java.use('com.dianping.shield.AgentConfigParser').PICASSO_PREFIX.value, 'no-js'));

        basicMApiRequest.$super.$super.a
            .overload('java.util.List')
            .call(basicMApiRequest, arrayList);
        console.log(`构造DefaultMApiService: ${basicMApiRequest}`);

        // 获取context
        let application = Java.use('android.app.ActivityThread').currentApplication();
        let context = application.getApplicationContext();
        console.log(`成功获取context: ${context}`);

        // 构造DefaultMApiService
        let DefaultMApiService = Java.use('com.dianping.dataservice.mapi.impl.DefaultMApiService');
        let mapiService = DefaultMApiService.$new(context);
        console.log(`构造DefaultMApiService: ${mapiService}`);

        rep
        try {
            let MapiModule = Java.use('com.dianping.picasso.commonbridge.MapiModule');

            let basicMApiResponse = mapiService.execSync
                .overload('com.dianping.dataservice.mapi.f')
                .call(mapiService, basicMApiRequest);

            let MapiProtocol = Java.use('com.dianping.dataservice.mapi.impl.e');
            // let strV = String.$new.overload("[B", 'java.lang.String').call(String, basicMApiResponse.g(), "ISO-8859-1");
            // strV.getBytes.overload("java.lang.String").call(strV, "ISO-8859-1")
            let bytes = MapiProtocol.a
                .overload("[B")
                .call(MapiProtocol, basicMApiResponse.g());
            let obj = MapiProtocol.b
                .overload("[B")
                .call(MapiProtocol, bytes);

            let dPObject = Java.cast(obj, Java.use('com.dianping.archive.DPObject'));
            let data = dPObject.f
                .overload('java.lang.String')
                .call(dPObject, "data");

            console.log(dPObject.f
                .overload('java.lang.String')
                .call(dPObject, "datalist"));

            let str = MapiModule.stringFor64(data, dPObject.m.overload('java.lang.String')
                .call(dPObject, "fuck64kdatalist"));

            console.log(str);

            rep.data = str;
        } catch (error) {
            rep.status = 1;
            rep.err = error;
        }

    });
    return rep;
}

function postReq(base64JsonStr) {
    Java.perform(function () {
        // 定义Java的数据类型
        let Object = Java.use('java.lang.Object');
        let Thread = Java.use('java.lang.Thread');
        let String = Java.use('java.lang.String');
        let Integer = Java.use('java.lang.Integer');
        let Boolean = Java.use('java.lang.Boolean');
        let Long = Java.use('java.lang.Long');
        let Array = Java.use('java.lang.reflect.Array');

        try {

        } catch (e) {
            console.log(e);
        }

        // 构造JSON参数
        let JSONObject = Java.use('org.json.JSONObject');

        let Base64 = Java.use('com.dianping.delores.utils.a');
        let jsonStr = String.$new.overload('[B').call(String, Base64.a.overload('java.lang.String').call(Base64, base64JsonStr));
        console.log(jsonStr);
        let jSONObject = JSONObject.$new.overload('java.lang.String').call(JSONObject, jsonStr);
        console.log(`构造JSON参数: ${jSONObject}`);

        // 构造Uri
        let url = jSONObject.optString("url");
        let mapiCacheType = jSONObject.optInt("mapi_cacheType");
        // let isSignature = jSONObject.optBoolean("isSignature");
        let isSignature = false;
        // let isFabricate = jSONObject.optBoolean("isFabricate");
        let isFabricate = false;
        // let enableYoda = jSONObject.optBoolean("enableYoda");
        let enableYoda = false;
        // let failOver = jSONObject.optBoolean("failOver", true);
        let failOver = true;
        let version = jSONObject.optInt("version");
        let params = jSONObject.optJSONObject("params");
        let body = jSONObject.optJSONObject("body");
        let respHeaderKeys = jSONObject.optJSONArray("respHeaderKeys");

        let buildUpon = Java.use('android.net.Uri').parse(url).buildUpon();
        if (params != null) {
            let keys = params.keys();
            while (keys.hasNext()) {
                let next = keys.next();
                buildUpon.appendQueryParameter(next, params.optString(next));
            }
        }

        let ArrayList = Java.use('java.util.ArrayList');
        let bodyArrayList = ArrayList.$new.overload().call(ArrayList);
        if (body != null) {

            let keys = body.keys();
            while (keys.hasNext()) {
                let obj = keys.next().toString();
                let obj2 = body.get(obj).toString();
                bodyArrayList.add(obj);
                bodyArrayList.add(obj2);
            }
        }
        console.log(`构造Uri: ${buildUpon.toString()}`);
        Java.use('com.dianping.dataservice.mapi.c');
        let BasicMApiRequest = Java.use('com.dianping.dataservice.mapi.b');
        let BaseMApiRequest = Java.use('com.dianping.dataservice.mapi.a');
        let BasicHttpRequest = Java.use('com.dianping.dataservice.http.a');

        // 构造BasicMApiRequest请求对象
        let values = [];
        for (let i = 0; i++; i < bodyArrayList.size()) {
            values[i] = bodyArrayList.get(i);
        }
        console.log(values);
        let array = Java.array('java.lang.String', values);
        console.log(`构造Body数组: ${array}`);

        let request = BasicMApiRequest.b
            .overload('java.lang.String', '[Ljava.lang.String;')
            .call(BasicMApiRequest, buildUpon.toString(), array);

        let basicMApiRequest = Java.cast(request, BasicMApiRequest);

        basicMApiRequest.c(failOver);

        if (true) {
            let headers = jSONObject.optJSONObject("headers");
            console.log(`Header: ${headers}`);
            if (headers != null) {
                let arrayList = ArrayList.$new.overload().call(ArrayList);
                let keys2 = headers.keys();
                while (keys2.hasNext()) {
                    let next2 = keys2.next();
                    let BasicNameValuePair = Java.use('com.dianping.apache.http.message.a');
                    arrayList.add(BasicNameValuePair.$new
                        .overload('java.lang.String', 'java.lang.String')
                        .call(BasicNameValuePair, next2, headers.optString(next2)));
                }

                console.log(`Header: ${arrayList}`);
                basicMApiRequest.$super.$super.a
                    .overload('java.util.List')
                    .call(basicMApiRequest, arrayList);
            }

            console.log(`isSignature: ${isSignature}`);
            console.log(`isFabricate: ${isFabricate}`);

            basicMApiRequest.$super.a
                .overload('boolean')
                .call(basicMApiRequest, enableYoda);
        }

        let arrayList = ArrayList.$new.overload().call(ArrayList);
        let BasicNameValuePair = Java.use('com.dianping.apache.http.message.a');

        arrayList.add(
            BasicNameValuePair.$new
                .overload('java.lang.String', 'java.lang.String')
                .call(BasicNameValuePair, Java.use('com.dianping.shield.AgentConfigParser').PICASSO_PREFIX.value, 'no-js'));

        basicMApiRequest.$super.$super.a
            .overload('java.util.List')
            .call(basicMApiRequest, arrayList);
        console.log(`构造DefaultMApiService: ${basicMApiRequest}`);

        // 获取context
        let application = Java.use('android.app.ActivityThread').currentApplication();
        let context = application.getApplicationContext();
        console.log(`成功获取context: ${context}`);

        // 构造DefaultMApiService
        let DefaultMApiService = Java.use('com.dianping.dataservice.mapi.impl.DefaultMApiService');
        let mapiService = DefaultMApiService.$new(context);
        console.log(`构造DefaultMApiService: ${mapiService}`);

        try {
            let MapiModule = Java.use('com.dianping.picasso.commonbridge.MapiModule');

            let basicMApiResponse = mapiService.execSync
                .overload('com.dianping.dataservice.mapi.f')
                .call(mapiService, basicMApiRequest);

            let MapiProtocol = Java.use('com.dianping.dataservice.mapi.impl.e');
            // let strV = String.$new.overload("[B", 'java.lang.String').call(String, basicMApiResponse.g(), "ISO-8859-1");
            // strV.getBytes.overload("java.lang.String").call(strV, "ISO-8859-1")
            let bytes = MapiProtocol.a
                .overload("[B")
                .call(MapiProtocol, basicMApiResponse.g());
            let obj = MapiProtocol.b
                .overload("[B")
                .call(MapiProtocol, bytes);

            let dPObject = Java.cast(obj, Java.use('com.dianping.archive.DPObject'));
            let data = dPObject.f
                .overload('java.lang.String')
                .call(dPObject, "data");

            console.log(dPObject.f
                .overload('java.lang.String')
                .call(dPObject, "datalist"));

            let str = MapiModule.stringFor64(data, dPObject.m.overload('java.lang.String')
                .call(dPObject, "fuck64kdatalist"));

            console.log(str);

            rep = str;
        } catch (error) {
            console.log(error);
        }
    });
    return rep;
}

rpc.exports = {
    getReq: getReq,
    postReq: postReq
}