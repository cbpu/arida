function toJson(obj) {
    try {
        const gson = Java.use('com.google.gson.Gson');
        return (gson.$new().toJson(obj)).toString()
    } catch (e) {
        return "error:" + e
    }
}

var tppSearchFoundResult = "{}";

function tppSearchFound() {
    Java.perform(function () {
        // 定义Java的数据类型
        let Object = Java.use('java.lang.Object');
        let Thread = Java.use('java.lang.Thread');
        let String = Java.use('java.lang.String');
        let Integer = Java.use('java.lang.Integer');
        let Boolean = Java.use('java.lang.Boolean');
        let Long = Java.use('java.lang.Long');
        let Array = Java.use('java.lang.reflect.Array');

        // 获取当前的Application实例
        var application = Java.use('android.app.ActivityThread').currentApplication();
        console.log('获取当前的Application实例');
        // 获取当前Context实例
        var context = application.getApplicationContext();
        // 获取Dargger module类
        let ShopSearchModule = Java.use('me.ele.search.biz.a.j');
        console.log('获取Dargger module类');
        // 创建Dagger Module实例
        let shopSearchModule = ShopSearchModule.$new(application);
        console.log('创建Dagger Module实例');
        console.log(`shopSearchModule: ${shopSearchModule}`);
        // 获取Retrofit类
        let Retrofit = Java.use('retrofit2.v');
        console.log('获取Retrofit类');
        // 创建Retrofit实例
        let retrofit = shopSearchModule.a.overload('android.app.Application').call(shopSearchModule, application);
        console.log('创建Retrofit实例');
        console.log(`retrofit: ${retrofit}`);

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
    return tppSearchFoundResult;
}

rpc.exports = {
    searchShop: tppSearchFound,
}