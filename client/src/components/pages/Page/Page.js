import React from 'react';


class Page extends React.Component {

	render() {
		const { page, settings, slug, loading } = this.props;
		const headerImageUrl = '/images/apotheosis_homer.jpg';

		if (loading) {
			return (
				<LoadingPage />
			);
		} else if (!loading && !page) {
			return (
				<NotFound
					isTest={slug === '__test__'}
				/>
			);
		}

		if (page && page.title) {
			Utils.setTitle(`${page.title} | ${settings.title}`);
		}
		if (headerImageUrl) {
			Utils.setMetaImage(headerImageUrl);
		}

		return (
			// todo: return 404 if !page.length
			<div className={`page page-${slug} content primary`}>

				<section className="block header header-page cover parallax">
					<BackgroundImageHolder
						imgSrc="/images/apotheosis_homer.jpg"
					/>

					<div className="container v-align-transform">
						<div className="grid inner">
							<div className="center-content">
								<div className="page-title-wrap">
									<h1 className="page-title">
										{page.title}
									</h1>
									<h2>
										{page.subtitle}
									</h2>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="page-content container">
					{page.byline ?
						<div className="page-byline">
							<h3>
								{page.byline}
							</h3>
						</div>
						: ''}
					<div dangerouslySetInnerHTML={{ __html: page.content }} />
				</section>
			</div>
		);
	}
}

Page.propTypes = {
	slug: React.PropTypes.string,
	page: React.PropTypes.object,
	ready: React.PropTypes.bool,
	images: React.PropTypes.array,
	thumbnails: React.PropTypes.array,
	loading: React.PropTypes.bool,
	settings: React.PropTypes.object,
};

export default Page;
