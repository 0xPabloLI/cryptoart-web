import React, { useEffect, useState } from 'react';
import { UserOutlined, CommentOutlined } from '@ant-design/icons';
import { Layout, Avatar, Dropdown, Menu, message } from 'antd';
import CSS from './header.module.scss';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import Cookies from 'js-cookie';

import Logo from '../../assets/img/logo.png';
import Exit from '../../assets/svg/exit.svg';

// import {getUserinfo, logout, updateUserinfo, resetPassword} from '../../api/account';

function getStringValue(str: string) {
    if (!str) return 0;
    return str.split('')
        .reduce((a: any, b: any, index: number) => {
            return Number(index === 1 ? a.charCodeAt() : a) + b.charCodeAt();
        })
}

function Header(props: any) {

    const {account, userInfo} = props;

    const [visible, setVisible] = useState(props.visible || false);

    const history = useHistory();

    useEffect(() => {

        // var token = Cookies.get('token');
        // var userID = Cookies.get('lms_user_id');
        // if(token && userID) {

        //     if(!userInfo.user_id || userInfo.user_id.length == 0) {
        //         getUserinfo({
        //             user_id: userID
        //         }, (error: any, result: any) => {
        //             if (error) {
        //                 console.log(error);
        //                 // message.error(error);
        //                 history.push("/login");
        //             } else {
        //                 console.log("result: " + result);

                        
        //                 props.setUserInfo({
        //                     user_id: result.account.user_id,
        //                     user_name: result.user.user_username,
        //                     user_level: 1,
        //                     user_role: result.account.user_role,
        //                     user_nickname: result.profile.user_nickname?result.profile.user_nickname:"",
        //                     user_fullname: result.profile.user_fullname?result.profile.user_fullname:"",
        //                     user_language: result.profile.user_language?result.profile.user_language:"",
        //                     user_upload_limit: result.account.user_upload_limit,
        //                     user_upload_usage: result.account.user_upload_usage,
        //                     user_email: [
        //                         result.user.user_email?result.user.user_email:""
        //                     ],
        //                     user_phonenumber: result.profile.user_phone?result.profile.user_phone:"",
        //                     user_picture: "",
        //                     user_pronouns: result.profile.user_pronous?result.profile.user_pronous:"",
        //                     user_title: result.profile.user_title?result.profile.user_title:"",
        //                     user_biography: result.profile.user_biography?result.profile.user_biography:"",
        //                     user_links: [],
        //                     user_timezone: result.profile.user_timezone?result.profile.user_timezone:"",
        //                     user_lastlogin: result.user.last_login,
        //                     user_receiveinformation: result.user.user_receiveinfo,
        //                     user_programs: result.programs?result.programs:[],
        //                 });
        //             }
        //         });
        //     }
        // }
        // else {
        //     history.push("/login");
        // }

    },[]);

    return <>
        <Layout.Header className={CSS.header}>
            <img className={CSS.logo} src={Logo} alt="logo" />
            <span className={CSS.title}>CAPUP</span>
            {
                // account && account.account && account.account.userId ?
                Cookies.get('token') && Cookies.get('lms_user_id') ?
                    (
                        // 
                        <div className={CSS.userinfo}>
                            <Avatar
                                className={CSS.avatar}
                                icon={<CommentOutlined />}
                                style={{
                                    backgroundColor: "#fffff"
                                }} />
                            <Avatar
                                className={CSS.avatar}
                                icon={<UserOutlined />}
                                style={{
                                    backgroundColor: "#fffff"
                                }} />
                            <Dropdown
                                visible={visible}
                                onVisibleChange={setVisible}
                                overlay={(
                                    <Menu>
                                        <Menu.Item
                                            onClick={() => {
                                                Cookies.remove('token');
                                                Cookies.remove('lms_user_id');

                                                props.setAccount({});
                                                props.setUserInfo({
                                                    user_id: "",
                                                    user_name: "",
                                                    user_level: 1,
                                                    user_role: 1,
                                                    user_nickname: "",
                                                    user_fullname: "",
                                                    user_language: "",
                                                    user_email: [],
                                                    user_phonenumber: "",
                                                    user_picture: "",
                                                    user_pronouns: "",
                                                    user_title: "",
                                                    user_biography: "",
                                                    user_links: [],
                                                    user_timezone: "",
                                                    user_lastlogin: "",
                                                    user_receiveinformation: true,
                                                });

                                                history.push('/login');
                                            }}>
                                            <img className={CSS.logo} src={Exit} alt="logo" style={{ marginRight: '5px' }} />
                                            <span style={{ verticalAlign: 'middle' }} className={CSS.avatarTxt}>Logout</span>
                                        </Menu.Item>
                                        
                                        <Menu.Item key="account" onClick={() => {
                                            history.push("/account");
                                        }}>
                                            <UserOutlined />
                                            <span>Account</span>
                                        </Menu.Item>
                                    </Menu>
                                )}>
                                <span className={CSS.name}>{userInfo.user_nickname.length > 0?userInfo.user_nickname:userInfo.user_name }</span>
                            </Dropdown>
                        </div>
                    ) : ''
            }

        </Layout.Header>
    </>;
}

function stateToProps(state: any) {
    return {
        account: state.datacontrollor.account,
        userInfo: state.datacontrollor.userInfo,
    }
}


function actionsToProps(dispatch: any) {
    return {
        setUserInfo: (userInfo: any) => {
            dispatch({
                type: 'setUserInfo',
                userInfo
            })
        },
        setAccount: (account: any) => {
            dispatch({
                type: 'setAccount',
                account
            })
        }
    }
}

export default connect(stateToProps, actionsToProps)(Header);