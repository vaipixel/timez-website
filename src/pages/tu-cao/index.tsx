import React, {Component} from "react";
import {TuCaoUtil} from "@site/src/utils";

export default class TuCao extends Component {

    componentDidMount() {
        let params = new URLSearchParams(window.location.search)
        let data: any = {
                "nickname": params.get("nickname"),
                "avatar": params.get("avatar"),
                "openid": params.get("openid"),
            },
            productId = 366791;
        alert(data.openid)
        TuCaoUtil.request(productId, data);
    }

    render() {
        return <span>跳转中...</span>;
    }
}