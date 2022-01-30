export function postDataTidier(data) {

    console.log(data);

    const listData = data.data.children;

    console.log(listData);

    const Postdata = [];

    listData.forEach(post => {
        const formatedPost = {
            title: post.data.title,
            id: post.data.id,
            body: post.data.selftext,
        }

        if (post.data.thumbnail.startsWith("http")) {
            formatedPost.image = post.data.thumbnail;
        }

        Postdata.push(formatedPost);
        
    });

    return Postdata;
}