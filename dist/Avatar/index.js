import { Avatar } from '@charles-johnson/rneui-base/dist/Avatar/Avatar';
import { Accessory, } from '@charles-johnson/rneui-base/dist/Avatar/Avatar.Accessory';
import { withTheme } from '../config';
export default Object.assign(withTheme(Avatar, 'Avatar'), {
    Accessory: withTheme(Accessory, 'AvatarAccessory'),
});
