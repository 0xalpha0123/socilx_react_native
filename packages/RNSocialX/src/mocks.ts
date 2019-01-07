import {
	FRIEND_TYPES,
	ICurrentUser,
	ITransactionData,
	ITrendingCategoriesItem,
	ITrendingContentItem,
	IUserEntry,
	IWallPost,
	MediaTypeImage,
	MediaTypeVideo,
	TransactionType,
} from './types';

import { CoinSymbol, TransactionFromType, TransactionSymbol } from './environment/consts';

import dictionary from './store/app/i18n/data/dictionary.en';
import { getText } from './store/app/i18n/helpers';

export const getTextMock = (key: string, ...args: Array<string | number>) => {
	return getText(dictionary, key, ...args);
};

const avatar =
	'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&h=350';

const topCommentIds = ['topCommentId1', 'topCommentId2'];

export const suggestedItems: IUserEntry[] = [
	{
		userId: '101',
		avatar: 'https://lifehacks.io/wp-content/uploads/21-Questions-to-ask-a-guy.jpg',
		fullName: 'Seth Saunders',
		userName: 'sethsaunders',
		relationship: FRIEND_TYPES.NOT_FRIEND,
	},
	{
		userId: '102',
		avatar:
			'https://static1.squarespace.com/static/5717fbc72eeb81a7600203c4/t/57361baa45bf2122c02109d3/1463163822530/teresa-ting-104-WEB.jpg',
		fullName: 'Teresa Lamb',
		userName: 'terlamb',
		relationship: FRIEND_TYPES.NOT_FRIEND,
	},
	{
		userId: '103',
		avatar:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxxOvVEmfKWgIxdz1Xvd0zTKY4oHlC8E709FF91o5FMTirI2T',
		fullName: 'Sophie Smith',
		userName: 'sophsmt',
		relationship: FRIEND_TYPES.MUTUAL,
	},
	{
		userId: '104',
		avatar:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlhQDjvfpOkYBNz_sFX6egUWv-tKgr9iwb9S0ECK5Ll8C-I9Oj',
		fullName: 'Cory Maxwell',
		userName: 'corymaxwell',
		relationship: FRIEND_TYPES.PENDING,
	},
	{
		userId: '105',
		avatar:
			'https://yt3.ggpht.com/a-/AN66SAyxvKvpstRZN6-LzcuggRm6kEQs-lKW5cOg6g=s900-mo-c-c0xffffffff-rj-k-no',
		fullName: 'Claudia Kulmitzer',
		userName: 'claudiam',
		relationship: FRIEND_TYPES.NOT_FRIEND,
	},
];

export const posts: IWallPost[] = [
	{
		postId: '1',
		postText: 'Lorem ipsum dolor sit amet.',
		location: 'Dolor',
		taggedFriends: [{ fullName: 'Lorem' }, { fullName: 'Ipsum' }],
		timestamp: new Date(Date.now()),
		owner: {
			userId: 'testgggg',
			fullName: 'Test GGGG',
			avatar,
		},
		numberOfSuperLikes: 0,
		numberOfComments: 1,
		numberOfWalletCoins: 0,
		likedByCurrentUser: false,
		removable: false,
		media: {
			objects: [
				{
					hash: '131289fsdf03yr9hehdiwb32',
					type: MediaTypeVideo,
					extension: 'mp4',
					size: 51231,
				},
			],
			postId: '1',
		},
		likeIds: ['likeId1', 'likeId2'],
		commentIds: [],
		topCommentIds,
		loading: false,
		suggested: undefined,
		offensiveContent: false,
	},
	{
		postId: '2',
		postText: 'Lorem ipsum dolor sit amet.',
		location: 'Dolor',
		taggedFriends: [{ fullName: 'Lorem' }, { fullName: 'Ipsum' }],
		timestamp: new Date(Date.now()),
		owner: {
			userId: 'testgggg',
			fullName: 'Test GGGG',
			avatar,
		},
		numberOfSuperLikes: 0,
		numberOfComments: 1,
		numberOfWalletCoins: 0,
		likedByCurrentUser: false,
		removable: false,
		media: {
			objects: [
				{
					hash: '131289fsdf03yr9hehdiwb32',
					type: MediaTypeVideo,
					extension: 'mp4',
					size: 51231,
				},
			],
			postId: '2',
		},
		likeIds: ['likeId1', 'likeId2'],
		commentIds: [],
		topCommentIds,
		loading: false,
		suggested: suggestedItems,
		offensiveContent: true,
	},
	{
		postId: '3',
		postText: 'Lorem ipsum dolor sit amet.',
		location: 'Dolor',
		taggedFriends: [{ fullName: 'Lorem' }, { fullName: 'Ipsum' }],
		timestamp: new Date(Date.now()),
		owner: {
			userId: 'testgggg',
			fullName: 'Test GGGG',
			avatar,
		},
		numberOfSuperLikes: 0,
		numberOfComments: 1,
		numberOfWalletCoins: 0,
		likedByCurrentUser: false,
		removable: false,
		media: {
			objects: [
				{
					hash: '131289fsdf03yr9hehdiwb32',
					type: MediaTypeVideo,
					extension: 'mp4',
					size: 51231,
				},
			],
			postId: '3',
		},
		likeIds: ['likeId1', 'likeId2'],
		commentIds: [],
		topCommentIds,
		loading: false,
		suggested: undefined,
		offensiveContent: false,
	},
];

