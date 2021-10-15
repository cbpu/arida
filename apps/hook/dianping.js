if (Java.available) {
    Java.perform(function () {
        // var clazz = Java.use("com.meituan.android.common.mtguard.wtscore.plugin.sign.core.AddSigUtils");

        // clazz.post.implementation = function (uri, bArr, str, str2, map, map2) {
        //     console.log(uri);

        //     var stringClazz = Java.use("java.lang.String");
        //     console.log(stringClazz.$new.overload('[B').call(stringClazz, bArr))
        //     console.log(str);
        //     console.log(str2);
        //     console.log(map.toString());
        //     console.log(map2.toString());
        //     return this.post(uri, bArr, str, str2, map, map2);
        // }

        // var clazz = Java.use("com.sankuai.meituan.retrofit2.adapter.rxjava.BodyOnSubscribe");

        // clazz.call.overload("java.lang.Object").implementation = function (obj) {
        //     console.log(obj.getClass());
        //     this.call(obj);
        // }

        // Java.use("com.sankuai.meituan.retrofit2.adapter.rxjava.BodyOnSubscribe$BodySubscriber").onNext.overload("com.sankuai.meituan.retrofit2.Response").implementation = function (response) {
        //     console.log(response);
        //     this.onNext(response);
        // }

        // var clientCall = null;
        // var Class = Java.use('java.lang.Class');
        // var CallAdapter = Java.use("com.sankuai.meituan.retrofit2.ExecutorCallAdapterFactory$1");
        // var ClientCall = Java.use("com.sankuai.meituan.retrofit2.ClientCall");
        // var ServiceMethod = Java.use("com.sankuai.meituan.retrofit2.ServiceMethod");
        // var Request = Java.use("com.sankuai.meituan.retrofit2.Request");
        // CallAdapter.adapt.overload("com.sankuai.meituan.retrofit2.Call").implementation = function (call) {
        //     console.log("成功获取Retrofit2 Call对象");
        //     clientCall = call.clone();
        // var response = clientCall.execute();
        // console.log('成功执行请求 response: ${response}', response);

        // if (null != clientCall) {
        //     var realRequestField = Java.cast(ClientCall.class, Class).getDeclaredField("realRequest");
        //     realRequestField.setAccessible(true);
        //     var realRequestFieldValue = realRequestField.get(clientCall);
        //     console.log(realRequestFieldValue);

        //     var originalRequestField = Java.cast(ClientCall.class, Class).getDeclaredField("originalRequest");
        //     originalRequestField.setAccessible(true);
        //     var originalRequestFieldValue = originalRequestField.get(clientCall);
        //     console.log(originalRequestFieldValue);

        //     var serviceMethodField = Java.cast(ClientCall.class, Class).getDeclaredField("serviceMethod");
        //     serviceMethodField.setAccessible(true);
        //     var serviceMethodFieldValue = serviceMethodField.get(clientCall);
        //     console.log(serviceMethodFieldValue);

        //     if (null != serviceMethodFieldValue) {
        //         var baseUrlField = Java.cast(ServiceMethod.class, Class).getDeclaredField("baseUrl");
        //         baseUrlField.setAccessible(true);
        //         var baseUrlFieldValue = baseUrlField.get(serviceMethodFieldValue);
        //         console.log(baseUrlFieldValue);

        //         var relativeUrlField = Java.cast(ServiceMethod.class, Class).getDeclaredField("relativeUrl");
        //         relativeUrlField.setAccessible(true);
        //         var relativeUrlFieldValue = relativeUrlField.get(serviceMethodFieldValue);
        //         console.log(relativeUrlFieldValue);
        //     }
        // }
        //     if (null != clientCall) {
        //         try {
        //             console.log(clientCall.execute().body());
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     }
        //     return this.adapt(call);
        // }

        // Java.use("com.sankuai.meituan.retrofit2.Retrofit$3").invoke.implementation = function (obj, method, objArr) {
        //     console.log(method);


        //     return this.invoke(obj, method, objArr);
        // }


        // var rxObserverClazz = Java.use("com.dianping.nvnetwork.failover.c$a");

        // rxObserverClazz.isUnsubscribed.implementation = function () {
        //     console.log("isUnsubscribed");
        //     return true;
        // }

        // rxObserverClazz.unsubscribe.implementation = function () {
        //     console.log("开始请求unsubscribe");
        // }

        // rxObserverClazz.onNext.implementation = function (obj) {
        //     console.log("开始请求onNext");
        //     console.log(obj);
        //     this.onNext(obj);
        // }

        // var rxUtil = Java.use("com.sankuai.waimai.platform.capacity.network.retrofit.b");
        // rxUtil.a.overload("rx.d", "rx.j", "java.lang.Object", "boolean").implementation = function (dVar, jVar, obj, z) {


        // console.log("jVar:\t" + jVar.getClass());
        // console.log("obj:\t" + obj.getClass());

        // var stringClazz = Java.use("java.lang.String");
        // console.log(stringClazz.$new.overload('[B').call(stringClazz, bArr))
        // console.log(str);
        // console.log(str2);
        // console.log(map.toString());
        // console.log(map2.toString());
        //     return this.a(dVar, jVar, obj, z);
        // }

        // Java.use('me.ele.search.biz.a.h')
        //     .a
        //     .overload('me.ele.search.biz.a.ac', 'me.ele.search.biz.b.a')
        //     .implementation = function (ac, aVar) {
        //         console.log(`ac: ${ac}`);

        //         return this.a(ac, aVar);
        //     }

        // Java.use('me.ele.search.biz.a.h')
        //     .a
        //     .overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.util.HashMap', 'me.ele.search.biz.b.a')
        //     .implementation = function (str, str2, str3, str4, str5, str6, str7, hashMap, aVar) {
        //         console.log(`str: ${str}`);
        //         console.log(`str2: ${str2}`);
        //         console.log(`str3: ${str3}`);
        //         console.log(`str4: ${str4}`);
        //         console.log(`str5: ${str5}`);
        //         console.log(`str6: ${str6}`);
        //         console.log(`str7: ${str7}`);

        //         return this.a(str, str2, str3, str4, str5, str6, str7, hashMap, aVar);
        //     }

        // Java.use('me.ele.search.biz.a.h')
        //     .a
        //     .overload('java.lang.String', 'me.ele.search.biz.a.ac', 'me.ele.search.biz.b.a')
        //     .implementation = function (str, ac, aVar) {
        //         console.log(`str: ${str}`);
        //         console.log(`ac: ${ac}`);

        //         return this.a(str, ac, aVar);
        //     }

        // Java.use('me.ele.search.xsearch.n').createApi.implementation = function (map) {
        //     console.log(toJson(map));
        //     return this.createApi(map);
        // }

        // Java.use('com.taobao.android.searchbaseframe.datasource.AbsSearchDatasource')
        //     .doSearchRequest
        //     .implementation = function (searchConfig, map, searchRequestAdapter, j, searchTimeTrackEvent, cacheProvider) {
        //         console.log(toJson(searchConfig));
        //         console.log(toJson(map));
        //         // let exception = Java.use("java.lang.Exception");
        //         // throw exception.$new("-----hook exception -----------------");
        //         return this.doSearchRequest(searchConfig, map, searchRequestAdapter, j, searchTimeTrackEvent, cacheProvider);
        //     }

        // Java.use('me.ele.search.xsearch.ao')
        //     .a
        //     .overload('android.app.Application')
        //     .implementation = function (application) {
        //         console.log('application');
        //         this.a(application);
        //     }

        // Java.use('com.taobao.android.searchbaseframe.SearchFrameSDK$InitBuilder')
        //     .finish
        //     .implementation = function () {
        //         console.log('finish');
        //         return this.finish();
        //     }

        // Java.use('com.dianping.preload.bridge.PreloadRequestBridge')
        //     .doPreloadRequest
        //     .implementation = function (bVar, jSONObject, bVar2) {
        //     console.log("----------com.dianping.preload.bridge.PreloadRequestBridge.doPreloadRequest--------------")
        //     console.log(bVar);
        //     console.log(toJson(jSONObject));
        //     console.log(bVar2);
        //     return this.doPreloadRequest(bVar, jSONObject, bVar2);
        // }

        // Java.use('com.dianping.preload.engine.fetch.a')
        //     .a
        //     .overload('com.dianping.preload.commons.network.a', 'com.dianping.preload.engine.fetch.h', 'com.dianping.preload.engine.fetch.g')
        //     .implementation = function (aVar, hVar, gVar) {
        //     console.log("----------com.dianping.preload.engine.fetch.a.a-----------")
        //     console.log(aVar);
        //     console.log(hVar);
        //     console.log(gVar);
        //     return this.a(aVar, hVar, gVar);
        // }
        //
        // Java.use('com.dianping.preload.commons.network.c')
        //     .a
        //     .overload('com.dianping.preload.commons.network.a', 'com.dianping.dataservice.f')
        //     .implementation = function (aVar, fVar) {
        //     console.log("----------com.dianping.preload.commons.network.c-----------")
        //     console.log(aVar);
        //     console.log(fVar);
        //     printStack();
        //     return this.a(aVar, fVar);
        // }
        //
        // Java.use('com.dianping.apimodel.BaseGetRequestBin')
        //     .a
        //     .overload('com.dianping.dataservice.mapi.f', 'com.dianping.dataservice.f')
        //     .implementation = function (fVar, fVar2) {
        //     console.log(toJson(fVar.j()));
        //     // console.log(toJson(fVar2));
        //     return this.a(fVar, fVar2);
        // }

        // let YodaResponseListener = Java.use("com.meituan.android.yoda.YodaResponseListener");
        // Java.registerClass({
        //     name: 'com.meituan.android.yoda.ShopRequestYodaResponseListener',
        //     supperClass: [YodaResponseListener],
        //     methods: {
        //         onCancel: [{
        //             returnType: 'void',
        //             argumentTypes: ['java.lang.String'],
        //             implementation: function (str) {

        //             }
        //         }],
        //         onError: [{
        //             returnType: 'void',
        //             argumentTypes: ['java.lang.String', 'com.meituan.android.yoda.retrofit.Error'],
        //             implementation: function (str, error) {

        //             }
        //         }],
        //         onYodaResponse: [{
        //             returnType: 'void',
        //             argumentTypes: ['java.lang.String', 'java.lang.String'],
        //             implementation: function (str, str2) {
        //                 console.log(str);
        //                 console.log(str2);
        //             }
        //         }]
        //     }
        // })

        // let ShopRequestYodaResponseListener = Java.use("com.meituan.android.yoda.ShopRequestYodaResponseListener");
        // let yodaResponseListener = ShopRequestYodaResponseListener.$new();
        // yodaResponseListener.onYodaResponse('1','2');

        // Java.use('com.dianping.shopshell.ShopInfoActivity')
        //     .sendShopAdditionRequest
        //     .implementation = function () {
        //         console.log("____________");
        //         // Java.choose("com.dianping.apimodel.ShopBin", {
        //         //     onMatch: function (x) {
        //         //         console.log("find instance :" + x);
        //         //     },
        //         //     onComplete: function () {
        //         //         console.log("end");
        //         //     }
        //         // });
        //         return this.sendShopAdditionRequest();
        //     }

        // Java.use('com.dianping.picassocontroller.vc.c')
        // .a
        // .overload('com.dianping.picassocontroller.vc.b', 'java.lang.String')
        // .implementation = function ( bVar, str) {
        //     printStack();
        //     return this.a(bVar, str);
        // }

        // Java.use('com.dianping.picassocontroller.jse.c')
        //     .a
        //     .overload('com.dianping.picassocontroller.vc.e', 'java.lang.String', '[Ljava.lang.Object;')
        //     .implementation = function (eVar, str, objArr) {
        //         console.log(str);
        //         console.log(objArr);
        //         printStack();
        //         return this.a(eVar, str, objArr);
        //     }

        // Java.use('com.dianping.picasso.commonbridge.MapiModule')
        //     .innerFetch
        //     .implementation = function (jSONObject, bVar, z) {
        //     console.log(jSONObject.toString());
        //     console.log(jSONObject.optJSONObject("params"));
        //     printStack();
        //     return this.innerFetch(jSONObject, bVar, z);
        // }

        // Java.use('com.dianping.picasso.commonbridge.MapiModule')
        //     .innerPost
        //     .implementation = function (jSONObject, bVar, z) {
        //     console.log(jSONObject.toString());
        //     console.log(jSONObject.optJSONObject("params"));
        //     printStack();
        //     return this.innerPost(jSONObject, bVar, z);
        // }

        // Java.use('com.dianping.picassocontroller.jse.c')
        //     .a
        //     .overload('com.dianping.picassocontroller.vc.e', 'java.lang.String', '[Ljava.lang.Object;')
        //     .implementation = function (eVar, str, objArr) {
        //         // for (var i = 0; i < objArr.length; i++) { 
        //         //     console.log(objArr[i]);
        //         //     console.log('---------');
        //         //  }
        //         console.log(objArr[3].getValue());
        //         console.log('---------');

        //         return this.a(eVar, str, objArr);
        //     }

        // Java.use('com.dianping.quakerbird.controller.bridge.PCSBImpl')
        // .exec
        // .implementation = function (valueArr) {
        //     for (var i = 0; i < valueArr.length; i++) { 
        //         console.log(valueArr[i].getType());
        //         console.log('---------');
        //      }


        //     return this.exec(valueArr);
        // }


        // Java.use('com.dianping.picassocontroller.annotation.c')
        //     .a
        //     .overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'com.dianping.jscore.Value', 'java.lang.String')
        //     .implementation = function (str, str2, str3, value, str4) {
        //         console.log(`str: ${str}`);
        //         console.log(`str2: ${str2}`);
        //         console.log(`str3: ${str3}`);
        //         console.log(`value: ${value.getValue()}`)
        //         console.log(`str4: ${str4}`);
        //         return this.a(str, str2, str3, value, str4);
        //     }

        // Java.use('com.dianping.picassocontroller.annotation.c')
        //     .a
        //     .overload('com.dianping.picassocontroller.vc.b', 'java.lang.Object', 'java.lang.reflect.Method', 'com.dianping.jscore.Value', 'java.lang.String')
        //     .implementation = function (bVar, obj, method, value, str) {
        //         console.log(`bVar: ${bVar}`);
        //         console.log(`obj: ${obj}`);
        //         console.log(`method: ${method.getName()}`);
        //         console.log(`value: ${value.getType()}`)
        //         console.log(`str: ${str}`);


        //         let result = this.a(bVar, obj, method, value, str);
        //         // send(this.a(bVar, obj, method, value, str));

        //         // console.log(toJson(result));
        //         // console.log(result.getType());
        //         return result;
        //     }

        // Java.use('com.dianping.picasso.commonbridge.MapiModule$3')
        //     .$init
        //     .overload('com.dianping.picasso.commonbridge.MapiModule', 'java.util.HashMap', 'long', 'org.json.JSONArray', 'boolean', 'com.dianping.picassocontroller.bridge.b', 'int')
        //     .implementation = function (arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
        //     console.log(`arg1: ${arg1}`);
        //     console.log(`arg2: ${arg2}`);
        //     console.log(`arg3: ${arg3}`);
        //     console.log(`arg4: ${arg4}`);
        //     console.log(`arg5: ${arg5}`);
        //     console.log(`arg6: ${arg6}`);
        //     console.log(`arg7: ${arg7}`);
        //     return this.$init(arg1, arg2, arg3, arg4, arg5, arg6, arg7);
        // }

        Java.use('com.dianping.picasso.commonbridge.MapiModule$3')
            .onRequestFinish
            .overload('com.dianping.dataservice.mapi.f', 'com.dianping.dataservice.mapi.g')
            .implementation = function (fVar, gVar) {
            console.log(this.getClass().getDeclaredMethods());
            console.log('返回');
            console.log(gVar.d())

            let MapiModule = Java.use('com.dianping.picasso.commonbridge.MapiModule');

            let MapiProtocol = Java.use('com.dianping.dataservice.mapi.impl.e');

            let bytes = MapiProtocol.a
                .overload("[B")
                .call(MapiProtocol, gVar.g());
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

            return this.onRequestFinish(fVar, gVar);
        }

        // Java.use('com.dianping.dataservice.mapi.b')
        //     .b
        //     .overload('java.lang.String', 'com.dianping.dataservice.mapi.c')
        //     .implementation = function (str, cVar) {
        //     console.log(`url: ${str}`);
        //     console.log(`CacheType: ${cVar}`);
        //     let result = this.b(str, cVar);
        //     return result;
        // }

        // Java.use('com.dianping.dataservice.mapi.b')
        //     .b
        //     .overload('java.lang.String', '[Ljava.lang.String;')
        //     .implementation = function (str, strArr) {
        //     console.log(str);
        //     console.log(strArr);
        //     let result = this.b(str, strArr);
        //     return result;
        // }

        // Java.use('com.dianping.picasso.commonbridge.MapiModule')
        //     .exec
        //     .implementation = function (context, fVar, bVar, jSONArray, z, hashMap, i) {
        //     console.log(`fVar: ${fVar}`);
        //     console.log(`bVar: ${bVar}`);
        //     console.log(`bVar: ${bVar._b.value}`);
        //     console.log(`bVar: ${bVar._c.value}`);
        //     console.log(`hashMap: ${hashMap}`);
        //     console.log(`z: ${z}`);
        //     console.log(`i: ${i}`);
        //     let result = this.exec(context, fVar, bVar, jSONArray, z, hashMap, i);
        //     return result;
        // }
        //
        // Java.use('com.dianping.dataservice.mapi.impl.DefaultMApiService')
        //     .transferRequest
        //     .overload('com.dianping.dataservice.mapi.f')
        //     .implementation = function (fVar) {
        //     console.log(`transferRequest fVar ${fVar}`);
        //     let result = this.transferRequest(fVar);
        //     console.log(`transferRequest result c() ${result.c()}`);
        //     console.log(`transferRequest result d() ${result.d()}`);
        //     console.log(`transferRequest result e() ${result.e()}`);
        //     console.log(`transferRequest result f() ${result.f()}`);
        //     console.log(`transferRequest result g() ${result.g()}`);
        //     console.log(`transferRequest result h() ${result.h()}`);
        //     return result;
        // }
        //
        // Java.use('com.dianping.nvnetwork.NVDefaultNetworkService')
        //     .exec
        //     .overload('com.dianping.nvnetwork.Request', 'com.dianping.nvnetwork.o')
        //     .implementation = function (request, oVar) {
        //     console.log(`NVDefaultNetworkService result c() ${request.c()}`);
        //     console.log(`NVDefaultNetworkService result d() ${request.d()}`);
        //     console.log(`NVDefaultNetworkService result e() ${request.e()}`);
        //     console.log(`NVDefaultNetworkService result f() ${request.f()}`);
        //     console.log(`NVDefaultNetworkService result g() ${request.g()}`);
        //     console.log(`NVDefaultNetworkService result h() ${request.h()}`);
        //
        //     let result = this.exec(request, oVar);
        //     return result;
        // }

        //     Java.use('com.dianping.picasso.commonbridge.MapiModule')
        //         .resolveData
        //         .overload('com.dianping.archive.DPObject', 'boolean')
        //         .implementation = function (dPObject, z) {
        //         printStack();
        //         let result = this.resolveData(dPObject, z);
        //
        //         console.log(toJson(result));
        //         return result;
        //     }
        //
        //     Java.use('com.dianping.picasso.commonbridge.MapiModule')
        //         .resolveData
        //         .overload('com.dianping.archive.DPObject', 'boolean', 'int')
        //         .implementation = function (dPObject, z, i) {
        //         printStack();
        //         let result = this.resolveData(dPObject, z, i);
        //
        //         console.log(toJson(result));
        //         return result;
        //     }
    });
}

