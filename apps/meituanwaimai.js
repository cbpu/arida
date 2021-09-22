function toJson(obj) {
    try {
        // const gson = Java.use('com.google.gson.Gson');
        const GsonBuilder = Java.use('com.google.gson.GsonBuilder');
        const gson = GsonBuilder.$new()
            .serializeSpecialFloatingPointValues()
            .disableHtmlEscaping()
            .serializeNulls()
            .enableComplexMapKeySerialization()
            .setLenient()
            .create();
        return (gson.toJson(obj)).toString()
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

function searchGlobalPage(keyword, city_code, city_name, latitude, longitude, address) {
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

        let {methods, method} = setLocation(latitude, Class, Double, longitude, address, city_name, city_code);

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
        methods = WaimaiSearchApi.class.getDeclaredMethods();
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
        // const keyword = keyword;
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

function buildRetrofitCall(retrofit, method, ClientCall, params) {
    // 通过retrofit对象和interface method生成ServiceMethod对象
    let serviceMethod = retrofit.loadServiceMethod(method);
    console.log(`通过retrofit对象和interface method生成ServiceMethod对象 serviceMethod: ${serviceMethod}`);

    // 构造ClientCall对象
    let call = ClientCall.$new(serviceMethod, params, retrofit.interceptors.value, retrofit.defInterceptors.value, retrofit.httpExecutor.value, retrofit.cache.value);
    console.log(`call: ${call}`);

    return call;
}

/**
 * 调用ClientCall.execute 执行request并获取response
 * */
function execute(call) {
    let result = {
        status: 0,
        err: null,
        body: null
    };

    try {
        let response = call.execute();
        console.log(`response.url: ${response.url()}`);
        console.log(`response.code: ${response.code()}`);
        console.log(`response.message: ${response.message()}`);
        // console.log(`response.body: ${toJson(response.body())}`);
        result.status = 1;
        result.body = toJson(response);
    } catch (err) {
        result.err = JSON.stringify(err, Object.getOwnPropertyNames(err), 2);
        console.log(`err: ${result.err}`);
    }

    return result;
}

/**
 * 设置位置
 * */
function setLocation(latitude, Class, Double, longitude, address, city_name, city_code) {
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
    return {methods, method};
}

/**
 *
 * 门店列表
 * **/
function getChannelPoiList(seq_num, city_code, city_name, latitude, longitude, address) {
    let result;
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
        let {methods, method} = setLocation(latitude, Class, Double, longitude, address, city_name, city_code);

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
        const load_type = 5;
        const preload = 0;
        const trace_tag = '';
        const rank_trace_id = commonRequestBody.q.value;

        const ListIDHelper = Java.use('com.sankuai.waimai.platform.utils.listid.ListIDHelper');
        const ListIDHelperHolder = Java.use('com.sankuai.waimai.platform.utils.listid.ListIDHelper$a');
        const listIDHelper = ListIDHelperHolder.a.value;
        const rank_list_id = listIDHelper.a.overload().call(listIDHelper);
        console.log(`生成rank_list_id: ${rank_list_id}`);

        try {
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

            let call = buildRetrofitCall(retrofit, method, ClientCall, params);
            result = execute(call);
        } catch (err) {
            console.log(err);
        }
    });

    return result;
}

/**
 *
 * 门店信息
 * **/
function getPoiInfo(poi_id) {
    let result;
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

        let Retrofit = Java.use('com.sankuai.meituan.retrofit2.Retrofit');
        let ClientCall = Java.use('com.sankuai.meituan.retrofit2.ClientCall');
        let Retrofit$Builder = Java.use('com.sankuai.meituan.retrofit2.Retrofit$Builder');

        // 我们将retrofit.c类视为Retrofit的创建器，用来生成Retrofit对象
        let Retrofit$Creator = Java.use('com.sankuai.waimai.platform.capacity.network.retrofit.c');
        console.log("将retrofit.c类视为Retrofit的创建器，生成Retrofit对象");

        // 我们需要注册ShopApiService这个interface
        let ShopApiService = Java.use('com.sankuai.waimai.business.restaurant.base.repository.net.ShopApiService');
        console.log("注册ShopApiService这个interface");

        // 当类中的方法出现重载时，需要通过.overload().call()的方式来调用
        let retrofit = Retrofit$Creator.a.overload('java.lang.Class').call(
            // .overload().call()的第一个参数必须时类本身，也可能时类对象本身，这个需要自己确定。
            Retrofit$Creator,

            // 注册ShopApiService这个interface
            ShopApiService.class
        );
        console.log(`retrofit: ${retrofit}`);

        // 通过getDeclaredMethods找到 ShopApiService.getPoiInfo method
        let methods = ShopApiService.class.getDeclaredMethods();
        let method;
        for (let i = 0; i < methods.length; i++) {
            if (methods[i].getName().indexOf('getPoiInfo') !== -1) {
                method = methods[i];
                console.log(`获取到getPoiInfo method: ${method}`);
                break;
            }
        }

        // 构造 ShopApiService.getPoiInfo 所需的参数
        const business_type = 0;
        const referer_source = 1;
        const allowance_alliance_scenes = '';
        const ad_activity_flag = '';
        let params = Java.array('java.lang.Object', [
            Long.$new(poi_id),
            Integer.$new(business_type),
            Integer.$new(referer_source),
            allowance_alliance_scenes,
            ad_activity_flag
        ]);
        console.log(`array: ${params}, array.length: ${params.length}`);

        let call = buildRetrofitCall(retrofit, method, ClientCall, params);
        result = execute(call);
    });

    return result;
}

