import { memo } from 'react';
import { Drinks } from '../src/containers';

const Page = memo(() => <Drinks />);
Page.displayName = nameof(Page);

export default Page;
