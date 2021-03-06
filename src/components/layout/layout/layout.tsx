import React from 'react';
import { Layout } from 'antd';
import Nav from '../../menus';
import Header from '../../header/header';

import CopyRight from '../copyright/index';

function MainLayout(props: any) {
    return (
        <>
            <Header />
            <Layout>
                <Layout.Sider style={{ background: '#fff' }}>
                    <Nav />
                </Layout.Sider>
                <Layout>
                    <Layout.Content style={{ margin: '0 8px' }}>
                        {props.children}
                        <Layout.Footer style={{ textAlign: 'center' }}>
                            <CopyRight />
                        </Layout.Footer>
                    </Layout.Content>
                </Layout>
            </Layout>
        </>
    )
}

export default MainLayout;