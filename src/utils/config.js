const host = '/v1/';

const Api = {
    login: `${host}auth/loginRequestInternalDebug`,//登录
    campaign: `${host}store/campaigns`,//活动列表
    campaignInfo: `${host}store/campaign/45/info/`,//详细信息
}

export default Api