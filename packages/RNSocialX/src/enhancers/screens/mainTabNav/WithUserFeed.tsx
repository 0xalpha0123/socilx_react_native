/**
 * TODO list:
 * 1. Props actions: blockUser, reportProblem
 */

import * as React from 'react';

import { FEED_TYPES } from '../../../environment/consts';
import { currentUser, posts } from '../../../mocks';
import {
	ICurrentUser,
	IDotsMenuProps,
	IGlobal,
	INavigationParamsActions,
	ITranslatedProps,
	IWallPostCardData,
} from '../../../types';
import { getActivity, mapPostsForUI } from '../../helpers';

import { ActionTypes } from '../../../store/data/posts/Types';
import { IError } from '../../../store/ui/activities';
import { WithConfig } from '../../connectors/app/WithConfig';
import { WithI18n } from '../../connectors/app/WithI18n';
import { WithNavigationParams } from '../../connectors/app/WithNavigationParams';
import { WithPosts } from '../../connectors/data/WithPosts';
import { WithProfiles } from '../../connectors/data/WithProfiles';
import { WithActivities } from '../../connectors/ui/WithActivities';
import { WithGlobals } from '../../connectors/ui/WithGlobals';
import { WithOverlays } from '../../connectors/ui/WithOverlays';
import { WithCurrentUser } from '../intermediary';

const mock: IWithUserFeedEnhancedProps = {
	data: {
		currentUser,
		posts,
		canLoadMorePosts: false,
		refreshingFeed: false,
		loadingMorePosts: false,
		errors: [],
	},
	actions: {
		loadMorePosts: () => undefined,
		refreshFeed: (feed: FEED_TYPES) => undefined,
		likePost: (postId: string) => undefined,
		unlikePost: (postId: string) => undefined,
		postComment: (escapedComment: string, postId: string) => undefined,
		blockUser: (userId: string) => undefined,
		reportProblem: (reason: string, description: string) => undefined,
		deletePost: (postId: string) => undefined,
		setGlobal: (global: IGlobal) => undefined,
		setNavigationParams: () => undefined,
		showDotsMenuModal: (items) => undefined,
		getText: (value: string, ...args: any[]) => value,
	},
};

export interface IWithUserFeedEnhancedData {
	currentUser: ICurrentUser;
	posts: IWallPostCardData[];
	canLoadMorePosts: boolean;
	refreshingFeed: boolean;
	loadingMorePosts: boolean;
	errors: IError[];
}

export interface IWithUserFeedEnhancedActions
	extends ITranslatedProps,
		IDotsMenuProps,
		INavigationParamsActions {
	loadMorePosts: () => void;
	refreshFeed: (feed: FEED_TYPES) => void;
	likePost: (postId: string) => void;
	unlikePost: (postId: string) => void;
	deletePost: (postId: string) => void;
	postComment: (escapedComment: string, postId: string) => void;
	blockUser: (userId: string) => void;
	reportProblem: (reason: string, description: string) => void;
	setGlobal: (global: IGlobal) => void;
}

interface IWithUserFeedEnhancedProps {
	data: IWithUserFeedEnhancedData;
	actions: IWithUserFeedEnhancedActions;
}

interface IWithUserFeedProps {
	children(props: IWithUserFeedEnhancedProps): JSX.Element;
}

interface IWithUserFeedState {}

export class WithUserFeed extends React.Component<
	IWithUserFeedProps,
	IWithUserFeedState
> {
	render() {
		return (
			<WithI18n>
				{({ getText }) => (
					<WithConfig>
						{({ appConfig }) => (
							<WithNavigationParams>
								{({ setNavigationParams }) => (
									<WithOverlays>
										{({ showOptionsMenu }) => (
											<WithGlobals>
												{({ setGlobal, globals }) => (
													<WithActivities>
														{({ activities, errors }) => (
															<WithProfiles>
																{({ profiles }) => (
																	<WithPosts>
																		{(postsProps) => (
																			<WithCurrentUser>
																				{(currentUserProps) => {
																					const user = currentUserProps.currentUser!;

																					let feedPosts: IWallPostCardData[] = [];
																					if (postsProps.posts.length > 0) {
																						feedPosts = mapPostsForUI(
																							postsProps.posts,
																							10,
																							user,
																							profiles,
																							activities,
																							ActionTypes.GET_POSTS_BY_USER,
																							appConfig,
																						);
																					}

																					return this.props.children({
																						data: {
																							...mock.data,
																							currentUser: user,
																							posts: feedPosts,
																							canLoadMorePosts:
																								globals.canLoadMorePosts,
																							loadingMorePosts: getActivity(
																								activities,
																								ActionTypes.LOAD_MORE_POSTS,
																							),
																							refreshingFeed: getActivity(
																								activities,
																								ActionTypes.GET_PUBLIC_POSTS_BY_DATE,
																							),
																							errors,
																						},
																						actions: {
																							...mock.actions,
																							loadMorePosts:
																								postsProps.loadMorePosts,
																							refreshFeed: async () => {
																								await postsProps.resetPostsAndRefetch();
																							},
																							likePost: async (postId) => {
																								await postsProps.likePost({
																									postId,
																								});
																							},
																							unlikePost: async (postId) => {
																								await postsProps.unlikePost({
																									postId,
																								});
																							},
																							deletePost: async (postId) => {
																								await postsProps.removePost({
																									postId,
																								});
																							},
																							postComment: async (
																								text,
																								postId,
																							) => {
																								await postsProps.createComment({
																									text,
																									postId,
																								});
																							},
																							showDotsMenuModal: (items) =>
																								showOptionsMenu({ items }),
																							setNavigationParams,
																							setGlobal,
																							getText,
																						},
																					});
																				}}
																			</WithCurrentUser>
																		)}
																	</WithPosts>
																)}
															</WithProfiles>
														)}
													</WithActivities>
												)}
											</WithGlobals>
										)}
									</WithOverlays>
								)}
							</WithNavigationParams>
						)}
					</WithConfig>
				)}
			</WithI18n>
		);
	}
}
