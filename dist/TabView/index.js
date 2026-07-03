import { withTheme } from '../config';
import { TabViewBase } from '@charles-johnson/rneui-base/dist/TabView/TabView';
import { TabViewItem, } from '@charles-johnson/rneui-base/dist/TabView/TabView.Item';
export default Object.assign(withTheme(TabViewBase, 'TabView'), {
    Item: withTheme(TabViewItem, 'TabViewItem'),
});