/**
 *
 * 代金券信息
 * **/
function getVoucherCouponList(poi_id) {
    let result;
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

        let Retrofit = Java.use('com.sankuai.meituan.retrofit2.Retrofit');
        let ClientCall = Java.use('com.sankuai.meituan.retrofit2.ClientCall');
        let Retrofit$Builder = Java.use('com.sankuai.meituan.retrofit2.Retrofit$Builder');

        // 我们将retrofit.c类视为Retrofit的创建器，用来生成Retrofit对象
        let Retrofit$Creator = Java.use('com.sankuai.waimai.platform.capacity.network.retrofit.c');
        console.log("将retrofit.c类视为Retrofit的创建器，生成Retrofit对象");

        // 我们需要注册ShopApiService这个interface
        let ShopApiService = Java.use('com.sankuai.waimai.business.restaurant.base.repository.net.ShopApiService');
        console.log("注册ShopApiService这个interface");

        // 当类中的方法出现重载时，需要通过.overload().call()的方式来调用
        let retrofit = Retrofit$Creator.a.overload('java.lang.Class').call(
            // .overload().call()的第一个参数必须时类本身，也可能时类对象本身，这个需要自己确定。
            Retrofit$Creator,

            // 注册ShopApiService这个interface
            ShopApiService.class
        );
        console.log(`retrofit: ${retrofit}`);

        // 通过getDeclaredMethods找到 ShopApiService.getVoucherCouponList method
        let methods = ShopApiService.class.getDeclaredMethods();
        let method;
        for (let i = 0; i < methods.length; i++) {
            if (methods[i].getName().indexOf('getVoucherCouponList') !== -1) {
                method = methods[i];
                console.log(`获取到getVoucherCouponList method: ${method}`);
                break;
            }
        }

        // 构造 ShopApiService.getVoucherCouponList 所需的参数
        let params = Java.array('java.lang.Object', [
            Long.$new(poi_id)
        ]);
        console.log(`array: ${params}, array.length: ${params.length}`);

        let call = buildRetrofitCall(retrofit, method, ClientCall, params);
        result = execute(call);
    });

    return result;
}

/**
 *
 * 最新门店id信息
 * **/
