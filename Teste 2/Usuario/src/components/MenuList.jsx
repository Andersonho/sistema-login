import {Menu} from 'antd'
import {HomeOutlined, AppstoreOutlined,AreaChartOutlined,PayCircleOutlined,SettingOutlined } from 'ant-design/icons'; 
import MenuItem from 'antd/es/menu/MenuItem';

const MenuList = () => {
    return (
        <Menu theme="dark">
            <MenuItem key="home" icon={<HomeOutlined/>}
            >
                Home
            </MenuItem>
            <MenuItem key="activity" icon={<AppstoreOutlined/>}
            >
                Activity 
            </MenuItem>
            <MenuItem key="progress" icon={<AreaChartOutlined/>}
            >
                Progress 
            </MenuItem>
            <MenuItem key="payment" icon={<PayCircleOutlined/>}
            >
                Payment  
            </MenuItem>
            <MenuItem key="setting" icon={<SettingOutlined/>}
            >
                Setting 
            </MenuItem>
    </Menu>
    );
};

export default MenuList;