export const currentUser: ICurrentUser = {
	userId: '999',
	avatar,
	fullName: 'Test GGGG',
	userName: 'testgggg',
	email: 'testgggg@test.com',
	description: 'Lorem ipsum dolor sit amet',
	pub: 'rPZqFYcR01E81UiAtzkY0tV2LmxnNHtQG-UwqfvxLyQ.4Xc5xwCqzFaEOJpu7ftadiXXQLE7sbm7ETs23lzC96E',
	miningEnabled: false,
	shareDataEnabled: true,
	numberOfLikes: 25,
	numberOfPhotos: 1,
	numberOfFriends: 2,
	numberOfComments: 87,
	media: {
		objects: [
			{
				hash: '131289fsdf03yr9hehdiwb32',
				type: MediaTypeVideo,
				extension: 'mp4',
				size: 51231,
			},
		],
		postId: '3',
	},
	recentPosts: posts,
};

const CATEGORY_IMAGE_URL =
	'https://images.ctfassets.net/o59xlnp87tr5/nywabPmH5Y6W4geG8IYuk/0a59905671f8d637350df8e7ec9e7fb9/backgrounds-min.jpg?w=360&h=240&fit=fill';
export const trendingCategoriesItems: ITrendingCategoriesItem[] = [
	{
		id: '1',
		name: 'For you',
		url: CATEGORY_IMAGE_URL,
	},
	{
		id: '2',
		name: 'Cars',
		url: CATEGORY_IMAGE_URL,
	},
	{
		id: '3',
		name: 'Food',
		url: CATEGORY_IMAGE_URL,
	},
	{
		id: '4',
		name: 'Music',
		url: CATEGORY_IMAGE_URL,
	},
	{
		id: '5',
		name: 'Fashion',
		url: CATEGORY_IMAGE_URL,
	},
	{
		id: '6',
		name: 'Whatever',
		url: CATEGORY_IMAGE_URL,
	},
];

const CONTENT_IMAGE_URL = 'https://www.w3schools.com/w3css/img_lights.jpg';
const VIDEO_URL = 'http://techslides.com/demos/sample-videos/small.mp4';
const VIDEO_PLACEHOLDER = 'https://www.w3schools.com/w3images/fjords.jpg';
export const trendingContentItems: ITrendingContentItem[] = [
	{
		name: 'For you',
		content: [
			[
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Video', url: VIDEO_PLACEHOLDER, postId: '1875' },
			],
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			[
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Video', url: VIDEO_PLACEHOLDER, postId: '1875' },
			],
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
		],
	},
	{
		name: 'Cars',
		content: [
			[
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Video', url: VIDEO_PLACEHOLDER, postId: '1875' },
			],
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			[
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Video', url: VIDEO_PLACEHOLDER, postId: '1875' },
			],
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
		],
	},
	{
		name: 'Food',
		content: [
			[
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Video', url: VIDEO_PLACEHOLDER, postId: '1875' },
			],
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			[
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Video', url: VIDEO_PLACEHOLDER, postId: '1875' },
			],
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
		],
	},
	{
		name: 'Music',
		content: [
			[
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Video', url: VIDEO_PLACEHOLDER, postId: '1875' },
			],
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			[
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Video', url: VIDEO_PLACEHOLDER, postId: '1875' },
			],
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
		],
	},
	{
		name: 'Fashion',
		content: [
			[
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Video', url: VIDEO_PLACEHOLDER, postId: '1875' },
			],
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			[
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Video', url: VIDEO_PLACEHOLDER, postId: '1875' },
			],
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
		],
	},
	{
		name: 'Whatever',
		content: [
			[
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Video', url: VIDEO_PLACEHOLDER, postId: '1875' },
			],
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			[
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
				{ type: 'Video', url: VIDEO_PLACEHOLDER, postId: '1875' },
			],
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875', middle: true },
			{ type: 'Image', url: CONTENT_IMAGE_URL, postId: '1875' },
		],
	},
];