function getPopupMenu(poi_id) {
    let result;
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

        let Retrofit = Java.use('com.sankuai.meituan.retrofit2.Retrofit');
        let ClientCall = Java.use('com.sankuai.meituan.retrofit2.ClientCall');
        let Retrofit$Builder = Java.use('com.sankuai.meituan.retrofit2.Retrofit$Builder');

        // 我们将retrofit.c类视为Retrofit的创建器，用来生成Retrofit对象
        let Retrofit$Creator = Java.use('com.sankuai.waimai.platform.capacity.network.retrofit.c');
        console.log("将retrofit.c类视为Retrofit的创建器，生成Retrofit对象");

        // 我们需要注册ShopApiService这个interface
        let ShopApiService = Java.use('com.sankuai.waimai.business.restaurant.base.repository.net.ShopApiService');
        console.log("注册ShopApiService这个interface");

        // 当类中的方法出现重载时，需要通过.overload().call()的方式来调用
        let retrofit = Retrofit$Creator.a.overload('java.lang.Class').call(
            // .overload().call()的第一个参数必须时类本身，也可能时类对象本身，这个需要自己确定。
            Retrofit$Creator,

            // 注册ShopApiService这个interface
            ShopApiService.class
        );
        console.log(`retrofit: ${retrofit}`);

        // 通过getDeclaredMethods找到 ShopApiService.getPopupMenu method
        let methods = ShopApiService.class.getDeclaredMethods();
        let method;
        for (let i = 0; i < methods.length; i++) {
            if (methods[i].getName().indexOf('getPopupMenu') !== -1) {
                method = methods[i];
                console.log(`获取到getPopupMenu method: ${method}`);
                break;
            }
        }

        // 构造 ShopApiService.getPopupMenu 所需的参数
        const source = 1;
        const business_type = 0;
        let params = Java.array('java.lang.Object', [
            Long.$new(poi_id),
            Integer.$new(source),
            Integer.$new(business_type)
        ]);
        console.log(`array: ${params}, array.length: ${params.length}`);

        let call = buildRetrofitCall(retrofit, method, ClientCall, params);
        result = execute(call);
    });

    return result;
}

/**
 *
 * 优惠券信息
 * **/
function getAvailableCouponTip(poi_id) {
    let result;
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

        let Retrofit = Java.use('com.sankuai.meituan.retrofit2.Retrofit');
        let ClientCall = Java.use('com.sankuai.meituan.retrofit2.ClientCall');
        let Retrofit$Builder = Java.use('com.sankuai.meituan.retrofit2.Retrofit$Builder');

        // 我们将retrofit.c类视为Retrofit的创建器，用来生成Retrofit对象
        let Retrofit$Creator = Java.use('com.sankuai.waimai.platform.capacity.network.retrofit.c');
        console.log("将retrofit.c类视为Retrofit的创建器，生成Retrofit对象");

        // 我们需要注册ShopApiService这个interface
        let ShopApiService = Java.use('com.sankuai.waimai.business.restaurant.base.repository.net.ShopApiService');
        console.log("注册ShopApiService这个interface");

        // 当类中的方法出现重载时，需要通过.overload().call()的方式来调用
        let retrofit = Retrofit$Creator.a.overload('java.lang.Class').call(
            // .overload().call()的第一个参数必须时类本身，也可能时类对象本身，这个需要自己确定。
            Retrofit$Creator,

            // 注册ShopApiService这个interface
            ShopApiService.class
        );
        console.log(`retrofit: ${retrofit}`);

        // 通过getDeclaredMethods找到 ShopApiService.getAvailableCouponTip method
        let methods = ShopApiService.class.getDeclaredMethods();
        let method;
        for (let i = 0; i < methods.length; i++) {
            if (methods[i].getName().indexOf('getAvailableCouponTip') !== -1) {
                method = methods[i];
                console.log(`获取到getAvailableCouponTip method: ${method}`);
                break;
            }
        }

        // 构造 ShopApiService.getAvailableCouponTip 所需的参数
        let params = Java.array('java.lang.Object', [
            Long.$new(poi_id)
        ]);
        console.log(`array: ${params}, array.length: ${params.length}`);

        let call = buildRetrofitCall(retrofit, method, ClientCall, params);
        result = execute(call);
    });

    return result;
}

/**
 *
 * 菜品信息
 * **/
