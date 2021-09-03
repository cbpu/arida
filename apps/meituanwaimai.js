function toJson(obj) {
    try {
        const gson = Java.use('com.google.gson.Gson');
        return (gson.$new().toJson(obj)).toString()
    } catch (e) {
        return "error:" + e
    }
}

let siuaResult = null;

function siua() {
    Java.perform(function () {
        const currentApplication = Java.use('android.app.ActivityThread').currentApplication();
        const context = currentApplication.getApplicationContext();

        const SIUA = Java.use("com.meituan.android.common.mtguard.wtscore.plugin.collection.siua.SIUA");
        const siua = SIUA.getSiuaInstance(context);

        const String = Java.use("java.lang.String");
        const string = String.$new.overload('[B').call(String, siua.siua());

        siuaResult = string.toString();
    });
    return siuaResult;
}

var sharkTraceidResult = null;

function sharkTraceid() {
    Java.perform(function () {
        const Clazz = Java.use("com.dianping.nvnetwork.util.k");
        const clazzObj = Clazz.a();

        sharkTraceidResult = clazzObj.b();
    });
    return sharkTraceidResult;
}


/**
 *
 * 店铺搜索
 * **/
let searchGlobalPageResult = "";

function searchGlobalPage() {
    Java.perform(function () {
        let Object = Java.use('java.lang.Object');
        let Thread = Java.use('java.lang.Thread');
        let String = Java.use('java.lang.String');
        let Integer = Java.use('java.lang.Integer');
        let Boolean = Java.use('java.lang.Boolean');
        let Long = Java.use('java.lang.Long');
        let Array = Java.use('java.lang.reflect.Array');

        let Retrofit = Java.use('com.sankuai.meituan.retrofit2.Retrofit');
        let ClientCall = Java.use('com.sankuai.meituan.retrofit2.ClientCall');
        let Retrofit$Builder = Java.use('com.sankuai.meituan.retrofit2.Retrofit$Builder');

        // 我们将retrofit.c类视为Retrofit的创建器，用来生成Retrofit对象
        let Retrofit$Creator = Java.use('com.sankuai.waimai.platform.capacity.network.retrofit.c');
        console.log("我们将retrofit.c类视为Retrofit的创建器，用来生成Retrofit对象");

        // 我们需要注册WaimaiSearchService这个interface
        let WaimaiSearchApi = Java.use('com.sankuai.waimai.business.search.api.WaimaiSearchService');
        console.log("我们需要注册WaimaiSearchService这个interface");

        // 当类中的方法出现重载时，需要通过.overload().call()的方式来调用
        let retrofit = Retrofit$Creator.a.overload('java.lang.Class').call(
            // .overload().call()的第一个参数必须时类本身，也可能时类对象本身，这个需要自己确定。
            Retrofit$Creator,

            // 注册WaimaiSearchService这个interface
            WaimaiSearchApi.class
        );
        console.log(`retrofit: ${retrofit}`);

        // 通过getDeclaredMethods找到 WaimaiSearchApi.searchGlobalPage method
        let methods = WaimaiSearchApi.class.getDeclaredMethods();
        let method;
        for (let i = 0; i < methods.length; i++) {
            if (methods[i].getName().indexOf('searchGlobalPage') !== -1) {
                method = methods[i];
                console.log(`method: ${method}`);
                break;
            }
        }

        // 通过retrofit对象和interface method生成ServiceMethod对象
        let serviceMethod = retrofit.loadServiceMethod(method);
        console.log(`serviceMethod: ${serviceMethod}`);

        // 构造 WaimaiSearchApi.searchGlobalPage 所需的参数
        const entrance_id = 0;
        const category_type = 0;
        const sub_category_type = 0;
        const keyword = "和府捞面";
        const query_type = 1;
        const page_index = 0;
        const page_size = 10;
        const activity_filter_codes = null;
        const slider_select_data = null;
        const sort_type = 0;
        const is_fix_keyword = false;

        const ResultFragment = Java.use("com.sankuai.waimai.business.search.ui.result.ResultFragment");
        console.log("加载search_global_id获取工具类");
        const search_global_id = ResultFragment.g();
        console.log("获取search_global_id");

        const filter_mapping = null;
        const show_mode = null;
        const search_source = 0;
        const product_card_page_index = 0;
        const product_tag_id = null;
        const search_cursor = 0;
        const search_page_type = 0;
        const search_longitude = 0;
        const search_latitude = 0;
        const word_source = null;
        const gaoda_id = 0;
        const weien_id = 0;

        let params = Java.array('java.lang.Object', [
            Integer.$new(entrance_id),
            Integer.$new(category_type),
            Integer.$new(sub_category_type),
            keyword,
            Integer.$new(query_type),
            Integer.$new(page_index),
            Integer.$new(page_size),
            activity_filter_codes,
            slider_select_data,
            Integer.$new(sort_type),
            Boolean.$new(is_fix_keyword),
            Long.$new(search_global_id),
            filter_mapping,
            show_mode,
            Integer.$new(search_source),
            Integer.$new(product_card_page_index),
            product_tag_id,
            Integer.$new(search_cursor),
            Integer.$new(search_page_type),
            Integer.$new(search_longitude),
            Integer.$new(search_latitude),
            word_source,
            Integer.$new(gaoda_id),
            Integer.$new(weien_id)
        ]);
        console.log(`array: ${params}, array.length: ${params.length}`);

        // 构造ClientCall对象
        let call = ClientCall.$new(serviceMethod, params, retrofit.interceptors.value, retrofit.defInterceptors.value, retrofit.httpExecutor.value, retrofit.cache.value);
        console.log(`call: ${call}`);

        // 调用ClientCall.execute 执行request并获取response。
        let response = call.execute();
        // console.log(`response: ${toJson(response)}`);
        console.log(`response.url: ${response.url()}`);
        console.log(`response.code: ${response.code()}`);
        console.log(`response.message: ${response.message()}`);
        console.log(`response.body: ${toJson(response.body())}`);

        searchGlobalPageResult = toJson(response);
    });
    return searchGlobalPageResult;
}

