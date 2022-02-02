export function postDataTidier(data) {

    const listData = data.data.children;

    const Postdata = [];

    listData.forEach(post => {
        const formatedPost = {
            title: post.data.title,
            id: post.data.id,
            body: post.data.selftext,
        }

        formatedPost.image = imageExtractor(post);

        Postdata.push(formatedPost);
        
    });

    return Postdata;
}

function imageExtractor (post) {
    if (post.data.post_hint === "image") {
        const initialURL = post.data.preview.images[0].source.url;
        return initialURL.replace("https://preview.redd.it/", "https://i.redd.it/")
    } else if (post.data.thumbnail.startsWith("http")) {
        return post.data.thumbnail;
    } else {
        return "";
    }
}