function getShopMenu(poi_id) {
    let result;
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

        let Retrofit = Java.use('com.sankuai.meituan.retrofit2.Retrofit');
        let ClientCall = Java.use('com.sankuai.meituan.retrofit2.ClientCall');
        let Retrofit$Builder = Java.use('com.sankuai.meituan.retrofit2.Retrofit$Builder');

        // 我们将retrofit.c类视为Retrofit的创建器，用来生成Retrofit对象
        let Retrofit$Creator = Java.use('com.sankuai.waimai.platform.capacity.network.retrofit.c');
        console.log("将retrofit.c类视为Retrofit的创建器，生成Retrofit对象");

        // 我们需要注册ShopApiService这个interface
        let ShopApiService = Java.use('com.sankuai.waimai.business.restaurant.base.repository.net.ShopApiService');
        console.log("注册ShopApiService这个interface");

        // 当类中的方法出现重载时，需要通过.overload().call()的方式来调用
        let retrofit = Retrofit$Creator.a.overload('java.lang.Class').call(
            // .overload().call()的第一个参数必须时类本身，也可能时类对象本身，这个需要自己确定。
            Retrofit$Creator,

            // 注册ShopApiService这个interface
            ShopApiService.class
        );
        console.log(`retrofit: ${retrofit}`);

        // 通过getDeclaredMethods找到 ShopApiService.getShopMenu method
        let methods = ShopApiService.class.getDeclaredMethods();
        let method;
        for (let i = 0; i < methods.length; i++) {
            if (methods[i].getName().indexOf('getShopMenu') !== -1) {
                method = methods[i];
                console.log(`获取到getShopMenu method: ${method}`);
                break;
            }
        }

        // 构造 ShopApiService.getShopMenu 所需的参数
        const group_chat_share = '';
        const product_spu_id = 0;
        const recall_type = 0;
        const search_word = '';
        const search_log_id = '';
        const page_index = 0;
        const recommend_product = '';
        const source_page_type = 0;

        const StyleTemplateIdUtil = Java.use('com.sankuai.waimai.business.restaurant.poicontainer.dynamic.framework.g')
        const styleTemplateIdUtil = StyleTemplateIdUtil.c();
        const style_template_ids = styleTemplateIdUtil.b.overload().call(styleTemplateIdUtil);
        console.log(`生成style_template_ids: ${style_template_ids}`);

        const allowance_alliance_scenes = '';
        const content_info = '';
        const ad_activity_flag = '';
        const brand_page_type = 0;
        const is_cross = 0;
        const request_mark = '{"seckill":0}';

        let params = Java.array('java.lang.Object', [
            group_chat_share,
            Long.$new(poi_id),
            Long.$new(product_spu_id),
            Integer.$new(recall_type),
            search_word,
            search_log_id,
            Integer.$new(page_index),
            recommend_product,
            Integer.$new(source_page_type),
            style_template_ids,
            allowance_alliance_scenes,
            content_info,
            ad_activity_flag,
            Integer.$new(brand_page_type),
            Integer.$new(is_cross),
            request_mark
        ]);
        console.log(`array: ${params}, array.length: ${params.length}`);

        let call = buildRetrofitCall(retrofit, method, ClientCall, params);
        result = execute(call);
    });

    return result;
}

/**
 *
 * 评论信息
 * **/
function getComments(poi_id, page_offset) {
    let result;
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

        let Retrofit = Java.use('com.sankuai.meituan.retrofit2.Retrofit');
        let ClientCall = Java.use('com.sankuai.meituan.retrofit2.ClientCall');
        let Retrofit$Builder = Java.use('com.sankuai.meituan.retrofit2.Retrofit$Builder');

        // 我们将retrofit.c类视为Retrofit的创建器，用来生成Retrofit对象
        let Retrofit$Creator = Java.use('com.sankuai.waimai.platform.capacity.network.retrofit.c');
        console.log("将retrofit.c类视为Retrofit的创建器，生成Retrofit对象");

        // 我们需要注册ShopApiService这个interface
        let ShopApiService = Java.use('com.sankuai.waimai.business.restaurant.base.repository.net.ShopApiService');
        console.log("注册ShopApiService这个interface");

        // 当类中的方法出现重载时，需要通过.overload().call()的方式来调用
        let retrofit = Retrofit$Creator.a.overload('java.lang.Class').call(
            // .overload().call()的第一个参数必须时类本身，也可能时类对象本身，这个需要自己确定。
            Retrofit$Creator,

            // 注册ShopApiService这个interface
            ShopApiService.class
        );
        console.log(`retrofit: ${retrofit}`);

        // 通过getDeclaredMethods找到 ShopApiService.getComments method
        let methods = ShopApiService.class.getDeclaredMethods();
        let method;
        for (let i = 0; i < methods.length; i++) {
            if (methods[i].getName().indexOf('getComments') !== -1) {
                method = methods[i];
                console.log(`获取到getComments method: ${method}`);
                break;
            }
        }

        // 构造 ShopApiService.getComments 所需的参数
        const page_size = 20;
        const comment_score_type = 0;
        const label_id = 0;
        let params = Java.array('java.lang.Object', [
            Long.$new(poi_id),
            Integer.$new(page_offset),
            Integer.$new(page_size),
            Integer.$new(comment_score_type),
            Long.$new(label_id)
        ]);
        console.log(`array: ${params}, array.length: ${params.length}`);

        let call = buildRetrofitCall(retrofit, method, ClientCall, params);
        result = execute(call);
    });

    return result;
}