export const transactions: ITransactionData[] = [
	{
		id: '1',
		type: TransactionType.Bought,
		firstAmount: 23,
		firstCoin: CoinSymbol.SOCX,
		secondAmount: 0.2,
		secondCoin: CoinSymbol.ETH,
		date: new Date(2018, 2, 13),
	},
	{
		id: '2',
		type: TransactionType.Sold,
		firstAmount: 0.2,
		firstCoin: CoinSymbol.ETH,
		secondAmount: 23,
		secondCoin: CoinSymbol.SOCX,
		date: new Date(2018, 1, 17),
	},
	{
		id: '3',
		type: TransactionType.Sold,
		firstAmount: 23,
		firstCoin: CoinSymbol.SOCX,
		secondAmount: 0.2,
		secondCoin: CoinSymbol.ETH,
		date: new Date(2018, 4, 8),
	},
	{
		id: '4',
		type: TransactionType.Bought,
		firstAmount: 0.2,
		firstCoin: CoinSymbol.ETH,
		secondAmount: 23,
		secondCoin: CoinSymbol.SOCX,
		date: new Date(2018, 5, 1),
	},
	{
		id: '5',
		type: TransactionType.Sold,
		firstAmount: 0.2,
		firstCoin: CoinSymbol.ETH,
		secondAmount: 23,
		secondCoin: CoinSymbol.SOCX,
		date: new Date(2018, 11, 12),
	},
];

export const rewardsTransactions: ITransactionData[] = [
	{
		id: '1',
		type: TransactionType.Received,
		firstAmount: 23,
		firstCoin: CoinSymbol.SOCX,
		secondAmount: 0.2,
		secondCoin: CoinSymbol.ETH,
		fromType: TransactionFromType.POOL,
		date: new Date(2018, 2, 13),
	},
	{
		id: '2',
		type: TransactionType.Received,
		firstAmount: 0.2,
		firstCoin: CoinSymbol.ETH,
		fromType: TransactionFromType.USER,
		from: 'Snowman',
		secondAmount: 23,
		secondCoin: CoinSymbol.SOCX,
		date: new Date(2018, 1, 17),
	},
	{
		id: '3',
		type: TransactionType.Received,
		firstAmount: +23,
		firstCoin: CoinSymbol.SOCX,
		secondAmount: +0.2,
		secondCoin: CoinSymbol.ETH,
		date: new Date(2018, 4, 8),
	},
	{
		id: '4',
		type: TransactionType.Sent,
		firstAmount: -0.2,
		firstCoin: CoinSymbol.ETH,
		transactionIcon: TransactionSymbol.SENT,
		date: new Date(2018, 5, 1),
	},
	{
		id: '5',
		type: TransactionType.Converted,
		firstAmount: 0.2,
		firstCoin: CoinSymbol.ETH,
		transactionIcon: TransactionSymbol.CONVERTED,
		secondAmount: -23,
		secondCoin: CoinSymbol.SOCX,
		date: new Date(2018, 11, 12),
	},
	{
		id: '6',
		type: TransactionType.Converted,
		firstAmount: 11.2,
		firstCoin: CoinSymbol.SOCX,
		transactionIcon: TransactionSymbol.CONVERTED,
		secondAmount: -40,
		secondCoin: CoinSymbol.ETH,
		date: new Date(2018, 12, 25),
	},
];
