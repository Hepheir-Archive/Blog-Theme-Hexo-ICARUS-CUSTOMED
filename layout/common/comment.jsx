const logger = require('hexo-log')();
const { Component, Fragment } = require('inferno');
const view = require('hexo-component-inferno/lib/core/view');

module.exports = class extends Component {
    render() {
        const { config, page, helper } = this.props;
        const { __, url_for } = helper;
        const { comment } = config;
        if (!comment || typeof comment.type !== 'string') {
            return null;
        }

        return <Fragment>
            {/* FACEBOOK COMMENT */}
            <div class="card">
                <div class="card-content">
                    <div id="fb-root"></div>
                    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v8.0" nonce="HYHs3HqL"></script>
                    <div class="fb-comments" data-href={config.url + url_for(page.link || page.path)} data-numposts="5" data-width=""></div>
                </div>
            </div>
        </Fragment>;
        // return <div class="card">
        //     <div class="card-content">
        //         <h3 class="title is-5">{__('article.comments')}</h3>
        //         {(() => {
        //             try {
        //                 let Comment = view.require('comment/' + comment.type);
        //                 Comment = Comment.Cacheable ? Comment.Cacheable : Comment;
        //                 return <Comment config={config} page={page} helper={helper} comment={comment} />;
        //             } catch (e) {
        //                 logger.w(`Icarus cannot load comment "${comment.type}"`);
        //                 return null;
        //             }
        //         })()}
        //     </div>
        // </div>;
    }
};
