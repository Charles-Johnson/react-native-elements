import { withTheme } from '../config';
import { DialogLoading, } from '@charles-johnson/rneui-base/dist/Dialog/Dialog.Loading';
import { DialogTitle, } from '@charles-johnson/rneui-base/dist/Dialog/Dialog.Title';
import { DialogButton, } from '@charles-johnson/rneui-base/dist/Dialog/Dialog.Button';
import { DialogActions, } from '@charles-johnson/rneui-base/dist/Dialog/Dialog.Actions';
import { DialogBase } from '@charles-johnson/rneui-base/dist/Dialog/Dialog';
const ThemedDialogLoading = withTheme(DialogLoading, 'DialogLoading');
const ThemedDialogTitle = withTheme(DialogTitle, 'DialogTitle');
const ThemedDialogButton = withTheme(DialogButton, 'DialogButton');
const ThemedDialogActions = withTheme(DialogActions, 'DialogActions');
export default Object.assign(withTheme(DialogBase, 'Dialog'), {
    Loading: ThemedDialogLoading,
    Title: ThemedDialogTitle,
    Actions: ThemedDialogActions,
    Button: ThemedDialogButton,
});