function readInputstream(inpustream) {
    InputStreamReader = Java.use('java.io.InputStreamReader');
    BufferedReader = Java.use('java.io.BufferedReader');
    StringBuilder = Java.use('java.lang.StringBuilder');

    inputStreamReader = InputStreamReader.$new.overload('java.io.InputStream').call(InputStreamReader, inpustream);
    bufferedReader = BufferedReader.$new.overload('java.io.InputStreamReader').call(BufferedReader, inputStreamReader);
    stringBuilder = StringBuilder.$new.overload().call(StringBuilder);
    for (let line; (line = bufferedReader.readLine()) != null;) {
        stringBuilder.append(line).append('\n');
    }

    return stringBuilder.toString();
}

function toJson(obj) {
    try {
        const gson = Java.use('com.google.gson.Gson');
        return (gson.$new().toJson(obj)).toString()
    } catch (e) {
        return "error:" + e
    }
}

function printStack() {
    Java.perform(function () {
        var Exception = Java.use("java.lang.Exception");
        var ins = Exception.$new("Exception");
        var straces = ins.getStackTrace();
        if (straces !== undefined && straces != null) {
            var strace = straces.toString();
            var replaceStr = strace.replace(/,/g, "\r\n");
            console.log("=============================Stack strat=======================");
            console.log(replaceStr);
            console.log("=============================Stack end=======================\r\n");
            Exception.$dispose();
        }
    });
}