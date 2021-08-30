function toJson(obj) {
    try {
        const gson = Java.use('com.google.gson.Gson');
        return (gson.$new().toJson(obj)).toString()
    } catch (e) {
        return "error:" + e
    }
}

let callbackId = 117;
var shopDetailResult = "{}";

function getShopDetail() {
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
        let jsonStr = '{"url":"https:\/\/mapi.dianping.com\/mapi\/shop.bin","mapi_cacheType":0,"params":{"lat":39.910271,"lng":116.410789,"shopid":121252536,"shopuuid":"l1LQ8K9CypEbmzlE","clientuuid":"","token":"","extra":"","promoid":"0","usermode":0},"version":1}';
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
        let cacheType = mapiCacheType == 0 ? CacheType.valueOf('DISABLED') : CacheType.valueOf('NORMAL')
        console.log(`构造CacheType: ${cacheType}`);

        let request = BasicMApiRequest.b
            .overload('java.lang.String', 'com.dianping.dataservice.mapi.c')
            .call(BasicMApiRequest, buildUpon.toString(), cacheType);

        let basicMApiRequest = Java.cast(request, BasicMApiRequest);

        basicMApiRequest.c(failOver);
        if (true) {
            let headers = jSONObject.optJSONObject("headers");
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

        try {


            let MapiModule = Java.use('com.dianping.picasso.commonbridge.MapiModule');
            // let mapiModule = MapiModule.$new();
            // mapiModule.$init();


            // let HashMap = Java.use('java.util.HashMap');
            // let hashMap = HashMap.$new.overload().call(HashMap);
            // hashMap.put('url', 'https://mapi.dianping.com/mapi/mshop/shopextra.bin@__callbackId__' + callbackId++);

            // let PCSCallback = Java.use('com.dianping.picassocontroller.bridge.b');
            // let pcsCallback = PCSCallback.$new
            //     .overload('java.lang.String', 'java.lang.String')
            //     .call(PCSCallback, 'host_35', callbackId);

            let RequestHandler = Java.use("com.dianping.dataservice.f");
            Java.registerClass({
                name: 'com.dianping.dataservice.ShopDetailRequestHandler',
                supperClass: [RequestHandler],
                methods: {
                    onRequestFailed: [{
                        returnType: 'void',
                        argumentTypes: ['com.dianping.dataservice.mapi.f', 'com.dianping.dataservice.mapi.g'],
                        implementation: function (t, r) {
                            console.log('@@@@@@@@@');
                        }
                    }],
                    onRequestFinish: [{
                        returnType: 'void',
                        argumentTypes: ['com.dianping.dataservice.mapi.f', 'com.dianping.dataservice.mapi.g'],
                        implementation: function (t, r) {
                            console.log('$$$$$$$$');
                        }
                    }]
                }
            })


            // let callBack = Java.use('com.dianping.picasso.commonbridge.MapiModule$3')
            //     .$new
            //     .overload('com.dianping.picasso.commonbridge.MapiModule', 'java.util.HashMap', 'long', 'org.json.JSONArray', 'boolean', 'com.dianping.picassocontroller.bridge.b', 'int')
            //     .call(mapiModule, hashMap, new Date().getTime(), respHeaderKeys, true, pcsCallback, 1);

            // let callBack = Java.use('com.dianping.dataservice.ShopDetailRequestHandler')
            //     .$new();

            // mapiService.exec
            //     .overload('com.dianping.dataservice.mapi.f', 'com.dianping.dataservice.f')
            //     .call(mapiService, basicMApiRequest, callBack);

            let basicMApiResponse = mapiService.execSync
                .overload('com.dianping.dataservice.mapi.f')
                .call(mapiService, basicMApiRequest);

            let MapiProtocol = Java.use('com.dianping.dataservice.mapi.impl.e');
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

            let str = MapiModule.stringFor64(data, dPObject.m.overload('java.lang.String')
                .call(dPObject, "fuck64kdatalist"));

            console.log(str);


            // let clazz = Java.use('java.lang.Class');
            // let methods = Java.cast(Java.use('com.dianping.dataservice.mapi.impl.g').class, clazz).getDeclaredMethods();
            // console.log(methods);
            // let bytes = response.g();
            // for (let i = 0; i < bytes.length; i++) {
            //     console.log(bytes[i]);
            // }
            // console.log(toJson(mapiModule.resolveData
            //     .overload('com.dianping.archive.DPObject', 'boolean')
            //     .call(mapiModule, response.b())));
        } catch (error) {
            console.log(error);
        }


        // let MapiModule = Java.use('com.dianping.picasso.commonbridge.MapiModule');
        // console.log(Java.use('com.dianping.picasso.commonbridge.MapiModule$3').$new.overload.call(MapiModule));

        // // 获取PicassoModuleUtil类
        // let PicassoModuleUtil = Java.use('com.dianping.picassocontroller.annotation.c');
        // console.log('成功获取PicassoModuleUtil类');

        // // 获取PicassoModuleUtil类的PicassoModuleInfo实例缓存
        // let picassoModuleInfoObjCacheMap = PicassoModuleUtil.c.value;
        // console.log('成功获取PicassoModuleUtil类的PicassoModuleInfo实例缓存');

        // // 获取mapi的PicassoModuleInfo实例
        // let mapiPicassoModuleInfoObj = picassoModuleInfoObjCacheMap.get('mapi');
        // if (null == mapiPicassoModuleInfoObj) {
        //     console.log('未找到mapi的PicassoModuleInfo实例缓存，主动创建');
        //     PicassoModuleUtil.a.overload('java.lang.String').call(PicassoModuleUtil, 'mapi');
        //     mapiPicassoModuleInfoObj = picassoModuleInfoObjCacheMap.get('mapi');
        // }
        // console.log(`成功获取mapi的PicassoModuleInfo实例: ${mapiPicassoModuleInfoObj}`);

        // // 获取PCSHostManager类
        // let PCSHostManager = Java.use('com.dianping.picassocontroller.vc.c');
        // console.log('成功获取PCSHostManager类');
        // // 获取mapi的PCSHost实例
        // let mapiPCSHostObj = PCSHostManager.a.overload('java.lang.String').call(PCSHostManager, 'host_35');
        // console.log(`成功获取mapi的PCSHost实例: ${mapiPCSHostObj.getHostId()}`);

        // // 获取module的Class对象

        // let picassoModuleInfoClazz = Java.cast(mapiPicassoModuleInfoObj.getClass(), clazz);
        // let cField = picassoModuleInfoClazz.getDeclaredField('c');
        // // 设置该属性为可访问
        // cField.setAccessible(true);
        // // 调用get方法获取属性值
        // let moduleClass = cField.get(mapiPicassoModuleInfoObj);
        // console.log(`成功获取module的Class对象: ${moduleClass}`);

        // // 获取DPMapiModul实例
        // let moduleInstanceForClass = mapiPCSHostObj.moduleInstanceForClass(moduleClass);
        // console.log(`成功获取DPMapiModul实例: ${moduleInstanceForClass}`);

        // // 获取MapiModule实例的fetchV2方法
        // let methods = Java.cast(MapiModule.class, clazz).getDeclaredMethods();
        // let fetchV2Method;
        // for (let i = 0; i < methods.length; i++) {
        //     if (methods[i].getName().indexOf('fetchV2') !== -1) {
        //         fetchV2Method = methods[i];
        //         console.log(`method: ${fetchV2Method}`);
        //         break;
        //     }
        // }
        // console.log(`成功获取MapiModule实例的fetchV2方法: ${fetchV2Method}`);


        // let iterator = methodCacheMap.entrySet().iterator();
        // while (iterator.hasNext()) {
        //     let entry = iterator.next();
        //     let key = entry.getKey();
        //     console.log(entry);
        //     if ('fetchV2' == key) {
        //         fetchV2Method = entry.getValue();
        //         break;
        //     }
        // }
        // console.log(`成功获取MapiModule实例的fetchV2方法: ${fetchV2Method}`);
        // 获取
        // let methods = Java.cast(mapiPicassoModuleInfoObj.getClass(), clazz).getDeclaredMethods();
        // let method;
        // for (let i = 0; i < methods.length; i++) {
        //     if (methods[i].getName().indexOf('a') !== -1) {
        //         if (methods[i].getReturnType().getName() == 'java.lang.reflect.Method') {
        //             method = methods[i];
        //             console.log(`method: ${method}`);
        //             break;
        //         }
        //     }
        // }
        // method.setAccessible(true);

        // // 创建Dagger Module实例
        // let shopSearchModule = ShopSearchModule.$new(application);
        // console.log('创建Dagger Module实例');
        // console.log(`shopSearchModule: ${shopSearchModule}`);
        // // 获取Retrofit类
        // let Retrofit = Java.use('retrofit2.v');
        // console.log('获取Retrofit类');
        // // 创建Retrofit实例
        // let retrofit = shopSearchModule.a.overload('android.app.Application').call(shopSearchModule, application);
        // console.log('创建Retrofit实例');
        // console.log(`retrofit: ${retrofit}`);

        // let rRetrofit = Java.use('com.sankuai.meituan.retrofit2.Retrofit');
        // let rClientCall = Java.use('com.sankuai.meituan.retrofit2.ClientCall');
        // let rRetrofit$Builder = Java.use('com.sankuai.meituan.retrofit2.Retrofit$Builder');

        // // 我们将retrofit.c类视为Retrofit的创建器，用来生成Retrofit对象
        // let rRetrofit$Creator = Java.use('com.sankuai.waimai.platform.capacity.network.retrofit.c');
        // console.log("我们将retrofit.c类视为Retrofit的创建器，用来生成Retrofit对象");

        // // 我们需要注册WaimaiSearchService这个interface
        // let rWaimaiSearchApi = Java.use('com.sankuai.waimai.business.search.api.WaimaiSearchService');
        // console.log("我们需要注册WaimaiSearchService这个interface");

        // // 当类中的方法出现重载时，需要通过.overload().call()的方式来调用
        // let retrofit = rRetrofit$Creator.a.overload('java.lang.Class').call(
        //     // .overload().call()的第一个参数必须时类本身，也可能时类对象本身，这个需要自己确定。
        //     rRetrofit$Creator,

        //     // 注册WaimaiSearchService这个interface
        //     rWaimaiSearchApi.class
        // );
        // console.log(`retrofit: ${retrofit}`);

        // // 通过getDeclaredMethods找到 rWaimaiSearchApi.searchGlobalPage method
        // let methods = rWaimaiSearchApi.class.getDeclaredMethods();
        // let method;
        // for (let i = 0; i < methods.length; i++) {
        //     if (methods[i].getName().indexOf('searchGlobalPage') !== -1) {
        //         method = methods[i];
        //         console.log(`method: ${method}`);
        //         break;
        //     }
        // }

        // // 通过retrofit对象和interface method生成ServiceMethod对象
        // let serviceMethod = retrofit.loadServiceMethod(method);
        // console.log(`serviceMethod: ${serviceMethod}`);

        // // 构造 rWaimaiSearchApi.searchGlobalPage 所需的参数
        // var entrance_id = 0;
        // var category_type = 0;
        // var sub_category_type = 0;
        // var keyword = "和府捞面";
        // var query_type = 1;
        // var page_index = 0;
        // var page_size = 10;
        // var activity_filter_codes = null;
        // var slider_select_data = null;
        // var sort_type = 0;
        // var is_fix_keyword = false;

        // var resultFragmentClazz = Java.use("com.sankuai.waimai.business.search.ui.result.ResultFragment");
        // console.log("加载search_global_id获取工具类");
        // var search_global_id = resultFragmentClazz.g();
        // console.log("获取search_global_id");

        // var filter_mapping = null;
        // var show_mode = null;
        // var search_source = 0;
        // var product_card_page_index = 0;
        // var product_tag_id = null;
        // var search_cursor = 0;
        // var search_page_type = 0;
        // var search_longitude = 0;
        // var search_latitude = 0;
        // var word_source = null;
        // var gaoda_id = 0;
        // var weien_id = 0;

        // let params = Java.array('java.lang.Object', [
        //     Integer.$new(entrance_id),
        //     Integer.$new(category_type),
        //     Integer.$new(sub_category_type),
        //     keyword,
        //     Integer.$new(query_type),
        //     Integer.$new(page_index),
        //     Integer.$new(page_size),
        //     activity_filter_codes,
        //     slider_select_data,
        //     Integer.$new(sort_type),
        //     Boolean.$new(is_fix_keyword),
        //     Long.$new(search_global_id),
        //     filter_mapping,
        //     show_mode,
        //     Integer.$new(search_source),
        //     Integer.$new(product_card_page_index),
        //     product_tag_id,
        //     Integer.$new(search_cursor),
        //     Integer.$new(search_page_type),
        //     Integer.$new(search_longitude),
        //     Integer.$new(search_latitude),
        //     word_source,
        //     Integer.$new(gaoda_id),
        //     Integer.$new(weien_id)
        // ]);
        // console.log(`ary: ${params}, ary.length: ${params.length}`);

        // // 构造ClientCall对象
        // let call = rClientCall.$new(serviceMethod, params, retrofit.interceptors.value, retrofit.defInterceptors.value, retrofit.httpExecutor.value, retrofit.cache.value);
        // console.log(`call: ${call}`);

        // // 调用ClientCall.execute 执行request并获取response。
        // let response = call.execute();
        // // console.log(`response: ${toJson(response)}`);
        // console.log(`response.url: ${response.url()}`);
        // console.log(`response.code: ${response.code()}`);
        // console.log(`response.message: ${response.message()}`);
        // // console.log(`response.body: ${toJson(response.body())}`);


        // //     console.log("执行请求方法获取rx.d实例");
        // //     console.log(rxDObj);

        // //     var rxObserverClazz = Java.use("com.dianping.nvnetwork.failover.c$a");
        // //     var outClazz = Java.use("com.dianping.nvnetwork.failover.c");
        // //     var outObj = outClazz.$new(null, null, null);
        // //     var rxObserverObj = rxObserverClazz.$new(outObj);
        // //     console.log("获取rx.j实例");

        // // rxObserverClazz.unsubscribe.implementation = function () {
        // //     console.log("开始请求unsubscribe");
        // // }

        // // rxObserverClazz.onNext.implementation = function (obj) {
        // //     console.log("开始请求onNext");
        // //     console.log(obj);
        // //     this.onNext(obj);
        // // }

        // // proxyUtilClazz.a.overload("rx.d", "rx.j", "java.lang.Object", "boolean").call(proxyUtilClazz, rxDObj, rxObserverObj, "ResultFragment1627397449364", true);

        // // var clazz = Java.use('java.lang.Class');
        // // var aField = Java.cast(rxDObj.getClass(), clazz).getDeclaredField('a');
        // // // 设置该属性为可访问
        // // aField.setAccessible(true);
        // // // 调用get方法获取属性值
        // // var aValue = aField.get(rxDObj);
        // // console.log(aValue);

        // // var bodySubscriberObj = Java.use("com.sankuai.meituan.retrofit2.adapter.rxjava.BodyOnSubscribe$BodySubscriber").$new(rxObserverObj);

        // // var methods = Java.cast(aValue.getClass(), clazz).getDeclaredMethods();
        // // methods.forEach(function (method) {
        // //     console.log(method);
        // // });

        // // var method = methods[0];
        // // ;
        // // console.log(dynamic_invoke(aValue, method, [bodySubscriberObj]));

        // // aValue.call(bodySubscriberObj);

        // // var bodyOnSubscribeClazz = Java.use("com.sankuai.meituan.retrofit2.adapter.rxjava.BodyOnSubscribe");
        // // var methods = Java.cast(aValue.getClass(), clazz).getDeclaredMethods();
        // // var method = methods[0];
        // // method.invoke(aValue, bodySubscriberObj);

        // // console.log("执行proxyUtilClazz.a.overload(\"rx.d\", \"rx.j\", \"java.lang.Object\")");

        // // } catch (error) {
        // //     console.log(error);
        // // }

        // tppSearchFoundResult = toJson(response.body());

    });
    return shopDetailResult;
}

rpc.exports = {
    shopDetail: getShopDetail,
}