/**
 *
 * 红包列表
 */
function getMemberCouponList(poi_id) {
    let result;
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

        let Retrofit = Java.use('com.sankuai.meituan.retrofit2.Retrofit');
        let ClientCall = Java.use('com.sankuai.meituan.retrofit2.ClientCall');
        let Retrofit$Builder = Java.use('com.sankuai.meituan.retrofit2.Retrofit$Builder');

        // 我们将retrofit.c类视为Retrofit的创建器，用来生成Retrofit对象
        let Retrofit$Creator = Java.use('com.sankuai.waimai.platform.capacity.network.retrofit.c');
        console.log("将retrofit.c类视为Retrofit的创建器，生成Retrofit对象");

        // 我们需要注册ShopApiService这个interface
        let ShopApiService = Java.use('com.sankuai.waimai.platform.restaurant.membercoupon.FloatingMemberCouponListClient$Service');
        console.log("注册FloatingMemberCouponListClient$Service这个interface");

        // 当类中的方法出现重载时，需要通过.overload().call()的方式来调用
        let retrofit = Retrofit$Creator.a.overload('java.lang.Class').call(
            // .overload().call()的第一个参数必须时类本身，也可能时类对象本身，这个需要自己确定。
            Retrofit$Creator,

            // 注册ShopApiService这个interface
            ShopApiService.class
        );
        console.log(`retrofit: ${retrofit}`);

        // 通过getDeclaredMethods找到 ShopApiService.getShopMenu method
        let methods = ShopApiService.class.getDeclaredMethods();
        let method;
        for (let i = 0; i < methods.length; i++) {
            if (methods[i].getName().indexOf('getMemberCouponList') !== -1) {
                method = methods[i];
                console.log(`获取到getMemberCouponList method: ${method}`);
                break;
            }
        }

        // 构造 ShopApiService.getMemberCouponList 所需的参数
        const biz_type = 0;
        let params = Java.array('java.lang.Object', [
            Long.$new(poi_id),
            Integer.$new(biz_type)
        ]);
        console.log(`array: ${params}, array.length: ${params.length}`);

        let call = buildRetrofitCall(retrofit, method, ClientCall, params);
        result = execute(call);
    });

    return result;
}

/**
 *
 * 商品详情
 */
function getGoodDetail(poi_id, spu_id, sku_id) {
    let result;
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

        let Retrofit = Java.use('com.sankuai.meituan.retrofit2.Retrofit');
        let ClientCall = Java.use('com.sankuai.meituan.retrofit2.ClientCall');
        let Retrofit$Builder = Java.use('com.sankuai.meituan.retrofit2.Retrofit$Builder');

        // 我们将retrofit.c类视为Retrofit的创建器，用来生成Retrofit对象
        let Retrofit$Creator = Java.use('com.sankuai.waimai.platform.capacity.network.retrofit.c');
        console.log("将retrofit.c类视为Retrofit的创建器，生成Retrofit对象");

        // 我们需要注册ShopApiService这个interface
        let ShopApiService = Java.use('com.sankuai.waimai.business.restaurant.base.repository.net.ShopApiService');
        console.log("注册ShopApiService这个interface");

        // 当类中的方法出现重载时，需要通过.overload().call()的方式来调用
        let retrofit = Retrofit$Creator.a.overload('java.lang.Class').call(
            // .overload().call()的第一个参数必须时类本身，也可能时类对象本身，这个需要自己确定。
            Retrofit$Creator,

            // 注册ShopApiService这个interface
            ShopApiService.class
        );
        console.log(`retrofit: ${retrofit}`);

        // 通过getDeclaredMethods找到 ShopApiService.getGoodDetail method
        let methods = ShopApiService.class.getDeclaredMethods();
        let method;
        for (let i = 0; i < methods.length; i++) {
            if (methods[i].getName().indexOf('getGoodDetail') !== -1) {
                method = methods[i];
                console.log(`获取到getGoodDetail method: ${method}`);
                break;
            }
        }

        // 构造 ShopApiService.getGoodDetail 所需的参数
        try {
            let map = Java.use('java.util.HashMap').$new.overload().call(Java.use('java.util.HashMap'));
            map.put('wm_poi_id', poi_id);
            map.put('spu_id', spu_id);
            map.put('sku_id', sku_id);
            map.put('card_info', '');

            let ListIDHelper = Java.use('com.sankuai.waimai.platform.utils.listid.ListIDHelper');
            let ListIDHelperFactory = Java.use('com.sankuai.waimai.platform.utils.listid.ListIDHelper$a');

            let listIDHelperField = Java.cast(ListIDHelperFactory.class, Class).getDeclaredField("a");
            listIDHelperField.setAccessible(true);

            let listIDHelper = listIDHelperField.get(null);

            methods = ListIDHelper.class.getDeclaredMethods();
            let methodB;
            for (let i = 0; i < methods.length; i++) {
                if (methods[i].getName().indexOf('b') !== -1) {
                    methodB = methods[i];
                    console.log(`获取到ListIDHelper b method: ${methodB}`);
                    break;
                }
            }
            methodB.setAccessible(true);

            map.put('rank_list_id', methodB.invoke(listIDHelper, null));

            console.log(`map: ${map}`)

            let params = Java.array('java.lang.Object', [
                map
            ]);
            console.log(`array: ${params}, array.length: ${params.length}`);

            let call = buildRetrofitCall(retrofit, method, ClientCall, params);
            result = execute(call);
        } catch (err) {
            console.log(err);
        }
    });

    return result;
}

