import { withTheme } from '../config';
import { CardBase } from '@charles-johnson/rneui-base/dist/Card/Card';
import { CardDivider, } from '@charles-johnson/rneui-base/dist/Card/Card.Divider';
import { CardFeaturedSubtitle } from '@charles-johnson/rneui-base/dist/Card/Card.FeaturedSubtitle';
import { CardFeaturedTitle } from '@charles-johnson/rneui-base/dist/Card/Card.FeaturedTitle';
import { CardImage } from '@charles-johnson/rneui-base/dist/Card/Card.Image';
import { CardTitle } from '@charles-johnson/rneui-base/dist/Card/Card.Title';
const ThemedCardDivider = withTheme(CardDivider, 'CardDivider');
const ThemedCardFeaturedSubtitle = withTheme(CardFeaturedSubtitle, 'CardFeaturedSubtitle');
const ThemedCardFeaturedTitle = withTheme(CardFeaturedTitle, 'CardFeaturedTitle');
const ThemedCardTitle = withTheme(CardTitle, 'CardTitle');
const ThemedCardImage = withTheme(CardImage, 'CardImage');
const ThemedCard = Object.assign(withTheme(CardBase, 'Card'), {
    Divider: ThemedCardDivider,
    Image: ThemedCardImage,
    Title: ThemedCardTitle,
    FeaturedTitle: ThemedCardFeaturedTitle,
    FeaturedSubtitle: ThemedCardFeaturedSubtitle,
});
export default ThemedCard;
