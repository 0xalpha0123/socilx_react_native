import {boolean, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import * as React from 'react';

import {PostText} from '../../../../../src/components/displayers/WallPostCard';
import CenterView from '../../../../helpers/CenterView';

storiesOf('Components/displayers', module)
	.addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
	.addDecorator(withKnobs)
	.add('PostText', () => {
		const fullTextVisible = boolean('fullTextVisible', false);
		return (
			<PostText
				getText={(text) => text}
				text={
					'Here Ionut testing wall post card component in a Storybook' +
					'\nMonday morning with 18 deg.' +
					'\nAnd this is the third line of the post. Next with an URL' +
					'\nhttps://socialx.network @user11 #hashTagText'
				}
				fullTextVisible={fullTextVisible}
				toggleShowFullText={() => console.log('toggleShowFullText')}
				handleHashTag={(hashTag: string) => console.log('handleHashTag', hashTag)}
				handleUserTag={(userTag: string) => console.log('handleUserTag', userTag)}
				launchExternalUrl={(url: string) => console.log('launchExternalUrl', url)}
			/>
		);
	});