/**
 *
 * 商品详情
 */
function getProductsList(poi_id, spu_tag_id, spu_tag_type) {
    let result;
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

        let Retrofit = Java.use('com.sankuai.meituan.retrofit2.Retrofit');
        let ClientCall = Java.use('com.sankuai.meituan.retrofit2.ClientCall');
        let Retrofit$Builder = Java.use('com.sankuai.meituan.retrofit2.Retrofit$Builder');

        // 我们将retrofit.c类视为Retrofit的创建器，用来生成Retrofit对象
        let Retrofit$Creator = Java.use('com.sankuai.waimai.platform.capacity.network.retrofit.c');
        console.log("将retrofit.c类视为Retrofit的创建器，生成Retrofit对象");

        // 我们需要注册ShopApiService这个interface
        let ShopApiService = Java.use('com.sankuai.waimai.business.restaurant.base.repository.net.ShopApiService');
        console.log("注册ShopApiService这个interface");

        // 当类中的方法出现重载时，需要通过.overload().call()的方式来调用
        let retrofit = Retrofit$Creator.a.overload('java.lang.Class').call(
            // .overload().call()的第一个参数必须时类本身，也可能时类对象本身，这个需要自己确定。
            Retrofit$Creator,

            // 注册SCApiService这个interface
            ShopApiService.class
        );
        console.log(`retrofit: ${retrofit}`);

        // 通过getDeclaredMethods找到 ShopApiService.getProductsList method
        let methods = ShopApiService.class.getDeclaredMethods();
        let method;
        for (let i = 0; i < methods.length; i++) {
            if (methods[i].getName().indexOf('getProductsList') !== -1) {
                method = methods[i];
                console.log(`获取到getProductsList method: ${method}`);
                break;
            }
        }

        // 构造 ShopApiService.getProductsList 所需的参数
        try {
            let map = Java.use('java.util.HashMap').$new.overload().call(Java.use('java.util.HashMap'));
            map.put('wm_poi_id', poi_id);
            map.put("page_index", "0");
            map.put("spu_tag_id", spu_tag_id);
            map.put("tag_type", spu_tag_type);
            map.put("sort_type", '1');
            map.put("business_type", "0");
            map.put("allowance_alliance_scenes", null);
            map.put("ad_activity_flag", null);


            let params = Java.array('java.lang.Object', [
                map
            ]);
            console.log(`array: ${params}, array.length: ${params.length}`);

            let call = buildRetrofitCall(retrofit, method, ClientCall, params);
            result = execute(call);
        } catch (err) {
            console.log(err);
        }
    });

    return result;
}

rpc.exports = {
    siua: siua,
    sharkraceid: sharkTraceid,
    searchShop: searchGlobalPage,
    poiList: getChannelPoiList,
    poiInfo: getPoiInfo,
    voucherList: getVoucherCouponList,
    redCoupons: getMemberCouponList,
    popupMenu: getPopupMenu,
    availableCoupon: getAvailableCouponTip,
    shopMenu: getShopMenu,
    commentList: getComments,
    goodsDetail: getGoodDetail,
    spuList: getProductsList
}