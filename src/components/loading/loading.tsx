import React from 'react';
import { Layout, Spin } from 'antd';

import CSS from './loading.module.scss';

function PageLoading(props: any) {
    return (
        <Layout className={CSS.pageLoading} {...props}>
            <Spin className={CSS.spin} size="large" tip={props.tip ? props.tip : '加载中, 请稍后...'} />
        </Layout>
    )
}

export { PageLoading };