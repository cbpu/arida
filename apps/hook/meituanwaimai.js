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
        //         console.log("----------com.dianping.preload.bridge.PreloadRequestBridge.doPreloadRequest--------------")
        //         console.log(bVar);
        //         console.log(toJson(jSONObject));
        //         console.log(bVar2);
        //         return this.doPreloadRequest(bVar, jSONObject, bVar2);
        //     }

        // Java.use('com.dianping.preload.engine.fetch.a')
        //     .a
        //     .overload('com.dianping.preload.commons.network.a', 'com.dianping.preload.engine.fetch.h', 'com.dianping.preload.engine.fetch.g')
        //     .implementation = function (aVar, hVar, gVar) {
        //         console.log("----------com.dianping.preload.engine.fetch.a.a-----------")
        //         console.log(aVar);
        //         console.log(hVar);
        //         console.log(gVar);
        //         return this.a(aVar, hVar, gVar);
        //     }

        // Java.use('com.dianping.preload.commons.network.c')
        //     .a
        //     .overload('com.dianping.preload.commons.network.a', 'com.dianping.dataservice.f')
        //     .implementation = function (aVar, fVar) {
        //         console.log("----------com.dianping.preload.commons.network.c-----------")
        //         console.log(aVar);
        //         console.log(fVar);
        //         printStack();
        //         return this.a(aVar, fVar);
        //     }

        // Java.use('com.dianping.apimodel.BaseGetRequestBin')
        //     .a
        //     .overload('com.dianping.dataservice.mapi.f', 'com.dianping.dataservice.f')
        //     .implementation = function (fVar, fVar2) {
        //         console.log(toJson(fVar.j()));
        //         // console.log(toJson(fVar2));
        //         return this.a(fVar, fVar2);
        //     }

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

        // Java.use('com.dianping.picasso.commonbridge.MapiModule$3')
        //     .onRequestFinish
        //     .overload('com.dianping.dataservice.mapi.f', 'com.dianping.dataservice.mapi.g')
        //     .implementation = function (fVar, gVar) {
        //     console.log(this.getClass().getDeclaredMethods());
        //     console.log('返回');
        //     console.log(gVar.d())
        //     // dPObject = Java.cast(gVar.clone().d(), Java.use('com.dianping.archive.DPObject'));
        //     // console.log(`dPObject: ${dPObject}`);
        //
        //     return this.onRequestFinish(fVar, gVar);
        // }

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

        // Java.use('com.dianping.picasso.commonbridge.MapiModule')
        //     .resolveData
        //     .overload('com.dianping.archive.DPObject', 'boolean')
        //     .implementation = function (dPObject, z) {
        //     printStack();
        //     let result = this.resolveData(dPObject, z);
        //
        //     console.log(toJson(result));
        //     return result;
        // }
        //
        // Java.use('com.dianping.picasso.commonbridge.MapiModule')
        //     .resolveData
        //     .overload('com.dianping.archive.DPObject', 'boolean', 'int')
        //     .implementation = function (dPObject, z, i) {
        //     printStack();
        //     let result = this.resolveData(dPObject, z, i);
        //
        //     console.log(toJson(result));
        //     return result;
        // }

        // Java.use('com.sankuai.waimai.business.restaurant.base.repository.b')
        //     .a
        //     .overload('long', 'long', 'int', 'java.lang.String', 'java.lang.String', 'com.sankuai.waimai.business.restaurant.base.repository.net.b')
        //     .implementation = function (j, j2, i, str, str2, bVar) {
        //     printStack();
        //     return this.a(j, j2, i, str, str2, bVar);
        // }
        //
        // Java.use('com.sankuai.waimai.business.restaurant.base.repository.net.ShopApiService')
        //     .getShopMenu
        //     .implementation = function (str, j, l, i, str2, str3, i2, str4, i3, str5, str6, str7, str8, str9, str10, str11) {
        //     printStack();
        //     return this.getShopMenu(str, j, l, i, str2, str3, i2, str4, i3, str5, str6, str7, str8, str9, str10, str11);
        // }
        //
        // Java.use('com.sankuai.waimai.router.core.j')
        //     .b
        //     .overload('java.lang.String')
        //     .implementation = function (str) {
        //     console.log(str);
        //     printStack();
        //     return this.b(str);
        // }

        // Java.use('com.sankuai.waimai.business.page.kingkong.utils.a')
        //     .a
        //     .overload('android.app.Activity', 'com.sankuai.waimai.platform.domain.core.poi.Poi', 'java.lang.String')
        //     .implementation = function (activity, poi, str) {
        //     console.log(toJson(poi));
        //     console.log(str);
        //     printStack();
        //     return this.a(activity, poi, str);
        // }

        // Java.use('com.sankuai.waimai.business.page.kingkong.view.poilist.normal.a')
        //     .a
        //     .implementation = function (i, poi) {
        //     console.log(toJson(poi));
        //     printStack();
        //     console.log(toJson(Java.use('com.sankuai.waimai.business.page.common.net.request.a$a').$new().a()));
        //     return this.a(i, poi);
        // }
        //
        // Java.use('com.sankuai.waimai.business.page.kingkong.view.poilist.normal.c')
        //     .c
        //     .overload()
        //     .implementation = function () {
        //
        //
        //
        //     printStack();
        //     return this.c();
        // }

        // Java.use('com.sankuai.waimai.router.set_id.a')
        //     .a
        //     .overload('android.content.Context', 'java.lang.String', 'java.lang.String', 'long')
        //     .implementation = function (context, str, str2, j) {
        //     console.log(`str: ${str}`);
        //     console.log(`str2: ${str2}`);
        //     console.log(`j: ${j}`);
        //     printStack();
        //     return this.a(context, str, str2, j);
        // }

        Java.use('com.sankuai.waimai.foundation.location.v2.g')
            .a
            .overload('com.sankuai.waimai.foundation.location.v2.WmAddress', 'java.lang.String', 'boolean')
            .implementation = function (wmAddress, str, z) {
            console.log(`str: ${str}`);
            console.log(`wmAddress: ${toJson(wmAddress)}`);
            console.log(`z: ${z}`);
            printStack();
            return this.a(wmAddress, str, z);
        }


        // /?seq_num=1&offset=20&dynamic_page=false&latitude=39914443&longitude=116494723&page_index=1&page_size=0&sort_type=0&category_type=910&filter_type=0&second_category_type=0&navigate_type=910&activity_filter_codes=&slider_select_data=&load_type=3&preload=0&trace_tag=&rank_trace_id=7A72B58C1C0B6015344147B01BB3D2DC&session_id=d8ebf820-8d91-4da7-bf80-b25aa5f91bc21630490461276289&union_id=8c7f0a2c93fe4ab89efe37625c658d0a0000000000009310851&behavioral_characteristics=%7B%22module_action%22%3A%7B%22extra_info%22%3A%7B%22factlist_offset_after_dedup%22%3A20%7D%2C%22request_type%22%3A2%7D%2C%22exp_info%22%3A%7B%22exp_group_name%22%3A%22poilist_dynamicPaging_exp%22%2C%22exp_name%22%3A%22OB%22%2C%22scene_name%22%3A%22poilist_dynamicPaging%22%7D%7D&wm_appversion=7.62.2&wm_ctype=android&userid=117600512&uuid=0000000000000D293E560C44543A5AEA21726F904B49AA163044592666356980&platform=4&personalized=1&wm_latitude=39914443&poilist_mt_cityid=1&wm_actual_longitude=116494245&wm_visitid=1dc0b015-6d47-455e-8ea3-42f86ee10c8f&wm_dversion=27_8.1.0&wm_mac=02%3A00%3A00%3A00%3A00%3A00&wm_logintoken=Zx_cOfr2QdbjeOhrSXTDr7hjmh4AAAAAdQ4AAM5ZbOVTxdQf97ywXW7tuiTs7CHNC5FqX8cs-S8ScC0BtrkFjwb10sjlsQKDI8E1ug&push_token=dpsh703372f74eba22939a7b16e77e191c6catpu&app=4&oa_id=&poilist_wm_cityid=110100&wm_longitude=116494723&wm_actual_latitude=39914697&wm_did=865400034117081&version=7.62.2&wm_dtype=Redmi+4A&wm_uuid=0000000000000D293E560C44543A5AEA21726F904B49AA163044592666356980&partner=4&seq_id=495&wm_channel=1061&request_id=DBFC6564-21C6-4581-9096-834BF3372CF5&waimai_sign=MOFbiOtWIelK%2BJ41AQh%2F6sNGKCbUTgVKXWgncfPCQQ%2FbJtRLcJeP4zf0cZ2DxidANbt9oVsW0ZN%2BQMOcVe3Z92R%2F%2Bwkp90cJ0g%2BOyFC7TeU4UahB%2BYP%2Fb9162QcHTSQeDi02M4hg1Hxr15NboQ%2F1owx80sqG%2FiqGIxHlgZKscaU%3D&wm_seq=221&req_time=1630494495036

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