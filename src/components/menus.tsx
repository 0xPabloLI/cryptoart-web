import React from 'react';

import {
    SnippetsOutlined,
    HomeOutlined,
    InsertRowAboveOutlined,
    UserOutlined,
    ScheduleOutlined,
    BankOutlined,
    SettingOutlined
} from '@ant-design/icons';

import { Menu, Affix, Button } from 'antd';

import { useLocation, useHistory } from "react-router-dom";
import CSS from './menus.module.scss';

export default function Menus() {
    const location = useLocation();
    const history = useHistory();
    const pathnames = location.pathname.split("/");
    let currentpath = pathnames[1];

    return (
        <>
            <Affix>
                <Menu theme="light" defaultOpenKeys={['s1', 's2']} mode="inline" selectedKeys={[currentpath]} className={CSS.menu}>

                    <Menu.SubMenu key="s1" title={<span><HomeOutlined /><span>HOME</span></span>}>
                        <Menu.Item key="topics" onClick={() => {
                            history.push("/topics");
                        }}>
                            <BankOutlined />
                            <span>Lessons</span>
                        </Menu.Item>
                        <Menu.Item key="schedule" onClick={() => {
                            history.push("/schedule");
                        }}>
                            <ScheduleOutlined />
                            <span>Schedule</span>
                        </Menu.Item>
                    </Menu.SubMenu>
                    
                    <Menu.Item key="courses" onClick={() => {
                        history.push("/courses");
                    }}>
                        <InsertRowAboveOutlined />
                        <span>Courses</span>
                    </Menu.Item>

                    {/* <Menu.Item key="material" onClick={() => {
                        history.push("/material");
                    }}>
                        <SnippetsOutlined />
                        <span>Material</span>
                    </Menu.Item> */}

                    
                    <Menu.Item key="account" onClick={() => {
                        history.push("/account");
                    }}>
                        <UserOutlined />
                        <span>Account</span>
                    </Menu.Item>

                    <Menu.Item key="setting" disabled onClick={() => {
                        history.push("/setting");
                    }}>
                        <SettingOutlined />
                        <span>Admin</span>
                    </Menu.Item>

                </Menu>
            </Affix>
        </>
    );
}