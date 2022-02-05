import { ExamplePostList} from "../Components/fakeData";
import { postDataTidier } from "../Helpers";

const assert = require('assert');

describe('Tidying post list data', () => {});
it('ensures that the titles are text', () => {
    const tidiedData = postDataTidier(ExamplePostList);

    const title = tidiedData[0].title
    assert.ok(typeof(title) === "string")
})
it('ensures that the ids are unique', () => {
    const tidiedData = postDataTidier(ExamplePostList);

    const ids = tidiedData.map(post => post.id);
    assert.ok(new Set(ids).size === ids.length);
})
it('updates the image URL to where images can be accessed', () => {

    const tidiedData = postDataTidier(ExamplePostList);

    const image = tidiedData[2].image;
    assert.ok(image.includes("https://i.redd.it/"));
})