/**
 *
 * 门店列表
 * **/
let poiListResult = "";

function getChannelPoiList(seq_num, city_code, city_name, latitude, longitude, address) {
    Java.perform(function () {
        let Object = Java.use('java.lang.Object');
        let Thread = Java.use('java.lang.Thread');
        let String = Java.use('java.lang.String');
        let Integer = Java.use('java.lang.Integer');
        let Boolean = Java.use('java.lang.Boolean');
        let Long = Java.use('java.lang.Long');
        let Double = Java.use('java.lang.Double');
        let Array = Java.use('java.lang.reflect.Array');
        const Class = Java.use('java.lang.Class');

        const WmAddress = Java.use('com.sankuai.waimai.foundation.location.v2.WmAddress');
        const wmAddress = WmAddress.$new();
        wmAddress.setStatusCode(1200);

        const WMLocation = Java.use('com.sankuai.waimai.foundation.location.v2.WMLocation');
        const wMLocation = WMLocation.$new.overload("java.lang.String").call(WMLocation, WMLocation.WM_MANUALLY_LOCATE_PROVIDER.value);

        console.log(`输入参数latitude: ${latitude}`);
        console.log(`当前location: ${wMLocation.$super}`);
        let methods = Java.cast(Java.use('android.location.Location').class, Class).getDeclaredMethods();
        let method;
        for (let i = 0; i < methods.length; i++) {
            if (methods[i].getName().indexOf('setLatitude') !== -1) {
                method = methods[i];
                console.log(`获取到setLatitude method: ${method}`);
                break;
            }
        }
        method.setAccessible(true);
        method.invoke.overload('java.lang.Object', '[Ljava.lang.Object;').call(method, wMLocation.$super, [Double.$new(latitude)]);
        console.log(`调用setLatitude后location: ${wMLocation.$super}`);

        console.log(`输入参数latitude: ${longitude}`);
        for (let i = 0; i < methods.length; i++) {
            if (methods[i].getName().indexOf('setLongitude') !== -1) {
                method = methods[i];
                console.log(`获取到setLongitude method: ${method}`);
                break;
            }
        }
        method.setAccessible(true);
        method.invoke.overload('java.lang.Object', '[Ljava.lang.Object;').call(method, wMLocation.$super, [Double.$new(longitude)]);
        console.log(`调用setLongitude后location: ${wMLocation.$super}`);

        const LocationResultCode = Java.use('com.sankuai.waimai.foundation.location.v2.LocationResultCode');
        const locationResultCode = LocationResultCode.$new();

        const aField = Java.cast(locationResultCode.getClass(), Class).getDeclaredField('a');
        aField.setAccessible(true);
        aField.setInt(locationResultCode, 1200);
        const bField = Java.cast(locationResultCode.getClass(), Class).getDeclaredField('b');
        bField.setAccessible(true);
        bField.set(locationResultCode, '');
        console.log(`构建locationResultCode: ${toJson(locationResultCode)}`);

        wMLocation.setLocationResultCode(locationResultCode);
        wmAddress.setWMLocation(wMLocation);
        wmAddress.setCreateTime(new Date().getTime());
        wmAddress.setAddress(address);

        const City = Java.use('com.sankuai.waimai.foundation.location.v2.City');
        const city = City.$new.overload().call(City);
        city.setCityName(city_name);
        city.setCityCode(city_code);
        wmAddress.setMafCity(city);

        const WmAddressManager = Java.use('com.sankuai.waimai.foundation.location.v2.g');
        const wmAddressManager = WmAddressManager.a.overload().call(WmAddressManager);
        wmAddressManager.a
            .overload('com.sankuai.waimai.foundation.location.v2.WmAddress', "java.lang.String", 'boolean')
            .call(wmAddressManager, wmAddress, 'LOCATE_MANUALLY', false);

        let Retrofit = Java.use('com.sankuai.meituan.retrofit2.Retrofit');
        let ClientCall = Java.use('com.sankuai.meituan.retrofit2.ClientCall');
        let Retrofit$Builder = Java.use('com.sankuai.meituan.retrofit2.Retrofit$Builder');

        // 我们将retrofit.c类视为Retrofit的创建器，用来生成Retrofit对象
        let Retrofit$Creator = Java.use('com.sankuai.waimai.platform.capacity.network.retrofit.c');
        console.log("将retrofit.c类视为Retrofit的创建器，生成Retrofit对象");

        // 我们需要注册ChannelApi这个interface
        let ChannelApi = Java.use('com.sankuai.waimai.business.page.common.net.request.ChannelApi');
        console.log("注册ChannelApi这个interface");

        // 当类中的方法出现重载时，需要通过.overload().call()的方式来调用
        let retrofit = Retrofit$Creator.a.overload('java.lang.Class').call(
            // .overload().call()的第一个参数必须时类本身，也可能时类对象本身，这个需要自己确定。
            Retrofit$Creator,

            // 注册ChannelApi这个interface
            ChannelApi.class
        );
        console.log(`retrofit: ${retrofit}`);

        // 通过getDeclaredMethods找到 ChannelApi.getChannelPoiList method
        methods = ChannelApi.class.getDeclaredMethods();
        for (let i = 0; i < methods.length; i++) {
            if (methods[i].getName().indexOf('getChannelPoiList') !== -1) {
                method = methods[i];
                console.log(`获取到getChannelPoiList method: ${method}`);
                break;
            }
        }

        // 通过retrofit对象和interface method生成ServiceMethod对象
        let serviceMethod = retrofit.loadServiceMethod(method);
        console.log(`通过retrofit对象和interface method生成ServiceMethod对象 serviceMethod: ${serviceMethod}`);

        const CommonRequestBodyHolder = Java.use('com.sankuai.waimai.business.page.common.net.request.a$a');
        const commonRequestBody = CommonRequestBodyHolder.$new().a();
        console.log(`构建公共请求参数 commonRequestBody: ${toJson(commonRequestBody)}`);

        // 构造 ChannelApi.getChannelPoiList 所需的参数
        const offset = 20 * seq_num;
        const dynamic_page = false;

        latitude = latitude * 1000000;
        longitude = longitude * 1000000;
        const page_index = seq_num;
        const page_size = 0;
        const sort_type = 0;
        const category_type = 910;
        const filter_type = 0;
        const second_category_type = 0;
        const navigate_type = 910;
        const activity_filter_codes = '';
        const slider_select_data = '';
        const load_type = 3;
        const preload = 0;
        const trace_tag = '';
        const rank_trace_id = commonRequestBody.q.value;

        const ListIDHelper = Java.use('com.sankuai.waimai.platform.utils.listid.ListIDHelper');
        const ListIDHelperHolder = Java.use('com.sankuai.waimai.platform.utils.listid.ListIDHelper$a');
        const listIDHelper = ListIDHelperHolder.a.value;
        const rank_list_id = listIDHelper.a.overload().call(listIDHelper);
        console.log(`生成rank_list_id: ${rank_list_id}`);

        const Statistics = Java.use('com.meituan.android.common.statistics.Statistics');
        const session_id = Statistics.getSession();
        const union_id = Statistics.getUnionId();

        const SilentRefreshHelper = Java.use('com.sankuai.waimai.business.page.common.list.ai.SilentRefreshHelper');
        const PageSource = Java.use('com.sankuai.waimai.business.page.common.list.ai.SilentRefreshHelper$PageSource');
        const silentRefreshHelper = SilentRefreshHelper.a.overload().call(SilentRefreshHelper);
        const behavioral_characteristics = silentRefreshHelper.c.overload('java.lang.String', 'int').call(silentRefreshHelper, PageSource.KING_KONG_POI_LIST.value, commonRequestBody.n.value);

        let params = Java.array('java.lang.Object', [
            Integer.$new(seq_num),
            Integer.$new(offset),
            Boolean.$new(dynamic_page),
            Long.$new(latitude),
            Long.$new(longitude),
            Long.$new(page_index),
            Long.$new(page_size),
            Long.$new(sort_type),
            Long.$new(category_type),
            Long.$new(filter_type),
            Long.$new(second_category_type),
            Long.$new(navigate_type),
            activity_filter_codes,
            slider_select_data,
            Integer.$new(load_type),
            Integer.$new(preload),
            trace_tag,
            rank_trace_id,
            rank_list_id,
            session_id,
            union_id,
            behavioral_characteristics
        ]);
        console.log(`array: ${params}, array.length: ${params.length}`);

        // 构造ClientCall对象
        let call = ClientCall.$new(serviceMethod, params, retrofit.interceptors.value, retrofit.defInterceptors.value, retrofit.httpExecutor.value, retrofit.cache.value);
        console.log(`call: ${call}`);

        // 调用ClientCall.execute 执行request并获取response。
        try {
            let response = call.execute();
            // console.log(`response: ${toJson(response)}`);
            console.log(`response.url: ${response.url()}`);
            console.log(`response.code: ${response.code()}`);
            console.log(`response.message: ${response.message()}`);
            console.log(`response.body: ${toJson(response.body())}`);

            poiListResult = toJson(response);
        } catch (err) {
            console.log(err);
        }
    });
    return poiListResult;
}

rpc.exports = {
    siua: siua,
    sharkraceid: sharkTraceid,
    searchShop: searchGlobalPage,
    poiList: getChannelPoiList
}